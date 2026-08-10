/** LogoMark — infinity + leaf badge, cropped from the brand logo artwork. */
export function LogoMark({ size = 40, className = "" }) {
  return (
    <img
      src="/logo-mark.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        backgroundColor: "#3a0e1e",
        borderRadius: size * 0.2,
      }}
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
