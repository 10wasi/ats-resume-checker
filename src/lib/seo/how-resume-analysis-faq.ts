import type { FaqItem } from "@/lib/seo/faq";

export const howResumeAnalysisFaqItems: FaqItem[] = [
  {
    question: "What does resume analysis include?",
    answer:
      "Text extraction, format flags, keyword and skills signals, readability, optional job match, AI section feedback, checklist, and downloadable reports—not just a single score.",
  },
  {
    question: "Is resume analysis the same as employer ATS?",
    answer:
      "No. We approximate common parser and keyword patterns. Employers use proprietary systems—use our report to prioritize fixes, not as a guarantee of ranking.",
  },
  {
    question: "Do I need a job description for full analysis?",
    answer:
      "Baseline score and format checks work without a posting. Paste a job description for match %, tailored missing keywords, and stronger rewrite suggestions.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Most files complete in under a minute. Large PDFs or pasted job descriptions may take slightly longer.",
  },
];
