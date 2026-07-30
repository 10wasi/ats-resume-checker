import type { Sprint3LandingSpec } from "./landing-factory";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import type { FaqItem } from "@/lib/seo/faq";

function statFaq(topic: string): FaqItem[] {
  return [
    {
      question: `Are these ${topic} statistics exact for every company?`,
      answer:
        "No—figures summarize published industry research and common hiring workflows. Your target employer may use different ATS vendors, thresholds, and recruiter practices.",
    },
    {
      question: "How should job seekers use hiring statistics?",
      answer:
        "Use stats to prioritize parse-safe formatting and keyword match—not to chase vanity metrics. Validate your own resume with the free ATS checker on the file you upload.",
    },
    {
      question: "Where can I improve my resume based on data?",
      answer:
        "Run the parser test first, then compare keywords against the job post. See resume benchmarks for score bands and fix order.",
    },
  ];
}

function statBody(intro: string, sections: string, links: string): string {
  return `${intro}

${sections}

## Methodology note

Statistics on ResumeIQ cite published labor market and HR technology research where noted. We update this page when new surveys publish. This is educational content—not hiring advice for any specific employer.

## Improve your odds today

1. Run the [free ATS resume checker](/resume-checker) on your exact PDF.
2. Read [ATS statistics](/ats-statistics) and [resume benchmarks](/resume-benchmarks).
3. Fix [format issues](/ats-resume-format) before keyword tweaks.

${links}`;
}

