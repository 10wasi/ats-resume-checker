"use client";

import dynamic from "next/dynamic";
import { useCallback, useMemo, useRef, useState } from "react";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import { scoreRequestKey } from "@/lib/client/cache-key";
import { Button } from "@/components/ui/Button";
import { IconUpload } from "@/components/ui/Icons";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { Skeleton } from "@/components/ui/Skeleton";

const ResumeJobMatchResults = dynamic(
  () =>
    import("./ResumeJobMatchResults").then((m) => ({
      default: m.ResumeJobMatchResults,
    })),
  {
    loading: () => (
      <div className="h-64 animate-pulse rounded-2xl bg-slate-100" />
    ),
    ssr: false,
  }
);

const MAX_JD_CHARS = 12_000;

type ExtractResponse = { text: string; fileName: string };
type ErrorResponse = { error: string };
type ScoreCacheEntry = { analysis: AtsAnalysisResult; demoMode: boolean };

function isAllowedFile(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    name.endsWith(".pdf") ||
    name.endsWith(".docx") ||
    file.type === "application/pdf" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
}

function Spinner({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function StepBadge({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
        {n}
      </span>
      <span className="text-sm font-semibold text-slate-900">{label}</span>
    </div>
  );
}

export function ResumeJobMatchAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ExtractResponse | null>(null);
  const [extractError, setExtractError] = useState<string | null>(null);
  const [analyzeError, setAnalyzeError] = useState<string | null>(null);
  const [extractLoading, setExtractLoading] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState<AtsAnalysisResult | null>(null);
  const [demoMode, setDemoMode] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [pasteText, setPasteText] = useState("");

  const scoreCache = useRef(new Map<string, ScoreCacheEntry>());
  const extractInFlight = useRef(false);
  const analyzeInFlight = useRef(false);

  const hasResumeText = Boolean(result?.text?.trim());
  const hasJd = jobDescription.trim().length > 0;
  const canAnalyze = hasResumeText && hasJd;

  const assignFile = useCallback((f: File | null) => {
    if (f && !isAllowedFile(f)) {
      setExtractError("Use a PDF or Word (.docx) file.");
      setFile(null);
      setResult(null);
      setAnalysis(null);
      return;
    }
    setFile(f);
    setPasteText("");
    setResult(null);
    setAnalysis(null);
    setExtractError(null);
    setAnalyzeError(null);
    scoreCache.current.clear();
  }, []);

  const extract = useCallback(async () => {
    if (!file || extractInFlight.current) return;
    extractInFlight.current = true;
    setExtractLoading(true);
    setExtractError(null);
    setAnalysis(null);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/extract-resume", { method: "POST", body });
      const data = (await res.json()) as ExtractResponse & ErrorResponse;
      if (!res.ok) {
        setExtractError(data.error ?? "Could not read this file.");
        return;
      }
      setResult({ text: data.text, fileName: data.fileName });
    } catch {
      setExtractError("Connection problem. Please try again.");
    } finally {
      setExtractLoading(false);
      extractInFlight.current = false;
    }
  }, [file]);

  const usePastedResume = useCallback(() => {
    const t = pasteText.trim();
    if (!t) {
      setExtractError("Paste resume text first.");
      return;
    }
    setExtractError(null);
    setFile(null);
    setResult({ text: t, fileName: "Pasted resume" });
    setAnalysis(null);
    scoreCache.current.clear();
  }, [pasteText]);

  const runAnalysis = useCallback(async () => {
    if (!result?.text?.trim()) {
      setAnalyzeError("Add your resume first.");
      return;
    }
    const jdNorm = jobDescription.trim();
    if (!jdNorm) {
      setAnalyzeError("Paste a job description to analyze match.");
      return;
    }
    if (analyzeInFlight.current) return;

    const cacheKey = scoreRequestKey(result.text, jdNorm);
    const cached = scoreCache.current.get(cacheKey);
    if (cached) {
      setAnalyzeError(null);
      setAnalysis(cached.analysis);
      setDemoMode(cached.demoMode);
      return;
    }

    analyzeInFlight.current = true;
    setAnalyzeLoading(true);
    setAnalyzeError(null);
    setAnalysis(null);

    try {
      const res = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: result.text,
          jobDescription: jdNorm,
        }),
      });
      const data = (await res.json()) as {
        analysis?: AtsAnalysisResult;
        demoMode?: boolean;
        error?: string;
      };
      if (!res.ok || !data.analysis) {
        setAnalyzeError(data.error ?? "Analysis failed. Please try again.");
        return;
      }
      setAnalysis(data.analysis);
      setDemoMode(Boolean(data.demoMode));
      scoreCache.current.set(cacheKey, {
        analysis: data.analysis,
        demoMode: Boolean(data.demoMode),
      });
    } catch {
      setAnalyzeError("Connection problem. Please try again.");
    } finally {
      setAnalyzeLoading(false);
      analyzeInFlight.current = false;
    }
  }, [result, jobDescription]);

  const stepProgress = useMemo(() => {
    if (analysis) return 100;
    if (canAnalyze) return 66;
    if (hasResumeText) return 33;
    return 0;
  }, [analysis, canAnalyze, hasResumeText]);

  return (
    <div className="not-prose">
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
          <span>Match analyzer progress</span>
          <span>{stepProgress}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
            style={{ width: `${stepProgress}%` }}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <StepBadge n={1} label="Upload resume" />
          <p className="mt-2 text-sm text-slate-600">
            PDF or DOCX up to 10 MB—or paste plain text below.
          </p>
          <label
            onDragEnter={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setDragActive(false);
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              assignFile(e.dataTransfer.files?.[0] ?? null);
            }}
            htmlFor="jd-match-resume-file"
            className={`mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-8 transition ${
              dragActive
                ? "border-emerald-400 bg-emerald-50/50"
                : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
            }`}
          >
            <IconUpload className="h-8 w-8 text-slate-500" />
            <span className="mt-2 text-sm font-medium text-slate-800">
              Drop resume or browse
            </span>
            <input
              key={fileInputKey}
              id="jd-match-resume-file"
              type="file"
              accept=".pdf,.docx"
              className="sr-only"
              onChange={(e) => assignFile(e.target.files?.[0] ?? null)}
            />
          </label>
          {file ? (
            <p className="mt-2 text-xs text-slate-600">{file.name}</p>
          ) : null}
          <Button
            variant="secondary"
            className="mt-3 h-10 w-full text-sm"
            onClick={() => void extract()}
            disabled={extractLoading || !file}
          >
            {extractLoading ? "Extracting…" : "Extract text"}
          </Button>
          <textarea
            value={pasteText}
            onChange={(e) => setPasteText(e.target.value.slice(0, 24_000))}
            placeholder="Or paste resume text here…"
            rows={3}
            className="input-field mt-4 min-h-[80px] resize-y text-sm"
          />
          <Button
            variant="secondary"
            className="mt-2 h-9 w-full text-sm"
            onClick={usePastedResume}
          >
            Use pasted text
          </Button>
          {extractError ? (
            <div className="mt-3">
              <ErrorAlert>{extractError}</ErrorAlert>
            </div>
          ) : null}
          {hasResumeText ? (
            <p className="mt-3 text-xs font-medium text-emerald-700">
              ✓ Resume ready ({result?.fileName})
            </p>
          ) : null}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <StepBadge n={2} label="Paste job description" />
          <p className="mt-2 text-sm text-slate-600">
            Required for resume match score and ATS keyword checker results.
          </p>
          <textarea
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(e.target.value.slice(0, MAX_JD_CHARS))
            }
            placeholder="Paste the full job posting or responsibilities section…"
            rows={10}
            className="input-field mt-4 min-h-[200px] resize-y text-sm"
            maxLength={MAX_JD_CHARS}
            aria-label="Job description"
          />
          <p className="mt-1 text-right text-xs text-slate-400">
            {jobDescription.length} / {MAX_JD_CHARS}
          </p>
          {hasJd ? (
            <p className="mt-2 text-xs font-medium text-emerald-700">
              ✓ Job description added
            </p>
          ) : null}
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 to-white p-5 sm:p-6">
        <StepBadge n={3} label="Analyze match" />
        <p className="mt-2 text-sm text-slate-600">
          Get overall match score, ATS compatibility, missing and found keywords,
          skill gaps, and priority fixes.
        </p>
        {analyzeError ? (
          <div className="mt-4">
            <ErrorAlert>{analyzeError}</ErrorAlert>
          </div>
        ) : null}
        <Button
          className="mt-4 h-12 w-full text-base shadow-sm sm:w-auto sm:px-10"
          onClick={() => void runAnalysis()}
          disabled={analyzeLoading || !canAnalyze}
        >
          {analyzeLoading ? (
            <>
              <Spinner className="h-5 w-5 text-white" />
              Analyzing match…
            </>
          ) : (
            "Analyze resume vs job description"
          )}
        </Button>
        {!canAnalyze && !analyzeLoading ? (
          <p className="mt-2 text-xs text-slate-500">
            Complete steps 1 and 2 to run the match analyzer.
          </p>
        ) : null}
        {analyzeLoading ? (
          <div className="mt-4 space-y-2">
            <Skeleton className="h-2 w-full rounded-full" />
            <p className="text-center text-xs text-slate-500">
              Building your match report…
            </p>
          </div>
        ) : null}
      </section>

      {analysis && !analyzeLoading ? (
        <div className="mt-10">
          <ResumeJobMatchResults
            analysis={analysis}
            demoMode={demoMode}
            onRecheck={() => void runAnalysis()}
            recheckLoading={analyzeLoading}
          />
        </div>
      ) : null}
    </div>
  );
}
