"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ArchiveEntry } from "@/types";

type ArchiveItemProps = {
  item: ArchiveEntry;
  isPinned: boolean;
  onTogglePin: () => void;
};

export function ArchiveItem({ item, isPinned, onTogglePin }: ArchiveItemProps) {
  const sourceType = item.src.endsWith(".mp4") ? "video/mp4" : undefined;
  const usesPersistentControls = item.slug === "mirae-showreel";
  const mediaAspect =
    item.aspectRatio === "landscape"
      ? "aspect-video"
      : item.aspectRatio === "square"
        ? "aspect-square"
        : "aspect-[9/16]";
  const recordClass = [
    "group surface-card archive-record overflow-hidden transition-transform duration-300 hover:-translate-y-1",
    usesPersistentControls ? "md:col-span-3" : ""
  ]
    .filter(Boolean)
    .join(" ");
  const videoStageClass = [
    "media-stage relative bg-black",
    usesPersistentControls ? "" : "cursor-pointer",
    mediaAspect
  ]
    .filter(Boolean)
    .join(" ");
  const showCategoryChip = item.category !== "Short-form Motion Ads";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canHoverPreview, setCanHoverPreview] = useState(false);
  const [generatedPoster, setGeneratedPoster] = useState<string | undefined>(
    item.posterSrc
  );

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

  useEffect(() => {
    if (item.mediaType !== "video" || item.posterSrc) {
      setGeneratedPoster(item.posterSrc);
      return;
    }

    let isCancelled = false;
    const previewVideo = document.createElement("video");
    previewVideo.src = item.src;
    previewVideo.muted = true;
    previewVideo.playsInline = true;
    previewVideo.preload = "auto";

    const captureFrame = () => {
      if (
        isCancelled ||
        previewVideo.videoWidth === 0 ||
        previewVideo.videoHeight === 0
      ) {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = previewVideo.videoWidth;
      canvas.height = previewVideo.videoHeight;

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      context.drawImage(previewVideo, 0, 0, canvas.width, canvas.height);
      setGeneratedPoster(canvas.toDataURL("image/jpeg", 0.82));
    };

    const handleLoadedData = () => {
      captureFrame();
    };

    previewVideo.addEventListener("loadeddata", handleLoadedData);
    previewVideo.load();

    return () => {
      isCancelled = true;
      previewVideo.pause();
      previewVideo.removeEventListener("loadeddata", handleLoadedData);
      previewVideo.removeAttribute("src");
      previewVideo.load();
    };
  }, [item.mediaType, item.posterSrc, item.src]);

  useEffect(() => {
    if (usesPersistentControls || !canHoverPreview || !videoRef.current) {
      return;
    }

    const video = videoRef.current;

    if (isPinned) {
      void video.play().catch(() => {
        // Ignore autoplay failures and keep the current frame visible.
      });
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [canHoverPreview, isPinned, usesPersistentControls]);

  const startPreview = () => {
    if (usesPersistentControls || !canHoverPreview || !videoRef.current || isPinned) {
      return;
    }

    const video = videoRef.current;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay failures and keep the poster frame visible.
    });
  };

  const stopPreview = () => {
    if (usesPersistentControls || !canHoverPreview || !videoRef.current || isPinned) {
      return;
    }

    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
  };

  const togglePinnedPlayback = () => {
    if (usesPersistentControls || !canHoverPreview) {
      return;
    }

    onTogglePin();
  };

  return (
    <article className={recordClass}>
      {item.mediaType === "image" ? (
        <div className={["media-stage relative bg-black", mediaAspect].join(" ")}>
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="h-full w-full object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          {showCategoryChip ? (
            <div className="category-chip pointer-events-none absolute left-4 top-4 px-3 py-1 text-xs tracking-[0.12em]">
              {item.category}
            </div>
          ) : null}
        </div>
      ) : (
        <div
          className={videoStageClass}
          onMouseEnter={usesPersistentControls ? undefined : startPreview}
          onMouseLeave={usesPersistentControls ? undefined : stopPreview}
          onFocus={usesPersistentControls ? undefined : startPreview}
          onBlur={usesPersistentControls ? undefined : stopPreview}
          onClick={usesPersistentControls ? undefined : togglePinnedPlayback}
          onKeyDown={
            usesPersistentControls
              ? undefined
              : (event) => {
                  if (event.key !== "Enter" && event.key !== " ") {
                    return;
                  }

                  event.preventDefault();
                  togglePinnedPlayback();
                }
          }
          tabIndex={usesPersistentControls ? undefined : 0}
          role={usesPersistentControls ? undefined : "button"}
          aria-pressed={usesPersistentControls ? undefined : isPinned}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            controls={usesPersistentControls || !canHoverPreview}
            muted
            loop
            playsInline
            preload="metadata"
            poster={generatedPoster}
          >
            <source src={item.src} type={sourceType} />
          </video>

          {showCategoryChip ? (
            <div className="category-chip pointer-events-none absolute left-4 top-4 px-3 py-1 text-xs tracking-[0.12em]">
              {item.category}
            </div>
          ) : null}
        </div>
      )}
      <div className="p-4 md:p-5">
        <h3 className="text-sm font-semibold leading-6 text-ivory md:text-[0.95rem]">
          {item.title}
        </h3>
        {item.description ? (
          <p className="mt-1 text-xs leading-5 text-muted md:text-[0.8rem]">
            {item.description}
          </p>
        ) : null}
        {item.note ? (
          <p className="mt-1 text-[0.62rem] font-light leading-4 text-muted/55">
            {item.note}
          </p>
        ) : null}
        <p className="mt-3 border-t border-gold/10 pt-3 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-gold/70">
          Contribution · {item.contribution ?? "100%"}
        </p>
      </div>
    </article>
  );
}
