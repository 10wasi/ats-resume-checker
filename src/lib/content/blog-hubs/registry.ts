import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";

export type BlogHubPost = {
  slug: string;
  title: string;
  description: string;
};

export type BlogHubEntry = {
  path: string;
  breadcrumbLabel: string;
  ctr: PageCtrMeta;
  intro: string;
  posts: BlogHubPost[];
};

export const BLOG_HUBS: BlogHubEntry[] = [
  {
    path: "/blog/how-ats-works",
    breadcrumbLabel: "How ATS works",
    ctr: {
      title: "How ATS Works — Global Hiring Software Guide",
      description:
        "How ATS filters candidates worldwide: parsing, keywords, scoring & recruiter skim. Free resume analyzer + guides to improve resume score.",
      h1: "How ATS Works: Global Resume Screening Explained",
      primaryKeyword: "how ATS works",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Understand how applicant tracking systems read resumes—then test your file with our free ATS Resume Checker.",
    posts: [
      {
        slug: "how-to-make-your-resume-ats-friendly-2026-complete-guide",
        title: "How to make your resume ATS-friendly (2026)",
        description: "Complete guide to ATS resume format, keywords, and scoring.",
      },
      {
        slug: "how-to-pass-ats-resume-system",
        title: "How to pass ATS resume screening",
        description: "Practical steps to pass automated resume filters.",
      },
      {
        slug: "how-recruiters-read-your-resume",
        title: "How recruiters read your resume",
        description: "What happens after ATS—human skim patterns.",
      },
      {
        slug: "how-to-beat-ats-resume-filters-2026",
        title: "How to beat ATS resume scanners",
        description: "Fix parse and keyword failures before you apply.",
      },
    ],
  },
  {
    path: "/blog/resume-mistakes",
    breadcrumbLabel: "Resume mistakes",
    ctr: {
      title: "ATS Resume Mistakes — Fixes Before You Apply",
      description:
        "ATS resume mistakes to avoid: format, keywords, bullets & export errors. Why resumes fail interviews—free resume feedback tool included.",
      h1: "Resume Mistakes That Block Interviews",
      primaryKeyword: "ATS resume mistakes",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Common resume mistakes that cost interviews—with links to fix each issue using free tools.",
    posts: [
      {
        slug: "10-resume-mistakes-ats-rejections-2026",
        title: "10 resume mistakes ATS rejections (2026)",
        description: "Silent rejection triggers and fast fixes.",
      },
      {
        slug: "why-resume-rejected-ats-top-reasons-fixes",
        title: "Why resume rejected by ATS — top reasons",
        description: "Parser vs keyword vs fit failures explained.",
      },
      {
        slug: "top-ats-resume-mistakes-that-get-you-rejected-fix-them-fast",
        title: "Top ATS resume mistakes — fix them fast",
        description: "High-impact errors with before/after guidance.",
      },
      {
        slug: "top-resume-mistakes-to-avoid",
        title: "Top resume mistakes to avoid",
        description: "Cross-role mistakes recruiters see repeatedly.",
      },
    ],
  },
  {
    path: "/blog/ats-keywords-guide",
    breadcrumbLabel: "ATS keywords guide",
    ctr: {
      title: "Resume Keywords for ATS — Placement Guide",
      description:
        "Resume keywords for ATS: where to place terms, avoid stuffing & raise match score. Free resume keyword analyzer + profession lists.",
      h1: "ATS Keywords Guide: Resume Keyword Analyzer Tips",
      primaryKeyword: "resume keywords for ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Ethical ATS keyword placement—extract from postings, compare to your resume, and improve overlap.",
    posts: [
      {
        slug: "best-ats-resume-keywords-improve-visibility-2026",
        title: "Best ATS resume keywords for visibility",
        description: "Keyword strategy that raises match without stuffing.",
      },
      {
        slug: "best-resume-keywords-2026-ats-guide",
        title: "Best resume keywords 2026 ATS guide",
        description: "Role-agnostic keyword patterns for job posts.",
      },
      {
        slug: "best-ats-resume-keywords-tech-jobs-2026",
        title: "Best resume keywords for software engineers",
        description: "Tech stack and engineering ATS keyword lists.",
      },
      {
        slug: "top-resume-keywords-that-get-you-hired-fast",
        title: "Top resume keywords that get you hired",
        description: "High-signal terms recruiters search for.",
      },
    ],
  },
  {
    path: "/blog/remote-job-resume-tips",
    breadcrumbLabel: "Remote job resume tips",
    ctr: {
      title: "Remote Job Resume Tips — ATS Optimization",
      description:
        "Resume tips for remote jobs: ATS keywords, global applications & interview readiness. Free CV scanner tool for worldwide applicants.",
      h1: "Remote Job Resume Tips: Global ATS Optimization",
      primaryKeyword: "resume tips for remote jobs",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Remote employers use the same ATS stacks—tailor keywords per posting regardless of your location.",
    posts: [
      {
        slug: "why-qualified-candidates-still-get-rejected-2026",
        title: "Why qualified candidates still get rejected",
        description: "Screening failures when experience is real.",
      },
      {
        slug: "job-winning-resume-strategies",
        title: "Job-winning resume strategies",
        description: "Application workflows for competitive markets.",
      },
      {
        slug: "ai-resume-optimization-guide",
        title: "AI resume optimization guide",
        description: "Using AI resume review tools ethically.",
      },
      {
        slug: "how-to-improve-resume-score-instantly",
        title: "How to improve resume score instantly",
        description: "Fast wins before your next application batch.",
      },
    ],
  },
];

export function getBlogHubByPath(path: string): BlogHubEntry | undefined {
  return BLOG_HUBS.find((h) => h.path === path);
}
