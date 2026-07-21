import Link from "next/link";
import { IconQuote } from "@/components/ui/Icons";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Three outcome-focused success stories — compact social proof for homepage authority. */
const STORIES = [
  {
    quote:
      "Score went from 51 to 88 after fixing two-column layout and mirroring job-posting keywords. Got a call within 3 days.",
    name: "Priya N.",
    role: "Data Analyst",
    href: "/resume-score-checker",
  },
  {
    quote:
      "I'd been applying for 6 weeks with zero callbacks. ResumeIQ flagged three keyword gaps I'd never have caught.",
    name: "Jordan M.",
    role: "Product Manager",
    href: "/why-resume-not-getting-interviews",
  },
  {
    quote:
      "I run ResumeIQ on every candidate before I refer them. Cleaner files, fewer parsing surprises.",
    name: "Chris L.",
    role: "Talent Partner",
    href: "/resume-review",
  },
] as const;

export function HomeSuccessStories() {
  return (
    <section
      className="border-b border-slate-200/70 bg-gradient-to-b from-emerald-50/40 to-white py-14 sm:py-16"
      aria-labelledby="success-stories-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Success stories</p>
          <h2
            id="success-stories-heading"
            className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            What changes after a real ATS check
          </h2>
          <p className="mt-3 text-slate-600">
            Patterns from job seekers and recruiters—not paid endorsements. Verify on your file with
            the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free checker
            </Link>
            .
          </p>
        </div>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {STORIES.map((s) => (
            <li key={s.name}>
              <figure className="card-elevated flex h-full flex-col p-6">
                <IconQuote className="h-7 w-7 text-emerald-500/40" aria-hidden />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-slate-100 pt-4">
                  <span className="block text-sm font-semibold text-slate-900">{s.name}</span>
                  <span className="block text-xs text-slate-500">{s.role}</span>
                  <Link
                    href={s.href}
                    className="mt-2 inline-block text-xs font-semibold text-[#16a34a] underline"
                  >
                    Related guide →
                  </Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
