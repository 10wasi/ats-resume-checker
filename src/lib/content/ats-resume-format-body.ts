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

## What the parser actually sees (annotated)

This is the single most useful thing to understand about formatting: the parser does not "see" your beautiful layout. It reads a linear text stream. A two-column design that looks organized to you is read left-to-right, row-by-row—so columns interleave into nonsense.

Here is the same experience block in a **two-column template** and how a common parser flattens it:

\`\`\`
YOU SEE (2 columns)              PARSER READS (linear stream)
-------------------------        ----------------------------
SKILLS      | EXPERIENCE         Skills Experience Python
Python      | Senior Analyst     Senior Analyst SQL Acme Corp
SQL         | Acme Corp          Tableau 2021-Present Built
Tableau     | 2021-Present       dashboards... Education...
            | Built dashboards   (job title now separated
            | reducing...         from its bullets)
\`\`\`

Now the **single-column** version of the same content:

\`\`\`
PARSER READS (clean)
----------------------------
EXPERIENCE
Senior Analyst — Acme Corp — 2021-Present
Built dashboards reducing reporting time 35% (SQL, Tableau)
SKILLS
Python, SQL, Tableau
\`\`\`

Same words. Only the second version keeps "Senior Analyst" attached to its employer, dates, and bullets. This is why layout beats wording for parse success.

## Format decision tree

Not sure which format choice to make? Follow this:

\`\`\`
Does the portal accept PDF?
├─ Yes → Export PDF from Word/Google Docs → run copy-paste test
│        ├─ Text extracts in order? → Ship it
│        └─ Scrambled? → Remove columns/tables/text boxes → re-export
└─ No / DOCX only → Save .docx with the SAME single-column layout
                    └─ Never upload a design-tool export you haven't tested
\`\`\`

## Parse-failure symptoms and their cause

Use this to reverse-engineer a low score. If the checker shows a symptom, the middle column is almost always the reason.

| Symptom in extracted text | Root cause | Fix |
|---------------------------|-----------|-----|
| Job titles detached from employers | Two-column layout | Single column |
| Skills appear before your name | Sidebar column read first | Move skills below experience, one column |
| Phone/email missing | Contact in header/footer region | Repeat contact in body |
| Bullets merged into one line | Custom bullet glyphs or text boxes | Standard bullets, no boxes |
| Company shows as blank | Logo image instead of text | Type the employer name |
| Dates in wrong order | Table cells parsed column-wise | Dates inline with each role |

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

## Profession-specific format notes

Format rules are universal, but the traps differ by field:

| Field | Biggest format trap | What to do instead |
|-------|---------------------|--------------------|
| Design / creative | Portfolio PDF uploaded to ATS | Keep a plain text-first version for portals; link the portfolio |
| Engineering | GitHub/skill badges as images | List languages and tools as text; link repos in contact line |
| Academia / research | Multi-page CV with dense tables | Publications as plain list; single column |
| Healthcare | Credentials in a sidebar box | Licenses (RN, BLS) spelled out in body |
| Sales / marketing | Infographic "results" charts | State metrics as text bullets ("grew MRR 32%") |
| Finance | Spreadsheet-style skill grids | Comma-separated skills line; no layout tables |

## Format QA checklist

- [ ] Single column, no text boxes or tables for layout
- [ ] Standard headings (Experience, Education, Skills)
- [ ] Contact details in the body, not only the header
- [ ] Copy-paste test passes—text extracts in the right order
- [ ] Standard bullets and one clean font at 10–12 pt
- [ ] Company names typed as text (no logo images)
- [ ] Same PDF you tested is the one you upload

## The one myth worth killing

**Myth:** "A creative, colorful resume shows initiative and beats boring templates."

**Reality:** In an ATS pipeline, a creative file that fails parsing is invisible—initiative no one reads. Save the designed version for networking, email, and portfolio links. Upload the plain version to the portal. You are not choosing between creative and boring; you are keeping two files for two audiences.

## After format: keywords and match

Format unlocks parsing; keywords unlock relevance. Next steps:

1. [ATS Resume Keywords Guide](/ats-resume-keywords)
2. [Resume vs Job Description Matching](/resume-job-description-match)
3. [ATS Score Explained](/ats-score-explained)

Full library: [ATS Knowledge Center](/knowledge-center).
`;
