import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/motion/Reveal";
import { decisionLogExamples, deliverySignals, processStages } from "@/content/process";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Process",
  description:
    "How work moves from a problem statement to a handed-over product: Understand, Architect, Engineer, Ship & Improve — with decisions logged and delivery signals at every stage.",
  path: "/process",
});

/**
 * Process page: the four stages in full, the delivery signals that mark our
 * methodology, and an example decision log (labelled as an example — real
 * client decisions are the client's).
 */
export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="Delivery you can follow, stage by stage"
        intro="The same framework whether the engagement is a six-week build or a year-long partnership. Each stage has defined outputs, so you always know what exists, what was decided, and what happens next."
      />

      <Container className="py-14 sm:py-16">
        <ol className="space-y-16">
          {processStages.map((stage, i) => (
            <Reveal as="li" key={stage.name} delay={0}>
              <div className="grid gap-6 border-t-2 border-line pt-8 lg:grid-cols-[16rem_1fr_1fr] lg:gap-12">
                <div>
                  <p className="font-mono text-sm text-accent">Stage {stage.index}</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">{stage.name}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{stage.summary}</p>
                </div>
                <ul className="space-y-3">
                  {stage.details.map((d) => (
                    <li key={d} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                      <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-accent" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="border border-line bg-surface p-5">
                  <h3 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">
                    Outputs of stage {stage.index}
                  </h3>
                  <ul className="mt-3.5 space-y-2">
                    {stage.outputs.map((o) => (
                      <li key={o} className="text-sm leading-relaxed text-ink">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="sr-only">Stage {i + 1} of {processStages.length}</span>
            </Reveal>
          ))}
        </ol>
      </Container>

      <section aria-labelledby="signals-title" className="border-y border-line bg-surface/40">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <h2 id="signals-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Delivery signals
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Markers we hold ourselves to at each stage. They describe our methodology — not a window into live
              projects.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {deliverySignals.map((signal, i) => (
              <li key={signal.label} className="bg-graphite p-5">
                <span className="flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.12em] text-accent uppercase">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  {String(i + 1).padStart(2, "0")} · {signal.label}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted">{signal.note}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How decisions get made: an example</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            Every engagement keeps a decision log — options considered, the choice, and why. The entry below is an
            <strong className="text-ink"> illustrative example</strong>, not a client decision, showing the shape of
            that reasoning.
          </p>
        </Reveal>
        {decisionLogExamples.map((entry) => (
          <Reveal key={entry.decision} className="mt-8 border border-line">
            <h3 className="border-b border-line bg-surface px-6 py-4 font-mono text-sm text-ink">
              DECISION — {entry.decision}
            </h3>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-line px-6 py-6 md:border-r md:border-b-0">
                <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-faint uppercase">The faster path</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{entry.fast}</p>
              </div>
              <div className="px-6 py-6">
                <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-faint uppercase">The scalable path</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{entry.scalable}</p>
              </div>
            </div>
            <p className="border-t border-line px-6 py-5 text-[0.9375rem] leading-relaxed text-muted">
              <span className="font-medium text-accent">How we decide — </span>
              {entry.rule}
            </p>
          </Reveal>
        ))}
      </Container>

      <FinalCTA />
    </>
  );
}
