import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Section from "../ui/Section";
import Badge from "../ui/Badge";
import ExternalLink from "../ui/ExternalLink";
import Reveal from "../shared/Reveal";
import ProjectThumb from "../shared/ProjectThumb";
import { useProjectFilter } from "../../hooks/useProjectFilter";
import { projectsMatching, repoLinks } from "../../lib/projects";
import GitHubActivity from "../shared/GitHubActivity";

const FILTERS = ["All", "Production", "Personal"];
const MAX_TAGS = 5;

function ProjectRow({ project }) {
  const detailsPath = `/projects/${project.id}`;

  return (
    <li className="group border-b border-line">
      <div className="grid gap-x-8 gap-y-5 py-7 md:grid-cols-[14rem_1fr_auto]">
        <Link to={detailsPath} tabIndex={-1} aria-hidden="true" className="block">
          <ProjectThumb project={project} />
        </Link>

        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-2xl text-ink">
              <Link to={detailsPath} className="group-hover:text-accent transition-colors">
                {project.title}
              </Link>
            </h3>
            <span className="eyebrow eyebrow-accent">{project.type}</span>
          </div>
          <p className="mt-2 text-ink-2 max-w-2xl">{project.shortDesc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, MAX_TAGS).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.techStack.length > MAX_TAGS && (
              <Badge>+{project.techStack.length - MAX_TAGS}</Badge>
            )}
          </div>
        </div>

        <div className="flex md:flex-col md:items-end justify-between gap-3 text-sm">
          <span className="font-mono text-ink-3">{project.year}</span>
          <div className="flex flex-wrap items-center md:justify-end gap-x-4 gap-y-1">
            {repoLinks(project).map((r, _, all) => (
              <ExternalLink key={r.url} href={r.url} className="link">
                {all.length > 1 ? r.label : "Code"}
              </ExternalLink>
            ))}
            {project.demo && (
              <ExternalLink href={project.demo} className="link inline-flex items-center gap-1.5">
                Live <FaExternalLinkAlt size={10} aria-hidden="true" />
              </ExternalLink>
            )}
            <Link to={detailsPath} className="link">
              Details →
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const { type, setType, query, setQuery } = useProjectFilter();
  const searchRef = useRef(null);

  // Press "/" anywhere (outside a field) to jump to the search box.
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(
    () => projectsMatching(query).filter((p) => type === "All" || p.type === type),
    [type, query],
  );

  const reset = () => {
    setQuery("");
    setType("All");
  };

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Production work from NearEstate, plus the personal projects I built while learning."
    >
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-2">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={type === f}
              onClick={() => setType(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="field md:w-72">
          <label htmlFor="project-search" className="sr-only">
            Search projects by name or technology
          </label>
          <input
            id="project-search"
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name or tech  ( / )"
          />
        </div>
      </Reveal>

      <p className="text-sm text-ink-3 mb-2" role="status" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {query.trim() && ` matching "${query.trim()}"`}
      </p>

      {filtered.length > 0 ? (
        <ul className="border-t border-line">
          {filtered.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </ul>
      ) : (
        <div className="py-16 border-t border-line">
          <p className="text-ink-2">No projects match your filters.</p>
          <button onClick={reset} className="link mt-3 text-sm">
            Clear filters
          </button>
        </div>
      )}

      <GitHubActivity />
    </Section>
  );
}
