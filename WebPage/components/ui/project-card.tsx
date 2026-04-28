import Image from "next/image";
import Link from "next/link";
import { pageContent } from "@/data/content";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reverseLayout = index % 2 === 1;
  const isPrimaryProject = index === 0;
  const hasStructuredDetails = Boolean(project.details?.length);
  const mediaAspect =
    project.aspectRatio === "portrait"
      ? "mx-auto aspect-[9/16] w-full max-w-[360px]"
      : "aspect-video w-full";
  const sourceType = project.mediaSrc.endsWith(".mp4") ? "video/mp4" : undefined;

  return (
    <article className="surface-card editorial-shell overflow-hidden">
      <div
        className={[
          "grid gap-0 md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]",
          reverseLayout ? "md:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)]" : ""
        ].join(" ")}
      >
        <div className={reverseLayout ? "md:order-2" : ""}>
          <div className={["media-stage relative bg-black/5", mediaAspect].join(" ")}>
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
                <source src={project.mediaSrc} type={sourceType} />
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
            {project.details ? (
              <dl className="mt-5 space-y-3 text-sm leading-6 md:text-base md:leading-7">
                {project.details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="font-semibold text-ink">{detail.label}</dt>
                    <dd className="mt-0.5 text-muted">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                {project.description}
              </p>
            )}
          </div>

          <div className="mt-8">
            {!hasStructuredDetails ? (
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool} className="tag-pill">
                    {tool}
                  </li>
                ))}
              </ul>
            ) : null}

            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={[
                  "inline-flex items-center px-4 py-2.5 text-sm font-medium transition-all",
                  hasStructuredDetails ? "" : "mt-6",
                  isPrimaryProject
                    ? "action-primary text-white hover:-translate-y-0.5"
                    : "text-accent hover:opacity-70"
                ].join(" ")}
              >
                {pageContent.projects.viewProjectLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
