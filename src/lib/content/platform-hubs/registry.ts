import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const PLATFORM_HUBS_PATH = "/resume-optimization-platform" as const;

export type PlatformHubEntry = {
  slug: string;
  path: string;
  title: string;
  breadcrumbLabel: string;
  ctr: PageCtrMeta;
  intro: string;
  body: string;
  faqItems: FaqItem[];
  toolHref: string;
  toolCtaLabel: string;
  exampleLinks: readonly { href: string; label: string }[];
  guidanceSteps: readonly string[];
};

export const PLATFORM_HUBS: PlatformHubEntry[] = [
  {
    slug: "resume-checker",
    path: "/resume-checker-online",
    title: "Resume Checker",
    breadcrumbLabel: "Resume checker",
    ctr: {
      title: "Resume Checker Free Online — ATS Score & Review",
      description:
        "Resume checker free online: upload PDF, get ATS score, keyword gaps & format fixes. Free resume score checker for job seekers worldwide.",
      h1: "Resume Checker Free Online: ATS Score & Fixes",
      primaryKeyword: "resume checker free online",
      richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
    },
    intro:
      "The free resume checker hub—score, parse health, keywords, and improvement steps in one workflow.",
    body: `
## What the resume checker does

Upload PDF or paste text → get **ATS score**, **format flags**, **missing keywords**, and a **priority fix list**. This is the core of the ResumeIQ platform—not a one-off tool.

[Open free resume checker →](${RESUME_CHECKER_PATH})

## Resume checker workflow

1. Upload the **exact file** you will submit
2. Review extracted text—if garbled, fix layout first
3. Optional: paste job description for match % and tailored keywords
4. Fix top flags, re-export, re-check
5. Run [resume review online](/resume-review) for human-readability

## Resume checker vs other tools

| Tool | Use when |
|------|----------|
| [Resume checker](${RESUME_CHECKER_PATH}) | Baseline ATS health |
| [Resume match analyzer](/resume-match-analyzer) | You have a specific posting |
| [Resume score guide](/resume-score-checker) | Interpreting your % |
| [CV checker](/cv-checker) | CV label, same engine |

## Common mistakes before checking

- Testing a Word draft but submitting PDF (exports differ)
- Using a Canva template without re-scanning
- Ignoring format warnings when score looks OK

See [common ATS rejection reasons](/common-ats-resume-rejection-reasons) for what the checker catches.
`,
    faqItems: [
      {
        question: "Is the resume checker really free online?",
        answer: "Yes—core ATS score, keyword gaps, and format flags require no signup for standard use.",
      },
      {
        question: "PDF or Word for the resume checker?",
        answer: "Both work when exported simply. Always check the exact file you will upload to the employer portal.",
      },
      {
        question: "What is a good ATS score?",
        answer: "There is no universal pass mark. Fix format flags first, then role-specific keywords via the match tool.",
      },
    ],
    toolHref: RESUME_CHECKER_PATH,
    toolCtaLabel: "Run free resume checker",
    exampleLinks: [
      { href: "/resume-examples/software-engineer", label: "Software engineer example" },
      { href: "/resume-examples/data-analyst", label: "Data analyst example" },
      { href: "/resume-examples", label: "Full examples library" },
    ],
    guidanceSteps: [
      "Upload your current PDF to the checker",
      "Fix all format flags before editing copy",
      "Paste a job post for match % and missing keywords",
      "Re-check after every export change",
    ],
  },
  {
    slug: "resume-review",
    path: "/resume-review",
    title: "Resume Review",
    breadcrumbLabel: "Resume review",
    ctr: {
      title: "Resume Review Online — Free Rubric + ATS Scan",
      description:
        "Free resume review online: recruiter rubric + ATS checker + match tool. Fix clarity, keywords & format before you apply worldwide.",
      h1: "Resume Review Online: Free Rubric & ATS Check",
      primaryKeyword: "resume review online",
      richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
    },
    intro: "Human skim + machine readability—10-minute rubric paired with free ATS tools.",
    body: "", // uses career-success-hub/resume-review.ts body via page
    faqItems: [],
    toolHref: RESUME_CHECKER_PATH,
    toolCtaLabel: "Start with ATS scan",
    exampleLinks: [
      { href: "/resume-examples/product-manager", label: "Product manager example" },
      { href: "/resume-examples/marketing-manager", label: "Marketing example" },
      { href: "/resume-review", label: "Full review rubric" },
    ],
    guidanceSteps: [
      "Run ATS checker first for parse and keywords",
      "Score headline and first 3 bullets",
      "Match terms from target posting",
      "Export test—re-upload to checker",
    ],
  },
  {
    slug: "resume-score",
    path: "/resume-score-checker",
    title: "Resume Score",
    breadcrumbLabel: "Resume score",
    ctr: {
      title: "Resume Score Checker — Free ATS Rating Guide",
      description:
        "Resume score checker explained: what ATS % means, benchmarks & how to improve. Free resume score check—upload and fix fast.",
      h1: "Resume Score Checker: What Your Rating Means",
      primaryKeyword: "resume score checker",
      richSnippets: ["Article", "FAQPage", "WebApplication", "BreadcrumbList", "Organization"],
    },
    intro: "Understand and improve your resume score—not just chase a number.",
    body: "",
    faqItems: [],
    toolHref: RESUME_CHECKER_PATH,
    toolCtaLabel: "Check my resume score",
    exampleLinks: [
      { href: "/ats-score-explained", label: "ATS score explained" },
      { href: "/how-to-improve-resume-score", label: "Improve resume score" },
      { href: "/resume-match-score", label: "Match score vs ATS score" },
    ],
    guidanceSteps: [
      "Check score on master resume",
      "Fix format issues (biggest score lift)",
      "Add posting keywords to recent bullets",
      "Re-check after each pass",
    ],
  },
  {
    slug: "resume-optimization",
    path: "/resume-optimization",
    title: "Resume Optimization",
    breadcrumbLabel: "Resume optimization",
    ctr: {
      title: "Resume Optimization Platform — Free Step-by-Step",
      description:
        "Resume optimization guide: checker, match, keywords, review & examples connected. Free platform for global job seekers—not thin tips.",
      h1: "Resume Optimization: Platform Workflow",
      primaryKeyword: "resume optimization",
      richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
    },
    intro: "End-to-end optimization—tools and guides wired together.",
    body: "",
    faqItems: [],
    toolHref: RESUME_CHECKER_PATH,
    toolCtaLabel: "Start optimization",
    exampleLinks: [
      { href: "/complete-guide-ats-resume-optimization", label: "Complete ATS guide" },
      { href: "/ats-resume-checklist-2026", label: "ATS checklist" },
      { href: "/career-success-hub", label: "Career Success Hub" },
    ],
    guidanceSteps: [
      "Baseline check → format → keywords → match per job",
      "Use examples in your field as benchmarks",
      "Review rubric before each application batch",
    ],
  },
  {
    slug: "resume-keywords",
    path: "/resume-keywords",
    title: "Resume Keywords",
    breadcrumbLabel: "Resume keywords",
    ctr: {
      title: "Resume Keywords Database — ATS Lists by Role",
      description:
        "Resume keywords for ATS: skills, verbs & phrases by profession. Free keyword database + checker to find gaps vs job posts.",
      h1: "Resume Keywords Database for ATS",
      primaryKeyword: "resume keywords",
      richSnippets: ["ItemList", "FAQPage", "Article", "BreadcrumbList", "Organization"],
    },
    intro: "Searchable keyword lists by profession—paired with checker and match tools.",
    body: "",
    faqItems: [],
    toolHref: "/resume-keyword-tool",
    toolCtaLabel: "Open keyword tools",
    exampleLinks: [
      { href: "/resume-keywords/software-engineer", label: "Software engineer keywords" },
      { href: "/resume-keywords/data-analyst", label: "Data analyst keywords" },
      { href: "/ats-keywords-finder", label: "Keywords finder" },
    ],
    guidanceSteps: [
      "Pick your profession keyword list",
      "Extract terms from target job post",
      "Add honest terms to experience bullets",
      "Verify with match analyzer",
    ],
  },
  {
    slug: "resume-match-score",
    path: "/resume-match-score",
    title: "Resume Match Score",
    breadcrumbLabel: "Match score",
    ctr: {
      title: "Resume Match Score — Free vs Job Posting",
      description:
        "Resume match score explained: benchmarks, vs ATS score, missing keywords. Free match analyzer—tailor before you apply.",
      h1: "Resume Match Score: Meaning & How to Improve",
      primaryKeyword: "resume match score",
      richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
    },
    intro: "Match % vs one job posting—distinct from overall ATS score.",
    body: "",
    faqItems: [],
    toolHref: "/resume-match-analyzer",
    toolCtaLabel: "Run match analyzer",
    exampleLinks: [
      { href: "/resume-job-description-match", label: "Match tool" },
      { href: "/how-to-tailor-resume-for-job-description", label: "Tailoring guide" },
      { href: "/resume-keywords-missing", label: "Missing keywords" },
    ],
    guidanceSteps: [
      "Paste full job description",
      "Note top 5 missing keywords",
      "Add to recent bullets with proof",
      "Re-run until honest match is strong",
    ],
  },
  {
    slug: "ats-resume-checker",
    path: "/ats-resume-checker",
    title: "ATS Resume Checker",
    breadcrumbLabel: "ATS resume checker",
    ctr: {
      title: "Free ATS Resume Checker — Score & Keywords",
      description:
        "Free ATS resume checker: parse test, keyword gaps, format warnings & improvement plan. ATS score checker online—no signup.",
      h1: "Free ATS Resume Checker: Score & Keywords",
      primaryKeyword: "free ATS resume checker",
      richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
    },
    intro: "Purpose-built ATS checker landing—how scoring works and what to fix first.",
    body: "",
    faqItems: [],
    toolHref: RESUME_CHECKER_PATH,
    toolCtaLabel: "Open ATS resume checker",
    exampleLinks: [
      { href: "/methodology", label: "Scoring methodology" },
      { href: "/how-ats-works", label: "How ATS works" },
      { href: "/ats-resume-format", label: "ATS format guide" },
    ],
    guidanceSteps: [
      "Upload PDF → read extracted text",
      "Fix format flags before keywords",
      "Add job description for match mode",
      "Complete checklist before submit",
    ],
  },
  {
    slug: "ats-resume-review",
    path: "/ats-resume-review",
    title: "ATS Resume Review",
    breadcrumbLabel: "ATS resume review",
    ctr: {
      title: "ATS Resume Review — Free Online Scan & Score",
      description:
        "Free ATS resume review: parse health, keyword coverage, format flags & AI suggestions. ATS resume review online for global applications.",
      h1: "ATS Resume Review: Free Online Scan & Fixes",
      primaryKeyword: "ATS resume review",
      richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
    },
    intro: "ATS-focused review—parse, keywords, format, and readiness in one scan.",
    body: `
## What ATS resume review includes

An **ATS resume review** tests what hiring software sees—not just how the PDF looks to you:

- **Parse extraction** — employers, titles, dates in plain text
- **ATS compatibility score** — baseline readiness
- **Keyword coverage** — searchable skills and tools
- **Format warnings** — columns, tables, graphics
- **Improvement roadmap** — ordered fixes after scan

[Start free ATS resume review →](${RESUME_CHECKER_PATH})

## ATS review vs general resume review

| ATS resume review | Resume review online |
|-------------------|----------------------|
| Parse & keyword signals | Clarity, metrics, skim appeal |
| Machine-first | Human-first |
| Checker + match tools | Rubric + checker |

Use both: [ATS resume review](${RESUME_CHECKER_PATH}) then [resume review online](/resume-review).

## Workflow

1. Upload to [free ATS resume checker](${RESUME_CHECKER_PATH})
2. Fix format flags from readiness report
3. Paste job description → match % and gaps
4. Optional: [AI resume review](/ai-resume-review) for bullet suggestions
5. Human pass via [resume review rubric](/resume-review)

## Related

- [Why ATS rejects resumes](/resume-rejected-by-ats)
- [ATS rejection reasons](/common-ats-resume-rejection-reasons)
- [Complete optimization guide](/complete-guide-ats-resume-optimization)
`,
    faqItems: [
      {
        question: "What is an ATS resume review?",
        answer:
          "An automated scan of how applicant tracking systems parse and score your file—format, keywords, and structure—not a human career coach session.",
      },
      {
        question: "Is ATS resume review the same as AI resume review?",
        answer:
          "Overlap exists. ATS review emphasizes parse and keyword signals; AI review adds bullet rewrite suggestions. Both start with the free checker.",
      },
      {
        question: "How often should I run ATS resume review?",
        answer: "After every template change, export, or new target role family.",
      },
    ],
    toolHref: RESUME_CHECKER_PATH,
    toolCtaLabel: "Run ATS resume review",
    exampleLinks: [
      { href: "/ai-resume-review", label: "AI resume review" },
      { href: "/resume-review", label: "Resume review online" },
      { href: "/cv-checker", label: "CV checker" },
    ],
    guidanceSteps: [
      "Scan with ATS checker on final PDF",
      "Fix parse issues before keyword edits",
      "Match to specific job posting",
      "Human review rubric last",
    ],
  },
  {
    slug: "cv-checker",
    path: "/cv-checker",
    title: "CV Checker",
    breadcrumbLabel: "CV checker",
    ctr: {
      title: "CV Checker Online — Free ATS Score & Scan",
      description:
        "Free CV checker online: ATS score, keyword gaps & format test. Works for CV and resume uploads worldwide—same optimization platform.",
      h1: "CV Checker Online: Free ATS Scan",
      primaryKeyword: "CV checker",
      richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
    },
    intro: "CV or resume—same parse engine, global job seekers.",
    body: "",
    faqItems: [],
    toolHref: RESUME_CHECKER_PATH,
    toolCtaLabel: "Check my CV free",
    exampleLinks: [
      { href: "/resume-checker-online", label: "Resume checker hub" },
      { href: "/ats-resume-format", label: "Format guide" },
      { href: "/resume-examples", label: "Examples library" },
    ],
    guidanceSteps: [
      "Upload CV as PDF or DOCX",
      "Verify extracted text is complete",
      "Compare keywords to target posting",
      "Re-export and re-scan before apply",
    ],
  },
];

