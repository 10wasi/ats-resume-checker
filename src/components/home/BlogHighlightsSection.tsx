import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export function BlogHighlightsSection() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <section className="bg-slate-50/80 py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-eyebrow">Editorial</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Latest from the blog
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              In-depth resume, ATS, and job-search guides — practical and
              up to date for 2026.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent-400 hover:text-accent-500"
          >
            Browse all posts
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="card-elevated flex h-full flex-col overflow-hidden">
                <div className="flex flex-1 flex-col p-5">
                  <time
                    dateTime={post.date}
                    className="text-xs font-semibold uppercase tracking-wide text-slate-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug sm:text-lg">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#4ade80] decoration-[#4ade80]/40 underline-offset-4 transition-colors visited:text-[#22c55e] hover:text-[#16a34a] hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-semibold text-[#4ade80] transition-colors visited:text-[#22c55e] hover:text-[#16a34a]"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
