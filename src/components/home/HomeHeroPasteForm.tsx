"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { saveHeroResumeDraft } from "@/lib/client/hero-resume-draft";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function HomeHeroPasteForm() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [showPaste, setShowPaste] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      saveHeroResumeDraft(trimmed);
    }
    router.push(RESUME_CHECKER_PATH);
  }

  return (
    <div className="mx-auto mt-5 max-w-md">
      <Link
        href={RESUME_CHECKER_PATH}
        className="btn-gradient flex h-[3.25rem] w-full items-center justify-center text-base font-semibold shadow-md sm:h-14 sm:text-lg"
      >
        Check my resume free
      </Link>
      <p className="mt-2 text-center text-xs text-slate-500">
        PDF · DOCX · Results in 2 min · Not stored
      </p>

      <button
        type="button"
        onClick={() => setShowPaste((v) => !v)}
        className="mt-2 w-full text-xs font-semibold text-slate-500 underline underline-offset-2 hover:text-[#16a34a]"
        aria-expanded={showPaste}
      >
        {showPaste ? "Hide paste option" : "Paste text instead"}
      </button>

      {showPaste ? (
        <form onSubmit={handleSubmit} className="mt-3 text-left">
          <label htmlFor="hero-resume-paste" className="sr-only">
            Paste resume text
          </label>
          <textarea
            id="hero-resume-paste"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste resume text…"
            rows={3}
            className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm leading-relaxed text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
          />
          <button
            type="submit"
            className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300"
          >
            Run ATS score checker
          </button>
        </form>
      ) : null}
    </div>
  );
}
