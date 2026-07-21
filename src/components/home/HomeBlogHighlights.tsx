import Link from "next/link";
import { getPostMeta } from "@/lib/blog";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Curated high-intent posts — stable "popular" block independent of publish date. */
const POPULAR_SLUGS = [
  "best-ats-resume-checker-free-online-for-job-seekers-2026-guide",
  "why-resume-rejected-ats-top-reasons-fixes",
  "how-to-make-your-resume-ats-friendly-2026-complete-guide",
  "10-resume-mistakes-ats-rejections-2026",
] as const;

function PostList({
  posts,
  heading,
  headingId,
}: {
  posts: ReturnType<typeof getPostMeta>;
  heading: string;
  headingId: string;
}) {
  if (posts.length === 0) return null;
  return (
    <div>
      <h3 id={headingId} className="font-display text-lg font-bold text-slate-900 sm:text-xl">
        {heading}
      </h3>
      <ul className="mt-4 space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group block rounded-xl border border-slate-200/90 bg-white px-4 py-3 transition hover:border-emerald-300"
            >
              <span className="font-semibold text-slate-900 group-hover:text-[#16a34a]">
                {p.title}
              </span>
              <span className="mt-1 block line-clamp-2 text-sm text-slate-600">
                {p.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Latest + popular blog links — authority hub for content discovery. */
export function HomeBlogHighlights() {
  const all = getPostMeta();
  const latest = all.slice(0, 4);
  const popular = POPULAR_SLUGS.map((slug) => all.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <section
      className="border-b border-slate-200/70 bg-white py-14 sm:py-16"
      aria-labelledby="home-articles-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Career library</p>
          <h2
            id="home-articles-heading"
            className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            Popular &amp; latest ATS guides
          </h2>
          <p className="mt-3 text-slate-600">
            Deep dives on scoring, keywords, and rejection fixes—each links back to the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free resume checker
            </Link>
            .
          </p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <PostList posts={popular} heading="Popular articles" headingId="popular-articles" />
          <PostList posts={latest} heading="Latest articles" headingId="latest-articles" />
        </div>
        <p className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#16a34a] underline underline-offset-2"
          >
            Browse all blog articles →
          </Link>
        </p>
      </div>
    </section>
  );
}
