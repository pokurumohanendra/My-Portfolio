/**
 * InstitutionMark: a fixed-size badge for a school or college.
 * Shows the logo in its original colours, or a short text mark when there
 * is no logo, so every row lines up.
 */
export default function InstitutionMark({ logo, mark, name }) {
  return (
    <div
      className="shrink-0 w-12 h-12 rounded-lg border border-line bg-white flex items-center justify-center overflow-hidden"
      role="img"
      aria-label={logo ? `${name} logo` : `${name} (${mark})`}
    >
      {logo ? (
        <img
          src={logo}
          alt=""
          width="40"
          height="40"
          loading="lazy"
          className="w-10 h-10 object-contain"
        />
      ) : (
        <span className="font-mono text-[10px] tracking-tight text-neutral-700" aria-hidden="true">
          {mark}
        </span>
      )}
    </div>
  );
}
