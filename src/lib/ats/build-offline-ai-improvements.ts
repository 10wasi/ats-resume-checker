import type {
  AiResumeImprovements,
  RewritePair,
} from "./types";
import type { ResumeSignals } from "./extract-resume-signals";
import type { ResumeSnippets } from "./extract-resume-snippets";
import type { AiQualitativePayload } from "./parse-analysis";

function pair(
  label: string,
  original: string,
  improved: string
): RewritePair {
  return {
    label,
    original: original.trim() || "(Not detected in your file)",
    improved: improved.trim(),
  };
}

function bulletPairs(
  snippets: ResumeSnippets,
  improved: string[]
): RewritePair[] {
  const out: RewritePair[] = [];
  for (let i = 0; i < Math.min(5, improved.length); i++) {
    const orig =
      snippets.bullets[i] ??
      "Your experience bullet (add metrics and tools from the posting).";
    out.push({
      label: `Experience bullet ${i + 1}`,
      original: orig,
      improved: improved[i],
    });
  }
  return out;
}

export function buildOfflineAiImprovements(
  signals: ResumeSignals,
  ai: AiQualitativePayload,
  snippets: ResumeSnippets,
  hasJobDescription: boolean
): AiResumeImprovements {
  const missing = ai.missing_keywords.slice(0, 8);
  const skillsList = signals.skillsFound.slice(0, 12).join(", ");
  const improvedSkills = [
    signals.skillsFound.slice(0, 8).join(" · "),
    ...missing.slice(0, 4),
  ]
    .filter(Boolean)
    .join(" | ");

  const summaryImproved = signals.summaryPresent
    ? `${ai.section_feedback.summary} Lead with your target role, years of experience, and one measurable outcome.`
    : ai.section_feedback.summary;

  const achievementImproved = ai.improved_bullets[0]
    ? ai.improved_bullets[0]
    : "Delivered measurable outcomes across [scope]—include %, $, time saved, or volume.";

  const keyword_suggestions = hasJobDescription
    ? missing.length > 0
      ? missing
      : ["Align headline with posting title", "Mirror must-have tools in Skills"]
    : [
        "Add role-specific tools to Skills and Experience",
        "Include certifications if required for your field",
      ];

  return {
    improved_summary: pair(
      "Professional summary",
      snippets.summary ||
        (signals.summaryPresent
          ? "Summary section present (text not extracted)"
          : "No summary section detected"),
      summaryImproved
    ),
    improved_skills: pair(
      "Skills section",
      snippets.skills || skillsList || "Skills scattered or not grouped",
      improvedSkills ||
        ai.section_feedback.skills ||
        "Group skills: Core stack · Tools · Methods"
    ),
    experience_bullets: bulletPairs(snippets, ai.improved_bullets),
    keyword_suggestions: keyword_suggestions.slice(0, 12),
    rewrite_suggestions: [
      ai.section_feedback.experience,
      ai.section_feedback.skills,
      signals.bulletsWithMetrics < signals.bulletCount / 2
        ? "Add numbers to at least half your bullets (%, $, time, scale)."
        : "Keep metrics on every recent role—one proof point per bullet.",
      hasJobDescription && missing.length > 0
        ? `Weave posting terms where truthful: ${missing.slice(0, 4).join(", ")}.`
        : "Paste a job description on your next run for tailored keyword rewrites.",
    ].filter(Boolean),
    achievement_statements: [
      pair(
        "Achievement statement",
        snippets.bullets[0] ?? "Recent role bullet without clear metric",
        achievementImproved
      ),
      ...(ai.improved_bullets[1]
        ? [
            pair(
              "Achievement statement 2",
              snippets.bullets[1] ?? "Second experience bullet",
              ai.improved_bullets[1]
            ),
          ]
        : []),
    ],
    action_verbs: [
      "Led",
      "Delivered",
      "Optimized",
      "Scaled",
      "Implemented",
      "Drove",
      "Reduced",
      "Increased",
      "Launched",
      "Streamlined",
    ],
  };
}
