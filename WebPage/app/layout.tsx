import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "신미래 | 감각을 시스템으로 바꾸는 크리에이터",
    template: "%s | 신미래 포트폴리오"
  },
  description:
    "그래픽 디자인, 모션, AI, 3D, Unity, Godot 경험을 바탕으로 감각을 제작 시스템으로 연결하는 신미래의 포트폴리오.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "신미래 | 감각을 시스템으로 바꾸는 크리에이터",
    description:
      "그래픽 디자인, 모션, AI, 3D, Unity, Godot 경험을 연결한 개인 포트폴리오.",
    url: "/",
    siteName: "신미래 포트폴리오",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/game.webp",
        width: 1200,
        height: 630,
        alt: "신미래 포트폴리오 대표 이미지"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "신미래 | 감각을 시스템으로 바꾸는 크리에이터",
    description:
      "그래픽 디자인, 모션, AI, 3D, Unity, Godot 경험을 연결한 개인 포트폴리오.",
    images: ["/images/game.webp"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
