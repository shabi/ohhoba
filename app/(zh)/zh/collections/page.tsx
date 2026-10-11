import type { Metadata } from "next";
import { CollectionsPage } from "@/components/collections-page";

export const metadata: Metadata = {
  title: "藏品档案",
  description: "浏览 OhHoBa 数字博物馆中的视觉对象、虚构系统与未完成的想法。",
  alternates: { canonical: "/zh/collections", languages: { en: "/collections", "zh-CN": "/zh/collections" } },
  openGraph: { title: "藏品档案 | OhHoBa", description: "来自 OhHoBa 档案馆的视觉对象与虚构系统。", url: "https://ohhoba.com/zh/collections", locale: "zh_CN", type: "website" },
};
export default function Collections() { return <CollectionsPage lang="zh" />; }
