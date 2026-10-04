import { siteConfig } from "../config/site.config";

/** "https://github.com/someone" -> "someone" */
export const githubUsername = () => {
  try {
    return new URL(siteConfig.social.github).pathname.split("/").filter(Boolean)[0] || "";
  } catch {
    return "";
  }
};

/**
 * Public, non-fork, non-archived repositories (minus any in siteConfig.hiddenRepos),
 * most recently pushed first.
 * Uses GitHub's unauthenticated REST API (60 requests/hour per visitor IP).
 */
export async function fetchRepos(username, signal) {
  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=pushed`,
    { signal, headers: { Accept: "application/vnd.github+json" } },
  );
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
  const hidden = new Set((siteConfig.hiddenRepos ?? []).map((n) => n.toLowerCase()));
  const repos = await res.json();
  return repos
    .filter((r) => !r.fork && !r.archived && !hidden.has(r.name.toLowerCase()))
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
}

const relativeFormat = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

/** "3 days ago", "last month", ... */
export function timeAgo(iso, now = Date.now()) {
  const days = Math.round((new Date(iso).getTime() - now) / 86_400_000);
  if (Math.abs(days) < 1) return "today";
  if (Math.abs(days) < 30) return relativeFormat.format(days, "day");
  if (Math.abs(days) < 365) return relativeFormat.format(Math.round(days / 30), "month");
  return relativeFormat.format(Math.round(days / 365), "year");
}

/** Languages across a list of repos, most common first. */
export function languageCounts(repos) {
  const counts = new Map();
  repos.forEach((r) => r.language && counts.set(r.language, (counts.get(r.language) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}
