import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/content/services";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Why this studio exists, what we believe about good software, how we partner with clients, and where our technical focus lies. Founder-led by design — and honest about it.",
  path: "/about",
});

const BELIEFS = [
  {
    title: "Software is a means, never the point",
    body: "Nobody needs an app. They need the outcome the app makes possible — hours returned, errors eliminated, a product that can be sold. We start every engagement there, and we measure our work against it.",
  },
  {
    title: "Small team, senior judgement",
    body: "This is a founder-led studio, deliberately. The people who scope your work are the people who do it; nothing is handed down a chain of account managers to whoever is free. That is a constraint we are proud of, and it is why we take on selected projects rather than all projects.",
  },
  {
    title: "Honesty is a deliverable",
    body: "If a simpler tool solves the problem, we say so. If your timeline cannot hold the scope, we say so before you sign, not after. If we are the wrong team for the work, we say that too. Advice you can verify is worth more than enthusiasm.",
  },
  {
    title: "You own what we build",
    body: "Code, infrastructure, data, documentation — created under your ownership, in accounts you control. A partner you cannot leave is a liability, not a partner. Our work is designed so that leaving us is always possible and never punished.",
  },
];

const FOCUS = [
  "Product engineering for web platforms and SaaS",
  "AI systems with evaluation and guardrails",
  "Workflow automation and systems integration",
  "Backend reliability, APIs, and performance",
  "Interface systems and accessible frontends",
  "Legacy modernization without the big-bang rewrite",
];

/**
 * About page: mission, why the studio exists, beliefs, partnership approach,
 * principles in practice, technical focus, invitation. No invented history,
 * team size, or credentials — the studio is presented as founder-led, which
 * it is, as a strength with its limits stated.
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An engineering studio with a point of view"
        intro="We exist because most software problems are not technology problems. They are clarity problems — about what to build, what to skip, and what 'working' means — that technology then has to honour."
      />

      <Container className="py-14 sm:py-16">
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our mission</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            To give startups, growing businesses, and established teams access to the kind of engineering that is
            usually reserved for companies with large in-house teams: careful, senior, and accountable — scaled to
            engagements where that quality changes the outcome.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The studio model is the point. A small team that designs, builds, integrates, and supports software
            end-to-end can hold the whole problem in view at once — the business requirement, the architecture, the
            interface, and the system it will live in. Large agencies hand those to four departments. We keep them in
            one conversation.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {BELIEFS.map((belief, i) => (
            <Reveal key={belief.title} delay={(i % 2) * 80} className="bg-graphite p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight">{belief.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{belief.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How partnerships work here</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                Engagements begin with discovery, not a quote. We learn the problem, look at what already exists, and
                write down the scope, the trade-offs, and the price shape before any build begins. You sign off on
                something specific, or we part as friends with a useful document.
              </p>
              <p>
                During the work, you see working software on a rhythm, decisions logged as they&rsquo;re made, and problems
                surfaced while they&rsquo;re still cheap. At the end, you receive the system, its documentation, and a
                walkthrough — plus our honest assessment of what should happen next, including if the answer is
                &ldquo;nothing, for now&rdquo;.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Technical focus</h2>
            <ul className="mt-5 space-y-3">
              {FOCUS.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-faint">
              The full catalog, with approaches and deliverables, lives on the{" "}
              <Link href="/services" className="text-accent hover:underline">
                Services pages
              </Link>
              . Our writing on how we think lives in{" "}
              <Link href="/insights" className="text-accent hover:underline">
                Insights
              </Link>
              .
            </p>
            <p className="sr-only">{services.length} services in the catalog.</p>
          </Reveal>
        </div>
      </Container>

      <FinalCTA />
    </>
  );
}
