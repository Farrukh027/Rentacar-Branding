import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top, rgba(212,178,117,0.22), transparent 28%), linear-gradient(180deg, #080809 0%, #0B0C0E 100%)",
          color: "#f5f1ea",
          padding: 56,
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            display: "flex",
            border: "1px solid rgba(212,178,117,0.32)",
            borderRadius: 999,
            padding: "10px 18px",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d4b275"
          }}
        >
          Brandium Rent a Car
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <div style={{ maxWidth: 760, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 78, lineHeight: 0.96, letterSpacing: -3 }}>
              Bakıda premium və sərfəli avtomobil icarəsi
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 28,
                lineHeight: 1.45,
                color: "rgba(245,241,234,0.82)",
                fontFamily: "Segoe UI, sans-serif"
              }}
            >
              Gündəlik, həftəlik və aylıq icarə. Depozitsiz seçimlər, VIP transfer və toy maşınları.
            </div>
          </div>
          <div
            style={{
              width: 280,
              height: 180,
              borderRadius: 36,
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(180deg, rgba(212,178,117,0.18), rgba(255,255,255,0.04))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 70% 20%, rgba(212,178,117,0.28), transparent 35%)"
              }}
            />
            <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 63C38 39 66 26 108 26C149 26 180 39 197 63" stroke="#D4B275" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="49" cy="79" r="14" fill="#0F1013" stroke="#D4B275" strokeWidth="3"/>
              <circle cx="171" cy="79" r="14" fill="#0F1013" stroke="#D4B275" strokeWidth="3"/>
              <path d="M53 65L75 46H132L163 65" stroke="#F5F1EA" strokeOpacity="0.72" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    ),
    size
  );
}
