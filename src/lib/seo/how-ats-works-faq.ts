import type { FaqItem } from "./faq";

export const howAtsWorksFaqItems: FaqItem[] = [
  {
    question: "What is an applicant tracking system (ATS)?",
    answer:
      "An ATS stores applications, parses resumes into searchable fields, and helps recruiters filter candidates. Workday, Greenhouse, Lever, and Taleo are common examples used globally.",
  },
  {
    question: "Does ATS only matter in certain countries?",
    answer:
      "No. Online hiring pipelines worldwide use similar ATS patterns—local employers, multinationals, and remote teams alike. Optimize for parse health and honest keywords everywhere you apply.",
  },
  {
    question: "What is the difference between ATS and a resume checker?",
    answer:
      "ATS is employer-side software. A resume checker simulates parse and keyword signals so you can fix issues before your file enters that system.",
  },
  {
    question: "How do I improve my ATS resume score?",
    answer:
      "Fix layout and parsing issues first, add posting-aligned keywords in bullets, then re-run the ATS Resume Checker and Resume Match Analyzer before each application.",
  },
  {
    question: "Do all companies use ATS?",
    answer:
      "Most mid-size and large employers use ATS to manage application volume—estimates suggest over 90% of Fortune 500 companies use some form of ATS. Smaller companies and startups may use simpler tools or email-based hiring, but building an ATS-compatible resume protects you across every channel since you rarely know which system the employer uses.",
  },
  {
    question: "Can ATS reject applications before a human sees them?",
    answer:
      "ATS software filters and ranks but rarely makes final rejection decisions automatically. Most systems surface a shortlist for recruiter review—so a poor match lowers your ranking rather than triggering an automatic rejection. However, hard filters (specific degree requirements, mandatory certifications, location rules) can exclude applications before any human review. Fix parse and keyword issues to ensure you appear in the shortlist search results.",
  },
  {
    question: "What file types does ATS accept?",
    answer:
      "Most ATS platforms accept PDF and DOCX. Text-based PDFs exported from Word or Google Docs parse reliably. Scanned image PDFs, design-tool exports (Canva, Adobe InDesign), and password-protected files frequently fail. When in doubt, export a clean DOCX from Word and a separate text-based PDF, then run both through the ATS Resume Checker to compare extraction quality.",
  },
  {
    question: "How can I check if my resume passed ATS?",
    answer:
      "You cannot see employer-side ATS results directly. The best proxy is running your resume through a third-party ATS Resume Checker: upload your file, check the extracted text (does it read in the right order?), review keyword gaps versus the job description, and note format warnings. If extracted text is garbled or keywords are missing, your application likely scored low in employer filters—fix those issues and re-check before applying.",
  },
];
