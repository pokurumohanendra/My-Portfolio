import Reveal from "./Reveal";
import { sectionNumber } from "../../data/navigation";

/** SectionHeading — auto-numbered eyebrow, serif title, optional intro. */
export default function SectionHeading({ id, title, subtitle }) {
  return (
    <Reveal className="mb-12 md:mb-16 max-w-2xl">
      <p className="eyebrow mb-3">
        <span className="eyebrow-accent">{sectionNumber(id)}</span> / {title}
      </p>
      <h2 id={`${id}-title`} className="text-3xl sm:text-4xl text-ink">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-ink-2 text-lg leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}
