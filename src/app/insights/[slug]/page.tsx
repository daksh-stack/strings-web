import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/motion/Reveal";
import { getInsight, insights } from "@/content/insights";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return pageMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
  });
}

/** A single field note. */
export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <Container className="py-14 sm:py-16">
        <Reveal className="max-w-3xl">
          <Link href="/insights" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
            <ArrowLeft aria-hidden="true" className="size-4" />
            All insights
          </Link>
          <div className="mt-8">
            <Badge>
              Field note — {formatDate(insight.date)} · {insight.readingTime}
            </Badge>
          </div>
          <h1 className="mt-5 text-4xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-[2.75rem]">{insight.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{insight.excerpt}</p>
        </Reveal>

        <Reveal className="mt-10 max-w-3xl border-t border-line pt-10">
          <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-ink/85">
            {insight.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
            {insight.tags.map((tag) => (
              <li key={tag} className="border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
      <div className="border-t border-line">
        <FinalCTA />
      </div>
    </>
  );
}
