import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const revalidate = 300;
export const metadata: Metadata = {
  title: { absolute: "OhHoBa — Digital Museum & Art Lab" },
  description: "Explore unusual forms, unfinished ideas, and visual experiments at OhHoBa, an independent digital museum and art lab.",
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/zh", "x-default": "/" } },
  openGraph: { title: "OhHoBa — Digital Museum & Art Lab", description: "A home for things still becoming.", url: "https://ohhoba.com/", locale: "en_US", alternateLocale: ["zh_CN"], type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OhHoBa — Digital Museum & Art Lab" }] },
};
export default function Home() { return <HomePage lang="en" />; }
