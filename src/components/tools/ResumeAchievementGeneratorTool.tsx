"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const VERBS = [
  "Achieved",
  "Delivered",
  "Increased",
  "Reduced",
  "Generated",
  "Improved",
  "Led",
  "Scaled",
];

function buildAchievements(
  action: string,
  metric: string,
  context: string,
  seed: number
): string[] {
  const a = action.trim() || "key initiative";
  const m = metric.trim() || "measurable business impact";
  const c = context.trim() || "cross-functional team";
  const v = VERBS[seed % VERBS.length] ?? "Achieved";
  return [
    `${v} ${a} for ${c}, resulting in ${m}.`,
    `Drove ${a} across ${c}—${m}—through structured planning and stakeholder alignment.`,
    `Recognized for ${a} at ${c}; delivered ${m} within one review cycle.`,
  ];
}

export function ResumeAchievementGeneratorTool() {
  const [action, setAction] = useState("");
  const [metric, setMetric] = useState("");
  const [context, setContext] = useState("");
  const [seed, setSeed] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const achievements = useMemo(
    () => buildAchievements(action, metric, context, seed),
    [action, metric, context, seed]
  );

  const copy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      window.setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="not-prose space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm text-slate-600">
          Draft metric-heavy achievement lines for your Experience section—then refine
          with real numbers.
        </p>
        <div className="mt-4 space-y-4">
          <Field label="What you accomplished" value={action} onChange={setAction} placeholder="e.g. migrated billing platform to AWS" />
          <Field label="Result / metric" value={metric} onChange={setMetric} placeholder="e.g. 99.9% uptime and $1.2M cost savings" />
          <Field label="Context" value={context} onChange={setContext} placeholder="e.g. 8-person engineering org" />
          <button
            type="button"
            onClick={() => setSeed((s) => s + 1)}
            className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900"
          >
            Regenerate achievements
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {achievements.map((text, i) => (
          <div
            key={`${seed}-${i}`}
            className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-start sm:justify-between"
          >
            <p className="flex-1 text-sm leading-relaxed text-slate-800">{text}</p>
            <button
              type="button"
              onClick={() => void copy(text, i)}
              className="shrink-0 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16a34a] ring-1 ring-emerald-200"
            >
              {copiedIdx === i ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="font-semibold text-slate-900">AI achievement rewrites on your full resume</p>
        <p className="mt-2 text-sm text-slate-600">
          The ATS Resume Checker suggests improved bullets and achievement statements
          against your target job description.
        </p>
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-4 inline-flex px-5 text-sm">
          Open ATS Resume Checker →
        </Link>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-700">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
      />
    </div>
  );
}
