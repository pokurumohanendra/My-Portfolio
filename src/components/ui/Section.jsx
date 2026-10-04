import SectionHeading from "../shared/SectionHeading";

/** Section — wrapper that renders the numbered heading and consistent spacing. */
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <SectionHeading id={id} title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
}
