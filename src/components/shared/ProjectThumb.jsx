/**
 * ProjectThumb — screenshot when one exists, otherwise a typographic
 * placeholder (used for private/production work with no public preview).
 */
export default function ProjectThumb({ project, className = "" }) {
  return (
    <div className={`thumb ${className}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} homepage preview`}
          loading="lazy"
          width="1280"
          height="800"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="font-serif text-3xl text-accent">{project.title}</span>
          <span className="eyebrow">
            {project.type === "Production" ? "Private, production" : "Preview unavailable"}
          </span>
        </div>
      )}
    </div>
  );
}
