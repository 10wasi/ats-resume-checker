import { getSiteUrl } from "@/lib/site-url";
import { OG_IMAGE_HEIGHT, OG_IMAGE_PATH, OG_IMAGE_WIDTH } from "@/lib/seo/og-defaults";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const base = () => getSiteUrl().replace(/\/$/, "");

/** Stable @id anchors for linked entity graph (Organization ↔ WebSite ↔ Product ↔ WebPage). */
export const ENTITY_IDS = {
  organization: () => `${base()}/#organization`,
  website: () => `${base()}/#website`,
  product: () => `${base()}/#product`,
  logo: () => `${base()}/#logo`,
  webpage: (path: string) => `${base()}${path.startsWith("/") ? path : `/${path}`}`,
} as const;

/**
 * sameAs — add live profile URLs via env when available.
 * Placeholders document Knowledge Graph targets without fake URLs.
 */
export function getOrganizationSameAs(): string[] {
  const links = [
    "https://github.com/10wasi/ats-resume-checker",
    process.env.NEXT_PUBLIC_ORG_LINKEDIN_URL,
    process.env.NEXT_PUBLIC_ORG_TWITTER_URL,
    process.env.NEXT_PUBLIC_ORG_YOUTUBE_URL,
    process.env.NEXT_PUBLIC_ORG_CRUNCHBASE_URL,
  ].filter((u): u is string => Boolean(u && u.startsWith("http")));
  return links;
}

export function buildOrganizationEntity() {
  const site = base();
  return {
    "@type": "Organization",
    "@id": ENTITY_IDS.organization(),
    name: "ResumeIQ",
    alternateName: ["ATS Resume Checker", "Free ATS Resume Checker", "Resume IQ"],
    url: site,
    logo: {
      "@type": "ImageObject",
      "@id": ENTITY_IDS.logo(),
      url: `${site}${OG_IMAGE_PATH}`,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
    },
    foundingDate: "2024",
    description:
      "Free AI-powered ATS resume checker — instant score, parser preview, keyword analysis, and fix recommendations. No signup required.",
    knowsAbout: [
      "Applicant Tracking System",
      "ATS resume checker",
      "Resume optimization",
      "Resume parsing",
      "Resume keyword matching",
      "AI resume analysis",
      "Job application screening",
      "Resume formatting",
      "CV checker",
      "Career development",
    ],
    sameAs: getOrganizationSameAs(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${site}/contact`,
      availableLanguage: ["English"],
    },
  };
}

export function buildWebSiteEntity() {
  const site = base();
  return {
    "@type": "WebSite",
    "@id": ENTITY_IDS.website(),
    name: "ResumeIQ",
    alternateName: "ATS Resume Checker",
    url: site,
    description:
      "Free ATS resume checker — AI scan, parser test, keyword gaps, and resume optimization guides.",
    publisher: { "@id": ENTITY_IDS.organization() },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site}${RESUME_CHECKER_PATH}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildProductEntity() {
  const site = base();
  return {
    "@type": "SoftwareApplication",
    "@id": ENTITY_IDS.product(),
    name: "ResumeIQ ATS Resume Checker",
    alternateName: [
      "ATS Resume Checker",
      "Free ATS Resume Checker",
      "Resume Score Checker",
      "Resume Parser",
    ],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    description:
      "AI-powered free ATS resume checker — upload PDF, get instant parser preview, ATS score, keyword scanner, and professional analysis. No signup.",
    url: `${site}${RESUME_CHECKER_PATH}`,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Instant ATS score",
      "Resume parser preview",
      "Keyword gap analysis",
      "AI professional recommendations",
      "Job description match",
      "PDF and DOCX upload",
      "No signup required",
    ],
    provider: { "@id": ENTITY_IDS.organization() },
    publisher: { "@id": ENTITY_IDS.organization() },
  };
}

export function buildWebPageEntity(path: string, title: string, description: string) {
  const site = base();
  const id = ENTITY_IDS.webpage(path);
  return {
    "@type": "WebPage",
    "@id": id,
    url: id.replace(/#.*$/, "") || `${site}${path}`,
    name: title,
    description,
    isPartOf: { "@id": ENTITY_IDS.website() },
    about: { "@id": ENTITY_IDS.product() },
    publisher: { "@id": ENTITY_IDS.organization() },
    inLanguage: "en-US",
  };
}

/** Emit a linked @graph for layout-level entities. */
export function buildCoreEntityGraph(extra: Record<string, unknown>[] = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationEntity(), buildWebSiteEntity(), buildProductEntity(), ...extra],
  };
}

export function entityRefOrganization() {
  return { "@id": ENTITY_IDS.organization() };
}

export function entityRefWebsite() {
  return { "@id": ENTITY_IDS.website() };
}

export function entityRefProduct() {
  return { "@id": ENTITY_IDS.product() };
}
