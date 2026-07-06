import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

function ProgressBar({
  label,
  value,
  max = 100,
  color = "emerald",
  sublabel,
}: {
  label: string;
  value: number;
  max?: number;
  color?: "emerald" | "amber" | "blue" | "violet";
  sublabel?: string;
}) {
  const pct = Math.round((value / max) * 100);
  const colorMap = {
    emerald: "bg-emerald-500",
    amber: "bg-amber-400",
    blue: "bg-blue-500",
    violet: "bg-violet-500",
  };
  const trackColor = {
    emerald: "bg-emerald-50",
    amber: "bg-amber-50",
    blue: "bg-blue-50",
    violet: "bg-violet-50",
  };
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-bold text-slate-900">{value}{max === 100 ? "%" : `/${max}`}</span>
      </div>
      <div className={`h-2.5 w-full overflow-hidden rounded-full ${trackColor[color]}`} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
        <div
          className={`h-full rounded-full ${colorMap[color]} transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {sublabel ? <p className="text-xs text-slate-500">{sublabel}</p> : null}
    </div>
  );
}

function CheckItem({ text, status }: { text: string; status: "pass" | "warn" | "fail" }) {
  const icon = status === "pass" ? "✓" : status === "warn" ? "⚠" : "✗";
  const color =
    status === "pass"
      ? "text-emerald-600 bg-emerald-50"
      : status === "warn"
      ? "text-amber-600 bg-amber-50"
      : "text-red-600 bg-red-50";
  return (
    <div className="flex items-start gap-2.5 text-sm">
      <span
        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${color}`}
        aria-hidden
      >
        {icon}
      </span>
      <span className="text-slate-700">{text}</span>
    </div>
  );
}

export function HomeAtsReportPreviewSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/60 py-20 sm:py-28"
      aria-labelledby="report-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">What you get</p>
          <h2
            id="report-preview-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            A complete ATS analysis report — not just a score
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Every upload produces a multi-layer report. Here is what a real scan looks like — for a
            data analyst applying to a fintech role.
          </p>
        </div>

        {/* Mock report card */}
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          {/* Report header */}
          <div className="flex flex-col gap-4 border-b border-slate-100 bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-200">ResumeIQ ATS Analysis</p>
              <h3 className="mt-0.5 font-display text-xl font-bold">
                resume_maya_chen_data_analyst.pdf
              </h3>
              <p className="mt-1 text-sm text-emerald-200">
                Role target: Senior Data Analyst · Fintech · London
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-4xl font-bold">78</div>
                <div className="text-xs font-medium text-emerald-200 uppercase tracking-wide">ATS Score</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">67%</div>
                <div className="text-xs font-medium text-emerald-200 uppercase tracking-wide">Match</div>
              </div>
            </div>
          </div>

          <div className="grid gap-0 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {/* Left: Score breakdown */}
            <div className="p-6">
              <h4 className="font-semibold text-slate-900">Score breakdown</h4>
              <div className="mt-5 space-y-4">
                <ProgressBar label="Skills coverage" value={82} color="emerald" sublabel="Python, SQL, Tableau detected in bullets" />
                <ProgressBar label="Experience depth" value={75} color="emerald" sublabel="Metrics in 3 of 6 bullets — 2 more recommended" />
                <ProgressBar label="ATS keyword match" value={67} color="amber" sublabel="6 of 9 must-have terms found" />
                <ProgressBar label="Formatting quality" value={90} color="blue" sublabel="Single column · standard headings · clean export" />
                <ProgressBar label="Section completeness" value={85} color="violet" sublabel="All sections present · contact in body" />
              </div>
            </div>

            {/* Right: Checklist */}
            <div className="p-6">
              <h4 className="font-semibold text-slate-900">Format &amp; parse check</h4>
              <div className="mt-5 space-y-2.5">
                <CheckItem status="pass" text="PDF text extraction: clean — text reads in logical order" />
                <CheckItem status="pass" text="Contact details found in document body" />
                <CheckItem status="pass" text="Standard section headers detected" />
                <CheckItem status="pass" text="Single-column layout — no parse risk" />
                <CheckItem status="warn" text="Summary is 4 lines — consider trimming to 2–3 for faster recruiter skim" />
                <CheckItem status="warn" text="3 missing keywords from job description: Snowflake, FP&A, stakeholder management" />
                <CheckItem status="fail" text="Education section missing graduation year — may affect experience filter" />
              </div>

              <h4 className="mt-6 font-semibold text-slate-900">Top 3 priority fixes</h4>
              <ol className="mt-3 space-y-2">
                {[
                  "Add Snowflake to most recent SQL bullet (appears 3x in posting)",
                  "Trim summary to 2 lines — recruiters skim top of page 1 in 6 seconds",
                  "Add graduation year to Education — triggers experience filter in some ATS",
                ].map((fix, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                      {i + 1}
                    </span>
                    {fix}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Keyword gap preview */}
          <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-5">
            <h4 className="font-semibold text-slate-900">Keyword gap analysis vs job description</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { word: "Python", status: "found" },
                { word: "SQL", status: "found" },
                { word: "Tableau", status: "found" },
                { word: "Power BI", status: "found" },
                { word: "A/B testing", status: "found" },
                { word: "Snowflake", status: "missing" },
                { word: "FP&A", status: "missing" },
                { word: "stakeholder management", status: "missing" },
                { word: "data modelling", status: "partial" },
              ].map((kw) => (
                <span
                  key={kw.word}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                    kw.status === "found"
                      ? "bg-emerald-100 text-emerald-700"
                      : kw.status === "missing"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  <span aria-hidden>{kw.status === "found" ? "✓" : kw.status === "missing" ? "✗" : "~"}</span>
                  {kw.word}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Green = found · Red = missing from posting · Amber = partial match
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 border-t border-slate-100 bg-white px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-slate-600">
              Get your own report like this — upload takes under 30 seconds.
            </p>
            <Link href={RESUME_CHECKER_PATH} className="btn-gradient shrink-0 text-sm">
              Run my free ATS check
            </Link>
          </div>
        </div>

        {/* Feature callouts below the mock */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Extracted text preview",
              body: "See exactly what hiring software reads from your PDF — before any recruiter does.",
            },
            {
              title: "Per-posting match score",
              body: "Paste any job description and get match %, categorized gaps, and ethical keyword suggestions.",
            },
            {
              title: "Priority fix order",
              body: "Format issues are fixed first. Keyword edits on a broken layout change nothing — our report explains why.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
