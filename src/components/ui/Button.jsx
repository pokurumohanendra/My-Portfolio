/**
 * Button — one place for button / link styling.
 * variant: "solid" | "line"   size: "md" | "sm"
 * Renders <a> when `href` is given, otherwise <button>. External links
 * (target="_blank") automatically get a safe rel.
 */
export default function Button({
  variant = "solid",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`.trim();

  if (href) {
    const external = rest.target === "_blank";
    return (
      <a href={href} rel={external ? "noreferrer" : undefined} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
