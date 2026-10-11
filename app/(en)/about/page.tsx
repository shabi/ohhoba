import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About OhHoBa",
  description: "Learn about OhHoBa, an independent digital museum and art lab for unusual forms, experimental language, and open-ended imagination.",
  alternates: { canonical: "/about", languages: { en: "/about", "zh-CN": "/zh/about" } },
  openGraph: { title: "About OhHoBa", description: "A place for open-ended imagination.", url: "https://ohhoba.com/about", images: [{ url: "/about/opengraph-image", width: 1200, height: 630, alt: "About OhHoBa" }], type: "website" },
};
export default function About() { return <AboutPage lang="en" />; }
