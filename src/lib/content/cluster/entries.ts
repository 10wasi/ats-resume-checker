import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import {
  CTR_ATS_RESUME_CHECKER_ONLINE,
  CTR_ATS_SCORE_CHECKER,
  CTR_FREE_ATS_RESUME_CHECKER,
  CTR_RESUME_ANALYZER,
  CTR_RESUME_KEYWORD_CHECKER,
  CTR_RESUME_PARSER,
} from "@/lib/seo/ctr-metadata";
import { FREE_ATS_RESUME_CHECKER_BODY } from "./free-ats-resume-checker-body";
import { ATS_RESUME_CHECKER_ONLINE_BODY } from "./ats-resume-checker-online-body";
import { RESUME_KEYWORD_CHECKER_BODY } from "./resume-keyword-checker-body";
import { ATS_SCORE_CHECKER_BODY } from "./ats-score-checker-body";
import { RESUME_ANALYZER_BODY } from "./resume-analyzer-body";
import { RESUME_PARSER_BODY } from "./resume-parser-body";
import { CLUSTER_WORKFLOW_APPENDIX } from "./shared-appendix";

export const freeAtsResumeCheckerEntry: CareerLandingEntry = {
  id: "free-ats-resume-checker",
  path: "/free-ats-resume-checker",
  breadcrumbLabel: "Free ATS resume checker",
  ctr: CTR_FREE_ATS_RESUME_CHECKER,
  faqItems: [
    {
      question: "Is the free ATS resume checker really free?",
      answer:
        "Yes. Upload or paste your resume for ATS score, parser preview, keyword gaps, and format flags—no credit card required for standard scans.",
    },
    {
      question: "What does a free ATS resume check include?",
      answer:
        "Compatibility score, extracted text preview, structure flags, optional job-description match, and an ordered fix checklist—not a teaser that hides gaps.",
    },
    {
      question: "PDF or Word for a free ATS scan?",
      answer:
        "Both work when exported simply with selectable text. Always scan the exact file you will submit to the employer portal.",
    },
    {
      question: "How is a free ATS check different from a paid scanner?",
      answer:
        "Core parse, score, and keyword gap analysis are free on ResumeIQ. Paid tools may add CRM features you do not control as an applicant; pre-apply QA does not require a subscription.",
    },
    {
      question: "What ATS score should I aim for on a free check?",
      answer:
        "There is no universal pass mark. Fix parser failures first, then tailor keywords per posting. Many competitive files land in the 70–85 range with clean extracted text.",
    },
    {
      question: "Do I need an account to use the free ATS resume checker?",
      answer:
        "Standard checks work without signup. Create an account only if you want saved history or advanced workflows described in the Career Success Hub.",
    },
    {
      question: "Can I re-check my resume for free after edits?",
      answer:
        "Yes. Re-run the checker after every export change—layout tweaks often move scores more than copy edits alone.",
    },
    {
      question: "Where can I learn how the free ATS score is calculated?",
      answer:
        "Read our methodology page for transparent weighting on parse health, keywords, structure, and match—scores are estimates, not employer guarantees.",
    },
  ],
  body: FREE_ATS_RESUME_CHECKER_BODY + CLUSTER_WORKFLOW_APPENDIX,
};

export const atsResumeCheckerOnlineEntry: CareerLandingEntry = {
  id: "ats-resume-checker-online",
  path: "/ats-resume-checker-online",
  breadcrumbLabel: "ATS resume checker online",
  ctr: CTR_ATS_RESUME_CHECKER_ONLINE,
  faqItems: [
    {
      question: "Can I run an ATS resume checker online without installing software?",
      answer:
        "Yes. ResumeIQ runs in any modern browser—upload PDF or DOCX and get parse preview, score, and fixes without plugins or desktop apps.",
    },
    {
      question: "Is an online ATS checker as accurate as a desktop tool?",
      answer:
        "Parsing runs server-side; accuracy depends on your file, not the browser. A web checker purpose-built for ATS beats guessing in Word or Canva.",
    },
    {
      question: "Can I check my resume online from a phone?",
      answer:
        "Mobile browsers work well for upload and re-checks. Do heavy bullet rewrites on desktop; use phone to verify the latest PDF still parses.",
    },
    {
      question: "What file types does the online ATS checker accept?",
      answer:
        "PDF and DOCX with selectable text are supported. Avoid photo scans or image-only PDFs when possible—they rely on OCR and parse less reliably.",
    },
    {
      question: "Is it safe to upload my resume to an online checker?",
      answer:
        "Use HTTPS sites with clear privacy terms. ResumeIQ processes files for analysis; redact references or full street address if you prefer.",
    },
    {
      question: "How long does an online ATS scan take?",
      answer:
        "Most scans complete in under two minutes depending on file size. Read extracted text before focusing on the score integer.",
    },
    {
      question: "Do I need to create an account for the online checker?",
      answer:
        "No account is required for standard online scans. Sign in only if you want saved results or extended platform features.",
    },
    {
      question: "What should I do after an online ATS check?",
      answer:
        "Fix format flags first, then keyword gaps with a job description, re-upload the submission file, and confirm extracted text improved before applying.",
    },
  ],
  body: ATS_RESUME_CHECKER_ONLINE_BODY + CLUSTER_WORKFLOW_APPENDIX,
};

