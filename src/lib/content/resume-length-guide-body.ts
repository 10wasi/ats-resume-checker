export const RESUME_LENGTH_GUIDE_PATH = "/resume-length-guide" as const;

export const resumeLengthGuideSeo = {
  title: "Resume Length Guide — One Page vs Two for ATS",
  description:
    "Resume length guide for ATS: one page vs two pages by experience level. Cut fluff, keep keywords—check length fit with free ATS scan.",
} as const;

export const resumeLengthGuideBody = `
How long should a resume be for ATS? The honest answer: **long enough to prove fit, short enough to stay readable.** Applicant tracking systems rarely reject files for page count alone—they reject **missing keywords**, **parse errors**, and **unfocused content**.

Use the [ATS Resume Checker](/resume-checker) after trimming to confirm critical terms still appear in recent roles.

## One page vs two pages

| Profile | Typical length | Why |
|---------|----------------|-----|
| Student / fresher | 1 page | Projects and internships should dominate |
| 0–7 years experience | 1 page (US norm) | Every line must earn space |
| 8–15+ years | 1–2 pages | Two pages OK when recent depth justifies it |
| Academic CV | 2+ pages | Publications and grants—different genre |
| Career changer | 1 page targeted | Relevant projects over full history |

Regional norms vary—see [resume checker USA](/resume-checker-usa) and [resume checker UK](/resume-checker-uk).

## What to cut first (without losing ATS keywords)

1. High school details after college degree
2. Jobs older than 10–15 years unless highly relevant
3. Duplicate bullet duties across roles
4. Objective paragraphs (replace with keyword-rich summary)
5. Hobbies unrelated to posting

Keep tools and certifications even when trimming prose—run the [keyword checker](/resume-keyword-checker) after cuts.

## When two pages help ATS

Two pages can **help** when you hold multiple relevant certifications, large-scale metrics, or parallel consulting clients—**if** page two continues recent, searchable keywords. Page two filled with outdated roles hurts both human and automated review.

## Length mistakes that hurt interviews

- Shrinking font to 8 pt instead of editing content ([font guide](/ats-friendly-fonts))
- Repeating the same skills block on every page
- Adding graphics to fill space
- Including every job since high school for senior roles

See [ATS resume mistakes](/ats-resume-mistakes) for format issues that waste space.

## Students and freshers

Prioritize internships, capstones, and leadership with metrics. Guides: [students checker](/resume-checker/students) and [freshers checker](/resume-checker/freshers).

## Checklist before submit

- [ ] Recent role on page one with posting keywords
- [ ] Parser reads sections in intended order ([parser test](/resume-parser))
- [ ] No orphaned heading alone at page bottom
- [ ] File size reasonable ([file types guide](/resume-file-types))

More: [resume resources hub](/resume-resources) · [FAQ Center](/faq-center)
`;

export const RESUME_LENGTH_GUIDE_FAQ = [
  {
    question: "Will ATS reject a three-page resume?",
    answer:
      "Some portals flag file size or excessive length, but the bigger risk is diluted keyword focus. Consolidate to the most relevant 10–15 years unless applying in academia.",
  },
  {
    question: "Should students ever use two pages?",
    answer:
      "Rarely. One dense page of projects, internships, and skills outperforms two pages of filler.",
  },
  {
    question: "Do margins affect ATS?",
    answer:
      "Extreme margins with tiny font can break parsing in some systems. Use standard margins and 10–12 pt type.",
  },
];
