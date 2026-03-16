import type { Metadata } from "next";
import type { ReactNode } from "react";
import { metadataContent } from "@/data/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: metadataContent.defaultTitle,
    template: metadataContent.titleTemplate
  },
  description: metadataContent.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: metadataContent.defaultTitle,
    description: metadataContent.openGraphDescription,
    url: "/",
    siteName: metadataContent.siteName,
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/game.webp",
        width: 1200,
        height: 630,
        alt: metadataContent.openGraphImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: metadataContent.defaultTitle,
    description: metadataContent.openGraphDescription,
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
