import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "Desconto DataCrazy — R$100 OFF/mês com cupom PABLO100. CRM com IA, automação e multiatendimento.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #070b18 0%, #0f1529 50%, #070b18 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(255,23,68,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #ff1744, #d50000, #ff1744)",
            display: "flex",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #ff1744, #d50000)",
            borderRadius: "16px",
            padding: "10px 28px",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "white", fontSize: "22px", fontWeight: 900, letterSpacing: "2px" }}>
            PARCEIRO OFICIAL
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#6366f1" }}>Desconto DataCrazy</span>
          <span style={{ color: "#e8eaf0", marginTop: "4px" }}>
            R$100 OFF/mês no CRM com IA
          </span>
        </div>

        {/* Coupon codes */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "32px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "2px dashed rgba(0,232,143,0.5)",
              background: "rgba(0,232,143,0.1)",
              borderRadius: "12px",
              padding: "10px 24px",
              fontSize: "28px",
              fontWeight: 700,
              color: "#6366f1",
              fontFamily: "monospace",
            }}
          >
            PABLO100
          </div>
          <span style={{ color: "#8892a8", fontSize: "20px" }}>ou</span>
          <div
            style={{
              display: "flex",
              border: "2px dashed rgba(0,232,143,0.5)",
              background: "rgba(0,232,143,0.1)",
              borderRadius: "12px",
              padding: "10px 24px",
              fontSize: "28px",
              fontWeight: 700,
              color: "#6366f1",
              fontFamily: "monospace",
            }}
          >
            PABLO
          </div>
        </div>

        {/* Plans */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "32px",
            fontSize: "16px",
            color: "#8892a8",
          }}
        >
          <span>
            Starter{" "}
            <span style={{ color: "#e8eaf0", fontWeight: 700 }}>R$197</span>/mês
          </span>
          <span>•</span>
          <span>
            Essential{" "}
            <span style={{ color: "#e8eaf0", fontWeight: 700 }}>R$360</span>/mês
          </span>
          <span>•</span>
          <span>
            Pro{" "}
            <span style={{ color: "#e8eaf0", fontWeight: 700 }}>R$707</span>/mês
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "#8892a8",
          }}
        >
          <span style={{ color: "#6366f1", fontWeight: 700 }}>Crazy</span>
          <span style={{ fontWeight: 700, color: "#e8eaf0" }}>Desconto</span>
          <span>— crazydesconto.com.br</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
