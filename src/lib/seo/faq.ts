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
  {
    question: "Does ATS reject Canva resumes?",
    answer:
      "Frequently. Canva resumes export as image-heavy PDFs with embedded fonts and design layers that ATS cannot parse correctly. Skills in sidebars, icons replacing text, and two-column layouts cause the parser to skip or scramble your content. Export to plain DOCX or a single-column Word template, then re-run your ATS scan before submitting.",
  },
  {
    question: "Can ATS read PDF resumes?",
    answer:
      "Yes — if the PDF was exported from a word processor and contains selectable text. ATS cannot read scanned PDFs, image-based PDFs, or PDFs saved from Canva with embedded design layers. Test by opening your PDF and trying to select and copy text. If you cannot select it, convert to DOCX before applying.",
  },
  {
    question: "Why is my resume rejected by ATS?",
    answer:
      "The most common reasons: a multi-column or Canva layout that breaks parsing, contact details in headers that ATS skips, missing job-specific keywords, generic bullet points without measurable outcomes, and non-standard section labels like 'My Story' instead of 'Work Experience'. Our free ATS resume checker identifies all of these in one scan.",
  },
  {
    question: "How many keywords should a resume contain?",
    answer:
      "There is no single number, but as a guide: mirror 6–10 must-have terms directly from the job description (tools, skills, certifications) and 3–5 industry-standard terms. Each keyword should appear inside a bullet point with supporting evidence — not in a standalone keyword block. Quality and placement beat quantity.",
  },
  {
    question: "What is the best resume format for ATS?",
    answer:
      "Single-column chronological or hybrid format, exported as .docx or selectable .pdf. Use standard section headers (Work Experience, Education, Skills), Calibri or Georgia font, plain bullet points, and contact information in the document body — not in headers or text boxes. Avoid tables, columns, graphics, and icon fonts.",
  },
  {
    question: "Can ATS read graphics and images on a resume?",
    answer:
      "No. ATS systems extract text only. Graphs showing skill levels, profile photos, icon sidebars, and background images are either stripped or cause parse errors. Your profile photo will not be seen by the ATS — but it may corrupt the section immediately after it. Remove all graphics from your resume file.",
  },
  {
    question: "What resume format do recruiters prefer?",
    answer:
      "Recruiters see resumes after ATS processing. They consistently prefer: a clean single-column layout they can scan in 6 seconds, bullet points starting with action verbs and containing one measurable outcome each, a two-line professional summary at the top, and standard fonts like Calibri, Garamond, or Georgia at 10–11pt. A well-formatted resume passes ATS and reads well to humans.",
  },
  {
    question: "How do I know if my resume passed ATS?",
    answer:
      "You cannot know for certain from the employer's side, but you can verify the most critical factors: run a free ATS resume checker, confirm all text is selectable in your PDF, check that your top 8 keywords appear in experience bullets (not just a skills list), and ensure your formatting uses a single column with standard section labels. If your checker score is above 75 and your keyword match is above 70%, your file is likely to parse cleanly.",
  },
];

/** Homepage FAQ — 8 high-intent questions only (schema + on-page). */
export const homepageFaqCompact: FaqItem[] = [
  {
    question: "What is a free ATS resume checker?",
    answer:
      "A free ATS resume checker scans your PDF or pasted text for applicant tracking system compatibility — structure, keyword coverage, and parse health — then returns an ATS score and priority fixes. ResumeIQ runs core resume analysis without signup or payment.",
  },
  {
    question: "What does my resume ATS score measure?",
    answer:
      "Your resume ATS score reflects how cleanly hiring software can read your file: heading order, bullet clarity, keyword alignment, and formatting risks. It is a resume score checker signal — not a guarantee of an interview — so you know what to fix before you apply.",
  },
  {
    question: "Why do resumes fail ATS systems?",
    answer:
      "Most failures are technical: two-column layouts, tables, missing job keywords, or bullets without measurable outcomes. The resume scanner flags these so you can build an ATS friendly resume that still reads well to recruiters.",
  },
  {
    question: "How can I improve my ATS score?",
    answer:
      "Fix parsing first (single column, standard headings), then weave posting keywords into experience bullets with proof, and strengthen weak bullets. Re-run resume analysis after each edit — small layout changes can shift extraction.",
  },
  {
    question: "Do you store my resume?",
    answer:
      "Your file is processed to generate feedback for that request. We do not sell resume data or use it to train unrelated models. See our privacy policy for full details.",
  },
  {
    question: "Which file formats work with the resume scanner?",
    answer:
      "PDF and DOCX up to 10 MB. Use selectable text — scanned image PDFs and design-heavy exports often break resume parsing. Export from Word or Google Docs for the cleanest resume review results.",
  },
  {
    question: "What is a resume match score?",
    answer:
      "Resume match score compares your text to a job description — overlap on skills, tools, and role language. Paste a posting in the checker to see missing keywords and match % for that specific application.",
  },
  {
    question: "Is this resume checker really free?",
    answer:
      "Yes. Upload or paste a resume, run ATS scoring, keyword scan, and format checks without an account. Core resume optimization and resume review outputs stay free.",
  },
];
