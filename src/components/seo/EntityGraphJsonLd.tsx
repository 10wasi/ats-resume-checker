import { buildCoreEntityGraph } from "@/lib/seo/entity-graph";

/** Site-wide linked entity @graph — Organization, WebSite, Product with stable @id. */
export function EntityGraphJsonLd() {
  const schema = buildCoreEntityGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
