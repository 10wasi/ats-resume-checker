/**
 * SEO Roadmap — priorities, expected impact, and file ownership.
 * Runtime export for dashboards; human-readable report in SEO_ROADMAP.md generated from this source.
 */
import { KEYWORD_CLUSTERS_100 } from "./keyword-clusters-100";

export type RoadmapPriority = "P0" | "P1" | "P2" | "P3";

export type RoadmapItem = {
  id: string;
  priority: RoadmapPriority;
  title: string;
  expectedImpact: string;
  files: string[];
  reason: string;
  status: "done" | "in_progress" | "planned";
};

export const SEO_ROADMAP: RoadmapItem[] = [
  {
    id: "entity-graph",
    priority: "P0",
    title: "Linked entity @graph (Organization, WebSite, Product)",
    expectedImpact: "Knowledge Graph readiness; richer SERP entity understanding",
    files: ["src/lib/seo/entity-graph.ts", "src/components/seo/EntityGraphJsonLd.tsx", "src/app/layout.tsx"],
    reason: "Connects Organization, WebSite, and Product via stable @id references instead of isolated scripts.",
    status: "done",
  },
  {
    id: "keyword-clusters-100",
    priority: "P0",
    title: "100 keyword topical map (anti-cannibalization)",
    expectedImpact: "Clear URL ownership; faster ranking for long-tail clusters",
    files: ["src/lib/seo/keyword-clusters-100.ts"],
    reason: "One primary keyword maps to exactly one canonical landing page across 10 categories.",
    status: "done",
  },
  {
    id: "programmatic-professions",
    priority: "P0",
    title: "Programmatic profession landings (+10 roles)",
    expectedImpact: "Vertical SERP coverage (nurse, doctor, developer, etc.)",
    files: [
      "src/lib/content/sprint3/programmatic-professions.ts",
      "src/lib/content/resume-checker-roles/registry.ts",
    ],
    reason: "Scales industry pages without duplicate templates; each role gets 1,500+ word body + FAQ schema.",
    status: "done",
  },
  {
    id: "statistics-magnets",
    priority: "P1",
    title: "Backlink magnet statistics pages",
    expectedImpact: "Natural links from career blogs, newsletters, university resources",
    files: [
      "src/lib/content/sprint3/statistics-pages.ts",
      "src/app/(marketing)/statistics/page.tsx",
      "src/app/(marketing)/resume-statistics/page.tsx",
    ],
    reason: "Data tables and benchmarks are cite-worthy; each page links to free checker conversion path.",
    status: "done",
  },
  {
    id: "ctr-meta-refresh",
    priority: "P1",
    title: "CTR meta templates (Free, AI, Instant, No signup)",
    expectedImpact: "Impression→click lift on homepage and tool landings (GSC CTR gap)",
    files: ["src/lib/seo/meta-templates.ts", "src/lib/seo/ctr-metadata.ts"],
    reason: "Low CTR with rising impressions indicates snippet underperformance—not ranking alone.",
    status: "done",
  },
  {
    id: "engagement-section",
    priority: "P1",
    title: "Page engagement blocks (tools, blogs, tips)",
    expectedImpact: "Higher session duration, deeper crawl, more internal PageRank flow",
    files: ["src/components/seo/PageEngagementSection.tsx", "src/components/hub/ResumeCheckerRoleLanding.tsx"],
    reason: "Minimum 10 internal links + latest articles keep users and bots in the topical cluster.",
    status: "done",
  },
  {
    id: "gsc-indexing",
    priority: "P1",
    title: "Request indexing for new clusters in GSC",
    expectedImpact: "Faster discovery of 30+ new URLs",
    files: ["src/app/sitemap.ts"],
    reason: "Sitemap lists URLs; manual GSC inspection accelerates first crawl after deploy.",
    status: "planned",
  },
  {
    id: "parser-preview-product",
    priority: "P0",
    title: "Parser preview on /resume-checker (product)",
    expectedImpact: "Conversion + engagement; reduces bounce vs competitors",
    files: ["src/app/(marketing)/resume-checker/page.tsx"],
    reason: "Highest ROI product gap vs Jobscan—not SEO, but multiplies traffic value.",
    status: "planned",
  },
  {
    id: "sameas-live-profiles",
    priority: "P2",
    title: "Populate sameAs env vars (LinkedIn, YouTube)",
    expectedImpact: "Entity disambiguation for Knowledge Graph",
    files: ["src/lib/seo/entity-graph.ts"],
    reason: "GitHub alone is thin; add real profiles via NEXT_PUBLIC_ORG_* when available.",
    status: "planned",
  },
  {
    id: "backlink-outreach",
    priority: "P2",
    title: "Outreach to career centers for statistics hub",
    expectedImpact: "Domain authority + referral traffic",
    files: ["src/app/(marketing)/statistics/page.tsx"],
    reason: "Statistics hub designed as cite-worthy resource—not paid links.",
    status: "planned",
  },
];

export const SEO_FUTURE_ROADMAP = [
  "Expand programmatic professions to 50+ roles using profession template factory",
  "Wire KEYWORD_CLUSTERS_100 into RelatedResources PATH_RELATED_KEYS automatically",
  "Add DefinedTermSet JSON-LD to /glossary terms",
  "Weekly GSC CTR experiments on homepage title variants",
  "Industry-specific downloadable checklists (PDF) for link magnets",
  "Hreflang if localized country pages expand beyond English",
];

export function getRoadmapSummary() {
  return {
    totalKeywords: KEYWORD_CLUSTERS_100.length,
    doneItems: SEO_ROADMAP.filter((i) => i.status === "done").length,
    plannedItems: SEO_ROADMAP.filter((i) => i.status === "planned").length,
    priorities: {
      P0: SEO_ROADMAP.filter((i) => i.priority === "P0").length,
      P1: SEO_ROADMAP.filter((i) => i.priority === "P1").length,
    },
  };
}
