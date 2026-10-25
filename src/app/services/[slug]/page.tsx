import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/motion/Reveal";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import { getService, relatedServices, services } from "@/content/services";
import { getProject } from "@/content/projects";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/**
 * Individual service page — template driven entirely by src/content/services.ts:
 * headline, problem, situations, approach, deliverables, technologies,
 * a real example (when one exists), related services, FAQs, enquiry CTA.
 */
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const example = service.exampleProjectSlug ? getProject(service.exampleProjectSlug) : undefined;
  const related = relatedServices(service);

  return (
    <>
      <div className="border-b border-line">
        <Container className="py-14 sm:py-20">
          <Reveal className="max-w-3xl">
            <Badge>
              Service {service.index} — {service.name}
            </Badge>
            <h1 className="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">{service.headline}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{service.problem}</p>
            <div className="mt-9">
              <ButtonLink href="/contact" size="lg">
                Discuss a project
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
        <ListSection title="When clients need this" items={service.situations} />
        <ListSection title="How we approach it" items={service.approach} />
        <ListSection title="Typical deliverables" items={service.deliverables} />
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Relevant technologies</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <li key={tech} className="border border-line bg-surface px-3 py-1.5 font-mono text-[0.75rem] text-muted">
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-faint">
            Tools, not the point — chosen per project and justified in the architecture stage.
          </p>
        </Reveal>
      </Container>

      {example && (
        <section aria-labelledby="example-title" className="border-y border-line bg-surface/40">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <h2 id="example-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                This service, in practice
              </h2>
            </Reveal>
            <div className="mt-8 max-w-2xl">
              <CaseStudyCard project={example} />
            </div>
          </Container>
        </section>
      )}

      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Questions about {service.name.toLowerCase()}</h2>
        </Reveal>
        <Reveal>
          <Accordion items={service.faqs.map((f) => ({ title: f.question, content: f.answer }))} defaultOpen={0} />
        </Reveal>
      </Container>

      <section aria-labelledby="related-title" className="border-t border-line">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <h2 id="related-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Related services
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
            {related.map((rel) => (
              <Link key={rel.slug} href={`/services/${rel.slug}`} className="group bg-graphite p-6 transition-colors hover:bg-surface">
                <span className="font-mono text-sm text-faint group-hover:text-accent">{rel.index}</span>
                <span className="mt-3 block text-lg font-semibold tracking-tight underline-offset-4 group-hover:underline">{rel.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{rel.summary}</span>
              </Link>
            ))}
          </div>
          <Reveal className="mt-12">
            <ButtonLink href="/contact" size="lg">
              Start a conversation
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
