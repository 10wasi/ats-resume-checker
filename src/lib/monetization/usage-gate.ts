import {
  PLAN_COOKIE,
  currentUsageDay,
  isProPlanCookie,
  isUsageEnforcementDisabled,
} from "./config";
import type { UsageSnapshot } from "./types";
import { getUsageCounters, recordAnalyze, recordExtract } from "./usage-store";

export type { UsageSnapshot };
export { PLAN_COOKIE };

export function buildUsageSnapshot(
  anonId: string,
  _planCookie: string | undefined
): UsageSnapshot {
  const day = currentUsageDay();
  const counters = getUsageCounters(anonId, day);
  return {
    plan: "free",
    period: day,
    analyzeUsed: counters.analyzeCount,
    analyzeLimit: null,
    extractUsed: counters.extractCount,
    extractLimit: null,
    analyzeRemaining: null,
    extractRemaining: null,
    blocked: { analyze: false, extract: false },
  };
}

export function canAnalyzeFor(
  anonId: string,
  planCookie: string | undefined
):
  | { ok: true }
  | { ok: false; code: "USAGE_LIMIT"; snapshot: UsageSnapshot } {
  if (isUsageEnforcementDisabled()) {
    return { ok: true };
  }
  const snap = buildUsageSnapshot(anonId, planCookie);
  if (!snap.blocked.analyze) return { ok: true };
  return { ok: false, code: "USAGE_LIMIT", snapshot: snap };
}

export function canExtractFor(
  anonId: string,
  planCookie: string | undefined
):
  | { ok: true }
  | { ok: false; code: "USAGE_LIMIT"; snapshot: UsageSnapshot } {
  if (isUsageEnforcementDisabled()) {
    return { ok: true };
  }
  const snap = buildUsageSnapshot(anonId, planCookie);
  if (!snap.blocked.extract) return { ok: true };
  return { ok: false, code: "USAGE_LIMIT", snapshot: snap };
}

export function incrementAnalyzeSuccess(
  anonId: string,
  planCookie: string | undefined
) {
  if (isUsageEnforcementDisabled()) return;
  if (isProPlanCookie(planCookie)) return;
  recordAnalyze(anonId, currentUsageDay());
}

export function incrementExtractSuccess(
  anonId: string,
  planCookie: string | undefined
) {
  if (isUsageEnforcementDisabled()) return;
  if (isProPlanCookie(planCookie)) return;
  recordExtract(anonId, currentUsageDay());
}
