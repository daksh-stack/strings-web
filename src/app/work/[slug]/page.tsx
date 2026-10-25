import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { getProject, kindLabel, projects } from "@/content/projects";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.name,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

function StorySection({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-10">
      <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-accent uppercase">{label}</p>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-muted">{children}</div>
      </div>
    </Reveal>
  );
}

/**
 * Case-study page — the storytelling structure from the specification:
 * context, challenge, constraints, approach, implementation, result, lessons.
 * Never just a list of technologies.
 */
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const relatedServices = project.serviceSlugs.map(getService).filter(Boolean);

  return (
    <>
      <div className="border-b border-line">
        <Container className="py-14 sm:py-20">
          <Reveal className="max-w-3xl">
            <Badge>
              {project.category} — {kindLabel(project.kind)}
            </Badge>
            <h1 className="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">{project.name}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technology stack">
              {project.stack.map((tech) => (
                <li key={tech} className="border border-line bg-surface px-3 py-1.5 font-mono text-[0.75rem] text-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>

      <Container className="py-14 sm:py-16">
        <StorySection label="Context" title="The situation">
          <p>{project.context}</p>
        </StorySection>
        <StorySection label="Challenge" title="What needed solving">
          <p>{project.challenge}</p>
        </StorySection>
        <StorySection label="Constraints" title="What we had to work within">
          <ul className="space-y-3">
            {project.constraints.map((c) => (
              <li key={c} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-accent" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </StorySection>
        <StorySection label="Approach" title="The decisions that shaped it">
          <ul className="space-y-3">
            {project.approach.map((a) => (
              <li key={a} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-accent" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </StorySection>
        <StorySection label="Implementation" title="How it was built">
          <ul className="space-y-3">
            {project.implementation.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </StorySection>
        <StorySection label="Result" title="What came of it">
          <p>{project.result}</p>
        </StorySection>
        <StorySection label="Lessons" title="What it revealed">
          <p>{project.lessons}</p>
        </StorySection>
      </Container>

      <section className="border-t border-line bg-surface/40">
        <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Facing something similar?</h2>
            <p className="mt-2 max-w-xl text-muted">
              The services behind this work:
              {relatedServices.map((s, i) => (
                <span key={s!.slug}>
                  {i > 0 ? ", " : " "}
                  <Link href={`/services/${s!.slug}`} className="text-accent hover:underline">
                    {s!.name}
                  </Link>
                </span>
              ))}
              .
            </p>
          </div>
          <ButtonLink href="/contact" size="lg">
            Discuss your project
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
