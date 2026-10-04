import Reveal from "../shared/Reveal";

/** RowItem — a dated row: meta on the left, content on the right. */
export default function RowItem({ meta, as, children }) {
  return (
    <Reveal as={as} className="row-item">
      <div>{meta}</div>
      <div>{children}</div>
    </Reveal>
  );
}
