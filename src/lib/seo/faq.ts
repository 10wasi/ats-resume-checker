export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaqItems: FaqItem[] = [
  {
    question: "What is a resume checker?",
    answer:
      "A resume checker scans your file the way applicant tracking systems and recruiters do—parse health, ATS score, keyword coverage, and format flags. ResumeIQ is a free resume checker online with resume score checker, CV scan, match tool, and keyword database built in.",
  },
  {
    question: "What is an ATS resume checker?",
    answer:
      "An ATS resume checker reviews whether hiring software can read your resume cleanly: extractable text, standard sections (Experience, Skills, Education), and language overlap with a job post when you paste one. It is a rehearsal pass before a real employer portal processes your file.",
  },
  {
    question: "What is a free ATS resume checker?",
    answer:
      "A free ATS resume checker lets you upload or paste a resume, run an ATS-style score, and review actionable feedback without payment or signup. ResumeIQ includes match analysis, keyword gaps, format warnings, and an improvement plan in the free core flow.",
  },
  {
    question: "What is an AI resume checker?",
    answer:
      "An AI resume checker adds language analysis on top of rule-based ATS signals—summary feedback, bullet rewrites, action verbs, and grammar polish. ResumeIQ combines deterministic scoring with AI suggestions so recommendations stay specific to your text, not generic templates.",
  },
  {
    question: "What is the difference between a CV checker and resume checker?",
    answer:
      "CV and resume are labels for the same job-application document in many markets. Parsers extract text from PDF or DOCX the same way whether you call it a CV or resume. ResumeIQ works as both a CV checker and resume scanner worldwide.",
  },
  {
    question: "What is an ATS resume optimization platform?",
    answer:
      "ResumeIQ combines an ATS resume checker, resume match analyzer, keyword finder, ATS resume examples, checklist, and AI rewrite assistant in one workflow. You analyze your file, compare it to a job description, and get resume optimization steps—not just a single score.",
  },
  {
    question: "What is a resume match score?",
    answer:
      "A resume match score estimates how closely your resume language aligns with a specific job description—keyword overlap, structure fit, and posting-aware gaps. Paste a job post in the checker to see your match score alongside your ATS score and missing resume keywords.",
  },
  {
    question: "What is ATS compatibility?",
    answer:
      "ATS compatibility means your resume exports as selectable text, uses readable headings, and avoids layout tricks that scramble parsing. Our ATS compatibility rating summarizes parse risk, format habits, and readability so you know if employers can actually read your file.",
  },
  {
    question: "How do recruiters scan resumes?",
    answer:
      "Most employers use applicant tracking systems first—software that extracts text, indexes keywords, and ranks candidates. Recruiters then skim surviving resumes in seconds: headline, recent role, metrics, and skills. A resume checker helps you pass both the parser and the six-second human scan.",
  },
  {
    question: "Why do resumes fail ATS systems?",
    answer:
      "Common causes: image-only PDFs, multi-column layouts, non-standard section titles, missing job keywords, and bullets without impact. Sometimes there is a skills mismatch—but many qualified candidates lose out first on fixable formatting and resume optimization issues.",
  },
  {
    question: "How can I improve my ATS score?",
    answer:
      "Export clean text (one column, standard headings), mirror honest keywords from the posting in experience bullets, and rewrite weak lines with action and outcomes. Re-run the resume analysis tool after each edit. Small truthful changes beat keyword stuffing every time.",
  },
  {
    question: "What does my ATS score actually measure?",
    answer:
      "Your resume score summarizes readability, structure, keyword coverage, and—when you add a posting—how closely your language mirrors that role. Use it to prioritize edits before you apply—not as a guarantee any employer uses identical weighting.",
  },
  {
    question: "How accurate are ATS scores?",
    answer:
      "No third-party score mirrors every employer's internal system. ResumeIQ gives directionally accurate feedback: parsing risks, keyword fit, bullet strength, and formatting habits that commonly trip hiring software. Treat the number as a guide for resume improvement, not an interview promise.",
  },
  {
    question: "Where can I find ATS resume examples?",
    answer:
      "Our ATS resume examples guide shows good vs weak layouts, bullet patterns, and keyword placement. Browse role-specific samples in the resume examples library, then validate your file in the free checker.",
  },
  {
    question: "Is this resume checker really free?",
    answer:
      "Yes. Upload or paste a resume, run an ATS-style score, and review feedback without creating an account or entering payment details. Core resume analysis, keyword scan, and format checks stay free.",
  },
  {
    question: "Do you store my resume?",
    answer:
      "Your file is processed to generate feedback for that request—we do not sell resume data or use it to train unrelated models. Avoid uploading information you would not include in a normal job application. See our privacy policy for details.",
  },
  {
    question: "Is my resume data secure?",
    answer:
      "Analysis runs over encrypted connections. We process your document to produce scores and recommendations, then you control what you download or copy. For sensitive roles, redact client names if needed—the checker still evaluates structure and language.",
  },
  {
    question: "Do I need a job description?",
    answer:
      "No—you still get structure, ATS score, and format feedback. Adding a posting sharpens keyword optimization and resume match language, which helps when you are targeting a specific role.",
  },
  {
    question: "Which file formats can I use?",
    answer:
      "PDF and DOCX up to 10 MB. Scanned image PDFs may not extract well; export from Word, Google Docs, or your editor with selectable text for the cleanest resume scan results.",
  },
  {
    question: "Will an ATS read my file the same way?",
    answer:
      "Always check the extracted text preview first. If order or wording looks wrong there, many parsers will struggle too—fix the source document, then re-run this online resume checker before you apply.",
  },
  {
    question: "What is resume keyword optimization?",
    answer:
      "Resume keyword optimization means weaving truthful terms from the job posting into your experience and skills—where you can discuss them in an interview. It improves search visibility in applicant tracking systems without hollow keyword stuffing.",
  },
  {
    question: "Can remote workers and international applicants use this?",
    answer:
      "Yes. Employers worldwide use similar parsing and keyword search in applicant tracking systems. Match spelling and title norms to each posting, then run the checker on the exact file you plan to submit—whether the role is local, remote, or cross-border.",
  },
  {
    question: "Should I stuff keywords to beat the ATS?",
    answer:
      "No—keyword stuffing reads hollow to recruiters and can backfire when a human reviews your file. Weave truthful terms from the posting into experience and skills where you can explain them. That builds an ATS friendly resume that still sounds like you.",
  },
  {
    question: "What is a resume parser?",
    answer:
      "A resume parser extracts text and sections from your PDF or DOCX so applicant tracking systems can index skills and experience. If parsing fails, your qualifications may never reach a recruiter. Our resume scanner flags layout and export issues that break parsing.",
  },
  {
    question: "How often should I re-run the checker?",
    answer:
      "After every meaningful edit: new role target, reordered bullets, layout change, or a different job description. Small tweaks can change extraction, so a quick second pass keeps your ATS compatible resume aligned with what parsers will see.",
  },
  {
    question: "How fast is resume analysis?",
    answer:
      "Most checks complete in under a minute after upload or paste. You get overall score, formatting flags, keyword gaps, section feedback, and priority fixes immediately—no waiting for a human reviewer.",
  },
];
