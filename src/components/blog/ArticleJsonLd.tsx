import type { BlogPost } from "@/lib/blog/types";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export function ArticleJsonLd({
  post,
  slug,
}: {
  post: BlogPost;
  slug: string;
}) {
  const headline = post.seoTitle ?? post.title;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
    keywords: post.tags?.join(", "),
    articleSection: "Career",
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
