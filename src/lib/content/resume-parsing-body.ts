export const RESUME_PARSING_PATH = "/resume-parsing" as const;

export const resumeParsingSeo = {
  title: "Resume Parsing — How ATS Reads Your Resume",
  description:
    "Resume parsing explained: how ATS extracts text from PDF and DOCX, why parsers fail, and how to test your file before applying.",
} as const;

export const resumeParsingBody = `
**Resume parsing** is the automated process by which applicant tracking systems extract structured information from your uploaded file and store it in searchable database fields. When parsing succeeds, your name, employers, titles, dates, skills, and education become discrete, searchable data points. When parsing fails, your resume becomes invisible—not rejected, just unsearchable.

Test your file right now: [ATS Resume Checker](/resume-checker) shows the extracted text alongside your score.

## What happens when you upload a resume

The moment you click Apply and attach your file, a multi-step process begins:

1. **File receipt** — The portal stores your PDF, DOCX, or plain text
2. **Text extraction** — Parser strips formatting and reads raw character sequences
3. **Field mapping** — Parser attempts to assign extracted text to database fields (name, contact, employer, title, dates, skills, education)
4. **Index storage** — Mapped fields are indexed so recruiters can search them
5. **Rank signal** — Keyword overlap and completeness contribute to an initial match score

Everything after step 2 depends on step 2 succeeding. A garbled extraction means no usable fields, no keyword matches, and no recruiter visibility.

## PDF parsing vs DOCX parsing

| Format | How it parses | When to use |
|--------|--------------|-------------|
| **PDF (text-based)** | Parser reads embedded text stream directly | Default for most portals — exports cleanly from Word or Google Docs |
| **PDF (image/scanned)** | Requires OCR — often fails or garbles text | Avoid entirely for job applications |
| **DOCX** | Parser reads XML inside the file | Required by some legacy ATS; keep simple layout |
| **Google Docs export** | Equivalent to PDF/DOCX depending on export | Export as PDF; test with copy-paste |

The safest default: export a text-based PDF from Microsoft Word or Google Docs, then run the copy-paste test (Select All → paste into Notepad). If text appears in correct reading order, parsing will likely succeed.

## What parsers extract — and what they miss

Parsers are pattern-matching engines trained on millions of resume formats. They extract reliably when layout is predictable:

**Extracts reliably:**
- Contact block (name, email, phone) when in the document body as plain text
- Work history (employer, title, dates) in standard reverse-chronological format
- Education (institution, degree, dates) with conventional labels
- Skills listed as plain text under a "Skills" or "Technical Skills" heading

**Misses or garbles:**
- Text inside graphics, images, text boxes, or tables used for layout
- Contact info placed only in a header/footer region (excluded from text stream in some parsers)
- Sidebar columns — two-column layouts split the reading order, mixing employers and dates
- Icon-based skills sections where tools are represented as SVG icons
- Custom creative section names ("What I do best" instead of "Experience")

## Real parse failure examples

**Two-column layout failure:**
A finance resume used a sidebar for skills. The parser read columns left-to-right across the full width, producing:

    JPMorgan Chase · Excel · 2018–2021 · Python · VP Operations · SQL

instead of:

    JPMorgan Chase · VP Operations · 2018–2021
    [separate skills field: Excel, Python, SQL]

No recruiter search for "VP Operations" would surface this candidate.

**Icon skills section failure:**
A UX designer used icon-grid skills in Canva. After export: the PDF contained zero text in the skills area. The parser indexed no technical skills at all—invisible to any tool search.

**Header contact block failure:**
A candidate's email and phone were placed only in a designed header graphic. The parser indexed the name but no contact details. The recruiter had no way to reach them.

## How to test your resume's parse health

### The copy-paste test (30 seconds)

1. Open your resume PDF
2. Select All (Ctrl+A)
3. Paste into Notepad or TextEdit

Read the output. If your work history appears in the correct employer → title → dates → bullets order, basic parsing will succeed. If dates and employers are mixed or skills appear in random positions, fix the layout.

### The ATS checker test (2 minutes)

Upload your file to the [ATS Resume Checker](/resume-checker). The extracted-text preview shows exactly what the parser indexed—identical to what employer ATS systems see from a clean file.

Look for:
- Your name at the top
- Each employer followed immediately by title and dates
- Skills appearing as distinct text (not empty or garbled)
- Education in correct field order

## Common parse fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Skills section is empty | Icons or images used | Replace with plain comma-separated text |
| Employer names scrambled with dates | Two-column layout | Convert to single column |
| Contact info missing | Email/phone only in graphic header | Move to plain text in document body |
| Dates appear before employer names | Creative layout or table cell order | Use standard reverse-chronological format |
| Bullet points become one long sentence | Text boxes or manual line breaks | Use native Word/Docs bullet list styles |

## Parser differences across ATS vendors

Different ATS platforms use different parsing engines. Workday, Greenhouse, iCIMS, Taleo, and Lever all behave slightly differently—but they share the same core dependency: clean, linear text extraction.

The safest strategy is not to optimize for one ATS. It is to make your file parseable by any engine:
- Single column
- Standard headings
- No text boxes or tables for layout
- Text-based PDF from Word or Docs (not Canva, Figma, or Photoshop)
- Contact details in the body

## Resume parsing and keyword matching

Parsing is the foundation. Keyword matching is the second layer. A perfectly parsed resume with poor keyword alignment will rank low. A poorly parsed resume with great keywords is invisible.

The correct order:
1. Fix parse health ([format guide](/ats-resume-format))
2. Verify extraction with [resume checker](/resume-checker)
3. Identify keyword gaps with [ATS keywords finder](/ats-keywords-finder)
4. Match score with [resume match analyzer](/resume-job-description-match)
5. Re-check after edits

## Related guides

- [ATS resume format](/ats-resume-format) — layout rules that parse cleanly
- [ATS resume mistakes](/ats-resume-mistakes) — format errors that break parsers
- [How ATS works](/how-ats-works) — the full screening pipeline beyond parsing
- [Resume keywords checker](/resume-keywords-checker) — keyword gap analysis
`;
