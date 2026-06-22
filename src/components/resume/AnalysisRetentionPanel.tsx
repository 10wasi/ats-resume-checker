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

const TOOL_LINKS = [
  { href: "/resume-match-analyzer", label: "Resume match analyzer" },
  { href: "/resume-review", label: "Resume review online" },
  { href: "/resume-keyword-tool", label: "Keyword optimizer" },
  { href: "/common-ats-resume-rejection-reasons", label: "ATS rejection reasons" },
];

const GUIDE_LINKS = [
  { href: "/resume-rejected-by-ats", label: "Resume rejected by ATS" },
  { href: "/how-to-improve-resume-score", label: "Improve resume score" },
  { href: "/ats-resume-checklist-2026", label: "Pre-submit checklist" },
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
  const strong = (
    analysis.matched_keywords?.length
      ? analysis.matched_keywords
      : analysis.detected_skills ?? analysis.resume_strengths ?? []
  ).slice(0, 8);
  const formatFlags = analysis.formatting_issues.slice(0, 5);
  const checklist = (
    analysis.career_insights?.quick_fix_checklist ??
    analysis.career_insights?.improvement_actions ??
    []
  ).slice(0, 6);
  const suggestions = [
    ...analysis.suggestions.slice(0, 3),
    ...formatFlags.map((f) => `Format: ${f}`),
    ...analysis.grammar_issues.slice(0, 2).map((g) => `Grammar: ${g}`),
  ].slice(0, 6);

  const path =
    variant === "match" ? "/resume-job-description-match" : RESUME_CHECKER_PATH;
  const atsScore = analysis.ats_score ?? 0;
  const readability = analysis.readability_score ?? 0;
  const needsMatch =
    analysis.job_match_score == null && variant === "checker";
  const scoreHeadline =
    atsScore >= 75
      ? "Strong baseline—tailor for each job next"
      : atsScore >= 55
        ? "Fix keywords & format, then re-check"
        : "Priority: format and parse health first";

  return (
    <div className="not-prose mt-10 space-y-6 pb-24 md:pb-0">
      <section className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
          Resume improvement · next steps
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
          {scoreHeadline}
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-100 bg-white/80 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              ATS score
            </p>
            <p className="font-display text-3xl font-bold tabular-nums text-[#16a34a]">
              {Math.round(atsScore)}%
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white/80 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Readability
            </p>
            <p className="font-display text-3xl font-bold tabular-nums text-slate-800">
              {Math.round(readability)}%
            </p>
          </div>
          {analysis.job_match_score != null ? (
            <div className="rounded-xl border border-slate-100 bg-white/80 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Match score
              </p>
              <p className="font-display text-3xl font-bold tabular-nums text-slate-800">
                {Math.round(analysis.job_match_score)}%
              </p>
            </div>
          ) : null}
        </div>

        {missing.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Missing keywords</p>
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
          </div>
        ) : null}

        {strong.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Strong keywords detected</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {strong.map((kw) => (
                <li
                  key={kw}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900"
                >
                  {kw}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {formatFlags.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Formatting issues</p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
              {formatFlags.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-amber-600" aria-hidden>
                    !
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {checklist.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Improvement checklist</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600" aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/ats-resume-checklist-2026"
              className="mt-3 inline-block text-xs font-semibold text-[#16a34a] underline"
            >
              Full ATS checklist →
            </Link>
          </div>
        ) : null}

        {suggestions.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Improvement suggestions</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {suggestions.map((text, i) => (
                <li key={`${i}-${text.slice(0, 24)}`} className="flex gap-2">
                  <span className="text-emerald-600" aria-hidden>
                    →
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-5">
          <p className="text-sm font-semibold text-slate-900">View resume examples</p>
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

        <div className="mt-5">
          <p className="text-sm font-semibold text-slate-900">Recommended guides</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {GUIDE_LINKS.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="font-semibold text-[#16a34a] underline">
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold text-slate-900">Related tools</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {TOOL_LINKS.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="font-semibold text-[#16a34a] underline">
                  {t.label}
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
              className="inline-flex h-11 min-w-[8rem] flex-1 items-center justify-center rounded-xl bg-[#16a34a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d] disabled:opacity-60 sm:flex-none"
            >
              {recheckLoading ? "Checking…" : "Re-check resume"}
            </button>
          ) : (
            <Link
              href={RESUME_CHECKER_PATH}
              className="inline-flex h-11 min-w-[8rem] flex-1 items-center justify-center rounded-xl bg-[#16a34a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d] sm:flex-none"
            >
              Re-check resume
            </Link>
          )}
          {needsMatch ? (
            <Link
              href="/resume-job-description-match"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-emerald-300 bg-emerald-50 px-5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100 sm:flex-none"
            >
              Add job match
            </Link>
          ) : (
            <Link
              href="/resume-keyword-tool"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 sm:flex-none"
            >
              Fix keywords
            </Link>
          )}
          <Link
            href="/resume-examples"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 sm:flex-none"
          >
            Examples
          </Link>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md md:hidden">
        {onRecheck ? (
          <button
            type="button"
            onClick={onRecheck}
            disabled={recheckLoading}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-[#16a34a] text-sm font-semibold text-white disabled:opacity-60"
          >
            {recheckLoading ? "Checking…" : "Re-check"}
          </button>
        ) : (
          <Link
            href={RESUME_CHECKER_PATH}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-[#16a34a] text-sm font-semibold text-white"
          >
            Re-check
          </Link>
        )}
        <Link
          href={needsMatch ? "/resume-job-description-match" : "/resume-review"}
          className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-800"
        >
          {needsMatch ? "Match job" : "Review"}
        </Link>
      </div>

      <RelatedResources path={path} excludeHref={path} limit={5} />
    </div>
  );
}
