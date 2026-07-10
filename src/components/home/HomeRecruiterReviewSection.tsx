import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const cards = [
  {
    icon: "📝",
    issue: "Weak Summary",
    problem: "Opening paragraph lists personality traits instead of role-relevant proof.",
    impact: "Recruiter skips to Experience in 2 seconds. Summary section wasted.",
    solution: "Lead with role title, years, one standout metric, and two tools you use daily.",
    exampleBefore: '"Passionate professional with excellent communication skills and a positive attitude."',
    exampleAfter: '"Backend Engineer, 5 years. Built APIs serving 3M req/day. Node.js, PostgreSQL, AWS."',
  },
  {
    icon: "🔑",
    issue: "Missing Keywords",
    problem: "Resume describes the work without using the posting's exact terminology.",
    impact: "ATS ranks the application below candidates who mirrored the job description language.",
    solution: "Paste the job post into the Keywords Finder. Add missing terms inside bullets—with proof.",
    exampleBefore: '"Managed team projects using project management tools."',
    exampleAfter: '"Led 4 Jira-tracked sprints across 8 engineers using Agile/Scrum methodology."',
  },
  {
    icon: "📊",
    issue: "No Metrics",
    problem: "Bullets describe responsibilities using passive language and zero numbers.",
    impact: "Recruiter cannot gauge impact. Application blends into the stack.",
    solution: "Add scope, volume, or outcome to every major bullet. Estimate if exact numbers aren't available.",
    exampleBefore: '"Responsible for managing social media accounts for the company."',
    exampleAfter: '"Grew LinkedIn page from 2K to 18K followers in 9 months; drove 4,200 site visits/month."',
  },
  {
    icon: "🗂",
    issue: "Poor Formatting",
    problem: "Two-column layout or tables used for skills and contact block.",
    impact: "ATS extracts text in wrong order. Skills appear where experience should be. Score drops.",
    solution: "Use single-column layout. Contact info in body. Standard section labels: Experience, Skills, Education.",
    exampleBefore: "Two-column Canva template with skills in icon sidebar.",
    exampleAfter: "Single-column Word/Google Docs export — all text in correct top-to-bottom order.",
  },
  {
    icon: "💬",
    issue: "Passive Language",
    problem: 'Bullets start with "Responsible for," "Helped with," or "Assisted in."',
    impact: "Signals ownership uncertainty. Recruiter cannot tell if you led or supported.",
    solution: "Start every bullet with a strong action verb: Built, Led, Reduced, Launched, Automated.",
    exampleBefore: '"Assisted with the development of the new customer portal."',
    exampleAfter: '"Built customer portal in React reducing support ticket volume by 34%."',
  },
  {
    icon: "🏆",
    issue: "Weak Achievements",
    problem: "Work history lists duties and job titles without any business outcome.",
    impact: "Application appears generic. Hiring manager has no reason to shortlist over other candidates.",
    solution: "Pick your top 3 wins per role. Rewrite each as: [Action] + [Tool/Scope] + [Result].",
    exampleBefore: '"Worked on data projects and created reports for management."',
    exampleAfter: '"Built Tableau dashboards used by 3 VPs; reduced monthly close from 4 days to 1."',
  },
];

export function HomeRecruiterReviewSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/60 py-20 sm:py-24"
      aria-labelledby="recruiter-review-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Recruiter perspective</p>
          <h2
            id="recruiter-review-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            What recruiters see in your resume — and why they pass
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Six patterns that cause qualified candidates to be skipped. Each one is fixable before you apply.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.issue}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg" aria-hidden>
                  {c.icon}
                </span>
                <h3 className="font-display font-bold text-slate-900">{c.issue}</h3>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Problem</p>
                  <p className="mt-1 leading-relaxed text-slate-700">{c.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-rose-500">Impact</p>
                  <p className="mt-1 leading-relaxed text-slate-700">{c.impact}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Fix</p>
                  <p className="mt-1 leading-relaxed text-slate-700">{c.solution}</p>
                </div>
              </div>

              <div className="mt-5 space-y-2 rounded-xl border border-slate-100 bg-slate-50/80 p-4 text-xs">
                <p className="rounded-lg bg-red-50 px-3 py-2 leading-relaxed text-slate-600 ring-1 ring-red-100">
                  <span className="font-semibold text-red-600">Before: </span>
                  {c.exampleBefore}
                </p>
                <p className="rounded-lg bg-emerald-50 px-3 py-2 leading-relaxed text-slate-600 ring-1 ring-emerald-100">
                  <span className="font-semibold text-emerald-700">After: </span>
                  {c.exampleAfter}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center sm:p-8">
          <p className="font-display text-xl font-bold text-slate-900">
            Find every issue above in your own resume — free
          </p>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            Our ATS checker detects weak summaries, missing keywords, passive language, and formatting failures in under 2 minutes.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-5 inline-flex px-8 text-base">
            Analyze my resume free
          </Link>
          <p className="mt-3 text-sm text-slate-500">No signup · PDF or paste text · Instant results</p>
        </div>
      </div>
    </section>
  );
}
