import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Canonical internal-link cluster for resume optimization topic silo. */
export const TOPIC_CLUSTER_LINKS = [
  {
    href: RESUME_CHECKER_PATH,
    label: "ATS Resume Checker",
    desc: "Free score, keyword gaps, and format flags",
  },
  {
    href: "/resume-job-description-match",
    label: "Resume Match Analyzer",
    desc: "Compare resume to any job description",
  },
  {
    href: "/resume-examples",
    label: "Resume Examples",
    desc: "ATS-friendly samples by role",
  },
  {
    href: "/ats-resume-checklist-2026",
    label: "ATS Resume Checklist",
    desc: "Pre-submit QA before you apply",
  },
  {
    href: "/career-success-hub",
    label: "Career Success Hub",
    desc: "Tools, guides, and optimization workflows",
  },
] as const;