export const CORNERSTONE_GUIDES = [
  { title: "Why Resume Gets Rejected", href: "/why-resume-gets-rejected" },
  { title: "Resume Rejected By ATS", href: "/resume-rejected-by-ats" },
  { title: "ATS Rejection Reasons", href: "/common-ats-resume-rejection-reasons" },
  { title: "Resume Mistakes That Cost Interviews", href: "/resume-mistakes-that-cost-interviews" },
  { title: "Why No Interviews?", href: "/why-resume-not-getting-interviews" },
  { title: "Resume Optimization Guide", href: "/resume-optimization" },
  { title: "Complete ATS Guide", href: "/complete-guide-ats-resume-optimization" },
  { title: "ATS Resume Guide", href: "/ats-guide" },
] as const;

export function getPlatformHub(slug: string): PlatformHubEntry | undefined {
  return PLATFORM_HUBS.find((h) => h.slug === slug);
}

export function getPlatformHubByPath(path: string): PlatformHubEntry | undefined {
  return PLATFORM_HUBS.find((h) => h.path === path);
}

export function getPlatformHubSlugs(): string[] {
  return PLATFORM_HUBS.map((h) => h.slug);
}

export function getOtherPlatformHubs(currentSlug: string, limit = 5): PlatformHubEntry[] {
  return PLATFORM_HUBS.filter((h) => h.slug !== currentSlug).slice(0, limit);
}
