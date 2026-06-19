export const RESOURCE_HUB_PATH = "/resource-hub" as const;

export const RESOURCE_HUB_GUIDES = [
  { title: "ATS Resume Examples", href: "/ats-resume-examples", desc: "Good vs bad layouts that parse" },
  { title: "ATS Resume Checklist", href: "/ats-resume-checklist-2026", desc: "Pre-submit QA checklist" },
  { title: "Resume Keywords Database", href: "/resume-keywords", desc: "Keywords by profession" },
  { title: "ATS Formatting Guide", href: "/ats-resume-format", desc: "Layout & export rules" },
  { title: "ATS Resume Templates", href: "/ats-resume-templates", desc: "Templates that parse" },
  { title: "Resume Match Guide", href: "/resume-match-score", desc: "Match score explained" },
  { title: "Resume Optimization Guide", href: "/resume-optimization", desc: "Step-by-step workflow" },
  { title: "Resume Rejection Guide", href: "/why-resume-gets-rejected", desc: "Why resumes fail ATS" },
] as const;

export const RESOURCE_HUB_TOOLS = [
  { title: "ATS Resume Checker", href: "/resume-checker" },
  { title: "Resume Match Tool", href: "/resume-match-analyzer" },
  { title: "Resume Keyword Tool", href: "/resume-keyword-tool" },
  { title: "AI Resume Suggestions", href: "/ai-resume-rewrite" },
] as const;

export const RESOURCE_HUB_TRUST = [
  { title: "Methodology", href: "/methodology" },
  { title: "How ATS Works", href: "/how-ats-works" },
  { title: "FAQ Center", href: "/faq-center" },
  { title: "About", href: "/about" },
] as const;
