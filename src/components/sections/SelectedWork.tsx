import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import { projects } from "@/content/projects";

/**
 * Section F — Selected work. Two to three substantial case studies, honestly
 * labelled (internal / prototype / concept until real client work is
 * published). No invented clients or metrics, ever.
 */
export default function SelectedWork() {
  const selected = projects.slice(0, 3);
  return (
    <section aria-labelledby="work-title" className="border-b border-line">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title="Work we can show you, labelled for what it is"
            intro="Until client engagements can be published, we show internal projects, prototypes, and concept studies — each marked clearly. The engineering reasoning is the point."
          />
          <Reveal delay={100}>
            <ButtonLink href="/work" variant="secondary">
              All work
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {selected.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100} className="h-full">
              <CaseStudyCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