export const RESUME_STATISTICS: Sprint3LandingSpec = {
  id: "resume-statistics",
  path: "/resume-statistics",
  breadcrumbLabel: "Resume Statistics",
  ctr: {
    title: ctrTitle("Resume Statistics", "2026 Data & Trends"),
    description: ctrMeta(
      "Resume statistics 2026 — screening volumes, format impact & keyword data. Free checker linked. Actionable for job seekers."
    ),
    h1: "Resume Statistics — 2026 Job Seeker Data",
    primaryKeyword: "resume statistics",
    richSnippets: ["Article", "FAQPage", "Dataset", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: statFaq("resume"),
  body: statBody(
    "# Resume statistics job seekers should know\n\nUnderstanding **resume statistics** helps you invest effort where it matters—parse quality and posting keyword match—not decorative layout alone.",
    `## Key figures (industry summaries)

| Topic | What surveys & HR research commonly report | Job seeker takeaway |
|-------|---------------------------------------------|---------------------|
| Application volume | Large employers receive hundreds of applicants per role | Differentiation requires clarity + keywords, not length alone |
| Recruiter scan time | Initial human reviews often last well under one minute | Lead with target title and recent impact bullets |
| Format failures | A significant share of resumes have parse or layout issues | Run a [parser test](/resume-parser) before applying |
| Tailoring | Customized resumes correlate with more interviews | Use [JD match](/resume-job-description-match) per posting |
| One-page norm | Early-career US resumes often perform best at one page | See [length guide](/resume-length-guide) |

## What these numbers mean for your file

Statistics describe **populations**—your goal is to remove easy automated filters: broken PDF text, missing tools, wrong section order, and generic duty lines.`,
    `## Related data pages

- [ATS statistics](/ats-statistics)
- [Hiring statistics](/hiring-statistics)
- [Resume benchmarks](/resume-benchmarks)
- [Resume keywords database](/resume-keywords)
- [Statistics hub](/statistics)`
  ),
};

export const ATS_STATISTICS: Sprint3LandingSpec = {
  id: "ats-statistics",
  path: "/ats-statistics",
  breadcrumbLabel: "ATS Statistics",
  ctr: {
    title: ctrTitle("ATS Statistics", "Screening Data 2026"),
    description: ctrMeta(
      "ATS statistics — how applicant tracking systems filter resumes, keyword matching & parse rates. Free scan linked."
    ),
    h1: "ATS Statistics — How Screening Software Filters Resumes",
    primaryKeyword: "ATS statistics",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: statFaq("ATS"),
  body: statBody(
    "# ATS statistics — screening in numbers\n\n**Applicant tracking systems** parse, index, and search resume text. These **ATS statistics** summarize what that means for applicants—not vendor-specific secrets.",
    `## ATS workflow (definition box)

> **Applicant Tracking System (ATS):** Software that stores applications, extracts resume fields, and lets recruiters search by keywords such as job titles, tools, and certifications.

## Commonly cited patterns

| Stage | Typical behavior | What to do |
|-------|------------------|------------|
| Parse | Text extracted into fields | [Copy-paste test](/ats-resume-format) your PDF |
| Index | Skills and titles become searchable | Mirror posting language honestly |
| Filter | Recruiters query keyword + title combos | Use [keyword checker](/resume-keyword-checker) |
| Rank | Some systems score match vs posting | Improve [match score](/resume-match-score) |

## Keyword matching reality

Millions of ATS deployments rely on **exact or stemmed keyword matching** in experience and skills fields—icons, charts, and columns often index poorly. Professional analysis starts with parser output, not guesswork.`,
    `## Related resources

- [How ATS works](/how-ats-works)
- [Resume statistics](/resume-statistics)
- [Glossary](/glossary)
- [Free ATS resume checker](/)`
  ),
};

export const HIRING_STATISTICS: Sprint3LandingSpec = {
  id: "hiring-statistics",
  path: "/hiring-statistics",
  breadcrumbLabel: "Hiring Statistics",
  ctr: {
    title: ctrTitle("Hiring Statistics", "Recruitment Data 2026"),
    description: ctrMeta(
      "Hiring statistics 2026 — time-to-fill, application volume & screening trends. Link to free resume checker & benchmarks."
    ),
    h1: "Hiring Statistics — Recruitment Trends for Job Seekers",
    primaryKeyword: "hiring statistics",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: statFaq("hiring"),
  body: statBody(
    "# Hiring statistics — the market context for your resume\n\n**Hiring statistics** explain why small resume improvements compound: high application volume, fast recruiter scans, and automated first passes.",
    `## Step-by-step: how a posting becomes interviews

1. Role opens — high inbound volume on popular job boards.
2. ATS collects and parses applications.
3. Recruiters search or sort by title, skills, location.
4. Short list gets human review—often seconds per resume.
5. Interviews scheduled from aligned profiles.

## Data-backed priorities for applicants

| Priority | Why statistics support it |
|----------|---------------------------|
| Parse-safe PDF | Broken text never reaches keyword stage |
| Posting keywords | Search-driven shortlists |
| Quantified bullets | Human scan efficiency |
| Right file type | Portal rejection before ATS |

See [BLS Occupational Outlook](https://www.bls.gov/ooh/) for role growth context by profession.`,
    `## Continue learning

- [Resume benchmarks](/resume-benchmarks)
- [Why resumes get rejected](/why-resume-gets-rejected)
- [Career success hub](/career-success-hub)
- [Country guides](/resume-checker-usa)`
  ),
};

export const RESUME_BENCHMARKS: Sprint3LandingSpec = {
  id: "resume-benchmarks",
  path: "/resume-benchmarks",
  breadcrumbLabel: "Resume Benchmarks",
  ctr: {
    title: ctrTitle("Resume Benchmarks", "ATS Score Bands"),
    description: ctrMeta(
      "Resume benchmarks — ATS score bands, match % targets & fix priority order. Instant free scan, no signup."
    ),
    h1: "Resume Benchmarks — ATS Score & Match Targets",
    primaryKeyword: "resume benchmarks",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  faqItems: statFaq("benchmark"),
  body: statBody(
    "# Resume benchmarks — what good looks like\n\n**Resume benchmarks** are directional bands—not employer guarantees. Use them to prioritize fixes after a real scan.",
    `## ATS score bands (directional)

| Band | Typical signals present | Suggested action |
|------|-------------------------|------------------|
| Needs work | Parse warnings, missing core sections | Fix [format](/ats-resume-format) first |
| Fair | Readable text, partial keyword overlap | Tailor to [one posting](/resume-job-description-match) |
| Strong | Clean parse + most posting terms in recent roles | Polish bullets & quantify outcomes |
| Excellent | Strong parse, high match, few format flags | Final QA and apply |

## Match percentage benchmarks

Match % depends on job description length and honesty—aim to cover **required** tools and scope terms in recent experience, not keyword stuffing.

## Comparison table: fix order vs impact

| Fix | Speed | Impact on interviews |
|-----|-------|---------------------|
| Parser order | Fast | High |
| Missing must-have keywords | Medium | High |
| Stronger metrics in bullets | Medium | Medium |
| Font/layout polish | Fast | Medium when parse was broken |`,
    `- [ATS score explained](/ats-score-explained)
- [Scoring methodology](/methodology)
- [Resume statistics](/resume-statistics)
- [Check my resume](/resume-checker)`
  ),
};

export const STATISTICS_PAGES = [
  RESUME_STATISTICS,
  ATS_STATISTICS,
  HIRING_STATISTICS,
  RESUME_BENCHMARKS,
] as const;
