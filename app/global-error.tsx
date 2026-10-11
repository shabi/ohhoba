"use client";
import type { CSSProperties } from "react";

const style: CSSProperties = { minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px", background: "#171217", color: "#f7f2f7", fontFamily: "Arial, sans-serif" };
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <html lang="en"><body style={style}><main style={{ maxWidth: 620 }}><p style={{ color: "#df78a4", letterSpacing: ".12em", textTransform: "uppercase", fontSize: 12 }}>OhHoBa</p><h1 style={{ fontSize: "clamp(36px, 7vw, 64px)", lineHeight: 1, letterSpacing: "-.05em" }}>Something interrupted the visit.</h1><p style={{ color: "#c8bdc9", lineHeight: 1.7 }}>The site could not complete this request. No internal system details are shown here.</p><button type="button" onClick={reset} style={{ padding: "13px 18px", border: 0, borderRadius: 99, background: "#78b94b", color: "#171217", fontWeight: 700, cursor: "pointer" }}>Try again</button></main></body></html>;
}
