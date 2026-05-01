import type { BlogPost } from "@/lib/blog/types";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export function BlogIndexJsonLd({ posts }: { posts: BlogPost[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ResumeIQ Blog",
    description:
      "Guides on AI resume checking, ATS optimization, and interview-ready resumes.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: siteUrl,
    },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.seoTitle ?? p.title,
      description: p.description,
      datePublished: p.date,
      url: `${siteUrl}/blog/${p.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
