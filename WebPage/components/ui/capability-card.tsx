import type { Capability } from "@/types";

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <article className="surface-card editorial-shell h-full p-6 md:p-7">
      <p className="text-lg font-semibold">{capability.title}</p>
      <p className="mt-3 text-sm leading-6 text-muted md:text-base">
        {capability.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {capability.tools.map((tool) => (
          <li key={tool} className="tag-pill">
            {tool}
          </li>
        ))}
      </ul>
    </article>
  );
}
