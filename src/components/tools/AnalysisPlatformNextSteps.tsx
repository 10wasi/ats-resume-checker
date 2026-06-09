import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = {
  variant?: "match" | "checker";
};

export function AnalysisPlatformNextSteps({ variant = "match" }: Props) {
  const steps =
    variant === "match"
      ? [
          {
            n: 1,
            title: "Fix priority gaps",
            body: "Add honest missing keywords to recent experience bullets.",
          },
          {
            n: 2,
            title: "Run full ATS check",
            body: "Get AI rewrites, improvement plan, and PDF export.",
            href: RESUME_CHECKER_PATH,
          },
          {
            n: 3,
            title: "Re-match & apply",
            body: "Re-analyze, then upload the exact PDF you tested.",
            href: "/resume-job-description-match",
          },
        ]
      : [
          {
            n: 1,
            title: "Apply top fixes",
            body: "Start with format flags, then keyword proof in bullets.",
          },
          {
            n: 2,
            title: "Match to posting",
            body: "Paste the job description for resume match score.",
            href: "/resume-job-description-match",
          },
          {
            n: 3,
            title: "Final QA",
            body: "Use the ATS checklist before you submit.",
            href: "/ats-resume-checklist-2026",
          },
        ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 sm:p-6">
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
        Your workflow
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-slate-900">
        Clear next steps after analysis
      </h3>
      <ol className="mt-5 space-y-4">
        {steps.map((step) => (
          <li key={step.n} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
              {step.n}
            </span>
            <div>
              {step.href ? (
                <Link
                  href={step.href}
                  className="text-sm font-semibold text-[#16a34a] hover:underline"
                >
                  {step.title} →
                </Link>
              ) : (
                <p className="text-sm font-semibold text-slate-900">{step.title}</p>
              )}
              <p className="mt-0.5 text-sm text-slate-600">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-xs text-slate-500">
        Learn what scores mean in our{" "}
        <Link href="/ats-score-explained" className="font-semibold text-[#16a34a] underline">
          ATS score guide
        </Link>
        .
      </p>
    </section>
  );
}
