import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { readingTimeMinutes } from "@/lib/blog/reading-time";
import {
  BlogContent,
  BlogCoverPlaceholder,
  BlogResumeCta,
} from "@/components/blog/BlogExtras";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";

import { getSiteUrl } from "@/lib/site-url";

type Props = { params: { slug: string } };

const siteUrl = getSiteUrl();

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found", robots: { index: false } };

  const pageTitle = post.seoTitle ?? post.title;
  const keywords = [...(post.tags ?? []), ...(post.keywords ?? [])];

  return {
    title: pageTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: { index: true, follow: true },
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: pageTitle,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      url: `${siteUrl}/blog/${post.slug}`,
      authors: [post.author],
      siteName: "ResumeIQ",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const minutes = readingTimeMinutes(post.content);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="relative">
      <ArticleJsonLd post={post} slug={post.slug} />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-mesh"
        aria-hidden
      />
      <div className="container-prose py-12 sm:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#4ade80] transition visited:text-[#22c55e] hover:text-[#16a34a]"
        >
          <span aria-hidden>←</span> Back to blog
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{minutes} min read</span>
            <span aria-hidden>·</span>
            <span>By {post.author}</span>
          </div>
          <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {post.description}
          </p>
        </header>

        <div className="mt-10">
          <BlogCoverPlaceholder
            variant={post.coverVariant}
            title={post.title}
          />
        </div>

        <AdPlaceholder label="Advertisement · article" className="mt-10" />

        <div className="mt-12">
          <BlogContent content={post.content} />
        </div>

        <BlogResumeCta />
      </div>

      {related.length > 0 && (
        <section className="border-t border-slate-200/70 bg-white">
          <div className="container-page py-16">
            <div className="mx-auto max-w-3xl">
              <p className="section-eyebrow">Keep reading</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                More from the ResumeIQ blog
              </h2>
            </div>
            <ul className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <article className="card-elevated flex h-full flex-col overflow-hidden">
                    <Link href={`/blog/${p.slug}`} className="block shrink-0 p-3">
                      <BlogCoverPlaceholder
                        variant={p.coverVariant}
                        title={p.title}
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-base font-bold sm:text-lg">
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-slate-900 visited:text-[#22c55e] hover:text-[#4ade80]"
                        >
                          {p.title}
                        </Link>
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                        {p.description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
