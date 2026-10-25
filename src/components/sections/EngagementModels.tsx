import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

/**
 * Section J — Engagement models. Four ways to work with the studio. Scope,
 * timelines, and pricing depend on requirements — no fabricated prices.
 */
const MODELS = [
  {
    name: "Fixed-scope project",
    detail: "For well-defined deliverables, milestones, and acceptance criteria.",
    fit: "You know what needs building and want a defined outcome for a defined price.",
  },
  {
    name: "Product development partnership",
    detail: "For teams building or evolving a product through iterative delivery.",
    fit: "The product is alive and changing; you need a team that ships continuously and owns quality with you.",
  },
  {
    name: "Dedicated engineering support",
    detail: "For ongoing technical requirements and additional implementation capacity.",
    fit: "You have a backlog, a live system, and not enough engineering hours to cover both.",
  },
  {
    name: "Technical discovery & architecture",
    detail: "For clients who need clarity before committing to a substantial build.",
    fit: "The decision is expensive and the information is thin. A time-boxed study first, a commitment second.",
  },
];

export default function EngagementModels() {
  return (
    <section aria-labelledby="engagements-title" className="border-b border-line">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          id="engagements-title"
          eyebrow="Engagement models"
          title="Four ways to work with us"
          intro="Scope, timelines, and pricing depend on your requirements — we'll define them with you in writing before any build begins, rather than quote a number in the dark."
        />
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
          {MODELS.map((model, i) => (
            <Reveal key={model.name} delay={(i % 2) * 80} className="bg-graphite p-6 sm:p-8">
              <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-faint uppercase">Model {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{model.name}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{model.detail}</p>
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Fits when — </span>
                {model.fit}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
