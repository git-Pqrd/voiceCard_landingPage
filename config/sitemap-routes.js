/**
 * Routes included in the sitemap.
 * - Add new static pages (e.g. /toefl, /medicine) to STATIC_ROUTES
 * - Add new blog slugs to BLOG_SLUGS (keep in sync with config/blogs.ts)
 */
const STATIC_ROUTES = ["/", "/blog", "/ielts", "/privacy", "/terms"];

const BLOG_SLUGS = [
  "ielts-speaking-tips",
  "ielts-speaking-examiner-interrupts-you",
  "why-most-ielts-speaking-practice-is-ineffective",
  "what-a-band-7-ielts-speaking-answer-actually-sounds-like",
];

function getAllPaths() {
  const blogPaths = BLOG_SLUGS.map((slug) => `/blog/${slug}`);
  return [...STATIC_ROUTES, ...blogPaths];
}

module.exports = { getAllPaths, STATIC_ROUTES, BLOG_SLUGS };
