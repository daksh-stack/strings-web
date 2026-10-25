import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

/**
 * Section I — Engineering principles. Editorial statement set in typography,
 * spacing, and thin rules — deliberately no cards.
 */
const PRINCIPLES = [
  "Solve the problem before choosing the technology.",
  "Prefer maintainable systems over clever complexity.",
  "Use AI where it creates measurable value — and say so when it doesn't.",
  "Treat security and data privacy as engineering requirements, not features.",
  "Make technical trade-offs explicit, in writing, while they're cheap.",
  "Build for the people who must operate the software after us.",
  "Optimize for the right level of quality, not unnecessary complexity.",
];

export default function Principles() {
  return (
    <section aria-labelledby="principles-title" className="border-b border-line bg-surface/40">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            id="principles-title"
            eyebrow="Engineering principles"
            title="How we decide when nobody is watching"
            intro="Principles are only useful when they change a decision. These change ours regularly — including decisions to do less, or to recommend against work we've been asked to quote."
          />
          <ol>
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle} as="li" delay={i * 40} className="flex gap-5 border-t border-line py-5 first:border-t-0 first:pt-0">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-snug font-medium tracking-tight text-balance sm:text-xl">{principle}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
