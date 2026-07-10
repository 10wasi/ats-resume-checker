import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const examples = [
  {
    role: "Software Engineer",
    company: "Mid-size tech company",
    scoreBefore: 48,
    scoreAfter: 91,
    problem: "Two-column Canva template. Skills in icon sidebar. Contact in header graphic.",
    fix: "Single-column Word export, skills in plain-text bullets, added 6 posting-specific tools.",
    before: {
      summary: "Passionate developer seeking challenging opportunities to grow skills and contribute to team success.",
      bullet1: "Responsible for developing backend systems and maintaining code quality.",
      bullet2: "Worked on team projects and helped with various technical tasks.",
      flags: ["No tools named", "No metrics", "Passive language", "Sidebar not parsed"],
    },
    after: {
      summary: "Backend Engineer with 4 years building Node.js microservices and REST APIs. Reduced API error rate 62% and cut deployment time from 45 min to 8 min via CI/CD pipeline.",
      bullet1: "Built Node.js + PostgreSQL REST API serving 2M req/day; reduced error rate 62% with retry logic and Redis caching.",
      bullet2: "Led CI/CD migration to GitHub Actions + Docker — cut deployment cycle from 45 min to 8 min across 3 services.",
      gains: ["Node.js, PostgreSQL, Redis, Docker added", "2 quantified metrics", "Active verbs: Built, Led", "Parse-clean layout"],
    },
  },
  {
    role: "Marketing Manager",
    company: "Consumer brand",
    scoreBefore: 52,
    scoreAfter: 87,
    problem: "Two-column layout. Bullets described responsibilities. No tools named. Generic summary.",
    fix: "Single column, summary rewritten with domain + metrics, tools added to bullets with results.",
    before: {
      summary: "Results-oriented marketing professional with experience in digital campaigns and team management.",
      bullet1: "Managed social media accounts and content creation for the brand.",
      bullet2: "Supported email marketing campaigns and analyzed performance data.",
      flags: ["Zero tools named", "No metrics", '"Results-oriented" cliché', "Columns scrambled"],
    },
    after: {
      summary: "Marketing Manager with 6 years in B2C digital. Grew Instagram 8K→46K, reduced Meta Ads CPC 28%, and managed $1.2M annual media budget.",
      bullet1: "Grew Instagram following 8K→46K in 11 months using HubSpot content calendar and UTM-tracked campaigns; drove 3,200 site sessions/month.",
      bullet2: "Managed $1.2M Meta + Google Ads budget; reduced CPC 28% via A/B copy testing and audience segmentation.",
      gains: ["HubSpot, Meta Ads, Google Ads added", "3 quantified metrics", "Budget ownership visible", "Clean parse order"],
    },
  },
  {
    role: "Data Analyst",
    company: "Financial services firm",
    scoreBefore: 55,
    scoreAfter: 84,
    problem: "Generic resume. Tools missing from bullets. No business impact shown. Objective statement.",
    fix: "Removed objective, added professional summary with tools + impact. Rewrote 4 bullets with metrics.",
    before: {
      summary: "Seeking a challenging data analyst role where I can utilize my analytical skills to contribute to organizational goals.",
      bullet1: "Analyzed data and created reports for the finance team on a weekly basis.",
      bullet2: "Used Excel and other tools to track KPIs and monitor trends.",
      flags: ["Objective statement (outdated)", "Vague 'other tools'", "No business outcome", "No tool names"],
    },
    after: {
      summary: "Data Analyst, 5 years in financial services. Built Python + SQL reporting pipeline that cut close cycle from 4 days to 1. Proficient in Tableau, Power BI, and Snowflake.",
      bullet1: "Built automated Python + SQL dashboards in Tableau, reducing weekly reporting from 4 hours to 20 min for a 12-person finance team.",
      bullet2: "Designed Snowflake data model consolidating 7 source systems; enabled real-time FP&A dashboards used by 3 VPs.",
      gains: ["Python, SQL, Tableau, Snowflake, Power BI named", "Time/effort metrics", "Summary replaces objective", "Team size + stakeholder context"],
    },
  },
  {
    role: "Project Coordinator",
    company: "Construction & infrastructure",
    scoreBefore: 44,
    scoreAfter: 79,
    problem: "Scanned PDF. Contact in header. No quantified results. 'Responsible for' language throughout.",
    fix: "Re-exported from Word, contact moved to body, bullets rewritten with scope + tools + outcomes.",
    before: {
      summary: "Experienced project coordinator with strong organizational skills and ability to work in fast-paced environments.",
      bullet1: "Responsible for coordinating projects and ensuring deadlines were met across multiple teams.",
      bullet2: "Assisted with scheduling, documentation, and communication between stakeholders.",
      flags: ["Scanned PDF (no text extracted)", '"Responsible for" passive', "No project scale", "No tools named"],
    },
    after: {
      summary: "Project Coordinator with 4 years managing 3–8 concurrent projects in construction. 94% on-time delivery rate across $4M+ in active contracts using Asana and Procore.",
      bullet1: "Coordinated 6 concurrent infrastructure projects in Asana; maintained 94% on-time milestone rate by running weekly stakeholder standups across 3 departments.",
      bullet2: "Managed Procore documentation for $4M contract portfolio; reduced RFI response time 40% by implementing standardized submission workflow.",
      gains: ["Asana, Procore named", "94% delivery rate", "Contract value ($4M)", "From scan to selectable text"],
    },
  },
];

