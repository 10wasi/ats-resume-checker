/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse", "mammoth"],
  },
  async redirects() {
    return [
      {
        source: "/ats-score-checker",
        destination: "/free-ats-score-checker",
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
    ];
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
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
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
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
