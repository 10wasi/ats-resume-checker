"use client";

import Link from "next/link";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const EXAMPLE_LINKS = [
  { href: "/resume-examples/software-engineer", label: "Software engineer example" },
  { href: "/resume-examples/data-analyst", label: "Data analyst example" },
  { href: "/resume-examples/project-manager", label: "Project manager example" },
  { href: "/resume-examples", label: "Full examples library" },
];

type Props = {
  analysis: AtsAnalysisResult;
  variant?: "checker" | "match";
  onRecheck?: () => void;
  recheckLoading?: boolean;
};

export function AnalysisRetentionPanel({
  analysis,
  variant = "checker",
  onRecheck,
  recheckLoading = false,
}: Props) {
  const missing = analysis.missing_keywords.slice(0, 8);
  const formatFlags = analysis.formatting_issues.slice(0, 4);
  const grammarFlags = analysis.grammar_issues.slice(0, 3);
  const suggestions = [
    ...formatFlags.map((f) => ({ type: "format" as const, text: f })),
    ...grammarFlags.map((g) => ({ type: "grammar" as const, text: g })),
  ].slice(0, 5);

  const path =
    variant === "match" ? "/resume-job-description-match" : RESUME_CHECKER_PATH;
  const atsScore = analysis.ats_score ?? 0;

  return (
    <div className="not-prose mt-10 space-y-6">
      <section className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
          Keep improving · interview readiness
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
          Your next moves after this scan
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl border border-emerald-100 bg-white/80 px-4 py-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              ATS resume score
            </p>
            <p className="font-display text-3xl font-bold tabular-nums text-[#16a34a]">
              {Math.round(atsScore)}%
            </p>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Re-run after edits to track improvement. Use the{" "}
            <Link href="/resume-match-analyzer" className="font-semibold text-[#16a34a] underline">
              resume match analyzer
            </Link>{" "}
            for each job posting.
          </p>
        </div>

        {missing.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Missing keywords</p>
            <p className="mt-1 text-xs text-slate-600">
              Add these only where you have real experience—primarily in recent bullets.
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {missing.map((kw) => (
                <li
                  key={kw}
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900"
                >
                  {kw}
                </li>
              ))}
            </ul>
            <Link
              href="/resume-keyword-tool"
              className="mt-3 inline-block text-xs font-semibold text-[#16a34a] underline"
            >
              Resume keyword analyzer →
            </Link>
          </div>
        ) : null}

        {suggestions.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Improvement suggestions</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {suggestions.map((s, i) => (
                <li key={`${s.type}-${i}`} className="flex gap-2">
                  <span className="text-emerald-600" aria-hidden>
                    →
                  </span>
                  {s.text}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-5">
          <p className="text-sm font-semibold text-slate-900">Recommended resume examples</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {EXAMPLE_LINKS.map((ex) => (
              <li key={ex.href}>
                <Link href={ex.href} className="font-semibold text-[#16a34a] underline">
                  {ex.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {onRecheck ? (
            <button
              type="button"
              onClick={onRecheck}
              disabled={recheckLoading}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#16a34a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d] disabled:opacity-60"
            >
              {recheckLoading ? "Checking…" : "Improve Resume Again"}
            </button>
          ) : (
            <Link
              href={RESUME_CHECKER_PATH}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#16a34a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
            >
              Improve Resume Again
            </Link>
          )}
          <Link
            href="/how-to-improve-resume-score"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
          >
            Improve resume score
          </Link>
          <Link
            href="/ats-guide"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
          >
            ATS guide hub
          </Link>
        </div>
      </section>

      <RelatedResources path={path} excludeHref={path} limit={5} />
    </div>
  );
}
