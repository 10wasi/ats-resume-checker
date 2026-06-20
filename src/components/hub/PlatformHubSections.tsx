import Link from "next/link";
import type { PlatformHubEntry } from "@/lib/content/platform-hubs/registry";
import { getOtherPlatformHubs, CORNERSTONE_GUIDES } from "@/lib/content/platform-hubs/registry";

type Props = { hub: PlatformHubEntry };

/** Shared hub blocks: examples, guidance, cross-links — appended to landing pages. */
export function PlatformHubSections({ hub }: Props) {
  const otherHubs = getOtherPlatformHubs(hub.slug, 4);

  return (
    <div className="not-prose mt-14 space-y-14">
      {hub.guidanceSteps.length > 0 ? (
        <section aria-labelledby={`${hub.slug}-guidance`}>
          <h2
            id={`${hub.slug}-guidance`}
            className="font-display text-2xl font-bold text-slate-900"
          >
            Actionable guidance
          </h2>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
            {hub.guidanceSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      ) : null}

      {hub.exampleLinks.length > 0 ? (
        <section aria-labelledby={`${hub.slug}-examples`}>
          <h2
            id={`${hub.slug}-examples`}
            className="font-display text-2xl font-bold text-slate-900"
          >
            Examples & related guides
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {hub.exampleLinks.map((ex) => (
              <li key={ex.href}>
                <Link
                  href={ex.href}
                  className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
                >
                  {ex.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby={`${hub.slug}-cornerstone`}>
        <h2
          id={`${hub.slug}-cornerstone`}
          className="font-display text-2xl font-bold text-slate-900"
        >
          Cornerstone guides
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {CORNERSTONE_GUIDES.slice(0, 5).map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-emerald-300"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby={`${hub.slug}-hubs`}>
        <h2
          id={`${hub.slug}-hubs`}
          className="font-display text-2xl font-bold text-slate-900"
        >
          More platform hubs
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {otherHubs.map((h) => (
            <li key={h.slug}>
              <Link
                href={h.path}
                className="block rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 transition hover:border-emerald-300"
              >
                <span className="font-display font-bold text-slate-900">{h.title}</span>
                <span className="mt-1 block text-xs text-slate-600">{h.intro.slice(0, 80)}…</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/resume-optimization-platform"
          className="mt-4 inline-block text-sm font-semibold text-[#16a34a] underline"
        >
          All platform hubs →
        </Link>
      </section>
    </div>
  );
}

export function PlatformHubToolCta({ hub }: Props) {
  return (
    <div className="not-prose rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/90 to-white p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Free tool</p>
      <p className="mt-2 font-display text-xl font-bold text-slate-900">{hub.title}</p>
      <p className="mt-2 text-base leading-relaxed text-slate-700">{hub.intro}</p>
      <Link
        href={hub.toolHref}
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#16a34a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
      >
        {hub.toolCtaLabel} →
      </Link>
    </div>
  );
}
