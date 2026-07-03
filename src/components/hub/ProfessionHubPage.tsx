import Link from "next/link";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import { ItemListJsonLd } from "@/components/seo/ItemListJsonLd";
import { ProfessionRelatedCareers } from "@/components/hub/ProfessionRelatedCareers";
import type { ProfessionHubEntry } from "@/lib/content/profession-hubs/registry";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = { entry: ProfessionHubEntry };

const OPTIMIZATION_STEPS = [
  "Run the free resume checker on the PDF you actually submit.",
  "Compare your file to the role example—headings, bullet density, and metrics.",
  "Paste the job post into the match tool; add 5–8 missing terms into recent bullets.",
  "Fix format flags (columns, icons, headers) before the next application batch.",
  "Re-check score and export a plain-text-friendly PDF for portals.",
];

export function ProfessionHubPage({ entry }: Props) {
  return (
    <>
      <ResourceGuideJsonLd
        path={entry.path}
        title={entry.ctr.title}
        description={entry.ctr.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resource Hub", path: "/resource-hub" },
          { name: entry.breadcrumbLabel, path: entry.path },
        ]}
      />
      <PageFaqJsonLd items={entry.faqItems} />
      <ItemListJsonLd
        name={`${entry.title} resume resources`}
        description={entry.ctr.description}
        items={[
          { name: "Resume example", url: entry.examplePath },
          { name: "ATS keywords", url: entry.keywordsPath },
          { name: "Optimization guide", url: entry.guidePath },
          { name: "Resume checker", url: RESUME_CHECKER_PATH },
        ]}
      />
      <div className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Resource Hub", path: "/resource-hub" },
            { name: entry.breadcrumbLabel, path: entry.path },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Profession hub · ResumeIQ</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {entry.ctr.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">{entry.intro}</p>
          <ContentFreshnessLabel path={entry.path} className="mt-4" />
        </header>

        <div className="not-prose mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { label: "Resume example", href: entry.examplePath, desc: "ATS-friendly sample & bullets" },
            { label: "ATS keywords", href: entry.keywordsPath, desc: "Skills, verbs & phrases" },
            { label: "Optimization guide", href: entry.guidePath, desc: "Role-specific ATS guide" },
            { label: "Resume checker", href: RESUME_CHECKER_PATH, desc: "Score your file free" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300"
            >
              <p className="font-display text-lg font-bold text-slate-900">{item.label}</p>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </Link>
          ))}
        </div>

        <section className="not-prose mt-12">
          <h2 className="font-display text-xl font-bold text-slate-900">
            5-step {entry.title.toLowerCase()} optimization workflow
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
            {OPTIMIZATION_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="not-prose mt-12">
          <h2 className="font-display text-xl font-bold text-slate-900">Common mistakes</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {entry.mistakes.map((m) => (
              <li key={m} className="flex gap-2">
                <span className="text-rose-500" aria-hidden>×</span>
                {m}
              </li>
            ))}
          </ul>
          <Link
            href="/ats-resume-mistakes"
            className="mt-4 inline-block text-sm font-semibold text-[#16a34a] underline"
          >
            Full ATS mistakes guide →
          </Link>
        </section>

        <div className="not-prose mt-10">
          <GuideEeatSection path={entry.path} />
        </div>

        <div className="not-prose mt-10 flex flex-wrap gap-3">
          <Link href="/resume-match-analyzer" className="btn-gradient px-6">
            Resume match tool
          </Link>
          <Link
            href="/resource-hub"
            className="inline-flex h-11 items-center rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-800"
          >
            All resources
          </Link>
        </div>

        <PageFaqSection heading={`FAQ: ${entry.title}`} items={entry.faqItems} />
        <ProfessionRelatedCareers currentSlug={entry.slug} roleTitle={entry.title} />
        <RelatedResources path={entry.path} excludeHref={entry.path} />
      </div>
      <StickyCheckerCta />
    </>
  );
}
