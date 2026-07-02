import type { BlogPost } from "@/lib/blog/types";
import { getContentLastUpdated } from "@/lib/seo/content-freshness";
import { OG_IMAGE_HEIGHT, OG_IMAGE_PATH, OG_IMAGE_WIDTH } from "@/lib/seo/og-defaults";
import { getSiteUrl } from "@/lib/site-url";

export function ArticleJsonLd({
  post,
  slug,
}: {
  post: BlogPost;
  slug: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const headline = post.seoTitle ?? post.title;
  const modified = getContentLastUpdated(`/blog/${slug}`);
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description: post.description,
    datePublished: post.date,
    dateModified: modified,
    image: {
      "@type": "ImageObject",
      url: `${base}${OG_IMAGE_PATH}`,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
    },
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}${OG_IMAGE_PATH}`,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${base}/blog/${slug}`,
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
