import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Manual review vs ATS vs AI — honest comparison for conversion and trust. */
export function HomeComparisonSection() {
  const columns = [
    {
      title: "Manual resume review",
      subtitle: "Friends, forums, or generic tips",
      points: [
        "Subjective and inconsistent",
        "No ATS parse preview",
        "Slow feedback loop",
        "Rarely checks keyword match vs a posting",
      ],
      tone: "slate" as const,
    },
    {
      title: "ATS alone",
      subtitle: "Employer-side screening software",
      points: [
        "Filters before a human reads your file",
        "Rewards parse-friendly structure",
        "Searches for role keywords",
        "You never see what it extracted",
      ],
      tone: "slate" as const,
    },
    {
      title: "ResumeIQ analysis",
      subtitle: "ATS signals + recruiter perspective + AI",
      points: [
        "Shows what parsers likely read from your PDF",
        "Scores structure, keywords, format, and match",
        "Explains why each issue matters and how to fix it",
        "Free core report—no signup for standard checks",
      ],
      tone: "emerald" as const,
    },
  ];

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
            Manual review vs ATS vs AI resume analysis
          </h2>
          <p className="mt-4 text-slate-600">
            You need all three lenses: what software filters, what recruiters skim, and specific
            fixes you can apply tonight.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {columns.map((col) => (
            <li
              key={col.title}
              className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                col.tone === "emerald"
                  ? "border-emerald-200 bg-gradient-to-br from-emerald-50/90 to-white ring-1 ring-emerald-100"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{col.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{col.subtitle}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {col.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-700">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        col.tone === "emerald" ? "bg-emerald-500" : "bg-slate-400"
                      }`}
                      aria-hidden
                    />
                    {p}
                  </li>
                ))}
              </ul>
              {col.tone === "emerald" ? (
                <Link
                  href={RESUME_CHECKER_PATH}
                  className="btn-gradient mt-6 w-full text-sm"
                >
                  Run free analysis
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
