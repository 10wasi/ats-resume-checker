import type { FaqItem } from "./faq";

/** Hub-only FAQs for /faq-center schema — not duplicated on linked topic pages. */
export const faqCenterHubFaqItems: FaqItem[] = [
  {
    question: "What is the ResumeIQ FAQ Center?",
    answer:
      "A curated index of answers grouped by topic—platform trust, scoring, how ATS works, tools, and interview screening—with links to the full guide for each section.",
  },
  {
    question: "Should I read the FAQ Center or run the checker first?",
    answer:
      "Run the free checker on your actual file first if you have one ready. Use the FAQ Center when you need context on scores, privacy, or workflow before or after a scan.",
  },
  {
    question: "Where are privacy and data-handling answers?",
    answer:
      "See the Platform & trust topic below or read the privacy policy for resume storage, cookies, and contact options.",
  },
  {
    question: "Where do scoring and methodology questions live?",
    answer:
      "Use the Scoring methodology topic below. The full weighting and disclaimers are on the methodology page linked from that card.",
  },
];
