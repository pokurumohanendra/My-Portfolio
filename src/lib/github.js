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
 * Public, non-fork, non-archived repositories, most recently updated first.
 * Uses the cached Netlify endpoint first and GitHub's public API as a fallback.
 */
export async function fetchRepos(username, signal) {
  const sources = [
    "/.netlify/functions/github-repos",
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`,
  ];
  let repos;

  for (const url of sources) {
    try {
      const res = await fetch(url, { signal, headers: { Accept: "application/vnd.github+json" } });
      if (!res.ok) continue;
      repos = await res.json();
      if (Array.isArray(repos)) break;
    } catch (error) {
      if (signal?.aborted || (error instanceof Error && error.name === "AbortError")) throw error;
    }
  }

  if (!Array.isArray(repos)) throw new Error("GitHub activity is unavailable");
  return repos
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
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
