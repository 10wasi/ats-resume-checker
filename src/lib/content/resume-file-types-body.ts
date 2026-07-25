export const RESUME_FILE_TYPES_PATH = "/resume-file-types" as const;

export const resumeFileTypesSeo = {
  title: "Resume File Types — PDF vs DOCX for ATS Upload",
  description:
    "Resume file types for ATS: PDF vs Word DOCX, naming, size limits. Upload the right format—parser test free online.",
} as const;

export const resumeFileTypesBody = `
Choosing the wrong **resume file type** is a silent rejection reason—before anyone reads a single bullet. Portals specify PDF, DOCX, or plain text; your job is to upload **exactly** what they ask, exported from a parse-safe source document.

Always run the [ATS Resume Checker](/resume-checker) on the **same file** you will submit.

## PDF vs DOCX for ATS

| Format | When to use | Risks |
|--------|-------------|-------|
| **PDF** | Default for most online applications | Scanned image PDFs parse as empty text |
| **DOCX** | Portal explicitly requests Word | Fancy templates may still break in import |
| **TXT** | Rare legacy portals | No formatting—structure must be obvious |

**Rule:** If the posting says "PDF only," do not upload DOCX. If it says "Word preferred," send DOCX from Google Docs or Microsoft Word—not a PDF conversion of a design file.

## How to export ATS-safe PDF

1. Author in Word or Google Docs single-column layout
2. File → Save as PDF (not Print to PDF from browser)
3. Copy-paste test from [ATS format guide](/ats-resume-format)
4. Parser preview in [resume parser tool](/resume-parser)

## File naming conventions

Use professional, searchable names:

- \`FirstName-LastName-Resume.pdf\`
- \`Jane-Doe-Product-Manager-2026.pdf\`

Avoid spaces-only names, "final_final_v3," or special characters some portals reject.

## File size and security

- Keep under **2 MB** when possible (many limits are 5 MB)
- Do not password-protect files
- Avoid embedded multimedia or portfolios inside the same PDF unless requested

## Image-based PDFs fail silently

Scanned paper resumes and Canva exports saved as flat images produce **zero** keyword index. Fix at source—retype into Word/Docs.

## When to use both formats

Maintain one master DOCX and export PDF for each application batch. Store variants per role type (e.g., data vs product) to avoid wrong-file uploads.

## Related guides

- [ATS-friendly fonts](/ats-friendly-fonts)
- [Resume length guide](/resume-length-guide)
- [ATS resume templates](/ats-resume-templates)
- [Resume resources hub](/resume-resources)
- [Country-specific upload norms](/resume-checker-india)
`;

export const RESUME_FILE_TYPES_FAQ = [
  {
    question: "Is PDF always better for ATS?",
    answer:
      "No—follow the employer's requested format. A well-structured DOCX often parses better than a poorly exported PDF.",
  },
  {
    question: "Can I upload a Google Docs link?",
    answer:
      "Portals require file upload. Export PDF or DOCX from Docs unless the application explicitly accepts URLs.",
  },
  {
    question: "Will ATS read hyperlinks in PDF?",
    answer:
      "Some parsers strip links. Repeat critical keywords and tool names in plain bullet text, not only in linked portfolio lines.",
  },
];
