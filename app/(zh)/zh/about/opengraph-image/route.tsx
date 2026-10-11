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
  return new ImageResponse(<div style={{ width: "100%", height: "100%", padding: 64, display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#171717", fontFamily: "Geist" }}><div style={{ display: "flex", alignItems: "center", gap: 14 }}><img src={`data:image/png;base64,${logo}`} width={42} height={42} style={{ objectFit: "contain" }} /><div style={{ fontFamily: "Geist Bold", fontWeight: 900, fontSize: 30, letterSpacing: -2 }}>OhHoBa</div></div><div style={{ display: "flex", flexDirection: "column", gap: 20 }}><div style={{ fontSize: 20, color: "#7047d8" }}>关于 OhHoBa</div><div style={{ display: "flex", flexDirection: "column", fontFamily: "Geist Bold", fontSize: 84, fontWeight: 900, lineHeight: .94, letterSpacing: -4 }}>为开放式想象<br />留一处空间。</div><div style={{ fontSize: 26, color: "#545750" }}>独立的数字博物馆与艺术实验室。</div></div><div style={{ fontSize: 18, color: "#73776e" }}>ohhoba.com/zh/about</div></div>, { ...size, fonts: [{ name: "Geist", data: regular, weight: 400 }, { name: "Geist Bold", data: bold, weight: 900 }] });
}
