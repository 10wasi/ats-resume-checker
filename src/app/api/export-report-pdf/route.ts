import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import type { AtsAnalysisResult } from "@/lib/ats/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = { analysis?: AtsAnalysisResult };

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const a = body.analysis;
  if (!a || typeof a.ats_score !== "number") {
    return NextResponse.json({ error: "Missing analysis payload." }, { status: 400 });
  }

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 48;
  let y = margin;
  const lh = 13;
  const pageH = doc.internal.pageSize.getHeight();
  const pageW = doc.internal.pageSize.getWidth();
  const maxW = pageW - margin * 2;

  const ensureSpace = (need: number) => {
    if (y + need > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const addLines = (text: string, size = 10) => {
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, maxW) as string[];
    for (const line of lines) {
      ensureSpace(lh);
      doc.text(line, margin, y);
      y += lh;
    }
  };

  doc.setFontSize(18);
  doc.text("ResumeIQ — Free ATS resume report", margin, y);
  y += 28;

  addLines(`Overall ATS score: ${Math.round(a.ats_score)} / 100`, 12);
  y += 6;

  if (a.score_breakdown) {
    addLines("Point breakdown (max 100)", 11);
    const b = a.score_breakdown;
    addLines(
      `Skills: ${b.skills.toFixed(1)} / 30 · Experience: ${b.experience.toFixed(1)} / 25 · Keywords: ${b.ats.toFixed(1)} / 20 · Formatting: ${b.formatting.toFixed(1)} / 15 · Education: ${b.education.toFixed(1)} / 10`
    );
    y += 6;
  }

  addLines(
    `Keyword match: ${a.keyword_match_score} · Readability: ${a.readability_score}` +
      (a.job_match_score != null ? ` · Role fit: ${a.job_match_score}` : "")
  );
  y += 10;

  if (a.suggestions?.length) {
    addLines("Top suggestions", 12);
    a.suggestions.forEach((s, i) => addLines(`${i + 1}. ${s}`));
    y += 8;
  }

  if (a.missing_keywords?.length) {
    addLines("Keywords to consider: " + a.missing_keywords.join(", "));
    y += 8;
  }

  addLines("Section notes", 12);
  addLines(`Summary:\n${a.section_feedback.summary}`);
  addLines(`Experience:\n${a.section_feedback.experience}`);
  addLines(`Skills:\n${a.section_feedback.skills}`);
  y += 6;

  if (a.improved_bullets?.length) {
    addLines("Suggested bullets", 12);
    a.improved_bullets.forEach((b, i) => addLines(`${i + 1}. ${b}`));
  }

  const out = doc.output("arraybuffer");
  const buf = Buffer.from(out);

  return new NextResponse(buf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resumeiq-ats-report.pdf"',
    },
  });
}
