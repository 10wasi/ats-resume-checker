import { getSiteUrl } from "@/lib/site-url";
import { getContentLastUpdated } from "@/lib/seo/content-freshness";
import { entityRefOrganization, ENTITY_IDS } from "@/lib/seo/entity-graph";

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
  const pageId = ENTITY_IDS.webpage(path);
  const data = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": pageId,
    name: title,
    headline: schemaType === "Article" ? title : undefined,
    description,
    datePublished: schemaType === "Article" ? modified : undefined,
    dateModified: modified,
    author: schemaType === "Article" ? entityRefOrganization() : undefined,
    publisher: entityRefOrganization(),
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageId },
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
