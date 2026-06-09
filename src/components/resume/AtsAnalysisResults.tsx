"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import type { ScoreBreakdown } from "@/lib/ats/score-engine";
import { buildCareerInsights } from "@/lib/ats/career-insights";
import {
  buildAnalysisExportText,
  downloadTextFile,
} from "@/lib/ats/export-analysis";
import { CircularAtsScore } from "./CircularAtsScore";
import { AtsResultsInsightsPanel } from "./AtsResultsInsightsPanel";
import { PersonalizedImprovementPlan } from "./PersonalizedImprovementPlan";
import { AiResumeImprovements } from "./AiResumeImprovements";

type Props = {
  analysis: AtsAnalysisResult;
  showJobMatch: boolean;
  demoMode: boolean;
  sourceFileName?: string;
  variant?: "dashboard" | "stacked";
  onRecheck?: () => void;
  recheckLoading?: boolean;
  recheckDisabled?: boolean;
};

function defaultBreakdown(analysis: AtsAnalysisResult): ScoreBreakdown {
  return (
    analysis.score_breakdown ?? {
      skills: 0,
      experience: 0,
      ats: 0,
      formatting: 0,
      education: 0,
    }
  );
}

function pctOfMax(part: number, max: number): number {
  if (max <= 0) return 0;
  return Math.round(Math.max(0, Math.min(100, (part / max) * 100)));
}

