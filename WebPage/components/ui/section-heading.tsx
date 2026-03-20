type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="section-title mt-3 text-3xl font-semibold md:text-5xl">
        {title}
      </h2>
      <div className="section-divider mt-5" aria-hidden="true" />
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
