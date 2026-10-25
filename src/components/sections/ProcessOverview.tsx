import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { processStages } from "@/content/process";

/**
 * Section H — Our approach: the four-stage delivery framework as a horizontal
 * sequence on desktop, vertical on mobile. Links to the full Process page.
 */
export default function ProcessOverview() {
  return (
    <section aria-labelledby="approach-title" className="border-b border-line">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="approach-title"
            eyebrow="Our approach"
            title="A delivery framework with no surprises in it"
          />
          <Reveal delay={100}>
            <Link href="/process" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
              The full process
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processStages.map((stage, i) => (
            <Reveal key={stage.name} as="li" delay={i * 100} className="relative border-t-2 border-line pt-5">
              <span aria-hidden="true" className="absolute -top-[3px] left-0 h-[4px] w-10 bg-accent" />
              <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-faint uppercase">Stage {stage.index}</p>
              <h3 className="mt-2.5 text-xl font-semibold tracking-tight">{stage.name}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{stage.summary}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
