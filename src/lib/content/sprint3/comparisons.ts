import type { Sprint3LandingSpec } from "./landing-factory";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import type { FaqItem } from "@/lib/seo/faq";

const COMPARISON_FAQ = (name: string): FaqItem[] => [
  {
    question: `Is ResumeIQ a ${name} alternative?`,
    answer:
      "ResumeIQ offers a free ATS resume checker with parser preview, keyword gaps, and AI suggestions. Compare features to any tool based on your workflow—many job seekers use more than one checker before applying.",
  },
  {
    question: "Can I use a free ATS checker instead of a paid subscription?",
    answer:
      "Free checkers work well for parse tests, keyword gaps, and baseline scores. Paid tools may add deeper job-board integrations or coaching—choose based on how often you apply and whether you need match scoring per posting.",
  },
  {
    question: "Do different ATS checkers give the same score?",
    answer:
      "Scores vary because each tool weights parse health, keywords, and structure differently. Treat any score as directional—fix parser errors and missing posting terms, then re-check.",
  },
  {
    question: "What should I compare when evaluating resume checkers?",
    answer:
      "Parser preview, keyword match vs job descriptions, export format guidance, privacy policy, and whether results explain fixes in plain language—not just a single number.",
  },
];

function comparisonBody(
  competitor: string,
  competitorFocus: string,
  resumeIqFocus: string
): string {
  return `# ${competitor} alternative — how to choose an ATS resume checker

## Why job seekers compare ${competitor} and other checkers

When impressions rise but interviews stay flat, the problem is rarely effort—it is **visibility**. Applicant tracking systems parse resumes, index keywords, and rank candidates before a recruiter opens a file. A checker simulates that first pass so you fix layout and language **before** upload.

${competitor} is known for ${competitorFocus}. ResumeIQ focuses on ${resumeIqFocus}. Neither replaces reading the job post or tailoring bullets—but both help you see what software extracts from your PDF.

## Feature comparison (factual overview)

| Capability | Typical ${competitor} workflow | ResumeIQ |
|------------|-------------------------------|----------|
| ATS score | Compatibility or match score | ATS score with parse, keyword, and structure bands |
| Parser preview | Varies by plan and export | Extracted text preview on upload |
| Keyword gaps | Often tied to job description paste | Keyword checker + job match tool |
| Signup | Account may be required for saved scans | Free scan without signup for baseline check |
| Pricing | Free tier + paid plans | Free core checker; optional premium features |
| Privacy | See each vendor privacy policy | Processed per request; [privacy policy](/privacy) |

This table describes **categories** of features—not a live price quote. Always confirm current plans on each vendor site before purchasing.

## When ${competitor} may fit your workflow

${competitor} can make sense if you already use its ecosystem (templates, job tracker, or coaching bundle) and want one login for everything. Teams that apply at high volume sometimes pay for saved histories, batch comparisons, or LinkedIn integrations.

## When ResumeIQ may fit your workflow

ResumeIQ suits job seekers who want a **fast, free baseline**: upload PDF, read parser output, see keyword gaps, and follow a prioritized fix list. It connects to guides on [ATS formatting](/ats-resume-format), [resume keywords](/resume-keywords), and [role-specific checkers](/resume-checker/software-engineer).

## Unbiased evaluation checklist

1. **Parser first** — Run the [resume parser test](/resume-parser). If text order is wrong, keywords will not save you.
2. **Posting match** — Paste the job description in the [match analyzer](/resume-job-description-match).
3. **Score bands** — Read [what ATS scores mean](/ats-score-explained); do not chase a perfect number on one tool.
4. **Privacy** — Confirm whether resumes are stored, used for training, or deleted after the session.
5. **Second opinion** — Many candidates run two checkers once per target role, then edit in Word or Google Docs.

## Example workflow (both tools)

**Before:** Two-column Canva export; skills in icons; "managed projects" without metrics.

**After:** Single-column PDF; plain headings; bullets with tools and outcomes; re-scan until parser shows clean order.

Run the [free ATS resume checker](/resume-checker) on the final export—the same file you will upload to the employer portal.

## Related comparisons and guides

- [Jobscan alternative](/jobscan-alternative)
- [Resume Worded alternative](/resumeworded-alternative)
- [Enhancv alternative](/enhancv-alternative)
- [Kickresume alternative](/kickresume-alternative)
- [Teal alternative](/teal-alternative)
- [Complete ATS optimization guide](/complete-guide-ats-resume-optimization)
- [How ATS works](/how-ats-works)
- [Resume resources hub](/resume-resources)

## Trust and methodology

ResumeIQ scores estimate parse health, keyword overlap, and structure—similar signals many ATS filters use, but not identical to any single employer system. Read [how we score resumes](/how-we-score-resumes) and [editorial policy](/editorial-policy). Questions: [FAQ Center](/faq-center).`;
}

