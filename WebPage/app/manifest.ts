import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "신미래 포트폴리오",
    short_name: "Mirae",
    description: "감각을 시스템으로 바꾸는 크리에이터 신미래의 포트폴리오",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1ea",
    theme_color: "#2d5b50",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
