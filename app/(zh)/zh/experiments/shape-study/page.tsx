import type { Metadata } from "next";
import { ShapeStudy } from "@/components/shape-study";
export const metadata: Metadata = {
  title: "意义的形态",
  description: "通过观看距离、视觉形态与解读方式的互动研究，体验 OhHoBa 艺术实验室。",
  alternates: { canonical: "/zh/experiments/shape-study", languages: { en: "/experiments/shape-study", "zh-CN": "/zh/experiments/shape-study" } },
  openGraph: { title: "意义的形态 | OhHoBa", description: "改变观看距离，观察形态如何变化。", url: "https://ohhoba.com/zh/experiments/shape-study", locale: "zh_CN", type: "website" },
};
export default function ShapeStudyPage() { return <ShapeStudy lang="zh" />; }
