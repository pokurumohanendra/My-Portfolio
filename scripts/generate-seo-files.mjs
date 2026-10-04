// Writes public/sitemap.xml and public/robots.txt from the site data.
// Runs automatically before every build (see "prebuild" in package.json),
// so new projects and posts appear in the sitemap without extra work.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { siteConfig } from "../src/config/site.config.js";
import { projects } from "../src/data/projects.js";
import { posts } from "../src/data/posts.js";

const base = siteConfig.siteUrl.replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const urls = [
  { path: "/", lastmod: today, priority: "1.0" },
  ...projects.map((p) => ({ path: `/projects/${p.id}`, lastmod: today, priority: "0.7" })),
  ...posts.map((p) => ({ path: `/writing/${p.slug}`, lastmod: p.date, priority: "0.6" })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${base}${u.path}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

const publicDir = fileURLToPath(new URL("../public/", import.meta.url));
writeFileSync(publicDir + "sitemap.xml", sitemap);
writeFileSync(publicDir + "robots.txt", robots);
console.log(`SEO files written for ${base} (${urls.length} URLs)`);
