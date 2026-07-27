import { STATISTICS_PAGES } from "@/lib/content/sprint3/statistics-pages";
import { Sprint3LandingPage, sprint3Metadata } from "@/lib/content/sprint3/page";

const SPECS = Object.fromEntries(STATISTICS_PAGES.map((p) => [p.id, p])) as Record<
  string,
  (typeof STATISTICS_PAGES)[number]
>;

export type StatisticsSlug =
  | "resume-statistics"
  | "ats-statistics"
  | "hiring-statistics"
  | "resume-benchmarks";

export function createStatisticsPage(slug: StatisticsSlug) {
  const spec = SPECS[slug];
  return {
    metadata: sprint3Metadata(spec),
    Page: function StatisticsPage() {
      return <Sprint3LandingPage spec={spec} />;
    },
  };
}
