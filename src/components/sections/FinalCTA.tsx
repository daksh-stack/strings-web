import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

/** Section L — Final CTA. */
export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title">
      <Container className="py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-accent uppercase">Next step</p>
          <h2 id="final-cta-title" className="mt-4 text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-5xl">
            Have a problem worth engineering properly?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Tell us what you are trying to accomplish, what is getting in the way, and where you need help.
          </p>
          <div className="mt-9">
            <ButtonLink href="/contact" size="lg">
              Start a conversation
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
