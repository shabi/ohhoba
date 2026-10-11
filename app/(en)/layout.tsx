import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootDocument } from "@/components/root-document";

export const metadata: Metadata = {
  metadataBase: new URL("https://ohhoba.com"),
  title: { default: "OhHoBa — Digital Museum & Art Lab", template: "%s | OhHoBa" },
  description: "OhHoBa is an independent digital museum and art lab for unusual forms, experimental language, and ideas still becoming.",
  applicationName: "OhHoBa", authors: [{ name: "OhHoBa", url: "https://ohhoba.com" }], creator: "OhHoBa", publisher: "OhHoBa",
  keywords: ["OhHoBa", "digital museum", "digital art", "visual experiments", "creative archive"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "OhHoBa — Digital Museum & Art Lab", description: "A digital museum for unusual forms and ideas still becoming.", url: "https://ohhoba.com/", siteName: "OhHoBa", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OhHoBa — Digital Museum & Art Lab" }], locale: "en_US", alternateLocale: ["zh_CN"], type: "website" },
  twitter: { card: "summary_large_image", title: "OhHoBa — Digital Museum & Art Lab", description: "A digital museum for unusual forms and ideas still becoming.", images: ["/opengraph-image"] },
  icons: { icon: [{ url: "/images/icon.svg", type: "image/svg+xml" }, { url: "/icon.png", sizes: "any" }], apple: "/apple-icon.png" },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#36000f" }], colorScheme: "light dark" };
export default function EnglishRootLayout({ children }: Readonly<{ children: ReactNode }>) { return <RootDocument lang="en">{children}</RootDocument>; }
