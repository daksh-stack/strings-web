import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";
import WorkGrid from "@/components/work/WorkGrid";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies in context, challenge, constraints, approach, implementation, and results — honestly labelled as client work, internal projects, prototypes, or concept studies.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Case studies, told as engineering stories"
        intro="Every entry follows the same structure — context, challenge, constraints, approach, implementation, result, lessons. Work that isn't client work says so, plainly."
      />
      <section aria-label="Projects">
        <Container className="py-14 sm:py-16">
          <WorkGrid />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
