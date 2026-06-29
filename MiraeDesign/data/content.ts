import type { ArchiveEntry, Capability, Project, SiteData } from "@/types";

export const site: SiteData = {
  name: "신미래",
  nameEn: "Mirae Shin",
  headline: "Beauty Commerce Content Designer",
  intro:
    "LA 뷰티 브랜드 마케팅팀에서 신제품 런칭 일정에 맞춰 자사몰, Instagram, TikTok, 이메일 채널용 콘텐츠를 제작했습니다.\n상세페이지, SNS 이미지, 광고 배너, 프로모션 비주얼, 숏폼 영상까지 제품이 온라인 화면에서 어떻게 보이고 전달되는지 고민하며 작업했습니다.\n제품의 컬러와 질감, 브랜드 무드가 자연스럽게 보이도록 촬영 이미지 셀렉, 보정, 카피 배치, GIF와 영상 편집까지 이어지는 제작 과정을 경험했습니다.",
  email: "mire1010@naver.com",
  itchUrl: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
  keywords: [
    "Beauty Commerce Content",
    "Detail Page",
    "SNS Creative",
    "Image Ads",
    "Short-form Video",
    "Product Retouching",
    "Product / Model Shooting",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "After Effects",
    "AI-assisted Ideation",
    "English Collaboration"
  ],
  navItems: [
    { href: "#advertising-works", label: "Selected" },
    { href: "#web-banner", label: "Image Ads" },
    { href: "#social-motion", label: "Short-form" },
    { href: "#game-marketing", label: "Personal / AI" },
    { href: "#motion-design-archive", label: "Studies" },
    { href: "#skills-about", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ]
};

export const capabilities: Capability[] = [
  {
    title: "BEAUTY COMMERCE CONTENT",
    description:
      "제품 정보, 카피, 비주얼을 채널 목적에 맞게 정리해 상세페이지와 광고 소재로 제작합니다.",
    tools: ["Detail Page", "SNS Creative", "Banner", "Promotion Visual"]
  },
  {
    title: "PRODUCT VISUAL",
    description:
      "제품과 모델 촬영 소스를 고르고 보정하며, 실제 컬러와 질감이 화면에서 자연스럽게 보이도록 다듬습니다.",
    tools: ["Product Retouching", "Color Check", "Texture", "DSLR / Camera"]
  },
  {
    title: "DESIGN",
    description:
      "이미지 보정, 그래픽 레이아웃, 카피 배치, GIF 요소를 활용해 커머스 화면에 맞는 비주얼을 만듭니다.",
    tools: ["Photoshop", "Illustrator", "Figma", "Layout Design"]
  },
  {
    title: "VIDEO / MOTION",
    description:
      "제품 분위기를 해치지 않는 선에서 텍스트 모션, 자막, 컷 편집, 간단한 합성으로 숏폼 영상을 정리합니다.",
    tools: ["Premiere Pro", "After Effects", "Short-form Edit", "GIF Motion"]
  },
  {
    title: "GENERATIVE AI",
    description:
      "아이디어와 시안 탐색 단계에서 AI 툴을 보조적으로 활용하고, 결과물은 디자인 툴에서 다시 정리합니다.",
    tools: ["ChatGPT", "GPT Image", "Kling", "Magnific", "AI-assisted Study"]
  },
  {
    title: "COMMUNICATION / DOCUMENTATION",
    description:
      "콘텐츠 리스트, 작업 기준, 수정사항을 정리하고 영어 기반 협업 환경에서도 제작 흐름을 맞춰갈 수 있습니다.",
    tools: ["English conversational", "PowerPoint", "Excel", "Word"]
  }
];

export const projects: Project[] = [
  {
    slug: "beauty-instastory",
    title: "뷰티 제품 숏폼 콘텐츠",
    titleEn: "Product Mood Motion",
    type: "Beauty Commerce / Short-form Content",
    description:
      "제품 이미지와 카피를 중심으로 텍스트와 그래픽 요소에 작은 움직임을 더한 9:16 숏폼 콘텐츠입니다.",
    details: [
      {
        label: "Brief",
        value:
          "모바일 화면에서 제품 이미지, 카피, 프로모션 메시지가 한눈에 보이도록 구성한 숏폼 광고 소재입니다."
      },
      {
        label: "Role",
        value:
          "키비주얼 구성, 이미지 편집 및 보정, 제품·그래픽 요소 배치, 텍스트 모션, 영상 마무리 작업"
      },
      {
        label: "Deliverables",
        value: "Instagram / TikTok short-form content, story creative, key visual variations"
      },
      {
        label: "Design Focus",
        value:
          "제품 자체는 안정적으로 보이게 두고, 텍스트와 그래픽 요소의 작은 움직임으로 브랜드 무드를 살렸습니다. 과한 전환보다 제품 분위기, 여백, 등장 타이밍을 맞추는 데 집중했습니다."
      },
      {
        label: "Tools",
        value: "Photoshop, Illustrator, After Effects, GPT Image"
      }
    ],
    tools: ["Photoshop", "Illustrator", "After Effects", "GPT Image"],
    mediaType: "video",
    mediaSrc: "/videos/scs-instastory-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "commerce-image-ad-set",
    title: "스킨케어 이미지 광고 세트",
    titleEn: "Commerce Image Ad Set",
    type: "Detail Page / SNS / Banner Visual",
    description:
      "제품의 사용감과 주요 성분, 타깃 메시지가 모바일 화면에서 빠르게 읽히도록 정리한 커머스 이미지 작업입니다.",
    details: [
      {
        label: "Brief",
        value:
          "스킨케어 제품 라인의 수분감, 제형, 기능 메시지를 상세페이지와 SNS 소재로 확장할 수 있도록 구성했습니다."
      },
      {
        label: "Role",
        value:
          "제품 이미지 셀렉 및 보정, 키비주얼 레이아웃, 카피 배치, 아이콘·그래픽 요소 구성, 채널별 비율 정리"
      },
      {
        label: "Deliverables",
        value: "Product key visual, detail page sections, SNS image ads, banner variations"
      },
      {
        label: "Design Focus",
        value:
          "제품의 컬러와 질감을 선명하게 보여주면서도, 성분 정보와 사용 장점이 복잡해 보이지 않도록 시선 흐름을 나누었습니다."
      },
      {
        label: "Tools",
        value: "Photoshop, Illustrator"
      }
    ],
    tools: ["Photoshop", "Illustrator"],
    mediaType: "image",
    mediaSrc: "/images/hyaluponic-set.png",
    aspectRatio: "landscape"
  },
  {
    slug: "weasy-concept-film",
    title: "AI 콘셉트 숏폼 필름",
    titleEn: "AI Concept Film Study",
    type: "AI-assisted Short-form / Personal Study",
    description:
      "AI 영상과 음악 툴을 활용해 캐릭터 콘셉트를 짧은 세로형 영상으로 정리한 개인 스터디입니다.",
    details: [
      {
        label: "Brief",
        value:
          "가상의 아이돌 콘셉트를 9:16 숏폼 영상으로 보여주기 위해 이미지, 영상, 음악 소스를 조합했습니다."
      },
      {
        label: "Role",
        value:
          "콘셉트 기획, 생성형 AI 소스 제작, 컷 구성, 리듬 편집, 색감과 후반 보정"
      },
      {
        label: "Deliverables",
        value: "9:16 AI-assisted short-form video, concept music film"
      },
      {
        label: "Design Focus",
        value:
          "AI 소스를 그대로 사용하기보다 컷 흐름, 색감, 음악 타이밍을 다시 맞춰 하나의 짧은 영상처럼 보이도록 정리했습니다."
      },
      {
        label: "Tools",
        value: "ComfyUI, Kling, Suno, Premiere Pro, GPT Image"
      }
    ],
    tools: ["ComfyUI", "Kling", "Suno", "Premiere Pro", "GPT Image"],
    mediaType: "video",
    mediaSrc: "/videos/wooricard-sequence-01.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "babttori-web-service",
    title: "점심 메뉴 추천 웹서비스",
    type: "AI-assisted Web Service / Personal Project",
    description:
      "점심 예산과 메뉴 취향을 바탕으로 오늘의 메뉴 조합과 근처 후보를 추천하는 웹서비스입니다.",
    details: [
      {
        label: "Brief",
        value:
          "점심 메뉴를 빠르게 고를 수 있도록 예산, 메뉴 카테고리, 근처 후보를 한 화면에서 정리했습니다."
      },
      {
        label: "Role",
        value: "서비스 기획, UI 디자인, 프론트엔드 구현, AI 활용 기획·구현 보조"
      },
      {
        label: "Deliverables",
        value: "Responsive web service, lunch menu recommendation UI"
      },
      {
        label: "Design Focus",
        value:
          "픽셀 그래픽과 간단한 선택 흐름을 사용해 메뉴를 고르는 과정이 가볍고 재미있게 느껴지도록 구성했습니다."
      },
      {
        label: "Tools",
        value: "ChatGPT, Next.js, Vercel"
      }
    ],
    tools: ["ChatGPT", "Next.js", "Vercel"],
    href: "https://babttori.vercel.app/",
    ctaLabel: "View Web Service",
    mediaType: "image",
    mediaSrc: "/images/babttori-home.png",
    aspectRatio: "square"
  },
  {
    slug: "day6-fangame",
    title: "1인 게임 개발 및 티저 영상",
    type: "Side Project / Teaser Video",
    description:
      "직접 만든 2D 프로젝트를 짧은 티저 영상과 홍보 비주얼로 정리한 개인 작업입니다.",
    details: [
      {
        label: "Brief",
        value:
          "픽셀 캐릭터와 우주 배경을 활용한 개인 프로젝트를 짧은 홍보용 티저로 소개했습니다."
      },
      {
        label: "Role",
        value: "개인 프로젝트 기획·제작, 티저 영상 편집, SNS 홍보 비주얼 제작"
      },
      {
        label: "Deliverables",
        value: "Promotional teaser video, itch.io project page, SNS promotion posts"
      },
      {
        label: "Result",
        value: "일일 방문자 1,000명 달성"
      },
      {
        label: "Design Focus",
        value:
          "캐릭터, 배경, 전환 장면을 중심으로 프로젝트의 분위기가 빠르게 전달되도록 컷 흐름과 텍스트 타이밍을 맞췄습니다."
      },
      {
        label: "Tools",
        value: "ChatGPT, Photoshop, After Effects, Sora"
      }
    ],
    tools: ["ChatGPT", "Photoshop", "After Effects", "Sora"],
    href: "https://wouldyoubemyday.itch.io/galaxy-is-an-excuse",
    ctaLabel: "View Teaser Side Project",
    mediaType: "video",
    mediaSrc: "/videos/day6-teaser.mp4",
    aspectRatio: "landscape"
  }
];

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "mirae-showreel",
    title: "Commerce / Motion Content Reel",
    description: "Selected beauty visual, short-form and motion works",
    category: "Showreel",
    mediaType: "video",
    src: "/videos/mirae-showreel.mp4",
    aspectRatio: "landscape",
    contribution: "90%"
  },
  {
    slug: "day6-teaser",
    title: "Teaser Video",
    description: "After Effects + personal project footage",
    category: "Teaser",
    mediaType: "video",
    src: "/videos/day6-teaser.mp4",
    posterSrc: "/images/game.webp",
    aspectRatio: "portrait"
  },
  {
    slug: "bf-instastory-1",
    title: "Product Mood Motion",
    description: "Illustrator + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/bf-instastory-1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cmf-instastory",
    title: "Ingredient Info Motion",
    description: "Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/cmf-instastory03.mp4",
    aspectRatio: "portrait",
    contribution: "80%"
  },
  {
    slug: "dhl-page1",
    title: "Text Motion Creative",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/dhl-page1.mp4",
    aspectRatio: "portrait",
    contribution: "70%"
  },
  {
    slug: "flc-instastory",
    title: "Product Copy Motion",
    description: "Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/flc-instastory-1.mp4",
    aspectRatio: "portrait",
    contribution: "70%"
  },
  {
    slug: "ggl-day2-page3",
    title: "Key Visual Short-form",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/ggl-day2-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "gss-day1-page1",
    title: "Product Key Visual Motion",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/gss-day1-page1.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "instastory-page2",
    title: "Short-form Video Edit",
    description: "Premiere Pro + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/instastory-page2.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "scs-instastory-page3",
    title: "Key Visual Motion Ad",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/scs-instastory-page3.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "cpf-instastory-01",
    title: "Product Motion Ad",
    description: "Illustrator + Photoshop + After Effects",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/cpf-instastory-01.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "sneaker-commerce-hero-ui",
    title: "Campaign Hero Visual",
    description: "Photoshop",
    category: "Image Ads",
    mediaType: "image",
    src: "/images/sneaker-commerce-hero-ui.png",
    aspectRatio: "landscape",
    note: "Portfolio concept work. Not an official campaign."
  },
  {
    slug: "untitled-2",
    title: "Animated Banner",
    description: "Illustrator + Photoshop",
    category: "Short-form Motion Ads",
    mediaType: "video",
    src: "/videos/untitled-2.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "radiant-matte",
    title: "Square Product Visual",
    description: "Photoshop",
    category: "Image Ads",
    mediaType: "image",
    src: "/images/radiant-matte.jpg",
    aspectRatio: "square"
  },
  {
    slug: "hyaluponic-set",
    title: "Skincare Product Visual Set",
    description: "Photoshop + Illustrator",
    category: "Image Ads",
    mediaType: "image",
    src: "/images/hyaluponic-set.png",
    aspectRatio: "landscape"
  },
  {
    slug: "m8s-squad",
    title: "AI-assisted Visual Study",
    description: "AI-assisted concept study + Photoshop",
    category: "AI Visual Study",
    mediaType: "image",
    src: "/images/m8s-squad.jpg",
    aspectRatio: "portrait",
    note: "Personal concept study using AI-assisted image exploration and Photoshop editing."
  },
  {
    slug: "magical-girl-transformation",
    title: "3D Motion Study",
    description: "Blender + After Effects",
    category: "3D Basic",
    mediaType: "video",
    src: "/videos/magical-girl-transformation.mp4",
    aspectRatio: "portrait"
  },
  {
    slug: "blender-camera-motion",
    title: "3D Camera Motion Study",
    description: "Blender + After Effects",
    category: "3D Basic",
    mediaType: "video",
    src: "/videos/blender-camera-motion.mkv",
    aspectRatio: "portrait"
  },
  {
    slug: "unity-vfx-01",
    title: "VFX Study",
    description: "Unity VFX test",
    category: "VFX Basic",
    mediaType: "video",
    src: "/videos/unity-vfx-01.mp4",
    aspectRatio: "portrait"
  }
];

