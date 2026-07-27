import { buildProductEntity } from "@/lib/seo/entity-graph";

/** Homepage SoftwareApplication — linked to Organization @id via entity graph. */
export function HomeWebApplicationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    ...buildProductEntity(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
