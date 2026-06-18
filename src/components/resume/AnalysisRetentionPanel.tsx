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
};

export function AnalysisRetentionPanel({ analysis, variant = "checker" }: Props) {
  const missing = analysis.missing_keywords.slice(0, 8);
  const formatFlags = analysis.formatting_issues.slice(0, 4);
  const grammarFlags = analysis.grammar_issues.slice(0, 3);
  const suggestions = [
    ...formatFlags.map((f) => ({ type: "format" as const, text: f })),
    ...grammarFlags.map((g) => ({ type: "grammar" as const, text: g })),
  ].slice(0, 5);

  const path =
    variant === "match" ? "/resume-job-description-match" : RESUME_CHECKER_PATH;

  return (
    <div className="not-prose mt-10 space-y-6">
      <section className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-5 sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
          Keep improving · interview readiness
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
          Your next moves after this scan
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Re-run the checker after edits. Tailor each application to the job
          posting—whether you apply locally or for remote roles worldwide.
        </p>

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
              href="/resume-keywords-missing"
              className="mt-3 inline-block text-xs font-semibold text-[#16a34a] underline"
            >
              How to fix missing keywords →
            </Link>
          </div>
        ) : null}

        {suggestions.length > 0 ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900">Suggested improvements</p>
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
          <p className="text-sm font-semibold text-slate-900">Relevant resume examples</p>
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

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/how-to-improve-resume-score"
            className="text-sm font-semibold text-slate-800 underline decoration-slate-300 hover:text-[#16a34a]"
          >
            Improve resume score
          </Link>
          <Link
            href="/resume-job-description-match"
            className="text-sm font-semibold text-slate-800 underline decoration-slate-300 hover:text-[#16a34a]"
          >
            Match to job posting
          </Link>
          <Link
            href="/methodology"
            className="text-sm font-semibold text-slate-800 underline decoration-slate-300 hover:text-[#16a34a]"
          >
            How scoring works
          </Link>
        </div>
      </section>

      <RelatedResources path={path} excludeHref={path} limit={4} />
    </div>
  );
};
