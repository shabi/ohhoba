import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SiteLocale } from "@/app/site-content";
import { siteCopy } from "@/app/site-content";

export function SiteFooter({ lang }: { lang: SiteLocale }) {
  const zh = lang === "zh";
  const copy = siteCopy[lang];
  const prefix = zh ? "/zh" : "";
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link href={zh ? "/zh" : "/"} className="footer-brand" aria-label="OhHoBa — home">
          <span>OhHoBa</span>
        </Link>
        <p>{copy.footerDescription}</p>
      </div>
      <nav className="footer-links" aria-label={zh ? "页脚导航" : "Footer navigation"}>
        <Link href={`${prefix}/collections`}>{copy.nav.collections}</Link>
        <Link href={`${prefix}/experiments`}>{copy.nav.experiments}</Link>
        <Link href={`${prefix}/about`}>{copy.nav.about}</Link>
        <a href="mailto:hello@ohhoba.com">{copy.nav.contact}<ArrowUpRight size={13} aria-hidden="true" /></a>
      </nav>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} OhHoBa</span>
        <span>{zh ? "为未知保留空间。" : "Keep room for the unknown."}</span>
      </div>
    </footer>
  );
}
