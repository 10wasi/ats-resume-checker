import type { ResumeSignals } from "./extract-resume-signals";

/** Deterministic breakdown; each component is capped per weights. */
export type ScoreBreakdown = {
  skills: number;
  experience: number;
  ats: number;
  formatting: number;
  education: number;
};

export type EngineScoreResult = {
  score: number;
  breakdown: ScoreBreakdown;
  suggestions: string[];
};

const W = {
  skills: 30,
  experience: 25,
  ats: 20,
  formatting: 15,
  education: 10,
} as const;

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

/** Title / role tokens from JD for light relevance (deterministic). */
function jdRoleKeywords(jdNorm: string): Set<string> {
  const hints = [
    "engineer",
    "developer",
    "manager",
    "analyst",
    "designer",
    "scientist",
    "architect",
    "consultant",
    "director",
    "specialist",
    "intern",
    "associate",
    "senior",
    "junior",
    "principal",
    "staff",
    "product",
    "marketing",
    "sales",
    "finance",
    "recruiter",
    "nurse",
    "physician",
    "teacher",
  ];
  const found = new Set<string>();
  for (const h of hints) {
    if (jdNorm.includes(h)) found.add(h);
  }
  return found;
}

function titleRelevanceScore(
  titles: string[],
  jdNorm: string
): number {
  if (!titles.length || !jdNorm) return 0.5;
  const roleKw = jdRoleKeywords(jdNorm);
  if (roleKw.size === 0) return 0.55;
  const lowerTitles = titles.map((t) => t.toLowerCase());
  let hits = 0;
  for (const t of lowerTitles) {
    for (const k of Array.from(roleKw)) {
      if (t.includes(k)) {
        hits++;
        break;
      }
    }
  }
  return clamp(hits / Math.max(1, lowerTitles.length), 0, 1);
}

function scoreSkills(s: ResumeSignals): number {
  const hasJd = s.jdKeywords.length > 0;
  let points = 0;

  if (hasJd) {
    const lexMatches = s.skillsFound.filter((sk) =>
      s.jdKeywords.some((jk) => sk.includes(jk) || jk.includes(sk))
    );
    const overlapRatio =
      s.skillsFound.length > 0
        ? lexMatches.length / Math.max(4, s.skillsFound.length)
        : 0;
    const coverage = s.jdCoverageRatio;
    points = W.skills * (0.45 * coverage + 0.35 * overlapRatio + 0.2 * (s.skillsSectionPresent ? 1 : 0.65));
  } else {
    const density = clamp(s.skillsFound.length / 14, 0, 1);
    points = W.skills * (0.55 * density + 0.45 * (s.skillsSectionPresent ? 1 : 0.72));
  }

  points = clamp(points, 0, W.skills);
  return round1(points);
}

function scoreExperience(s: ResumeSignals, jdNorm: string): number {
  let pts = 0;
  if (s.experiencePresent) pts += 3;
  else pts += 1;

  const years = s.estimatedYearsExperience;
  pts += clamp(years / 12, 0, 1) * 9;

  const bulletFactor = clamp(s.bulletCount / 10, 0, 1) * 8;
  pts += bulletFactor;

  const metricRatio =
    s.bulletCount > 0 ? s.bulletsWithMetrics / s.bulletCount : 0;
  pts += clamp(metricRatio, 0, 1) * 4;

  const rel = titleRelevanceScore(s.jobTitles, jdNorm);
  pts += rel * 5;

  if (!s.experiencePresent) pts *= 0.85;

  pts = clamp(pts, 0, W.experience);
  return round1(pts);
}

function scoreAts(s: ResumeSignals): number {
  if (s.jdKeywords.length === 0) {
    /** Generic ATS keyword richness from lexicon hits */
    const richness = clamp(s.skillsFound.length / 18, 0, 1);
    return round1(W.ats * (0.4 + 0.6 * richness));
  }
  const cov = s.jdCoverageRatio;
  /** Slight penalty for many missing must-like tokens */
  const missingPenalty = clamp(s.jdKeywordsMissing.length / 25, 0, 0.35);
  const raw = cov * (1 - missingPenalty * 0.5);
  return round1(W.ats * clamp(raw, 0, 1));
}

function scoreFormatting(s: ResumeSignals): number {
  let pts: number = W.formatting;
  for (const _ of s.formattingRiskFlags) {
    pts -= 2.5;
  }
  pts = clamp(pts, 0, W.formatting);
  return round1(pts);
}

