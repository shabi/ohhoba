import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "OhHoBa — Digital Museum & Art Lab", short_name: "OhHoBa", description: "A digital museum for unusual forms and ideas still becoming.", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#ffffff", icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }] };
}
