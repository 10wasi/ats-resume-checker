/**
 * Sprint 3 — full topic cluster hierarchy for internal linking & topical authority.
 * Homepage → Categories → Landings → Blogs → FAQs → Comparisons → Glossary → Resources
 */
export type ClusterNode = {
  label: string;
  path: string;
  children?: ClusterNode[];
};

export const TOPIC_CLUSTER_ARCHITECTURE: ClusterNode[] = [
  {
    label: "Homepage — Free ATS Resume Checker",
    path: "/",
    children: [
      {
        label: "Category — Checker Tools",
        path: "/resume-checker",
        children: [
          { label: "Free ATS Resume Checker", path: "/free-ats-resume-checker" },
          { label: "ATS Checker Online", path: "/ats-resume-checker-online" },
          { label: "Resume Analyzer", path: "/resume-analyzer" },
          { label: "Resume Parser", path: "/resume-parser" },
          { label: "ATS Score Checker", path: "/ats-score-checker" },
          { label: "Keyword Checker", path: "/resume-keyword-checker" },
        ],
      },
      {
        label: "Category — Comparisons",
        path: "/compare",
        children: [
          { label: "Jobscan Alternative", path: "/jobscan-alternative" },
          { label: "Resume Worded Alternative", path: "/resumeworded-alternative" },
          { label: "Enhancv Alternative", path: "/enhancv-alternative" },
          { label: "Kickresume Alternative", path: "/kickresume-alternative" },
          { label: "Teal Alternative", path: "/teal-alternative" },
        ],
      },
      {
        label: "Category — Resources",
        path: "/resume-resources",
        children: [
          { label: "Skills Library", path: "/resume-skills-library" },
          { label: "Action Verbs", path: "/resume-action-verbs" },
          { label: "Templates Guide", path: "/ats-resume-templates" },
          { label: "Keywords Guide", path: "/resume-keywords" },
          { label: "ATS Fonts", path: "/ats-friendly-fonts" },
          { label: "ATS Formatting", path: "/ats-resume-format" },
          { label: "Resume Mistakes", path: "/ats-resume-mistakes" },
          { label: "Resume Length", path: "/resume-length-guide" },
          { label: "File Types", path: "/resume-file-types" },
        ],
      },
      {
        label: "Category — By Industry",
        path: "/resume-checker/software-engineer",
        children: [
          { label: "Software Engineers", path: "/resume-checker/software-engineer" },
          { label: "Marketing", path: "/resume-checker/marketing-manager" },
          { label: "Finance", path: "/resume-checker/finance" },
          { label: "Accounting", path: "/resume-checker/accountant" },
          { label: "Healthcare", path: "/resume-checker/healthcare" },
          { label: "Students", path: "/resume-checker/students" },
          { label: "Freshers", path: "/resume-checker/freshers" },
          { label: "Managers", path: "/resume-checker/manager" },
          { label: "Project Managers", path: "/resume-checker/project-manager" },
          { label: "Teachers", path: "/resume-checker/teachers" },
          { label: "Graphic Designers", path: "/resume-checker/graphic-designer" },
          { label: "HR Professionals", path: "/resume-checker/hr-manager" },
          { label: "Data Analysts", path: "/resume-checker/data-analyst" },
          { label: "UX Designers", path: "/resume-checker/ux-designer" },
          { label: "Product Managers", path: "/resume-checker/product-manager" },
        ],
      },
      {
        label: "Category — By Country",
        path: "/resume-checker-country",
        children: [
          { label: "USA", path: "/resume-checker-usa" },
          { label: "UK", path: "/resume-checker-uk" },
          { label: "Canada", path: "/resume-checker-canada" },
          { label: "Australia", path: "/resume-checker-australia" },
          { label: "Germany", path: "/resume-checker-germany" },
          { label: "UAE", path: "/resume-checker-uae" },
          { label: "Pakistan", path: "/resume-checker-pakistan" },
          { label: "India", path: "/resume-checker-india" },
        ],
      },
      {
        label: "Category — Blog",
        path: "/blog",
      },
      {
        label: "Category — FAQ",
        path: "/faq-center",
      },
      {
        label: "Category — Glossary",
        path: "/glossary",
      },
    ],
  },
];

/** Flat list of all architecture paths for sitemap / orphan checks. */
export function getArchitecturePaths(): string[] {
  const out: string[] = [];
  function walk(nodes: ClusterNode[]) {
    for (const n of nodes) {
      out.push(n.path);
      if (n.children) walk(n.children);
    }
  }
  walk(TOPIC_CLUSTER_ARCHITECTURE);
  return out;
}
