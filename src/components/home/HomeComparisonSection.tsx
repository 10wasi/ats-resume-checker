import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type FeatureValue = "yes" | "no" | "partial" | string;

function Cell({ value }: { value: FeatureValue }) {
  if (value === "yes")
    return (
      <span className="flex items-center justify-center text-emerald-600" aria-label="Yes">
        <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  if (value === "no")
    return (
      <span className="flex items-center justify-center text-slate-300" aria-label="No">
        <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </span>
    );
  if (value === "partial")
    return (
      <span className="flex items-center justify-center text-amber-500" aria-label="Partial">
        <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  return <span className="block text-center text-xs text-slate-500">{value}</span>;
}

const features: { label: string; resumeiq: FeatureValue; chatgpt: FeatureValue; jobscan: FeatureValue; resumeworded: FeatureValue; manual: FeatureValue }[] = [
  {
    label: "ATS parse test (see what software reads)",
    resumeiq: "yes",
    chatgpt: "no",
    jobscan: "yes",
    resumeworded: "partial",
    manual: "no",
  },
  {
    label: "Keyword gap vs specific job posting",
    resumeiq: "yes",
    chatgpt: "partial",
    jobscan: "yes",
    resumeworded: "yes",
    manual: "no",
  },
  {
    label: "Format & layout risk detection",
    resumeiq: "yes",
    chatgpt: "no",
    jobscan: "partial",
    resumeworded: "partial",
    manual: "no",
  },
  {
    label: "Section completeness check",
    resumeiq: "yes",
    chatgpt: "partial",
    jobscan: "no",
    resumeworded: "yes",
    manual: "partial",
  },
  {
    label: "Priority fix order with reasoning",
    resumeiq: "yes",
    chatgpt: "partial",
    jobscan: "no",
    resumeworded: "no",
    manual: "no",
  },
  {
    label: "Extracted text preview (what parser sees)",
    resumeiq: "yes",
    chatgpt: "no",
    jobscan: "no",
    resumeworded: "no",
    manual: "no",
  },
  {
    label: "Free to use (no credit card)",
    resumeiq: "yes",
    chatgpt: "partial",
    jobscan: "partial",
    resumeworded: "partial",
    manual: "yes",
  },
  {
    label: "No signup to start",
    resumeiq: "yes",
    chatgpt: "no",
    jobscan: "no",
    resumeworded: "no",
    manual: "yes",
  },
  {
    label: "Transparent scoring methodology",
    resumeiq: "yes",
    chatgpt: "no",
    jobscan: "no",
    resumeworded: "partial",
    manual: "no",
  },
  {
    label: "Global & multi-market support",
    resumeiq: "yes",
    chatgpt: "yes",
    jobscan: "partial",
    resumeworded: "partial",
    manual: "partial",
  },
];

const columns = [
  { key: "resumeiq", label: "ResumeIQ", highlight: true },
  { key: "chatgpt", label: "ChatGPT", highlight: false },
  { key: "jobscan", label: "Jobscan", highlight: false },
  { key: "resumeworded", label: "ResumeWorded", highlight: false },
  { key: "manual", label: "Manual review", highlight: false },
] as const;

export function HomeComparisonSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Why this is different</p>
          <h2
            id="comparison-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Why our ATS resume checker is different
          </h2>
          <p className="mt-4 text-slate-600">
            ChatGPT reviews prose. Jobscan matches keywords. ResumeWorded grades sections. None
            of them show you what the{" "}
            <strong className="font-semibold text-slate-800">parser actually extracted</strong> from
            your file — which is the real reason resumes get silently rejected.
          </p>
        </div>

        {/* Feature table — scrollable on mobile */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-56 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500" scope="col">
                  Feature
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className={`px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide ${
                      col.highlight
                        ? "rounded-t-lg bg-emerald-600 text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr
                  key={feat.label}
                  className={`border-t border-slate-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="py-3 pr-4 text-slate-700">{feat.label}</td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-4 py-3 ${
                        col.highlight ? "bg-emerald-50" : ""
                      }`}
                    >
                      <Cell value={feat[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          ✓ = full feature · ⚠ = limited or paywalled · ✗ = not available. Comparison reflects
          publicly available free tiers as of 2026. All product names are trademarks of their
          respective owners.
        </p>

        {/* Value prop cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Parse test first",
              body: "We show you the raw extracted text before scoring. If the parser scrambled your content, keywords are meaningless — fix structure, then keywords.",
            },
            {
              title: "Free without a catch",
              body: "Core analysis — ATS score, keyword gaps, format flags, priority fixes — runs free with no signup. Upgrade is optional, not a paywall on your results.",
            },
            {
              title: "Transparent scoring",
              body: "Every score has a published methodology. You know exactly what raises it and why — not a black-box percentage designed to sell a subscription.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-8 text-base">
            Try the free ATS resume checker
          </Link>
          <p className="mt-2 text-sm text-slate-500">No signup · No card · Results in under 2 minutes</p>
        </div>
      </div>
    </section>
  );
}
