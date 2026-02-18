import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/config/blogs";
import { sortBlogsByDate } from "@/utils/blogsUtils";

export const metadata: Metadata = {
  title: "Blog - VoiceVocab",
  description:
    "Tips, strategies, and insights for IELTS and TOEFL speaking preparation.",
};

export default function BlogIndex() {
  const sorted = sortBlogsByDate(blogs);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
        Blog
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
        Tips, strategies, and insights for IELTS &amp; TOEFL speaking
        preparation.
      </p>

      <div className="space-y-6">
        {sorted.map((article) => (
          <Link
            key={article.href}
            href={`/blog/${article.href}`}
            className="block group"
          >
            <article className="glass-card rounded-xl p-6 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-sky-100 dark:bg-sky-900/30 rounded-full text-sky-700 dark:text-sky-300 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {article.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                {article.synopsis}
              </p>
              <time className="text-xs text-slate-500 dark:text-slate-500">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </article>
          </Link>
        ))}
      </div>

      {sorted.length === 0 && (
        <p className="text-slate-500 dark:text-slate-400 text-center py-12">
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}
