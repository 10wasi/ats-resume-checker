import { buildWebSiteEntity } from "@/lib/seo/entity-graph";

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    ...buildWebSiteEntity(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
