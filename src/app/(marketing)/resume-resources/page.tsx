import Link from "next/link";
import { buildCtrMetadata, CTR_HOME } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { TOPIC_CLUSTER_ARCHITECTURE } from "@/lib/seo/topic-cluster-architecture";
import { COMPARISON_PAGES } from "@/lib/content/sprint3/comparisons";
import { VS_COMPARISON_PAGES } from "@/lib/content/sprint3/vs-comparisons";
import { COUNTRY_PAGES } from "@/lib/content/sprint3/countries";

export const metadata = buildCtrMetadata(
  {
    title: "Resume Resources — Skills, Keywords, Format & ATS Guides",
    description:
      "Resume resources hub: skills library, action verbs, templates, keywords, fonts, formatting, mistakes, length & file types. Free ATS checker linked.",
    h1: "Resume Resources — ATS Optimization Library",
    primaryKeyword: "resume resources",
    richSnippets: ["CollectionPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  { canonical: "/resume-resources", ogType: "article" }
);

const RESOURCES = [
  { href: "/resume-skills-library", title: "Resume Skills Library", desc: "Hard skills & tools by function for ATS search." },
  { href: "/resume-action-verbs", title: "Resume Action Verbs", desc: "Strong verbs for measurable bullets." },
  { href: "/ats-resume-templates", title: "Resume Templates Guide", desc: "Parse-safe layout starting points." },
  { href: "/resume-keywords", title: "Resume Keywords Guide", desc: "Keyword lists by profession." },
  { href: "/ats-friendly-fonts", title: "ATS Friendly Fonts", desc: "Safe typography for PDF export." },
  { href: "/ats-resume-format", title: "ATS Friendly Formatting", desc: "Single column, headings, copy-paste test." },
  { href: "/ats-resume-mistakes", title: "ATS Resume Mistakes", desc: "Silent rejection reasons to fix first." },
  { href: "/resume-length-guide", title: "Resume Length Guide", desc: "One page vs two for your level." },
  { href: "/resume-file-types", title: "Resume File Types", desc: "PDF vs DOCX upload rules." },
];

const INDUSTRIES = [
  { href: "/resume-checker/software-engineer", label: "Software Engineers" },
  { href: "/resume-checker/marketing-manager", label: "Marketing" },
  { href: "/resume-checker/finance", label: "Finance" },
  { href: "/resume-checker/healthcare", label: "Healthcare" },
  { href: "/resume-checker/students", label: "Students" },
  { href: "/resume-checker/freshers", label: "Freshers" },
  { href: "/resume-checker/project-manager", label: "Project Managers" },
  { href: "/resume-checker/ux-designer", label: "UX Designers" },
];

export default function ResumeResourcesPage() {
  return (
    <article className="container-prose py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="font-semibold text-[#16a34a] underline">
          Home
        </Link>
        {" / "}
        <span className="text-slate-700">Resume Resources</span>
      </nav>
      <header className="mt-6">
        <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          Resume Resources — ATS Optimization Library
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Every guide connects to the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            free ATS resume checker
          </Link>
          , comparison pages, industry checkers, and the{" "}
          <Link href="/glossary" className="font-semibold text-[#16a34a] underline">
            ATS glossary
          </Link>
          . Build topical authority from keywords → format → score.
        </p>
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-6 inline-flex px-7 text-sm">
          Check my resume free
        </Link>
      </header>

      <section className="mt-12" aria-labelledby="resource-guides">
        <h2 id="resource-guides" className="font-display text-xl font-bold text-slate-900">
          Core resource guides
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {RESOURCES.map((r) => (
            <li key={r.href} className="rounded-xl border border-slate-200 bg-white p-4">
              <Link href={r.href} className="font-semibold text-[#16a34a] underline">
                {r.title}
              </Link>
              <p className="mt-1 text-sm text-slate-600">{r.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="industry-hub">
        <h2 id="industry-hub" className="font-display text-xl font-bold text-slate-900">
          ATS resume checker by industry
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {INDUSTRIES.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 hover:border-emerald-200 hover:text-emerald-800"
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          <Link href="/resume-checker/software-engineer" className="underline">
            Browse all role checkers
          </Link>{" "}
          ·{" "}
          <Link href="/faq-center" className="underline">
            FAQ Center
          </Link>
        </p>
      </section>

      <section className="mt-12" aria-labelledby="compare-hub">
        <h2 id="compare-hub" className="font-display text-xl font-bold text-slate-900">
          Tool comparisons (unbiased)
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {VS_COMPARISON_PAGES.map((p) => (
            <li key={p.path}>
              <Link href={p.path} className="font-semibold text-[#16a34a] underline">
                {p.breadcrumbLabel}
              </Link>
            </li>
          ))}
          {COMPARISON_PAGES.map((p) => (
            <li key={p.path}>
              <Link href={p.path} className="font-semibold text-slate-800 underline">
                {p.breadcrumbLabel}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="country-hub">
        <h2 id="country-hub" className="font-display text-xl font-bold text-slate-900">
          Resume checker by country
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {COUNTRY_PAGES.map((c) => (
            <li key={c.path}>
              <Link
                href={c.path}
                className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-sm hover:border-emerald-200"
              >
                {c.breadcrumbLabel.replace("Resume Checker ", "")}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="cluster-map">
        <h2 id="cluster-map" className="font-display text-xl font-bold text-slate-900">
          Topic cluster map
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Homepage → categories → landing pages → blogs → FAQs → comparisons → glossary → resources.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          {TOPIC_CLUSTER_ARCHITECTURE[0]?.children?.map((cat) => (
            <li key={cat.path}>
              <Link href={cat.path === "/compare" ? "/jobscan-alternative" : cat.path} className="font-semibold text-slate-800 underline">
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
