"use client";

import { useMemo, useState } from "react";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import {
  buildPersonalizedImprovementPlan,
  type PlanItem,
} from "@/lib/ats/build-improvement-plan";

type Props = {
  analysis: AtsAnalysisResult;
  showJobMatch: boolean;
};

function impactLabel(impact?: PlanItem["impact"]): string {
  if (impact === "high") return "High impact";
  if (impact === "medium") return "Medium impact";
  return "Quick win";
}

function impactBarClass(impact?: PlanItem["impact"]): string {
  if (impact === "high") return "bg-rose-500";
  if (impact === "medium") return "bg-amber-500";
  return "bg-emerald-500";
}

function impactBarWidth(impact?: PlanItem["impact"]): string {
  if (impact === "high") return "w-full";
  if (impact === "medium") return "w-2/3";
  return "w-1/3";
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <svg
      className="h-20 w-20 shrink-0 -rotate-90"
      viewBox="0 0 80 80"
      aria-hidden
    >
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        className="text-zinc-100"
      />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-brand-500 transition-all duration-700"
      />
    </svg>
  );
}

function SectionCard({
  id,
  title,
  subtitle,
  children,
  accent = "brand",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  accent?: "brand" | "emerald" | "amber" | "violet";
}) {
  const border =
    accent === "emerald"
      ? "border-emerald-200/80"
      : accent === "amber"
        ? "border-amber-200/80"
        : accent === "violet"
          ? "border-violet-200/80"
          : "border-zinc-200/90";
  return (
    <section
      id={id}
      className={`rounded-2xl border bg-white p-5 shadow-soft sm:p-6 ${border}`}
      aria-labelledby={`${id}-heading`}
    >
      <h3
        id={`${id}-heading`}
        className="font-display text-lg font-semibold text-zinc-950 sm:text-xl"
      >
        {title}
      </h3>
      {subtitle ? (
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{subtitle}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function PriorityFixCard({
  rank,
  item,
}: {
  rank: number;
  item: PlanItem;
}) {
  return (
    <li className="relative overflow-hidden rounded-xl border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/80 p-4 shadow-sm transition hover:border-brand-200/80 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white shadow-md"
          aria-label={`Priority ${rank}`}
        >
          {rank}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-zinc-900 sm:text-base">
              {item.title}
            </p>
            {item.impact ? (
              <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rose-700">
                {impactLabel(item.impact)}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            <span className="font-semibold text-zinc-800">Why: </span>
            {item.why ?? "This fix targets a common reason resumes fail automated screening."}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            <span className="font-semibold text-zinc-800">How: </span>
            {item.detail}
          </p>
          {item.expectedImpact ? (
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              <span className="font-semibold text-zinc-800">Expected impact: </span>
              {item.expectedImpact}
            </p>
          ) : null}
          {item.impact ? (
            <div
              className="mt-3 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-zinc-100"
              role="presentation"
            >
              <div
                className={`h-full rounded-full transition-all ${impactBarClass(item.impact)} ${impactBarWidth(item.impact)}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function CopyChip({
  text,
  label,
  onCopied,
}: {
  text: string;
  label: string;
  onCopied: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopied();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <p className="min-w-0 flex-1 text-sm leading-relaxed text-zinc-700">
        {text}
      </p>
      <button
        type="button"
        onClick={() => void handleCopy()}
        className="shrink-0 rounded-lg border border-brand-200 bg-white px-3 py-2 text-xs font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
      >
        {copied ? "Copied" : label}
      </button>
    </div>
  );
}

export function PersonalizedImprovementPlan({
  analysis,
  showJobMatch,
}: Props) {
  const [planCopied, setPlanCopied] = useState(false);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());

  const plan = useMemo(
    () =>
      buildPersonalizedImprovementPlan(analysis, {
        hasJobDescription: showJobMatch,
      }),
    [analysis, showJobMatch]
  );

  const readinessPct = Math.round(
    Math.max(0, Math.min(100, analysis.ats_score))
  );
  const checklistDone = checkedIds.size;
  const checklistTotal = plan.beforeYouApplyChecklist.length;
  const checklistPct =
    checklistTotal > 0
      ? Math.round((checklistDone / checklistTotal) * 100)
      : 0;

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const copyFullPlan = async () => {
    try {
      await navigator.clipboard.writeText(plan.copySuggestions);
      setPlanCopied(true);
      setTimeout(() => setPlanCopied(false), 2500);
    } catch {
      setPlanCopied(false);
    }
  };

  const copyLines = [
    ...analysis.improved_bullets,
    ...plan.highImpactImprovements.slice(0, 2).map((i) => `${i.title}: ${i.detail}`),
  ].filter(Boolean);

  return (
    <section
      className="rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50/40 via-white to-white p-5 shadow-soft-lg sm:p-8"
      aria-labelledby="improvement-plan-heading"
    >
      <header className="flex flex-col gap-6 border-b border-zinc-100 pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
            Your consultation report
          </p>
          <h2
            id="improvement-plan-heading"
            className="mt-2 font-display text-2xl font-semibold text-zinc-950 sm:text-3xl"
          >
            Personalized ATS Improvement Plan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            A prioritized roadmap based on your file and{" "}
            {showJobMatch ? "this job posting" : "ATS best practices"}—not
            generic advice. Work top to bottom for the fastest score lift.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative flex items-center justify-center">
            <ProgressRing percent={readinessPct} />
            <span className="absolute font-display text-xl font-bold tabular-nums text-zinc-950">
              {readinessPct}
            </span>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-zinc-900">Application readiness</p>
            <p className="mt-1 text-zinc-600">
              Based on your ATS score. Fix priorities below to raise this.
            </p>
          </div>
        </div>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <SectionCard
          id="top-priority-fixes"
          title="Top 5 priority fixes"
          subtitle="Ordered by impact on ATS parsing and recruiter scan."
          accent="brand"
        >
          {plan.topPriorityFixes.length > 0 ? (
            <ol className="grid gap-3">
              {plan.topPriorityFixes.map((item, i) => (
                <PriorityFixCard key={item.id} rank={i + 1} item={item} />
              ))}
            </ol>
          ) : (
            <p className="text-sm text-zinc-600">
              No critical blockers detected—focus on keyword depth and metrics.
            </p>
          )}
        </SectionCard>

        <div className="grid gap-6">
          <SectionCard
            id="quick-wins"
            title="Quick wins"
            subtitle="Under 10 minutes each—do these before a deep rewrite."
            accent="emerald"
          >
            <ul className="grid gap-3">
              {plan.quickWins.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl border border-emerald-100/90 bg-emerald-50/30 px-4 py-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.title}
                    </p>
                    {item.minutes != null ? (
                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                        ~{item.minutes} min
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm text-zinc-600">{item.detail}</p>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            id="high-impact"
            title="High-impact improvements"
            subtitle="Changes most likely to improve ATS compatibility."
            accent="amber"
          >
            <ul className="grid gap-3">
              {plan.highImpactImprovements.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl border border-amber-100 bg-amber-50/40 p-4"
                >
                  <p className="text-sm font-semibold text-zinc-900">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm text-zinc-600">{item.detail}</p>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <SectionCard
          id="missing-keywords-actions"
          title="Missing keywords action list"
          subtitle={
            showJobMatch
              ? "Exact terms from the job description not found in your résumé."
              : "Add a job description on your next run for keyword-level actions."
          }
          accent="amber"
        >
          {plan.missingKeywordsActionList.length > 0 ? (
            <ul className="max-h-80 space-y-2 overflow-y-auto pr-1">
              {plan.missingKeywordsActionList.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-lg border border-amber-200/70 bg-white px-3 py-2.5"
                >
                  <span className="mt-0.5 shrink-0 rounded-md bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
                    {item.title}
                  </span>
                  <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-600">
              {showJobMatch
                ? "Strong keyword overlap—tighten bullets with metrics instead."
                : "Paste a job description when you analyze to populate this list."}
            </p>
          )}
        </SectionCard>

        <SectionCard
          id="plan-strengths"
          title="Resume strengths"
          subtitle="What is already working—preserve these while you edit."
          accent="emerald"
        >
          {plan.resumeStrengths.length > 0 ? (
            <ul className="grid gap-2 sm:grid-cols-1">
              {plan.resumeStrengths.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-lg border border-emerald-100 bg-emerald-50/50 px-3 py-2.5 text-sm text-zinc-700"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden
                  />
                  {item.detail}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-600">
              Re-run after adding experience bullets to surface strengths.
            </p>
          )}
        </SectionCard>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <SectionCard
          id="before-apply"
          title="Before you apply checklist"
          subtitle="ATS-friendly final pass—track progress as you go."
          accent="violet"
        >
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-600">
              <span>Checklist progress</span>
              <span className="tabular-nums">
                {checklistDone}/{checklistTotal}
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-violet-500 transition-all duration-300"
                style={{ width: `${checklistPct}%` }}
              />
            </div>
          </div>
          <ul className="space-y-2">
            {plan.beforeYouApplyChecklist.map((item) => {
              const done = checkedIds.has(item.id);
              return (
                <li key={item.id}>
                  <label className="flex cursor-pointer gap-3 rounded-xl border border-violet-100/80 bg-violet-50/30 px-4 py-3 transition hover:bg-violet-50/60">
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={() => toggleCheck(item.id)}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-violet-300 text-violet-600 focus:ring-violet-500"
                    />
                    <span className="min-w-0">
                      <span
                        className={`block text-sm font-semibold ${done ? "text-zinc-500 line-through" : "text-zinc-900"}`}
                      >
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-zinc-600">
                        {item.detail}
                      </span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </SectionCard>

        <SectionCard
          id="copy-suggestions"
          title="One-click copy suggestions"
          subtitle="Ready-to-paste lines for your résumé and planning doc."
          accent="brand"
        >
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void copyFullPlan()}
              className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-700"
            >
              {planCopied ? "Full plan copied" : "Copy entire improvement plan"}
            </button>
          </div>
          <div className="grid gap-3">
            {copyLines.length > 0 ? (
              copyLines.slice(0, 6).map((line, i) => (
                <CopyChip
                  key={`copy-${i}`}
                  text={line}
                  label="Copy"
                  onCopied={() => {}}
                />
              ))
            ) : (
              <p className="text-sm text-zinc-600">
                Run analysis with a job description for tailored bullet
                suggestions.
              </p>
            )}
          </div>
        </SectionCard>
      </div>
    </section>
  );
}
