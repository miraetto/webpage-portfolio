import { Container } from "@/components/ui/container";

const MARQUEE_ITEMS = ["DESIGN", "ENGINE", "AI", "MOTION"];

export function InterludeMarquee() {
  const label = MARQUEE_ITEMS.join(" × ");

  return (
    <section aria-label="Portfolio rhythm label" className="py-8 md:py-10">
      <Container>
        <div className="marquee-shell">
          <div className="marquee-track" aria-hidden="true">
            {Array.from({ length: 2 }).map((_, copyIndex) => (
              <div key={copyIndex} className="marquee-copy">
                {Array.from({ length: 4 }).map((_, itemIndex) => (
                  <span key={`${copyIndex}-${itemIndex}`}>{label}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
