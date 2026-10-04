import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../../config/site.config";

/** Seo: per-page title, description and canonical URL (defaults come from site.config). */
export default function Seo({ title, description }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${siteConfig.displayName}` : siteConfig.seo.title;
  const text = description || siteConfig.seo.description;
  const url = siteConfig.siteUrl.replace(/\/$/, "") + (pathname === "/" ? "/" : pathname);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={text} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={text} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
