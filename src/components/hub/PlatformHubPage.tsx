import Link from "next/link";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { BlogContent } from "@/components/blog/BlogExtras";
import {
  PlatformHubSections,
  PlatformHubToolCta,
} from "@/components/hub/PlatformHubSections";
import type { PlatformHubEntry } from "@/lib/content/platform-hubs/registry";
import { PLATFORM_HUBS_PATH } from "@/lib/content/platform-hubs/registry";

type Props = { hub: PlatformHubEntry };

export function PlatformHubPage({ hub }: Props) {
  return (
    <>
      <ResourceGuideJsonLd
        path={hub.path}
        title={hub.ctr.title}
        description={hub.ctr.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: PLATFORM_HUBS_PATH },
          { name: hub.breadcrumbLabel, path: hub.path },
        ]}
      />
      {hub.faqItems.length > 0 ? <PageFaqJsonLd items={hub.faqItems} /> : null}
      <div className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Platform", path: PLATFORM_HUBS_PATH },
            { name: hub.breadcrumbLabel, path: hub.path },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Resume optimization platform · {hub.title}</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            {hub.ctr.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">{hub.intro}</p>
        </header>

        <div className="not-prose mt-10">
          <PlatformHubToolCta hub={hub} />
        </div>

        {hub.body ? (
          <div className="mt-10">
            <BlogContent content={hub.body} />
          </div>
        ) : null}

        <PlatformHubSections hub={hub} />

        {hub.faqItems.length > 0 ? (
          <PageFaqSection heading={`FAQ: ${hub.title}`} items={hub.faqItems} />
        ) : null}

        <RelatedResources path={hub.path} excludeHref={hub.path} />
      </div>
    </>
  );
}
