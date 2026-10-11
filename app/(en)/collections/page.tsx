import type { Metadata } from "next";
import { CollectionsPage } from "@/components/collections-page";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse visual objects, invented systems, and unfinished ideas in the OhHoBa digital museum archive.",
  alternates: { canonical: "/collections", languages: { en: "/collections", "zh-CN": "/zh/collections" } },
  openGraph: { title: "Collections | OhHoBa", description: "Visual objects and invented systems from the OhHoBa archive.", url: "https://ohhoba.com/collections", type: "website" },
};
export default function Collections() { return <CollectionsPage lang="en" />; }
