// Source art is 305x205 (not square) — background removed so it blends
// straight into whatever's behind it instead of sitting in a colored box.
const MARK_ASPECT = 305 / 205;

/** LogoMark — infinity + leaf mark, background-free so it matches any surface. */
export function LogoMark({ size = 40, className = "" }) {
  const width = Math.round(size * MARK_ASPECT);
  return (
    <img
      src="/logo-mark-transparent.png"
      width={width}
      height={size}
      alt=""
      aria-hidden="true"
      className={className}
      style={{ width, height: size, objectFit: "contain" }}
    />
  );
}

/** Logo — LogoMark + "MOHANENDRA" wordmark, laid out inline. */
export default function Logo({ size = 34, textClassName = "", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark size={size} />
      <span className={`font-mono font-bold gradient-text ${textClassName}`}>
        MOHANENDRA
      </span>
    </span>
  );
}
