import type { FaqItem } from "./faq";

export const atsResumeMistakesFaqItems: FaqItem[] = [
  {
    question: "What are the most common ATS resume mistakes?",
    answer:
      "The most common mistakes are two-column templates, contact info only in headers, non-standard section headings, keyword lists without proof, and PDFs that fail text extraction. Each blocks parsing or relevance before a recruiter reviews your file.",
  },
  {
    question: "Can ATS reject a qualified candidate?",
    answer:
      "Yes. If a resume does not parse or lacks posting-specific keywords, an applicant tracking system may rank it low or hide it from recruiters—even when the candidate is qualified. Fixing format and match issues often restores visibility.",
  },
  {
    question: "Is keyword stuffing an ATS resume mistake?",
    answer:
      "Yes. Large skills dumps without supporting bullets weaken human trust and may trigger quality filters. Place keywords in experience lines where you actually used the skill or tool.",
  },
  {
    question: "Do headers and footers cause ATS problems?",
    answer:
      "They can. Some parsers skip header and footer regions, which means contact details or section labels stored there never import. Put critical text in the document body.",
  },
  {
    question: "How fast can I fix ATS resume mistakes?",
    answer:
      "Layout and contact fixes often take one evening. Keyword tailoring per posting takes 15–30 minutes once you have a solid base resume and use a match analyzer for gaps.",
  },
  {
    question: "What tool catches ATS mistakes before I apply?",
    answer:
      "Use the ATS Resume Checklist for manual QA, then the free ATS Resume Checker for parsing and scoring, and the Resume Match Analyzer for job-specific keyword gaps.",
  },
];
