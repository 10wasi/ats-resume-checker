import type { FaqItem } from "./faq";

export const FAQ_CENTER_PATH = "/faq-center" as const;

export type FaqCenterTopic = {
  id: string;
  title: string;
  href: string;
  description: string;
  previewQuestion: string;
};

/** Topic index — full FAQs live on linked canonical pages only. */
export const FAQ_CENTER_TOPICS: FaqCenterTopic[] = [
  {
    id: "platform",
    title: "Platform & trust",
    href: "/about",
    description:
      "Who runs ResumeIQ, how uploads are handled, cookies, analytics, and how to reach support.",
    previewQuestion: "Do you store my resume after I upload?",
  },
  {
    id: "methodology",
    title: "Scoring methodology",
    href: "/methodology",
    description:
      "How parse health, keyword overlap, structure, and job-post match combine into your ATS score—and what we do not claim.",
    previewQuestion: "Is my ATS score a guarantee employers use the same formula?",
  },
  {
    id: "how-ats",
    title: "How ATS works",
    href: "/how-ats-works",
    description:
      "Parsing, indexing, keyword ranking, filters, and recruiter skim—fix the layer that actually blocked your file.",
    previewQuestion: "Why did my resume look fine but fail ATS parsing?",
  },
  {
    id: "workflow",
    title: "Tools & workflow",
    href: "/career-success-hub",
    description:
      "Checker, keyword scan, match analyzer, and optimization guides in one job-search workflow.",
    previewQuestion: "Which ResumeIQ tool should I run first?",
  },
  {
    id: "interviews",
    title: "Interviews & rejection",
    href: "/why-resume-not-getting-interviews",
    description:
      "When silence means parse failure vs weak bullets—and how to tell ATS rejection from recruiter skim.",
    previewQuestion: "Why am I not getting interviews after applying online?",
  },
  {
    id: "privacy",
    title: "Privacy & disclaimer",
    href: "/privacy",
    description:
      "Data retention, cookies, third-party processors, and limits on scores, AI suggestions, and outcomes.",
    previewQuestion: "Where can I read the full privacy and disclaimer policies?",
  },
];

/** @deprecated Use FAQ_CENTER_TOPICS — hub page no longer inlines topic FAQs. */
export const FAQ_CENTER_SECTIONS = FAQ_CENTER_TOPICS.map((topic) => ({
  id: topic.id,
  title: topic.title,
  href: topic.href,
  items: [] as FaqItem[],
}));

/** @deprecated Hub schema uses faqCenterHubFaqItems only. */
export const faqCenterAllItems: FaqItem[] = [];
