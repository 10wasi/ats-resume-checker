import type { CareerLandingEntry } from "./types";
import { CTR_RESUME_MATCH_ANALYZER_LANDING } from "@/lib/seo/ctr-metadata";

export const RESUME_MATCH_ANALYZER_PATH = "/resume-job-description-match" as const;

export const resumeMatchAnalyzerEntry: CareerLandingEntry = {
  id: "resume-match-analyzer",
  path: RESUME_MATCH_ANALYZER_PATH,
  breadcrumbLabel: "Resume match analyzer",
  ctr: CTR_RESUME_MATCH_ANALYZER_LANDING,
  faqItems: [
    {
      question: "What is a resume match analyzer?",
      answer:
        "A resume match analyzer compares your resume to a specific job description—scoring keyword overlap, surfacing missing skills, and showing where to tailor bullets before you apply.",
    },
    {
      question: "How is match score different from ATS score?",
      answer:
        "ATS score measures overall resume health on your master file. Match score is job-specific—how well your language mirrors one posting.",
    },
    {
      question: "Does this work for remote jobs worldwide?",
      answer:
        "Yes. Remote employers use the same ATS stacks. Tailor keywords to each posting regardless of your location or the employer's region.",
    },
    {
      question: "Is the resume match analyzer free?",
      answer:
        "Yes. Paste a job description, upload or paste your resume, and get match %, missing keywords, and suggested terms—no signup for standard use.",
    },
  ],
  body: `
The **Resume Match Analyzer** answers: *Does my resume speak the same language as this job posting?* Paste any description—local, international, or remote—and get an instant **resume match score**, missing keywords, and honest gap notes.

## What the resume match analyzer checks

- **Keyword overlap** — Skills, tools, and titles repeated in the posting
- **Missing terms** — Requirements you have but did not phrase clearly
- **Match percentage** — A benchmark to improve before you hit apply
- **Suggested ATS keywords** — Terms to weave into bullets where experience is real

[Run the free Resume Match Analyzer →](/resume-job-description-match)

## Resume match analyzer workflow

1. Upload or paste your resume
2. Paste the full job description
3. Review match score and missing keywords
4. Edit top bullets and skills—re-run until overlap improves
5. Complete [ATS Resume Checklist](/ats-resume-checklist-2026) QA on your export

## Pair with core tools

- [ATS Resume Checker](/resume-checker) — Baseline parse and format health
- [Resume Keyword Tool](/resume-keyword-tool) — Extract terms from any posting
- [Resume Examples Library](/resume-examples) — Role-specific benchmarks
- [ATS Guide Hub](/ats-guide) — Optimization guides and blog clusters

## Global applications

Match analysis matters for **global applications**—company portals worldwide use similar parsing and keyword search. Mirror employer spelling and title norms for your target market; parser rules stay similar across regions.
`,
};
