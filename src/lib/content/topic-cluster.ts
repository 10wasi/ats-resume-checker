import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Canonical internal-link cluster for resume optimization topic silo. */
export const TOPIC_CLUSTER_LINKS = [
  {
    href: RESUME_CHECKER_PATH,
    label: "Resume Checker",
    desc: "Free online ATS score and keyword gaps",
  },
  {
    href: "/resume-review",
    label: "Resume Review",
    desc: "Free online rubric + ATS scan",
  },
  {
    href: "/resume-job-description-match",
    label: "Resume Match Analyzer",
    desc: "Compare resume to any job description",
  },
  {
    href: "/resume-keywords",
    label: "Resume Keywords Database",
    desc: "ATS keyword lists by profession",
  },
  {
    href: "/resume-examples",
    label: "Resume Examples",
    desc: "ATS-friendly samples by role",
  },
  {
    href: "/resume-optimization-platform",
    label: "Optimization Platform",
    desc: "All hubs and cornerstone guides",
  },
] as const;
