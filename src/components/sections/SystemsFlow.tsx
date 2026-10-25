"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * Section E — The Workbench concept: a project as a structured flow.
 * Problem → Architecture → Build → Integration → Delivery. Selecting a stage
 * reveals the decisions behind it. Explanatory visualization of methodology —
 * not a live dashboard, and labelled accordingly.
 */
const STAGES = [
  {
    name: "Problem",
    annotation: "What is actually being solved, for whom, and how success will be recognised. Most expensive mistakes are made here, quietly.",
  },
  {
    name: "Architecture",
    annotation: "The smallest structure that can carry the problem: data model, boundaries, and the trade-offs written down while they're still cheap to change.",
  },
  {
    name: "Build",
    annotation: "Focused iterations of working software. Critical flows tested as they're built, not in a hardening phase nobody scheduled.",
  },
  {
    name: "Integration",
    annotation: "The new system meets the real world: existing tools, third-party APIs, data that doesn't match the documentation. Planned for, never discovered.",
  },
  {
    name: "Delivery",
    annotation: "Deployed through a tested pipeline, documented, and handed over so the system can be operated — and changed — without its builders in the room.",
  },
] as const;

export default function SystemsFlow() {
  const [active, setActive] = useState(1);
  const stage = STAGES[active] ?? STAGES[0];

  return (
    <section aria-labelledby="systems-title" className="border-b border-line bg-surface/40">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          id="systems-title"
          eyebrow="The system behind the software"
          title="Behind every reliable product is a system that makes sense"
          intro="High-quality software is not just about writing code. It depends on understanding the business requirement, choosing the right architecture, managing trade-offs, testing, and maintaining the result. Select a stage to see the decisions inside it."
        />

        <Reveal className="mt-14">
          <ol className="grid gap-px border border-line bg-line md:grid-cols-5" aria-label="Project stages">
            {STAGES.map((stage, i) => {
              const isActive = active === i;
              return (
                <li key={stage.name} className="bg-graphite">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex w-full flex-col gap-2 px-5 py-5 text-left transition-colors sm:min-h-32",
                      isActive ? "bg-surface" : "hover:bg-surface/60",
                    )}
                  >
                    <span className={cn("font-mono text-[0.6875rem] tracking-[0.14em] uppercase", isActive ? "text-accent" : "text-faint")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={cn("text-base font-semibold sm:text-lg", isActive ? "text-ink" : "text-muted")}>{stage.name}</span>
                    <span aria-hidden="true" className={cn("mt-auto hidden font-mono text-[0.625rem] text-faint uppercase md:inline", isActive && "text-accent")}>
                      {isActive ? "● selected" : "view →"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative mt-6 border border-line bg-graphite px-5 py-6 sm:px-7" aria-live="polite">
            <span aria-hidden="true" className="flow-line absolute top-0 left-0 h-0.5 w-full origin-left bg-accent/60" />
            <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-accent uppercase">
              Stage {String(active + 1).padStart(2, "0")} — {stage.name}
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{stage.annotation}</p>
          </div>

          <p className="mt-4 font-mono text-[0.6875rem] text-faint">
            Explanatory model of our delivery method — not live project tracking.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
