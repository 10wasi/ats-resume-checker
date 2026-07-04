import type { FaqItem } from "./faq";

export const resumeParsingFaqItems: FaqItem[] = [
  {
    question: "What is resume parsing?",
    answer:
      "Resume parsing is the automated process where an ATS extracts structured data—name, contact, employers, titles, dates, skills, education—from your uploaded file. The extracted fields become searchable database records. If parsing fails, your resume can't be found through recruiter searches.",
  },
  {
    question: "Do ATS systems parse PDF resumes?",
    answer:
      "Yes, text-based PDFs parse well. The key distinction is between a text-based PDF (exported from Word or Google Docs) and an image-based or scanned PDF. Image-based PDFs require OCR and often fail or garble extracted text. Always export a native PDF from a word processor.",
  },
  {
    question: "Why does ATS fail to read my resume?",
    answer:
      "Common causes: two-column layout (parser reads columns left-to-right, mixing employers and dates), contact info placed only in a document header graphic, icon-based skills sections (no text to index), text boxes, creative section names instead of standard headings, or a Canva/Figma export rather than a Word/Docs PDF.",
  },
  {
    question: "Does font or font size affect resume parsing?",
    answer:
      "Font and size rarely affect modern parsers as long as the file is a text-based PDF. What matters is that the text stream is in logical reading order. However, unusual fonts can occasionally cause character encoding issues in older parsers—a standard system font (Arial, Calibri, Georgia) is safest.",
  },
  {
    question: "How can I test if my resume parses correctly?",
    answer:
      "Two methods: (1) Copy-paste test — open the PDF, select all, paste into Notepad. If text appears in correct order with employers, titles, and dates intact, basic parsing will succeed. (2) Upload to the free ATS checker at resumeiq.io/resume-checker — the extracted-text preview shows what employers' ATS systems index.",
  },
  {
    question: "Is DOCX or PDF better for ATS parsing?",
    answer:
      "Both parse well when the layout is clean. PDF is preferred by most modern ATS portals (Greenhouse, Lever, Workday) and preserves formatting. DOCX may be required by legacy ATS systems. When in doubt, check the job posting for file format instructions. If none are given, use a text-based PDF.",
  },
];
