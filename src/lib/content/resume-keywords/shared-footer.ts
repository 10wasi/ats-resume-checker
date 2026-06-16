/** Internal links appended to every role keywords page. */
export function keywordsPageFooter(slug: string, roleTitle: string, exampleSlug?: string): string {
  const ex = exampleSlug ?? slug;
  return `
## Test these keywords on your resume

1. Paste your target job post into the [ATS Keywords Finder](/ats-keywords-finder).
2. Run the [Resume Match Analyzer](/resume-job-description-match) to see gaps vs your file.
3. Upload your PDF to the [ATS Resume Checker](/resume-checker) for format and keyword QA.

## Related resources

- [${roleTitle} resume example](/resume-examples/${ex}) — full ATS-friendly sample
- [ATS resume guide](/ats-resume/${ex}) — format and placement tips
- [ATS Resume Examples Hub](/ats-resume-examples) — layout patterns that parse
- [ATS Resource Hub](/ats-resume-hub) — guides, checklist, and tools
- [ATS Resume Keywords Guide](/ats-resume-keywords) — ethical placement rules
- [Resume Keywords Database](/resume-keywords) — all professions
`;
}
