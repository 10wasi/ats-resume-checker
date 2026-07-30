import type { FaqItem } from "./faq";
import { CORE_CHECKER_FREE_ANSWER, RESUME_STORAGE_FAQ_ANSWER } from "./trust-copy";

export const careerSuccessHubFaqItems: FaqItem[] = [
  {
    question: "What is the Career Success Hub?",
    answer:
      "The Career Success Hub is ResumeIQ's connected library of free resume tools and guides—checker, match analyzer, keywords tools, examples, checklists, and optimization workflows in one place.",
  },
  {
    question: "Is everything in the Career Success Hub free?",
    answer:
      "Core analysis—ATS scoring, keyword scans, match score, keywords finder, and bullet generator—is free. Guides and examples are free to read and use.",
  },
  {
    question: "Where should I start?",
    answer:
      "Upload your resume to the ATS Resume Checker for a baseline score, then use the Resume Match Analyzer on a job you want. Follow the resume optimization guide for the full workflow.",
  },
  {
    question: "How is this different from Jobscan or Resume Worded?",
    answer:
      "We focus on a free, utility-style workflow with deep guides and role examples—not a subscription gate on basic scores. Tools connect through one hub with clear next steps.",
  },
  {
    question: "Do you store my resume?",
    answer: RESUME_STORAGE_FAQ_ANSWER,
  },
];
