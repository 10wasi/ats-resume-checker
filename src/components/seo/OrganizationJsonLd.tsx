import { buildOrganizationEntity, buildWebSiteEntity, buildProductEntity } from "@/lib/seo/entity-graph";

/** @deprecated Use EntityGraphJsonLd in layout — kept for backward compatibility if imported elsewhere. */
export function OrganizationJsonLd() {
  const schema = buildOrganizationEntity();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...schema }),
      }}
    />
  );
}

export { buildWebSiteEntity, buildProductEntity };
