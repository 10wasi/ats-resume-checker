import type { AtsAnalysisResult } from "@/lib/ats/types";
import { buildCareerInsights } from "@/lib/ats/career-insights";

/**
 * Public reports are always full: no tiered stripping (100% free tool).
 */
export function applyReportTier(analysis: AtsAnalysisResult): AtsAnalysisResult {
  const fullInsights = buildCareerInsights(analysis);
  return {
    ...analysis,
    report_tier: "free",
    career_insights: { ...fullInsights, insights_unlocked: true },
  };
}
