import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reverseLayout = index % 2 === 1;

  return (
    <article className="surface-card overflow-hidden">
      <div
        className={[
          "grid gap-0 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]",
          reverseLayout ? "md:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)]" : ""
        ].join(" ")}
      >
        <div className={reverseLayout ? "md:order-2" : ""}>
          <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
            {project.mediaType === "image" ? (
              <Image
                src={project.mediaSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                controls
                muted
                loop
                playsInline
                preload="metadata"
                poster={project.posterSrc}
              >
                <source src={project.mediaSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        <div
          className={[
            "flex flex-col justify-between p-6 md:p-8",
            reverseLayout ? "md:order-1" : ""
          ].join(" ")}
        >
          <div>
            <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
              {project.description}
            </p>
          </div>

          <div className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li key={tool} className="tag-pill">
                  {tool}
                </li>
              ))}
            </ul>

            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-medium text-accent transition-opacity hover:opacity-70"
              >
                프로젝트 보기
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}