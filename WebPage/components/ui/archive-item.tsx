"use client";

import { useEffect, useRef, useState } from "react";
import type { ArchiveEntry } from "@/types";

type ArchiveItemProps = {
  item: ArchiveEntry;
  isPinned: boolean;
  onTogglePin: () => void;
};

export function ArchiveItem({ item, isPinned, onTogglePin }: ArchiveItemProps) {
  const sourceType = item.src.endsWith(".mp4") ? "video/mp4" : undefined;
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
    if (!canHoverPreview || !videoRef.current) {
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
  }, [canHoverPreview, isPinned]);

  const startPreview = () => {
    if (!canHoverPreview || !videoRef.current || isPinned) {
      return;
    }

    const video = videoRef.current;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay failures and keep the poster frame visible.
    });
  };

  const stopPreview = () => {
    if (!canHoverPreview || !videoRef.current || isPinned) {
      return;
    }

    const video = videoRef.current;
    video.pause();
    video.currentTime = 0;
  };

  const togglePinnedPlayback = () => {
    if (!canHoverPreview) {
      return;
    }

    onTogglePin();
  };

  return (
    <article className="group surface-card editorial-shell overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div
        className="media-stage relative aspect-[9/16] cursor-pointer bg-black"
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
        onFocus={startPreview}
        onBlur={stopPreview}
        onClick={togglePinnedPlayback}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") {
            return;
          }

          event.preventDefault();
          togglePinnedPlayback();
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isPinned}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={!canHoverPreview}
          muted
          loop
          playsInline
          preload="metadata"
          poster={generatedPoster}
        >
          <source src={item.src} type={sourceType} />
        </video>

        <div className="category-chip pointer-events-none absolute left-4 top-4 rounded-lg px-3 py-1 text-xs tracking-[0.12em] text-white">
          {item.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium leading-6 md:text-[0.95rem]">
          {item.title}
        </h3>
        {item.description ? (
          <p className="mt-1 text-xs leading-5 text-[var(--muted)] md:text-[0.8rem]">
            {item.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
