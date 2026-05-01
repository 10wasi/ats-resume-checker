/**
 * Verify the Next.js app responds for main pages.
 *
 * Usage (server must already be running):
 *   node scripts/ping-local.mjs
 *   set PORT=3000 && node scripts/ping-local.mjs
 *
 * Default origin matches package.json `dev` / `start` (port 3847).
 */
const PORT = Number(process.env.PORT) || 3847;
const ORIGIN = process.env.LOCAL_ORIGIN || `http://127.0.0.1:${PORT}`;

const PATHS = [
  "/api/health",
  "/",
  "/resume-checker",
  "/ats-score-checker",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

async function main() {
  let failed = false;
  for (const path of PATHS) {
    const url = ORIGIN + path;
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(12_000),
        redirect: "follow",
      });
      const ok = res.ok;
      if (!ok) failed = true;
      console.log(path.padEnd(22), res.status, ok ? "OK" : "FAIL");
      if (path === "/api/health" && ok) {
        console.log("  ", (await res.text()).slice(0, 120));
      }
    } catch (e) {
      failed = true;
      console.log(path.padEnd(22), "FAIL", e instanceof Error ? e.message : e);
    }
  }

  console.log("");
  if (failed) {
    console.error("Some routes failed. Check:");
    console.error("  1. Server is running: npm run dev   (or npm run dev:3000 if 3847 is busy)");
    console.error("  2. Same port as this script (PORT=" + PORT + "), or set PORT / LOCAL_ORIGIN.");
    console.error("  3. Open:", ORIGIN + "/");
    process.exit(1);
  }
  console.log("All routes responded OK.");
  console.log("Open in browser:", ORIGIN + "/");
}

main();
