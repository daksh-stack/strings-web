import type { ProcessStage } from "@/types/content";

/** The delivery methodology — used on the homepage overview and /process. */
export const processStages: ProcessStage[] = [
  {
    index: "01",
    name: "Understand",
    summary: "Clarify the business objective, users, constraints, existing systems, and definition of success.",
    details: [
      "Stakeholder and user conversations, focused on decisions the software must support.",
      "Review of existing systems, data, and documentation — what exists, what works, what hurts.",
      "Constraints made explicit early: budget shape, deadlines that are real, compliance, team capacity.",
    ],
    outputs: ["Problem statement and success criteria", "Constraints and risk register", "Recommended scope for the next stage"],
  },
  {
    index: "02",
    name: "Architect",
    summary: "Evaluate implementation options, choose an appropriate technical approach, and define the delivery scope.",
    details: [
      "Options compared on cost, risk, and fit — including build-vs-buy and the option of doing less.",
      "Data model and system boundaries defined before screens and features multiply.",
      "Scope written as deliverables, milestones, and acceptance criteria you can hold us to.",
    ],
    outputs: ["Architecture and data model", "Delivery scope and estimate", "Decision log for major trade-offs"],
  },
  {
    index: "03",
    name: "Engineer",
    summary: "Build in focused iterations, test critical flows, review trade-offs, and demonstrate progress.",
    details: [
      "Short iterations ending in working software you can use, not status slides.",
      "Automated tests on the flows the business depends on; code review on everything.",
      "Trade-offs surfaced as they appear, with options — never buried until they become crises.",
    ],
    outputs: ["Working software each iteration", "Test coverage on critical flows", "Progress and decision notes"],
  },
  {
    index: "04",
    name: "Ship & Improve",
    summary: "Deploy, document, hand over, and support the software according to the agreed engagement.",
    details: [
      "Deployment through the automated pipeline, with rollback that has been tested, not assumed.",
      "Documentation and a walkthrough so your team can operate the system without us in the room.",
      "Post-launch iteration and reliability work scoped to what the product actually needs next.",
    ],
    outputs: ["Production deployment", "Documentation and runbooks", "Handover and support plan"],
  },
];

/**
 * Delivery signals: the methodology markers shown with the process.
 * These describe how we work — they are not live project tracking.
 */
export const deliverySignals = [
  { label: "Discovery", note: "Problem and constraints evidenced" },
  { label: "Architecture", note: "Decisions logged with trade-offs" },
  { label: "Implementation", note: "Working software each iteration" },
  { label: "Testing", note: "Critical flows covered automatically" },
  { label: "Handover", note: "Docs, runbooks, and walkthrough" },
];

/**
 * Example decision log entries (illustrative, labelled as such wherever shown).
 */
export const decisionLogExamples = [
  {
    decision: "Fast MVP vs. scalable architecture",
    fast: "Ship a narrow version on simple foundations in weeks. Right when the open question is demand — will anyone use this? — and the product will change shape based on the answer.",
    scalable:
      "Invest up front in data modelling, permissions, and infrastructure. Right when the users, data, and obligations are already known — an internal platform, a regulated workflow, a migration target.",
    rule: "Our rule: scale the foundations you cannot retrofit (data, security, ownership) and keep everything else as light as the evidence justifies.",
  },
];
