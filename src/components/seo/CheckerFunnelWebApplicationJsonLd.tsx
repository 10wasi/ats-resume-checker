import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { entityRefOrganization } from "@/lib/seo/entity-graph";

/** WebApplication schema for landing pages that funnel to the free checker. */
export function CheckerFunnelWebApplicationJsonLd({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: pageName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript.",
    url: `${base}${RESUME_CHECKER_PATH}`,
    description: pageDescription,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: entityRefOrganization(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
