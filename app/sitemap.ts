import type { MetadataRoute } from "next";
import { collectionItems } from "./collections-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ohhoba.com";
  const pairs = [
    ["/", "/zh"], ["/about", "/zh/about"], ["/collections", "/zh/collections"], ["/experiments", "/zh/experiments"],
    ["/experiments/shape-study", "/zh/experiments/shape-study"],
    ...collectionItems.map((item) => [`/collections/${item.slug}`, `/zh/collections/${item.slug}`]),
  ];
  const stamp = new Date();
  return pairs.flatMap(([en, zh]) => [
    { url: `${base}${en}`, lastModified: stamp, alternates: { languages: { en: `${base}${en}`, "zh-CN": `${base}${zh}`, "x-default": `${base}${en}` } } },
    { url: `${base}${zh}`, lastModified: stamp, alternates: { languages: { en: `${base}${en}`, "zh-CN": `${base}${zh}`, "x-default": `${base}${en}` } } },
  ]);
}
