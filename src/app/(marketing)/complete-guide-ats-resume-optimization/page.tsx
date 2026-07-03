import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { KeyTakeawaysBox } from "@/components/seo/KeyTakeawaysBox";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import {
  COMPLETE_ATS_GUIDE_PATH,
  completeAtsGuideBody,
  completeAtsGuideKeyTakeaways,
} from "@/lib/content/complete-ats-guide-body";
import { completeAtsGuideFaqItems } from "@/lib/seo/complete-ats-guide-faq";
import { buildCtrMetadata, CTR_COMPLETE_ATS_GUIDE } from "@/lib/seo/ctr-metadata";
import { HOWTO_RESUME_CHECKER, HOWTO_URLS } from "@/lib/seo/how-to-steps";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_COMPLETE_ATS_GUIDE, {
  canonical: COMPLETE_ATS_GUIDE_PATH,
  keywords: [
    "ATS resume optimization",
    "applicant tracking system",
    "resume parser",
    "resume screening",
    "free ATS resume checker",
    "resume score",
    "resume keywords",
    "job description matching",
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
      <HowToJsonLd
        name="How to optimize your resume for ATS"
        description={CTR_COMPLETE_ATS_GUIDE.description}
        steps={HOWTO_RESUME_CHECKER}
        path={HOWTO_URLS.checker}
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
            <p className="section-eyebrow">Master authority guide · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {CTR_COMPLETE_ATS_GUIDE.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              The definitive guide to <strong className="font-semibold text-slate-800">applicant tracking systems</strong>,{" "}
              <strong className="font-semibold text-slate-800">resume parsing</strong>,{" "}
              <strong className="font-semibold text-slate-800">keyword optimization</strong>, and{" "}
              <strong className="font-semibold text-slate-800">resume screening</strong>—with workflows, examples, and free tools.
            </p>
          </header>

          <KeyTakeawaysBox items={completeAtsGuideKeyTakeaways} />

          <div className="not-prose mt-8">
            <Link href={RESUME_CHECKER_PATH} className="btn-gradient w-full sm:w-auto">
              Run free ATS resume checker
            </Link>
          </div>

          <div className="mt-10">
            <BlogContent content={completeAtsGuideBody} />
          </div>

          <div className="not-prose mt-10">
            <GuideEeatSection path={COMPLETE_ATS_GUIDE_PATH} />
          </div>

          <AdPlaceholder label="Advertisement · guide" className="mt-10" />

          <BlogResumeCta />

          <PageFaqSection
            heading="FAQ: Complete ATS resume optimization"
            items={completeAtsGuideFaqItems}
          />
          <RelatedResources path={COMPLETE_ATS_GUIDE_PATH} excludeHref={COMPLETE_ATS_GUIDE_PATH} limit={10} />
        </div>
      </article>
      <StickyCheckerCta />
    </>
  );
}
