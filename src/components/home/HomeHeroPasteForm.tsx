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
    <div className="mx-auto mt-6 max-w-xl">
      <Link
        href={RESUME_CHECKER_PATH}
        className="btn-gradient flex h-14 w-full items-center justify-center text-base font-semibold sm:text-lg"
      >
        Upload resume — get ATS score free
      </Link>

      <button
        type="button"
        onClick={() => setShowPaste((v) => !v)}
        className="mt-3 w-full text-sm font-semibold text-slate-600 underline underline-offset-2 hover:text-[#16a34a]"
        aria-expanded={showPaste}
      >
        {showPaste ? "Hide paste option" : "Or paste resume text instead"}
      </button>

      {showPaste ? (
        <form onSubmit={handleSubmit} className="mt-4 text-left">
          <label htmlFor="hero-resume-paste" className="sr-only">
            Paste resume text
          </label>
          <textarea
            id="hero-resume-paste"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste resume text here…"
            rows={3}
            className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
          />
          <button
            type="submit"
            className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 sm:w-auto"
          >
            Run resume score checker
          </button>
        </form>
      ) : null}
    </div>
  );
}
