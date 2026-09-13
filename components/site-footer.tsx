import Link from "next/link";
import type { SiteLocale } from "@/app/site-content";

export function SiteFooter({ lang }: { lang: SiteLocale }) {
  const zh = lang === "zh";
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand">OhHoBa</div>
        <p>{zh ? "一个收藏非典型表达的创意档案馆。" : "A creative archive for unusual expression."}</p>
      </div>
      <div className="footer-links">
        <Link href={zh ? "/zh" : "/"}>{zh ? "首页" : "Home"}</Link>
        <Link href={zh ? "/zh/about" : "/about"}>{zh ? "关于" : "About"}</Link>
      </div>
      <div className="footer-meta">© {new Date().getFullYear()} OhHoBa</div>
    </footer>
  );
}
