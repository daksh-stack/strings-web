import type { Project } from "@/types/content";

/**
 * Projects and case studies.
 *
 * HONESTY RULE (from the brand spec): never invent clients, testimonials, or
 * results. Until real client work can be published, entries here are internal
 * projects, prototypes, and concept explorations — each carries a `kind` that
 * is rendered visibly wherever the project appears. When a real engagement can
 * be shared, add it with kind: "client" and only verified outcomes.
 */
export const projects: Project[] = [
  {
    slug: "operations-platform",
    name: "Opsboard — internal operations platform",
    category: "Internal platforms",
    kind: "internal",
    summary:
      "An internal platform that replaced a web of spreadsheets for tracking projects, deliverables, and client communications.",
    problem:
      "Project status lived in four spreadsheets and two people's inboxes. Answering 'where is this?' took a meeting.",
    solution:
      "A single internal platform modelling projects, milestones, and handoffs directly, with the spreadsheet views people relied on generated from live data instead of maintained by hand.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    context:
      "Built for a small operations team whose coordination tooling had grown organically: shared spreadsheets for status, email for approvals, and memory for everything else. This is an internal project, built to the same standard we apply to client platforms because it is the kind of system we are most often asked to build.",
    challenge:
      "Replace the spreadsheets without breaking the habits built around them. The team did not need 'a dashboard'; they needed the specific answers the spreadsheets gave them — current status, blockers, what is due this week — without anyone re-typing data to keep them current.",
    constraints: [
      "Adoption had to be voluntary: if the platform was slower than the spreadsheet for any common task, the team would quietly return to the spreadsheet.",
      "No dedicated operations staff — the system had to run itself in day-to-day use.",
      "Historical spreadsheet data was the only record for two years of projects and had to be imported without loss.",
    ],
    approach: [
      "Modelled the domain first: projects, milestones, deliverables, and handoffs as explicit entities, because the spreadsheets' hidden structure was the real problem.",
      "Generated the familiar spreadsheet-style views from live data, so nobody lost the format they trusted while the source of truth moved underneath.",
      "Made updates one-click wherever the old process was one cell edit — data entry friction, not features, was the adoption risk.",
    ],
    implementation: [
      "Next.js application with a PostgreSQL data model mirroring the domain entities, and row-level permissions for internal vs. client-visible information.",
      "A one-time import pipeline from the historical spreadsheets, with a reconciliation report that flagged ambiguous rows for human review instead of guessing.",
      "Weekly digest generated from live data, replacing a manually assembled status email.",
    ],
    result:
      "Qualitative result (internal project): the status meeting it replaced was retired, and the weekly digest is generated from the platform rather than assembled by hand. We do not publish invented metrics for internal work — the verified outcome is that the spreadsheets are no longer edited by anyone.",
    lessons:
      "The decisive work was not the interface. It was discovering that the spreadsheet was three different tools — a tracker, a report, and an archive — and that each needed a different replacement.",
    serviceSlugs: ["product-engineering", "automation-integrations"],
  },
  {
    slug: "support-retrieval-assistant",
    name: "Retrieval assistant for support documentation",
    category: "AI systems",
    kind: "prototype",
    summary:
      "A prototype retrieval system that answers support questions from a product's own documentation — with citations, and the discipline to say 'not covered' when it doesn't know.",
    problem:
      "Support teams answer the same documented questions repeatedly, while genuinely undocumented questions — the ones needing a human — get the same effort as the routine ones.",
    solution:
      "A retrieval-augmented assistant over the product's documentation that answers with citations to the exact passages it used, and escalates to a human queue when retrieval confidence is low.",
    stack: ["Python", "LLM APIs", "Vector search", "Evaluation harness"],
    context:
      "A working prototype built to answer a practical question: can retrieval over real product documentation be accurate enough — and measurably so — to trust in front of customers? This is a prototype, not a client deployment; it exists so that conversations about AI support tooling start from evidence instead of demos.",
    challenge:
      "Documentation is messier than demo data: duplicated pages, outdated versions, and answers split across three documents. A system that retrieves confidently from stale content is worse than no system at all.",
    constraints: [
      "Every answer had to cite its sources, so a human could verify it in seconds.",
      "The system had to refuse questions the documentation does not answer, instead of improvising.",
      "Accuracy claims had to come from an evaluation set, not from impressions of a few test chats.",
    ],
    approach: [
      "Built the evaluation set first: real historical support questions with the correct documented answers, agreed before any model tuning.",
      "Treated retrieval quality as the product: chunking by document structure, version filtering so superseded pages never surface, and reranking before generation.",
      "Designed escalation as a feature — low-confidence questions arrive in the human queue with the closest retrieved passages attached, so the human starts ahead.",
    ],
    implementation: [
      "Document ingestion pipeline with structural chunking and version metadata, indexed for vector search with keyword fallback.",
      "Answer generation constrained to retrieved passages, with citations rendered per claim.",
      "An evaluation harness that re-runs the fixed question set on every change to prompts, models, or indexing, and reports accuracy and refusal correctness side by side.",
    ],
    result:
      "Prototype findings (not client results): on the fixed evaluation set, the citation requirement and the refusal behaviour were what made the output reviewable by support staff — raw answer accuracy alone was not the deciding factor in whether they trusted it. The full evaluation methodology is the deliverable this prototype was built to prove out.",
    lessons:
      "The demo version of this system took days; the trustworthy version was mostly evaluation, versioning, and refusal design. That ratio is the honest answer to 'how long does an AI assistant take?'",
    serviceSlugs: ["ai-engineering", "backend-infrastructure"],
  },
  {
    slug: "legacy-modernization-study",
    name: "Modernizing a legacy reporting system — concept study",
    category: "Modernization",
    kind: "concept",
    summary:
      "A concept exploration of an incremental modernization path for a legacy reporting system — strangler pattern, staged cutover, no big-bang rewrite.",
    problem:
      "A reporting system everyone depends on and nobody wants to touch: old framework, manual deploys, reports that take hours — and a business that cannot pause reporting while it is rebuilt.",
    solution:
      "A staged modernization plan that wraps the legacy system, moves one report family at a time behind a new data pipeline, and retires the old system by attrition rather than by leap.",
    stack: ["Architecture study", "Data pipelines", "API facades", "Incremental migration"],
    context:
      "A concept study — an illustrative exploration, not client work — of the modernization pattern we most often recommend. It is published because the reasoning is reusable: any team facing a 'rewrite it all' proposal for a system the business cannot switch off can apply the same sequence.",
    challenge:
      "The system cannot stop. Reports feed decisions and compliance on fixed schedules, so any plan that includes 'and then we switch over' in one step is a plan to fail publicly.",
    constraints: [
      "Reporting must continue uninterrupted at every stage, with old and new outputs reconcilable during transition.",
      "The legacy system's undocumented behaviour is, in places, the specification — it has to be captured before it is replaced.",
      "Each stage must leave the system in a better, still-operable state if the programme pauses.",
    ],
    approach: [
      "Characterize before changing: golden-master tests that record the legacy system's current outputs for a library of real inputs.",
      "Put an API facade in front of the legacy system first, so consumers stop depending on its internals before anything is replaced.",
      "Move one report family at a time to the new pipeline, run old and new in parallel, and cut over only when outputs reconcile.",
    ],
    implementation: [
      "Stage 0: characterization test suite and output archive for the legacy system.",
      "Stage 1: facade API; all consumers migrated to it without touching legacy internals.",
      "Stage 2+: report families rebuilt on a scheduled data pipeline, verified against golden masters, cut over individually.",
      "Final stage: legacy system decommissioned only after a full reporting cycle runs entirely on the new pipeline.",
    ],
    result:
      "As a concept study there are no results to report — and that is the point of publishing it as one. The deliverable is the method: a modernization sequence where every stage is independently valuable and independently reversible.",
    lessons:
      "'Rewrite or refactor?' is usually the wrong first question. The productive question is: 'What is the smallest slice we can move safely, and what do we learn by moving it?'",
    serviceSlugs: ["modernization-consulting", "backend-infrastructure"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Human-readable label for a project's honesty marker. */
export function kindLabel(kind: Project["kind"]): string {
  switch (kind) {
    case "client":
      return "Client work";
    case "internal":
      return "Internal project";
    case "open-source":
      return "Open source";
    case "prototype":
      return "Prototype";
    case "concept":
      return "Concept exploration";
  }
}
