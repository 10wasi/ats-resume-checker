/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse", "mammoth"],
  },
  async redirects() {
    return [
      // Keyword cannibalization — 301 to canonical owners (see cannibalization-redirects.ts)
      {
        source: "/free-ats-resume-checker",
        destination: "/",
        permanent: true,
      },
      {
        source: "/resume-score-checker",
        destination: "/ats-score-checker",
        permanent: true,
      },
      {
        source: "/free-ats-score-checker",
        destination: "/ats-score-checker",
        permanent: true,
      },
      {
        source: "/resume-keywords-checker",
        destination: "/resume-keyword-checker",
        permanent: true,
      },
      {
        source: "/how-we-score-resumes",
        destination: "/methodology",
        permanent: true,
      },
      {
        source: "/our-algorithm",
        destination: "/how-resume-analysis-works",
        permanent: true,
      },
      {
        source: "/resume-match-analyzer",
        destination: "/resume-job-description-match",
        permanent: true,
      },
      {
        source: "/resume-checker-online",
        destination: "/free-resume-checker-online",
        permanent: true,
      },
      {
        source: "/ats-resume/marketing-professionals",
        destination: "/ats-resume/marketing-manager",
        permanent: true,
      },
      {
        source: "/ats-resume/accountants",
        destination: "/ats-resume/accountant",
        permanent: true,
      },
      {
        source: "/ats-resume/hr-professionals",
        destination: "/ats-resume/hr-manager",
        permanent: true,
      },
      {
        source: "/resume-checker/marketing",
        destination: "/resume-checker/marketing-manager",
        permanent: true,
      },
      {
        source: "/resume-checker/accounting",
        destination: "/resume-checker/accountant",
        permanent: true,
      },
      {
        source: "/resume-checker/hr-professionals",
        destination: "/resume-checker/hr-manager",
        permanent: true,
      },
      {
        source: "/resume-checker/managers",
        destination: "/resume-checker/manager",
        permanent: true,
      },
      {
        source: "/resume-checker/graphic-designers",
        destination: "/resume-checker/graphic-designer",
        permanent: true,
      },
      {
        source: "/resume-checker/nurses",
        destination: "/resume-checker/nurse",
        permanent: true,
      },
      {
        source: "/resume-checker/doctors",
        destination: "/resume-checker/doctor",
        permanent: true,
      },
      {
        source: "/resume-checker/developers",
        destination: "/resume-checker/developer",
        permanent: true,
      },
      {
        source: "/resume-checker/designers",
        destination: "/resume-checker/designer",
        permanent: true,
      },
      {
        source: "/resume-checker/engineers",
        destination: "/resume-checker/engineer",
        permanent: true,
      },
      {
        source: "/resume-checker/accountants",
        destination: "/resume-checker/accountant",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      {
        source: "/feed.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/rss+xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/((?!api|_next).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
