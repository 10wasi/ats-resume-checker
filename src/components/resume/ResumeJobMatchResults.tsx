"use client";

import { useMemo } from "react";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import { buildJobMatchReport } from "@/lib/ats/build-job-match-report";

type Props = {
  analysis: AtsAnalysisResult;
  demoMode?: boolean;
  onRecheck?: () => void;
  recheckLoading?: boolean;
};

function ScoreCard({
  label,
  value,
  suffix,
  barClass,
  detail,
}: {
  label: string;
  value: number;
  suffix?: string;
  barClass: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-6">
      <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <p className="mt-2 font-display text-4xl font-bold tabular-nums text-zinc-950">
        {value}
        {suffix ? (
          <span className="text-xl font-semibold text-zinc-600">{suffix}</span>
        ) : null}
      </p>
      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-zinc-100">
        <div
          className={`h-full rounded-full transition-all duration-700 ${barClass}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-zinc-600">{detail}</p>
    </div>
  );
}

function KeywordChips({
  items,
  variant,
}: {
  items: string[];
  variant: "found" | "missing" | "suggested";
}) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        {variant === "found"
          ? "No posting terms detected yet—re-run after adding keywords."
          : "None flagged for this category."}
      </p>
    );
  }
  const cls =
    variant === "found"
      ? "border-emerald-200 bg-emerald-50 text-emerald-950"
      : variant === "missing"
        ? "border-amber-200 bg-amber-50 text-amber-950"
        : "border-indigo-200 bg-indigo-50 text-indigo-950";
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((kw) => (
        <span
          key={kw}
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}
        >
          {kw}
        </span>
      ))}
    </div>
  );
}

export function ResumeJobMatchResults({
  analysis,
  demoMode = false,
  onRecheck,
  recheckLoading = false,
}: Props) {
  const report = useMemo(() => buildJobMatchReport(analysis), [analysis]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {demoMode ? (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          Demo mode — connect an API key on the server for live AI-enhanced
          match insights.
        </p>
      ) : null}

      <header className="rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/50 via-white to-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
          Match analysis complete
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-zinc-950 sm:text-3xl">
          Resume vs job description results
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Your resume match score, ATS compatibility, keyword gaps, and
          prioritized fixes—tailored to this posting.
        </p>
        {onRecheck ? (
          <button
            type="button"
            onClick={onRecheck}
            disabled={recheckLoading}
            className="mt-4 rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 disabled:opacity-60"
          >
            {recheckLoading ? "Re-analyzing…" : "Re-analyze match"}
          </button>
        ) : null}
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ScoreCard
          label="Overall match score"
          value={report.overallMatchScore}
          suffix="%"
          barClass="bg-gradient-to-r from-brand-500 to-brand-600"
          detail="How closely your resume aligns with this job description across structure and keywords."
        />
        <ScoreCard
          label="ATS compatibility score"
          value={report.atsScore}
          suffix="/100"
          barClass="bg-gradient-to-r from-emerald-500 to-teal-500"
          detail={`Rating: ${report.atsCompatibilityLabel}. ${report.atsCompatibilityDescription}`}
        />
        <ScoreCard
          label="Keyword match"
          value={report.keywordCoveragePercent}
          suffix="%"
          barClass="bg-gradient-to-r from-violet-500 to-indigo-500"
          detail={
            report.keywordTotal > 0
              ? `${report.keywordMatched} of ${report.keywordTotal} posting terms found in your resume text.`
              : "Keyword coverage from extracted posting terms."
          }
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-amber-200/80 bg-white p-5 shadow-soft sm:p-6">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Missing keywords
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            ATS keyword checker results—terms in the posting not found in your
            résumé.
          </p>
          <div className="mt-4">
            <KeywordChips items={report.missingKeywords} variant="missing" />
          </div>
        </section>
        <section className="rounded-2xl border border-emerald-200/80 bg-white p-5 shadow-soft sm:p-6">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Found keywords
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Posting terms already present—build on these in your bullets.
          </p>
          <div className="mt-4">
            <KeywordChips items={report.foundKeywords} variant="found" />
          </div>
        </section>
      </div>

      {report.skillGaps.length > 0 ? (
        <section className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-6">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Skill gaps
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Categorized gaps vs this job description.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {report.skillGaps.map((gap) => (
              <div
                key={gap.label}
                className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  {gap.label}
                </p>
                <div className="mt-2">
                  <KeywordChips items={gap.items} variant="missing" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {report.formattingIssues.length > 0 ? (
        <section className="rounded-2xl border border-orange-200/80 bg-orange-50/30 p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Formatting issues
          </h3>
          <ul className="mt-4 space-y-2">
            {report.formattingIssues.map((issue, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-zinc-700"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                {issue}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-emerald-200/70 bg-emerald-50/30 p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Resume strengths
          </h3>
          <ul className="mt-4 space-y-2">
            {report.resumeStrengths.length > 0 ? (
              report.resumeStrengths.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-700"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  {s}
                </li>
              ))
            ) : (
              <li className="text-sm text-zinc-500">
                Re-run after edits to surface strengths.
              </li>
            )}
          </ul>
        </section>
        <section className="rounded-2xl border border-rose-200/70 bg-rose-50/30 p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Resume weaknesses
          </h3>
          <ul className="mt-4 space-y-2">
            {report.resumeWeaknesses.length > 0 ? (
              report.resumeWeaknesses.map((w, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-zinc-700"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                {w}
              </li>
              ))
            ) : (
              <li className="text-sm text-zinc-500">
                No critical weaknesses flagged—focus on keyword depth.
              </li>
            )}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-6">
        <h3 className="font-display text-lg font-semibold text-zinc-950">
          Top 5 priority fixes
        </h3>
        <ol className="mt-5 space-y-3">
          {report.topPriorityFixes.map((fix, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  {fix.title}
                </p>
                <p className="mt-1 text-sm text-zinc-600">{fix.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-emerald-200/70 bg-white p-5 shadow-soft sm:p-6">
        <h3 className="font-display text-lg font-semibold text-zinc-950">
          Quick wins
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {report.quickWins.map((win, i) => (
            <li
              key={i}
              className="rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3"
            >
              <p className="text-sm font-semibold text-zinc-900">{win.title}</p>
              <p className="mt-1 text-xs text-zinc-600">{win.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-indigo-200/70 bg-indigo-50/30 p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-zinc-950">
          Suggested ATS keywords
        </h3>
        <p className="mt-1 text-sm text-zinc-600">
          Weave these into experience bullets and skills where you can discuss
          them honestly.
        </p>
        <div className="mt-4">
          <KeywordChips
            items={report.suggestedAtsKeywords}
            variant="suggested"
          />
        </div>
      </section>
    </div>
  );
}
