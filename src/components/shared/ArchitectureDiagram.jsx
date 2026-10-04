import { Fragment } from "react";

/**
 * ArchitectureDiagram: the request path as a row of stages (a column on
 * mobile). Third-party stages use a dashed border. Pure HTML and CSS, so it
 * stays crisp, themes automatically and reads well with a screen reader.
 */
export default function ArchitectureDiagram({ stages, caption, label }) {
  return (
    <figure aria-label={label}>
      <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-0">
        {stages.map((stage, i) => (
          <Fragment key={stage.title}>
            <li
              className={`flex-1 min-w-0 rounded-lg border p-4 bg-surface ${
                stage.external ? "border-dashed border-ink-3" : "border-line"
              }`}
            >
              <p className="eyebrow mb-3">{stage.title}</p>
              <ul className="space-y-3">
                {stage.nodes.map((node) => (
                  <li key={node.name}>
                    <p className="text-sm font-medium text-ink">{node.name}</p>
                    {node.note && <p className="text-xs text-ink-3 mt-0.5">{node.note}</p>}
                  </li>
                ))}
              </ul>
            </li>

            {i < stages.length - 1 && (
              <li
                aria-hidden="true"
                className="flex items-center justify-center text-accent text-xl lg:px-2 leading-none"
              >
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">→</span>
              </li>
            )}
          </Fragment>
        ))}
      </ol>
      {caption && <figcaption className="mt-3 text-sm text-ink-3">{caption}</figcaption>}
    </figure>
  );
}