export const JOBSCAN_COMPARISON: Sprint3LandingSpec = {
  id: "jobscan-alternative",
  path: "/jobscan-alternative",
  breadcrumbLabel: "Jobscan Alternative",
  ctr: {
    title: ctrTitle("Jobscan Alternative", "Free ATS Checker"),
    description: ctrMeta(
      "Compare Jobscan vs free ATS resume checker — parser preview, keyword gaps & score. Unbiased feature guide for job seekers."
    ),
    h1: "Jobscan Alternative — Free ATS Resume Checker Comparison",
    primaryKeyword: "Jobscan alternative",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: COMPARISON_FAQ("Jobscan"),
  body: comparisonBody(
    "Jobscan",
    "resume-to-job-description match scoring and keyword optimization for active applicants",
    "instant free parser preview, ATS score, and keyword scanner without mandatory signup"
  ),
};

export const RESUMEWORDED_COMPARISON: Sprint3LandingSpec = {
  id: "resumeworded-alternative",
  path: "/resumeworded-alternative",
  breadcrumbLabel: "Resume Worded Alternative",
  ctr: {
    title: ctrTitle("Resume Worded Alternative", "ATS Score Free"),
    description: ctrMeta(
      "Resume Worded alternative — compare ATS scoring, bullet feedback & parser test. Free resume checker guide."
    ),
    h1: "Resume Worded Alternative — ATS Resume Checker Comparison",
    primaryKeyword: "Resume Worded alternative",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: COMPARISON_FAQ("Resume Worded"),
  body: comparisonBody(
    "Resume Worded",
    "AI bullet feedback, score benchmarks, and LinkedIn headline suggestions for individual contributors",
    "section-level AI feedback tied to ATS parse health and keyword match against real job posts"
  ),
};

export const ENHANCV_COMPARISON: Sprint3LandingSpec = {
  id: "enhancv-alternative",
  path: "/enhancv-alternative",
  breadcrumbLabel: "Enhancv Alternative",
  ctr: {
    title: ctrTitle("Enhancv ATS Checker Alternative", "Compare Free"),
    description: ctrMeta(
      "Enhancv ATS checker alternative — design vs parse-safe PDF, keyword scan & free ATS score comparison."
    ),
    h1: "Enhancv ATS Checker Alternative — Unbiased Comparison",
    primaryKeyword: "Enhancv ATS checker alternative",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: COMPARISON_FAQ("Enhancv"),
  body: comparisonBody(
    "Enhancv",
    "visually distinctive resume templates and design-forward layouts with ATS tips built into the builder",
    "validating that design exports still parse cleanly, with plain-text keyword proof in bullets"
  ),
};

export const KICKRESUME_COMPARISON: Sprint3LandingSpec = {
  id: "kickresume-alternative",
  path: "/kickresume-alternative",
  breadcrumbLabel: "Kickresume Alternative",
  ctr: {
    title: ctrTitle("Kickresume ATS Checker Alternative", "Free Scan"),
    description: ctrMeta(
      "Kickresume ATS checker alternative — template builder vs standalone ATS scan. Parser & keyword guide."
    ),
    h1: "Kickresume ATS Checker Alternative — Feature Comparison",
    primaryKeyword: "Kickresume ATS checker alternative",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: COMPARISON_FAQ("Kickresume"),
  body: comparisonBody(
    "Kickresume",
    "resume templates, cover letters, and AI writing inside a document builder workflow",
    "checking any exported PDF—whether from Kickresume or another builder—for ATS parse and keyword fit"
  ),
};

export const TEAL_COMPARISON: Sprint3LandingSpec = {
  id: "teal-alternative",
  path: "/teal-alternative",
  breadcrumbLabel: "Teal Alternative",
  ctr: {
    title: ctrTitle("Teal ATS Checker Alternative", "Resume Scan"),
    description: ctrMeta(
      "Teal ATS checker alternative — job search workspace vs free ATS resume scan. Compare features fairly."
    ),
    h1: "Teal ATS Checker Alternative — Resume Checker Comparison",
    primaryKeyword: "Teal ATS checker alternative",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: COMPARISON_FAQ("Teal"),
  body: comparisonBody(
    "Teal",
    "job search CRM features—tracking applications, contacts, and resume versions across a search campaign",
    "a focused ATS scan and optimization guides when you already track jobs elsewhere or want a quick parse test"
  ),
};

export const COMPARISON_PAGES = [
  JOBSCAN_COMPARISON,
  RESUMEWORDED_COMPARISON,
  ENHANCV_COMPARISON,
  KICKRESUME_COMPARISON,
  TEAL_COMPARISON,
] as const;

export function getComparisonByPath(path: string): Sprint3LandingSpec | undefined {
  return COMPARISON_PAGES.find((p) => p.path === path);
}
