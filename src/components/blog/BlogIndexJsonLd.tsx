import type { BlogPost } from "@/lib/blog/types";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl().replace(/\/$/, "");

export function BlogIndexJsonLd({ posts }: { posts: BlogPost[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ResumeIQ Blog — ATS Resume Guides",
    description:
      "Guides on AI resume checking, ATS optimization, and interview-ready resumes.",
    url: `${siteUrl}/blog`,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 20).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}/blog/${p.slug}`,
        name: p.seoTitle ?? p.title,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
