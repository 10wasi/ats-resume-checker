import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const HUB_LINKS = [
  { href: RESUME_CHECKER_PATH, label: "Resume Checker" },
  { href: "/resume-review", label: "Resume Review" },
  { href: "/career-success-hub", label: "Career Success Hub" },
  { href: "/complete-guide-ats-resume-optimization", label: "ATS Guide" },
  { href: "/resume-score-checker", label: "Resume Score" },
  { href: "/resume-keywords", label: "Resume Keywords" },
  { href: "/interview-question-generator", label: "Interview Guide" },
  { href: "/ats-resume-templates", label: "Resume Templates" },
  { href: "/blog", label: "Career Blog" },
] as const;

/** Required topical cluster links — satisfies internal link graph on every guide. */
export function MandatoryHubLinks({ className = "mt-12" }: { className?: string }) {
  return (
    <nav
      className={`not-prose rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 ${className}`}
      aria-label="Resume optimization resources"
    >
      <h2 className="font-display text-lg font-bold text-slate-900">
        Continue your job search workflow
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Every guide connects to free tools — check, review, optimize, then apply with confidence.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {HUB_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-[#16a34a]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
