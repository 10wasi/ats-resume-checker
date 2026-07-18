/** Topic cluster map — every pillar links to supporting URLs for internal SEO. */
export type TopicCluster = {
  pillar: string;
  pillarPath: string;
  supporting: { path: string; label: string }[];
};

export const TOPIC_CLUSTERS: TopicCluster[] = [
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
];
