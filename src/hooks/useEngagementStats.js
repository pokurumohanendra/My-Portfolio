import { useCallback, useEffect, useRef, useState } from "react";
import { isSupabaseConfigured, loadSupabase } from "../lib/supabaseConfig";

const ROW_ID = 1;
const VIEWED_KEY = "engagement:viewed";
const LIKED_KEY = "engagement:liked";

const initialStats = { views: 0, likes: 0, shares: 0 };

/**
 * Live views/likes/shares for the whole site, backed by a single-row
 * Supabase table. All writes go through RPCs (see supabase/schema.sql)
 * that move a counter by exactly 1; the client never sends raw values.
 * A postgres_changes subscription keeps every open tab/visitor in sync.
 * The Supabase library is loaded on demand, only when it is configured.
 */
export function useEngagementStats() {
  const [stats, setStats] = useState(initialStats);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const likeInFlight = useRef(false);

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    setLiked(localStorage.getItem(LIKED_KEY) === "1");

    let cancelled = false;
    let client = null;
    let channel = null;

    (async () => {
      client = await loadSupabase();
      if (cancelled || !client) return;

      const { data, error } = await client
        .from("site_engagement")
        .select("views, likes, shares")
        .eq("id", ROW_ID)
        .single();

      if (!cancelled && !error && data) setStats(data);
      if (!cancelled) setLoading(false);

      if (!error && sessionStorage.getItem(VIEWED_KEY) !== "1") {
        sessionStorage.setItem(VIEWED_KEY, "1");
        await client.rpc("increment_views");
      }

      if (cancelled) return;
      channel = client
        .channel("site-engagement-live")
        .on(
          "postgres_changes",
          { event: "UPDATE", schema: "public", table: "site_engagement", filter: `id=eq.${ROW_ID}` },
          (payload) => setStats(payload.new),
        )
        .subscribe();
    })();

    return () => {
      cancelled = true;
      if (client && channel) client.removeChannel(channel);
    };
  }, []);

  const toggleLike = useCallback(async () => {
    if (!isSupabaseConfigured || likeInFlight.current) return;
    likeInFlight.current = true;

    const nextLiked = !liked;
    setLiked(nextLiked);
    setStats((s) => ({ ...s, likes: Math.max(0, s.likes + (nextLiked ? 1 : -1)) }));

    const client = await loadSupabase();
    const { error } = await client.rpc(nextLiked ? "increment_likes" : "decrement_likes");
    if (error) {
      setLiked(!nextLiked);
      setStats((s) => ({ ...s, likes: Math.max(0, s.likes + (nextLiked ? -1 : 1)) }));
    } else {
      localStorage.setItem(LIKED_KEY, nextLiked ? "1" : "0");
    }

    likeInFlight.current = false;
  }, [liked]);

  const recordShare = useCallback(async () => {
    if (!isSupabaseConfigured) return "unsupported";

    const shareData = {
      title: document.title,
      text: "Check out this portfolio",
      url: window.location.href,
    };

    let outcome = "copied";
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        outcome = "shared";
      } catch (err) {
        if (err?.name === "AbortError") return "cancelled";
        outcome = "copied";
      }
    }

    if (outcome === "copied") {
      try {
        await navigator.clipboard.writeText(shareData.url);
      } catch {
        return "unsupported";
      }
    }

    setStats((s) => ({ ...s, shares: s.shares + 1 }));
    const client = await loadSupabase();
    await client.rpc("increment_shares");
    return outcome;
  }, []);

  return { stats, liked, loading, toggleLike, recordShare, enabled: isSupabaseConfigured };
}
