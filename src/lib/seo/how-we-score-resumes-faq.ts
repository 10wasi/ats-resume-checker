import type { FaqItem } from "./faq";

/** FAQ for /how-we-score-resumes — overview page; full detail lives on /methodology. */
export const howWeScoreResumesFaqItems: FaqItem[] = [
  {
    question: "What does this scoring overview cover?",
    answer:
      "How ResumeIQ turns your uploaded file into an ATS score: parse checks, structure signals, keyword coverage, and optional job-posting match. For weighting tables and limits, see our full scoring methodology.",
  },
  {
    question: "Where is the full technical methodology?",
    answer:
      "The methodology page documents each signal, how match score differs from baseline ATS score, and what we do not claim. This page is the plain-language summary.",
  },
  {
    question: "Why might my score differ from another checker?",
    answer:
      "Every tool uses its own rules and posting context. Use ResumeIQ to track your file over time—fix parse warnings first, then tailor keywords per job—not to match a competitor's number.",
  },
  {
    question: "Does ResumeIQ use AI to assign the core score?",
    answer:
      "Core scoring uses deterministic checks on your text and layout. Optional AI suggestions for rewrites are separate and labeled as drafts you should verify.",
  },
];
