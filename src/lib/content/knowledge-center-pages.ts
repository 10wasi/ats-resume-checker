/** ATS Knowledge Center — canonical index of all pillar guides. */

export const KNOWLEDGE_CENTER_PATH = "/knowledge-center" as const;

export type KnowledgeCenterPage = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  cta: string;
};

export const KNOWLEDGE_CENTER_PAGES: KnowledgeCenterPage[] = [
  {
    id: "examples",
    title: "ATS Resume Examples",
    shortTitle: "Examples",
    description:
      "Good vs bad layouts, bullet patterns, and real ATS resume examples that parse cleanly in 2026.",
    href: "/ats-resume-examples",
    cta: "View examples",
  },
  {
    id: "checklist",
    title: "ATS Resume Checklist",
    shortTitle: "Checklist",
    description:
      "Print-friendly pre-submit checklist for format, keywords, contact block, and export QA.",
    href: "/ats-resume-checklist-2026",
    cta: "Open checklist",
  },
  {
    id: "keywords",
    title: "ATS Resume Keywords Guide",
    shortTitle: "Keywords",
    description:
      "Where to place ATS resume keywords—skills, tools, certifications—with proof, not stuffing.",
    href: "/ats-resume-keywords",
    cta: "Keyword strategy",
  },
  {
    id: "format",
    title: "ATS Resume Formatting Guide",
    shortTitle: "Formatting",
    description:
      "ATS resume format rules: single column, standard headings, typography, and file types.",
    href: "/ats-resume-format",
    cta: "Format guide",
  },
  {
    id: "mistakes",
    title: "ATS Resume Mistakes",
    shortTitle: "Mistakes",
    description:
      "Top ATS resume mistakes that trigger silent rejections—and fast fixes before you apply again.",
    href: "/ats-resume-mistakes",
    cta: "Avoid mistakes",
  },
  {
    id: "match",
    title: "Resume Match Tool",
    shortTitle: "Match tool",
    description:
      "Free resume match analyzer—paste a job description for match score, missing keywords, and skill gaps.",
    href: "/resume-job-description-match",
    cta: "Run match analyzer",
  },
  {
    id: "match-score",
    title: "Resume Match Score Guide",
    shortTitle: "Match score",
    description:
      "What resume match score means, good benchmarks, and how to improve keyword overlap before you apply.",
    href: "/resume-match-score",
    cta: "Read match guide",
  },
  {
    id: "industry-examples",
    title: "Resume Examples by Role",
    shortTitle: "By role",
    description:
      "Nine industry resume examples with ATS keywords, mistakes, tips, and FAQs—software, data, PM, marketing, and more.",
    href: "/resume-examples",
    cta: "View examples",
  },
  {
    id: "score",
    title: "ATS Score Explained",
    shortTitle: "ATS score",
    description:
      "What an ATS score measures, what it does not, and how to improve yours before you apply.",
    href: "/ats-score-explained",
    cta: "Understand scoring",
  },
  {
    id: "friendly",
    title: "ATS-Friendly Resume Guide",
    shortTitle: "ATS-friendly",
    description:
      "Step-by-step guide to building an ATS friendly resume from structure through export.",
    href: "/ats-friendly-resume-guide",
    cta: "Build ATS-friendly",
  },
  {
    id: "industry-keywords",
    title: "Resume Keywords by Industry",
    shortTitle: "By industry",
    description:
      "Industry-specific resume keywords for tech, healthcare, finance, marketing, and more.",
    href: "/resume-keywords-by-industry",
    cta: "Industry keywords",
  },
  {
    id: "templates",
    title: "ATS Resume Templates Guide",
    shortTitle: "Templates",
    description:
      "Which ATS resume templates work, which to avoid, and how to test any layout before upload.",
    href: "/ats-resume-templates",
    cta: "Template guide",
  },
];

export function getKnowledgePage(id: string): KnowledgeCenterPage | undefined {
  return KNOWLEDGE_CENTER_PAGES.find((p) => p.id === id);
}

export function getRelatedKnowledgePages(
  excludeId: string,
  limit = 4
): KnowledgeCenterPage[] {
  return KNOWLEDGE_CENTER_PAGES.filter((p) => p.id !== excludeId).slice(
    0,
    limit
  );
}
