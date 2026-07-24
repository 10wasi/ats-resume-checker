import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const CLUSTER_PAGES = [
  { href: "/free-ats-resume-checker", label: "Free ATS Resume Checker", desc: "Primary free scan" },
  { href: "/ats-resume-checker-online", label: "ATS Checker Online", desc: "Browser-based scan" },
  { href: "/resume-keyword-checker", label: "Keyword Checker", desc: "Missing ATS terms" },
  { href: "/ats-score-checker", label: "ATS Score Checker", desc: "Compatibility %" },
  { href: "/resume-analyzer", label: "Resume Analyzer", desc: "Section-level AI review" },
  { href: "/resume-parser", label: "Resume Parser", desc: "What ATS reads" },
  { href: "/resume-optimization", label: "Resume Optimization", desc: "Full improvement plan" },
] as const;

/** Homepage cluster hub — topical authority internal links. */
export function HomeClusterSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-14 sm:py-16"
      aria-labelledby="cluster-hub-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">ATS resume checker cluster</p>
          <h2
            id="cluster-hub-heading"
            className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            Free AI resume checker guides — score, parser &amp; keywords
          </h2>
          <p className="mt-3 text-slate-600">
            Each guide targets one search intent: online scan, keyword checker, ATS score, resume
            analyzer, parser test, and optimization—then links back to the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              live checker tool
            </Link>
            .
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CLUSTER_PAGES.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition hover:border-emerald-300 hover:bg-white"
              >
                <span className="font-display font-bold text-slate-900">{p.label}</span>
                <span className="mt-1 text-sm text-slate-600">{p.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
