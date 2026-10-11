import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const revalidate = 300;
export const metadata: Metadata = {
  title: { absolute: "OhHoBa — 数字博物馆与艺术实验室" },
  description: "探索非典型形态、未完成的想法，以及值得再次观看的小小世界。",
  alternates: { canonical: "/zh", languages: { en: "/", "zh-CN": "/zh", "x-default": "/" } },
  openGraph: { title: "OhHoBa — 数字博物馆与艺术实验室", description: "为尚在形成之物，留一处空间。", url: "https://ohhoba.com/zh", locale: "zh_CN", alternateLocale: ["en_US"], type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OhHoBa — 数字博物馆与艺术实验室" }] },
};
export default function Home() { return <HomePage lang="zh" />; }
