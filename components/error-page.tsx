"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { siteCopy } from "@/app/site-content";

export function ErrorPage({ reset }: { reset: () => void }) {
  const pathname = usePathname() || "/";
  const lang = pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
  const c = siteCopy[lang];
  const home = lang === "zh" ? "/zh" : "/";
  return (
    <main className="error-page page-gutter" id="main-content">
      <div className="error-symbol"><AlertCircle size={34} aria-hidden="true" /></div>
      <p className="eyebrow">{lang === "zh" ? "暂时无法访问" : "Temporary interruption"}</p>
      <h1>{c.serverErrorTitle}</h1>
      <p>{c.serverErrorBody}</p>
      <div className="hero-actions"><button className="button button-primary" type="button" onClick={reset}>{c.retry}</button><Link className="text-link" href={home}><ArrowLeft size={16} aria-hidden="true" />{c.backHome}</Link></div>
    </main>
  );
}
