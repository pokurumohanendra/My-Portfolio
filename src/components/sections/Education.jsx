import Section from "../ui/Section";
import RowItem from "../ui/RowItem";
import BulletList from "../ui/BulletList";
import InstitutionMark from "../ui/InstitutionMark";
import { education } from "../../data/education";

// Most recent first, to match the experience section.
const ordered = [...education].reverse();

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="The academic foundation behind the engineering."
    >
      {ordered.map((item) => (
        <RowItem key={item.id} meta={<p className="font-mono text-sm text-ink-2">{item.year}</p>}>
          <div className="group flex gap-4">
            <InstitutionMark logo={item.logo} mark={item.mark} name={item.institution} />

            <div className="min-w-0">
              <h3 className="text-xl text-ink">{item.degree}</h3>
              <p className="mt-1 text-ink-2">{item.institution}</p>
              <p className="mt-1 text-sm text-ink-3">
                {[item.location, item.grade].filter(Boolean).join(" · ")}
              </p>

              {item.description && (
                <p className="mt-4 text-ink-2 max-w-2xl">{item.description}</p>
              )}

              {item.achievements?.length > 0 && (
                <BulletList
                  items={item.achievements}
                  compact
                  className="mt-4"
                  itemClassName="text-sm text-ink-2"
                />
              )}
            </div>
          </div>
        </RowItem>
      ))}
    </Section>
  );
}
