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
  { href: "/resume-keyword-tool", label: "Keyword optimizer" },
  { href: "/ai-resume-rewrite", label: "AI resume suggestions" },
  { href: "/ats-guide", label: "ATS guide hub" },
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

  return (
    <div className="not-prose mt-10 space-y-6">
      <section className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
          Resume improvement tool · next steps
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
          Your ATS analysis summary
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
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#16a34a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d] disabled:opacity-60"
            >
              {recheckLoading ? "Checking…" : "Improve again"}
            </button>
          ) : (
            <Link
              href={RESUME_CHECKER_PATH}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#16a34a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
            >
              Improve again
            </Link>
          )}
          <Link
            href="/resume-keyword-tool"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
          >
            Try keyword optimizer
          </Link>
          <Link
            href="/resume-examples"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
          >
            View resume examples
          </Link>
        </div>
      </section>

      <RelatedResources path={path} excludeHref={path} limit={5} />
    </div>
  );
}
