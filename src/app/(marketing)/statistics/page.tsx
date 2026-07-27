import Link from "next/link";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import { STATISTICS_PAGES } from "@/lib/content/sprint3/statistics-pages";

export const metadata = buildCtrMetadata(
  {
    title: ctrTitle("Hiring & Resume Statistics", "Data Hub 2026"),
    description: ctrMeta(
      "Resume, ATS & hiring statistics hub — benchmarks, screening data & keyword trends. Free checker linked."
    ),
    h1: "Statistics Hub — Resume, ATS & Hiring Data",
    primaryKeyword: "resume statistics hub",
    richSnippets: ["CollectionPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  { canonical: "/statistics", ogType: "article" }
);

export default function StatisticsHubPage() {
  return (
    <article className="container-prose py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="font-semibold text-[#16a34a] underline">
          Home
        </Link>
        {" / "}
        <span className="text-slate-700">Statistics</span>
      </nav>
      <header className="mt-6">
        <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          Statistics Hub — Resume, ATS &amp; Hiring Data
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Backlink-ready research pages with tables, definitions, and links to the{" "}
          <Link href="/resume-checker" className="font-semibold text-[#16a34a] underline">
            free ATS resume checker
          </Link>
          . Cite responsibly—methodology notes on each page.
        </p>
      </header>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {STATISTICS_PAGES.map((p) => (
          <li key={p.path} className="rounded-xl border border-slate-200 bg-white p-5">
            <Link href={p.path} className="font-semibold text-[#16a34a] underline">
              {p.breadcrumbLabel}
            </Link>
            <p className="mt-2 text-sm text-slate-600">{p.ctr.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-slate-600">
        Also explore{" "}
        <Link href="/resume-keywords" className="underline">
          keyword database
        </Link>
        ,{" "}
        <Link href="/ats-resume-templates" className="underline">
          templates
        </Link>
        , and{" "}
        <Link href="/resume-resources" className="underline">
          resume resources
        </Link>
        .
      </p>
    </article>
  );
}
