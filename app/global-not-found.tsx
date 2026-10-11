import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Page not found | OhHoBa",
  description: "This page could not be found. The OhHoBa archive is still open.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light dark" };

const themeInitScript = `(() => { try { const stored = localStorage.getItem('ohhoba-theme-v31'); const dark = stored === 'dark'; document.documentElement.dataset.theme = dark ? 'dark' : 'light'; document.documentElement.style.colorScheme = dark ? 'dark' : 'light'; } catch (_) { document.documentElement.dataset.theme = 'light'; document.documentElement.style.colorScheme = 'light'; } })();`;

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <div className="site-shell">
          <main id="main-content" className="not-found-page page-gutter">
            <div className="not-found-mark"><span aria-hidden="true">404</span></div>
            <div className="not-found-copy">
              <p className="eyebrow">404 / PAGE NOT FOUND / 页面不存在</p>
              <h1>This page has slipped out of view.<br /><span lang="zh-CN">此页面暂时不在视线之内。</span></h1>
              <p>The address may have changed, or the page may never have existed. The archive is still here.<br /><span lang="zh-CN">地址可能已经改变，也可能从未存在。档案馆仍然开放。</span></p>
              <div className="hero-actions">
                <a className="button button-primary" href="/">Return to English home</a>
                <a className="text-link" href="/zh" lang="zh-CN">返回中文首页</a>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
