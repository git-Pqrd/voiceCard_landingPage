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
  ielts_speaking_examiner_interrupts_you: {
    title: "IELTS Speaking: When the Examiner Interrupts You",
    href: "ielts-speaking-examiner-interrupts-you",
    tags: ["IELTS", "speaking", "examiner", "interrupts", "you"],
    synopsis:
      "What to do when the examiner interrupts you in the IELTS Speaking test.",
    date: "2026-02-21",
    markdown: true,
  },
  why_most_ielts_speaking_practice_is_ineffective: {
    title: "Why Most IELTS Speaking Practice Is Ineffective (And What Actually Works)",
    href: "why-most-ielts-speaking-practice-is-ineffective",
    tags: ["IELTS", "speaking", "practice", "feedback", "repetition"],
    synopsis:
      "Why passive IELTS Speaking prep stalls progress and what timed, measurable, repeatable practice does better.",
    date: "2026-03-02",
    markdown: true,
  },
  what_a_band_7_ielts_speaking_answer_actually_sounds_like: {
    title: "What a Band 7 IELTS Speaking Answer Actually Sounds Like",
    href: "what-a-band-7-ielts-speaking-answer-actually-sounds-like",
    tags: ["IELTS", "speaking", "band 7", "sample answers", "fluency"],
    synopsis:
      "See real Band 6 vs Band 7 IELTS Speaking examples and learn how clearer structure, better vocabulary, and fuller ideas raise your score.",
    date: "2026-03-03",
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
