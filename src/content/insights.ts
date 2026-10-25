import type { Insight } from "@/types/content";

/**
 * Technical Field Notes — the Insights feed. Short, useful engineering
 * writing: observations, lessons, architectural decisions. Add an entry here
 * and it appears on /insights and at /insights/[slug]. No filler posts.
 */
export const insights: Insight[] = [
  {
    slug: "evaluation-before-models",
    title: "Evaluation before models: the order that makes AI features shippable",
    date: "2026-10-12",
    readingTime: "4 min",
    excerpt:
      "Most AI features fail in the gap between a promising demo and a measurable system. The fix is sequencing: build the evaluation set before you tune anything.",
    body: [
      "When a team says their AI feature 'works well', the useful follow-up is: on what evidence? A dozen hand-tried prompts prove the demo works. They say almost nothing about the thousandth real question, the badly phrased one, or the one your documentation doesn't actually answer.",
      "Our practice on AI work is to build the evaluation set first — real questions drawn from the domain, with agreed correct answers and agreed cases where the correct behaviour is a refusal. It is unglamorous work, and it changes every decision that follows: chunking, model choice, prompt structure, and the threshold at which the system escalates to a human.",
      "With an evaluation harness in place, 'we changed the prompt' becomes a measurable event instead of a vibe. Changes that regress the set don't ship, whatever they did for the one example someone tried. Changes that improve it ship with confidence.",
      "The broader lesson is not specific to AI. Any system whose quality is argued from anecdotes will drift. Decide how you'll know it's working before you build the thing that works — the order is the discipline.",
    ],
    tags: ["AI engineering", "Evaluation", "Production systems"],
  },
  {
    slug: "spreadsheets-are-three-tools",
    title: "A spreadsheet is usually three tools pretending to be one",
    date: "2026-09-28",
    readingTime: "3 min",
    excerpt:
      "When a spreadsheet 'runs the business', it is normally a tracker, a report, and an archive at once. Replacing it means replacing all three — differently.",
    body: [
      "Teams rarely ask to replace a spreadsheet. They ask why reporting takes a day, why two versions of the truth exist, or why one person's absence freezes a process. The spreadsheet is just where those problems are visible.",
      "Look closely and a hard-working spreadsheet is three tools: a tracker (current state, edited constantly), a report (a frozen view someone reads), and an archive (history nobody dares delete). Each fails differently. Trackers fail on concurrency and consistency. Reports fail on freshness. Archives fail on trust.",
      "This is why 'rebuild it as an app' disappoints when the app only replaces the tracker. The report people paste into decks and the archive auditors ask for are still being maintained by hand — in the same spreadsheet, which therefore never dies.",
      "Our approach on internal-platform work is to name all three jobs up front and replace each deliberately: live data for the tracker, generated views for the report, and an import-with-reconciliation for the archive. The spreadsheet retires when all three jobs have a better home.",
    ],
    tags: ["Internal platforms", "Automation", "Process"],
  },
  {
    slug: "rewrite-is-a-last-resort",
    title: "The rewrite is a last resort, and the evidence should say so",
    date: "2026-09-08",
    readingTime: "5 min",
    excerpt:
      "Rewrites are the highest-risk move in software: they freeze feature work, rediscover hidden requirements, and usually ship late. Sometimes they're still right — but the case should be made from evidence.",
    body: [
      "Every legacy system has a moment where someone senior says the words: 'It would be faster to start again.' Occasionally that is true. Far more often it is a feeling produced by real pain — slow delivery, frightening deploys, code nobody enjoys — attached to the wrong diagnosis.",
      "The evidence we look for is specific. Coupling so dense that changes routinely break unrelated behaviour. Defect rates that rise despite competent effort. Dependencies that are abandoned, unpatched, and load-bearing. An architecture that structurally cannot meet a requirement the business genuinely has. If those are absent, incremental work almost always wins on cost and risk.",
      "When modernization is the answer, the sequence matters more than the destination. Characterize the current system's behaviour first, put a facade in front of it, then move one slice at a time — verifying each against the old system's recorded outputs. Every step leaves a working system. A pause in the programme is an inconvenience, not a catastrophe.",
      "And when a rewrite genuinely is justified, that same evidence is what convinces stakeholders and protects the team mid-flight, when the new system is not yet better than the old one and everyone is asking why this was a good idea.",
      "Judge the feeling seriously — it usually signals real problems. Then make the decision from measurements, not from the feeling.",
    ],
    tags: ["Modernization", "Architecture", "Technical strategy"],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
