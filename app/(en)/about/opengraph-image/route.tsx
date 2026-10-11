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
  return new ImageResponse(<div style={{ width: "100%", height: "100%", padding: 64, display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#171717", fontFamily: "Geist" }}><div style={{ display: "flex", alignItems: "center", gap: 14 }}><img src={`data:image/png;base64,${logo}`} width={42} height={42} style={{ objectFit: "contain" }} /><div style={{ fontFamily: "Geist Bold", fontWeight: 900, fontSize: 30, letterSpacing: -2 }}>OhHoBa</div></div><div style={{ display: "flex", flexDirection: "column", gap: 20 }}><div style={{ fontSize: 20, color: "#7047d8" }}>About OhHoBa</div><div style={{ fontFamily: "Geist Bold", fontSize: 84, fontWeight: 900, lineHeight: .94, letterSpacing: -4 }}>A place for open-ended imagination.</div><div style={{ fontSize: 26, color: "#545750" }}>An independent digital museum and art lab.</div></div><div style={{ fontSize: 18, color: "#73776e" }}>ohhoba.com/about</div></div>, { ...size, fonts: [{ name: "Geist", data: regular, weight: 400 }, { name: "Geist Bold", data: bold, weight: 900 }] });
}
