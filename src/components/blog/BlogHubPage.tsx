import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { ItemListJsonLd } from "@/components/seo/ItemListJsonLd";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";
import { GuideTrustBlock } from "@/components/seo/GuideTrustBlock";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import type { BlogHubEntry } from "@/lib/content/blog-hubs/registry";
import { BLOG_HUB_FAQ } from "@/lib/seo/blog-hub-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = { entry: BlogHubEntry };

export function BlogHubPage({ entry }: Props) {
  const faqItems = BLOG_HUB_FAQ[entry.path] ?? [];

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
          { name: "Blog", path: "/blog" },
          { name: entry.breadcrumbLabel, path: entry.path },
        ]}
      />
      <ItemListJsonLd
        name={entry.ctr.h1}
        description={entry.ctr.description}
        items={entry.posts.map((p) => ({
          name: p.title,
          url: `/blog/${p.slug}`,
          description: p.description,
        }))}
      />
      {faqItems.length > 0 ? <PageFaqJsonLd items={faqItems} /> : null}
      <div className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: entry.breadcrumbLabel, path: entry.path },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Blog hub · ResumeIQ</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {entry.ctr.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">{entry.intro}</p>
          <ContentFreshnessLabel path={entry.path} className="mt-4" />
        </header>

        <section className="not-prose mt-10 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold text-slate-900">
            What you will learn in this cluster
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Each article below connects to the free{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              ATS resume checker
            </Link>
            ,{" "}
            <Link href="/resume-keywords" className="font-semibold text-[#16a34a] underline">
              keyword database
            </Link>
            , and{" "}
            <Link href="/career-success-hub" className="font-semibold text-[#16a34a] underline">
              career success hub
            </Link>
            . Read in any order—start with the article closest to your current problem.
          </p>
        </section>

        <ul className="not-prose mt-12 space-y-4">
          {entry.posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <h2 className="font-display text-lg font-bold text-slate-900">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{post.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-[#16a34a]">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {faqItems.length > 0 ? (
          <PageFaqSection
            heading={`FAQ: ${entry.breadcrumbLabel}`}
            items={faqItems}
            className="mt-14"
          />
        ) : null}

        <div className="not-prose mt-10">
          <GuideTrustBlock />
        </div>

        <div className="not-prose mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <p className="font-semibold text-slate-900">Ready to test your resume?</p>
          <p className="mt-2 text-sm text-slate-600">
            Run the free ATS Resume Checker—resume analyzer free online with score,
            keywords, and improvement suggestions.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-4 w-full sm:w-auto">
            Check Resume Score
          </Link>
        </div>

        <RelatedResources path={entry.path} excludeHref={entry.path} />
      </div>
      <StickyCheckerCta />
    </>
  );
}
