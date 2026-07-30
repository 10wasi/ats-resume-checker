/** Expands role-specific industry content to ~1,500+ words for topical authority. */
export function expandIndustryBody(opts: {
  roleLabel: string;
  keywordFocus: string[];
  parseFailures: string[];
  checklist: string[];
  keywordClusters: { title: string; terms: string }[];
  examples: { weak: string; strong: string }[];
  mistakes: string[];
}): string {
  const { roleLabel, keywordFocus, parseFailures, checklist, keywordClusters, examples, mistakes } =
    opts;
  const lower = roleLabel.toLowerCase();

  const clustersMd = keywordClusters
    .map((c) => `### ${c.title}\n${c.terms}`)
    .join("\n\n");

  const examplesMd = examples
    .map(
      (e, i) =>
        `**Example ${i + 1} — weak:** "${e.weak}"\n\n**Strong:** "${e.strong}"`
    )
    .join("\n\n");

  return `# ATS resume checker for ${lower}s — complete workflow

## Why ${lower} resumes fail ATS filters

Applicant tracking systems do not understand your career story—they index **text fields** recruiters search later. ${roleLabel} postings are keyword-dense: tools, methodologies, certifications, and outcome metrics appear in filters even when the human reader would infer them from context.

When a resume fails, it is usually one of three parse problems—not lack of talent:

${parseFailures.map((p) => `- ${p}`).join("\n")}

Millions of ATS deployments use **keyword matching** plus field extraction. If your PDF hides terms in icons, columns, or image headers, search queries for ${keywordFocus.slice(0, 3).join(", ")} may return zero matches.

## Pre-apply checklist for ${lower}s

Run the [free ATS resume checker](/resume-checker) on the exact file you will upload, then verify:

${checklist.map((c, i) => `${i + 1}. ${c}`).join("\n")}

Paste your target job description in the [resume match analyzer](/resume-job-description-match) to surface missing terms before you batch-apply.

## Keyword clusters recruiters filter on

${clustersMd}

Mirror **exact spelling** from the posting (abbreviation vs full name) when honest—you qualify.

## Bullet examples: weak vs ATS-strong

${examplesMd}

After edits, re-run the [resume parser](/resume-parser) to confirm tools and metrics appear in extracted text order.

## Common ${lower} resume mistakes

${mistakes.map((m) => `- ${m}`).join("\n")}

See the full [ATS resume mistakes guide](/ats-resume-mistakes) for format issues that affect every profession.

## Formatting for ${lower} applications

Follow the [ATS-friendly formatting guide](/ats-resume-format): single column, standard headings (Experience, Education, Skills), plain bullets, no text boxes. Choose fonts from the [ATS-friendly fonts list](/ats-friendly-fonts). Export [PDF vs DOCX](/resume-file-types) based on portal instructions.

## Length and file type guidance

Most ${lower} candidates should read the [resume length guide](/resume-length-guide)—one page for early career, two when every line proves recent impact. Students and career changers: prioritize projects and coursework keywords in plain text.

## Skills and verbs libraries

Browse the [resume skills library](/resume-skills-library) and [action verbs guide](/resume-action-verbs) to replace duty language with searchable ownership verbs tied to metrics.

## Step-by-step: improve your score this week

1. **Baseline** — Upload to the [ATS score checker](/ats-score-checker); note parse warnings first.
2. **Match** — Compare against the posting with the [keyword checker](/resume-keyword-checker).
3. **Rewrite** — Fix top three missing terms in recent role bullets.
4. **Format QA** — Single column export; test copy-paste from PDF.
5. **Re-check** — Scan again; aim for improved keyword overlap, not a perfect number.

## Trust, privacy, and how scoring works

ResumeIQ analyzes your document per request—[no resume storage policy](/privacy). Scores combine parse health, keyword overlap, and structure estimates—read [scoring methodology](/methodology) and [how ATS works](/how-ats-works). AI suggestions follow your text plus ATS rules, not generic templates—see [how resume analysis works](/how-resume-analysis-works).

## Related role and resource links

- [Resume resources hub](/resume-resources)
- [Free ATS resume checker](/)
- [Country-specific guides](/resume-checker-usa)
- [FAQ Center](/faq-center)
- [Glossary: ATS terms](/glossary)`;
}
