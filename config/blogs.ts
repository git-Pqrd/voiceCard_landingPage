import { Article } from "@/types/article";

export const blogsDict: Record<string, Article> = {
  ielts_speaking_tips: {
    title: "5 Tips to Improve Your IELTS Speaking Score",
    href: "ielts-speaking-tips",
    tags: ["IELTS", "speaking", "tips"],
    synopsis:
      "Practical strategies to boost your IELTS speaking band score, from vocabulary building to fluency techniques.",
    date: "2026-02-18",
    markdown: true,
  },
};

const existingHref: string[] = [];
export const blogs = Object.values(blogsDict)
  .map((b) => {
    if (existingHref.includes(b.href)) {
      throw new TypeError(`HREF: ${b.href} already exists.`);
    }
    existingHref.push(b.href);
    return b;
  })
  .filter((art: Article) => !art.disabled);
