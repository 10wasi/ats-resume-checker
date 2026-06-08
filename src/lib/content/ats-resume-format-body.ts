export const ATS_RESUME_FORMAT_PATH = "/ats-resume-format" as const;

export const atsResumeFormatSeo = {
  title: "ATS Resume Format — Layout Rules That Parse",
  description:
    "ATS resume format for an ATS friendly resume: single column, headings, fonts, PDF vs Word. Resume optimization starts with layout—test free.",
} as const;

export const atsResumeFormatBody = `
Format is the gate. You can have perfect keywords and still vanish if the parser reads your work history in the wrong order.

This **ATS resume format** guide covers layout, typography, headings, and file types—the mechanical layer every **ATS friendly resume** needs before you tune language.

Validate your export in the [ATS Resume Checker](/resume-checker) and cross-check with the [ATS Resume Checklist](/ats-resume-checklist-2026).

## Core ATS formatting rules

1. **Single column** — one vertical flow top to bottom.
2. **Standard headings** — Experience, Education, Skills, Summary (pick conventional labels).
3. **Body contact info** — phone and email in the main text, not only in a header region.
4. **Simple fonts** — Arial, Calibri, Helvetica, Times at 10–12 pt body.
5. **No tables for layout** — data tables for skills grids often scramble on import.
6. **Minimal graphics** — no skill bars, icons, or text baked into images.

Template starting points: [ATS Resume Templates Guide](/ats-resume-templates).

## The copy-paste test (do this first)

Export PDF → Select All → Paste into Notepad.

- Do employers stay with the right dates?
- Does Skills appear after Experience (or wherever you intended)?
- Is any contact info missing?

If the answer is no, fix the source document—not the PDF compressor.

## Headings that parsers recognize

**Use:** Work Experience, Professional Experience, Employment History, Education, Skills, Certifications, Summary.

**Avoid:** "Where I've Made Impact," "Toolbox," "Credentials & Awesomeness."

Parsers map predictable labels to database fields. Creative headings become junk text.

## Typography and spacing

- **Margins:** 0.5–1 inch—enough white space for humans, still one column.
- **Bold:** job titles and section headers only; not every other word.
- **Bullets:** standard round or square bullets, not custom Unicode ornaments.
- **Dates:** consistent format (Jan 2022 – Mar 2024) on the same line as title or company.

## PDF vs Word (.docx)

| Format | When to use |
|--------|-------------|
| **PDF** | Default for most portals when upload allows—preserves layout if exported cleanly from Word or Google Docs |
| **Word** | Some legacy ATS prefer .docx; keep the same simple layout |
| **Google Docs** | Fine if you export PDF and pass the copy-paste test |

Avoid design-tool PDFs (Canva, Photoshop) unless you have verified text extraction.

## Sections and order

Typical order for experienced candidates:

1. Contact
2. Summary (optional)
3. Experience
4. Skills
5. Education
6. Certifications (optional)

Early career may elevate Education or Projects—still with standard headings.

## Format mistakes tied to rejection

Deep dive: [ATS Resume Mistakes](/ats-resume-mistakes). The fast list:

- Two columns
- Text boxes
- Header-only contact
- Image logos replacing company names
- Hyperlinks that strip link text on export

## After format: keywords and match

Format unlocks parsing; keywords unlock relevance. Next steps:

1. [ATS Resume Keywords Guide](/ats-resume-keywords)
2. [Resume vs Job Description Matching](/resume-job-description-match)
3. [ATS Score Explained](/ats-score-explained)

Full library: [ATS Knowledge Center](/knowledge-center).
`;
