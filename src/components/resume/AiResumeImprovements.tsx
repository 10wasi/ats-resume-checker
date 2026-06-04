"use client";

import { useMemo, useState } from "react";
import type { AtsAnalysisResult, RewritePair } from "@/lib/ats/types";

type Props = {
  analysis: AtsAnalysisResult;
};

function RewriteCompareCard({ pair }: { pair: RewritePair }) {
  const [copied, setCopied] = useState(false);

  const copyImproved = async () => {
    try {
      await navigator.clipboard.writeText(pair.improved);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm">
      <div className="border-b border-zinc-100 bg-zinc-50/80 px-4 py-2.5">
        <h4 className="text-sm font-semibold text-zinc-900">{pair.label}</h4>
      </div>
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-zinc-100 p-4 md:border-b-0 md:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Original
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            {pair.original || "—"}
          </p>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
            Improved
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-800">
            {pair.improved}
          </p>
          <button
            type="button"
            onClick={() => void copyImproved()}
            className="mt-3 rounded-lg border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 transition hover:bg-brand-100"
          >
            {copied ? "Copied" : "Copy improved"}
          </button>
        </div>
      </div>
    </article>
  );
}

export function AiResumeImprovements({ analysis }: Props) {
  const plan = analysis.ai_resume_improvements;
  const [verbsCopied, setVerbsCopied] = useState(false);

  const comparePairs = useMemo(() => {
    if (!plan) return [];
    const list: RewritePair[] = [];
    if (plan.improved_summary.improved) list.push(plan.improved_summary);
    if (plan.improved_skills.improved) list.push(plan.improved_skills);
    list.push(...plan.experience_bullets.filter((b) => b.improved));
    list.push(...plan.achievement_statements.filter((b) => b.improved));
    return list;
  }, [plan]);

  if (!plan) return null;

  const copyVerbs = async () => {
    try {
      await navigator.clipboard.writeText(plan.action_verbs.join(", "));
      setVerbsCopied(true);
      setTimeout(() => setVerbsCopied(false), 2000);
    } catch {
      setVerbsCopied(false);
    }
  };

  return (
    <section
      className="rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/50 via-white to-white p-5 shadow-soft-lg sm:p-8"
      aria-labelledby="ai-resume-improvements-heading"
    >
      <header>
        <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
          AI rewrite assistant
        </p>
        <h2
          id="ai-resume-improvements-heading"
          className="mt-2 font-display text-2xl font-semibold text-zinc-950 sm:text-3xl"
        >
          AI Resume Improvements
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">
          Side-by-side rewrites for your summary, skills, and bullets—plus
          keywords and verbs to paste into your next draft. Only use lines you
          can defend in an interview.
        </p>
      </header>

      <div className="mt-8 grid gap-4">
        {comparePairs.map((pair) => (
          <RewriteCompareCard key={`${pair.label}-${pair.improved.slice(0, 24)}`} pair={pair} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {plan.keyword_suggestions.length > 0 ? (
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-5">
            <h3 className="text-sm font-semibold text-zinc-900">
              ATS-friendly keyword suggestions
            </h3>
            <p className="mt-1 text-xs text-zinc-600">
              Weave these into experience bullets and skills where truthful.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {plan.keyword_suggestions.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-950"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {plan.action_verbs.length > 0 ? (
          <div className="rounded-xl border border-indigo-200/80 bg-indigo-50/30 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                Action verb recommendations
              </h3>
              <button
                type="button"
                onClick={() => void copyVerbs()}
                className="rounded-lg border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-800 hover:bg-indigo-50"
              >
                {verbsCopied ? "Copied" : "Copy all verbs"}
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {plan.action_verbs.map((v) => (
                <span
                  key={v}
                  className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-indigo-900 shadow-sm"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {plan.rewrite_suggestions.length > 0 ? (
        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-zinc-900">
            Resume rewrite suggestions
          </h3>
          <ul className="mt-3 space-y-2">
            {plan.rewrite_suggestions.map((s, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-zinc-700"
              >
                <span className="font-bold text-indigo-600">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
