"use client";

import dynamic from "next/dynamic";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import { scoreRequestKey } from "@/lib/client/cache-key";
import { Button } from "@/components/ui/Button";
import { IconUpload } from "@/components/ui/Icons";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { Skeleton } from "@/components/ui/Skeleton";
import { ReportSkeleton } from "./ReportSkeleton";

const AtsAnalysisResults = dynamic(
  () =>
    import("./AtsAnalysisResults").then((m) => ({
      default: m.AtsAnalysisResults,
    })),
  { loading: () => <ReportSkeleton />, ssr: false }
);

const MAX_JD_CHARS = 12_000;

type ExtractResponse = {
  text: string;
  fileName: string;
};

type ErrorResponse = {
  error: string;
  code?: string;
};

type ScoreCacheEntry = {
  analysis: AtsAnalysisResult;
  demoMode: boolean;
};

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

function AnalyzeLoadingBar() {
  return (
    <div
      className="w-full overflow-hidden rounded-full bg-slate-200"
      role="progressbar"
      aria-label="Calculating score"
    >
      <div className="h-2 w-1/3 rounded-full bg-slate-700 animate-score-loading" />
    </div>
  );
}

function rememberScoreCache(
  map: Map<string, ScoreCacheEntry>,
  key: string,
  entry: ScoreCacheEntry,
  maxEntries = 8
) {
  map.set(key, entry);
  while (map.size > maxEntries) {
    const first = map.keys().next().value;
    if (first === undefined) break;
    map.delete(first);
  }
}

