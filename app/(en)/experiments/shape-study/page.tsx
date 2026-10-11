import type { Metadata } from "next";
import { ShapeStudy } from "@/components/shape-study";
export const metadata: Metadata = {
  title: "The Shape of a Meaning",
  description: "An interactive study in viewing distance, visual form, and interpretation from the OhHoBa art lab.",
  alternates: { canonical: "/experiments/shape-study", languages: { en: "/experiments/shape-study", "zh-CN": "/zh/experiments/shape-study" } },
  openGraph: { title: "The Shape of a Meaning | OhHoBa", description: "Change your distance. See the form change with it.", url: "https://ohhoba.com/experiments/shape-study", type: "website" },
};
export default function ShapeStudyPage() { return <ShapeStudy lang="en" />; }
