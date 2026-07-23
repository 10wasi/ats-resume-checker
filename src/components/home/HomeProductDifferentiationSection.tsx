import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Honest feature comparison — highlights built-in value vs common competitors. */
export function HomeProductDifferentiationSection() {
  const features = [
    {
      title: "Resume vs job match",
      body: "Paste any job description—get match %, missing keywords, and skill gaps in the same checker session.",
      href: "/resume-job-description-match",
    },
    {
      title: "Missing keywords detection",
      body: "See which posting terms are absent from your bullets—not buried behind a subscription wall.",
      href: "/resume-keywords",
    },
    {
      title: "Improvement checklist",
      body: "Ordered quick-fix list after every scan—format first, then keywords, then bullets.",
      href: RESUME_CHECKER_PATH,
    },
    {
      title: "Skills analysis",
      body: "Detected skills vs gaps when you attach a JD—honest proof, not keyword stuffing.",
      href: "/resume-skills-analyzer",
    },
    {
      title: "Summary feedback",
      body: "Section commentary plus AI-improved summary lines you can edit and defend.",
      href: RESUME_CHECKER_PATH,
    },
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="product-diff-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Why ResumeIQ</p>
          <h2
            id="product-diff-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Resume optimization features—free at the core
          </h2>
          <p className="mt-4 text-slate-600">
            Jobscan, Resume Worded, and similar tools often gate keyword and match insights. ResumeIQ
            bundles the highest-value checks into one free{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              resume checker
            </Link>{" "}
            workflow.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title}>
              <Link
                href={f.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/40 p-6 transition hover:border-emerald-300 hover:bg-white hover:shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">Learn more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