export function ResumeCheckerPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ExtractResponse | null>(null);
  const [extractError, setExtractError] = useState<string | null>(null);
  const [analyzeError, setAnalyzeError] = useState<string | null>(null);
  const [extractLoading, setExtractLoading] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [jobPostingOpen, setJobPostingOpen] = useState(true);
  const [analysis, setAnalysis] = useState<AtsAnalysisResult | null>(null);
  const [demoMode, setDemoMode] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(true);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [pasteText, setPasteText] = useState("");

  const scoreCache = useRef(new Map<string, ScoreCacheEntry>());
  const extractInFlight = useRef(false);
  const analyzeInFlight = useRef(false);

  const clearScoreCache = useCallback(() => {
    scoreCache.current.clear();
  }, []);

  const assignFile = useCallback(
    (f: File | null) => {
      if (f && !isAllowedFile(f)) {
        setExtractError("Use a PDF or Word (.docx) file.");
        setFile(null);
        setPasteText("");
        setResult(null);
        setAnalysis(null);
        setAnalyzeError(null);
        setDemoMode(false);
        clearScoreCache();
        setFileInputKey((k) => k + 1);
        return;
      }
      setFile(f);
      setPasteText("");
      setResult(null);
      setAnalysis(null);
      setExtractError(null);
      setAnalyzeError(null);
      setDemoMode(false);
      clearScoreCache();
    },
    [clearScoreCache]
  );

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      assignFile(e.target.files?.[0] ?? null);
    },
    [assignFile]
  );

  const extract = useCallback(async () => {
    if (!file || extractInFlight.current) return;
    extractInFlight.current = true;
    setExtractLoading(true);
    setExtractError(null);
    setAnalyzeError(null);
    setResult(null);
    setAnalysis(null);
    setDemoMode(false);
    clearScoreCache();
    setPreviewOpen(true);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/extract-resume", {
        method: "POST",
        body,
      });
      let data: ExtractResponse & ErrorResponse;
      try {
        data = (await res.json()) as ExtractResponse & ErrorResponse;
      } catch {
        setExtractError("Something went wrong. Please try again.");
        setFileInputKey((k) => k + 1);
        return;
      }
      if (!res.ok) {
        setExtractError(
          data.error ?? "Could not read this file. Try another export."
        );
        setFileInputKey((k) => k + 1);
        return;
      }
      setResult({ text: data.text, fileName: data.fileName });
    } catch {
      setExtractError("Connection problem. Check your network and retry.");
      setFileInputKey((k) => k + 1);
    } finally {
      setExtractLoading(false);
      extractInFlight.current = false;
    }
  }, [file, clearScoreCache]);

  const runAnalysis = useCallback(async () => {
    if (!result?.text?.trim()) {
      setAnalyzeError("Extract your resume text first.");
      return;
    }
    if (analyzeInFlight.current) return;

    const jdNorm = jobDescription.trim();
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
    setDemoMode(false);

    try {
      const res = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: result.text,
          jobDescription: jdNorm || undefined,
        }),
      });

      let data: {
        analysis?: AtsAnalysisResult;
        demoMode?: boolean;
        error?: string;
        code?: string;
      };

      try {
        data = (await res.json()) as typeof data;
      } catch {
        setAnalyzeError("Could not load results. Please try again.");
        return;
      }

      if (!res.ok) {
        setAnalyzeError(
          data.error ?? "Something went wrong. Please try again."
        );
        return;
      }

      if (!data.analysis) {
        setAnalyzeError("No report returned. Please try again.");
        return;
      }

      setAnalysis(data.analysis);
      const isDemo = Boolean(data.demoMode);
      setDemoMode(isDemo);
      rememberScoreCache(scoreCache.current, cacheKey, {
        analysis: data.analysis,
        demoMode: isDemo,
      });
    } catch {
      setAnalyzeError("Connection problem. Please try again.");
    } finally {
      setAnalyzeLoading(false);
      analyzeInFlight.current = false;
    }
  }, [result, jobDescription]);

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dropped = e.dataTransfer.files?.[0];
    assignFile(dropped ?? null);
  };

  const hasExtractedText = useMemo(
    () => Boolean(result?.text?.trim()),
    [result?.text]
  );

  const showJobMatch = useMemo(
    () => jobDescription.trim().length > 0,
    [jobDescription]
  );

  const previewText = useMemo(() => {
    if (!result) return "";
    return (
      result.text ||
      "(No selectable text found. Re-export from Word or Google Docs.)"
    );
  }, [result]);

  return (
    <div className="dash-page">
      <div className="flex w-full flex-col gap-6">
        <section className="dash-card dash-card-hover p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-slate-900">
              Upload resume
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              PDF or Word. Maximum size 10 MB.
            </p>
            <div className="mt-4">
              <label
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onDrop}
                htmlFor="resume-file"
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 transition duration-200 ${
                  dragActive
                    ? "border-slate-400 bg-slate-50 scale-[1.01]"
                    : "border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200">
                  <IconUpload className="h-5 w-5" />
                </div>
                <span className="mt-3 text-sm font-medium text-slate-800">
                  {dragActive ? "Drop file here" : "Drop or browse"}
                </span>
                <span className="mt-1 text-xs text-slate-500">PDF · DOCX</span>
                <input
                  key={fileInputKey}
                  id="resume-file"
                  type="file"
                  accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="sr-only"
                  onChange={onFileChange}
                />
              </label>
              {file ? (
                <p className="mt-3 text-xs text-slate-600">
                  <span className="font-medium text-slate-800">{file.name}</span>
                  <span className="text-slate-400">
                    {" "}
                    · {(file.size / 1024).toFixed(0)} KB
                  </span>
                </p>
              ) : null}
            </div>
            {extractError ? (
              <div className="mt-3">
                <ErrorAlert>{extractError}</ErrorAlert>
              </div>
            ) : null}
            <Button
              variant="secondary"
              className="mt-4 h-11 w-full text-sm"
              onClick={extract}
              disabled={extractLoading || !file}
            >
              {extractLoading ? (
                <>
                  <Spinner className="h-4 w-4" />
                  Extracting…
                </>
              ) : (
                "Extract text"
              )}
            </Button>
          </section>

          <section className="dash-card dash-card-hover p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-slate-900">
              Or paste resume text
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Skip upload — drop plain text from Google Docs or a text file.
            </p>
            <textarea
              value={pasteText}
              onChange={(e) => setPasteText(e.target.value.slice(0, 24_000))}
              placeholder="Paste your full resume here…"
              rows={5}
              className="input-field mt-3 min-h-[120px] resize-y text-sm"
              aria-label="Pasted resume text"
            />
            <Button
              variant="secondary"
              className="mt-3 h-10 w-full text-sm"
              onClick={() => {
                const t = pasteText.trim();
                if (!t) {
                  setExtractError("Paste some resume text first.");
                  return;
                }
                setExtractError(null);
                setFile(null);
                setFileInputKey((k) => k + 1);
                setResult({ text: t, fileName: "Pasted resume" });
                setAnalysis(null);
                setDemoMode(false);
                clearScoreCache();
                setPreviewOpen(true);
              }}
            >
              Use pasted text for scoring
            </Button>
          </section>

          <section className="dash-card flex min-h-[220px] flex-col p-5 sm:p-6">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Parsed preview
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {result ? result.fileName : "Run extract to view text."}
                </p>
              </div>
              {result && !extractLoading ? (
                <button
                  type="button"
                  onClick={() => setPreviewOpen((o) => !o)}
                  className="text-xs font-medium text-slate-500 transition hover:text-slate-800"
                >
                  {previewOpen ? "Hide" : "Show"}
                </button>
              ) : null}
            </div>
            {extractLoading ? (
              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 max-w-[94%]" />
                <Skeleton className="h-4 max-w-[80%]" />
              </div>
            ) : !result ? (
              <div className="mt-6 flex flex-1 items-center justify-center rounded-lg border border-dashed border-slate-200 py-10 text-center">
                <p className="text-sm text-slate-400">No preview yet</p>
              </div>
            ) : previewOpen ? (
              <div className="mt-4 max-h-[280px] overflow-auto rounded-lg border border-slate-200 bg-slate-900">
                <pre className="p-3 text-left text-xs leading-relaxed text-slate-100 whitespace-pre-wrap">
                  {previewText}
                </pre>
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-500">Preview hidden.</p>
            )}
          </section>

          <p className="text-xs leading-relaxed text-slate-400">
            Use documents with selectable text. Scanned PDFs may parse poorly.
          </p>

        {!hasExtractedText ? (
          <div className="dash-card flex min-h-[280px] flex-col items-center justify-center p-10 text-center">
            <p className="max-w-sm text-sm text-slate-500">
              Upload a résumé and extract text to see your free ATS resume score
              and full report.
            </p>
          </div>
        ) : (
          <>
            <section className="dash-card dash-card-hover space-y-5 p-5 sm:p-6">
                <div>
                  <h2 className="font-display text-base font-semibold text-slate-900">
                    Job description (optional)
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Paste a posting for stronger keyword match and posting
                    alignment scores.
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setJobPostingOpen((v) => !v)}
                    className="flex w-full items-center justify-between bg-slate-50/80 px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                  >
                    <span>Posting text</span>
                    <span className="text-slate-400" aria-hidden>
                      {jobPostingOpen ? "−" : "+"}
                    </span>
                  </button>
                  {jobPostingOpen ? (
                    <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-3">
                      <textarea
                        value={jobDescription}
                        onChange={(e) =>
                          setJobDescription(
                            e.target.value.slice(0, MAX_JD_CHARS)
                          )
                        }
                        placeholder="Paste the listing or the responsibilities section…"
                        rows={4}
                        className="input-field min-h-[100px] resize-y"
                        maxLength={MAX_JD_CHARS}
                        aria-label="Job posting text"
                      />
                      <p className="mt-1 text-right text-xs text-slate-400">
                        {jobDescription.length} / {MAX_JD_CHARS}
                      </p>
                    </div>
                  ) : null}
                </div>

                {analyzeError ? <ErrorAlert>{analyzeError}</ErrorAlert> : null}

                <Button
                  className="h-12 w-full text-sm shadow-sm"
                  onClick={runAnalysis}
                  disabled={analyzeLoading}
                >
                  {analyzeLoading ? (
                    <>
                      <Spinner className="h-5 w-5 text-white" />
                      Analyzing…
                    </>
                  ) : (
                    "Improve Your Resume"
                  )}
                </Button>

                {analyzeLoading ? (
                  <div className="space-y-2">
                    <AnalyzeLoadingBar />
                    <p className="text-center text-xs text-slate-500">
                      Usually under a minute.
                    </p>
                  </div>
                ) : null}
              </section>

              {analysis && !analyzeLoading ? (
                <div className="w-full">
                  <AtsAnalysisResults
                    analysis={analysis}
                    showJobMatch={showJobMatch}
                    demoMode={demoMode}
                    sourceFileName={result?.fileName}
                    variant="dashboard"
                    onRecheck={() => void runAnalysis()}
                    recheckLoading={analyzeLoading}
                    recheckDisabled={analyzeLoading || !hasExtractedText}
                  />
                </div>
              ) : null}
            </>
          )}
      </div>
    </div>
  );
}
