import type { UsageDay, PlanId } from "./config";

export type UsageCounters = {
  analyzeCount: number;
  extractCount: number;
};

/**
 * In-memory usage store (per server instance).
 * Key: `${anonId}:${YYYY-MM-DD}`. Replace with Redis / DB for production.
 */
class MemoryUsageStore {
  private map = new Map<string, UsageCounters>();

  private key(anonId: string, day: UsageDay): string {
    return `${anonId}:${day}`;
  }

  get(anonId: string, day: UsageDay): UsageCounters {
    const k = this.key(anonId, day);
    return this.map.get(k) ?? { analyzeCount: 0, extractCount: 0 };
  }

  incrementAnalyze(anonId: string, day: UsageDay): UsageCounters {
    const k = this.key(anonId, day);
    const cur = this.map.get(k) ?? { analyzeCount: 0, extractCount: 0 };
    const next = { ...cur, analyzeCount: cur.analyzeCount + 1 };
    this.map.set(k, next);
    return next;
  }

  incrementExtract(anonId: string, day: UsageDay): UsageCounters {
    const k = this.key(anonId, day);
    const cur = this.map.get(k) ?? { analyzeCount: 0, extractCount: 0 };
    const next = { ...cur, extractCount: cur.extractCount + 1 };
    this.map.set(k, next);
    return next;
  }
}

const store = new MemoryUsageStore();

export function getUsageCounters(anonId: string, day: UsageDay): UsageCounters {
  return store.get(anonId, day);
}

export function recordAnalyze(anonId: string, day: UsageDay): UsageCounters {
  return store.incrementAnalyze(anonId, day);
}

export function recordExtract(anonId: string, day: UsageDay): UsageCounters {
  return store.incrementExtract(anonId, day);
}

export type StripeReadyCustomer = {
  stripeCustomerId: string;
  plan: PlanId;
  internalUserId?: string;
};
