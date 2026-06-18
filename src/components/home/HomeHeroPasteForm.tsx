"use client";

import { useRouter } from "next/navigation";
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
        className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
      />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-gradient px-8 text-base">
          Check Resume Score
        </button>
        <p className="text-xs text-slate-500">
          Free · No signup · Used by job seekers worldwide
        </p>
      </div>
    </form>
  );
}
