import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  METHODOLOGY_PATH,
  methodologyBody,
} from "@/lib/content/methodology-body";
import { buildCtrMetadata, CTR_METHODOLOGY } from "@/lib/seo/ctr-metadata";
import { methodologyFaqItems } from "@/lib/seo/methodology-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_METHODOLOGY, {
  canonical: METHODOLOGY_PATH,
  keywords: [
    "ATS scoring methodology",
    "how ATS works",
    "resume score explained",
    "ATS Resume Checker",
  ],
  ogType: "article",
});

export default function MethodologyPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={METHODOLOGY_PATH}
        title={CTR_METHODOLOGY.title}
        description={CTR_METHODOLOGY.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Methodology", path: METHODOLOGY_PATH },
        ]}
      />
      <PageFaqJsonLd items={methodologyFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          <PageBreadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Methodology", path: METHODOLOGY_PATH },
            ]}
          />
          <header className="mt-8">
            <p className="section-eyebrow">Transparency · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_METHODOLOGY.h1}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              How we score resumes for <strong className="font-semibold text-slate-800">global job applications</strong>—what ATS checks, how match score works, and what we do not claim. Test your file in the{" "}
              <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
                ATS Resume Checker
              </Link>.
            </p>
          </header>
          <AdPlaceholder label="Advertisement · resource" className="mt-10" />
          <div className="mt-10">
            <BlogContent content={methodologyBody} />
          </div>
          <PageFaqSection heading="Methodology FAQ" items={methodologyFaqItems} />
          <RelatedResources path={METHODOLOGY_PATH} excludeHref={METHODOLOGY_PATH} />
          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
