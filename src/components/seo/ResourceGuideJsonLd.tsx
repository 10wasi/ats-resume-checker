import { getSiteUrl } from "@/lib/site-url";
import { getContentLastUpdated } from "@/lib/seo/content-freshness";

type SchemaType = "Article" | "WebPage" | "CollectionPage";

export function ResourceGuideJsonLd({
  path,
  title,
  description,
  date,
  schemaType = "Article",
}: {
  path: string;
  title: string;
  description: string;
  date?: string;
  schemaType?: SchemaType;
}) {
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const modified = date ?? getContentLastUpdated(path);
  const data = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    headline: schemaType === "Article" ? title : undefined,
    description,
    datePublished: schemaType === "Article" ? modified : undefined,
    dateModified: modified,
    author:
      schemaType === "Article"
        ? { "@type": "Organization", name: "ResumeIQ" }
        : undefined,
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
    url: `${siteUrl}${path}`,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
