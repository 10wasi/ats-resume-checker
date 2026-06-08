import type { FaqItem } from "./faq";

export const atsScoreExplainedFaqItems: FaqItem[] = [
  {
    question: "What is an ATS score?",
    answer:
      "An ATS score is an estimate of how well your resume meets parser-friendly formatting, structure, and keyword signals. It helps you fix issues before uploading to a job portal—it is not an official employer ranking.",
  },
  {
    question: "What is a good ATS score?",
    answer:
      "There is no universal passing grade across all tools and employers. Focus on clearing critical format flags and strong match against your target job description rather than chasing a single number.",
  },
  {
    question: "How is ATS score different from resume match score?",
    answer:
      "ATS score reflects general file health and optimization. Resume match score compares your resume to one specific job posting. Use ATS score for baseline QA and match score when tailoring an application.",
  },
  {
    question: "Can I improve my ATS score quickly?",
    answer:
      "Yes. Fixing layout issues, moving contact info into the body, and adding honest keyword proof in bullets often produces fast gains. Re-export and re-check the same PDF you plan to submit.",
  },
  {
    question: "Do employers see my ATS checker score?",
    answer:
      "No. Third-party checker scores are for your preparation only. Employers use their own applicant tracking configuration, which you cannot see from outside.",
  },
  {
    question: "Does keyword stuffing raise ATS score?",
    answer:
      "It may inflate some keyword metrics temporarily but hurts human review and can trigger quality issues. Place terms in experience bullets with real context instead.",
  },
];
