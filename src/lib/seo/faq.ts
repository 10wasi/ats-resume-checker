import {
  CORE_CHECKER_FREE_ANSWER,
  RESUME_STORAGE_FAQ_ANSWER,
} from "@/lib/seo/trust-copy";

export type FaqItem = {
  question: string;
  answer: string;
};

/** Homepage FAQ — visible in FaqSection and FaqJsonLd (must match). */
export const homepageFaqItems: FaqItem[] = [
  {
    question: "What is a resume checker?",
    answer:
      "A resume checker shows how hiring software likely reads your file: whether text extracts cleanly, sections are labeled clearly, and language overlaps with a job post when you add one. ResumeIQ runs that check free—no signup.",
  },
  {
    question: "What is an ATS resume checker?",
    answer:
      "An ATS resume checker focuses on applicant tracking systems—the software employers use to store applications and search candidates. It flags parse failures, missing posting terms, and layout habits that hide your experience.",
  },
  {
    question: "What is the difference between a CV and a resume?",
    answer:
      "In many markets the words mean the same document. Parsers treat PDF and DOCX the same either way. Upload whichever file you plan to submit and confirm the extracted text reads in order.",
  },
  {
    question: "What is a resume match score?",
    answer:
      "A match score compares your resume to one job description—keyword overlap, skills, and phrasing for that role. Paste a posting in the checker to see it alongside your baseline ATS score.",
  },
  {
    question: "How do recruiters scan resumes?",
    answer:
      "Most employers filter through software first, then recruiters skim survivors in seconds: recent title, headline, metrics, and skills. Fixing parser issues and weak bullets helps you reach both stages.",
  },
  {
    question: "Why is my resume rejected by ATS?",
    answer:
      "Common causes: image-only PDFs, multi-column layouts, contact info in headers, missing posting keywords, and bullets without outcomes. Often the fix is formatting or tailoring—not lack of experience.",
  },
  {
    question: "How can I improve my ATS score?",
    answer:
      "Export clean text (one column, standard headings), mirror honest keywords from the posting in experience bullets, and strengthen weak lines with action and outcomes. Re-run the checker after each edit.",
  },
  {
    question: "What does my ATS score actually measure?",
    answer:
      "Readability, structure, keyword coverage, and—when you add a posting—how closely your language mirrors that role. Use it to prioritize edits before you apply, not as a guarantee any employer uses identical weighting.",
  },
  {
    question: "How accurate are ATS scores?",
    answer:
      "No third-party score mirrors every employer's internal system. ResumeIQ gives directionally useful feedback on parsing risks, keyword fit, and formatting habits. Treat the number as a guide, not an interview promise.",
  },
  {
    question: "Is this resume checker really free?",
    answer: CORE_CHECKER_FREE_ANSWER,
  },
  {
    question: "Do you store my resume?",
    answer: RESUME_STORAGE_FAQ_ANSWER,
  },
  {
    question: "Is my resume data secure?",
    answer:
      "Analysis runs over encrypted connections. We process your document to produce scores and recommendations; you control what you download or copy. Redact client names on sensitive roles—the checker still evaluates structure and language.",
  },
  {
    question: "Do I need a job description?",
    answer:
      "No—you still get structure, ATS score, and format feedback. Adding a posting sharpens keyword gaps and match language when you target a specific role.",
  },
  {
    question: "Which file formats can I use?",
    answer:
      "PDF and DOCX up to 10 MB. Scanned image PDFs may not extract well; export from Word, Google Docs, or your editor with selectable text for the cleanest results.",
  },
  {
    question: "Will an ATS read my file the same way?",
    answer:
      "Check the extracted text preview first. If order or wording looks wrong there, many parsers will struggle too—fix the source document, then re-run the checker before you apply.",
  },
  {
    question: "Should I stuff keywords to beat the ATS?",
    answer:
      "No—keyword stuffing reads hollow to recruiters and can backfire in human review. Place truthful terms from the posting in experience and skills where you can explain them in an interview.",
  },
  {
    question: "How often should I re-run the checker?",
    answer:
      "After every meaningful edit: new role target, reordered bullets, layout change, or a different job description. Small tweaks can change extraction, so a quick second pass keeps your file aligned with what parsers will see.",
  },
  {
    question: "How fast is resume analysis?",
    answer:
      "Most checks complete in under a minute after upload or paste. You get overall score, formatting flags, keyword gaps, section feedback, and priority fixes immediately.",
  },
  {
    question: "Does ATS reject Canva resumes?",
    answer:
      "Often. Canva exports can be image-heavy with sidebars and icons that parsers skip or scramble. Export to plain DOCX or a single-column Word template, then re-run your scan before submitting.",
  },
  {
    question: "Can ATS read PDF resumes?",
    answer:
      "Yes, when the PDF contains selectable text exported from a word processor. Scanned PDFs and design-tool exports frequently fail. Try selecting and copying text—if you cannot, convert to DOCX before applying.",
  },
  {
    question: "How many keywords should a resume contain?",
    answer:
      "Mirror must-have terms from the job description inside bullets where you have real experience—not in a standalone keyword block. Quality and placement matter more than hitting a fixed count.",
  },
  {
    question: "What is the best resume format for ATS?",
    answer:
      "Single-column chronological or hybrid layout, exported as DOCX or selectable PDF. Use standard section headers, readable fonts, plain bullets, and contact information in the document body—not in headers or text boxes.",
  },
  {
    question: "Can ATS read graphics and images on a resume?",
    answer:
      "No. Applicant tracking systems extract text only. Skill bars, photos, icon sidebars, and background images are stripped or break parsing. Remove graphics from the file you submit.",
  },
  {
    question: "What resume format do recruiters prefer?",
    answer:
      "After ATS filtering, recruiters favor a clean single-column layout, bullets with action verbs and one measurable outcome each, a short professional summary, and readable fonts at 10–11pt.",
  },
  {
    question: "How do I know if my resume passed ATS?",
    answer:
      "You cannot see employer-side results, but you can verify the basics: selectable text in your PDF, logical section order in the parse preview, posting keywords in experience bullets, and no critical format flags in your checker report. Fix those before applying.",
  },
  {
    question: "Can remote workers and international applicants use this?",
    answer:
      "Yes. Employers worldwide use similar parsing and keyword search. Match spelling and title norms to each posting, then run the checker on the exact file you plan to submit.",
  },
];
