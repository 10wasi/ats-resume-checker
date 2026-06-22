"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { saveHeroResumeDraft } from "@/lib/client/hero-resume-draft";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function HomeHeroPasteForm() {
  const router = useRouter();
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      saveHeroResumeDraft(trimmed);
    }
    router.push(RESUME_CHECKER_PATH);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl text-left">
      <label htmlFor="hero-resume-paste" className="sr-only">
        Paste resume text
      </label>
      <textarea
        id="hero-resume-paste"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste resume text here—or upload PDF on the next screen…"
        rows={4}
        className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base leading-relaxed text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 sm:text-sm"
      />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-gradient w-full px-8 text-base sm:w-auto"
        >
          Check resume score free
        </button>
        <Link
          href={RESUME_CHECKER_PATH}
          className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 sm:w-auto sm:h-11"
        >
          Upload PDF instead
        </Link>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500 sm:text-left">
        Free · No signup · Resume review &amp; match tools included
      </p>
    </form>
  );
}
