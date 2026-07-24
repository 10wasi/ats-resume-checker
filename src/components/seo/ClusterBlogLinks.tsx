import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const CLUSTER = [
  { href: "/", label: "Free ATS Resume Checker" },
  { href: "/free-ats-resume-checker", label: "Free ATS Guide" },
  { href: "/ats-resume-checker-online", label: "Checker Online" },
  { href: "/resume-keyword-checker", label: "Keyword Checker" },
  { href: "/ats-score-checker", label: "ATS Score" },
  { href: "/resume-analyzer", label: "Resume Analyzer" },
  { href: RESUME_CHECKER_PATH, label: "Run Checker" },
  { href: "/resume-optimization", label: "Optimization" },
  { href: "/blog", label: "Career Blog" },
] as const;

/** Blog → homepage → cluster service pages internal link strip. */
export function ClusterBlogLinks() {
  return (
    <nav
      className="not-prose mt-10 rounded-2xl border border-emerald-200/80 bg-emerald-50/40 px-5 py-4"
      aria-label="ATS resume checker resources"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
        Free ATS resume checker workflow
      </p>
      <p className="mt-1 text-sm text-slate-600">
        Start on the homepage, run the checker, then use cluster guides for keywords, score, and parser
        tests.
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {CLUSTER.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 hover:border-emerald-300 hover:text-[#16a34a]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
