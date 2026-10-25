import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/motion/Reveal";
import { insights } from "@/content/insights";
import { pageMetadata } from "@/lib/seo/metadata";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Technical field notes: engineering observations, lessons, and architectural decisions from the studio's work — written to be useful, not to fill a content calendar.",
  path: "/insights",
});


/** Insights — the Technical Field Notes feed. */
export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader
        eyebrow="Insights · Field notes"
        title="Notes from the workbench"
        intro="Short, specific engineering writing: what we observed, what it changed, and what we'd tell another team facing the same thing. Published when there's something to say."
      />
      <Container className="py-14 sm:py-16">
        <div>
          {sorted.map((insight, i) => (
            <Reveal key={insight.slug} className="border-t border-line py-9 first:border-t-0 first:pt-0">
              <article className="grid gap-4 sm:grid-cols-[11rem_1fr] sm:gap-10">
                <p className="font-mono text-[0.75rem] leading-relaxed text-faint">
                  {formatDate(insight.date)}
                  <span className="mt-1 block">{insight.readingTime} read</span>
                </p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-balance">
                    <Link href={`/insights/${insight.slug}`} className="underline-offset-4 hover:underline">
                      {insight.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">{insight.excerpt}</p>
                  <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="flex flex-wrap gap-2">
                      {insight.tags.map((tag) => (
                        <span key={tag} className="border border-line px-2 py-0.5 font-mono text-[0.6875rem] text-muted">
                          {tag}
                        </span>
                      ))}
                    </span>
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                      aria-label={`Read: ${insight.title}`}
                    >
                      Read note
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </p>
                </div>
              </article>
              <span className="sr-only">Note {i + 1} of {sorted.length}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
