import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  EDITORIAL_POLICY_PATH,
  editorialPolicyBody,
} from "@/lib/content/editorial-policy-body";
import { buildCtrMetadata, CTR_EDITORIAL_POLICY } from "@/lib/seo/ctr-metadata";

export const metadata = buildCtrMetadata(CTR_EDITORIAL_POLICY, {
  canonical: EDITORIAL_POLICY_PATH,
  keywords: ["editorial policy", "ResumeIQ", "resume guides", "EEAT"],
  ogType: "article",
});

export default function EditorialPolicyPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={EDITORIAL_POLICY_PATH}
        title={CTR_EDITORIAL_POLICY.title}
        description={CTR_EDITORIAL_POLICY.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Editorial Policy", path: EDITORIAL_POLICY_PATH },
        ]}
      />
      <article className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Editorial Policy", path: EDITORIAL_POLICY_PATH },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Trust · ResumeIQ</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {CTR_EDITORIAL_POLICY.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            How we write resume and ATS guides—accuracy, actionable advice, and
            independence from advertising.
          </p>
        </header>
        <div className="mt-10">
          <BlogContent content={editorialPolicyBody} />
        </div>
        <RelatedResources path={EDITORIAL_POLICY_PATH} excludeHref={EDITORIAL_POLICY_PATH} />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
            Scoring methodology →
          </Link>
          <Link href="/about" className="font-semibold text-[#16a34a] underline">
            About ResumeIQ →
          </Link>
        </div>
        <BlogResumeCta />
      </article>
    </>
  );
}
