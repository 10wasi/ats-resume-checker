import type { Sprint3LandingSpec } from "./landing-factory";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import type { FaqItem } from "@/lib/seo/faq";

const VS_FAQ = (competitor: string): FaqItem[] => [
  {
    question: `Is ResumeIQ better than ${competitor}?`,
    answer:
      "Neither tool wins every workflow. Compare parser preview, job-description match, pricing, privacy, and whether you need templates or coaching—then pick based on your next application, not marketing claims.",
  },
  {
    question: `Can I use ResumeIQ and ${competitor} together?`,
    answer:
      "Many job seekers run a free parse test on ResumeIQ, then use another tool for a second opinion on a specific posting. Fix parser errors first regardless of which checker you prefer.",
  },
  {
    question: "Do ATS checkers give the same score?",
    answer:
      "No—each product weights parse health, keywords, and structure differently. Treat scores as directional signals and focus on missing posting terms you can honestly add.",
  },
  {
    question: "What should I compare before paying for a resume tool?",
    answer:
      "Job-description match depth, parser preview, data retention policy, export guidance, and whether free tiers cover the checks you need before each application.",
  },
];

function vsBody(
  competitor: string,
  competitorStrength: string,
  resumeIqStrength: string,
  extraRows: string
): string {
  return `# ResumeIQ vs ${competitor}

## Quick takeaway

**${competitor}** is known for ${competitorStrength}. **ResumeIQ** focuses on ${resumeIqStrength}. This page compares categories of features—not live pricing quotes. Confirm current plans on each vendor site before purchasing.

## Feature comparison

| Category | ${competitor} (typical) | ResumeIQ |
|----------|-------------------------|----------|
| Primary use | ${competitorStrength} | Free parse test, ATS score, and job-description match in one workflow |
| Parser preview | Varies by plan and export | Extracted text preview on upload |
| Job description match | Varies | [Job Description Match](/resume-job-description-match) with keyword % and skill gaps |
| Signup for core scan | Often required for saved history | Free baseline scan without account |
| Templates / builder | ${extraRows} | Guides and examples—no paid template upsell on core checker |
| Privacy | See vendor policy | Processed per request — [privacy policy](/privacy) |

## When ${competitor} may fit

Choose ${competitor} if you already rely on its templates, job tracker, or coaching bundle and want one subscription for the full job-search stack.

## When ResumeIQ may fit

Choose ResumeIQ when you want a **fast, free baseline** before each application: upload PDF, read parser output, paste a posting for match %, then open the [ATS Resume Checker](/resume-checker) for deeper rewrites.

## Honest evaluation steps

1. Run parser test — [resume parser](/resume-parser)  
2. Paste posting — [job description match](/resume-job-description-match)  
3. Read score bands — [ATS score explained](/ats-score-explained)  
4. Review privacy — [privacy policy](/privacy) and [disclaimer](/disclaimer)

## Related comparisons

- [ResumeIQ vs Jobscan](/resumeiq-vs-jobscan)
- [ResumeIQ vs Rezi](/resumeiq-vs-rezi)
- [ResumeIQ vs Zety](/resumeiq-vs-zety)
- [ResumeIQ vs Kickresume](/resumeiq-vs-kickresume)
- [ResumeIQ vs Enhancv](/resumeiq-vs-enhancv)
- [Resume resources hub](/resume-resources)

## Methodology

ResumeIQ scores estimate parse health and keyword overlap—they do not replicate any employer's private ATS. Read [methodology](/methodology) and [review process](/review-process).`;
}