export const resumeKeywordCheckerEntry: CareerLandingEntry = {
  id: "resume-keyword-checker",
  path: "/resume-keyword-checker",
  breadcrumbLabel: "Resume keyword checker",
  ctr: CTR_RESUME_KEYWORD_CHECKER,
  faqItems: [
    {
      question: "What is a resume keyword checker?",
      answer:
        "It compares your resume text to job posting language and highlights missing skills, tools, certifications, and role terms you should add where you have proof.",
    },
    {
      question: "Do I need a job description for keyword checking?",
      answer:
        "A posting gives the best gap list. Without one, the checker still flags thin skills sections and weak vocabulary on your master resume.",
    },
    {
      question: "Is keyword stuffing recommended?",
      answer:
        "No. Ethical optimization weaves posting terms into bullets you can defend in an interview—never invisible footer dumps or fabricated skills.",
    },
    {
      question: "How many keywords should I add per application?",
      answer:
        "Typical tailoring adds roughly 5–12 terms per role family into recent bullets and skills—not every synonym in the posting.",
    },
    {
      question: "Why do keywords not change my score?",
      answer:
        "If terms do not appear in extracted parser text—because of columns or icons—the score will not move. Fix layout before keyword edits.",
    },
    {
      question: "Can a keyword checker see acronyms and spelled-out terms?",
      answer:
        "Yes when they appear in posting and resume text. Use both forms naturally once when space allows, e.g., SEO (search engine optimization).",
    },
    {
      question: "How is keyword checking different from match score?",
      answer:
        "Keyword gaps list missing terms; match score summarizes overall overlap with a posting. Use gaps to improve match—not the other way around.",
    },
    {
      question: "Where should I place keywords on my resume?",
      answer:
        "Prioritize recent experience bullets with metrics, then skills and summary. Certifications use exact issuer names; avoid repeating the same term excessively.",
    },
  ],
  body: RESUME_KEYWORD_CHECKER_BODY + CLUSTER_WORKFLOW_APPENDIX,
};

export const atsScoreCheckerEntry: CareerLandingEntry = {
  id: "ats-score-checker",
  path: "/ats-score-checker",
  breadcrumbLabel: "ATS score checker",
  ctr: CTR_ATS_SCORE_CHECKER,
  faqItems: [
    {
      question: "What is an ATS score on a resume?",
      answer:
        "It is a compatibility percentage estimating parse health, structure, and language coverage—not a hiring decision or universal pass/fail grade.",
    },
    {
      question: "What is a good ATS score?",
      answer:
        "Many competitive resumes fall between 70 and 85 with clean extracted text. Below 55 often signals parser emergencies; fix layout before keywords.",
    },
    {
      question: "Why did my ATS score drop after a redesign?",
      answer:
        "Visual templates often break parsers. Two-column or icon-heavy layouts can lower scores even when the resume looks better to humans.",
    },
    {
      question: "Is ATS score the same as job match percentage?",
      answer:
        "No. Compatibility score reflects overall file health; match score measures overlap with a specific job description when you paste one.",
    },
    {
      question: "Can I trust a third-party ATS score?",
      answer:
        "Treat it as a diagnostic. Employers use different vendors and weights—improve relative to your baseline and verify extracted text, not chase perfection.",
    },
    {
      question: "How fast can I improve my ATS score?",
      answer:
        "Single-column export fixes often produce the largest jump in one iteration. Keyword tailoring adds smaller gains once parse is stable.",
    },
    {
      question: "Should I apply if my score is below 70?",
      answer:
        "If parse is clean and match is strong for must-have skills, you may still apply. If extracted text is garbled, fix before spending applications.",
    },
    {
      question: "How often should I re-check my ATS score?",
      answer:
        "After every export change—new template, new PDF settings, or major bullet edits. The submission file should always match the last scanned file.",
    },
  ],
  body: ATS_SCORE_CHECKER_BODY + CLUSTER_WORKFLOW_APPENDIX,
};

