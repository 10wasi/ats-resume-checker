import type { AtsAnalysisResult } from "./types";

export type PriorityItem = {
  id: string;
  title: string;
  detail: string;
  tier: "high" | "quick";
};

export type ResultRecommendations = {
  recruiterNote: string;
  whyScoreMatters: string;
  highPriority: PriorityItem[];
  quickWins: PriorityItem[];
  roleRelevanceNote: string | null;
};

function scoreBand(score: number): string {
  if (score >= 80) return "strong";
  if (score >= 65) return "competitive";
  if (score >= 45) return "developing";
  return "needs focus";
}

export function buildResultRecommendations(
  analysis: AtsAnalysisResult,
  options: { hasJobDescription: boolean }
): ResultRecommendations {
  const band = scoreBand(analysis.ats_score);
  const highPriority: PriorityItem[] = [];
  const quickWins: PriorityItem[] = [];
  let id = 0;
  const nextId = () => `fix-${++id}`;

  for (const issue of analysis.formatting_issues.slice(0, 3)) {
    highPriority.push({
      id: nextId(),
      title: "ATS compatibility / layout",
      detail: issue,
      tier: "high",
    });
  }

  if (analysis.missing_keywords.length > 0 && options.hasJobDescription) {
    const sample = analysis.missing_keywords.slice(0, 5).join(", ");
    highPriority.push({
      id: nextId(),
      title: "Missing posting keywords",
      detail: `Add these where truthful in experience or skills: ${sample}${analysis.missing_keywords.length > 5 ? "…" : ""}.`,
      tier: "high",
    });
  }

  const summaryFb = analysis.section_feedback.summary?.trim();
  if (summaryFb && !/no major|looks good|solid/i.test(summaryFb)) {
    highPriority.push({
      id: nextId(),
      title: "Summary / headline",
      detail: summaryFb,
      tier: "high",
    });
  }

  const expFb = analysis.section_feedback.experience?.trim();
  if (
    expFb &&
    highPriority.length < 4 &&
    !/solid bullet|no major/i.test(expFb)
  ) {
    highPriority.push({
      id: nextId(),
      title: "Experience bullets",
      detail: expFb,
      tier: "high",
    });
  }

  if (analysis.readability_score < 60 && highPriority.length < 5) {
    highPriority.push({
      id: nextId(),
      title: "Readability & structure",
      detail:
        "Structure and scanability scored low—use clear headings, shorter lines, and bullets so recruiters and parsers can skim page one fast.",
      tier: "high",
    });
  }

  const skillsFb = analysis.section_feedback.skills?.trim();
  if (skillsFb) {
    quickWins.push({
      id: nextId(),
      title: "Skills section",
      detail: skillsFb,
      tier: "quick",
    });
  }

  for (const g of analysis.grammar_issues.slice(0, 2)) {
    quickWins.push({
      id: nextId(),
      title: "Wording polish",
      detail: g,
      tier: "quick",
    });
  }

  for (const s of analysis.suggestions.slice(0, 3)) {
    if (quickWins.length >= 5) break;
    quickWins.push({
      id: nextId(),
      title: "Resume optimization tip",
      detail: s,
      tier: "quick",
    });
  }

  if (quickWins.length < 3) {
    quickWins.push({
      id: nextId(),
      title: "Quick ATS win",
      detail:
        "Export a one-column PDF, standard headings (Experience, Skills, Education), and re-run this resume ATS analysis on the exact file you will upload.",
      tier: "quick",
    });
  }

  const recruiterNotes: Record<string, string> = {
    strong:
      "A recruiter would likely skim this quickly and find your story—keep tailoring top bullets per role and verifying keywords against each posting.",
    competitive:
      "You are in the zone where small edits matter: sharper bullets and honest keyword alignment often decide who gets a first call.",
    developing:
      "Many strong candidates stall here because the file is hard to parse or proof is buried—fix layout first, then keywords.",
    "needs focus":
      "Before you apply widely, treat this as a packaging pass: if software cannot read your resume cleanly, humans may never see your best work.",
  };

  const whyByBand: Record<string, string> = {
    strong:
      "Your score suggests an ATS friendly resume baseline—parsers can usually map your sections, and keyword coverage is helping you show up in searches. The number is a prioritization tool: use it to polish before high-stakes applications, not as a guarantee.",
    competitive:
      "This score means you are close. Hiring software and recruiters both reward clarity—readable layout, standard headings, and posting language you can defend in an interview. Improving a few high-impact lines often moves you more than redesigning the whole document.",
    developing:
      "Scores in this range often reflect fixable gaps: missing terms from the job post, weak top-of-page proof, or formatting that scrambles text order. That is why resume optimization starts with extraction, then keywords—not the other way around.",
    "needs focus":
      "A lower score usually flags ATS compatibility or proof problems, not your worth as a candidate. Focus on making your file an ATS compatible resume first; then align honest keywords and stronger bullets.",
  };

  let roleRelevanceNote: string | null = null;
  if (options.hasJobDescription && analysis.job_match_score != null) {
    const jm = Math.round(analysis.job_match_score);
    const kw = Math.round(analysis.keyword_match_score);
    if (jm >= 75 && kw >= 70) {
      roleRelevanceNote =
        "Language in your resume overlaps well with this posting—next step is human polish (metrics, clarity) before you submit.";
    } else if (jm < 50 || kw < 45) {
      roleRelevanceNote =
        "Alignment with this posting looks thin—either tailor keywords and top bullets honestly, or consider whether the role is a stretch fit.";
    } else {
      roleRelevanceNote = `Moderate fit for this posting (alignment ${jm}/100, keyword coverage ${kw}/100)—targeted edits to summary and recent bullets are your best lever.`;
    }
  } else if (!options.hasJobDescription) {
    roleRelevanceNote =
      "Paste a job description on your next run to see posting-specific ATS keywords and role relevance—not just generic coverage.";
  }

  return {
    recruiterNote: recruiterNotes[band],
    whyScoreMatters: whyByBand[band],
    highPriority: highPriority.slice(0, 5),
    quickWins: quickWins.slice(0, 5),
    roleRelevanceNote,
  };
}
