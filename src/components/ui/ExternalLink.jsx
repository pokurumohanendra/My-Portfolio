/** ExternalLink — opens in a new tab with a safe rel. */
export default function ExternalLink({ href, className = "link", children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}
