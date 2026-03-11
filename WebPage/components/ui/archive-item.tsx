import type { ArchiveEntry } from "@/types";

type ArchiveItemProps = {
  item: ArchiveEntry;
};

export function ArchiveItem({ item }: ArchiveItemProps) {
  return (
    <article className="group surface-card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          controls
          muted
          playsInline
          preload="metadata"
          poster={item.posterSrc}
        >
          <source src={item.src} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs tracking-[0.12em] text-white">
          {item.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium md:text-lg">{item.title}</h3>
      </div>
    </article>
  );
}