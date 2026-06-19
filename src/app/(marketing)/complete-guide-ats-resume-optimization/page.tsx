import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  COMPLETE_ATS_GUIDE_PATH,
  completeAtsGuideBody,
} from "@/lib/content/complete-ats-guide-body";
import { completeAtsGuideFaqItems } from "@/lib/seo/complete-ats-guide-faq";
import { buildCtrMetadata, CTR_COMPLETE_ATS_GUIDE } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_COMPLETE_ATS_GUIDE, {
  canonical: COMPLETE_ATS_GUIDE_PATH,
  keywords: [
    "ATS resume optimization",
    "free ATS resume checker",
    "resume score check",
    "resume review online",
    "resume rejected by ATS",
    "resume keywords",
  ],
  ogType: "article",
});

export default function CompleteAtsGuidePage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={COMPLETE_ATS_GUIDE_PATH}
        title={CTR_COMPLETE_ATS_GUIDE.title}
        description={CTR_COMPLETE_ATS_GUIDE.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Complete ATS Guide", path: COMPLETE_ATS_GUIDE_PATH },
        ]}
      />
      <PageFaqJsonLd items={completeAtsGuideFaqItems} />
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
              <li className="text-slate-700">Complete ATS guide</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Master reference · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {CTR_COMPLETE_ATS_GUIDE.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Everything about <strong className="font-semibold text-slate-800">ATS resume checker</strong> workflows,{" "}
              <strong className="font-semibold text-slate-800">resume score</strong> checks,{" "}
              <strong className="font-semibold text-slate-800">resume review</strong>, rejection fixes, and{" "}
              <strong className="font-semibold text-slate-800">resume keywords</strong>—interconnected and actionable.
            </p>
          </header>

          <div className="not-prose mt-8">
            <Link href={RESUME_CHECKER_PATH} className="btn-gradient inline-flex px-6">
              Free ATS resume checker
            </Link>
          </div>

          <div className="mt-10">
            <BlogContent content={completeAtsGuideBody} />
          </div>

          <AdPlaceholder label="Advertisement · guide" className="mt-10" />

          <BlogResumeCta />

          <PageFaqSection
            heading="FAQ: Complete ATS resume optimization"
            items={completeAtsGuideFaqItems}
          />
          <RelatedResources path={COMPLETE_ATS_GUIDE_PATH} excludeHref={COMPLETE_ATS_GUIDE_PATH} />
        </div>
      </article>
    </>
  );
}
