/**
 * Stripe-ready architecture (stubs).
 *
 * 1. Create Checkout Session → redirect to Stripe.
 * 2. Webhook: `checkout.session.completed` → mark user as Pro in DB, set httpOnly PLAN_COOKIE.
 * 3. Webhook: `customer.subscription.deleted` → downgrade to free.
 *
 * Install when ready: `npm i stripe`
 * Env: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_ID_PRO
 */

export type StripeEnv = {
  secretKey: string | undefined;
  webhookSecret: string | undefined;
  priceIdPro: string | undefined;
};

export function readStripeEnv(): StripeEnv {
  return {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    priceIdPro: process.env.STRIPE_PRICE_ID_PRO,
  };
}

/** Call from a future `/api/checkout` route. */
export async function createCheckoutSessionPlaceholder(_args: {
  stripeCustomerId?: string;
  successUrl: string;
  cancelUrl: string;
}): Promise<{ url: string } | { error: string }> {
  const env = readStripeEnv();
  if (!env.secretKey || !env.priceIdPro) {
    return {
      error:
        "Stripe not configured. Set STRIPE_SECRET_KEY and STRIPE_PRICE_ID_PRO.",
    };
  }
  return {
    error:
      "Stripe SDK not installed. Add `stripe` package and implement createCheckoutSession.",
  };
}
