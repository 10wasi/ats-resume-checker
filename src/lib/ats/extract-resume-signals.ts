import { JD_STOPWORDS } from "./stopwords";
import { EDUCATION_TERMS, SKILL_LEXICON_SORTED } from "./tech-lexicon";

export type ResumeSignals = {
  detectedSections: string[];
  missingSections: string[];
  skillsFound: string[];
  jobTitles: string[];
  estimatedYearsExperience: number;
  bulletCount: number;
  bulletsWithMetrics: number;
  wordCount: number;
  avgLineLength: number;
  maxLineLength: number;
  hasBulletMarkers: boolean;
  jdKeywords: string[];
  jdKeywordsMatched: string[];
  jdKeywordsMissing: string[];
  jdCoverageRatio: number;
  summaryPresent: boolean;
  experiencePresent: boolean;
  educationPresent: boolean;
  skillsSectionPresent: boolean;
  projectsPresent: boolean;
  formattingRiskFlags: string[];
};

const SECTION_PATTERNS: { key: string; re: RegExp }[] = [
  { key: "summary", re: /^\s*(professional\s+)?summary\b/i },
  { key: "experience", re: /^\s*(work\s+)?experience\b/i },
  { key: "education", re: /^\s*education\b/i },
  { key: "skills", re: /^\s*(technical\s+)?skills\b/i },
  { key: "projects", re: /^\s*projects?\b/i },
  { key: "certifications", re: /^\s*certifications?\b/i },
];

const BULLET_RE = /^\s*[-–—•*●◦▪]\s+|^\s*\d+[.)]\s+/;
/** Lines that look like a title before a date line */
const TITLE_LIKE = /^\s*[A-Z][^.]{2,80}$/;

const YEAR_RE = /\b(19[89]\d|20[0-3]\d)\b/g;
const YEARS_EXP_PHRASE = /\b(\d{1,2})\+?\s*years?\s+(?:of\s+)?experience\b/i;

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

function extractSkillsFromText(normalized: string): string[] {
  const found = new Set<string>();
  for (const term of SKILL_LEXICON_SORTED) {
    if (term.length >= 2 && normalized.includes(term)) {
      found.add(term);
    }
  }
  const lines = normalized.split("\n");
  for (const line of lines) {
    if (!/skill|technologies|tech stack|tools/i.test(line)) continue;
    const chunks = line.split(/[,;|/·]/).map((c) => c.trim());
    for (const c of chunks) {
      const t = c.replace(/^[\s•-]+/, "").trim();
      if (t.length >= 2 && t.length < 40) found.add(t);
    }
  }
  return Array.from(found).slice(0, 60);
}

function detectSectionHeaders(text: string): Set<string> {
  const found = new Set<string>();
  const lines = text.split(/\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length < 3 || trimmed.length > 48) continue;
    if (!/^[A-Za-z][A-Za-z\s&/+-]+$/.test(trimmed)) continue;
    for (const { key, re } of SECTION_PATTERNS) {
      if (re.test(trimmed)) found.add(key);
    }
  }
  return found;
}

function countBullets(text: string): { bullets: number; withMetrics: number } {
  let bullets = 0;
  let withMetrics = 0;
  const lines = text.split("\n");
  for (const line of lines) {
    if (!BULLET_RE.test(line)) continue;
    bullets++;
    if (/\d/.test(line)) withMetrics++;
  }
  return { bullets, withMetrics };
}

function hasAnyBulletMarkers(text: string): boolean {
  return text.split("\n").some((l) => BULLET_RE.test(l));
}

function estimateYearsFromText(text: string): number {
  const phrase = text.match(YEARS_EXP_PHRASE);
  if (phrase) {
    const n = parseInt(phrase[1]!, 10);
    if (!Number.isNaN(n)) return Math.min(40, Math.max(0, n));
  }
  const years: number[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(YEAR_RE.source, "g");
  while ((m = re.exec(text)) !== null) {
    years.push(parseInt(m[0]!, 10));
  }
  if (years.length < 2) return years.length === 1 ? Math.min(5, 2) : 0;
  const sorted = Array.from(new Set(years)).sort((a, b) => a - b);
  let hi = sorted[sorted.length - 1]!;
  const lower = text.toLowerCase();
  if (/\b(present|current|now)\b/.test(lower)) {
    hi = Math.max(hi, new Date().getFullYear());
  }
  const span = hi - sorted[0]!;
  return Math.min(40, Math.max(0, span));
}

function guessJobTitles(text: string): string[] {
  const titles: string[] = [];
  const lines = text.split("\n").map((l) => l.trim());
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    if (!TITLE_LIKE.test(line)) continue;
    if (line.length > 70) continue;
    const next = lines[i + 1] ?? "";
    if (
      /\b20\d{2}\b/.test(next) ||
      /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(next)
    ) {
      titles.push(line);
    }
  }
  return Array.from(new Set(titles)).slice(0, 8);
}

