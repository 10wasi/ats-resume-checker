import Link from "next/link";
import { TopicClusterLinks } from "@/components/seo/TopicClusterLinks";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const HUB_LINKS = [
  {
    href: RESUME_CHECKER_PATH,
    title: "ATS Resume Checker",
    desc: "Upload PDF — instant score & parser test",
  },
  {
    href: "/resume-review",
    title: "Resume Review",
    desc: "Recruiter rubric + section feedback",
  },
  {
    href: "/career-success-hub",
    title: "Career Success Hub",
    desc: "All tools & guides in one workflow",
  },
  {
    href: "/resume-job-description-match",
    title: "Job Match Analyzer",
    desc: "Missing keywords vs any posting",
  },
  {
    href: "/ats-resume-templates",
    title: "Resume Templates",
    desc: "ATS-safe layouts & formatting rules",
  },
  {
    href: "/complete-guide-ats-resume-optimization",
    title: "ATS Guide",
    desc: "Complete optimization playbook",
  },
  {
    href: "/interview-question-generator",
    title: "Interview Guides",
    desc: "Role-specific questions & STAR tips",
  },
  {
    href: "/resume-examples",
    title: "Resume Examples",
    desc: "Strong bullets by profession",
  },
] as const;

/** Homepage engagement: hub links + curated internal links (lazy-friendly server component). */
export function HomeTopicHubSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/50 py-14 sm:py-16"
      aria-labelledby="home-hub-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Start here</p>
          <h2
            id="home-hub-heading"
            className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            Check, review &amp; optimize — one workflow
          </h2>
          <p className="mt-3 text-slate-600">
            Most job seekers start with the checker, match a posting, then use guides in the{" "}
            <Link href="/career-success-hub" className="font-semibold text-[#16a34a] underline">
              Career Success Hub
            </Link>
            .
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_LINKS.map((item) => (
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
        <TopicClusterLinks
          path="/"
          heading="Popular resume optimization resources"
          className="mt-12 border-t border-slate-200/80 pt-10"
        />
      </div>
    </section>
  );
}
