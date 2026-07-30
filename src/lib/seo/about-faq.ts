import type { FaqItem } from "./faq";
import {
  CORE_CHECKER_FREE_ANSWER,
  NO_ACCOUNT_REQUIRED_ANSWER,
  RESUME_STORAGE_FAQ_ANSWER,
} from "./trust-copy";

export const aboutFaqItems: FaqItem[] = [
  {
    question: "What is ResumeIQ?",
    answer:
      "ResumeIQ is a free resume optimization platform with an ATS resume checker, resume match analyzer, keywords tools, and editorial career guides—built for job seekers worldwide who want honest analysis without a subscription paywall.",
  },
  {
    question: "Is the ATS resume checker really free?",
    answer: CORE_CHECKER_FREE_ANSWER,
  },
  {
    question: "Do you store my resume?",
    answer: RESUME_STORAGE_FAQ_ANSWER,
  },
  {
    question: "Do you offer user accounts?",
    answer: NO_ACCOUNT_REQUIRED_ANSWER,
  },
  {
    question: "Who writes and reviews the career guides?",
    answer:
      "Guides are written and reviewed by the ResumeIQ Editorial Team using parse tests, published methodology, and our content review process—not fake individual author profiles or unverifiable recruiter personas.",
  },
];
