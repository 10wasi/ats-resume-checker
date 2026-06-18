import type { CareerLandingEntry } from "./types";
import { CTR_RESUME_KEYWORD_TOOL_LANDING } from "@/lib/seo/ctr-metadata";

export const RESUME_KEYWORD_TOOL_PATH = "/resume-keyword-tool" as const;

export const resumeKeywordToolEntry: CareerLandingEntry = {
  id: "resume-keyword-tool",
  path: RESUME_KEYWORD_TOOL_PATH,
  breadcrumbLabel: "Resume keyword tool",
  ctr: CTR_RESUME_KEYWORD_TOOL_LANDING,
  faqItems: [
    {
      question: "What is a resume keyword analyzer?",
      answer:
        "A resume keyword tool extracts skills, tools, certifications, and role terms from job postings—then helps you compare them to your resume for ethical keyword placement.",
    },
    {
      question: "Where should ATS keywords go on a resume?",
      answer:
        "Primarily in recent experience bullets and a concise skills section—not a keyword dump. Match the posting's language where you have real proof.",
    },
    {
      question: "Is keyword stuffing bad for ATS?",
      answer:
        "Yes. Invisible text, unrelated skills lists, and copied job descriptions can hurt trust with recruiters and sometimes trigger filters. Add terms you can discuss in an interview.",
    },
    {
      question: "Which ResumeIQ tool should I use for keywords?",
      answer:
        "Use the ATS Keywords Finder to extract from a posting, the Resume Keywords Database for profession lists, and the Resume Match Analyzer to score overlap vs your file.",
    },
  ],
  body: `
The **Resume Keyword Tool** hub connects every way ResumeIQ helps you find, compare, and place **ATS keywords**—without stuffing or guessing.

## Free keyword tools

| Tool | Best for |
|------|----------|
| [ATS Keywords Finder](/ats-keywords-finder) | Extract skills from any job post instantly |
| [Resume Keywords Checker](/resume-keywords-checker) | Compare resume text vs a posting |
| [Resume Keywords Database](/resume-keywords) | Profession lists, verbs, example bullets |
| [Resume Match Analyzer](/resume-match-analyzer) | Match % and missing keyword gaps |

## Resume keyword analyzer workflow

1. Paste the job description into the [Keywords Finder](/ats-keywords-finder)
2. Highlight terms that appear in requirements and repeated skills
3. Add honest proof in experience bullets—not only a skills dump
4. Run [Resume Match Analyzer](/resume-job-description-match) to measure improvement
5. Re-check with [ATS Resume Checker](/resume-checker) before export

## Guides & examples

- [ATS Resume Keywords Guide](/ats-resume-keywords) — Ethical placement rules
- [Resume Keywords by Industry](/resume-keywords-by-industry) — Sector patterns
- [Resume Examples Library](/resume-examples) — Keyword-rich samples
- [ATS Guide Hub](/ats-guide) — Full optimization path

## Global job applications

Keyword strategy applies worldwide: Workday, Greenhouse, Lever, Taleo, and regional ATS platforms all index searchable text. Tailor language to each employer's posting—whether the role is local, hybrid, or fully remote.
`,
};
