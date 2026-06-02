import type { FaqItem } from "./faq";

/** FAQ for /resume-job-description-match */
export const resumeJdMatchFaqItems: FaqItem[] = [
  {
    question: "What is a resume match score?",
    answer:
      "A resume match score estimates how closely your resume language aligns with a specific job description. It is directionally useful for prioritizing edits, not a guarantee of interview outcomes.",
  },
  {
    question: "How do I match resume to job description effectively?",
    answer:
      "Start with clean ATS formatting, then align truthful keywords in your headline, summary, and recent experience bullets. Re-run analysis on the exact file you plan to upload.",
  },
  {
    question: "Does ATS compatibility score matter if my experience is strong?",
    answer:
      "Yes. Strong experience can still underperform if parsers cannot extract your content cleanly or if key terms are missing from searchable sections.",
  },
  {
    question: "Should I add every keyword from the posting?",
    answer:
      "No. Add only terms you can defend in an interview. Focus on relevant technical skills, tools, and certifications with real proof in your bullets.",
  },
  {
    question: "Can this work for UK and US job applications?",
    answer:
      "Yes. ATS parsing principles are similar in both markets. Keep wording and spelling consistent with your target region and role.",
  },
  {
    question: "What should I fix first: formatting or keywords?",
    answer:
      "Fix formatting first. If extraction order is broken, keyword improvements have limited impact.",
  },
];

