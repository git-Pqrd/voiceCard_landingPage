import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import { blogs } from "@/config/blogs";
import type { Article } from "@/types/article";
import type { Metadata } from "next";

const MARKDOWNS_DIR = path.join(process.cwd(), "config/blogs/markdowns");

async function markdownToHtml(slug: string): Promise<string> {
  const filePath = path.join(MARKDOWNS_DIR, `${slug}.md`);
  const markdown = fs.readFileSync(filePath, "utf8");
  const result = await remark().use(html).process(markdown);
  return result.value.toString();
}

export async function generateStaticParams() {
  return blogs
    .filter((a) => a.markdown)
    .map((a) => ({ slug: a.href }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blogs.find((a) => a.href === slug);
  if (!article) return {};
  return {
    title: `${article.title} - VoiceVocab Blog`,
    description: article.synopsis,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article: Article | undefined = blogs.find((a) => a.href === slug);
  if (!article) return notFound();

  const content = await markdownToHtml(article.href);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Link
        href="/blog"
        className="text-sm text-sky-600 dark:text-sky-400 hover:underline mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <article>
        <header className="mb-8">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-3">
            {article.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            {article.synopsis}
          </p>
          <time className="text-sm text-slate-500 dark:text-slate-500">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div
          className="prose text-slate-700 dark:text-slate-300"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>

      <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700">
        <Link
          href="/blog"
          className="text-sky-600 dark:text-sky-400 hover:underline"
        >
          &larr; Back to Blog
        </Link>
      </footer>
    </div>
  );
}
