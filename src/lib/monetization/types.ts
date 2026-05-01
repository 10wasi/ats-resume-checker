/** Client-safe DTO; mirrors `GET /api/usage` JSON. `period` is UTC calendar day (YYYY-MM-DD). */

export type UsageSnapshot = {
  plan: "free" | "pro";
  period: string;
  analyzeUsed: number;
  analyzeLimit: number | null;
  extractUsed: number;
  extractLimit: number | null;
  analyzeRemaining: number | null;
  extractRemaining: number | null;
  blocked: { analyze: boolean; extract: boolean };
};
