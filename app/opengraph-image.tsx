import { ImageResponse } from "next/og";

// Next.js auto-detects this file and generates /opengraph-image at build time —
// no manual PNG asset needed. Edit the JSX below to change what shows up when
// the site is shared on social media / messaging apps.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(79,70,229,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(20,184,166,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #4F46E5, #14B8A6)",
              color: "white",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ fontSize: 44, fontWeight: 600, color: "#16161F" }}>
            Verbizo
          </div>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#6B6B7B",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          English ↔ Hindi · German · French Translation
        </div>
      </div>
    ),
    { ...size }
  );
}
