import Link from "next/link";
import { ATS_LANDING_RELATED_POSTS } from "@/lib/seo/ats-landing";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Single-page SEO copy for /resume-checker (one H1; supporting H2s only here). */
export function ResumeCheckerSeoIntro() {
  return (
    <section
      className="mx-auto w-full max-w-[1600px] border-b border-zinc-200/90 bg-white px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-8"
      aria-labelledby="resume-ats-heading"
    >
      <h1
        id="resume-ats-heading"
        className="max-w-4xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
      >
        Resume ATS Checker
      </h1>
      <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
        Upload or paste your résumé for an{" "}
        <strong className="font-semibold text-slate-800">ATS-style score</strong>{" "}
        (0–100), strengths and gaps, and actionable suggestions — optional job
        posting for keyword match. Same analysis flow, one place.
      </p>

      <h2 className="mt-10 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        How it works
      </h2>
      <ol className="mt-3 max-w-3xl list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        <li>
          <strong className="text-slate-800">Add your resume</strong> — PDF,
          DOCX, or paste text. We show extractable text so you know what parsers
          see.
        </li>
        <li>
          <strong className="text-slate-800">Optional job description</strong>{" "}
          — paste a posting for stronger keyword and fit signals.
        </li>
        <li>
          <strong className="text-slate-800">Improve your resume</strong> — run
          the check, read score, strengths, weaknesses, and fixes, then edit and
          run again.
        </li>
      </ol>

      <h2 className="mt-10 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        Improve your resume tips
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
        After edits on this page, open a guide and come back to{" "}
        <Link
          href={RESUME_CHECKER_PATH}
          className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a]"
        >
          re-check your resume
        </Link>
        .
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:max-w-4xl">
        {ATS_LANDING_RELATED_POSTS.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/blog/${slug}`}
              className="text-sm font-medium text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a] sm:text-base"
            >
              {title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 sm:text-base"
          >
            All career &amp; resume articles →
          </Link>
        </li>
      </ul>
    </section>
  );
}
