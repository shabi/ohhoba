import type { ReactNode } from "react";
import { Analytics } from "@/app/analytics";
import { ThemeProvider } from "@/components/theme-provider";

const themeInitScript = `(() => { try { if (sessionStorage.getItem('ohhoba-loader-seen-v31') === '1') document.documentElement.dataset.ohhobaLoaded = '1'; } catch (_) {} try { const stored = localStorage.getItem('ohhoba-theme-v31'); const dark = stored === 'dark'; document.documentElement.dataset.theme = dark ? 'dark' : 'light'; document.documentElement.style.colorScheme = dark ? 'dark' : 'light'; } catch (_) { document.documentElement.dataset.theme = 'light'; document.documentElement.style.colorScheme = 'light'; } })();`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": "https://ohhoba.com/#website", name: "OhHoBa", url: "https://ohhoba.com/", description: "A digital museum for unusual forms and ideas still becoming.", inLanguage: ["en", "zh-CN"] },
    { "@type": "Organization", "@id": "https://ohhoba.com/#organization", name: "OhHoBa", url: "https://ohhoba.com/", logo: { "@type": "ImageObject", url: "https://ohhoba.com/images/icon.svg" }, description: "An independent digital museum and art lab." },
  ],
};

export function RootDocument({ children, lang }: { children: ReactNode; lang: "en" | "zh-CN" }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
