import { useQuery } from "@tanstack/react-query";
import { FaGithub, FaStar } from "react-icons/fa";
import ExternalLink from "../ui/ExternalLink";
import Reveal from "./Reveal";
import { siteConfig } from "../../config/site.config";
import { fetchRepos, githubUsername, languageCounts, timeAgo } from "../../lib/github";

const SHOWN = 6;

/**
 * GitHubActivity: latest public repositories pulled live from GitHub.
 * Reserves space while loading, and renders nothing on error or when there are
 * no repos, so the page never shows a broken or empty block.
 */
export default function GitHubActivity() {
  const username = githubUsername();
  const { data: repos, isPending } = useQuery({
    queryKey: ["github-repos", username],
    queryFn: ({ signal }) => fetchRepos(username, signal),
    enabled: Boolean(username),
    staleTime: 1000 * 60 * 30,
    retry: 0,
  });

  // Reserve roughly the final height while loading so content below does not jump.
  if (isPending && username) {
    return <div aria-hidden="true" className="mt-16 min-h-[28rem] sm:min-h-[20rem]" />;
  }
  if (!repos?.length) return null;

  const languages = languageCounts(repos).slice(0, 5);

  return (
    <Reveal className="mt-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h3 className="eyebrow mb-2">Recently active on GitHub</h3>
          <p className="text-ink-2">
            <span className="font-medium text-ink">{repos.length}</span> public repositories
            {languages.length > 0 && (
              <>
                {" · "}
                {languages.map(([name, n]) => `${name} (${n})`).join(", ")}
              </>
            )}
          </p>
        </div>
        <ExternalLink href={siteConfig.social.github} className="link inline-flex items-center gap-2 text-sm">
          <FaGithub aria-hidden="true" /> View profile
        </ExternalLink>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.slice(0, SHOWN).map((repo) => (
          <li key={repo.id}>
            <ExternalLink
              href={repo.html_url}
              className="card block h-full p-5 hover:border-ink-3 transition-colors"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-ink break-all">{repo.name}</span>
                {repo.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-ink-3">
                    <FaStar aria-hidden="true" /> {repo.stargazers_count}
                  </span>
                )}
              </span>
              {repo.description && (
                <span className="mt-2 block text-sm text-ink-2 line-clamp-2">{repo.description}</span>
              )}
              <span className="mt-4 flex items-center gap-3 text-xs text-ink-3">
                {repo.language && <span className="tag">{repo.language}</span>}
                <span>Updated {timeAgo(repo.pushed_at)}</span>
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
