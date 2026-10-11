import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { SiteLocale } from "@/app/site-content";
import { siteCopy } from "@/app/site-content";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function NotFoundPage({ lang }: { lang: SiteLocale }) {
  const c = siteCopy[lang];
  const prefix = lang === "zh" ? "/zh" : "";
  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main id="main-content" className="not-found-page page-gutter">
        <div className="not-found-mark"><span aria-hidden="true">404</span></div>
        <div className="not-found-copy"><p className="eyebrow">{lang === "zh" ? "找不到页面" : "Page not found"}</p><h1>{c.notFoundTitle}</h1><p>{c.notFoundBody}</p><div className="hero-actions"><Link className="button button-primary" href={prefix || "/"}><ArrowLeft size={16} aria-hidden="true" />{c.backHome}</Link><Link className="text-link" href={`${prefix}/collections`}>{c.nav.collections}<ArrowRight size={16} aria-hidden="true" /></Link></div></div>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
