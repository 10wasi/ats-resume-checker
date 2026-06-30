import type { AtsAnalysisResult } from "./types";
import { buildResultRecommendations } from "./build-result-recommendations";

export type PlanItem = {
  id: string;
  title: string;
  detail: string;
  why?: string;
  expectedImpact?: string;
  impact?: "high" | "medium" | "low";
  minutes?: number;
};

export type PersonalizedImprovementPlan = {
  topPriorityFixes: PlanItem[];
  quickWins: PlanItem[];
  highImpactImprovements: PlanItem[];
  missingKeywordsActionList: PlanItem[];
  resumeStrengths: PlanItem[];
  beforeYouApplyChecklist: PlanItem[];
  copySuggestions: string;
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

function impactFromPosition(index: number): "high" | "medium" | "low" {
  if (index === 0) return "high";
  if (index <= 2) return "medium";
  return "low";
}

function enrichPlanItem(item: PlanItem): PlanItem {
  if (item.why && item.expectedImpact) return item;

  const t = item.title.toLowerCase();
  let why = item.why;
  let expectedImpact = item.expectedImpact;

  if (t.includes("format") || t.includes("layout") || t.includes("compatibility")) {
    why ??=
      "Applicant tracking systems extract plain text—broken layouts scramble your experience and hide qualifications from recruiters.";
    expectedImpact ??=
      "Higher parse success so employers worldwide can read your roles in the correct order.";
  } else if (t.includes("keyword") || t.includes("posting")) {
    why ??=
      "Recruiters and ATS search for role-specific terms; missing keywords mean your resume never surfaces in filtered results.";
    expectedImpact ??=
      "Stronger keyword match and visibility when your language mirrors the job description.";
  } else if (t.includes("summary") || t.includes("headline")) {
    why ??=
      "Recruiters decide in seconds on page one—your summary is the hook that earns a deeper read.";
    expectedImpact ??=
      "Clearer first impression and faster recognition of your role fit.";
  } else if (t.includes("bullet") || t.includes("experience") || t.includes("metric")) {
    why ??=
      "Weak bullets bury your impact; hiring managers look for scope, action, and measurable outcomes.";
    expectedImpact ??=
      "Stronger experience section that passes both ATS indexing and the six-second recruiter skim.";
  } else if (t.includes("skill")) {
    why ??=
      "Skills blocks are indexed for search—tools and methods from the posting must appear where parsers look.";
    expectedImpact ??=
      "Better alignment with automated skill filters and recruiter keyword searches.";
  } else if (t.includes("grammar") || t.includes("wording") || t.includes("readability")) {
    why ??=
      "Clarity reduces friction for recruiters and shows attention to detail before they meet you.";
    expectedImpact ??=
      "Easier scan and more professional tone without changing your facts.";
  } else if (t.includes("copy-paste") || t.includes("export") || t.includes("file")) {
    why ??=
      "Many rejections happen because the uploaded file is not the same clean export you tested.";
    expectedImpact ??=
      "Fewer silent parse failures on employer portals.";
  } else {
    why ??=
      "Small, targeted edits compound—fixing the highest-risk issue first saves time on every application.";
    expectedImpact ??=
      "Incremental ATS score improvement and fewer preventable rejections.";
  }

  return { ...item, why, expectedImpact };
}

export function buildPersonalizedImprovementPlan(
  analysis: AtsAnalysisResult,
  options: { hasJobDescription: boolean }
): PersonalizedImprovementPlan {
  const recs = buildResultRecommendations(analysis, {
    hasJobDescription: options.hasJobDescription,
  });

  const insights = analysis.career_insights;
  const topPriorityFixes: PlanItem[] = recs.highPriority
    .slice(0, 5)
    .map((item, i) =>
      enrichPlanItem({
        id: item.id,
        title: item.title,
        detail: item.detail,
        impact: impactFromPosition(i),
      })
    );

  const fallbackPriorities: PlanItem[] = [
    {
      id: "fp-metrics",
      title: "Add measurable outcomes",
      detail:
        "Rewrite your top three bullets with numbers: revenue, % improvement, time saved, or team size.",
      impact: "medium",
    },
    {
      id: "fp-skills",
      title: "Mirror posting language in Skills",
      detail:
        "List tools and methods from the job description in a plain-text Skills block.",
      impact: "medium",
    },
    {
      id: "fp-summary",
      title: "Tighten your summary",
      detail:
        "Two to three lines: role family, years of experience, and two proof points.",
      impact: "low",
    },
  ];
  for (const fb of fallbackPriorities) {
    if (topPriorityFixes.length >= 5) break;
    if (topPriorityFixes.some((p) => p.title === fb.title)) continue;
    topPriorityFixes.push(
      enrichPlanItem({
        ...fb,
        impact: impactFromPosition(topPriorityFixes.length),
      })
    );
  }

  const quickWins: PlanItem[] = [
    enrichPlanItem({
      id: "qw-format",
      title: "Run the copy-paste test",
      detail:
        "Open your PDF, select all text, paste into Notepad. If order looks scrambled, fix layout before keywords.",
      minutes: 2,
    }),
    enrichPlanItem({
      id: "qw-headline",
      title: "Align your headline to the role",
      detail:
        "Change your headline to mirror the target job title family (only if truthful).",
      minutes: 3,
    }),
    enrichPlanItem({
      id: "qw-skills",
      title: "Reorder skills for this posting",
      detail:
        "Move the top 5 tools from the job description to the first line of your Skills section.",
      minutes: 5,
    }),
    ...recs.quickWins.slice(0, 2).map((item) =>
      enrichPlanItem({
        id: item.id,
        title: item.title,
        detail: item.detail,
        minutes: 8,
      })
    ),
  ].slice(0, 5);

  const highImpactImprovements: PlanItem[] = [];
  if (options.hasJobDescription && analysis.keyword_match_detail) {
    const pct = analysis.keyword_match_detail.coverage_percent;
    if (pct < 55) {
      highImpactImprovements.push(
        enrichPlanItem({
          id: "hi-keywords",
          title: "Add 3 missing keywords with proof bullets",
          detail:
            "Pick the three highest-value missing terms and add one honest bullet each under your most relevant role.",
          impact: "high",
        })
      );
    }
    if (analysis.ats_score < 70) {
      highImpactImprovements.push(
        enrichPlanItem({
          id: "hi-format",
          title: "Switch to single-column ATS layout",
          detail:
            "Use one column, standard headings, and plain-text skills for portal uploads.",
          impact: "high",
        })
      );
    }
  }
  if (analysis.formatting_issues.length > 0) {
    highImpactImprovements.push(
      enrichPlanItem({
        id: "hi-layout",
        title: "Resolve top formatting flag",
        detail: analysis.formatting_issues[0] ?? "Fix the first layout issue flagged in your report.",
        impact: "high",
      })
    );
  }
  if (highImpactImprovements.length === 0) {
    highImpactImprovements.push(
      enrichPlanItem({
        id: "hi-metrics",
        title: "Add one metric to your top role",
        detail:
          "Rewrite your strongest recent bullet with a number: %, $, time saved, volume, or team size.",
        impact: "medium",
      })
    );
  }

  const missingKeywordsActionList: PlanItem[] = (
    analysis.missing_keywords.slice(0, 12).map((kw, i) => ({
      id: `mk-${i}`,
      title: kw,
      detail: `Add "${kw}" in a recent experience bullet with scope and outcome—only if you can discuss it in an interview.`,
      impact: i < 3 ? "high" : "medium",
    }))
  );

  const strengthSources = [
    ...(analysis.resume_strengths ?? []),
    ...(insights?.strengths ?? []),
  ];
  const resumeStrengths: PlanItem[] = dedupe(strengthSources, 6).map(
    (text, i) => ({
      id: `str-${i}`,
      title: `Strength ${i + 1}`,
      detail: text,
    })
  );

  const beforeYouApplyChecklist: PlanItem[] = [
    {
      id: "chk-file",
      title: "Same file you tested is the file you upload",
      detail: "Re-export after edits; do not submit an older draft by mistake.",
    },
    {
      id: "chk-parse",
      title: "Copy-paste test passed",
      detail: "Experience and skills appear in logical order in plain text.",
    },
    {
      id: "chk-keywords",
      title: "Posting keywords added with proof",
      detail: options.hasJobDescription
        ? "Must-have terms from the job description appear in experience bullets."
        : "Top skills appear in both Skills and Experience sections.",
    },
    {
      id: "chk-contact",
      title: "Contact block is in the body",
      detail: "Email, phone, and LinkedIn are in the main text—not only header/footer.",
    },
    {
      id: "chk-recheck",
      title: "Re-ran ATS check after changes",
      detail: "Run the analyzer again on the final export before submitting.",
    },
  ];

  const copyLines: string[] = [
    "PERSONALIZED ATS IMPROVEMENT PLAN",
    `ATS Score: ${Math.round(analysis.ats_score)}/100`,
    options.hasJobDescription && analysis.job_match_score != null
      ? `Job Match: ${Math.round(analysis.job_match_score)}%`
      : "",
    "",
    "TOP 5 PRIORITY FIXES",
    ...topPriorityFixes.map(
      (item, i) => `${i + 1}. ${item.title}: ${item.detail}`
    ),
    "",
    "QUICK WINS (UNDER 10 MINUTES)",
    ...quickWins.map((item) => `- ${item.title} (${item.minutes ?? 5} min): ${item.detail}`),
    "",
    "HIGH-IMPACT IMPROVEMENTS",
    ...highImpactImprovements.map((item) => `- ${item.title}: ${item.detail}`),
    "",
    "MISSING KEYWORDS TO ADD",
    ...missingKeywordsActionList.map((item) => `- ${item.title}: ${item.detail}`),
    "",
    "RESUME STRENGTHS",
    ...resumeStrengths.map((item) => `- ${item.detail}`),
    "",
    "BEFORE YOU APPLY",
    ...beforeYouApplyChecklist.map((item) => `- [ ] ${item.title}: ${item.detail}`),
    "",
    "SUGGESTED BULLET IMPROVEMENTS",
    ...(analysis.improved_bullets.length
      ? analysis.improved_bullets.map((b) => `- ${b}`)
      : ["- Add metrics and tools to your top three bullets."]),
  ];

  return {
    topPriorityFixes,
    quickWins,
    highImpactImprovements: highImpactImprovements.slice(0, 4),
    missingKeywordsActionList,
    resumeStrengths,
    beforeYouApplyChecklist,
    copySuggestions: copyLines.join("\n"),
  };
}
