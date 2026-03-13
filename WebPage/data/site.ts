import type { Capability, SiteData } from "@/types";

export const site: SiteData = {
  name: "신미래",
  nameEn: "Mirae Shin",
  headline: "감각을 시스템으로 바꾸는 크리에이터",
  intro:
    "그래픽 디자인과 모션을 기반으로, AI·3D·실시간 엔진을 연결해 더 효율적이고 완성도 높은 제작 흐름을 만듭니다.",
  about:
    "그래픽과 모션 경험을 바탕으로, AI와 3D, 실시간 엔진을 연결한 작업 흐름을 설계합니다.",
  highlight:
    "그래픽 및 영상 디자인 경험을 바탕으로, AI와 3D, 실시간 엔진을 제작 과정에 자연스럽게 연결해왔습니다. Adobe 기반의 시각 콘텐츠 제작 경험 위에 Unity, Godot, Blender 등으로 작업 영역을 넓혀왔으며, 반복적인 작업을 줄이고 더 나은 결과를 만드는 흐름을 설계하는 일을 좋아합니다.",
  email: "miraetto@gmail.com",
  itchUrl: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
  keywords: [
    "Graphic Design",
    "Motion",
    "AI Workflow",
    "3D",
    "Unity",
    "Godot"
  ],
  navItems: [
    { href: "#about", label: "소개" },
    { href: "#capabilities", label: "역량" },
    { href: "#projects", label: "프로젝트" },
    { href: "#archive", label: "아카이브" },
    { href: "#contact", label: "연락" }
  ]
};

export const capabilities: Capability[] = [
  {
    title: "Visual",
    description: "브랜드와 화면의 첫 인상을 세밀하게 설계합니다.",
    tools: ["Photoshop", "Illustrator", "ComfyUI"]
  },
  {
    title: "Motion",
    description: "짧은 시간 안에서도 메시지가 선명하게 전달되도록 리듬을 만듭니다.",
    tools: ["Premiere Pro", "After Effects"]
  },
  {
    title: "Realtime",
    description: "실시간 엔진으로 경험을 더 입체적이고 상호작용적으로 확장합니다.",
    tools: ["Unity", "Godot"]
  },
  {
    title: "3D / Workflow",
    description: "3D와 AI를 제작 파이프라인에 연결해 반복을 줄이고 완성도를 높입니다.",
    tools: ["Blender", "AI-assisted production"]
  }
];