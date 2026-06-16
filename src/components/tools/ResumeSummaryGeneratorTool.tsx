"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

function buildSummaries(
  role: string,
  years: string,
  highlight: string
): string[] {
  const r = role.trim() || "professional";
  const y = years.trim() || "5+";
  const h = highlight.trim() || "measurable results in cross-functional teams";
  return [
    `${r} with ${y} years of experience delivering ${h}. Skilled in aligning stakeholders, prioritizing outcomes, and communicating impact to technical and business audiences.`,
    `Results-driven ${r.toLowerCase()} (${y} years) specializing in ${h}. Known for data-informed decisions and clean execution from discovery through delivery.`,
    `${r} bringing ${y} years of experience and a track record of ${h}. Seeking roles where structured problem-solving and clear metrics drive hiring decisions.`,
  ];
}

export function ResumeSummaryGeneratorTool() {
  const [role, setRole] = useState("");
  const [years, setYears] = useState("");
  const [highlight, setHighlight] = useState("");
  const [seed, setSeed] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const summaries = useMemo(
    () => buildSummaries(role, years, highlight),
    [role, years, highlight, seed]
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
        <div className="space-y-4">
          <Field label="Target role" value={role} onChange={setRole} placeholder="e.g. Senior Data Analyst" />
          <Field label="Years of experience" value={years} onChange={setYears} placeholder="e.g. 6+" />
          <Field
            label="Top achievement or domain"
            value={highlight}
            onChange={setHighlight}
            placeholder="e.g. SQL dashboards that cut reporting time 70%"
          />
          <button
            type="button"
            onClick={() => setSeed((s) => s + 1)}
            className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900"
          >
            Regenerate summaries
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {summaries.map((text, i) => (
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
        <p className="font-semibold text-slate-900">Tailor summary to a job post</p>
        <p className="mt-2 text-sm text-slate-600">
          Run the ATS Resume Checker with a job description for an AI-improved summary
          matched to the posting.
        </p>
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-4 inline-flex px-5 text-sm">
          Analyze with job description →
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
