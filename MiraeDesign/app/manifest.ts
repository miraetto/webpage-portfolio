import type { MetadataRoute } from "next";
import { manifestContent } from "@/data/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: manifestContent.name,
    short_name: manifestContent.shortName,
    description: manifestContent.description,
    start_url: "/",
    display: "standalone",
    background_color: "#171113",
    theme_color: "#2a171d",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
