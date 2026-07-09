import Link from "next/link";
import dynamic from "next/dynamic";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { resumeBulletGeneratorFaqItems } from "@/lib/seo/resume-bullet-generator-faq";
import { buildCtrMetadata, CTR_BULLET_GENERATOR } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const ResumeBulletGeneratorTool = dynamic(
  () =>
    import("@/components/tools/ResumeBulletGeneratorTool").then((m) => ({
      default: m.ResumeBulletGeneratorTool,
    })),
  { loading: () => <div className="h-64 animate-pulse rounded-2xl bg-slate-100" /> }
);

const PATH = "/resume-bullet-generator";

export const metadata = buildCtrMetadata(CTR_BULLET_GENERATOR, {
  canonical: PATH,
  keywords: [
    "resume bullet generator",
    "resume bullet points",
    "ATS friendly resume",
    "resume optimization",
    "ATS Resume Checker",
  ],
});

export default function ResumeBulletGeneratorPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={PATH}
        title={CTR_BULLET_GENERATOR.title}
        description={CTR_BULLET_GENERATOR.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Bullet Generator", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeBulletGeneratorFaqItems} />
      <article className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-mesh" aria-hidden />
        <div className="container-prose py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="font-semibold text-[#4ade80] underline underline-offset-2">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">Bullet generator</li>
            </ol>
          </nav>
          <header className="mt-8">
            <p className="section-eyebrow">Free tool · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_BULLET_GENERATOR.h1}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Turn vague duties into impact bullets for{" "}
              <strong className="font-semibold text-slate-800">resume optimization</strong>
              . Copy suggestions, add real metrics, then run the{" "}
              <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
                ATS Resume Checker
              </Link>{" "}
              for AI rewrites and keyword gaps.
            </p>
          </header>
          <div className="mt-10">
            <ResumeBulletGeneratorTool />
          </div>
          <AdPlaceholder label="Advertisement · tool" className="mt-10" />
          <AccordionFaq items={resumeBulletGeneratorFaqItems} heading="FAQ" />
          <RelatedResources path="/resume-bullet-generator" excludeHref="/resume-bullet-generator" />
          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
