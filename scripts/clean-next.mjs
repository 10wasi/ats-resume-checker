/**
 * Delete local .next output. Use when `next dev` fails with EINVAL/EBUSY on Windows
 * (often with OneDrive), or ENOENT missing build-manifest under .next (Turbopack cache).
 * Run: npm run clean — then `npm run dev` (http://localhost:3847).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, ".next");
const turbopackCache = path.join(root, "node_modules", ".cache", "turbopack");

function rmDir(dir, label) {
  if (!fs.existsSync(dir)) return;
  try {
    fs.rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
    console.log(`Removed ${label}`);
  } catch (e) {
    console.error(`Remove ${label} failed:`, e);
    process.exit(1);
  }
}

rmDir(nextDir, ".next");
rmDir(turbopackCache, "node_modules/.cache/turbopack");
