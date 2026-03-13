import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "day6-fangame",
    title: "1인 창작 팬게임 제작 프로젝트",
    description:
      "밴드 DAY6를 모티브로 한 2D 픽셀 플랫포머 팬게임을 제작했습니다. 게임 제작뿐 아니라 티저 영상도 직접 제작해, 기획부터 홍보까지 하나의 톤으로 연결했습니다.",
    tools: ["Godot", "SORA", "Photoshop", "After Effects"],
    href: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
    mediaType: "video",
    mediaSrc: "/videos/day6-teaser.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "beauty-instastory",
    title: "Generative Motion Workflow for Vertical Ads",
    description:
      "인스타스토리 포맷에 맞춘 짧은 모션그래픽 콘텐츠를 제작했습니다. 제한된 시간 안에서 제품의 인상과 메시지가 분명하게 전달되도록 화면 구성과 리듬을 설계했습니다.",
    tools: ["Photoshop", "After Effects", "ChatGPT"],
    mediaType: "video",
    mediaSrc: "/videos/bf-instastory-1.mp4",
    posterSrc: "/images/radiant-matte.jpg",
    aspectRatio: "portrait"
  }
];