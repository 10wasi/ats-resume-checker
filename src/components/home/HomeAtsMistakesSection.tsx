import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const mistakes = [
  {
    icon: "⊞",
    title: "Tables and columns",
    problem: "Two-column layouts or tables used for contact details, skills, or experience.",
    why: "Most ATS parsers linearize content left-to-right, top-to-bottom. A two-column resume scrambles your job titles, dates, and company names into unreadable output.",
    fix: "Use a single-column layout with standard section headers. Save columns for the printed page you hand to the interviewer.",
  },
  {
    icon: "⬡",
    title: "Header and footer text",
    problem: "Name, phone, email, or LinkedIn placed inside the document header or footer area.",
    why: "Many ATS platforms cannot extract content from header and footer regions. Your contact details may not reach the recruiter's system at all.",
    fix: "Place all contact information in the main document body — first section, first three lines.",
  },
  {
    icon: "🖼",
    title: "Photos and graphics",
    problem: "Profile photo, company logos, decorative borders, or background images embedded in the resume.",
    why: "Images are stripped or cause parse errors. Your photo will not be seen by the recruiter — but it will break the parser reading your experience.",
    fix: "Remove all images. Use text-based section dividers and clean whitespace instead.",
  },
  {
    icon: "✱",
    title: "Icons replacing bullet points",
    problem: "Using icon fonts, emojis, or symbol characters as skill icons or bullet replacements.",
    why: "Decorative icons render as garbled characters or empty boxes in plain-text ATS output, polluting your content and keyword fields.",
    fix: "Standard bullets (•, -, or plain dashes) are parsed cleanly. Icons belong on a portfolio or LinkedIn — not the resume file.",
  },
  {
    icon: "Aa",
    title: "Decorative or script fonts",
    problem: "Using fonts like Lobster, Pacifico, Raleway, or script faces for headings or name display.",
    why: "Decorative fonts often fail to embed correctly in PDFs. When the ATS extracts text, your name or headings may appear as missing characters.",
    fix: "Use fonts that embed reliably: Calibri, Garamond, Georgia, Helvetica, or Arial. These are also faster to skim.",
  },
  {
    icon: "⬜",
    title: "Text boxes",
    problem: "Skills, summaries, or achievements placed inside floating text boxes or shapes.",
    why: "Text boxes are treated as separate objects in PDF parsing. Content inside them is frequently skipped entirely, making your skills section invisible.",
    fix: "Delete all text boxes. Paste content directly into the document body using normal paragraphs.",
  },
  {
    icon: "📄",
    title: "Wrong file type",
    problem: "Submitting a .pages, .odt, .jpg scan, or older .doc format instead of .pdf or .docx.",
    why: "Most ATS expect .pdf or .docx. Other formats may not be processed at all — your application may register as blank.",
    fix: "Export from Pages, Google Docs, or LibreOffice as .docx or .pdf. Verify text is selectable before submitting.",
  },
  {
    icon: "🔍",
    title: "Missing role-specific keywords",
    problem: "Listing job title and company name but never using the specific tools, languages, or methods from the job posting.",
    why: "ATS systems search for exact term matches. 'Data tools' does not match 'SQL'. 'Development experience' does not match 'React'.",
    fix: "Read the job description carefully. Mirror their exact phrasing — if they say 'stakeholder management', use that term, not 'working with stakeholders'.",
  },
  {
    icon: "☰",
    title: "Keyword stuffing",
    problem: "Pasting keywords in white text, repeating terms dozens of times, or listing skills not genuinely held.",
    why: "Modern ATS vendors flag keyword manipulation. Recruiters also read resumes. A keyword list that contradicts your experience results in immediate rejection at the human review stage.",
    fix: "Add keywords naturally inside bullet points that describe real work. Each term should be supported by a sentence of evidence.",
  },
  {
    icon: "¶",
    title: "Dense paragraphs",
    problem: "Writing experience sections as flowing paragraphs rather than structured bullet points.",
    why: "ATS extract bullet content into structured fields. Paragraphs are harder to parse and impossible to skim. Recruiters skip them in the 6-second screen.",
    fix: "One impact per bullet. Start with an action verb. Include a metric where possible. Three to five bullets per role.",
  },
  {
    icon: "🗃",
    title: "Missing core sections",
    problem: "Omitting Work Experience, Skills, or Education sections, or using non-standard labels like 'My Journey' or 'What I Do'.",
    why: "ATS maps resumes to structured fields by section header recognition. Non-standard labels cause mismatch or sections being skipped entirely.",
    fix: "Use standard labels: Work Experience, Skills, Education, Certifications, Summary. These are recognized across every major ATS platform.",
  },
  {
    icon: "📅",
    title: "Missing or inconsistent dates",
    problem: "Omitting dates, using only years without months, or mixing formats (Jan 2023 vs 01/23 vs January 2023).",
    why: "ATS use dates for experience filters (e.g., '5+ years required'). Inconsistent formats cause parse failures. Missing dates trigger automatic flags.",
    fix: "Use Month YYYY format consistently throughout: Jan 2021 – Mar 2024. Include both start and end dates. Current roles: Jan 2023 – Present.",
  },
];

export function HomeAtsMistakesSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/60 py-20 sm:py-28"
      aria-labelledby="ats-mistakes-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">ATS rejection patterns</p>
          <h2
            id="ats-mistakes-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            12 resume mistakes that cause instant ATS rejection
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            These errors appear in more than half of all resumes. Each one causes a specific, fixable failure in
            how hiring software reads and scores your file — before any human sees it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((m) => (
            <article
              key={m.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-lg"
                  aria-hidden
                >
                  {m.icon}
                </span>
                <h3 className="font-display font-bold leading-snug text-slate-900">{m.title}</h3>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold uppercase tracking-wide text-xs text-slate-500">Problem</p>
                  <p className="mt-1 leading-relaxed text-slate-700">{m.problem}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-wide text-xs text-red-500">Why ATS rejects it</p>
                  <p className="mt-1 leading-relaxed text-slate-700">{m.why}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-wide text-xs text-emerald-600">Correct approach</p>
                  <p className="mt-1 leading-relaxed text-slate-700">{m.fix}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center sm:p-8">
          <h3 className="font-display text-xl font-bold text-slate-900">
            Scan your resume for these exact issues in under 2 minutes
          </h3>
          <p className="mt-3 text-slate-600">
            Our free ATS resume checker detects every pattern above — plus keyword gaps, section
            completeness, and format risks — all in one report.{" "}
            <Link
              href="/ats-resume-mistakes"
              className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-2"
            >
              Learn more about ATS mistakes
            </Link>
            {" "}or run your scan now.
          </p>
          <Link
            href={RESUME_CHECKER_PATH}
            className="btn-gradient mt-5 inline-flex px-8 text-base"
          >
            Find mistakes in my resume
          </Link>
          <p className="mt-3 text-sm text-slate-500">Free · No signup · PDF or paste text</p>
        </div>
      </div>
    </section>
  );
}
