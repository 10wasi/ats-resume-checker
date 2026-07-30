import type { FaqItem } from "./faq";

export const methodologyFaqItems: FaqItem[] = [
  {
    question: "Does ResumeIQ work for international job applications?",
    answer:
      "Yes. Scoring focuses on universal ATS signals—parse health, keyword proof, and structure—that apply whether you apply in Europe, Asia, the Americas, Africa, the Middle East, or for remote roles worldwide.",
  },
  {
    question: "How accurate is the ATS score?",
    answer:
      "The score reflects measurable signals in your file: layout, extractable text, keyword placement, and format flags. It is a diagnostic tool—not a guarantee of hiring outcomes.",
  },
  {
    question: "What is the difference between ATS score and match score?",
    answer:
      "ATS score measures overall resume health on your master file. Match score measures overlap with one specific job description.",
  },
  {
    question: "Do you use AI to score resumes?",
    answer:
      "We combine deterministic checks (format, keyword extraction, structure) with optional AI suggestions for rewrites when you run full analysis. Core scores do not require inventing experience.",
  },
  {
    question: "Can I trust the pass likelihood percentage?",
    answer:
      "Treat it as a screening estimate based on parse and keyword signals—not a pass guarantee. Recruiter decisions vary. Read our disclaimer for full limitations.",
  },
  {
    question: "Is ResumeIQ partnered with ATS vendors like Workday or Greenhouse?",
    answer:
      "No. ResumeIQ is independent. We describe common ATS patterns in guides but have no vendor partnerships, certifications, or official endorsements.",
  },
];
