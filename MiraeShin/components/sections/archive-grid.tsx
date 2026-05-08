"use client";

import { useState } from "react";
import type { ArchiveEntry } from "@/types";
import { ArchiveItem } from "@/components/ui/archive-item";

type ArchiveGridProps = {
  items: ArchiveEntry[];
  variant?: "motion" | "banner" | "archive";
};

export function ArchiveGrid({ items, variant = "motion" }: ArchiveGridProps) {
  const [pinnedSlug, setPinnedSlug] = useState<string | null>(null);
  const gridClass =
    variant === "banner"
      ? "mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-2"
      : variant === "archive"
        ? "mt-12 grid grid-cols-1 items-start gap-5 md:grid-cols-3"
        : "mt-12 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <ArchiveItem
          key={item.slug}
          item={item}
          isPinned={item.slug === pinnedSlug}
          onTogglePin={() =>
            setPinnedSlug((currentPinnedSlug) =>
              currentPinnedSlug === item.slug ? null : item.slug
            )
          }
        />
      ))}
    </div>
  );
}
