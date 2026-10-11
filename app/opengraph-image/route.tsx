import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const revalidate = 300;
const size = { width: 1200, height: 630 };
const contentType = "image/png";

export async function GET() {
  const regular = readFileSync(join(process.cwd(), "fonts/geist-regular.ttf"));
  const bold = readFileSync(join(process.cwd(), "fonts/geist-bold.ttf"));
  const logo = readFileSync(join(process.cwd(), "public/images/icon.png")).toString("base64");
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 62, background: "#ffffff", color: "#171717", fontFamily: "Geist" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <img src={`data:image/png;base64,${logo}`} width={54} height={54} style={{ objectFit: "contain" }} />
        <div style={{ fontFamily: "Geist Bold", fontSize: 30, fontWeight: 900, letterSpacing: -2 }}>OhHoBa</div>
        <div style={{ marginLeft: "auto", color: "#7047d8", fontSize: 19 }}>DIGITAL MUSEUM / ART LAB</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Geist Bold", fontSize: 96, fontWeight: 900, lineHeight: .95, letterSpacing: -5 }}>A home for things<br />still becoming.</div>
        <div style={{ maxWidth: 820, fontSize: 27, color: "#545750", lineHeight: 1.35 }}>Unusual forms, unfinished ideas, and small worlds that invite a second look.</div>
      </div>
      <div style={{ fontSize: 18, color: "#73776e" }}>ohhoba.com</div>
    </div>,
    { ...size, fonts: [{ name: "Geist", data: regular, weight: 400 }, { name: "Geist Bold", data: bold, weight: 900 }] }
  );
}
