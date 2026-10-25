import type { Service } from "@/types/content";

/**
 * The service catalog. Each entry drives:
 *  - the homepage Capabilities section and /services index (index, name, summary)
 *  - its own page at /services/[slug] (everything else)
 * Add a service here and it appears everywhere; no component changes needed.
 */
export const services: Service[] = [
  {
    slug: "product-engineering",
    index: "01",
    name: "Product Engineering",
    summary: "Custom web applications, SaaS products, internal platforms, and MVPs — built to be operated, not just launched.",
    headline: "Products engineered for the people who run them, not just the launch.",
    problem:
      "A product is not finished when it demos well. It is finished when real users can rely on it daily, when your team can support it, and when the codebase still makes sense a year later. Most failed builds skip straight to features and discover this too late.",
    situations: [
      "You are launching a SaaS product and need a first version that can grow without a rewrite.",
      "Your team runs the business on spreadsheets and disconnected tools that no longer hold together.",
      "A prototype or no-code build proved the idea but cannot carry real customers.",
      "You need an internal platform that several teams will depend on every day.",
    ],
    approach: [
      "Start with the smallest version that is genuinely useful, and define what 'done' means for it in writing.",
      "Model the domain before the screens: the data and workflows decide the architecture, not the other way round.",
      "Build in short iterations with working software you can click, test, and react to every cycle.",
      "Treat operational needs — accounts, permissions, billing, reporting, support — as first-class features.",
    ],
    deliverables: [
      "Working product, deployed and documented",
      "Domain and data model documentation",
      "Admin and operational tooling agreed in scope",
      "Automated tests for critical flows",
      "Handover session and codebase walkthrough",
    ],
    technologies: ["TypeScript", "React / Next.js", "Node.js", "PostgreSQL", "REST & GraphQL APIs", "Docker"],
    exampleProjectSlug: "operations-platform",
    faqs: [
      {
        question: "Can you build an MVP without cutting corners we'll regret?",
        answer:
          "Yes — that is the point of scoping properly. We cut features, not foundations: the data model, authentication, and deployment pipeline are built the same way for an MVP as for a mature product, so version two is an extension, not a rewrite.",
      },
      {
        question: "Who owns the code and the infrastructure?",
        answer:
          "You do. Repositories, cloud accounts, and domains are created under your ownership from day one, and the handover includes everything needed to run the product without us.",
      },
    ],
  },
  {
    slug: "ai-engineering",
    index: "02",
    name: "AI & Intelligent Systems",
    summary: "LLM integrations, retrieval systems, AI agents, and practical machine learning — engineered for production, not demos.",
    headline: "AI systems that survive contact with production data, real users, and a budget.",
    problem:
      "Adding a chatbot to a website is not AI engineering. Real value comes from systems that retrieve the right information, act through controlled tools, are evaluated against real cases, and fail safely when the model is uncertain. Most teams discover the gap between a promising demo and a dependable system the expensive way.",
    situations: [
      "Your support or operations team answers the same questions from documents scattered across systems.",
      "You want an assistant that can look things up and take actions in your existing tools — with guardrails.",
      "A prototype built on a model API works in the demo but is inconsistent, slow, or costly at real volume.",
      "You need to know, with evidence, whether an AI feature is accurate enough to ship.",
    ],
    approach: [
      "Start from the workflow and the measurable outcome, not from the model. Some problems need retrieval, some need classification, some need no AI at all.",
      "Build retrieval on your actual data: chunking, indexing, and ranking are tested against questions your team really asks.",
      "Give agents controlled tool use — explicit permissions, logged actions, and human review where the cost of a mistake is high.",
      "Evaluate before launch and keep evaluating: a fixed test set drawn from real cases, run on every meaningful change.",
    ],
    deliverables: [
      "AI feature or system, deployed with monitoring",
      "Retrieval pipeline over your data sources",
      "Evaluation suite with real-case test sets",
      "Cost and latency analysis at expected volume",
      "Guardrail and fallback design documentation",
    ],
    technologies: ["LLM APIs (OpenAI, Anthropic)", "Retrieval / RAG pipelines", "Vector databases", "Python", "Embeddings & reranking", "Evaluation harnesses"],
    exampleProjectSlug: "support-retrieval-assistant",
    faqs: [
      {
        question: "How is this different from adding a chatbot widget?",
        answer:
          "A widget answers from a prompt and hopes. An engineered system retrieves from your verified data, cites its sources, refuses or escalates when it doesn't know, and is measured against an evaluation set before anyone relies on it. The interface is the smallest part of the work.",
      },
      {
        question: "Will our data be used to train models?",
        answer:
          "No. We use API providers with no-training data terms, keep your data in infrastructure you control where the design calls for it, and document exactly what data flows where.",
      },
      {
        question: "How do you control ongoing AI costs?",
        answer:
          "By design, not by surprise: model selection per task, caching, retrieval limits, and usage monitoring with alerts. The evaluation work includes a cost projection at your expected volume before launch.",
      },
    ],
  },
  {
    slug: "automation-integrations",
    index: "03",
    name: "Automation & Integrations",
    summary: "Workflow automation, API integrations, and operational tooling that removes repetitive work — with exception handling, not just happy paths.",
    headline: "Automation that handles the exceptions, not just the easy 80%.",
    problem:
      "Repetitive manual work is rarely hard — it is relentless. Copying data between systems, chasing approvals, re-keying orders. Naive automation breaks on the first unusual case and creates a second job: babysitting the automation. The work is designing for the exceptions from the start.",
    situations: [
      "Staff spend hours each week moving data between systems that both have APIs.",
      "Orders, tickets, or applications stall because nobody sees them arrive.",
      "A Zapier-style chain of automations has become business-critical and fragile.",
      "Reports are assembled by hand from five systems every week or month.",
    ],
    approach: [
      "Map the workflow as it actually happens — including the workarounds people don't mention in meetings.",
      "Automate the happy path, and design explicit queues and alerts for everything else, so exceptions land with a person, not in a void.",
      "Make every automated action observable and reversible where it matters: logs, audit trails, and dry-run modes.",
      "Integrate through official APIs and webhooks first; fragile screen-scraping only when there is genuinely no alternative.",
    ],
    deliverables: [
      "Automated workflows, deployed and monitored",
      "Integration layer between your systems",
      "Exception queues and alerting",
      "Runbook: what the automation does and how to intervene",
      "Before/after measurement of time saved",
    ],
    technologies: ["REST & webhook integrations", "Message queues", "Node.js / Python workers", "PostgreSQL", "Scheduled jobs", "Observability tooling"],
    exampleProjectSlug: "operations-platform",
    faqs: [
      {
        question: "How do we know the automation actually saved time?",
        answer:
          "We measure the manual baseline with you before building, then instrument the workflow so volume and handling time are visible after launch. If the numbers don't justify a workflow, we say so before you pay to build it.",
      },
      {
        question: "What happens when an integration breaks?",
        answer:
          "Failures are detected, logged, and surfaced to a named owner with enough context to act — and the workflow degrades to a manual queue rather than silently dropping work.",
      },
    ],
  },
  {
    slug: "backend-infrastructure",
    index: "04",
    name: "Backend & Infrastructure",
    summary: "APIs, databases, authentication, cloud deployment, and the unglamorous work that makes products reliable and fast.",
    headline: "The infrastructure work nobody sees — until it fails.",
    problem:
      "Products rarely die from a missing feature. They die from slow queries nobody profiled, an API that can't evolve, a deployment process everyone is afraid of, and data nobody fully trusts. Backend and infrastructure quality decides whether growth feels like progress or like a series of emergencies.",
    situations: [
      "Your API has become the bottleneck for every new feature and partner integration.",
      "The application slows down noticeably as data and users grow.",
      "Deploys are manual, risky, and dreaded by the whole team.",
      "You need authentication, permissions, or audit trails that meet enterprise or regulatory expectations.",
    ],
    approach: [
      "Profile before optimising: measure where time and money actually go, then fix the real constraint.",
      "Design APIs as contracts — versioned, documented, and stable for the consumers who depend on them.",
      "Automate the path to production: CI, repeatable deployments, and rollbacks that are boring by design.",
      "Build observability in: structured logs, metrics, and alerts tied to user impact, not server trivia.",
    ],
    deliverables: [
      "API design and implementation, documented",
      "Database schema design and migration plan",
      "CI/CD pipeline and deployment runbook",
      "Performance report with measured improvements",
      "Monitoring and alerting setup",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS / GCP", "CI/CD pipelines"],
    faqs: [
      {
        question: "Can you work inside our existing cloud and tooling?",
        answer:
          "Yes. We work within your AWS, GCP, or Azure setup and your existing conventions wherever they are sound, and we flag — with reasons — the specific places where a change pays for itself.",
      },
      {
        question: "Do you offer ongoing reliability support?",
        answer:
          "Through a dedicated engineering support engagement: monitoring reviews, incident support, and a standing backlog of reliability work, scoped to the hours you actually need.",
      },
    ],
  },
  {
    slug: "product-design-frontend",
    index: "05",
    name: "Product Design & Frontend",
    summary: "Interface architecture, design systems, and maintainable frontend applications that feel deliberate at every size.",
    headline: "Interfaces designed as systems, built to be maintained.",
    problem:
      "Interfaces usually fail quietly: inconsistent patterns that make every new screen slower to build, accessibility treated as a final checklist, frontend code that only its original author dares to touch. Good frontend work is a system — components, states, and rules — not a pile of pages.",
    situations: [
      "Your product works but feels inconsistent, and every new feature looks slightly different.",
      "The frontend has become the slowest part of shipping anything.",
      "You need a design system your team can actually build with, not a PDF.",
      "Accessibility requirements (enterprise procurement, regulation) are blocking deals.",
    ],
    approach: [
      "Audit the existing interface first: patterns in use, inconsistencies, and the states nobody designed (loading, empty, error, permission).",
      "Design the component system alongside real screens, so the system is proven by the product, not imposed on it.",
      "Build with semantics and accessibility from the first component — keyboard flows, focus states, and contrast are part of the design.",
      "Keep the frontend maintainable: typed components, documented usage, and performance budgets for what ships to the browser.",
    ],
    deliverables: [
      "Interface design for agreed flows and screens",
      "Component library / design system implementation",
      "Accessibility audit and remediation",
      "Frontend performance report",
      "Usage documentation for your team",
    ],
    technologies: ["React / Next.js", "TypeScript", "Tailwind CSS", "Design tokens", "Storybook", "WCAG 2.2 AA practice"],
    faqs: [
      {
        question: "Can you work with our existing brand and designs?",
        answer:
          "Yes. We can implement from your Figma files and brand guidelines, extend them where gaps appear (states and edge cases are the usual gaps), and document any deviations with reasons.",
      },
      {
        question: "Do you design as well as build?",
        answer:
          "For product interfaces, yes — design and frontend engineering are one engagement here, which removes the handoff where most fidelity and feasibility problems appear.",
      },
    ],
  },
  {
    slug: "modernization-consulting",
    index: "06",
    name: "Modernization & Technical Consulting",
    summary: "Architecture reviews, legacy modernization, technical discovery, and targeted engineering support for decisions that are expensive to get wrong.",
    headline: "Clear technical judgement before you spend serious money.",
    problem:
      "The most expensive software decisions are made with the least information: rewrite or refactor, build or buy, scale the team or fix the architecture. Consulting here means evidence first — reading the actual code, measuring the actual system — and recommendations you can act on with or without us.",
    situations: [
      "A legacy system still runs the business but frightens everyone who touches it.",
      "You are planning a significant build and want the architecture challenged before committing.",
      "Delivery has slowed and nobody agrees on whether the cause is code, process, or scope.",
      "You are evaluating a vendor, an acquisition's technology, or an AI initiative and need an independent technical read.",
    ],
    approach: [
      "Discovery is time-boxed and evidence-based: code review, system metrics, stakeholder interviews, and the documents that actually exist.",
      "Findings are written plainly, with the trade-offs of each option stated — including the option of doing nothing.",
      "Modernization is incremental wherever possible: strangler patterns and staged cutovers instead of big-bang rewrites.",
      "Recommendations come with a sequenced plan and rough costs, so the next step is a decision, not another study.",
    ],
    deliverables: [
      "Architecture and codebase review, written report",
      "Modernization roadmap with sequencing and risks",
      "Technical discovery document for a planned build",
      "Decision log: options considered and why",
      "Presentation and Q&A with your stakeholders",
    ],
    technologies: ["Architecture review", "Performance profiling", "Cloud cost analysis", "Security review basics", "Migration planning"],
    faqs: [
      {
        question: "Will you just recommend a total rewrite?",
        answer:
          "Almost never. Rewrites are the highest-risk option and we recommend one only when the evidence — coupling, defect rates, dead-end dependencies — says incremental work costs more. When we do, the report shows that evidence.",
      },
      {
        question: "Are we obliged to build with you afterwards?",
        answer:
          "No. Discovery and review engagements stand alone, and the documents are written so another team could execute them. Many clients do continue with us, but the work is designed not to require it.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function relatedServices(service: Service, count = 3): Service[] {
  return services.filter((s) => s.slug !== service.slug).slice(0, count);
}
