import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "关于 OhHoBa",
  description: "了解 OhHoBa：一个呈现非典型形态、实验性语言与开放式想象的独立数字博物馆与艺术实验室。",
  alternates: { canonical: "/zh/about", languages: { en: "/about", "zh-CN": "/zh/about" } },
  openGraph: { title: "关于 OhHoBa", description: "为开放式想象留一处空间。", url: "https://ohhoba.com/zh/about", locale: "zh_CN", images: [{ url: "/zh/about/opengraph-image", width: 1200, height: 630, alt: "关于 OhHoBa" }], type: "website" },
};
export default function About() { return <AboutPage lang="zh" />; }
