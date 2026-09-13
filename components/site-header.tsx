"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { SiteLocale } from "@/app/site-content";

export function SiteHeader({ lang }: { lang: SiteLocale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isZh = lang === "zh";
  const home = isZh ? "/zh" : "/";
  const switchPath = isZh ? pathname.replace(/^\/zh/, "") || "/" : `/zh${pathname}`;
  const copy = isZh
    ? { archive: "档案", about: "关于", contact: "联系", open: "打开菜单", close: "关闭菜单", switch: "EN" }
    : { archive: "Archive", about: "About", contact: "Contact", open: "Open menu", close: "Close menu", switch: "中" };

  return (
    <header className="site-header">
      <div className="header-coordinate" aria-hidden="true">X 001 / Y 001</div>
      <div className="header-contact">hello@ohhoba.com</div>
      <div className="site-header-card">
        <Link href={home} className="brand-mark" aria-label="OhHoBa">
          <span className="brand-icon" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>OhHoBa</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? copy.close : copy.open}
          aria-expanded={open}
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <Link href={`${home}#archive`} onClick={() => setOpen(false)}>{copy.archive}</Link>
          <Link href={isZh ? "/zh/about" : "/about"} onClick={() => setOpen(false)}>{copy.about}</Link>
          <a href="mailto:admin@ohhoba.com" onClick={() => setOpen(false)}>
            {copy.contact}
            <ArrowUpRight size={13} />
          </a>
          <Link className="lang-switch" href={switchPath} onClick={() => setOpen(false)}>{copy.switch}</Link>
        </nav>
      </div>
    </header>
  );
}
