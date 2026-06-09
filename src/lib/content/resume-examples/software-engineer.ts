import type { ResumeExampleEntry } from "./types";

const SLUG = "software-engineer";

export const softwareEngineerExample: ResumeExampleEntry = {
  id: "software-engineer",
  slug: SLUG,
  path: `/resume-examples/${SLUG}`,
  breadcrumbLabel: "Software engineer resume",
  ctr: {
    title: "Software Engineer Resume Example — ATS Friendly",
    description:
      "ATS-friendly software engineer resume example with proven bullets, tech keywords, and format tips. Test yours free with our ATS Resume Checker.",
    ogTitle: "Software Engineer Resume Example That Parses in ATS",
    h1: "Software Engineer Resume Example (ATS-Friendly)",
    primaryKeyword: "software engineer resume example",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Software Engineer Resume Example — ATS Friendly",
    description:
      "ATS-friendly software engineer resume example with proven bullets, tech keywords, and format tips. Test yours free with our ATS Resume Checker.",
  },
  keywords: [
    "software engineer resume example",
    "ATS friendly resume",
    "developer resume example",
    "ATS Resume Checker",
    "resume match score",
  ],
  relatedSlugs: ["data-analyst", "project-manager", "graphic-designer"],
  faqItems: [
    {
      question: "What should a software engineer resume include for ATS?",
      answer:
        "Include a clear job title, programming languages and frameworks in experience bullets, standard headings (Experience, Skills, Education), and metrics on shipped work. Avoid two-column layouts and skill icon graphics.",
    },
    {
      question: "How long should a software engineer resume be?",
      answer:
        "One page is fine for under five years of experience; two pages is normal for senior engineers with relevant depth. Keep recent roles detailed and compress older positions to title and company.",
    },
    {
      question: "Should I list every programming language on my resume?",
      answer:
        "List languages you can discuss in a technical interview. Put must-have stack terms from the job post in bullets where you used them—not only in a long Skills dump.",
    },
    {
      question: "Do software engineer resumes need a GitHub link?",
      answer:
        "A GitHub or portfolio URL helps humans; ensure the link is plain text in the resume body. Some parsers strip hyperlinks, so spell out github.com/yourhandle.",
    },
    {
      question: "How do I test my software engineer resume for ATS?",
      answer:
        "Upload your PDF to the ATS Resume Checker, then paste a target job description into the Resume Match Analyzer to see keyword gaps before you apply.",
    },
  ],
  body: `
This **software engineer resume example** shows what a parser-friendly file looks like—single column, standard headings, and tech keywords backed by real project proof.

Copy the structure, not the fake metrics. Then run your export through the [ATS Resume Checker](/resume-checker) and match it to a posting in the [Resume Match Analyzer](/resume-job-description-match).

## ATS-friendly software engineer resume example

**Alex Chen**  
Seattle, WA · (206) 555-0142 · alex.chen@email.com · linkedin.com/in/alexchen · github.com/alexchen

**Professional Summary**  
Software engineer with 5+ years building backend services in Python and Go. Shipped APIs serving 2M+ daily requests; strong in distributed systems, PostgreSQL, and AWS.

**Experience**

**Stripe · Software Engineer** · Jan 2022 – Present  
- Designed payment webhook service in Go handling 40K events/min with 99.95% uptime.  
- Reduced p99 API latency 32% by adding Redis caching and query indexes in PostgreSQL.  
- Led migration from monolith endpoints to 12 microservices on AWS ECS with CI/CD in GitHub Actions.

**Datadog · Software Engineer II** · Jun 2019 – Dec 2021  
- Built internal metrics dashboard in React and TypeScript used by 200+ engineers.  
- Implemented Kafka consumers processing 500GB/day of telemetry with automated retry logic.  
- Wrote integration tests in pytest raising coverage on billing module from 61% to 88%.

**Skills**  
Python, Go, JavaScript, TypeScript, React, PostgreSQL, Redis, Kafka, AWS (ECS, Lambda, S3), Docker, Kubernetes, GitHub Actions, REST APIs, system design

**Education**  
B.S. Computer Science, University of Washington, 2019

## Why this resume works

- **Title and stack up front** — recruiters search "Python," "Go," "AWS"; they appear in summary and bullets.  
- **Metrics on every bullet** — latency, volume, coverage percentages give ATS and humans something concrete.  
- **Standard section labels** — Experience, Skills, Education map cleanly into applicant tracking fields.  
- **Plain-text contact** — phone, email, and GitHub sit in the body, not trapped in a PDF header.  
- **One column** — reading order stays logical when pasted into Notepad.

More layout patterns: [ATS Resume Examples](/ats-resume-examples) and [ATS Resume Format](/ats-resume-format).

## ATS optimization tips for software engineers

1. Mirror the job post's stack—if they say "React," use "React" (not only "frontend").  
2. Name tools in bullets: Jira, Kubernetes, Terraform, not vague "cloud experience."  
3. Keep "Software Engineer" (or exact posting title) in summary or most recent role.  
4. Skip infographic skill bars; use a text Skills section.  
5. For each target role, run [resume match score](/resume-job-description-match) analysis and add 5–8 honest keyword touches.

Industry keyword reference: [Resume Keywords by Industry](/resume-keywords-by-industry).

## Common mistakes on software engineer resumes

| Mistake | Fix |
|--------|-----|
| Skills list of 30 languages with no proof | Show languages in project bullets |
| Two-column "designer" template | Switch to single-column Word/Google Docs export |
| "Worked on various projects" | Replace with scope + tool + outcome |
| Missing dates on contract gigs | Add Month Year – Month Year for every role |
| Same resume for backend and mobile roles | Tailor summary and top bullets per posting |

See the full list: [ATS Resume Mistakes](/ats-resume-mistakes).

## Test this structure on your file

1. [ATS Resume Checker](/resume-checker) — parsing, score, format flags.  
2. [Resume Match Analyzer](/resume-job-description-match) — posting-specific keyword gaps.  
3. [ATS Resume Checklist](/ats-resume-checklist-2026) — final QA before upload.

Browse more role examples in the [Resume Examples Library](/resume-examples).
`,
};
