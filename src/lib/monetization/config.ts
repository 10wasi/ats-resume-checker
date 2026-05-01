/**
 * Monetization & plan configuration.
 */

export const ANON_COOKIE = "resumeiq_anon";
/** httpOnly in production via billing routes; readable plan for UI checks. */
export const PLAN_COOKIE = "resumeiq_plan";

export type UsageDay = string; // YYYY-MM-DD (UTC)

export type PlanId = "free" | "pro";

export function currentUsageDay(): UsageDay {
  return new Date().toISOString().slice(0, 10);
}

/** Free tier: full analyze runs per UTC day. */
export function getFreeAnalyzesPerDay(): number {
  const n = parseInt(process.env.FREE_ANALYZES_PER_DAY ?? "3", 10);
  return Number.isFinite(n) && n >= 0 ? n : 3;
}

/** Free tier: file extractions per UTC day (must allow trying files before analyze). */
export function getFreeExtractsPerDay(): number {
  const n = parseInt(process.env.FREE_EXTRACTS_PER_DAY ?? "15", 10);
  return Number.isFinite(n) && n >= 0 ? n : 15;
}

export function isUsageEnforcementDisabled(): boolean {
  return (
    process.env.DISABLE_USAGE_LIMITS === "1" ||
    process.env.DISABLE_USAGE_LIMITS === "true"
  );
}

export function isProPlanCookie(value: string | undefined): boolean {
  return value === "pro";
}
