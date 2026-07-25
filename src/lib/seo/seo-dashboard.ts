/**
 * SEO Dashboard — keyword map for Sprint 3 topical authority.
 * Used internally for content planning; not rendered as a public page.
 */
export type SeoDashboardRow = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetPage: string;
  searchIntent: "informational" | "commercial" | "transactional" | "navigational";
  currentPage: string;
  internalLinks: string[];
  futureBacklinks: string[];
};

export const SEO_DASHBOARD: SeoDashboardRow[] = [
  {
    primaryKeyword: "free ATS resume checker",
    secondaryKeywords: ["ATS resume checker", "resume ATS score", "AI resume checker"],
    targetPage: "/",
    searchIntent: "transactional",
    currentPage: "/",
    internalLinks: ["/free-ats-resume-checker", "/resume-checker", "/ats-score-checker", "/resume-parser"],
    futureBacklinks: ["Career blog guest posts", "Reddit r/resumes resource wiki", "University career center link lists"],
  },
  {
    primaryKeyword: "Jobscan alternative",
    secondaryKeywords: ["Jobscan free", "Jobscan vs", "resume match score"],
    targetPage: "/jobscan-alternative",
    searchIntent: "commercial",
    currentPage: "/jobscan-alternative",
    internalLinks: ["/", "/free-ats-resume-checker", "/resumeworded-alternative", "/resume-job-description-match"],
    futureBacklinks: ["Comparison roundup articles", "Product Hunt alternatives list"],
  },
  {
    primaryKeyword: "Resume Worded alternative",
    secondaryKeywords: ["Resume Worded score", "Resume Worded free"],
    targetPage: "/resumeworded-alternative",
    searchIntent: "commercial",
    currentPage: "/resumeworded-alternative",
    internalLinks: ["/", "/jobscan-alternative", "/resume-analyzer", "/ai-resume-review"],
    futureBacklinks: ["Career coach resource pages"],
  },
  {
    primaryKeyword: "resume resources",
    secondaryKeywords: ["resume skills", "ATS formatting", "resume keywords guide"],
    targetPage: "/resume-resources",
    searchIntent: "informational",
    currentPage: "/resume-resources",
    internalLinks: ["/resume-skills-library", "/ats-friendly-fonts", "/resume-length-guide", "/glossary"],
    futureBacklinks: ["HR newsletter sponsorships", "LinkedIn carousel CTAs to hub"],
  },
  {
    primaryKeyword: "ATS resume checker for software engineers",
    secondaryKeywords: ["developer resume ATS", "tech resume keywords"],
    targetPage: "/resume-checker/software-engineer",
    searchIntent: "transactional",
    currentPage: "/resume-checker/software-engineer",
    internalLinks: ["/", "/resume-keywords", "/blog/resume-keywords-for-software-engineer-2026"],
    futureBacklinks: ["Dev community Discord pins", "Bootcamp partner pages"],
  },
  {
    primaryKeyword: "resume checker USA",
    secondaryKeywords: ["ATS resume USA", "American resume format"],
    targetPage: "/resume-checker-usa",
    searchIntent: "informational",
    currentPage: "/resume-checker-usa",
    internalLinks: ["/", "/resume-checker-uk", "/ats-resume-format"],
    futureBacklinks: ["US career podcast show notes"],
  },
  {
    primaryKeyword: "resume checker India",
    secondaryKeywords: ["ATS resume India", "Naukri resume format"],
    targetPage: "/resume-checker-india",
    searchIntent: "informational",
    currentPage: "/resume-checker-india",
    internalLinks: ["/", "/resume-checker/freshers", "/blog/resume-checker-india-tips-2026"],
    futureBacklinks: ["Indian tech Twitter threads", "Campus placement PDFs"],
  },
  {
    primaryKeyword: "ATS friendly fonts",
    secondaryKeywords: ["best font for ATS", "resume font size"],
    targetPage: "/ats-friendly-fonts",
    searchIntent: "informational",
    currentPage: "/ats-friendly-fonts",
    internalLinks: ["/ats-resume-format", "/resume-file-types", "/resume-resources"],
    futureBacklinks: ["Design blogs citing typography section"],
  },
  {
    primaryKeyword: "why is my resume ATS score low",
    secondaryKeywords: ["low ATS score", "improve ATS score"],
    targetPage: "/blog/why-resume-ats-score-low-2026",
    searchIntent: "informational",
    currentPage: "/blog/why-resume-ats-score-low-2026",
    internalLinks: ["/", "/ats-score-checker", "/how-to-improve-resume-score"],
    futureBacklinks: ["Quora canonical answers", "Medium syndication with canonical"],
  },
  {
    primaryKeyword: "Enhancv ATS checker alternative",
    secondaryKeywords: ["Enhancv ATS", "Enhancv resume score"],
    targetPage: "/enhancv-alternative",
    searchIntent: "commercial",
    currentPage: "/enhancv-alternative",
    internalLinks: ["/", "/ats-resume-templates", "/kickresume-alternative"],
    futureBacklinks: ["Template designer community links"],
  },
];

export function getDashboardByPath(path: string): SeoDashboardRow | undefined {
  return SEO_DASHBOARD.find((r) => r.targetPage === path || r.currentPage === path);
}
