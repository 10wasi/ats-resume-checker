import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AtsResumeHubActionPlan } from "@/components/hub/AtsResumeHubActionPlan";
import { AtsResumeHubSectionGrid } from "@/components/hub/AtsResumeHubSectionGrid";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { AtsResumeHubItemListJsonLd } from "@/components/seo/AtsResumeHubItemListJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  atsResumeHubBody,
  atsResumeHubSeo,
  ATS_RESUME_HUB_PATH,
} from "@/lib/content/ats-resume-hub-body";
import { atsResumeHubFaqItems } from "@/lib/seo/ats-resume-hub-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { buildCtrMetadata, CTR_ATS_HUB } from "@/lib/seo/ctr-metadata";

const KEYWORDS = [
  "ATS Resume Checker",
  "ATS friendly resume",
  "ATS resume examples",
  "ATS resume checklist",
  "ATS resume keywords",
  "ATS resume format",
  "ATS resume hub",
  "resume optimization",
  "ATS compatible resume",
  "online resume checker",
];

export const metadata = buildCtrMetadata(CTR_ATS_HUB, {
  canonical: ATS_RESUME_HUB_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsResumeHubPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={ATS_RESUME_HUB_PATH}
        title={atsResumeHubSeo.title}
        description={atsResumeHubSeo.description}
      />
      <AtsResumeHubItemListJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "ATS Resume Hub", path: ATS_RESUME_HUB_PATH },
        ]}
      />
      <PageFaqJsonLd items={atsResumeHubFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">ATS resume hub</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free resource hub · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              The Complete ATS Resume Resource Hub
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Your central home for the{" "}
              <strong className="font-semibold text-slate-800">
                ATS Resume Checker
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>{" "}
              guides,{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume examples
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume checklist
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume keywords
              </strong>
              , and{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume format
              </strong>{" "}
              —nine linked sections so you never tab-hop at midnight again.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-6 text-sm">
                Run ATS Resume Checker
              </Link>
              <Link
                href="/resume-job-description-match"
                className="inline-flex h-11 items-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-300"
              >
                Match to job description
              </Link>
            </div>
          </header>

          <div className="mt-10">
            <AtsResumeHubSectionGrid />
          </div>

          <AdPlaceholder label="Advertisement · resource hub" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={atsResumeHubBody} />
          </div>

          <div className="mt-14">
            <AtsResumeHubActionPlan />
          </div>

          <AdPlaceholder label="Advertisement · hub footer" className="mt-14" />

          <section
            id="ats-hub-faq"
            className="scroll-mt-24 mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ats-hub-faq-heading"
          >
            <h2
              id="ats-hub-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: The Complete ATS Resume Resource Hub
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers on hub navigation, the{" "}
              <strong className="font-semibold text-slate-800">
                ATS Resume Checker
              </strong>
              , and building an{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>{" "}
              step by step.
            </p>
            <div className="mt-10 space-y-10">
              {atsResumeHubFaqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <BlogResumeCta />

          <nav
            className="not-prose mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            aria-label="Related hub resources"
          >
            <p className="text-sm font-semibold text-slate-900">
              Internal links — explore the platform
            </p>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link href={RESUME_CHECKER_PATH} className="text-[#16a34a] underline">
                  ATS Resume Checker
                </Link>
              </li>
              <li>
                <Link href="/resume-job-description-match" className="text-[#16a34a] underline">
                  Resume job match analyzer
                </Link>
              </li>
              <li>
                <Link href="/ai-resume-rewrite" className="text-[#16a34a] underline">
                  AI resume rewrite
                </Link>
              </li>
              <li>
                <Link href="/ats-resume-checklist-2026" className="text-[#16a34a] underline">
                  ATS resume checklist
                </Link>
              </li>
              <li>
                <Link href="/ultimate-ats-resume-guide" className="text-[#16a34a] underline">
                  Ultimate ATS guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#16a34a] underline">
                  All blog articles
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
}
