"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { extractResumeSignals } from "@/lib/ats/extract-resume-signals";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function ResumeSkillsAnalyzerTool() {
  const [resume, setResume] = useState("");
  const [jd, setJd] = useState("");

  const signals = useMemo(() => {
    const text = resume.trim();
    if (text.length < 80) return null;
    return extractResumeSignals(text, jd.trim() || undefined);
  }, [resume, jd]);

  const copySkills = async () => {
    if (!signals?.skillsFound.length) return;
    try {
      await navigator.clipboard.writeText(signals.skillsFound.join(", "));
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="not-prose space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-slate-900">Paste your resume</p>
        <textarea
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          rows={8}
          placeholder="Paste resume text or upload on the full checker for PDF extraction…"
          className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
        <p className="mt-4 text-sm font-semibold text-slate-900">
          Optional: job description
        </p>
        <textarea
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          rows={4}
          placeholder="Paste a job post to see matched vs missing skills…"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      {signals ? (
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-slate-900">
                Detected skills ({signals.skillsFound.length})
              </h3>
              <button
                type="button"
                onClick={() => void copySkills()}
                className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900"
              >
                Copy all
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {signals.skillsFound.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {jd.trim() && signals.jdKeywordsMissing.length > 0 ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6">
              <h3 className="font-display text-lg font-bold text-amber-950">
                Missing vs job post ({signals.jdKeywordsMissing.length})
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {signals.jdKeywordsMissing.slice(0, 30).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-amber-300 bg-white px-3 py-1 text-xs font-semibold text-amber-950"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Bullets" value={`${signals.bulletCount}`} />
            <StatCard
              label="With metrics"
              value={`${signals.bulletsWithMetrics}/${signals.bulletCount || 1}`}
            />
            <StatCard
              label="Est. experience"
              value={`${signals.estimatedYearsExperience} yrs`}
            />
          </div>

          {signals.missingSections.length > 0 ? (
            <p className="text-sm text-amber-800">
              Missing standard sections: {signals.missingSections.join(", ")} — add
              for better ATS parsing.
            </p>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-slate-500">
          Paste at least 80 characters of resume text to analyze skills.
        </p>
      )}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <p className="font-semibold text-slate-900">Want AI rewrites and pass likelihood?</p>
        <p className="mt-2 text-sm text-slate-600">
          Run the full ATS Resume Checker for score, improvement plan, and keyword gaps.
        </p>
        <Link
          href={RESUME_CHECKER_PATH}
          className="btn-gradient mt-4 inline-flex px-5 text-sm"
        >
          Full resume analysis →
        </Link>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-display text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
