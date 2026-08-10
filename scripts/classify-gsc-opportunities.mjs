#!/usr/bin/env node
/**
 * ResumeIQ — GSC opportunity classifier (Week 3 Sprint 1)
 *
 * Reads a CSV exported from Google Search Console (manual paste) and assigns
 * each row to opportunity groups A–E. Does NOT invent data — empty input = empty output.
 *
 * Usage:
 *   node scripts/classify-gsc-opportunities.mjs data/gsc-opportunity-import.csv
 *
 * CSV columns (header required):
 *   query,page,clicks,impressions,ctr,position,country
 *
 * Groups:
 *   A — position 8–20, high impressions, CTR opportunity
 *   B — position 20–40, high impressions, strongest immediate ranking opportunity
 *   C — position 40–60, high impressions, content/internal-link opportunity
 *   D — position 60–90, high impressions, deeper search-intent improvement
 *   E — high impressions + very low CTR (title/meta/snippet), any position ≤90
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const IMPRESSIONS_HIGH = 50;
const CTR_LOW = 0.02;

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));

  if (lines.length < 2) {
    return [];
  }

  const header = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const idx = (name) => header.indexOf(name);

  const required = ["query", "page", "clicks", "impressions", "ctr", "position"];
  for (const col of required) {
    if (idx(col) === -1) {
      throw new Error(`Missing column "${col}". Header: ${lines[0]}`);
    }
  }

  return lines.slice(1).map((line) => {
    const cols = line.split(",").map((c) => c.trim());
    const ctrRaw = cols[idx("ctr")].replace("%", "");
    let ctr = Number(ctrRaw);
    if (ctr > 1) ctr = ctr / 100;

    return {
      query: cols[idx("query")],
      page: cols[idx("page")],
      clicks: Number(cols[idx("clicks")]) || 0,
      impressions: Number(cols[idx("impressions")]) || 0,
      ctr,
      position: Number(cols[idx("position")]) || 0,
      country: idx("country") >= 0 ? cols[idx("country")] : "",
    };
  });
}

function classify(row) {
  const groups = [];
  const { impressions, position, ctr } = row;

  if (impressions < IMPRESSIONS_HIGH) {
    return groups;
  }

  if (position >= 8 && position <= 20) groups.push("A");
  if (position > 20 && position <= 40) groups.push("B");
  if (position > 40 && position <= 60) groups.push("C");
  if (position > 60 && position <= 90) groups.push("D");
  if (ctr <= CTR_LOW && position <= 90) groups.push("E");

  return groups;
}

function summarize(rows) {
  const byGroup = { A: [], B: [], C: [], D: [], E: [] };
  for (const row of rows) {
    for (const g of classify(row)) {
      byGroup[g].push(row);
    }
  }
  for (const g of Object.keys(byGroup)) {
    byGroup[g].sort((a, b) => b.impressions - a.impressions);
  }
  return byGroup;
}

function printGroup(label, rows) {
  console.log(`\n=== GROUP ${label} (${rows.length} rows) ===`);
  if (rows.length === 0) {
    console.log("  (no rows — paste GSC data into CSV and re-run)");
    return;
  }
  for (const r of rows.slice(0, 25)) {
    console.log(
      `  pos ${r.position.toFixed(1).padStart(5)} | imp ${String(r.impressions).padStart(5)} | ctr ${(r.ctr * 100).toFixed(1).padStart(5)}% | ${r.query.slice(0, 48)}`
    );
    console.log(`    → ${r.page}`);
  }
  if (rows.length > 25) console.log(`  … and ${rows.length - 25} more`);
}

const fileArg = process.argv[2] ?? "data/gsc-opportunity-import.template.csv";
const filePath = resolve(process.cwd(), fileArg);

let raw;
try {
  raw = readFileSync(filePath, "utf8");
} catch {
  console.error(`Could not read ${filePath}`);
  process.exit(1);
}

const rows = parseCsv(raw);
console.log(`ResumeIQ GSC opportunity model`);
console.log(`File: ${filePath}`);
console.log(`Rows parsed: ${rows.length}`);
console.log(`Thresholds: impressions ≥ ${IMPRESSIONS_HIGH}, low CTR ≤ ${CTR_LOW * 100}%`);

const groups = summarize(rows);
printGroup("A — Position 8–20, high impressions", groups.A);
printGroup("B — Position 20–40, high impressions (priority ranking)", groups.B);
printGroup("C — Position 40–60, content/internal links", groups.C);
printGroup("D — Position 60–90, search-intent depth", groups.D);
printGroup("E — High impressions + very low CTR (title/meta)", groups.E);
