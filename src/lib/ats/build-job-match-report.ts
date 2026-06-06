import { buildPersonalizedImprovementPlan } from "./build-improvement-plan";
import type { AtsAnalysisResult } from "./types";

export type SkillGapGroup = {
  label: string;
  items: string[];
};

export type JobMatchFix = {
  title: string;
  detail: string;
};

export type JobMatchReport = {
  overallMatchScore: number;
  atsScore: number;
  atsCompatibilityLabel: string;
  atsCompatibilityDescription: string;
  keywordCoveragePercent: number;
  keywordMatched: number;
  keywordTotal: number;
  missingKeywords: string[];
  foundKeywords: string[];
  skillGaps: SkillGapGroup[];
  formattingIssues: string[];
  resumeStrengths: string[];
  resumeWeaknesses: string[];
  topPriorityFixes: JobMatchFix[];
  quickWins: JobMatchFix[];
  suggestedAtsKeywords: string[];
};

function dedupe(items: string[], max: number): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of items) {
    const s = raw.trim();
    if (!s || seen.has(s.toLowerCase())) continue;
    seen.add(s.toLowerCase());
    out.push(s);
    if (out.length >= max) break;
  }
  return out;
}

export function buildJobMatchReport(analysis: AtsAnalysisResult): JobMatchReport {
  const plan = buildPersonalizedImprovementPlan(analysis, {
    hasJobDescription: true,
  });

  const missingCats = analysis.missing_keyword_categories;
  const skillGaps: SkillGapGroup[] = [];
  if (missingCats) {
    if (missingCats.technical_skills.length) {
      skillGaps.push({
        label: "Technical skills",
        items: missingCats.technical_skills,
      });
    }
    if (missingCats.tools_platforms.length) {
      skillGaps.push({
        label: "Tools & platforms",
        items: missingCats.tools_platforms,
      });
    }
    if (missingCats.soft_skills.length) {
      skillGaps.push({ label: "Soft skills", items: missingCats.soft_skills });
    }
    if (missingCats.certifications.length) {
      skillGaps.push({
        label: "Certifications",
        items: missingCats.certifications,
      });
    }
  }

  const keywordDetail = analysis.keyword_match_detail;
  const compatibility = analysis.ats_compatibility_rating;

  const suggestedAtsKeywords = dedupe(
    [
      ...analysis.missing_keywords,
      ...plan.missingKeywordsActionList.map((i) => i.title),
      ...(analysis.ai_resume_improvements?.keyword_suggestions ?? []),
    ],
    16
  );

  const strengths = dedupe(
    [
      ...(analysis.resume_strengths ?? []),
      ...plan.resumeStrengths.map((s) => s.detail),
    ],
    8
  );

  const weaknesses = dedupe(
    [
      ...(analysis.resume_weaknesses ?? []),
      ...(analysis.career_insights?.weaknesses ?? []),
    ],
    10
  );

  return {
    overallMatchScore: Math.round(analysis.job_match_score ?? 0),
    atsScore: Math.round(analysis.ats_score),
    atsCompatibilityLabel: compatibility?.label ?? "Fair",
    atsCompatibilityDescription:
      compatibility?.description ??
      "Review formatting and keyword alignment before applying.",
    keywordCoveragePercent: keywordDetail?.coverage_percent ?? 0,
    keywordMatched: keywordDetail?.matched ?? 0,
    keywordTotal: keywordDetail?.total ?? 0,
    missingKeywords: dedupe(analysis.missing_keywords, 20),
    foundKeywords: dedupe(analysis.matched_keywords ?? [], 20),
    skillGaps,
    formattingIssues: analysis.formatting_issues.slice(0, 8),
    resumeStrengths: strengths,
    resumeWeaknesses: weaknesses,
    topPriorityFixes: plan.topPriorityFixes.slice(0, 5).map((f) => ({
      title: f.title,
      detail: f.detail,
    })),
    quickWins: plan.quickWins.slice(0, 5).map((f) => ({
      title: f.title,
      detail: f.detail,
    })),
    suggestedAtsKeywords,
  };
}
