import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Shared internal-link footer appended to cluster landing bodies (~400 words). */
export const CLUSTER_WORKFLOW_APPENDIX = `
## Resume optimization workflow (check → match → fix)

Every cluster guide on ResumeIQ connects to the same measurable workflow:

1. **Baseline** — Run the [free ATS resume checker](${RESUME_CHECKER_PATH}) on the exact PDF you will upload.
2. **Parser** — Confirm extracted text order in the [resume parser guide](/resume-parser). Fix layout before keywords.
3. **Keywords** — Use the [resume keyword checker](/resume-keyword-checker) or paste a job post in the [match tool](/resume-job-description-match).
4. **Score** — Read your [resume ATS score](/ats-score-checker) and prioritize fixes from the report.
5. **Optimize** — Follow the [resume optimization guide](/resume-optimization) for bullets, format, and export QA.

## Related cluster guides

| Guide | Best for |
|-------|----------|
| [Free ATS resume checker](/free-ats-resume-checker) | First scan before any application |
| [ATS resume checker online](/ats-resume-checker-online) | Browser-based scan without installs |
| [Resume analyzer](/resume-analyzer) | Section-level AI feedback |
| [Resume keyword checker](/resume-keyword-checker) | Missing terms vs a posting |
| [ATS score checker](/ats-score-checker) | Understanding your compatibility % |
| [Resume parser](/resume-parser) | What software actually reads |
| [Resume optimization](/resume-optimization) | End-to-end improvement plan |

## Trust & methodology

Scores are estimates based on parse health, keyword overlap, and structure — not a guarantee any employer uses identical weighting. Read [how we score resumes](/how-we-score-resumes), [our algorithm](/our-algorithm), and [editorial policy](/editorial-policy). Questions: [FAQ Center](/faq-center) or [contact](/contact).
`;
