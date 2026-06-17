import type { FaqItem } from "./faq";

/** Generic FAQ for blog posts without slug-specific FAQ JSON-LD. */
export const blogGenericFaqItems: FaqItem[] = [
  {
    question: "How do I apply this article to my resume?",
    answer:
      "Upload or paste your resume in the free ATS Resume Checker, then match to a job posting. Use the article as context for the gaps and fixes the tools surface.",
  },
  {
    question: "Are ResumeIQ tools free?",
    answer:
      "Core analysis—ATS score, keyword gaps, match score, and improvement checklist—is free with no account required. Guides and tools link together in one workflow.",
  },
  {
    question: "Where should I go next after reading?",
    answer:
      "Browse the ATS Knowledge Center for pillar guides, the Career Success Hub for tool workflows, or the Resume Keywords Database for role-specific terms.",
  },
];
