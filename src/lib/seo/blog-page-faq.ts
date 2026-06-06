import type { FaqItem } from "./faq";

/** FAQ schema for high-intent blog guides. */
export const blogFaqBySlug: Record<string, FaqItem[]> = {
  "best-ats-friendly-resume-examples-2026": [
    {
      question: "What makes an ATS friendly resume example?",
      answer:
        "Strong examples use single-column layout, standard headings, selectable text, and keywords inside experience bullets with proof—not hidden skill clouds.",
    },
    {
      question: "Can I copy ATS resume examples exactly?",
      answer:
        "Copy structure and habits, not someone else's metrics or employers. Use examples to fix layout and bullet patterns, then test your file with the free ATS Resume Checker.",
    },
    {
      question: "Do two-column resume templates pass ATS?",
      answer:
        "Often no. Many two-column designs scramble extraction order. Run a copy-paste test before trusting any template.",
    },
  ],
  "best-ats-resume-keywords-improve-visibility-2026": [
    {
      question: "What are ATS resume keywords?",
      answer:
        "Terms recruiters search for in applicant tracking systems: tools, methods, certifications, and role-specific phrases from job postings.",
    },
    {
      question: "Should I stuff keywords to beat ATS?",
      answer:
        "No. Place honest keywords in summary, skills, and recent bullets with outcomes you can discuss in an interview.",
    },
    {
      question: "How do I find missing ATS keywords?",
      answer:
        "Paste a job description into the ATS Resume Checker or resume match analyzer to see missing and found terms for your file.",
    },
  ],
};
