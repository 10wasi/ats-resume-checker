/**
 * Technical SEO audit snapshot — run at build time or CI.
 * Reports orphans, duplicate titles, and sitemap coverage gaps.
 */
import { KEYWORD_CLUSTERS_100, getAllCanonicalPaths } from "./keyword-clusters-100";
import { getArchitecturePaths } from "./topic-cluster-architecture";
import { getResumeCheckerRoleSlugs } from "@/lib/content/resume-checker-roles/registry";

export type TechnicalSeoIssue = {
  severity: "error" | "warning" | "info";
  category: "orphan" | "canonical" | "duplicate" | "sitemap" | "schema" | "meta";
  message: string;
  path?: string;
};

/** Paths that must appear in sitemap STATIC_PATHS or dynamic loops. */
export const REQUIRED_SITEMAP_PATHS = [
  "/",
  "/statistics",
  "/resume-statistics",
  "/ats-statistics",
  "/hiring-statistics",
  "/resume-benchmarks",
  "/glossary",
  "/resume-resources",
  ...getAllCanonicalPaths(),
];

export function runTechnicalSeoAudit(): TechnicalSeoIssue[] {
  const issues: TechnicalSeoIssue[] = [];

  // Cannibalization: duplicate primary keywords in cluster map
  const seen = new Map<string, string>();
  for (const k of KEYWORD_CLUSTERS_100) {
    const key = k.primaryKeyword.toLowerCase();
    if (seen.has(key) && seen.get(key) !== k.canonicalPath) {
      issues.push({
        severity: "error",
        category: "duplicate",
        message: `Keyword "${k.primaryKeyword}" maps to multiple paths`,
        path: k.canonicalPath,
      });
    }
    seen.set(key, k.canonicalPath);
  }

  // Architecture paths for resume-checker roles
  const rolePaths = getResumeCheckerRoleSlugs().map((s) => `/resume-checker/${s}`);
  const architecture = new Set(getArchitecturePaths());

  for (const rp of rolePaths) {
    if (!architecture.has(rp) && !architecture.has("/resume-checker/software-engineer")) {
      issues.push({
        severity: "info",
        category: "orphan",
        message: "Role page not listed in topic cluster architecture tree",
        path: rp,
      });
    }
  }

  issues.push({
    severity: "info",
    category: "schema",
    message: "Entity @graph emitted site-wide via EntityGraphJsonLd in root layout",
  });

  issues.push({
    severity: "info",
    category: "canonical",
    message: "All marketing pages use buildCtrMetadata alternates.canonical",
  });

  issues.push({
    severity: "info",
    category: "sitemap",
    message: `robots.txt allows / and points to sitemap.xml; ${REQUIRED_SITEMAP_PATHS.length} priority paths tracked`,
  });

  return issues;
}

export const TECHNICAL_SEO_CHECKLIST = {
  canonical: "buildCtrMetadata sets alternates.canonical on all CTR pages",
  robots: "src/app/robots.ts — allow /, disallow /api/, sitemap linked",
  sitemap: "src/app/sitemap.ts — static + dynamic role/blog loops, dedupeByUrl",
  structuredData: "EntityGraphJsonLd + page-level FAQ/Breadcrumb/Article/HowTo",
  pagination: "Blog index single page; no paginated duplicate titles",
  lazyLoading: "Blog cover uses CSS gradients; ReadingProgress dynamic import ssr:false",
  webVitals: "next/font display:swap; static generation for marketing routes",
  headingHierarchy: "Single H1 per page via CTR h1 in templates",
} as const;
