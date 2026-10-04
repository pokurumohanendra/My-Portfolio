import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Section from "../ui/Section";
import RowItem from "../ui/RowItem";
import BulletList from "../ui/BulletList";
import Badge from "../ui/Badge";
import ExternalLink from "../ui/ExternalLink";
import { experience } from "../../data/experience";

function ProjectBlock({ proj, panelId, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-line first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span>
          <span className="block font-serif text-lg text-ink group-hover:text-accent transition-colors">
            {proj.name}
          </span>
          <span className="block text-sm text-ink-3">{proj.tag}</span>
        </span>
        <HiChevronDown
          size={20}
          aria-hidden="true"
          className={`shrink-0 text-ink-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div id={panelId} className="pb-6">
          <BulletList items={proj.points} className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {proj.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Production applications I've helped build and ship."
    >
      {experience.map((item) => (
        <RowItem
          key={item.id}
          meta={
            <>
              <p className="font-mono text-sm text-ink-2">{item.duration}</p>
              {item.location && <p className="text-sm text-ink-3 mt-1">{item.location}</p>}
            </>
          }
        >
          <h3 className="text-2xl text-ink">{item.role}</h3>
          <p className="mt-1 text-ink-2">
            {item.companyUrl ? (
              <ExternalLink href={item.companyUrl}>{item.company}</ExternalLink>
            ) : (
              item.company
            )}
          </p>
          {item.summary && <p className="mt-4 text-ink-2 max-w-2xl">{item.summary}</p>}

          <div className="mt-6 border-y border-line">
            {item.projects.map((proj, i) => (
              <ProjectBlock
                key={proj.name}
                proj={proj}
                panelId={`exp-${item.id}-${i}`}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </RowItem>
      ))}
    </Section>
  );
}