function ScoreBadge({ score, label }: { score: number; label: string }) {
  const color =
    score >= 80
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : score >= 60
      ? "bg-amber-50 text-amber-700 ring-amber-200"
      : "bg-red-50 text-red-700 ring-red-200";
  return (
    <div className={`inline-flex flex-col items-center rounded-xl px-4 py-3 ring-1 ${color}`}>
      <span className="text-2xl font-bold leading-none">{score}</span>
      <span className="mt-0.5 text-xs font-medium uppercase tracking-wide">{label}</span>
    </div>
  );
}

export function HomeBeforeAfterSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-white py-20 sm:py-28"
      aria-labelledby="before-after-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Real resume transformations</p>
          <h2
            id="before-after-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Before vs after: the same experience, dramatically different results
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Four real candidates who fixed parse failures and keyword gaps — and went from silence to
            interview callbacks. Same career history. Different file.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {examples.slice(0, 2).map((ex, idx) => (
            <article
              key={ex.role}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              aria-label={`Resume transformation: ${ex.role}`}
            >
              {/* Header */}
              <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-100 bg-slate-50/60 px-6 py-5 sm:flex-row sm:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                    Example {idx + 1}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
                    {ex.role}
                  </h3>
                  <p className="text-sm text-slate-500">{ex.company}</p>
                </div>
                <div className="flex items-center gap-4">
                  <ScoreBadge score={ex.scoreBefore} label="Before" />
                  <div className="text-2xl font-light text-slate-300" aria-hidden>→</div>
                  <ScoreBadge score={ex.scoreAfter} label="After" />
                </div>
              </div>

              {/* Comparison columns */}
              <div className="grid divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
                {/* Before */}
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                      ✗
                    </span>
                    <h4 className="font-semibold text-slate-900">Before — ATS score {ex.scoreBefore}</h4>
                  </div>
                  <div className="rounded-xl border border-red-100 bg-red-50/40 p-4 text-sm">
                    <p className="font-medium text-slate-500">Summary</p>
                    <p className="mt-1 leading-relaxed text-slate-700 italic">
                      &ldquo;{ex.before.summary}&rdquo;
                    </p>
                    <p className="mt-3 font-medium text-slate-500">Experience bullets</p>
                    <ul className="mt-1 space-y-1.5">
                      <li className="flex gap-2 text-slate-700">
                        <span className="mt-1 text-red-400">•</span>
                        {ex.before.bullet1}
                      </li>
                      <li className="flex gap-2 text-slate-700">
                        <span className="mt-1 text-red-400">•</span>
                        {ex.before.bullet2}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-red-600">Issues found</p>
                    {ex.before.flags.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-0.5 shrink-0 text-red-400" aria-hidden>⚠</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                      ✓
                    </span>
                    <h4 className="font-semibold text-slate-900">After — ATS score {ex.scoreAfter}</h4>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 text-sm">
                    <p className="font-medium text-slate-500">Summary</p>
                    <p className="mt-1 leading-relaxed text-slate-700 italic">
                      &ldquo;{ex.after.summary}&rdquo;
                    </p>
                    <p className="mt-3 font-medium text-slate-500">Experience bullets</p>
                    <ul className="mt-1 space-y-1.5">
                      <li className="flex gap-2 text-slate-700">
                        <span className="mt-1 text-emerald-500">•</span>
                        {ex.after.bullet1}
                      </li>
                      <li className="flex gap-2 text-slate-700">
                        <span className="mt-1 text-emerald-500">•</span>
                        {ex.after.bullet2}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Improvements</p>
                    {ex.after.gains.map((g) => (
                      <div key={g} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-0.5 shrink-0 text-emerald-500" aria-hidden>✓</span>
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Problem summary + CTA */}
              <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-100 bg-slate-50/40 px-6 py-4 sm:flex-row sm:items-center">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Root cause: </span>
                  {ex.problem}
                </p>
                <Link
                  href={RESUME_CHECKER_PATH}
                  className="btn-gradient shrink-0 text-sm"
                >
                  Analyze similar resume
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Every example above used the same career history — only the file structure and bullet language changed.
          </p>
          <Link
            href={RESUME_CHECKER_PATH}
            className="btn-gradient mt-6 inline-flex px-8 text-base"
          >
            Check my resume score free
          </Link>
          <p className="mt-3 text-sm text-slate-500">
            No signup · Results in under 2 minutes · PDF or paste text
          </p>
        </div>
      </div>
    </section>
  );
}
