import { JD_STOPWORDS } from "./stopwords";
import { SKILL_LEXICON_SORTED } from "./tech-lexicon";

export type JdKeywordCategories = {
  technical_skills: string[];
  soft_skills: string[];
  tools_platforms: string[];
  certifications: string[];
  other: string[];
};

const SOFT_HINTS = [
  "communication",
  "leadership",
  "collaboration",
  "stakeholder",
  "teamwork",
  "problem",
  "analytical",
  "detail",
  "organized",
  "interpersonal",
];

const CERT_HINTS = ["certified", "certification", "pmp", "cpa", "aws", "azure", "shrm", "phr"];

const TOOL_HINTS = [
  "excel",
  "salesforce",
  "hubspot",
  "jira",
  "tableau",
  "power bi",
  "sap",
  "netsuite",
  "workday",
  "zendesk",
  "python",
  "sql",
  "react",
  "docker",
  "kubernetes",
];

function normalizeForMatch(s: string): string {
  return s
    .toLowerCase()
    .replace(/\u00a0/g, " ")
    .replace(/[|/_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeJD(jd: string): string[] {
  const raw = jd.toLowerCase().replace(/[^a-z0-9+#./\s-]/gi, " ");
  const parts = raw.split(/\s+/).filter(Boolean);
  const out: string[] = [];
  for (const p of parts) {
    if (p.length < 3) continue;
    if (JD_STOPWORDS.has(p)) continue;
    out.push(p);
  }
  const seen = new Set<string>();
  const uniq: string[] = [];
  for (const t of out) {
    if (seen.has(t)) continue;
    seen.add(t);
    uniq.push(t);
    if (uniq.length >= 80) break;
  }
  return uniq;
}

function jdSkillTokens(jdNorm: string): string[] {
  const fromLex: string[] = [];
  for (const term of SKILL_LEXICON_SORTED) {
    if (jdNorm.includes(term)) fromLex.push(term);
  }
  return Array.from(new Set(fromLex)).slice(0, 40);
}

export function categorizeJdKeywords(items: string[]): JdKeywordCategories {
  const buckets: JdKeywordCategories = {
    technical_skills: [],
    soft_skills: [],
    tools_platforms: [],
    certifications: [],
    other: [],
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
    if (term.length >= 4 && !buckets.technical_skills.includes(term)) {
      buckets.technical_skills.push(term);
      continue;
    }
    if (!buckets.other.includes(term)) buckets.other.push(term);
  }
  return buckets;
}

/** Extract searchable ATS keywords from a job description (no resume required). */
export function extractJdKeywords(jobDescription: string): {
  keywords: string[];
  categories: JdKeywordCategories;
} {
  const jdRaw = jobDescription.trim();
  if (!jdRaw) {
    return {
      keywords: [],
      categories: {
        technical_skills: [],
        soft_skills: [],
        tools_platforms: [],
        certifications: [],
        other: [],
      },
    };
  }
  const jdNorm = normalizeForMatch(jdRaw);
  const jdTokens = tokenizeJD(jdRaw);
  const jdLexHits = jdSkillTokens(jdNorm);
  const keywords = Array.from(new Set([...jdLexHits, ...jdTokens.slice(0, 40)])).slice(
    0,
    45
  );
  return { keywords, categories: categorizeJdKeywords(keywords) };
}
