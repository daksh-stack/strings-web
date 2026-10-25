import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

/**
 * Section G — What we can help you build. Framed as customer problems, not
 * technology buzzwords; each problem connects to the services that solve it.
 */
const USE_CASES = [
  {
    problem: "Launching a new SaaS product",
    detail:
      "You have the idea and the market. You need a first version that real customers can rely on — and foundations that won't need rebuilding at version two.",
    services: ["product-engineering", "product-design-frontend"],
  },
  {
    problem: "Replacing spreadsheets with an internal platform",
    detail:
      "The business runs on files that are edited by everyone and owned by no one. You need one system of record that people actually prefer to the spreadsheet.",
    services: ["product-engineering", "automation-integrations"],
  },
  {
    problem: "Automating repetitive operational work",
    detail:
      "Your team copies, chases, and re-keys the same information every week. You need automation that handles exceptions gracefully instead of creating a second job.",
    services: ["automation-integrations", "backend-infrastructure"],
  },
  {
    problem: "Adding AI to an existing product",
    detail:
      "You want AI where it earns its place — retrieval over your data, controlled tool use, measured accuracy — not a chatbot bolted on for the pitch deck.",
    services: ["ai-engineering"],
  },
  {
    problem: "Connecting disconnected systems",
    detail:
      "Your tools each hold part of the truth and none of them talk. You need integrations that move data reliably, visibly, and reversibly.",
    services: ["automation-integrations", "backend-infrastructure"],
  },
  {
    problem: "Rebuilding an application that no longer scales",
    detail:
      "The system works, until it doesn't — slow, fragile, frightening to change. You need a modernization path that keeps the business running throughout.",
    services: ["modernization-consulting", "backend-infrastructure"],
  },
] as const;

const SERVICE_NAMES: Record<string, string> = {
  "product-engineering": "Product Engineering",
  "ai-engineering": "AI & Intelligent Systems",
  "automation-integrations": "Automation & Integrations",
  "backend-infrastructure": "Backend & Infrastructure",
  "product-design-frontend": "Product Design & Frontend",
  "modernization-consulting": "Modernization & Consulting",
};

export default function UseCases() {
  return (
    <section aria-labelledby="use-cases-title" className="border-b border-line bg-surface/40">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          id="use-cases-title"
          eyebrow="Start from the problem"
          title="What we can help you build"
          intro="Most engagements begin with one of these situations. If yours resembles one, the linked services are where the conversation starts."
        />
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {USE_CASES.map((useCase, i) => (
            <Reveal key={useCase.problem} as="article" delay={(i % 2) * 80} className="bg-graphite p-6 sm:p-8">
              <h3 className="text-lg leading-snug font-semibold tracking-tight sm:text-xl">{useCase.problem}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{useCase.detail}</p>
              <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {useCase.services.map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] tracking-[0.08em] text-accent uppercase hover:underline"
                  >
                    {SERVICE_NAMES[slug]}
                    <ArrowRight aria-hidden="true" className="size-3" />
                  </Link>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
