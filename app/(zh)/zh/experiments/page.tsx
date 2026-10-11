import type { Metadata } from "next";
import { ExperimentsPage } from "@/components/experiments-page";

export const metadata: Metadata = {
  title: "艺术实验室",
  description: "体验 OhHoBa 关于形态、距离与解读方式的互动研究。",
  alternates: { canonical: "/zh/experiments", languages: { en: "/experiments", "zh-CN": "/zh/experiments" } },
  openGraph: { title: "艺术实验室 | OhHoBa", description: "关于形态、距离与解读方式的互动研究。", url: "https://ohhoba.com/zh/experiments", locale: "zh_CN", type: "website" },
};
export default function Experiments() { return <ExperimentsPage lang="zh" />; }
