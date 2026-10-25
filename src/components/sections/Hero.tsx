import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";
import EngineeringWorkbench from "@/components/sections/EngineeringWorkbench";

/**
 * Section C — Hero: The Engineering Manifesto.
 * Editorial, asymmetric two-column composition: manifesto on the left, the
 * Engineering Workbench on the right. On mobile the workbench follows the
 * CTAs, simplified only by scale — the concept stays intact.
 */
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <Badge>Software Engineering · AI Systems · Product Development</Badge>
            <h1 id="hero-title" className="mt-6 text-[2.6rem] leading-[1.04] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.2rem]">
              Complex problems. Thoughtfully engineered.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We partner with teams to design and build dependable software—from the first working version to the
              systems that support real growth.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Discuss a project
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                Explore our work
              </ButtonLink>
            </div>
            <p className="mt-8 font-mono text-[0.6875rem] leading-relaxed tracking-[0.08em] text-faint uppercase">
              For startups, growing businesses &amp; established teams
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <EngineeringWorkbench />
        </Reveal>
      </Container>
    </section>
  );
}
