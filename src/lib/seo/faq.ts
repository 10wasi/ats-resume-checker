export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaqItems: FaqItem[] = [
  {
    question: "Is this resume checker really free?",
    answer:
      "Yes. ResumeIQ is a free resume checker and AI resume analyzer: you can upload or paste a resume, run an ATS-style score, and download a text or PDF report without creating an account or entering payment details.",
  },
  {
    question: "How accurate is the ATS resume score?",
    answer:
      "The score reflects readable structure, keyword coverage, bullet strength, and common ATS risks — similar signals to what a job resume checker or recruiter skim would notice. Use it to prioritize edits, not as a guarantee of interviews.",
  },
  {
    question: "Will an ATS read my file the same way?",
    answer:
      "Check the extracted text preview first. If the order or wording looks wrong in the preview, parsers may struggle too — fix the source document, then re-run this CV checker online free before you apply.",
  },
  {
    question: "Which file formats can I use?",
    answer:
      "PDF and DOCX up to 10 MB. Scanned image PDFs may not extract well; export from Word or Google Docs with selectable text for the cleanest resume optimization results.",
  },
  {
    question: "Do you store my resume?",
    answer:
      "Your file is processed for the request to generate feedback. Treat it like any online resume review AI tool: avoid pasting confidential data you would not put in a normal application.",
  },
  {
    question: "Do I need a job description?",
    answer:
      "No. You still get an ATS score and formatting feedback. Adding a posting improves keyword optimization and match language — ideal when you have a specific role in mind.",
  },
];