export const RESUMIQ_VS_REZI: Sprint3LandingSpec = {
  id: "resumeiq-vs-rezi",
  path: "/resumeiq-vs-rezi",
  breadcrumbLabel: "ResumeIQ vs Rezi",
  ctr: {
    title: ctrTitle("ResumeIQ vs Rezi", "Honest Comparison"),
    description: ctrMeta(
      "ResumeIQ vs Rezi — compare ATS scan, job match, parser preview, pricing categories, and privacy before you choose a resume tool."
    ),
    h1: "ResumeIQ vs Rezi — Feature Comparison",
    primaryKeyword: "ResumeIQ vs Rezi",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: VS_FAQ("Rezi"),
  body: vsBody(
    "Rezi",
    "AI resume writing, formatting, and keyword targeting for active applicants",
    "free parser preview, ATS score, and job-description match without mandatory signup",
    "Resume builder and AI bullet suggestions are central to the product"
  ),
};

export const RESUMIQ_VS_ZETY: Sprint3LandingSpec = {
  id: "resumeiq-vs-zety",
  path: "/resumeiq-vs-zety",
  breadcrumbLabel: "ResumeIQ vs Zety",
  ctr: {
    title: ctrTitle("ResumeIQ vs Zety", "Honest Comparison"),
    description: ctrMeta(
      "ResumeIQ vs Zety — templates vs ATS checker workflow. Compare parser tests, keyword match, and when each tool fits job seekers."
    ),
    h1: "ResumeIQ vs Zety — Feature Comparison",
    primaryKeyword: "ResumeIQ vs Zety",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: VS_FAQ("Zety"),
  body: vsBody(
    "Zety",
    "resume templates, cover letters, and guided builder content",
    "ATS diagnostics on the file you will actually upload to employers",
    "Template library and step-by-step builder are the core offer"
  ),
};

export const RESUMIQ_VS_JOBSCAN: Sprint3LandingSpec = {
  id: "resumeiq-vs-jobscan",
  path: "/resumeiq-vs-jobscan",
  breadcrumbLabel: "ResumeIQ vs Jobscan",
  ctr: {
    title: ctrTitle("ResumeIQ vs Jobscan", "Honest Comparison"),
    description: ctrMeta(
      "ResumeIQ vs Jobscan — job-description match, parser preview, and free tier comparison for ATS resume checking."
    ),
    h1: "ResumeIQ vs Jobscan — Feature Comparison",
    primaryKeyword: "ResumeIQ vs Jobscan",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: VS_FAQ("Jobscan"),
  body: vsBody(
    "Jobscan",
    "resume-to-job match scoring and LinkedIn optimization for high-volume applicants",
    "instant free parser preview, ATS score, and match analyzer with transparent methodology",
    "Match score and keyword reports are the flagship workflow"
  ),
};

export const RESUMIQ_VS_KICKRESUME: Sprint3LandingSpec = {
  id: "resumeiq-vs-kickresume",
  path: "/resumeiq-vs-kickresume",
  breadcrumbLabel: "ResumeIQ vs Kickresume",
  ctr: {
    title: ctrTitle("ResumeIQ vs Kickresume", "Honest Comparison"),
    description: ctrMeta(
      "ResumeIQ vs Kickresume — builder vs checker: compare ATS parse tests, match scoring, and when each platform fits."
    ),
    h1: "ResumeIQ vs Kickresume — Feature Comparison",
    primaryKeyword: "ResumeIQ vs Kickresume",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: VS_FAQ("Kickresume"),
  body: vsBody(
    "Kickresume",
    "resume and cover letter builder with design templates and AI drafting",
    "checking the export you submit to employer portals—not just the in-app design view",
    "Visual templates and AI writer are primary features"
  ),
};

export const RESUMIQ_VS_ENHANCV: Sprint3LandingSpec = {
  id: "resumeiq-vs-enhancv",
  path: "/resumeiq-vs-enhancv",
  breadcrumbLabel: "ResumeIQ vs Enhancv",
  ctr: {
    title: ctrTitle("ResumeIQ vs Enhancv", "Honest Comparison"),
    description: ctrMeta(
      "ResumeIQ vs Enhancv — design-forward resumes vs ATS parse and match checks. Honest feature comparison for job seekers."
    ),
    h1: "ResumeIQ vs Enhancv — Feature Comparison",
    primaryKeyword: "ResumeIQ vs Enhancv",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: VS_FAQ("Enhancv"),
  body: vsBody(
    "Enhancv",
    "visually distinctive resume layouts and storytelling sections",
    "plain-text parser diagnostics and posting-level keyword gaps on your submitted PDF",
    "Design-led templates and visual sections are the differentiator"
  ),
};

export const VS_COMPARISON_PAGES = [
  RESUMIQ_VS_REZI,
  RESUMIQ_VS_ZETY,
  RESUMIQ_VS_JOBSCAN,
  RESUMIQ_VS_KICKRESUME,
  RESUMIQ_VS_ENHANCV,
] as const;
