import type { FaqItem } from "./faq";

export const resumeSkillsAnalyzerFaqItems: FaqItem[] = [
  {
    question: "What does a resume skills analyzer do?",
    answer:
      "A resume skills analyzer scans your resume text for technical skills, tools, and domain terms—then compares them to a job description when you paste one. It helps you spot honest gaps before you apply.",
  },
  {
    question: "Is the resume skills analyzer free?",
    answer:
      "Yes. Paste resume text and optionally a job post—no account required. For PDF upload, AI rewrites, and a full ATS score, use the ATS Resume Checker.",
  },
  {
    question: "Should I list every detected skill on my resume?",
    answer:
      "No. Only include skills you can discuss in an interview. The analyzer surfaces terms already in your text and missing JD terms—not a checklist to keyword-stuff.",
  },
  {
    question: "How is this different from the resume match analyzer?",
    answer:
      "The skills analyzer focuses on skill and tool detection plus bullet metrics. The Resume Match Analyzer scores overall fit, missing keywords, and categorized gaps across the full posting.",
  },
];
