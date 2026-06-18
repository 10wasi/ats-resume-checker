import type { CareerLandingEntry } from "./types";
import { CTR_ATS_GUIDE_LANDING } from "@/lib/seo/ctr-metadata";

export const ATS_GUIDE_PATH = "/ats-guide" as const;

export const atsGuideEntry: CareerLandingEntry = {
  id: "ats-guide",
  path: ATS_GUIDE_PATH,
  breadcrumbLabel: "ATS guide hub",
  ctr: CTR_ATS_GUIDE_LANDING,
  faqItems: [
    {
      question: "What is ATS resume optimization?",
      answer:
        "ATS resume optimization means formatting and wording your resume so applicant tracking systems can parse it, index skills, and match you to job requirements—without hiding proof from recruiters.",
    },
    {
      question: "Where should I start?",
      answer:
        "Run the ATS Resume Checker for a baseline score, read How ATS Works, then use the Resume Match Analyzer for each target posting.",
    },
    {
      question: "Are these guides free?",
      answer:
        "Yes. Guides, checklists, and core tools are free. Each guide links back to the checker so you can verify changes on your own file.",
    },
    {
      question: "Do guides work for CVs and international applications?",
      answer:
        "Yes. Parser rules are similar globally. Match employer spelling and section norms for your target market—structure and plain text matter most.",
    },
  ],
  body: `
The **ATS Guide Hub** is your map for **professional resume optimization**—pillar guides, tools, and blog clusters in one place. Built for job seekers applying worldwide, not one country.

## Start here

1. [ATS Resume Checker](/resume-checker) — Get your resume score instantly
2. [How ATS Works](/how-ats-works) — What hiring software actually does
3. [Methodology](/methodology) — How ResumeIQ calculates scores
4. [Resume Match Analyzer](/resume-match-analyzer) — Tailor per job post

## Pillar guides

- [ATS Knowledge Center](/knowledge-center) — Ten guides on format, keywords, match, mistakes
- [Ultimate ATS Resume Guide](/ultimate-ats-resume-guide) — End-to-end optimization path
- [ATS Resume Format](/ats-resume-format) — Layouts that parse
- [ATS Resume Keywords](/ats-resume-keywords) — Placement without stuffing
- [ATS Score Explained](/ats-score-explained) — Interpret your results
- [ATS Resume Checklist](/ats-resume-checklist-2026) — Pre-submit QA

## Blog authority clusters

**How ATS works globally**
- [How to make your resume ATS-friendly (2026)](/blog/how-to-make-your-resume-ats-friendly-2026-complete-guide)
- [Resume screening explained](/resume-screening-explained)

**Resume mistakes reducing interviews**
- [10 resume mistakes ATS rejections](/blog/10-resume-mistakes-ats-rejections-2026)
- [Why resume gets rejected](/why-resume-gets-rejected)
- [Resume mistakes that cost interviews](/resume-mistakes-that-cost-interviews)

**Best resume keywords by industry**
- [ATS resume keywords visibility guide](/blog/best-ats-resume-keywords-improve-visibility-2026)
- [Resume keywords by industry](/resume-keywords-by-industry)
- [Resume Keywords Database](/resume-keywords)

**ATS optimization guide 2026**
- [Beat ATS filters in 2026](/blog/how-to-beat-ats-filters-2026)
- [ATS-friendly resume examples](/blog/best-ats-friendly-resume-examples-2026)

**Remote job resume optimization**
- [Why qualified candidates get rejected](/blog/why-qualified-candidates-still-get-rejected-2026)
- [How to tailor resume for job description](/how-to-tailor-resume-for-job-description)

## Tools in every workflow

Every guide links to the [ATS Resume Checker](/resume-checker), [Resume Match Analyzer](/resume-match-analyzer), [Resume Keyword Tool](/resume-keyword-tool), and [Resume Examples Library](/resume-examples)—so you read, fix, and re-test in one loop.
`,
};
