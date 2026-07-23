import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { PLATFORM_HUBS } from "@/lib/content/platform-hubs/registry";

/** Homepage — resume optimization platform hubs (not checker-only positioning). */
export function HomePlatformHubsSection() {
  const featured = [
    {
      title: "Resume Checker",
      desc: "Free resume checker online—ATS score, keyword gaps, format flags.",
      href: "/free-resume-checker-online",
    },
    {
      title: "Resume Review",
      desc: "Recruiter rubric + ATS scan in one workflow.",
      href: "/resume-review",
    },
    {
      title: "Resume Match Analyzer",
      desc: "Match score vs any job description.",
      href: "/resume-job-description-match",
    },
    {
      title: "Resume Keywords",
      desc: "Database by profession + finder tools.",
      href: "/resume-keywords",
    },
    {
      title: "Resume Examples",
      desc: "ATS-friendly samples that parse worldwide.",
      href: "/resume-examples",
    },
    {
      title: "ATS Resume Review",
      desc: "Parse health, keywords, readiness report.",
      href: "/ats-resume-review",
    },
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="platform-hubs-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Resume optimization platform</p>
          <h2
            id="platform-hubs-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Resume checker plus match, keywords &amp; examples
          </h2>
          <p className="mt-4 text-slate-600">
            Start with the free{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              resume checker
            </Link>
            , then use match, keywords, and examples to optimize every application.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/40 p-6 transition hover:border-emerald-300 hover:bg-white hover:shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{item.desc}</p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">Open →</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link
            href="/resume-optimization-platform"
            className="text-sm font-semibold text-[#16a34a] underline underline-offset-2"
          >
            All {PLATFORM_HUBS.length} platform hubs + cornerstone guides →
          </Link>
        </p>
        <div className="mt-8 flex justify-center">
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-8">
            Start with free resume checker
          </Link>
        </div>
      </div>
    </section>
  );
}
