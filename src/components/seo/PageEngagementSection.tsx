import Link from "next/link";
import { getPostSlugs, getPostBySlug } from "@/lib/blog";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { AuthorityOutboundLinks } from "@/components/seo/AuthorityOutboundLinks";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const TOOL_LINKS = [
  { href: RESUME_CHECKER_PATH, title: "ATS Resume Checker", desc: "Instant score & parser preview" },
  { href: "/resume-parser", title: "Resume Parser", desc: "See extracted text order" },
  { href: "/resume-keyword-checker", title: "Keyword Checker", desc: "Missing posting terms" },
  { href: "/ats-score-checker", title: "ATS Score Checker", desc: "Compatibility bands" },
  { href: "/resume-analyzer", title: "Resume Analyzer", desc: "AI section feedback" },
  { href: "/resume-job-description-match", title: "Match Analyzer", desc: "JD match %" },
];

type Props = {
  path: string;
  heading?: string;
};

/** Session duration + crawl depth — related tools, blogs, continue reading (Phase 6–7). */
export function PageEngagementSection({ path, heading = "Keep optimizing" }: Props) {
  const blogSlugs = getPostSlugs().slice(0, 6);
  const articles = blogSlugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      return { slug, title: post.title, description: post.description };
    })
    .filter(Boolean) as { slug: string; title: string; description: string }[];

  return (
    <section className="mt-14 space-y-10 border-t border-slate-200 pt-10" aria-labelledby="engagement-heading">
      <h2 id="engagement-heading" className="font-display text-xl font-bold text-slate-900">
        {heading}
      </h2>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Related tools</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_LINKS.map((t) => (
            <li key={t.href} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm">
              <Link href={t.href} className="font-semibold text-[#16a34a] underline">
                {t.title}
              </Link>
              <p className="mt-0.5 text-slate-600">{t.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Latest articles</h3>
        <ul className="mt-3 space-y-3">
          {articles.map((a) => (
            <li key={a.slug} className="rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3">
              <Link href={`/blog/${a.slug}`} className="font-semibold text-slate-900 underline decoration-emerald-200 hover:text-[#16a34a]">
                {a.title}
              </Link>
              <p className="mt-1 text-sm text-slate-600 line-clamp-2">{a.description}</p>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="mt-3 inline-block text-sm font-semibold text-[#16a34a] underline">
          Continue reading on the blog →
        </Link>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Resume tips</h3>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {[
            ["/ats-resume-format", "ATS formatting"],
            ["/resume-action-verbs", "Action verbs"],
            ["/ats-resume-mistakes", "Common mistakes"],
            ["/resume-length-guide", "Resume length"],
            ["/resume-resources", "Resource hub"],
            ["/glossary", "ATS glossary"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 hover:border-emerald-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <RelatedResources path={path} excludeHref={path} limit={12} />
      <AuthorityOutboundLinks />
    </section>
  );
}
