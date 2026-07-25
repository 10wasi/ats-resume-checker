export const ATS_FRIENDLY_FONTS_PATH = "/ats-friendly-fonts" as const;

export const atsFriendlyFontsSeo = {
  title: "ATS Friendly Fonts — Safe Typography for Resume PDFs",
  description:
    "ATS friendly fonts: Arial, Calibri, Georgia, Helvetica sizes & rules. Export parse-safe PDFs—test free with the ATS resume checker.",
} as const;

export const atsFriendlyFontsBody = `
Typography affects whether parsers read your resume in the right order. **ATS friendly fonts** are standard, widely embedded typefaces at readable sizes— not decorative scripts recruiters struggle to skim.

Validate exports in the [ATS Resume Checker](/resume-checker) after changing fonts or templates.

## Recommended ATS-safe fonts

| Font | Best for | Notes |
|------|----------|-------|
| **Arial** | Universal safe choice | Clean sans-serif; embeds reliably in PDF |
| **Calibri** | Modern corporate | Default in many Word templates |
| **Helvetica** | Design-forward industries | Use when PDF embeds subset correctly |
| **Georgia** | Serif option | Readable; test copy-paste from PDF |
| **Times New Roman** | Conservative fields | Law, academia, some finance |
| **Garamond** | Elegant single-column | Keep 11–12 pt; verify parser order |

Avoid script, hand-drawn, or ultra-light weights below 10 pt body text.

## Font size guidelines

- **Name:** 16–20 pt bold
- **Section headings:** 12–14 pt bold, ALL CAPS optional
- **Body bullets:** 10–12 pt regular
- **Margins:** 0.5–1 inch; wider margins beat tiny type

## Fonts that often break parsing

- Icon fonts substituting for letters
- Custom brand typefaces without full embedding
- Text converted to outlines in design tools
- White or low-contrast text on colored bands

Run the copy-paste test from [ATS resume format](/ats-resume-format): select all in PDF → paste to Notepad. If order scrambles, change layout—not just font.

## Serif vs sans-serif for ATS

Neither is universally "better." Match industry norms: tech and product often use sans-serif; law and academia may expect serif. Consistency matters more than family—one font for body, optional bold variant for headings.

## Pair fonts with file type choices

Export [PDF vs DOCX](/resume-file-types) per portal instructions. Some systems parse DOCX more cleanly; others require PDF. After export, use the [resume parser test](/resume-parser).

## Related resources

- [ATS resume templates guide](/ats-resume-templates)
- [Resume length guide](/resume-length-guide)
- [ATS resume mistakes](/ats-resume-mistakes)
- [Resume resources hub](/resume-resources)
`;

export const ATS_FRIENDLY_FONTS_FAQ = [
  {
    question: "Can I use Canva fonts for ATS resumes?",
    answer:
      "Only if the exported PDF contains real, selectable text in standard fonts. Decorative Canva layouts often scramble parser order—test before applying.",
  },
  {
    question: "Is 9 pt font OK to fit one page?",
    answer:
      "Avoid going below 10 pt body text. Recruiters and parsers both degrade with tiny type—trim content instead of shrinking font.",
  },
  {
    question: "Should headings be a different font than body?",
    answer:
      "Optional. Using bold weight of the same family is safer than mixing two unfamiliar fonts that may not embed cleanly.",
  },
];
