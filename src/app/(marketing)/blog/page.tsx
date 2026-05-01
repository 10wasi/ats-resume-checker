import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { readingTimeMinutes } from "@/lib/blog/reading-time";
import { BlogCoverPlaceholder } from "@/components/blog/BlogExtras";
import { BlogIndexJsonLd } from "@/components/blog/BlogIndexJsonLd";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";

import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Blog — Free Resume Checker, ATS Score & Resume Optimization Guides",
  description:
    "SEO-friendly guides: free resume checker tips, ATS resume score improvement, AI resume analyzer workflow, CV checker online free best practices, and job resume checker strategies for 2026.",
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
  keywords: [
    "ATS resume",
    "AI resume checker",
    "resume optimization",
    "free resume score",
    "software engineer resume",
    "job interview resume",
    "ResumeIQ blog",
  ],
  openGraph: {
    title: "Resume & ATS Blog — ResumeIQ",
    description:
      "Long-form guides on AI resume scoring, ATS-friendly CVs, and interview-ready resumes. Updated for 2026.",
    type: "website",
    url: `${siteUrl}/blog`,
    siteName: "ResumeIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume & ATS Blog — ResumeIQ",
    description:
      "Guides on AI resume tools, ATS optimization, and job-winning resume strategies.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="container-page py-14 sm:py-20">
      <BlogIndexJsonLd posts={posts} />
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-eyebrow mx-auto">The ResumeIQ blog</p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Free resume checker guides &amp; ATS tips
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Practical articles on using a free resume checker, raising your ATS
          resume score, and fixing real issues job seekers face in 2026.
        </p>
      </div>

      <AdPlaceholder
        label="Advertisement · blog index"
        className="py-8"
      />

      {featured && (
        <article className="card-elevated group mx-auto mt-14 grid max-w-5xl gap-0 overflow-hidden lg:grid-cols-[1.1fr_1fr]">
          <Link href={`/blog/${featured.slug}`} className="block p-3 lg:p-4">
            <BlogCoverPlaceholder
              variant={featured.coverVariant}
              title={featured.title}
              eyebrow="Featured · ResumeIQ"
            />
          </Link>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">
              Featured
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              <Link
                href={`/blog/${featured.slug}`}
                className="text-slate-900 transition-colors visited:text-[#22c55e] hover:text-[#4ade80]"
              >
                {featured.title}
              </Link>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <time dateTime={featured.date}>
                {new Date(featured.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden>·</span>
              <span>{readingTimeMinutes(featured.content)} min read</span>
              <span aria-hidden>·</span>
              <span>By {featured.author}</span>
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#4ade80] visited:text-[#22c55e] hover:text-[#16a34a]"
            >
              Read article
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      )}

      <ul className="mx-auto mt-12 grid max-w-6xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => (
          <li key={post.slug}>
            <article
              className="card-elevated flex h-full flex-col overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="block shrink-0 p-3">
                <BlogCoverPlaceholder
                  variant={post.coverVariant}
                  title={post.title}
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{readingTimeMinutes(post.content)} min read</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors visited:text-[#22c55e] hover:text-[#4ade80]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#4ade80] visited:text-[#22c55e] hover:text-[#16a34a]"
                >
                  Read article
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-16 max-w-3xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft sm:p-12">
          <p className="section-eyebrow mx-auto">Stop reading. Start scoring.</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Run your resume through ResumeIQ now.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            Free, in your browser, no sign-up. Get an honest score and
            specific things to fix in under a minute.
          </p>
          <Link
            href="/resume-checker"
            className="btn-gradient mt-6 px-7 text-sm"
          >
            Check resume score free
          </Link>
        </div>
      </div>
    </div>
  );
}
