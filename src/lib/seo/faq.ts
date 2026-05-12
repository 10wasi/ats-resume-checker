export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaqItems: FaqItem[] = [
  {
    question: "What is an ATS resume checker?",
    answer:
      "An ATS resume checker reviews your resume using signals similar to applicant tracking systems: whether text extracts cleanly, whether your sections are easy to map (Experience, Skills, Education), and how well your wording lines up with a job post if you paste one. It is a rehearsal pass—so you can tighten an ATS friendly resume before a real portal swallows your file.",
  },
  {
    question: "How accurate are ATS scores?",
    answer:
      "No third-party score can mirror every employer’s internal system. What we offer is directionally accurate feedback: parsing risks, keyword fit, bullet strength, and formatting habits that commonly trip up hiring software. Use the number to prioritize edits and improve your ATS score over time—not as a promise you will get an interview.",
  },
  {
    question: "Why do resumes fail ATS systems?",
    answer:
      "The usual culprits are broken or image-only PDFs, layouts that scramble reading order, non-standard section titles, weak or missing job keywords, and bullets that never show impact. Sometimes there is also a straight skills mismatch—but many qualified people lose out first on fixable formatting and resume optimization issues.",
  },
  {
    question: "How can I improve my ATS score?",
    answer:
      "Start with a clean export (selectable text, one-column layout, boring headings). Then align honest keywords from the posting into experience bullets—not a pasted wall of jargon. Rewrite weak bullets with action, scope, and outcome. Re-run the checker until the preview reads cleanly. Small, truthful changes beat keyword stuffing every time.",
  },
  {
    question: "Is this resume checker really free?",
    answer:
      "Yes. This free ATS Resume Checker lets you upload or paste a resume, run an ATS-style score, and review feedback without creating an account or entering a card. We believe you should be able to improve an ATS compatible resume before anyone asks you to pay for anything.",
  },
  {
    question: "Will an ATS read my file the same way?",
    answer:
      "Always check the extracted text preview first. If the order or wording looks wrong there, many parsers will struggle too—fix the source document, then re-run this online resume checker before you apply.",
  },
  {
    question: "Which file formats can I use?",
    answer:
      "PDF and DOCX up to 10 MB. Scanned image PDFs may not extract well; export from Word or Google Docs with selectable text for the cleanest results.",
  },
  {
    question: "Do you store my resume?",
    answer:
      "Your file is processed for the request to generate feedback. Avoid pasting confidential data you would not put in a normal application.",
  },
  {
    question: "Do I need a job description?",
    answer:
      "No—you still get structure and score feedback. Adding a posting sharpens keyword optimization and match language, which helps when you are serious about a specific role.",
  },
];
