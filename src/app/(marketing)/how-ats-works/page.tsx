import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  HOW_ATS_WORKS_PATH,
  howAtsWorksBody,
} from "@/lib/content/how-ats-works-body";
import { buildCtrMetadata, CTR_HOW_ATS_WORKS } from "@/lib/seo/ctr-metadata";
import { howAtsWorksFaqItems } from "@/lib/seo/how-ats-works-faq";
import { HOWTO_HOW_ATS_WORKS, HOWTO_URLS } from "@/lib/seo/how-to-steps";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_HOW_ATS_WORKS, {
  canonical: HOW_ATS_WORKS_PATH,
  keywords: [
    "how ATS works",
    "applicant tracking system",
    "ATS resume checker",
    "resume scoring",
  ],
  ogType: "article",
});

export default function HowAtsWorksPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={HOW_ATS_WORKS_PATH}
        title={CTR_HOW_ATS_WORKS.title}
        description={CTR_HOW_ATS_WORKS.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "How ATS Works", path: HOW_ATS_WORKS_PATH },
        ]}
      />
      <HowToJsonLd
        name="How to optimize your resume for ATS"
        description={CTR_HOW_ATS_WORKS.description}
        steps={HOWTO_HOW_ATS_WORKS}
        path={HOWTO_URLS.howAtsWorks}
      />
      <PageFaqJsonLd items={howAtsWorksFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          <PageBreadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "How ATS Works", path: HOW_ATS_WORKS_PATH },
            ]}
          />
          <header className="mt-8">
            <p className="section-eyebrow">Education · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_HOW_ATS_WORKS.h1}
            </h1>
            <GuideArticleMeta
              path={HOW_ATS_WORKS_PATH}
              readTime={10}
              audience="Job seekers applying through employer portals and job boards globally"
            />
            <p className="mt-5 text-lg text-slate-600">
              What applicant tracking systems do, what they check on your resume, and how to{" "}
              <strong className="font-semibold text-slate-800">improve resume score</strong>{" "}
              signals— for job seekers applying{" "}
              <strong className="font-semibold text-slate-800">worldwide</strong>. Test your file
              in the{" "}
              <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
                ATS Resume Checker
              </Link>
              .
            </p>
          </header>
          <div className="mt-8">
            <TableOfContents content={howAtsWorksBody} />
          </div>
          <div className="mt-6">
            <BlogContent content={howAtsWorksBody} />
          </div>
          <GuideEeatSection path={HOW_ATS_WORKS_PATH} />
          <PageFaqSection heading="How ATS works — FAQ" items={howAtsWorksFaqItems} />
          <RelatedResources path={HOW_ATS_WORKS_PATH} excludeHref={HOW_ATS_WORKS_PATH} />
          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
