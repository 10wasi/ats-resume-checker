import type { FaqItem } from "./faq";

export const atsResumeFormatFaqItems: FaqItem[] = [
  {
    question: "What is the best ATS resume format?",
    answer:
      "A single-column layout with standard section headings, plain-text contact details, simple fonts, and consistent dates. The best format is the one that passes a copy-paste test and parses cleanly in an ATS Resume Checker.",
  },
  {
    question: "Are two-column resumes ATS compatible?",
    answer:
      "Often no. Many parsers read across columns, merging unrelated lines. For online applications, use one column. Creative layouts are better for direct email or print.",
  },
  {
    question: "Should I submit PDF or Word for ATS?",
    answer:
      "Follow the employer's instruction. PDF from Word or Google Docs usually works when text extracts cleanly. If a portal requests .docx, use the same simple layout—not a design-template export.",
  },
  {
    question: "What fonts work best for ATS resumes?",
    answer:
      "Standard fonts like Arial, Calibri, Helvetica, Georgia, or Times New Roman at 10–12 point body size. Avoid decorative fonts and text saved as images.",
  },
  {
    question: "Can I use tables on an ATS resume?",
    answer:
      "Avoid tables for layout. Simple data tables occasionally parse, but they frequently scramble order. Use bullets and line breaks instead.",
  },
  {
    question: "How do I test ATS resume format?",
    answer:
      "Copy-paste your PDF into Notepad, then upload the same file to the free ATS Resume Checker. Fix any scrambled sections before tailoring keywords.",
  },
];