function scoreEducation(s: ResumeSignals, jdNorm: string): number {
  const jdWantsDegree =
    /\b(bachelor|master|phd|mba|degree|bs\b|ms\b|ba\b)\b/i.test(jdNorm);
  let pts = 0;
  if (s.educationPresent) {
    pts += 4;
    pts += jdWantsDegree ? 6 : 4;
  } else if (jdWantsDegree) {
    pts += 2;
  } else {
    pts += 3;
  }

  pts = clamp(pts, 0, W.education);
  return round1(pts);
}

function buildRuleSuggestions(
  s: ResumeSignals,
  b: ScoreBreakdown
): string[] {
  const out: string[] = [];
  if (s.missingSections.length) {
    out.push(
      `Add clear section headers for: ${s.missingSections.join(", ")} — ATS parsers rely on standard names.`
    );
  }
  if (s.jdKeywordsMissing.length > 0) {
    const top = s.jdKeywordsMissing.slice(0, 6).join(", ");
    out.push(
      `Work these posting-aligned terms in where truthful: ${top}.`
    );
  }
  if (s.bulletCount < 5 && s.experiencePresent) {
    out.push(
      "Expand experience with 4–6 impact bullets per role (action verb + scope + outcome)."
    );
  }
  if (s.bulletsWithMetrics / Math.max(1, s.bulletCount) < 0.35) {
    out.push(
      "Add quantified outcomes (%, $, time, scale) to at least half of your bullets."
    );
  }
  if (!s.summaryPresent) {
    out.push(
      "Add a 2-line professional summary: role + years + 1 proof point."
    );
  }
  if (s.formattingRiskFlags.includes("very_long_lines")) {
    out.push("Shorten lines over ~120 characters; dense paragraphs hurt skim-readers.");
  }
  if (b.skills < W.skills * 0.55) {
    out.push(
      "Strengthen the Skills area: mirror the stack/tools from the posting and group into categories."
    );
  }
  if (b.experience < W.experience * 0.55) {
    out.push(
      "Experience score is low: surface years, titles, and role-relevant tech above the fold."
    );
  }
  return Array.from(new Set(out)).slice(0, 10);
}

/**
 * Pure, deterministic scoring from extracted signals + optional JD.
 * Same inputs → same outputs (no randomness, no LLM).
 */
export function computeDeterministicScore(
  signals: ResumeSignals,
  jobDescription?: string
): EngineScoreResult {
  const jdNorm = (jobDescription ?? "").toLowerCase().trim();

  const skills = scoreSkills(signals);
  const experience = scoreExperience(signals, jdNorm);
  const ats = scoreAts(signals);
  const formatting = scoreFormatting(signals);
  const education = scoreEducation(signals, jdNorm);

  const breakdown: ScoreBreakdown = {
    skills,
    experience,
    ats,
    formatting,
    education,
  };

  const score = Math.round(
    breakdown.skills +
      breakdown.experience +
      breakdown.ats +
      breakdown.formatting +
      breakdown.education
  );

  const suggestions = buildRuleSuggestions(signals, breakdown);

  return {
    score: clamp(score, 0, 100),
    breakdown,
    suggestions,
  };
}

/** Job match 0–100 from weighted breakdown (deterministic). */
export function computeDeterministicJobMatch(
  breakdown: ScoreBreakdown
): number {
  const wSkills = 0.38;
  const wExp = 0.32;
  const wAts = 0.3;
  const jm =
    (breakdown.skills / W.skills) * wSkills * 100 +
    (breakdown.experience / W.experience) * wExp * 100 +
    (breakdown.ats / W.ats) * wAts * 100;
  return clamp(Math.round(jm), 0, 100);
}

/** Readability-style 0–100 from formatting + structure signals */
export function deriveReadabilityScore(breakdown: ScoreBreakdown): number {
  return clamp(
    Math.round(
      (breakdown.formatting / W.formatting) * 55 +
        (breakdown.ats / W.ats) * 25 +
        (breakdown.education / W.education) * 20
    ),
    0,
    100
  );
}

/** Keyword coverage pill — ATS slice scaled to 0–100 */
export function deriveKeywordCoverageScore(breakdown: ScoreBreakdown): number {
  return clamp(Math.round((breakdown.ats / W.ats) * 100), 0, 100);
}
