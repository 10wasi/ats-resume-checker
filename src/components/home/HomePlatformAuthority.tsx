import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const STATS = [
  { value: "Free", label: "First ATS check — no signup required" },
  { value: "30+", label: "ATS guides, tools & checklists" },
  { value: "10", label: "Profession keyword libraries" },
  { value: "2 min", label: "Typical time to score & see fixes" },
] as const;

const RESOURCE_PILLARS = [
  {
    title: "Resume Templates",
    desc: "ATS-safe layouts, fonts, and section order.",
    href: "/ats-resume-templates",
  },
  {
    title: "Career Guides",
    desc: "Optimization workflow from score to apply.",
    href: "/career-success-hub",
  },
  {
    title: "Interview Guides",
    desc: "Role-specific questions and STAR prep.",
    href: "/interview-question-generator",
  },
  {
    title: "ATS Guide",
    desc: "How parsers read PDFs and filter keywords.",
    href: "/complete-guide-ats-resume-optimization",
  },
  {
    title: "Resume Review",
    desc: "Recruiter rubric + section-level fixes.",
    href: "/resume-review",
  },
  {
    title: "Resume Examples",
    desc: "Before/after bullets by role.",
    href: "/resume-examples",
  },
] as const;

/** Platform stats + resource pillars — authority signals without inflated metrics. */
export function HomePlatformAuthority() {
  return (
    <>
      <section
        className="border-b border-slate-200/70 bg-slate-950 py-12 text-white sm:py-14"
        aria-labelledby="home-stats-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-stats-heading" className="sr-only">
            Platform at a glance
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-2xl font-bold text-emerald-400 sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-200/70 bg-slate-50/60 py-14 sm:py-16"
        aria-labelledby="home-resources-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow mx-auto">Resource hub</p>
            <h2
              id="home-resources-heading"
              className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              Templates, guides &amp; review — beyond the checker
            </h2>
            <p className="mt-3 text-slate-600">
              Page-one candidates combine the{" "}
              <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
                ATS resume checker
              </Link>{" "}
              with templates, career guides, and honest review.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCE_PILLARS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
                >
                  <h3 className="font-display text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{item.desc}</p>
                  <span className="mt-3 text-sm font-semibold text-[#16a34a]">Open →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
