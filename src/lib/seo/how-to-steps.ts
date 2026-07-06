import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { RESUME_JD_MATCH_PATH } from "@/lib/content/resume-job-description-match-body";
import { ATS_RESUME_CHECKLIST_PATH } from "@/lib/content/ats-resume-checklist-body";

export type HowToStep = { name: string; text: string };

export const HOWTO_RESUME_CHECKER: HowToStep[] = [
  {
    name: "Upload or paste your resume",
    text: "Add a PDF, DOCX, or paste plain text from your document.",
  },
  {
    name: "Optionally paste a job description",
    text: "Include a posting for keyword match score and missing terms.",
  },
  {
    name: "Run the ATS analysis",
    text: "Review ATS score, compatibility, strengths, weaknesses, and priority fixes.",
  },
];

export const HOWTO_RESUME_MATCH: HowToStep[] = [
  {
    name: "Upload your resume",
    text: "Use PDF, DOCX, or paste resume text into the match analyzer.",
  },
  {
    name: "Paste the job description",
    text: "Copy the full posting or responsibilities section from the role.",
  },
  {
    name: "Analyze match",
    text: "Get resume match score, missing keywords, skill gaps, and suggested fixes.",
  },
];

export const HOWTO_ATS_CHECKLIST: HowToStep[] = [
  {
    name: "Run the copy-paste test",
    text: "Export PDF to Notepad—confirm logical text order.",
  },
  {
    name: "Verify format and headings",
    text: "Single column, standard headings, contact in body text.",
  },
  {
    name: "Align keywords with proof",
    text: "Add posting terms to recent bullets where truthful.",
  },
  {
    name: "Run the ATS Resume Checker",
    text: "Score the exact file you plan to upload before applying.",
  },
];

export const HOWTO_HOW_ATS_WORKS: HowToStep[] = [
  {
    name: "Check if your resume parses correctly",
    text: "Upload your PDF or DOCX to the ATS Resume Checker and review the extracted text section — confirm it reads in logical order.",
  },
  {
    name: "Fix format issues first",
    text: "If extracted text is scrambled, switch to a single-column Word or Google Docs export with standard headings (Experience, Education, Skills).",
  },
  {
    name: "Run keyword match analysis",
    text: "Paste your target job description into the Resume Match Analyzer to see which required terms are missing from your resume.",
  },
  {
    name: "Add missing keywords with proof",
    text: "Insert 5–8 posting-specific terms into recent experience bullets where you genuinely used those skills or tools.",
  },
  {
    name: "Re-export and re-check",
    text: "Export the revised PDF and run the ATS Resume Checker again on the exact file you plan to submit.",
  },
];

export const HOWTO_ATS_SCORE: HowToStep[] = [
  {
    name: "Run a baseline ATS score check",
    text: "Upload your current resume PDF to the free ATS Resume Checker to get your starting score and format flags.",
  },
  {
    name: "Fix critical format flags",
    text: "Address any layout issues (columns, headers, image PDFs) before editing copy — format fixes raise scores fastest.",
  },
  {
    name: "Run resume match analysis",
    text: "Paste a target job description to get match score and a prioritized list of missing keywords specific to that role.",
  },
  {
    name: "Edit bullets to close keyword gaps",
    text: "Add 5–8 missing terms from the posting into experience bullets where you have genuine proof — not keyword dumps.",
  },
  {
    name: "Re-check with the same binary file",
    text: "Export the edited resume and re-run the checker on the exact PDF you plan to upload — confirm improvement before applying.",
  },
];

export const HOWTO_URLS = {
  checker: RESUME_CHECKER_PATH,
  match: RESUME_JD_MATCH_PATH,
  checklist: ATS_RESUME_CHECKLIST_PATH,
  howAtsWorks: "/how-ats-works",
  atsScore: "/ats-score-explained",
} as const;