function MetricCard({
  label,
  icon,
  percent,
  detail,
  gradientClass,
  iconBg,
}: {
  label: string;
  icon: ReactNode;
  percent: number | null;
  detail: string;
  gradientClass: string;
  iconBg: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/30 p-5 shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-lg sm:p-6 ${gradientClass}`}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      <div className="relative flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${iconBg}`}
        >
          {icon}
        </div>
      </div>
      <div className="relative mt-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
          {label}
        </p>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-display text-3xl font-bold tabular-nums text-zinc-950 sm:text-4xl">
            {percent != null ? percent : "—"}
          </span>
          {percent != null ? (
            <span className="text-sm font-semibold text-zinc-600">%</span>
          ) : null}
        </div>
        <p className="mt-2 text-xs font-medium leading-snug text-zinc-600">
          {detail}
        </p>
        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-black/[0.08]">
          <div
            className="h-full rounded-full bg-zinc-900/80 transition-all duration-1000 ease-out"
            style={{ width: percent != null ? `${percent}%` : "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

function CompositeMetricCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const v = Math.round(Math.max(0, Math.min(100, value)));
  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-lg sm:p-6">
      <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-bold tabular-nums text-zinc-950">
        {v}
        <span className="ml-1 text-base font-semibold text-zinc-500">%</span>
      </p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-brand-500 to-teal-500 transition-all duration-700 ease-out"
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  );
}

function QaBadge({ status }: { status: "pass" | "warn" | "fail" }) {
  const cls =
    status === "pass"
      ? "bg-emerald-100 text-emerald-900 ring-emerald-200"
      : status === "warn"
        ? "bg-amber-100 text-amber-950 ring-amber-200"
        : "bg-rose-100 text-rose-950 ring-rose-200";
  const label = status === "pass" ? "Pass" : status === "warn" ? "Review" : "Gap";
  return (
    <span
      className={`inline-flex shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 ${cls}`}
    >
      {label}
    </span>
  );
}

function IconClipboard({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function IconDownload({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

const LIST_PREVIEW = 6;

function scoreContext(score: number): { band: string; explainer: string } {
  const s = Math.round(Math.max(0, Math.min(100, score)));
  if (s < 45) {
    return {
      band: "Plenty of room to tighten things up",
      explainer:
        "That usually means layout or headings are making extraction harder, or your proof does not yet line up with how employers search. Work through the suggestions below—small, truthful edits often move the needle faster than a full rewrite.",
    };
  }
  if (s < 65) {
    return {
      band: "You are in the running",
      explainer:
        "Structure is often workable; the wins now come from stronger bullets, missing keywords, or a cleaner export. Start with the numbered actions, then re-run on the exact file you plan to upload.",
    };
  }
  if (s < 82) {
    return {
      band: "Solid footing",
      explainer:
        "This is broadly ATS friendly: recruiters and parsers can follow your story. Keep matching language to each posting and adding numbers where they are honest.",
    };
  }
  return {
    band: "Strong shape",
    explainer:
      "Scanability looks good. Next pass is human polish: trim filler, sharpen the summary, and make sure every claim is interview-ready.",
  };
}

function useExpandedList<T>(items: T[]) {
  const [open, setOpen] = useState(false);
  const needsToggle = items.length > LIST_PREVIEW;
  const shown = open || !needsToggle ? items : items.slice(0, LIST_PREVIEW);
  return { shown, needsToggle, open, setOpen };
}

export function AtsAnalysisResults({
  analysis,
  showJobMatch,
  demoMode,
  sourceFileName,
  variant: _variant = "dashboard",
  onRecheck,
  recheckLoading = false,
  recheckDisabled = false,
}: Props) {
  void _variant;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [pdfError, setPdfError] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);

  const insights = useMemo(() => {
    if (analysis.career_insights?.insights_unlocked) {
      return analysis.career_insights;
    }
    const full = buildCareerInsights(analysis);
    return { ...full, insights_unlocked: true as const };
  }, [analysis]);

  const scoreInfo = useMemo(
    () => scoreContext(analysis.ats_score),
    [analysis.ats_score]
  );

  const nextSteps = useMemo(() => {
    const fromActions = insights.improvement_actions.filter(Boolean).slice(0, 3);
    if (fromActions.length >= 3) return fromActions;
    const merged: string[] = [...fromActions];
    for (const q of insights.quick_fix_checklist) {
      const t = q.trim();
      if (!t || merged.length >= 3) continue;
      if (!merged.includes(t)) merged.push(t);
    }
    return merged.slice(0, 3);
  }, [insights.improvement_actions, insights.quick_fix_checklist]);

  const missingTags = useMemo(() => {
    const set = new Set<string>();
    for (const s of insights.missing_skills_highlight) {
      const t = s.trim();
      if (t) set.add(t);
    }
    for (const s of analysis.missing_keywords) {
      const t = s.trim();
      if (t) set.add(t);
    }
    return Array.from(set);
  }, [insights.missing_skills_highlight, analysis.missing_keywords]);

  const breakdown = defaultBreakdown(analysis);
  const hasBreakdown = Boolean(analysis.score_breakdown);

  const skillsPct = hasBreakdown ? pctOfMax(breakdown.skills, 30) : null;
  const expPct = hasBreakdown ? pctOfMax(breakdown.experience, 25) : null;
  const atsPct = hasBreakdown ? pctOfMax(breakdown.ats, 20) : null;
  const formatPct = hasBreakdown ? pctOfMax(breakdown.formatting, 15) : null;
  const eduPct = hasBreakdown ? pctOfMax(breakdown.education, 10) : null;
  const keywordPct = Math.round(
    Math.max(0, Math.min(100, analysis.keyword_match_score))
  );
  const postingKeywordPct =
    showJobMatch && analysis.keyword_match_detail
      ? analysis.keyword_match_detail.coverage_percent
      : null;
  const compatibility = analysis.ats_compatibility_rating;
  const resumeStrengths =
    analysis.resume_strengths?.length
      ? analysis.resume_strengths
      : insights.strengths.slice(0, 5);
  const resumeWeaknesses =
    analysis.resume_weaknesses?.length
      ? analysis.resume_weaknesses
      : insights.weaknesses.slice(0, 8);

  const strengthsList = useExpandedList(insights.strengths);
  const weaknessesList = useExpandedList(insights.weaknesses);

  const downloadPdf = async () => {
    setPdfError(false);
    setPdfLoading(true);
    try {
      const res = await fetch("/api/export-report-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ analysis }),
      });
      if (!res.ok) {
        setPdfError(true);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resumeiq-ats-report.pdf";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setPdfError(true);
    } finally {
      setPdfLoading(false);
    }
  };

  const copyBullet = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      setCopiedIndex(-1);
    }
  };

  const copyAllBullets = async () => {
    const text = analysis.improved_bullets.join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(-2);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      setCopiedIndex(-1);
    }
  };

  const downloadBullets = () => {
    const text =
      analysis.improved_bullets.join("\n\n") || "(No suggested bullets.)";
    downloadTextFile("suggested-bullets.txt", text);
  };

  const downloadFull = () => {
    const content = buildAnalysisExportText(analysis, {
      fileName: sourceFileName,
      generatedAt: new Date(),
    });
    const safe =
      sourceFileName?.replace(/[^\w.-]+/g, "_").slice(0, 40) || "resume";
    downloadTextFile(`resume-report-${safe}.txt`, content);
  };

  const IconSkills = (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={1.75} d="M9 12l2 2 4-4M12 3v2m0 14v2M5 12H3m18 0h-2" />
    </svg>
  );
  const IconExp = (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeWidth={1.75}
        d="M21 13v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3m4-4l4 4 4-4M7 17V7a2 2 0 012-2h6a2 2 0 012 2v10"
      />
    </svg>
  );
  const IconAts = (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={1.75} d="M4 6h16M4 12h10M4 18h16" />
    </svg>
  );
  const IconFmt = (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={1.75} d="M4 5h16v14H4zM8 9h8M8 13h5" />
    </svg>
  );
  const IconKeyword = (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeWidth={1.75}
        strokeLinecap="round"
        d="M7 7h8M7 12h11M7 17h6M15.5 7l3 3-5 5"
      />
    </svg>
  );

  const STATIC_TIPS = [
    "Quantify outcomes: %, revenue, cycle time, team size.",
    "Echo critical phrases from the target posting where truthful.",
    "Use standard headings and a single column for ATS extraction.",
    "Keep page-one above-the-fold focused on role fit and top wins.",
    "Match UK or US spelling to the posting and region you are applying in.",
  ];

  return (
    <div className="mx-auto w-full max-w-[1320px] space-y-8 px-1 pb-12 sm:space-y-10 sm:px-0">
      {process.env.NODE_ENV === "development" && demoMode ? (
        <div
          className="rounded-2xl border border-amber-200/90 bg-amber-50/95 px-4 py-3 text-sm text-amber-950 shadow-soft"
          role="status"
        >
          <span className="font-semibold">Dev only.</span> AI narrative path
          did not run (missing API keys or LLM error). Scores still use the same
          deterministic rules engine and offline qualitative merge — set{" "}
          <code className="rounded bg-amber-100/80 px-1">GROQ_API_KEY</code> or{" "}
          <code className="rounded bg-amber-100/80 px-1">OPENAI_API_KEY</code>{" "}
          on the server for live model output.
        </div>
      ) : null}

      {/* Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200/90 bg-white px-4 py-4 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            Your report
          </p>
          <p className="mt-0.5 text-sm font-medium text-zinc-800">
            Save a copy or run again after you edit
            {sourceFileName ? (
              <span className="text-zinc-400">
                {" "}
                · <span className="text-zinc-500">{sourceFileName}</span>
              </span>
            ) : null}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {onRecheck ? (
            <button
              type="button"
              onClick={onRecheck}
              disabled={recheckDisabled || recheckLoading}
              className="h-10 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 disabled:opacity-50"
            >
              {recheckLoading ? "Rechecking…" : "Recheck my resume"}
            </button>
          ) : null}
          <button
            type="button"
            onClick={downloadFull}
            className="h-10 rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            Download full report
          </button>
          <button
            type="button"
            onClick={() => void downloadPdf()}
            disabled={pdfLoading}
            className="h-10 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 disabled:opacity-60"
          >
            {pdfLoading ? "PDF…" : "Export PDF"}
          </button>
        </div>
      </div>
      {pdfError ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-900">
          PDF export failed — try again or use the text report.
        </p>
      ) : null}

      {/* Hero + composite signals */}
      <article
        className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-soft-lg"
        aria-labelledby="ats-score-heading"
      >
        <div className="relative bg-gradient-to-br from-white via-emerald-50/40 to-brand-50/50 px-4 py-10 sm:px-8 sm:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-300/35 to-teal-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-200/30 to-transparent blur-3xl" />

          <div className="relative animate-fade-in-up text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Resume analysis
            </p>
            <h2
              id="ats-score-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
              Your ATS resume score
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
              A single number from this{" "}
              <strong className="font-semibold text-zinc-800">
                ATS Resume Checker
              </strong>{" "}
              run—use it to prioritize resume optimization, not to predict an
              offer.
            </p>
            <div className="mt-10 flex justify-center px-2">
              <CircularAtsScore
                value={analysis.ats_score}
                size={224}
                className="origin-center scale-[0.9] sm:scale-100"
                scoreLabel="Score"
                showBand
                variant="premium"
              />
            </div>
            <p className="mx-auto mt-8 max-w-xl text-pretty text-sm leading-relaxed text-zinc-700 sm:text-base">
              <span className="font-semibold text-zinc-900">
                {scoreInfo.band}.
              </span>{" "}
              {scoreInfo.explainer}
            </p>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-xs leading-relaxed text-zinc-500 sm:text-sm">
              If the extracted text preview looked messy, fix the source file
              first—then you are truly improving your ATS score for the version
              employers receive.{" "}
              <Link
                href="/ats-score-explained"
                className="font-semibold text-[#16a34a] underline underline-offset-2"
              >
                What your ATS score means →
              </Link>
            </p>
            {compatibility ? (
              <div className="mx-auto mt-6 inline-flex max-w-lg flex-col items-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/90 px-5 py-4 shadow-sm sm:flex-row sm:gap-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  ATS compatibility
                </span>
                <span
                  className={`rounded-full px-4 py-1 text-sm font-bold ${
                    compatibility.tone === "excellent"
                      ? "bg-emerald-100 text-emerald-900"
                      : compatibility.tone === "good"
                        ? "bg-teal-100 text-teal-900"
                        : compatibility.tone === "fair"
                          ? "bg-amber-100 text-amber-950"
                          : "bg-rose-100 text-rose-950"
                  }`}
                >
                  {compatibility.label}
                </span>
                <p className="text-center text-xs leading-relaxed text-zinc-600 sm:text-left sm:text-sm">
                  {compatibility.description}
                </p>
              </div>
            ) : null}
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              Signal overview
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              <CompositeMetricCard
                label={
                  postingKeywordPct != null
                    ? "Posting keyword match"
                    : "Keyword coverage"
                }
                value={
                  postingKeywordPct != null
                    ? postingKeywordPct
                    : analysis.keyword_match_score
                }
              />
              <CompositeMetricCard
                label="Readability & structure"
                value={analysis.readability_score}
              />
              {showJobMatch && analysis.job_match_score != null ? (
                <CompositeMetricCard
                  label="Overall match score"
                  value={analysis.job_match_score}
                />
              ) : (
                <div className="flex flex-col justify-center rounded-2xl border border-dashed border-zinc-200/90 bg-white/60 px-5 py-6 text-center shadow-sm">
                  <p className="text-sm font-medium text-zinc-700">
                    Overall match score
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                    Add a job description when you score again for a match
                    percentage here.
                  </p>
                </div>
              )}
            </div>
            {nextSteps.length > 0 ? (
              <div className="mt-8 rounded-2xl border border-emerald-200/80 bg-white/85 px-5 py-5 shadow-sm backdrop-blur-sm sm:px-7 sm:py-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                  Start here (next edits)
                </p>
                <ol className="mt-4 space-y-3 text-left text-sm leading-relaxed text-zinc-800">
                  {nextSteps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-900 tabular-nums">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 text-pretty">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                  Edited your file? Hit{" "}
                  <strong className="font-medium text-zinc-700">
                    Recheck my resume
                  </strong>{" "}
                  so this online resume checker scores the version you will
                  actually submit.
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Metric grid: 1 / 2 / 3 cols */}
        <div className="border-t border-zinc-100 px-4 py-8 sm:px-8 sm:py-10">
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              Score breakdown
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-zinc-950 sm:text-2xl">
              What shaped this score
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
              These blocks add up to the number up top. A lower slice here
              usually points to layout, keywords, or proof—not that you are a
              weak candidate. The keyword row also reflects how your full text
              reads for an{" "}
              <strong className="font-semibold text-zinc-800">
                ATS compatible resume
              </strong>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <MetricCard
              label="Skills score"
              icon={IconSkills}
              percent={skillsPct}
              detail={
                hasBreakdown
                  ? "ATS weight · up to 30 pts"
                  : "Run a full parse for component weights"
              }
              gradientClass="bg-gradient-to-br from-emerald-100/95 via-white to-teal-50/60"
              iconBg="bg-gradient-to-br from-emerald-500 to-teal-600"
            />
            <MetricCard
              label="Experience score"
              icon={IconExp}
              percent={expPct}
              detail={hasBreakdown ? "Weight · up to 25 pts" : "—"}
              gradientClass="bg-gradient-to-br from-brand-100/95 via-white to-brand-50/60"
              iconBg="bg-gradient-to-br from-brand-400 to-brand-600"
            />
            <MetricCard
              label="ATS match"
              icon={IconAts}
              percent={atsPct}
              detail={hasBreakdown ? "Keyword & structure · up to 20 pts" : "—"}
              gradientClass="bg-gradient-to-br from-brand-100/95 via-white to-brand-50/60"
              iconBg="bg-gradient-to-br from-brand-500 to-brand-600"
            />
            <MetricCard
              label="Formatting"
              icon={IconFmt}
              percent={formatPct}
              detail={hasBreakdown ? "Layout · up to 15 pts" : "—"}
              gradientClass="bg-gradient-to-br from-orange-100/95 via-white to-amber-50/60"
              iconBg="bg-gradient-to-br from-orange-500 to-amber-600"
            />
            <MetricCard
              label="Keywords"
              icon={IconKeyword}
              percent={keywordPct}
              detail={
                analysis.keyword_match_detail
                  ? `${analysis.keyword_match_detail.matched}/${analysis.keyword_match_detail.total} posting terms in text`
                  : "Coverage across your résumé text"
              }
              gradientClass="bg-gradient-to-br from-emerald-100/95 via-white to-teal-50/50"
              iconBg="bg-gradient-to-br from-emerald-500 to-teal-600"
            />
            <MetricCard
              label="Education"
              icon={IconFmt}
              percent={eduPct}
              detail={hasBreakdown ? "Weight · up to 10 pts" : "—"}
              gradientClass="bg-gradient-to-br from-violet-100/95 via-white to-indigo-50/50"
              iconBg="bg-gradient-to-br from-violet-500 to-indigo-600"
            />
          </div>
        </div>
      </article>

      {resumeStrengths.length > 0 ? (
        <section
          className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/60 via-white to-white p-5 shadow-soft sm:p-7"
          aria-labelledby="resume-strengths-heading"
        >
          <h2
            id="resume-strengths-heading"
            className="font-display text-xl font-semibold text-zinc-950"
          >
            Resume strengths
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            What is already working in this export—build on these while you fix
            gaps below.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {resumeStrengths.map((s, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-sm leading-relaxed text-zinc-700"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden
                />
                {s}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {resumeWeaknesses.length > 0 ? (
        <section
          className="rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/50 via-white to-white p-5 shadow-soft sm:p-7"
          aria-labelledby="resume-weaknesses-heading"
        >
          <h2
            id="resume-weaknesses-heading"
            className="font-display text-xl font-semibold text-zinc-950"
          >
            Resume weaknesses
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Gaps to fix before you apply—paired with AI rewrites and priority
            fixes below.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {resumeWeaknesses.map((w, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border border-rose-100/80 bg-white/80 px-4 py-3 text-sm leading-relaxed text-zinc-700"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500"
                  aria-hidden
                />
                {w}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {missingTags.length > 0 ? (
        <section
          className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-white p-5 shadow-soft sm:p-7"
          aria-labelledby="missing-keywords-heading"
        >
          <h2
            id="missing-keywords-heading"
            className="font-display text-xl font-semibold text-zinc-950"
          >
            Missing keywords
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Terms from the job posting not found in your résumé text—add only
            where you can speak to them honestly.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {missingTags.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-950"
              >
                {kw}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <AiResumeImprovements analysis={analysis} />

      <PersonalizedImprovementPlan
        analysis={analysis}
        showJobMatch={showJobMatch}
      />

      <nav
        className="flex flex-col items-center gap-2 rounded-xl border border-zinc-100 bg-zinc-50/80 px-4 py-4 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:py-3"
        aria-label="Related resume guides"
      >
        <span className="text-xs font-medium text-zinc-500 sm:text-sm">
          Go deeper:
        </span>
        <Link
          href="/blog/how-to-make-your-resume-ats-friendly-2026-complete-guide"
          className="text-xs font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 hover:text-emerald-900 sm:text-sm"
        >
          ATS friendly resume guide
        </Link>
        <Link
          href="/blog/10-resume-mistakes-ats-rejections-2026"
          className="text-xs font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 hover:text-emerald-900 sm:text-sm"
        >
          Common ATS mistakes
        </Link>
        <Link
          href="/blog/why-resume-rejected-ats-top-reasons-fixes"
          className="text-xs font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 hover:text-emerald-900 sm:text-sm"
        >
          Why resumes get rejected
        </Link>
      </nav>

      <AtsResultsInsightsPanel
        analysis={analysis}
        showJobMatch={showJobMatch}
        onRecheck={onRecheck}
        recheckLoading={recheckLoading}
        recheckDisabled={recheckDisabled}
      />

      {/* AI insights */}
      <section className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft-lg sm:p-8 lg:p-10">
        <header className="border-b border-zinc-100 pb-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-accent-500">
            AI insights
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-zinc-950 sm:text-3xl">
            Strengths, gaps, and next steps
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">
            Highlights from this analysis — written for quick scanning, not a
            wall of generic advice.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 via-white to-white p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Strengths
            </h3>
            <ul className="mt-5 space-y-4">
              {strengthsList.shown.map((s, i) => (
                <li key={i} className="flex gap-3 text-pretty text-sm leading-relaxed text-zinc-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            {strengthsList.needsToggle ? (
              <button
                type="button"
                onClick={() => strengthsList.setOpen((o) => !o)}
                className="mt-4 text-xs font-semibold text-emerald-800 underline-offset-4 hover:underline"
              >
                {strengthsList.open
                  ? "Show less"
                  : `Show all (${insights.strengths.length})`}
              </button>
            ) : null}
          </div>

          <div className="rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-white p-6 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-rose-900">
              Weaknesses & risk
            </h3>
            {insights.weaknesses.length === 0 ? (
              <p className="mt-5 text-sm leading-relaxed text-zinc-600">
                No major risks flagged — keep quantifying impact and aligning
                with the posting where honest.
              </p>
            ) : (
              <>
                <ul className="mt-5 space-y-4">
                  {weaknessesList.shown.map((s, i) => (
                    <li key={i} className="flex gap-3 text-pretty text-sm leading-relaxed text-zinc-800">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                {weaknessesList.needsToggle ? (
                  <button
                    type="button"
                    onClick={() => weaknessesList.setOpen((o) => !o)}
                    className="mt-4 text-xs font-semibold text-rose-900 underline-offset-4 hover:underline"
                  >
                    {weaknessesList.open
                      ? "Show less"
                      : `Show all (${insights.weaknesses.length})`}
                  </button>
                ) : null}
              </>
            )}
          </div>
        </div>

        <div className="mt-10 space-y-10 border-t border-zinc-100 pt-10">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              Missing skills & terms
            </h3>
            {missingTags.length === 0 ? (
              <p className="mt-3 text-sm text-zinc-600">
                No specific gaps listed — your keyword coverage still appears in
                the metrics above.
              </p>
            ) : (
              <div className="mt-4 flex flex-wrap gap-2">
                {missingTags.map((kw, i) => (
                  <span
                    key={`${kw}-${i}`}
                    className="rounded-full border border-amber-200/90 bg-amber-50/90 px-3 py-1.5 text-xs font-semibold text-amber-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              Suggestions
            </h3>
            <ol className="mt-5 space-y-4">
              {insights.improvement_actions.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 px-4 py-4 text-sm leading-relaxed text-zinc-800 shadow-sm transition hover:border-zinc-200 hover:bg-white hover:shadow-soft"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-pretty">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Résumé narrative — executive-style synthesis */}
      <section className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ring-1 ring-zinc-950/[0.04]">
        <header className="relative border-b border-zinc-200/80 bg-gradient-to-br from-zinc-50 via-white to-brand-50/40 px-6 py-8 sm:px-8 sm:py-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-20%,rgba(134,239,172,0.22),transparent_50%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-200/80 to-transparent"
            aria-hidden
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-600">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_0_4px_rgba(74,222,128,0.35)]"
                  aria-hidden
                />
                Narrative review
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-[2rem] lg:leading-tight">
                Résumé narrative
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                A structured brief on how your résumé reads to{" "}
                <strong className="font-semibold text-zinc-800">
                  applicant tracking systems
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-zinc-800">
                  hiring teams
                </strong>
                — written for clarity, not jargon.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <div className="rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-3 text-center shadow-sm backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  View
                </p>
                <p className="mt-1 text-xs font-semibold text-zinc-800">
                  ATS + recruiter skim
                </p>
              </div>
              <div className="rounded-xl border border-brand-200/90 bg-brand-50/80 px-4 py-3 text-center shadow-sm ring-1 ring-brand-100/80 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-accent-600">
                  Layout
                </p>
                <p className="mt-1 text-xs font-semibold text-brand-950">
                  Executive summary first
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6 bg-gradient-to-b from-zinc-50/30 via-white to-white p-6 sm:p-8 lg:space-y-8 lg:p-10">
          <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition duration-300 hover:border-brand-200/80 hover:shadow-md">
            <div
              className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-brand-500 via-emerald-500 to-brand-600"
              aria-hidden
            />
            <div className="flex flex-col gap-6 p-6 pl-6 sm:flex-row sm:gap-7 sm:p-8 sm:pl-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-600 text-white shadow-lg shadow-brand-500/25 ring-4 ring-brand-100/90">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeWidth={1.65}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1 space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
                    Executive summary
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-zinc-500">
                    Positioning and story in one clear pass
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 px-5 py-5 text-[0.9375rem] leading-[1.75] text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                  <div className="text-pretty whitespace-pre-wrap antialiased">
                    {insights.narrative_summary}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition duration-300 hover:border-emerald-200/80 hover:shadow-md">
              <div
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-emerald-500 to-slate-600"
                aria-hidden
              />
              <div className="flex flex-col gap-5 p-6 pl-6 sm:p-7 sm:pl-7">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-slate-700 text-white shadow-md shadow-emerald-500/20 ring-4 ring-emerald-50">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeWidth={1.65}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm4 4h8m-8 4h5"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold tracking-tight text-zinc-950 sm:text-lg">
                      ATS interpretation
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zinc-500">
                      Parsing, structure, and keyword extraction
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 px-4 py-4 text-[0.9375rem] leading-[1.75] text-zinc-700 sm:px-5 sm:py-4">
                  <p className="text-pretty">
                    {insights.ats_interpretation ||
                      "Run again after fixing layout or headings if extraction looked off in the preview."}
                  </p>
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition duration-300 hover:border-emerald-200/80 hover:shadow-md">
              <div
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-emerald-500 to-teal-600"
                aria-hidden
              />
              <div className="flex flex-col gap-5 p-6 pl-6 sm:p-7 sm:pl-7">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20 ring-4 ring-emerald-50">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeWidth={1.65}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold tracking-tight text-zinc-950 sm:text-lg">
                      Job readiness
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zinc-500">
                      Role fit when a posting is provided
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 px-4 py-4 text-[0.9375rem] leading-[1.75] text-zinc-700 sm:px-5 sm:py-4">
                  <p className="text-pretty">
                    {insights.job_readiness ||
                      "Paste a full job description next time for a tighter posting-fit read."}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Secondary dashboard row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-soft transition hover:shadow-soft-lg sm:p-8">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Quick fix checklist
          </h3>
          <ul className="mt-5 space-y-3">
            {insights.quick_fix_checklist.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border border-brand-100 bg-brand-50/30 px-4 py-3 text-sm leading-relaxed text-zinc-700"
              >
                <span className="font-bold text-accent-500">✓</span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-soft transition hover:shadow-soft-lg sm:p-8">
          <h3 className="font-display text-lg font-semibold text-zinc-950">
            Common ATS issues
          </h3>
          <ul className="mt-5 space-y-3">
            {insights.common_ats_issues.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                <span className="shrink-0 text-orange-500">▸</span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-soft transition hover:shadow-soft-lg sm:p-8">
        <h3 className="font-display text-lg font-semibold text-zinc-950">
          Résumé QA scorecard
        </h3>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {insights.qa_scorecard.map((row, i) => (
            <li
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-zinc-100 bg-zinc-50/40 p-4 transition hover:border-zinc-200 hover:bg-white hover:shadow-sm sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-900">{row.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                  {row.detail}
                </p>
              </div>
              <QaBadge status={row.status} />
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-2xl border border-zinc-200/90 bg-white shadow-soft overflow-hidden">
        <button
          type="button"
          onClick={() => setTipsOpen((o) => !o)}
          className="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-zinc-50 sm:px-8"
          aria-expanded={tipsOpen}
        >
          <div>
            <span className="font-semibold text-zinc-950">
              Practical tips from this run
            </span>
            <p className="mt-1 text-xs text-zinc-500">
              Habits that help every application, plus notes tailored to your
              file.
            </p>
          </div>
          <span
            className={`text-zinc-400 transition ${tipsOpen ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
        {tipsOpen ? (
          <div className="border-t border-zinc-100 px-5 py-8 sm:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-bold uppercase text-zinc-500">
                  Playbook
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                  {STATIC_TIPS.map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-brand-500">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase text-zinc-500">
                  This run
                </p>
                <ul className="mt-4 space-y-2">
                  {analysis.suggestions.map((s, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-zinc-100 bg-zinc-50/60 px-4 py-3 text-sm leading-relaxed text-zinc-800"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:gap-8 xl:grid-cols-2">
        {/* Section commentary */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-gradient-to-b from-white via-zinc-50/30 to-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] ring-1 ring-zinc-950/[0.04] sm:p-7">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_80%_100%_at_50%_-20%,rgba(187,247,208,0.5),transparent)]"
            aria-hidden
          />
          <div className="relative">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-600">
                  AI review
                </p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                  Section commentary
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
                  Targeted notes for the main blocks recruiters scan first.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 sm:mt-7">
              {(
                [
                  {
                    title: "Summary",
                    body: analysis.section_feedback.summary,
                    gradient: "from-brand-500 to-brand-600",
                    well: "border-brand-100/90 bg-brand-50/50",
                    icon: (
                      <path
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h10M4 18h16"
                      />
                    ),
                  },
                  {
                    title: "Experience",
                    body: analysis.section_feedback.experience,
                    gradient: "from-emerald-500 to-teal-600",
                    well: "border-emerald-100/90 bg-emerald-50/40",
                    icon: (
                      <path
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7M9 9h1M9 13h1M9 17h1M16 12l-4 4-2-2"
                      />
                    ),
                  },
                  {
                    title: "Skills",
                    body: analysis.section_feedback.skills,
                    gradient: "from-teal-500 to-emerald-600",
                    well: "border-emerald-100/90 bg-emerald-50/40",
                    icon: (
                      <path
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3l1.9 3.9L18 9l-4.1 1.1L12 14l-1.9-3.9L6 9l4.1-1.1L12 3zM5 19l1.5-3M19 19l-1.5-3"
                      />
                    ),
                  },
                ] as const
              ).map(({ title, body, gradient, well, icon }) => {
                const hasContent = Boolean(body?.trim());
                return (
                  <article
                    key={title}
                    className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-sm transition duration-200 hover:border-zinc-300 hover:shadow-md"
                  >
                    <div className="flex flex-col gap-4 p-4 sm:flex-row sm:gap-5 sm:p-5">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg ring-4 ring-white`}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden
                        >
                          {icon}
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-display text-base font-semibold tracking-tight text-zinc-900 sm:text-lg">
                            {title}
                          </h4>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                              hasContent
                                ? "bg-zinc-100 text-zinc-600"
                                : "bg-amber-50 text-amber-800 ring-1 ring-amber-200/80"
                            }`}
                          >
                            {hasContent ? "Review" : "Needs attention"}
                          </span>
                        </div>
                        <div
                          className={`mt-3 rounded-xl border px-4 py-3.5 text-sm leading-relaxed text-zinc-800 sm:text-[15px] sm:leading-[1.65] ${well}`}
                        >
                          {hasContent ? (
                            <p className="text-pretty">{body}</p>
                          ) : (
                            <p className="text-pretty text-zinc-500 italic">
                              No commentary for this section in this run.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bullet library */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-gradient-to-b from-white via-brand-50/20 to-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] ring-1 ring-zinc-950/[0.04] sm:p-7">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_75%_100%_at_50%_-30%,rgba(74,222,128,0.14),transparent)]"
            aria-hidden
          />
          <div className="relative">
            <div className="flex flex-col gap-4 border-b border-zinc-200/80 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Suggested copy
                </p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                  Bullet library
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
                  Ready-to-use lines you can paste into your résumé — copy one
                  or export all.
                </p>
              </div>
              {analysis.improved_bullets.length > 0 ? (
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-nowrap">
                  <button
                    type="button"
                    onClick={copyAllBullets}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-accent-400 hover:bg-brand-50/80 hover:text-accent-700"
                    aria-label="Copy all bullets to clipboard"
                  >
                    <IconClipboard className="h-4 w-4 text-accent-500" />
                    {copiedIndex === -2 ? "Copied all" : "Copy all"}
                  </button>
                  <button
                    type="button"
                    onClick={downloadBullets}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800 px-4 text-sm font-semibold text-white shadow-md shadow-zinc-900/25 transition hover:from-zinc-800 hover:to-zinc-700"
                    aria-label="Download bullets as text file"
                  >
                    <IconDownload className="h-4 w-4 opacity-90" />
                    Download .txt
                  </button>
                </div>
              ) : null}
            </div>

            {analysis.improved_bullets.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-zinc-300/90 bg-zinc-50/80 px-6 py-12 text-center">
                <p className="text-sm font-medium text-zinc-600">
                  No draft bullets for this run.
                </p>
                <p className="mt-2 text-xs text-zinc-500">
                  Re-run the analysis after adding more role detail for richer
                  suggestions.
                </p>
              </div>
            ) : (
              <ul className="mt-6 space-y-3 sm:mt-7 sm:space-y-4">
                {analysis.improved_bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="group rounded-2xl border border-zinc-200/90 bg-white/95 p-4 shadow-sm transition hover:border-brand-200/90 hover:shadow-md sm:p-5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                      <div className="flex min-w-0 flex-1 gap-3 sm:gap-4">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 text-xs font-bold tabular-nums text-zinc-700 ring-1 ring-zinc-200/90 shadow-sm"
                          aria-hidden
                        >
                          {i + 1}
                        </span>
                        <p className="text-pretty pt-0.5 text-sm leading-relaxed text-zinc-800 sm:text-[15px] sm:leading-[1.65]">
                          {bullet}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => void copyBullet(bullet, i)}
                        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 self-stretch rounded-xl border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 shadow-sm transition hover:border-accent-400 hover:bg-brand-50 hover:text-accent-700 sm:self-start sm:h-9"
                        aria-label={`Copy bullet ${i + 1}`}
                      >
                        <IconClipboard className="h-3.5 w-3.5" />
                        {copiedIndex === i ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
