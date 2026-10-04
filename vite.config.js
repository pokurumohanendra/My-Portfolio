import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { siteConfig } from "./src/config/site.config.js";

// Replaces %SITE_URL% in index.html with the address from site.config.js
const siteUrl = () => ({
  name: "site-url",
  transformIndexHtml: (html) =>
    html.replaceAll("%SITE_URL%", siteConfig.siteUrl.replace(/\/$/, "")),
});

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
