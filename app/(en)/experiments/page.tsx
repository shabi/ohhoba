import type { Metadata } from "next";
import { ExperimentsPage } from "@/components/experiments-page";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Explore interactive visual studies about form, distance, and interpretation in the OhHoBa art lab.",
  alternates: { canonical: "/experiments", languages: { en: "/experiments", "zh-CN": "/zh/experiments" } },
  openGraph: { title: "Experiments | OhHoBa", description: "Interactive studies about form, distance, and interpretation.", url: "https://ohhoba.com/experiments", type: "website" },
};
export default function Experiments() { return <ExperimentsPage lang="en" />; }
