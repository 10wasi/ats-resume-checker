import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_RESUME_KEYWORDS_MISSING } from "@/lib/seo/ctr-metadata";

export const resumeKeywordsMissingEntry: CareerLandingEntry = {
  id: "resume-keywords-missing",
  path: "/resume-keywords-missing",
  breadcrumbLabel: "Keywords missing",
  ctr: CTR_RESUME_KEYWORDS_MISSING,
  faqItems: [
    {
      question: "What are missing resume keywords?",
      answer:
        "Terms from a job posting that your resume does not reflect—skills, tools, certifications, or role language that ATS and recruiters search for.",
    },
    {
      question: "How do I find missing keywords on my resume?",
      answer:
        "Paste the job description into the Resume Match Analyzer or ATS Keywords Finder, then compare output to your resume text.",
    },
    {
      question: "Should I add every missing keyword?",
      answer:
        "Only terms you can discuss in an interview. Missing keywords are a diagnosis—not a copy-paste list.",
    },
    {
      question: "Where should missing keywords go?",
      answer:
        "Primarily in recent experience bullets with proof. Skills sections support—but bullets carry more weight for match tools.",
    },
    {
      question: "Missing keywords vs low match score?",
      answer:
        "Missing keywords cause low match score. Fixing honest gaps in bullets typically lifts both match % and recruiter skim quality.",
    },
  ],
  body: `
**Resume keywords missing** from your file is one of the most common—and fixable—reasons applications stall. The job post speaks SQL, stakeholder management, and Agile; your resume only says "data work" and "team projects."

## Example: before and after

**Job posting highlights:** Python, SQL, Tableau, stakeholder reporting, monthly KPI dashboards.

**Before (weak):** "Worked on data projects and presented to leadership."

**After (keyword + proof):** "Built Python/SQL pipelines feeding Tableau dashboards; delivered monthly KPI reports to 12 stakeholders across finance and ops."

Same person. Searchable terms. Interview-ready story.

## How to find missing keywords (15 minutes)

1. Paste the JD into [ATS Keywords Finder](/ats-keywords-finder).
2. Run [Resume Match Analyzer](/resume-job-description-match) with your resume + same JD.
3. List **must-have** terms (requirements section + repeated skills).
4. Ctrl+F your resume—mark gaps you truly have experience with.
5. Browse [resume keywords database](/resume-keywords) for your role family.

## Where to place keywords (not stuffing)

| Location | Good use | Bad use |
|----------|----------|---------|
| Experience bullets | Skill + outcome | Keyword lists without context |
| Summary | 2–4 core terms | Entire JD pasted |
| Skills section | Tools you can defend | 40 tools you used once |

Deep strategy: [ATS resume keywords guide](/ats-resume-keywords).

## Action steps

1. Fix top 5 missing terms in your most recent role.
2. Re-run match score—target honest 70%+ for targeted applications.
3. Use [Resume Skills Analyzer](/resume-skills-analyzer) to verify overlap.
4. Complete [resume keywords checker](/resume-keywords-checker) workflow for ongoing batches.

## Related problems

- [Resume not passing ATS](/resume-not-passing-ats)
- [How to tailor resume for job description](/how-to-tailor-resume-for-job-description)
- [Resume match score explained](/resume-match-score)
`,
};
