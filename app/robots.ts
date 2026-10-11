import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://ohhoba.com/sitemap.xml", host: "https://ohhoba.com" };
}
