/** Pull short originals from resume text for rewrite UI (offline / fallback). */

export type ResumeSnippets = {
  summary: string;
  skills: string;
  bullets: string[];
};

const SECTION_RES = [
  { key: "summary", re: /^\s*(professional\s+)?summary\b/i },
  { key: "skills", re: /^\s*(technical\s+)?skills\b/i },
];

function sliceSection(
  lines: string[],
  startIdx: number,
  stopRes: RegExp[]
): string {
  const chunk: string[] = [];
  for (let i = startIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (
      trimmed.length > 0 &&
      trimmed.length < 48 &&
      stopRes.some((re) => re.test(trimmed))
    ) {
      break;
    }
    if (trimmed) chunk.push(trimmed);
    if (chunk.join(" ").length > 420) break;
  }
  return chunk.join(" ").slice(0, 400);
}

export function extractResumeSnippets(resumeText: string): ResumeSnippets {
  const lines = resumeText.split(/\n/);
  let summary = "";
  let skills = "";
  const bullets: string[] = [];
  const stopRes = [
    /^\s*(work\s+)?experience\b/i,
    /^\s*education\b/i,
    /^\s*(technical\s+)?skills\b/i,
    /^\s*projects?\b/i,
    /^\s*certifications?\b/i,
  ];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;
    for (const { key, re } of SECTION_RES) {
      if (!re.test(trimmed)) continue;
      if (key === "summary" && !summary) {
        summary = sliceSection(lines, i, stopRes);
      }
      if (key === "skills" && !skills) {
        skills = sliceSection(lines, i, stopRes);
      }
    }
    if (/^\s*[-–—•*●◦▪]\s+|^\s*\d+[.)]\s+/.test(lines[i])) {
      const b = trimmed.replace(/^\s*[-–—•*●◦▪]\s+/, "").replace(/^\d+[.)]\s+/, "");
      if (b.length > 12) bullets.push(b.slice(0, 280));
    }
  }

  if (!summary) {
    const para = lines
      .map((l) => l.trim())
      .filter((l) => l.length > 40 && l.length < 220)[0];
    summary = para ?? "";
  }

  return {
    summary: summary.slice(0, 400),
    skills: skills.slice(0, 400),
    bullets: bullets.slice(0, 6),
  };
}
