import type { FaqItem } from "@/lib/seo/faq";

export const BLOG_HUB_FAQ: Record<string, FaqItem[]> = {
  "/blog/how-ats-works": [
    {
      question: "How does ATS read a resume?",
      answer:
        "Applicant tracking systems extract plain text from your file, map sections to fields, then search for keywords and apply filters before a recruiter sees your name.",
    },
    {
      question: "Can I test how ATS parses my resume?",
      answer:
        "Yes—upload the same PDF to the free ATS resume checker and read the extracted text. Garbled order means parsers likely miss your skills.",
    },
  ],
  "/blog/resume-mistakes": [
    {
      question: "What resume mistake causes the most ATS rejections?",
      answer:
        "Unparseable layouts—columns, tables, and graphics—top the list. Keyword gaps in experience bullets are the second most common fixable issue.",
    },
    {
      question: "How fast can I fix resume mistakes before applying?",
      answer:
        "Format fixes often take 30 minutes. Keyword tailoring per posting takes 15 minutes with a match tool and honest bullet edits.",
    },
  ],
  "/blog/ats-keywords-guide": [
    {
      question: "Where should ATS keywords go on a resume?",
      answer:
        "In recent experience bullets and a concise Skills section—where you have proof. Avoid invisible footer dumps or keyword stuffing.",
    },
    {
      question: "How many keywords should I add per job application?",
      answer:
        "Aim for 5–8 must-have terms from the posting woven into bullets you can defend in an interview—not every synonym on the page.",
    },
  ],
  "/blog/remote-job-resume-tips": [
    {
      question: "Do remote jobs use the same ATS as local roles?",
      answer:
        "Yes—most employers use the same applicant tracking systems worldwide. Tailor keywords to each posting regardless of your location.",
    },
    {
      question: "Should remote resumes mention time zones or location?",
      answer:
        "Include city/country if the posting asks. Remote-friendly employers still filter on title match and searchable skills in plain text.",
    },
  ],
};