export const pageContent = {
  hero: {
    subtitle:
      "제품의 컬러와 질감, 브랜드 무드가 온라인 화면에서 자연스럽게 보이도록 커머스 콘텐츠를 만듭니다.",
    primaryActionLabel: "View Works",
    secondaryActionLabel: "Contact",
    badgeLabel: "",
    panelLabel: "Approach",
    panelTitle:
      "뷰티 제품이 화면 안에서 실제보다 과장되지 않으면서도 매력적으로 보이도록 정보와 비주얼을 함께 정리합니다.",
    panelBullets: [
      "상세페이지, SNS 이미지, 광고 배너, 프로모션 비주얼, 숏폼 영상을 제작합니다.",
      "제품 촬영 소스, 카피, 브랜드 가이드, 채널별 규격을 함께 보며 완성도를 맞춥니다."
    ]
  },
  capabilities: {
    sectionLabel: "Capabilities",
    sectionTitle: "Commerce Toolkit"
  },
  projects: {
    sectionLabel: "Projects",
    sectionTitle: "Projects",
    viewProjectLabel: "프로젝트 보기"
  },
  advertisingWorks: {
    sectionLabel: "Selected",
    sectionTitle: "Selected Commerce Works",
    description:
      "뷰티 제품의 정보와 분위기가 온라인 화면에서 잘 보이도록 만든 대표 작업입니다. 이미지 광고, 상세페이지형 비주얼, 숏폼 콘텐츠를 중심으로 정리했습니다."
  },
  socialMotion: {
    sectionLabel: "Short-form",
    sectionTitle: "Short-form Product Content",
    description:
      "제품 이미지는 안정적으로 보여주고, 카피와 그래픽 요소의 작은 움직임으로 브랜드 무드를 더한 세로형 콘텐츠입니다."
  },
  webBanner: {
    sectionLabel: "Image Ads",
    sectionTitle: "Commerce Image Ads / Banner",
    description:
      "작은 영역에서도 제품 이미지, 핵심 문구, CTA가 먼저 보이도록 정리한 이미지 광고와 배너 작업입니다."
  },
  gameMarketing: {
    sectionLabel: "Personal / AI",
    sectionTitle: "AI-assisted Personal Projects",
    description:
      "생성형 AI와 웹 제작 도구를 보조적으로 활용해 만든 개인 프로젝트입니다. 아이디어를 빠르게 시각화하고 실제 화면이나 영상으로 정리하는 연습을 이어가고 있습니다.",
    placeholderTitle: "개인 프로젝트 준비 중",
    placeholderDescription:
      "커머스 콘텐츠와 연결할 수 있는 AI 보조 시안, 웹서비스, 짧은 영상 작업을 정리할 예정입니다."
  },
  motionDesignArchive: {
    sectionLabel: "Studies",
    sectionTitle: "Production Studies",
    description:
      "영상 편집, 3D 카메라 모션, VFX 테스트처럼 콘텐츠 제작에 응용할 수 있는 보조 작업입니다."
  },
  skillsAbout: {
    sectionLabel: "Skills",
    sectionTitle: "Skills"
  },
  gameSideProject: {
    sectionLabel: "Side Project",
    sectionTitle: "PV Side Project"
  },
  archive: {
    sectionLabel: "Studies",
    sectionTitle: "Video Studies"
  },
  contact: {
    sectionLabel: "Contact",
    sectionTitle: "Beauty Commerce Content · Visual Design · Short-form Content",
    description: "커머스 화면에서 제품이 잘 보이도록 정리하는 콘텐츠 디자인을 합니다.",
    supportText: "Beauty Commerce Content Designer"
  },
  notFound: {
    codeLabel: "404",
    title: "페이지를 찾을 수 없습니다.",
    description:
      "주소가 변경되었거나 잘못된 링크일 수 있습니다. 메인 페이지에서 다시 작업을 확인해보세요.",
    actionLabel: "메인으로 돌아가기"
  }
} as const;

export const metadataContent = {
  defaultTitle: "신미래 | Beauty Commerce Content Portfolio",
  titleTemplate: "%s | 신미래 포트폴리오",
  description:
    "상세페이지, SNS 이미지, 광고 배너, 숏폼 영상 중심의 뷰티 커머스 콘텐츠 디자이너 신미래 포트폴리오입니다.",
  openGraphDescription:
    "뷰티 제품 비주얼, 커머스 이미지 광고, 상세페이지형 콘텐츠, 숏폼 영상을 정리한 포트폴리오입니다.",
  siteName: "신미래 포트폴리오",
  openGraphImageAlt: "신미래 뷰티 커머스 콘텐츠 포트폴리오 대표 이미지"
} as const;

export const manifestContent = {
  name: "신미래 포트폴리오",
  shortName: "Mirae",
  description: "뷰티 커머스 콘텐츠 디자이너 신미래의 포트폴리오"
} as const;
