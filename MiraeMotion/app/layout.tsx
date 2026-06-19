import type { Metadata } from "next";
import type { ReactNode } from "react";
import { metadataContent } from "@/data/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mirae-motion.vercel.app";

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
        url: "/images/radiant-matte.jpg",
        width: 1200,
        height: 1200,
        alt: metadataContent.openGraphImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: metadataContent.defaultTitle,
    description: metadataContent.openGraphDescription,
    images: ["/images/radiant-matte.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
