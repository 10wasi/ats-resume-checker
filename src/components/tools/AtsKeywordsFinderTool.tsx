"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { extractJdKeywords } from "@/lib/ats/extract-jd-keywords";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const MAX_JD = 12_000;

function CategoryBlock({
  label,
  items,
  onCopy,
}: {
  label: string;
  items: string[];
  onCopy: (text: string) => void;
}) {
  if (items.length === 0) return null;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <button
          type="button"
          onClick={() => onCopy(items.join(", "))}
          className="text-xs font-semibold text-[#16a34a] hover:underline"
        >
          Copy all
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((kw) => (
          <button
            key={kw}
            type="button"
            onClick={() => onCopy(kw)}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-950 transition hover:border-emerald-400"
            title="Click to copy"
          >
            {kw}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AtsKeywordsFinderTool() {
  const [jd, setJd] = useState("");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    if (jd.trim().length < 40) return null;
    return extractJdKeywords(jd);
  }, [jd]);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const allKeywords = result?.keywords.join(", ") ?? "";

  return (
    <div className="not-prose space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <label htmlFor="jd-keywords-input" className="text-sm font-semibold text-slate-900">
          Paste job description
        </label>
        <p className="mt-1 text-sm text-slate-600">
          We extract ATS keywords—technical skills, tools, certifications, and soft
          skills—so you know what to mirror honestly in your resume.
        </p>
        <textarea
          id="jd-keywords-input"
          value={jd}
          onChange={(e) => setJd(e.target.value.slice(0, MAX_JD))}
          rows={10}
          placeholder="Paste the full job posting here…"
          className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        />
        <p className="mt-2 text-xs text-slate-500">
          {jd.length.toLocaleString()} / {MAX_JD.toLocaleString()} characters
        </p>
      </div>

      {copied ? (
        <p className="text-center text-sm font-semibold text-emerald-700">
          Copied to clipboard
        </p>
      ) : null}

      {result && result.keywords.length > 0 ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-900">
              {result.keywords.length} keywords found
            </p>
            <button
              type="button"
              onClick={() => copyText(allKeywords)}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Copy all keywords
            </button>
          </div>
          <CategoryBlock
            label="Technical skills"
            items={result.categories.technical_skills}
            onCopy={copyText}
          />
          <CategoryBlock
            label="Tools & platforms"
            items={result.categories.tools_platforms}
            onCopy={copyText}
          />
          <CategoryBlock
            label="Certifications"
            items={result.categories.certifications}
            onCopy={copyText}
          />
          <CategoryBlock
            label="Soft skills"
            items={result.categories.soft_skills}
            onCopy={copyText}
          />
          <CategoryBlock
            label="Other terms"
            items={result.categories.other}
            onCopy={copyText}
          />
        </div>
      ) : jd.trim().length >= 40 ? (
        <p className="text-sm text-slate-600">
          No strong keyword signals detected—try pasting more of the responsibilities
          section.
        </p>
      ) : null}

      <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/40 p-5 sm:p-6">
        <p className="font-display text-lg font-semibold text-slate-900">
          Next step: check overlap with your resume
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Keywords alone do not get you hired—placement with proof matters. Upload your
          resume and compare match score in our tools.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-5 text-sm">
            ATS Resume Checker
          </Link>
          <Link
            href="/resume-job-description-match"
            className="inline-flex h-10 items-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 hover:border-emerald-300"
          >
            Resume Match Analyzer
          </Link>
        </div>
      </div>
    </div>
  );
}
