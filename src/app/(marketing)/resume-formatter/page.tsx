import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { resumeFormatterFaqItems } from "@/lib/seo/resume-formatter-faq";
import { buildCtrMetadata, CTR_RESUME_FORMATTER } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/resume-formatter";

export const metadata = buildCtrMetadata(CTR_RESUME_FORMATTER, {
  canonical: PATH,
  keywords: [
    "resume formatter",
    "ATS resume format",
    "resume formatting guide",
    "ATS-safe resume format",
    "best resume format 2026",
  ],
});

const FORMAT_RULES = [
  { element: "Layout", rule: "Single column", avoid: "Two columns, sidebar, tables" },
  { element: "Font", rule: "Calibri, Garamond, Arial, Georgia", avoid: "Script, decorative, icon fonts" },
  { element: "Font size (body)", rule: "11–12pt", avoid: "Below 10pt or above 13pt" },
  { element: "Font size (name)", rule: "16–20pt bold", avoid: "Same size as body text" },
  { element: "Margins", rule: "0.75–1 inch all sides", avoid: "Below 0.5 inch or above 1.25 inch" },
  { element: "Line spacing", rule: "1.0–1.15 within bullets", avoid: "Double spacing or 0.5 spacing" },
  { element: "File format", rule: ".pdf or .docx", avoid: ".pages, .odt, scanned image PDF" },
  { element: "Contact info", rule: "In document body, top section", avoid: "Inside header/footer regions" },
  { element: "Section headings", rule: "Bold, standard labels", avoid: "Tables, text boxes, non-standard labels" },
  { element: "Bullets", rule: "Standard • or – hyphens", avoid: "Icons, emoji, graphic bullets" },
];

const BEFORE_AFTER = [
  {
    label: "Section headings",
    before: '"My Journey" / "What I Bring" / "Core Strengths"',
    after: '"Work Experience" / "Skills" / "Education"',
    reason: "ATS maps resume content to structured fields by recognizing standard labels.",
  },
  {
    label: "Skills section",
    before: "Icon grid with proficiency bars: ████░░ Python",
    after: "Plain text list: Python, SQL, Tableau, Power BI, AWS",
    reason: "Icon grids and progress bars are stripped or garbled. Skills become invisible to the parser.",
  },
  {
    label: "Contact block",
    before: "Name and email in the document header area",
    after: "Name, email, phone, LinkedIn in the first three lines of the body",
    reason: "Many ATS platforms do not extract content from header/footer regions at all.",
  },
  {
    label: "Experience layout",
    before: "Two-column: company on left, dates on right, bullets spanning both",
    after: "Single column: company + date on one line, bullets below in full width",
    reason: "Two-column layouts cause ATS to read your role descriptions out of order.",
  },
];

const SECTION_ORDER = [
  { number: "1", section: "Contact Information", note: "Name, email, phone, LinkedIn, city" },
  { number: "2", section: "Professional Summary", note: "3–4 lines: role, years, key skills, top achievement" },
  { number: "3", section: "Work Experience", note: "Most recent first. Company, title, dates, bullets." },
  { number: "4", section: "Skills", note: "Plain-text comma list or grouped by type" },
  { number: "5", section: "Education", note: "Degree, institution, graduation year" },
  { number: "6", section: "Certifications", note: "Only if relevant to the target role" },
];

export default function ResumeFormatterPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Formatter", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeFormatterFaqItems} />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <GuideArticleMeta path={PATH} />

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {CTR_RESUME_FORMATTER.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          How your resume is formatted determines whether ATS can read it — before a recruiter ever sees your experience. This guide covers every formatting decision: fonts, margins, layout, file type, section order, and the specific elements that silently break ATS parsing.
        </p>

        <BlogResumeCta />

        {/* Format rules table */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          ATS formatting rules — the complete reference
        </h2>
        <p className="mt-3 text-slate-600">
          Every formatting decision below affects how ATS extracts your resume text. Following these rules does not guarantee a job offer — but breaking them guarantees your application starts at a disadvantage.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Element</th>
                <th className="px-4 py-3 text-left font-semibold text-emerald-700">Use this</th>
                <th className="px-4 py-3 text-left font-semibold text-rose-600">Avoid this</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {FORMAT_RULES.map((row) => (
                <tr key={row.element}>
                  <td className="px-4 py-3 font-medium text-slate-800">{row.element}</td>
                  <td className="px-4 py-3 text-slate-700">{row.rule}</td>
                  <td className="px-4 py-3 text-slate-500">{row.avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section order */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Recommended section order
        </h2>
        <p className="mt-3 text-slate-600">
          ATS maps resume content to structured fields by section heading. The closer your order is to the standard, the more accurately your content will be categorized.
        </p>
        <ol className="mt-6 space-y-3">
          {SECTION_ORDER.map((s) => (
            <li key={s.number} className="flex gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-display text-sm font-bold text-emerald-800">
                {s.number}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{s.section}</p>
                <p className="mt-0.5 text-sm text-slate-600">{s.note}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Before vs after */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Before vs after: 4 formatting fixes that matter
        </h2>
        <div className="mt-6 space-y-4">
          {BEFORE_AFTER.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-900">{item.label}</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <p className="rounded-lg bg-red-50 px-3 py-2.5 text-sm text-slate-700 ring-1 ring-red-100">
                  <span className="font-semibold text-red-600">Before: </span>
                  {item.before}
                </p>
                <p className="rounded-lg bg-emerald-50 px-3 py-2.5 text-sm text-slate-700 ring-1 ring-emerald-100">
                  <span className="font-semibold text-emerald-700">After: </span>
                  {item.after}
                </p>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Why it matters: </span>
                {item.reason}
              </p>
            </div>
          ))}
        </div>

        {/* Quick test */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Quick formatting test — do this before applying
        </h2>
        <ul className="mt-5 space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          {[
            "Copy all resume text and paste into Notepad — it should read in logical order",
            "All text is selectable — not an image or scanned file",
            "Single-column layout — no sidebar, no tables",
            "Contact info is in the main body, not the header region",
            "Section headings use standard labels (Work Experience, Skills, Education)",
            "File is saved as .pdf or .docx — not .pages or .odt",
            "Fonts are standard: Calibri, Arial, Georgia, or Garamond",
            "No images, icons, decorative borders, or text boxes",
            "Run the resume through the ATS checker — score should be 80+",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-[11px] font-bold text-emerald-800">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="font-display text-xl font-bold text-slate-900">
            Check if your formatting passes ATS
          </p>
          <p className="mt-2 text-slate-600">
            Upload your resume and get instant feedback on layout, parsing, keywords, and format risks.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-5 inline-flex px-8 text-base">
            Run free ATS format check
          </Link>
          <p className="mt-2 text-sm text-slate-500">No signup · PDF or paste text · Instant results</p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <AccordionFaq items={resumeFormatterFaqItems} headingId="formatter-faq" />

        <RelatedResources path={PATH} heading="Related resume tools" />
      </main>
    </>
  );
}
