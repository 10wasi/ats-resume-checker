import Link from "next/link";
import type { ReactNode } from "react";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { CareerHubRelated } from "@/components/career/CareerHubRelated";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { TopicClusterLinks } from "@/components/seo/TopicClusterLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { CAREER_SUCCESS_HUB_PATH } from "@/lib/content/career-success-hub/registry";
import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import type { FaqItem } from "@/lib/seo/faq";

type Props = {
  entry: CareerLandingEntry;
  intro: ReactNode;
  faqHeading: string;
  faqIntro?: ReactNode;
  toolCta?: ReactNode;
};

export function CareerLandingPage({
  entry,
  intro,
  faqHeading,
  faqIntro,
  toolCta,
}: Props) {
  const faqItems: FaqItem[] = entry.faqItems;
  return (
    <>
      <ResourceGuideJsonLd
        path={entry.path}
        title={entry.ctr.title}
        description={entry.ctr.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Career Success Hub", path: CAREER_SUCCESS_HUB_PATH },
          { name: entry.breadcrumbLabel, path: entry.path },
        ]}
      />
      <PageFaqJsonLd items={faqItems} />
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
                  href={CAREER_SUCCESS_HUB_PATH}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Career Success Hub
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">{entry.breadcrumbLabel}</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Career Success Hub · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {entry.ctr.h1}
            </h1>
            <div className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              {intro}
            </div>
          </header>

          {toolCta ? <div className="mt-10">{toolCta}</div> : null}

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={entry.body} />
          </div>

          <TopicClusterLinks />

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="career-faq-heading"
          >
            <h2
              id="career-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              {faqHeading}
            </h2>
            {faqIntro ? (
              <div className="mt-3 text-slate-600">{faqIntro}</div>
            ) : null}
            <div className="mt-10 space-y-10">
              {faqItems.map((item) => (
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

          <CareerHubRelated currentId={entry.id} />
          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
