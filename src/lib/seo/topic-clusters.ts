/** Topic cluster map — every pillar links to supporting URLs for internal SEO. */
export type TopicCluster = {
  pillar: string;
  pillarPath: string;
  supporting: { path: string; label: string }[];
};

export const TOPIC_CLUSTERS: TopicCluster[] = [
  {
    pillar: "Free ATS Resume Checker",
    pillarPath: "/free-ats-resume-checker",
    supporting: [
      { path: "/ats-resume-checker-online", label: "Checker online" },
      { path: "/resume-keyword-checker", label: "Keyword checker" },
      { path: "/ats-score-checker", label: "ATS score" },
      { path: "/resume-analyzer", label: "Resume analyzer" },
      { path: "/resume-parser", label: "Parser test" },
      { path: "/resume-optimization", label: "Optimization" },
    ],
  },
  {
    pillar: "ATS Resume Checker",
    pillarPath: "/",
    supporting: [
      { path: "/resume-checker", label: "Upload & score tool" },
      { path: "/free-resume-checker-online", label: "Free checker online" },
      { path: "/ats-resume-checker", label: "How checker works" },
      { path: "/resume-score-checker", label: "Score checker guide" },
      { path: "/methodology", label: "Scoring methodology" },
    ],
  },
  {
    pillar: "Resume Parser",
    pillarPath: "/resume-parsing",
    supporting: [
      { path: "/resume-checker", label: "Parser test tool" },
      { path: "/ats-resume-format", label: "ATS format guide" },
      { path: "/ats-resume-mistakes", label: "Parse-breaking mistakes" },
      { path: "/how-ats-works", label: "How ATS reads files" },
    ],
  },
  {
    pillar: "Resume Keywords",
    pillarPath: "/resume-keywords",
    supporting: [
      { path: "/ats-keywords-finder", label: "Keywords finder" },
      { path: "/resume-keywords-checker", label: "Keywords checker" },
      { path: "/ats-resume-keywords", label: "Keyword placement" },
      { path: "/resume-job-description-match", label: "Job match tool" },
    ],
  },
  {
    pillar: "Resume Optimization",
    pillarPath: "/complete-guide-ats-resume-optimization",
    supporting: [
      { path: "/how-to-improve-resume-score", label: "Improve score" },
      { path: "/how-to-tailor-resume-for-job-description", label: "Tailor for job" },
      { path: "/resume-optimization", label: "Optimization guide" },
      { path: "/career-success-hub", label: "Tool hub" },
    ],
  },
  {
    pillar: "Resume Review",
    pillarPath: "/resume-review",
    supporting: [
      { path: "/ai-resume-review", label: "AI resume review" },
      { path: "/ats-resume-review", label: "ATS review" },
      { path: "/resume-screening-explained", label: "Screening explained" },
      { path: "/cv-checker", label: "CV checker" },
    ],
  },
  {
    pillar: "Resume Mistakes",
    pillarPath: "/ats-resume-mistakes",
    supporting: [
      { path: "/resume-rejected-by-ats", label: "Rejected by ATS" },
      { path: "/why-resume-gets-rejected", label: "Why rejected" },
      { path: "/common-ats-resume-rejection-reasons", label: "Rejection reasons" },
      { path: "/resume-mistakes-that-cost-interviews", label: "Interview mistakes" },
    ],
  },
  {
    pillar: "Resume Formatting",
    pillarPath: "/ats-resume-format",
    supporting: [
      { path: "/ats-resume-templates", label: "Templates" },
      { path: "/ats-friendly-resume-guide", label: "ATS-friendly guide" },
      { path: "/resume-parsing", label: "Resume parser" },
      { path: "/resume-checker", label: "Parser test tool" },
    ],
  },
  {
    pillar: "Interview Preparation",
    pillarPath: "/interview-question-generator",
    supporting: [
      { path: "/why-resume-not-getting-interviews", label: "No interviews" },
      { path: "/resume-screening-explained", label: "Screening explained" },
      { path: "/career-success-hub", label: "Career hub" },
      { path: "/blog", label: "Career blog" },
    ],
  },
  {
    pillar: "Job Search",
    pillarPath: "/career-success-hub",
    supporting: [
      { path: "/resume-optimization", label: "Resume optimization" },
      { path: "/how-to-tailor-resume-for-job-description", label: "Tailor for job" },
      { path: "/resource-hub", label: "Resource hub" },
      { path: "/blog", label: "Job search articles" },
    ],
  },
  {
    pillar: "Resume Scanner",
    pillarPath: "/free-resume-checker-online",
    supporting: [
      { path: "/resume-checker", label: "Free scanner tool" },
      { path: "/cv-checker", label: "CV scanner" },
      { path: "/resume-score-checker", label: "Score checker" },
      { path: "/ai-resume-review", label: "AI resume review" },
    ],
  },
  {
    pillar: "ATS Resume",
    pillarPath: "/ats-resume-hub",
    supporting: [
      { path: "/ats-friendly-resume-guide", label: "ATS-friendly guide" },
      { path: "/ats-resume-checklist-2026", label: "2026 checklist" },
      { path: "/ultimate-ats-resume-guide", label: "Ultimate ATS guide" },
      { path: "/complete-guide-ats-resume-optimization", label: "Complete optimization" },
    ],
  },
  {
    pillar: "Trust & EEAT",
    pillarPath: "/about",
    supporting: [
      { path: "/editorial-policy", label: "Editorial policy" },
      { path: "/methodology", label: "Methodology" },
      { path: "/how-we-score-resumes", label: "How we score" },
      { path: "/our-algorithm", label: "Our algorithm" },
    ],
  },
  {
    pillar: "AI Resume Tools",
    pillarPath: "/resume-optimization-platform",
    supporting: [
      { path: "/resume-bullet-generator", label: "Bullet generator" },
      { path: "/resume-summary-generator", label: "Summary generator" },
      { path: "/cover-letter-generator", label: "Cover letter tool" },
      { path: "/interview-question-generator", label: "Interview prep" },
    ],
  },
  {
    pillar: "Knowledge Center",
    pillarPath: "/knowledge-center",
    supporting: [
      { path: "/how-ats-works", label: "How ATS works" },
      { path: "/resume-parsing", label: "Resume parsing" },
      { path: "/ats-score-explained", label: "ATS score explained" },
      { path: "/resource-hub", label: "Resource hub" },
    ],
  },
];
