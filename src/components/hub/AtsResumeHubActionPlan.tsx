import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const STEPS = [
  {
    title: "Run the ATS Resume Checker",
    detail:
      "Upload your export and paste one target job description. Note match score, ATS compatibility, and top flags.",
    href: RESUME_CHECKER_PATH,
  },
  {
    title: "Pass the copy-paste test",
    detail:
      "PDF → Notepad. If order scrambles, fix ATS resume format before keywords.",
    href: "/blog/best-ats-resume-format-2026-templates-tips",
  },
  {
    title: "Complete the ATS resume checklist",
    detail:
      "Tick format, contact block, headings, and file hygiene before tailoring.",
    href: "/ats-resume-checklist-2026",
  },
  {
    title: "Close keyword gaps",
    detail:
      "Add missing ATS resume keywords to recent bullets with honest proof—not stuffing.",
    href: "/resume-job-description-match",
  },
  {
    title: "Study ATS resume examples",
    detail:
      "Mirror structure and bullet patterns from layouts that parse cleanly.",
    href: "/ats-resume-examples",
  },
  {
    title: "Re-check and apply",
    detail:
      "Re-run analysis on the exact file you will upload. Save with a dated filename.",
    href: RESUME_CHECKER_PATH,
  },
];

export function AtsResumeHubActionPlan() {
  return (
    <section
      id="final-ats-action-plan"
      className="not-prose scroll-mt-24 rounded-2xl border border-slate-900/10 bg-slate-950 p-6 text-white shadow-soft-lg sm:p-10"
      aria-labelledby="action-plan-heading"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
        Section 9
      </p>
      <h2
        id="action-plan-heading"
        className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl"
      >
        Final ATS Action Plan
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
        One focused session—under an hour—for resume optimization you can measure.
        Work top to bottom; skip steps only if your checker report says you are
        already green.
      </p>
      <ol className="mt-8 space-y-4">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold">
              {i + 1}
            </span>
            <div>
              <Link
                href={step.href}
                className="text-sm font-semibold text-white underline decoration-emerald-500/50 underline-offset-2 hover:text-emerald-300"
              >
                {step.title}
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-7 text-center text-sm">
          Start with ATS Resume Checker
        </Link>
        <Link
          href="/ai-resume-rewrite"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-700 px-7 text-sm font-semibold text-white hover:border-slate-500"
        >
          AI resume rewrite guide
        </Link>
      </div>
    </section>
  );
}
