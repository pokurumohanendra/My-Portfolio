import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi2";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useEngagementStats } from "../../hooks/useEngagementStats";

function formatCount(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  return `${n}`;
}

/** Inline views / likes / shares counter, rendered in the footer. */
export default function EngagementStats() {
  const { stats, liked, toggleLike, recordShare, enabled } = useEngagementStats();
  const [notice, setNotice] = useState("");

  if (!enabled) return null;

  const handleShare = async () => {
    const outcome = await recordShare();
    if (outcome === "copied") setNotice("Link copied");
    else if (outcome === "unsupported") setNotice("Couldn't share. Copy the URL manually.");
    else return;
    setTimeout(() => setNotice(""), 2500);
  };

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-3" aria-label="Site activity">
      <span className="inline-flex items-center gap-1.5" title="Total views">
        <HiOutlineEye size={16} aria-hidden="true" />
        <span className="tabular-nums">{formatCount(stats.views)}</span> views
      </span>

      <button
        type="button"
        onClick={toggleLike}
        aria-pressed={liked}
        className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
      >
        {liked ? (
          <FaHeart size={14} className="text-accent" aria-hidden="true" />
        ) : (
          <FaRegHeart size={14} aria-hidden="true" />
        )}
        <span className="tabular-nums">{formatCount(stats.likes)}</span> {liked ? "liked" : "like"}
      </button>

      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
      >
        <FaShareAlt size={13} aria-hidden="true" />
        <span className="tabular-nums">{formatCount(stats.shares)}</span> shares
      </button>

      <span role="status" className="text-ink-2">
        {notice}
      </span>
    </div>
  );
}
