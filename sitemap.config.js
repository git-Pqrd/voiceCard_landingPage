const { getAllPaths } = require("./config/sitemap-routes");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://voicevocab.com",
  generateRobotsTxt: true,
  output: "export",
  trailingSlash: true,
  exclude: ["/404", "/_not-found", "/_error"],
  outDir: "public",
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async (config) => {
    const baseUrl = config.siteUrl.replace(/\/$/, "");
    const paths = getAllPaths();
    const lastmod = new Date().toISOString();
    return paths.map((path) => ({
      loc: `${baseUrl}${path}${path.endsWith("/") ? "" : "/"}`,
      lastmod,
      changefreq: "weekly",
      priority:
        path === "/" ? 1 : path === "/blog" || path === "/ielts" ? 0.9 : 0.7,
    }));
  },
};
