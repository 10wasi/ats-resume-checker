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

export const HOWTO_URLS = {
  checker: RESUME_CHECKER_PATH,
  match: RESUME_JD_MATCH_PATH,
  checklist: ATS_RESUME_CHECKLIST_PATH,
} as const;