export const resumeAnalyzerEntry: CareerLandingEntry = {
  id: "resume-analyzer",
  path: "/resume-analyzer",
  breadcrumbLabel: "Resume analyzer",
  ctr: CTR_RESUME_ANALYZER,
  faqItems: [
    {
      question: "What does a resume analyzer evaluate?",
      answer:
        "Section-level clarity, bullet impact, summary strength, skills alignment, and checklists—what recruiters skim after ATS parses your file.",
    },
    {
      question: "Is a resume analyzer the same as an ATS checker?",
      answer:
        "No. ATS checks focus on parse and compatibility; analyzers focus on human-readable quality. Use both: fix extraction first, then polish narrative.",
    },
    {
      question: "Can AI resume analysis invent achievements?",
      answer:
        "Suggestions are drafts—you must verify every metric and tool. Never publish claims you cannot discuss in an interview.",
    },
    {
      question: "Which resume sections matter most to analyzers?",
      answer:
        "Summary and the most recent three roles carry the most weight for six-second skims. Older jobs can be condensed if space is tight.",
    },
    {
      question: "How do I turn analyzer warnings into fixes?",
      answer:
        "Replace duty language with metrics, align summary to target title, prove listed skills in bullets, and re-run after each revision.",
    },
    {
      question: "Should students use a resume analyzer?",
      answer:
        "Yes. It helps convert projects and internships into outcome bullets and flags generic summaries common in early-career resumes.",
    },
    {
      question: "Why does analyzer feedback conflict with keyword tools?",
      answer:
        "Keyword tools push posting terms; analyzers push readability. Integrate terms into metric-driven bullets instead of lists or stuffing.",
    },
    {
      question: "When should I stop running the resume analyzer?",
      answer:
        "When parse is clean, checklist items are resolved, and marginal edits no longer improve clarity—shift time to applications and interviews.",
    },
  ],
  body: RESUME_ANALYZER_BODY + CLUSTER_WORKFLOW_APPENDIX,
};

export const resumeParserEntry: CareerLandingEntry = {
  id: "resume-parser",
  path: "/resume-parser",
  breadcrumbLabel: "Resume parser",
  ctr: CTR_RESUME_PARSER,
  faqItems: [
    {
      question: "What is a resume parser in ATS hiring?",
      answer:
        "Software that extracts text from your file and maps employers, titles, dates, and skills into searchable fields—before any human reads your layout.",
    },
    {
      question: "How do I test if my resume parses correctly?",
      answer:
        "Upload to the ATS checker and read extracted text side-by-side with your PDF. If order or contact info is wrong, fix the template before applying.",
    },
    {
      question: "Why does my resume look fine but parse badly?",
      answer:
        "Columns, text boxes, icon contact rows, and tables break extraction. Parsers read plain text order, not visual design.",
    },
    {
      question: "Do ATS systems read PDF resumes?",
      answer:
        "Yes—text-based PDFs parse well. Image-only or scanned PDFs depend on OCR and often lose structure or characters.",
    },
    {
      question: "Is DOCX better than PDF for parsing?",
      answer:
        "Both work with clean structure. Choose whichever your target portal accepts; simplicity matters more than extension.",
    },
    {
      question: "Can parsers read skills in a sidebar?",
      answer:
        "Often no—sidebars extract out of order or drop entirely. Move skills under a standard heading in the main column.",
    },
    {
      question: "Will creative section titles hurt parsing?",
      answer:
        "Non-standard headings like 'My Journey' may not map to experience fields. Use conventional labels for core sections.",
    },
    {
      question: "Should I fix parsing before keywords?",
      answer:
        "Always. Keywords added to unparseable regions will not index—confirm terms appear in extracted text preview after every edit.",
    },
  ],
  body: RESUME_PARSER_BODY + CLUSTER_WORKFLOW_APPENDIX,
};

/** All cluster landing entries — wire into registry when pages ship. */
export const CLUSTER_LANDING_ENTRIES: CareerLandingEntry[] = [
  freeAtsResumeCheckerEntry,
  atsResumeCheckerOnlineEntry,
  resumeKeywordCheckerEntry,
  atsScoreCheckerEntry,
  resumeAnalyzerEntry,
  resumeParserEntry,
];
