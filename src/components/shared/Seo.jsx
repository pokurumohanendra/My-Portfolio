import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/site.config";

/** Seo — per-page title and description (defaults come from site.config). */
export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${siteConfig.displayName}` : siteConfig.seo.title;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || siteConfig.seo.description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || siteConfig.seo.description} />
    </Helmet>
  );
}
