/** Nine hub sections — nav grid, anchors, and ItemList schema. */

export type HubSection = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const ATS_HUB_SECTIONS: HubSection[] = [
  {
    id: "ats-resume-guide",
    title: "ATS Resume Guide",
    description:
      "Complete walkthrough of ATS parsing, scoring, and how to build an ATS friendly resume from scratch.",
    href: "/ultimate-ats-resume-guide",
    cta: "Read the guide",
  },
  {
    id: "ats-resume-checklist",
    title: "ATS Resume Checklist",
    description:
      "Print-friendly pre-submit checklist for format, keywords, contact block, and export QA.",
    href: "/ats-resume-checklist-2026",
    cta: "Open checklist",
  },
  {
    id: "ats-resume-examples",
    title: "ATS Resume Examples",
    description:
      "Good vs bad layouts, bullet patterns, and ATS resume examples that parse cleanly.",
    href: "/blog/best-ats-friendly-resume-examples-2026",
    cta: "View examples",
  },
  {
    id: "ats-keywords-guide",
    title: "ATS Keywords Guide",
    description:
      "Ethical ATS resume keywords placement—technical skills, tools, and certifications with proof.",
    href: "/blog/best-ats-resume-keywords-improve-visibility-2026",
    cta: "Keyword strategy",
  },
  {
    id: "ats-formatting-guide",
    title: "ATS Formatting Guide",
    description:
      "ATS resume format rules: single column, standard headings, typography, and file types.",
    href: "/blog/best-ats-resume-format-2026-templates-tips",
    cta: "Format guide",
  },
  {
    id: "resume-job-match",
    title: "Resume vs Job Description Matching",
    description:
      "Match resume to job description—resume match score, missing keywords, and skill gaps.",
    href: "/resume-job-description-match",
    cta: "Run match analyzer",
  },
  {
    id: "ats-resume-mistakes",
    title: "ATS Resume Mistakes",
    description:
      "Top ATS resume mistakes that trigger rejections—and fast fixes before you apply again.",
    href: "/blog/10-resume-mistakes-ats-rejections-2026",
    cta: "Avoid mistakes",
  },
  {
    id: "ats-hub-faq",
    title: "FAQ",
    description:
      "Answers on ATS Resume Checker usage, hub navigation, and building an ATS compatible resume.",
    href: "#ats-hub-faq",
    cta: "Jump to FAQ",
  },
  {
    id: "final-ats-action-plan",
    title: "Final ATS Action Plan",
    description:
      "One-session workflow: test, fix format, tailor keywords, re-check, apply with confidence.",
    href: "#final-ats-action-plan",
    cta: "Action plan",
  },
];
