"use client";

import { useEffect, useRef, useState } from "react";
import type { ArchiveEntry } from "@/types";

type ArchiveItemProps = {
  item: ArchiveEntry;
};

export function ArchiveItem({ item }: ArchiveItemProps) {
  const sourceType = item.src.endsWith(".mp4") ? "video/mp4" : undefined;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canHoverPreview, setCanHoverPreview] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateMatch = () => setCanHoverPreview(mediaQuery.matches);

    updateMatch();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMatch);

      return () => mediaQuery.removeEventListener("change", updateMatch);
    }

    mediaQuery.addListener(updateMatch);

    return () => mediaQuery.removeListener(updateMatch);
  }, []);

  const startPreview = () => {
    if (!canHoverPreview || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay failures and keep the poster frame visible.
    });
  };

  const stopPreview = () => {
    if (!canHoverPreview || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <article className="group surface-card editorial-shell overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div
        className="media-stage relative aspect-[9/16] cursor-pointer bg-black"
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
        onFocus={startPreview}
        onBlur={stopPreview}
        tabIndex={0}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={!canHoverPreview}
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.posterSrc}
        >
          <source src={item.src} type={sourceType} />
        </video>

        <div className="category-chip pointer-events-none absolute left-4 top-4 rounded-lg px-3 py-1 text-xs tracking-[0.12em] text-white">
          {item.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium md:text-lg">{item.title}</h3>
      </div>
    </article>
  );
}
