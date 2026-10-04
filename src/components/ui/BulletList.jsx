/** BulletList: dash-bulleted list used for achievements and responsibilities. */
export default function BulletList({
  items,
  compact = false,
  className = "",
  itemClassName = "text-ink-2",
}) {
  return (
    <ul className={`${compact ? "space-y-1.5" : "space-y-2.5"} ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-relaxed ${itemClassName}`}>
          <span aria-hidden="true" className="mt-3 h-px w-3 bg-gold shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
