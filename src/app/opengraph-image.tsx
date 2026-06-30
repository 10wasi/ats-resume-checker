import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ResumeIQ — Free Resume Checker & ATS Score";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0f172a 0%, #14532d 55%, #166534 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#4ade80",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#14532d",
            }}
          >
            R
          </div>
          <span style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            ResumeIQ
          </span>
        </div>
        <div style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1.1, maxWidth: "900px" }}>
          Free Resume Checker & ATS Score
        </div>
        <div style={{ marginTop: "24px", fontSize: "28px", color: "#bbf7d0", maxWidth: "820px" }}>
          Upload PDF · Get score, keywords & format fixes · Job seekers worldwide
        </div>
      </div>
    ),
    { ...size }
  );
}
