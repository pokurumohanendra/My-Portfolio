/**
 * Badge — Small colored tag for tech stack display.
 */
export default function Badge({ children, color }) {
  return (
    <span
      className="inline-block text-xs font-medium px-3 py-1 rounded-full border"
      style={{
        background: color ? `${color}18` : "color-mix(in srgb, var(--primary) 12%, transparent)",
        borderColor: color ? `${color}40` : "color-mix(in srgb, var(--primary) 30%, transparent)",
        color: color || "var(--primary-light)",
      }}
    >
      {children}
    </span>
  );
}
