import Image from "next/image";
import Link from "next/link";
import { pageContent } from "@/data/content";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index: number;
  compactDetails?: boolean;
};

export function ProjectCard({ project, index, compactDetails = false }: ProjectCardProps) {
  const isPrimaryProject = index === 0;
  const hasStructuredDetails = Boolean(project.details?.length);
  const mediaAspect =
    project.aspectRatio === "portrait"
      ? "mx-auto aspect-[9/16] w-full max-w-[420px]"
      : project.aspectRatio === "square"
        ? "mx-auto aspect-square w-full max-w-[520px]"
      : "aspect-video w-full";
  const imageFitClass =
    project.aspectRatio === "square" ? "object-contain" : "object-cover";
  const detailListClass = compactDetails
    ? "mt-5 grid gap-3 text-xs leading-5 md:text-sm md:leading-6"
    : "mt-6 grid gap-4 text-sm leading-6 md:text-base md:leading-7";
  const sourceType = project.mediaSrc.endsWith(".mp4") ? "video/mp4" : undefined;

  return (
    <article className="surface-card featured-record overflow-hidden">
      <div
        className={[
          "grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]"
        ].join(" ")}
      >
        <div>
          <div className={["media-stage relative bg-black/5", mediaAspect].join(" ")}>
            {project.mediaType === "image" ? (
              <Image
                src={project.mediaSrc}
                alt={project.title}
                fill
                className={imageFitClass}
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
          className="flex flex-col justify-between p-6 md:p-8 lg:p-10"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              {project.type ? <span className="meta-chip">{project.type}</span> : null}
            </div>
            {project.titleEn ? (
              <p className="mt-5 text-3xl font-semibold leading-tight text-ivory md:text-5xl">
                {project.titleEn}
              </p>
            ) : null}
            <h3 className="mt-3 text-xl font-semibold text-ivory md:text-2xl">
              {project.title}
            </h3>
            {project.details ? (
              <dl className={detailListClass}>
                {project.details.map((detail) => (
                  <div key={detail.label} className="detail-row">
                    <dt>{detail.label}</dt>
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
                    ? "action-primary hover:-translate-y-0.5"
                    : "action-secondary"
                ].join(" ")}
              >
                {project.ctaLabel ?? pageContent.projects.viewProjectLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
