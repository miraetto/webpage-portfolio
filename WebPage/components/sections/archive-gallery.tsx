"use client";

import { startTransition, useDeferredValue, useMemo, useRef, useState } from "react";
import type { ArchiveEntry } from "@/types";
import { ArchiveItem } from "@/components/ui/archive-item";

type ArchiveGalleryProps = {
  items: ArchiveEntry[];
};

const FILTERS = ["전체", "게임 티저", "소셜 모션", "3D 모션", "VFX"] as const;
const ALL_FILTER = FILTERS[0];

export function ArchiveGallery({ items }: ArchiveGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>(ALL_FILTER);
  const deferredFilter = useDeferredValue(activeFilter);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    if (deferredFilter === ALL_FILTER) {
      return items;
    }

    return items.filter((item) => item.category === deferredFilter);
  }, [deferredFilter, items]);

  const handleFilterChange = (filter: (typeof FILTERS)[number]) => {
    startTransition(() => {
      setActiveFilter(filter);
    });

    requestAnimationFrame(() => {
      const gridElement = gridRef.current;

      if (!gridElement) {
        return;
      }

      const top = gridElement.getBoundingClientRect().top + window.scrollY - 118;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth"
      });
    });
  };

  return (
    <>
      <div className="sticky top-4 z-20 mt-8">
        <div className="filter-ribbon no-scrollbar px-2 py-2">
          <div className="flex min-w-max gap-2">
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium tracking-[0.04em] transition-all duration-200",
                    isActive
                      ? "border-[var(--deep)] bg-[var(--deep)] text-white shadow-soft"
                      : "border-black/10 bg-white/60 text-muted hover:-translate-y-0.5 hover:border-black/20 hover:bg-white/80 hover:text-[var(--deep)]"
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div ref={gridRef} className="mt-12 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <ArchiveItem key={item.slug} item={item} />
        ))}
      </div>
    </>
  );
}
