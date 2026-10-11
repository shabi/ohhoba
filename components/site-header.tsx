"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteCopy, type SiteLocale } from "@/app/site-content";
import { ThemeToggle } from "./theme-toggle";

function counterpartPath(pathname: string, lang: SiteLocale): string {
  const isZhPath = pathname === "/zh" || pathname.startsWith("/zh/");
  const normalized = pathname.replace(/\/$/, "") || "/";
  const stripped = isZhPath ? normalized.replace(/^\/zh(?=\/|$)/, "") || "/" : normalized;
  const target = lang === "zh" ? (stripped === "/" ? "/zh" : `/zh${stripped}`) : stripped;
  const known = new Set(["/", "/about", "/collections", "/experiments", ...["unknown-seed", "soft-orbit", "almost-language"].map((slug) => `/collections/${slug}`), "/experiments/shape-study"]);
  const targetPath = lang === "zh" ? target.replace(/^\/zh(?=\/|$)/, "") || "/" : target;
  return known.has(targetPath) ? target : (lang === "zh" ? "/zh" : "/");
}

export function SiteHeader({ lang }: { lang: SiteLocale }) {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = siteCopy[lang];
  const isZh = lang === "zh";
  const localized = (path: string) => isZh ? (path === "/" ? "/zh" : `/zh${path}`) : path;
  const links = [
    { href: localized("/collections"), label: copy.nav.collections },
    { href: localized("/experiments"), label: copy.nav.experiments },
    { href: localized("/about"), label: copy.nav.about },
  ];
  const languageHref = counterpartPath(pathname, isZh ? "en" : "zh");

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
        <div className="header-inner">
          <Link href={isZh ? "/zh" : "/"} className="brand-lockup" aria-label="OhHoBa — home">
            <span className="brand-name">OhHoBa</span>
          </Link>

          <button
            className="mobile-menu-button icon-control"
            type="button"
            aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>

          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " is-open" : ""}`} aria-label={isZh ? "主导航" : "Primary navigation"}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href="mailto:hello@ohhoba.com" className="nav-contact" onClick={() => setMenuOpen(false)}>
              {copy.nav.contact}<ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>

          <div className="header-tools">
            <ThemeToggle lang={lang} />
            <Link className="language-toggle" href={languageHref} aria-label={isZh ? "Language: English" : "语言：简体中文"}>
              {isZh ? "EN" : "中"}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
