"use client";

import { useState } from "react";
import type { ArchiveEntry } from "@/types";
import { ArchiveItem } from "@/components/ui/archive-item";

type ArchiveGridProps = {
  items: ArchiveEntry[];
};

export function ArchiveGrid({ items }: ArchiveGridProps) {
  const [pinnedSlug, setPinnedSlug] = useState<string | null>(null);

  return (
    <div className="mt-12 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
