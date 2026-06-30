import { deriveAtsCompatibilityRating } from "./compatibility-rating";
import type { AtsAnalysisResult, KeywordCategoryBreakdown } from "./types";
import type { ResumeSignals } from "./extract-resume-signals";
import type { EngineScoreResult } from "./score-engine";
import {
  computeDeterministicJobMatch,
  deriveKeywordCoverageScore,
  deriveReadabilityScore,
} from "./score-engine";
import { buildOfflineAiImprovements } from "./build-offline-ai-improvements";
import { extractResumeSnippets } from "./extract-resume-snippets";
import type { AiQualitativePayload } from "./parse-analysis";

const FORMAT_FLAG_MESSAGES: Record<string, string> = {
  resume_text_very_short:
    "Resume body is short — recruiters may assume limited impact; add measurable bullets.",
  resume_text_very_long:
    "Resume is very long — tighten to the most recent 10–15 years and strongest wins.",
  very_long_lines:
    "Some lines run very long — break dense paragraphs into scannable bullets.",
  few_or_no_bullet_markers:
    "Few bullet markers detected — ATS and recruiters prefer clear bullet lists for impact.",
  limited_bullet_points:
    "Limited bullet points under experience — aim for 4–6 per recent role.",
  no_summary_section:
    "No summary/profile block — a tight 2-line opener helps keyword and human skims.",
};

const CERT_HINTS = [
  "certified",
  "certification",
  "certificate",
  "pmp",
  "cpa",
  "acls",
  "bls",
  "rn",
  "aws certified",
  "google certified",
  "scrum master",
];
const SOFT_HINTS = [
  "communication",
  "leadership",
  "collaboration",
  "stakeholder",
  "cross-functional",
  "teamwork",
  "presentation",
  "mentoring",
  "problem solving",
  "time management",
  "negotiation",
];
const TOOL_HINTS = [
  "salesforce",
  "hubspot",
  "jira",
  "figma",
  "tableau",
  "power bi",
  "excel",
  "workday",
  "epic",
  "slack",
  "teams",
  "google ads",
  "meta ads",
  "ga4",
  "aws",
  "azure",
  "gcp",
  "docker",
  "kubernetes",
  "react",
  "node",
  "sql",
  "python",
];

