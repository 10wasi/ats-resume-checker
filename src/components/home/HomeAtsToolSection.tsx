import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const outputs = [
  { icon: "📊", label: "ATS Score", value: "0–100 with rating" },
  { icon: "🔑", label: "Keyword Gaps", value: "Missing vs found terms" },
  { icon: "⚠️", label: "Format Issues", value: "Parser failure risk" },
  { icon: "✅", label: "Fix Plan", value: "Priority action list" },
];

export function HomeAtsToolSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20"
      aria-labelledby="ats-tool-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          {/* Tool header bar */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
              <span className="ml-3 text-xs font-semibold text-slate-500">
                ResumeIQ — ATS Resume Checker
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden /> Live
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left: upload area */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h2
                id="ats-tool-heading"
                className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Get your ATS score in 2 minutes
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Upload your resume or paste the text below. No account needed — get an instant score, keyword gaps, and a priority fix list.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={RESUME_CHECKER_PATH}
                  className="btn-gradient flex-1 px-6 text-base font-semibold text-center"
                >
                  Upload PDF or DOCX
                </Link>
                <Link
                  href={`${RESUME_CHECKER_PATH}#paste`}
                  className="inline-flex flex-1 h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300"
                >
                  Paste resume text
                </Link>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                  Free — no signup
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                  PDF, DOCX, or plain text
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                  Results under 2 minutes
                </li>
              </ul>
            </div>

            {/* Right: output preview */}
            <div className="border-t border-slate-100 bg-slate-50/50 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                What you get
              </p>
              <ul className="mt-5 space-y-4">
                {outputs.map((o) => (
                  <li key={o.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-200/80">
                      {o.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{o.label}</p>
                      <p className="text-sm text-slate-500">{o.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold text-emerald-700">Also included: </span>
                Paste a job description to see your match % and the exact keywords you&apos;re missing for that role.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
