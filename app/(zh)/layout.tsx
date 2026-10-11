import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootDocument } from "@/components/root-document";

export const metadata: Metadata = {
  metadataBase: new URL("https://ohhoba.com"),
  title: { default: "数字博物馆与艺术实验室", template: "%s | OhHoBa" },
  description: "OhHoBa 是一个独立的数字博物馆与艺术实验室，呈现非典型形态、实验性语言，以及仍在形成的想法。",
  applicationName: "OhHoBa", authors: [{ name: "OhHoBa", url: "https://ohhoba.com" }], creator: "OhHoBa", publisher: "OhHoBa",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "OhHoBa — 数字博物馆与艺术实验室", description: "为尚在形成之物，留一处空间。", url: "https://ohhoba.com/zh", siteName: "OhHoBa", locale: "zh_CN", alternateLocale: ["en_US"], type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OhHoBa — 数字博物馆与艺术实验室" }] },
  twitter: { card: "summary_large_image", title: "OhHoBa — 数字博物馆与艺术实验室", description: "为尚在形成之物，留一处空间。", images: ["/opengraph-image"] },
  icons: { icon: [{ url: "/images/icon.svg", type: "image/svg+xml" }, { url: "/icon.png", sizes: "any" }], apple: "/apple-icon.png" },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#36000f" }], colorScheme: "light dark" };
export default function ChineseRootLayout({ children }: Readonly<{ children: ReactNode }>) { return <RootDocument lang="zh-CN">{children}</RootDocument>; }