function categorizeKeywords(items: string[]): KeywordCategoryBreakdown {
  const buckets: KeywordCategoryBreakdown = {
    technical_skills: [],
    soft_skills: [],
    tools_platforms: [],
    certifications: [],
  };
  for (const raw of items) {
    const term = raw.trim();
    if (!term) continue;
    const low = term.toLowerCase();
    if (CERT_HINTS.some((h) => low.includes(h))) {
      if (!buckets.certifications.includes(term)) buckets.certifications.push(term);
      continue;
    }
    if (SOFT_HINTS.some((h) => low.includes(h))) {
      if (!buckets.soft_skills.includes(term)) buckets.soft_skills.push(term);
      continue;
    }
    if (TOOL_HINTS.some((h) => low.includes(h)) || /[+/#]|\d/.test(low)) {
      if (!buckets.tools_platforms.includes(term)) buckets.tools_platforms.push(term);
      continue;
    }
    if (!buckets.technical_skills.includes(term)) buckets.technical_skills.push(term);
  }
  return buckets;
}
/** When the LLM is unavailable, still return coach-style text grounded in signals. */
export function buildOfflineQualitativeFallback(
  signals: ResumeSignals
): AiQualitativePayload {
  const missing = signals.jdKeywordsMissing.slice(0, 8);
  const formatting: string[] = [];
  for (const flag of signals.formattingRiskFlags) {
    const msg = FORMAT_FLAG_MESSAGES[flag];
    if (msg) formatting.push(msg);
  }

  return {
    missing_keywords: missing,
    formatting_issues: formatting.slice(0, 8),
    grammar_issues: [],
    section_feedback: {
      summary: signals.summaryPresent
        ? "Tighten your summary with one headline win (metric or scale) that mirrors the role."
        : "Add a two-line summary: title, years of experience, and the single biggest outcome you deliver.",
      experience:
        signals.bulletCount >= 6
          ? "Solid bullet count — push metrics on every bullet where you can honestly quantify."
          : "Add more outcome bullets (4–6 per recent job): verb + scope + measurable result.",
      skills: signals.skillsSectionPresent
        ? "Reorder skills so the top line matches the posting’s must-have tools."
        : "Add a Skills section grouped by category; mirror the job’s language verbatim where true.",
    },
    improved_bullets: [
      "Tip: paste your best bullet here and add a number — time saved, dollars, % improvement, or scale (users/requests).",
    ],
  };
}

function deriveResumeStrengths(
  signals: ResumeSignals,
  formatting_issues: string[],
  hasJobDescription: boolean
): string[] {
  const out: string[] = [];
  if (signals.summaryPresent) {
    out.push("Summary or profile section detected—helps keyword and human skims.");
  }
  if (signals.skillsSectionPresent) {
    out.push("Dedicated skills section improves ATS searchability.");
  }
  if (signals.bulletCount >= 6) {
    out.push("Healthy number of experience bullets for impact and parsing.");
  }
  if (formatting_issues.length === 0) {
    out.push("No major layout or ATS formatting flags on this export.");
  }
  if (
    hasJobDescription &&
    signals.jdKeywords.length > 0 &&
    signals.jdCoverageRatio >= 0.55
  ) {
    out.push(
      `Solid posting keyword overlap (${Math.round(signals.jdCoverageRatio * 100)}% of extracted terms).`
    );
  }
  if (signals.experiencePresent) {
    out.push("Experience section mapped clearly for parsers.");
  }
  return out.slice(0, 6);
}

function deriveResumeWeaknesses(
  formatting_issues: string[],
  grammar_issues: string[],
  missing_keywords: string[],
  signals: ResumeSignals
): string[] {
  const out: string[] = [];
  formatting_issues.slice(0, 4).forEach((x) => out.push(x));
  grammar_issues.slice(0, 3).forEach((x) => out.push(x));
  if (missing_keywords.length > 0) {
    out.push(
      `Missing posting keywords: ${missing_keywords.slice(0, 5).join(", ")}${missing_keywords.length > 5 ? "…" : ""}.`
    );
  }
  if (!signals.summaryPresent) {
    out.push("No summary/profile block—keyword and human skims start weaker.");
  }
  if (!signals.skillsSectionPresent) {
    out.push("No dedicated skills section—tools may be harder for ATS to find.");
  }
  if (
    signals.bulletCount > 0 &&
    signals.bulletsWithMetrics < Math.max(2, signals.bulletCount / 2)
  ) {
    out.push("Few bullets include measurable outcomes—add metrics where truthful.");
  }
  return dedupeStrings(out, 8);
}

function dedupeStrings(items: string[], max: number): string[] {
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

export function mergeResumeAnalysis(
  engine: EngineScoreResult,
  signals: ResumeSignals,
  ai: AiQualitativePayload,
  hasJobDescription: boolean,
  resumeText?: string
): AtsAnalysisResult {
  const ruleMissing = signals.jdKeywordsMissing.slice(0, 10);
  const mergedMissing = dedupeStrings(
    [...ruleMissing, ...ai.missing_keywords],
    15
  );

  const ruleFormatting: string[] = [];
  for (const flag of signals.formattingRiskFlags) {
    const msg = FORMAT_FLAG_MESSAGES[flag];
    if (msg) ruleFormatting.push(msg);
  }
  const formatting_issues = dedupeStrings(
    [...ruleFormatting, ...ai.formatting_issues],
    14
  );

  const grammar_issues = dedupeStrings([...ai.grammar_issues], 12);

  const fromAiSuggestions: string[] = [];
  for (const g of ai.grammar_issues.slice(0, 2)) {
    if (g) fromAiSuggestions.push(`Grammar / wording: ${g}`);
  }
  for (const b of ai.improved_bullets.slice(0, 3)) {
    if (b) fromAiSuggestions.push(`Stronger bullet idea: ${b}`);
  }

  const suggestions = dedupeStrings(
    [...engine.suggestions, ...fromAiSuggestions],
    15
  );

  const breakdown = engine.breakdown;
  const keyword_match_score = deriveKeywordCoverageScore(breakdown);
  const readability_score = deriveReadabilityScore(breakdown);

  const snippets = resumeText?.trim()
    ? extractResumeSnippets(resumeText)
    : { summary: "", skills: "", bullets: [] };

  const ai_resume_improvements =
    ai.ai_resume_improvements ??
    buildOfflineAiImprovements(signals, ai, snippets, hasJobDescription);

  const result: AtsAnalysisResult = {
    ats_score: engine.score,
    score_breakdown: breakdown,
    ats_compatibility_rating: deriveAtsCompatibilityRating(engine.score),
    resume_strengths: deriveResumeStrengths(
      signals,
      formatting_issues,
      hasJobDescription
    ),
    resume_weaknesses: deriveResumeWeaknesses(
      formatting_issues,
      grammar_issues,
      mergedMissing,
      signals
    ),
    ai_resume_improvements,
    suggestions,
    keyword_match_score,
    missing_keywords: mergedMissing,
    missing_keyword_categories: hasJobDescription
      ? categorizeKeywords(mergedMissing)
      : undefined,
    matched_keywords: hasJobDescription
      ? dedupeStrings(signals.jdKeywordsMatched, 20)
      : undefined,
    found_keyword_categories: hasJobDescription
      ? categorizeKeywords(dedupeStrings(signals.jdKeywordsMatched, 20))
      : undefined,
    detected_skills: dedupeStrings(signals.skillsFound, 24),
    missing_sections:
      signals.missingSections.length > 0 ? [...signals.missingSections] : undefined,
    formatting_issues,
    grammar_issues,
    readability_score,
    section_feedback: ai.section_feedback,
    improved_bullets: ai.improved_bullets,
  };

  if (hasJobDescription) {
    result.job_match_score = computeDeterministicJobMatch(breakdown);
    if (signals.jdKeywords.length > 0) {
      result.keyword_match_detail = {
        matched: signals.jdKeywordsMatched.length,
        total: signals.jdKeywords.length,
        coverage_percent: Math.round(signals.jdCoverageRatio * 100),
      };
    }
  }

  return result;
}
