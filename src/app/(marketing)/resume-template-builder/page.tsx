import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { resumeTemplateBuilderFaqItems } from "@/lib/seo/resume-template-builder-faq";
import { buildCtrMetadata, CTR_RESUME_TEMPLATE_BUILDER } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/resume-template-builder";

export const metadata = buildCtrMetadata(CTR_RESUME_TEMPLATE_BUILDER, {
  canonical: PATH,
  keywords: [
    "resume template builder",
    "ATS resume template",
    "free resume template",
    "ATS-friendly resume template",
    "resume template 2026",
  ],
});

const TEMPLATE_TYPES = [
  {
    name: "Reverse Chronological",
    best: "Most job seekers with consistent work history",
    atsScore: "Excellent",
    layout: "Contact → Summary → Experience → Skills → Education",
    pros: ["Most ATS-friendly format", "Recruiters expect it", "Highlights career progression"],
    cons: ["Gaps in employment are visible", "Not ideal for career changers"],
  },
  {
    name: "Functional / Skills-Based",
    best: "Career changers, long employment gaps",
    atsScore: "Poor",
    layout: "Contact → Summary → Core Skills → Brief History → Education",
    pros: ["Highlights transferable skills", "Downplays gaps or short tenures"],
    cons: ["Often rejected by ATS", "Recruiters are suspicious of functional format"],
  },
  {
    name: "Hybrid / Combination",
    best: "Experienced professionals, career changers with strong skills",
    atsScore: "Good (if single-column)",
    layout: "Contact → Summary → Key Skills → Experience → Education",
    pros: ["Balances skills and experience", "Works for mid-career professionals"],
    cons: ["Can be longer", "Risk of duplication if not carefully edited"],
  },
  {
    name: "Targeted / Tailored",
    best: "High-priority applications at specific companies",
    atsScore: "Excellent",
    layout: "Same as reverse chronological — content tailored to the role",
    pros: ["Highest match rate for specific roles", "Best for ATS keyword alignment"],
    cons: ["Time-intensive", "Requires separate version per role cluster"],
  },
];

const ATS_SAFE_BUILDERS = [
  {
    tool: "Google Docs",
    rating: "✅ Safe",
    notes: "Use plain template or blank document. Export as PDF or DOCX. Avoid decorative Google templates with tables.",
  },
  {
    tool: "Microsoft Word",
    rating: "✅ Safe",
    notes: "Best choice for full formatting control. Use built-in styles for headings. Save as DOCX or export as PDF.",
  },
  {
    tool: "LibreOffice Writer",
    rating: "✅ Safe",
    notes: "Free Word alternative. Export as DOCX or PDF. Verify text is selectable in the output file.",
  },
  {
    tool: "Canva",
    rating: "⚠️ Risky",
    notes: "Most Canva templates use multi-column layouts and text boxes that scramble in ATS. Only use if you verify parse order first.",
  },
  {
    tool: "Novoresume / Zety",
    rating: "⚠️ Risky",
    notes: "Attractive templates but often include columns and design elements. Download as DOCX and test in ATS checker.",
  },
  {
    tool: "Notion",
    rating: "❌ Not suitable",
    notes: "Notion pages export poorly as resumes. Structure breaks in PDF export. Not recommended for job applications.",
  },
];

const SECTION_TEMPLATE = `John Smith
john@email.com · (555) 123-4567 · linkedin.com/in/johnsmith · New York, NY

PROFESSIONAL SUMMARY
Backend Engineer with 5 years building Node.js APIs and distributed systems. Reduced API latency 40% at Acme Corp. Proficient in PostgreSQL, Redis, and AWS.

WORK EXPERIENCE
Senior Backend Engineer — Acme Corp, New York, NY · Jan 2022 – Present
• Built Node.js + PostgreSQL REST API serving 3M req/day; reduced error rate 62%
• Led CI/CD migration to GitHub Actions; cut deployment time from 45 min to 8 min

Software Engineer — Beta Inc, Remote · Mar 2019 – Dec 2021
• Designed Redis caching layer reducing database load by 35% across 4 services
• Mentored 3 junior engineers on code review standards and Agile practices

SKILLS
Languages: JavaScript, TypeScript, Python
Databases: PostgreSQL, MongoDB, Redis
Cloud: AWS (EC2, Lambda, S3), Docker, Kubernetes
Tools: Git, GitHub Actions, Jira, Datadog

EDUCATION
B.S. Computer Science — State University · May 2019`;

export default function ResumeTemplateBuilderPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Template Builder", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeTemplateBuilderFaqItems} />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <GuideArticleMeta path={PATH} />

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {CTR_RESUME_TEMPLATE_BUILDER.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          The right resume template makes or breaks your ATS score before a recruiter sees it. This guide shows you which template types are ATS-safe, which tools to use to build your resume, and what a clean, recruiter-ready template looks like in practice.
        </p>

        <BlogResumeCta />

        {/* Template types comparison */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          4 resume template types — ATS performance compared
        </h2>
        <div className="mt-6 space-y-4">
          {TEMPLATE_TYPES.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-slate-900">{t.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    t.atsScore === "Excellent"
                      ? "bg-emerald-100 text-emerald-800"
                      : t.atsScore.startsWith("Good")
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  ATS: {t.atsScore}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Best for: </span>{t.best}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Structure: </span>
                <span className="font-mono text-xs">{t.layout}</span>
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
                <div>
                  <p className="font-semibold text-emerald-700 mb-1">Advantages</p>
                  <ul className="space-y-1">
                    {t.pros.map((p) => (
                      <li key={p} className="flex gap-2 text-slate-600">
                        <span className="text-emerald-500 shrink-0">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-rose-600 mb-1">Limitations</p>
                  <ul className="space-y-1">
                    {t.cons.map((c) => (
                      <li key={c} className="flex gap-2 text-slate-600">
                        <span className="text-rose-400 shrink-0">✗</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools comparison */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Which tools are ATS-safe for building your resume?
        </h2>
        <p className="mt-3 text-slate-600">
          The resume builder you use directly affects ATS compatibility. Here is how common options compare:
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Tool</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">ATS Safety</th>
                <th className="hidden px-4 py-3 text-left font-semibold text-slate-700 sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ATS_SAFE_BUILDERS.map((row) => (
                <tr key={row.tool}>
                  <td className="px-4 py-3 font-medium text-slate-800">{row.tool}</td>
                  <td className="px-4 py-3">{row.rating}</td>
                  <td className="hidden px-4 py-3 text-slate-600 sm:table-cell">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sample template */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          ATS-safe resume template — clean text example
        </h2>
        <p className="mt-3 text-slate-600">
          This is what an ATS-optimized resume looks like when stripped to plain text. Build yours in Google Docs or Word using this structure:
        </p>
        <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 text-xs leading-relaxed text-slate-700 sm:text-sm whitespace-pre-wrap">
          {SECTION_TEMPLATE}
        </pre>

        {/* What makes a template ATS-safe checklist */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          ATS template checklist — verify before applying
        </h2>
        <ul className="mt-5 space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          {[
            "Single-column layout — no sidebars, no two-column structure",
            "All text in the document body — not in header/footer regions",
            "Standard section headings: Work Experience, Skills, Education",
            "Standard fonts: Calibri, Arial, Georgia, or Garamond",
            "No images, logos, photos, or decorative graphics",
            "No text boxes or shapes containing resume content",
            "Contact info at the very top of the body section",
            "File saved as .pdf (text-selectable) or .docx",
            "Copy-paste test passes — text reads in correct order",
            "ATS checker score above 75 before submitting",
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
            Test your template against ATS — free
          </p>
          <p className="mt-2 text-slate-600">
            Upload your finished template and get instant feedback on layout parsing, keyword gaps, and section completeness.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-5 inline-flex px-8 text-base">
            Check my template now
          </Link>
          <p className="mt-2 text-sm text-slate-500">No signup · PDF or paste text · Instant results</p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <AccordionFaq items={resumeTemplateBuilderFaqItems} headingId="template-faq" />

        <RelatedResources path={PATH} heading="Related resume tools" />
      </main>
    </>
  );
}
