import Section from "../ui/Section";
import RowItem from "../ui/RowItem";
import Badge from "../ui/Badge";
import { timeline } from "../../data/timeline";

export default function Journey() {
  return (
    <Section
      id="journey"
      title="Learning journey"
      subtitle="How I moved from electronics engineering to full stack development, and kept learning along the way."
    >
      <ol>
        {timeline.map((item) => (
          <RowItem
            as="li"
            key={item.id}
            meta={<p className="font-mono text-sm text-ink-2">{item.year}</p>}
          >
            <h3 className="text-xl text-ink">{item.title}</h3>
            <p className="mt-2 text-ink-2 max-w-2xl">{item.description}</p>
            {item.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            )}
          </RowItem>
        ))}
      </ol>
    </Section>
  );
}