function jdSkillTokens(jdNorm: string): string[] {
  const fromLex: string[] = [];
  for (const term of SKILL_LEXICON_SORTED) {
    if (jdNorm.includes(term)) fromLex.push(term);
  }
  return Array.from(new Set(fromLex)).slice(0, 40);
}

export function extractResumeSignals(
  resumeText: string,
  jobDescription?: string
): ResumeSignals {
  const text = resumeText.replace(/\r\n/g, "\n");
  const normalized = normalizeForMatch(text);
  const lower = text.toLowerCase();

  const sections = detectSectionHeaders(text);
  const expected = ["experience", "education", "skills"] as const;
  const missingSections: string[] = [];
  for (const s of expected) {
    if (!sections.has(s)) missingSections.push(s);
  }

  const summaryPresent = sections.has("summary");
  const experiencePresent = sections.has("experience");
  const educationPresent =
    sections.has("education") ||
    Array.from(EDUCATION_TERMS).some((t) => lower.includes(t));
  const skillsSectionPresent = sections.has("skills");
  const projectsPresent = sections.has("projects");

  const skillsFound = extractSkillsFromText(normalized);
  const { bullets, withMetrics } = countBullets(text);
  const lines = text.split("\n");
  const lengths = lines.map((l) => l.length);
  const avgLineLength =
    lines.length > 0
      ? Math.round(lengths.reduce((a, b) => a + b, 0) / lines.length)
      : 0;
  const maxLineLength = lengths.length ? Math.max(...lengths) : 0;
  const words = normalized.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const hasBulletMarkers = hasAnyBulletMarkers(text);
  const estimatedYearsExperience = estimateYearsFromText(text);

  const jobTitles = guessJobTitles(text);

  const jdRaw = (jobDescription ?? "").trim();
  const jdNorm = normalizeForMatch(jdRaw);
  const jdTokens = jdRaw ? tokenizeJD(jdRaw) : [];
  const jdLexHits = jdRaw ? jdSkillTokens(jdNorm) : [];

  const jdKeywords = Array.from(
    new Set([...jdLexHits, ...jdTokens.slice(0, 40)])
  ).slice(0, 45);

  const jdKeywordsMatched: string[] = [];
  const jdKeywordsMissing: string[] = [];

  if (jdKeywords.length > 0) {
    for (const kw of jdKeywords) {
      if (normalized.includes(kw)) jdKeywordsMatched.push(kw);
      else jdKeywordsMissing.push(kw);
    }
  }

  const jdCoverageRatio =
    jdKeywords.length > 0
      ? jdKeywordsMatched.length / jdKeywords.length
      : 0;

  const formattingRiskFlags: string[] = [];
  if (wordCount < 120) formattingRiskFlags.push("resume_text_very_short");
  if (wordCount > 900) formattingRiskFlags.push("resume_text_very_long");
  if (maxLineLength > 130) formattingRiskFlags.push("very_long_lines");
  if (!hasBulletMarkers && experiencePresent)
    formattingRiskFlags.push("few_or_no_bullet_markers");
  if (bullets < 3 && experiencePresent)
    formattingRiskFlags.push("limited_bullet_points");
  if (!summaryPresent) formattingRiskFlags.push("no_summary_section");

  return {
    detectedSections: Array.from(sections),
    missingSections,
    skillsFound,
    jobTitles,
    estimatedYearsExperience,
    bulletCount: bullets,
    bulletsWithMetrics: withMetrics,
    wordCount,
    avgLineLength,
    maxLineLength,
    hasBulletMarkers,
    jdKeywords,
    jdKeywordsMatched,
    jdKeywordsMissing,
    jdCoverageRatio,
    summaryPresent,
    experiencePresent,
    educationPresent,
    skillsSectionPresent,
    projectsPresent,
    formattingRiskFlags,
  };
}
