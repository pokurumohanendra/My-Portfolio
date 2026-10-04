import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Seo from "../components/shared/Seo";
import ProjectThumb from "../components/shared/ProjectThumb";
import ArchitectureDiagram from "../components/shared/ArchitectureDiagram";
import { projects } from "../data/projects";
import { caseStudies } from "../data/caseStudies";
import { repoLinks } from "../lib/projects";

function DetailBlock({ title, children }) {
  return (
    <section className="py-8 border-t border-line first:border-t-0 first:pt-0">
      <h2 className="text-2xl text-ink mb-3">{title}</h2>
      {children}
    </section>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!project) {
    return (
      <section className="min-h-[70vh] flex items-center">
        <Seo title="Project not found" />
        <div className="wrap py-32">
          <p className="eyebrow mb-4">Not found</p>
          <h1 className="text-4xl text-ink">That project doesn't exist</h1>
          <Link to="/#projects" className="btn btn-solid mt-8">
            <FaArrowLeft size={12} aria-hidden="true" /> Back to projects
          </Link>
        </div>
      </section>
    );
  }

  const next = projects[(index + 1) % projects.length];
  const study = caseStudies[project.id];
  const repos = repoLinks(project);

  const textSections = [
    { title: "Overview", content: project.description },
    { title: "Problem", content: project.problem },
    { title: "Solution", content: project.solution },
  ].filter((s) => s.content);

  const closingSections = [
    { title: "Challenges", content: project.challenges },
    { title: "What I learned", content: project.learnings },
    { title: "Next steps", content: project.futureImprovements },
  ].filter((s) => s.content);

  return (
    <article className="pt-28 pb-20 md:pt-36">
      <Seo title={project.title} description={project.shortDesc} />
      <div className="wrap">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-accent transition-colors"
        >
          <FaArrowLeft size={11} aria-hidden="true" /> All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="eyebrow mb-3">
            <span className="eyebrow-accent">{project.type}</span> · {project.category} ·{" "}
            {project.year}
          </p>
          <h1 className="text-4xl sm:text-6xl text-ink">{project.title}</h1>
          <p className="mt-5 text-xl text-ink-2 leading-relaxed">{project.shortDesc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <Button href={project.demo} target="_blank">
                Visit live site <FaExternalLinkAlt size={11} aria-hidden="true" />
              </Button>
            )}
            {repos.map((r) => (
              <Button key={r.url} href={r.url} target="_blank" variant="line">
                <FaGithub size={14} aria-hidden="true" /> {r.label}
              </Button>
            ))}
          </div>
          {project.demo && project.demoNote && (
            <p className="mt-3 text-sm text-ink-3">{project.demoNote}</p>
          )}
        </header>

        <ProjectThumb project={project} className="mt-12 max-w-4xl" />

        {project.highlights && (
          <ul className="mt-10 grid gap-px sm:grid-cols-3 max-w-4xl border border-line bg-line rounded-lg overflow-hidden">
            {project.highlights.map((h) => (
              <li key={h} className="bg-surface p-5 text-ink font-medium">
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-20">
          <div className="min-w-0">
            {textSections.map((s) => (
              <DetailBlock key={s.title} title={s.title}>
                <p className="text-ink-2 leading-relaxed max-w-2xl">{s.content}</p>
              </DetailBlock>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <h2 className="eyebrow mb-3">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </aside>
        </div>

        {study?.architecture && (
          <section className="mt-4 py-8 border-t border-line">
            <h2 className="text-2xl text-ink mb-5">Architecture</h2>
            <ArchitectureDiagram
              label={`${project.title} architecture`}
              stages={study.architecture.stages}
              caption={study.architecture.caption}
            />
          </section>
        )}

        <div className="max-w-3xl min-w-0">
          {study?.decisions && (
            <DetailBlock title="Key decisions">
              <ul className="space-y-5 max-w-2xl">
                {study.decisions.map((d) => (
                  <li key={d.title}>
                    <h3 className="text-lg text-ink">{d.title}</h3>
                    <p className="mt-1 text-ink-2 leading-relaxed">{d.detail}</p>
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {closingSections.map((s) => (
            <DetailBlock key={s.title} title={s.title}>
              <p className="text-ink-2 leading-relaxed max-w-2xl">{s.content}</p>
            </DetailBlock>
          ))}
        </div>

        <nav
          aria-label="More projects"
          className="mt-20 pt-8 border-t border-line flex items-center justify-between gap-4"
        >
          <Link to="/#projects" className="link text-sm">
            Back to all projects
          </Link>
          <Link to={`/projects/${next.id}`} className="text-right group">
            <span className="eyebrow block">Next project</span>
            <span className="font-serif text-xl text-ink group-hover:text-accent transition-colors">
              {next.title} →
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
