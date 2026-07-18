import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { methodologyBody } from "@/lib/content/methodology-body";
import { buildCtrMetadata, CTR_HOW_WE_SCORE } from "@/lib/seo/ctr-metadata";
import { methodologyFaqItems } from "@/lib/seo/methodology-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const HOW_WE_SCORE_PATH = "/how-we-score-resumes" as const;

export const metadata = buildCtrMetadata(CTR_HOW_WE_SCORE, {
  canonical: HOW_WE_SCORE_PATH,
  keywords: [
    "how we score resumes",
    "ATS scoring methodology",
    "resume score explained",
    "ATS resume checker",
  ],
  ogType: "article",
});

export default function HowWeScoreResumesPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={HOW_WE_SCORE_PATH}
        title={CTR_HOW_WE_SCORE.title}
        description={CTR_HOW_WE_SCORE.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "How We Score Resumes", path: HOW_WE_SCORE_PATH },
        ]}
      />
      <PageFaqJsonLd items={methodologyFaqItems} />
      <article className="container-prose py-12 sm:py-14">
        <header>
          <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {CTR_HOW_WE_SCORE.h1}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Transparent scoring for global job applications — what we measure, what we do not claim,
            and how to test your file in the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free ATS resume checker
            </Link>
            . Full technical detail:{" "}
            <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
              scoring methodology
            </Link>
            .
          </p>
        </header>
        <div className="mt-10">
          <BlogContent content={methodologyBody} />
        </div>
        <GuideEeatSection path={HOW_WE_SCORE_PATH} />
        <PageFaqSection heading="Scoring FAQ" items={methodologyFaqItems} className="mt-12" />
        <RelatedResources path={HOW_WE_SCORE_PATH} excludeHref={HOW_WE_SCORE_PATH} limit={8} />
        <BlogResumeCta />
      </article>
    </>
  );
}
