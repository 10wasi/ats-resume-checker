import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { KnowledgeCenterRelated } from "@/components/knowledge/KnowledgeCenterRelated";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  atsResumeChecklistBody,
  atsResumeChecklistSeo,
  ATS_RESUME_CHECKLIST_PATH,
} from "@/lib/content/ats-resume-checklist-body";
import { KNOWLEDGE_CENTER_PATH } from "@/lib/content/knowledge-center-pages";
import { atsResumeChecklistFaqItems } from "@/lib/seo/ats-resume-checklist-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { buildCtrMetadata, CTR_ATS_CHECKLIST } from "@/lib/seo/ctr-metadata";
import {
  HOWTO_ATS_CHECKLIST,
  HOWTO_URLS,
} from "@/lib/seo/how-to-steps";

const KEYWORDS = [
  "ATS Resume Checklist",
  "ATS Resume Checker",
  "ATS friendly resume",
  "improve ATS score",
  "ATS compatible resume",
  "resume optimization",
  "ATS keywords",
  "ATS resume format",
  "ATS resume mistakes",
  "online resume checker",
  "resume ATS test",
  "global job applications",
];

export const metadata = buildCtrMetadata(CTR_ATS_CHECKLIST, {
  canonical: ATS_RESUME_CHECKLIST_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function AtsResumeChecklistPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={ATS_RESUME_CHECKLIST_PATH}
        title={atsResumeChecklistSeo.title}
        description={atsResumeChecklistSeo.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: KNOWLEDGE_CENTER_PATH },
          { name: "ATS Resume Checklist", path: ATS_RESUME_CHECKLIST_PATH },
        ]}
      />
      <HowToJsonLd
        name="How to use the ATS resume checklist before applying"
        description={CTR_ATS_CHECKLIST.description}
        steps={HOWTO_ATS_CHECKLIST}
        path={HOWTO_URLS.checklist}
      />
      <PageFaqJsonLd items={atsResumeChecklistFaqItems} />
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
              <li>
                <Link
                  href={KNOWLEDGE_CENTER_PATH}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Knowledge Center
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">ATS resume checklist</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free resource · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_ATS_CHECKLIST.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              A practical, print-friendly{" "}
              <strong className="font-semibold text-slate-800">
                ATS Resume Checklist
              </strong>{" "}
              for job seekers worldwide—covering{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume format
              </strong>
              ,{" "}
              <strong className="font-semibold text-slate-800">
                ATS keywords
              </strong>
              , structure, and the{" "}
              <strong className="font-semibold text-slate-800">
                ATS resume mistakes
              </strong>{" "}
              that quietly kill callbacks. When you are ready to{" "}
              <strong className="font-semibold text-slate-800">
                check your ATS score
              </strong>
              , use our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS Resume Checker
              </Link>
              . Want the long-form story first? See the{" "}
              <Link
                href="/ultimate-ats-resume-guide"
                className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
              >
                ultimate ATS resume guide
              </Link>
              .
            </p>
          </header>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={atsResumeChecklistBody} />
          </div>

          <GuideEeatSection path={ATS_RESUME_CHECKLIST_PATH} />

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="ats-checklist-faq-heading"
          >
            <h2
              id="ats-checklist-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: ATS resume checklist and scoring
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers on using this checklist with an{" "}
              <strong className="font-semibold text-slate-800">
                online resume checker
              </strong>
              , how to{" "}
              <strong className="font-semibold text-slate-800">
                improve ATS score
              </strong>{" "}
              signals, and building an{" "}
              <strong className="font-semibold text-slate-800">
                ATS friendly resume
              </strong>{" "}
              without keyword stuffing.
            </p>
            <div className="mt-10 space-y-10">
              {atsResumeChecklistFaqItems.map((item) => (
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

          <KnowledgeCenterRelated
            excludeId="checklist"
            relatedIds={["format", "friendly", "keywords", "score"]}
          />

          <RelatedResources path={ATS_RESUME_CHECKLIST_PATH} excludeHref={ATS_RESUME_CHECKLIST_PATH} />

          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
