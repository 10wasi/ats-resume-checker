import { getSiteUrl } from "@/lib/site-url";
import { getContentLastUpdated } from "@/lib/seo/content-freshness";

export function ResourceGuideJsonLd({
  path,
  title,
  description,
  date,
}: {
  path: string;
  title: string;
  description: string;
  date?: string;
}) {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const modified = date ?? getContentLastUpdated(path);
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: modified,
    dateModified: modified,
    author: { "@type": "Organization", name: "ResumeIQ" },
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: siteUrl,
    },
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`,
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
