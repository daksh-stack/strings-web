import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import FinalCTA from "@/components/sections/FinalCTA";
import ServiceCard from "@/components/services/ServiceCard";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Product engineering, AI systems, automation, backend infrastructure, product design, and modernization — each a dedicated service, each scoped in writing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Capabilities, scoped like engineering — not sold like packages"
        intro="Every service below has its own page: the problem it solves, the situations it fits, our approach, and what you receive. No bundled 'solutions' with invented names."
      />
      <section aria-label="All services">
        <Container className="py-14 sm:py-16">
          <Reveal>
            <div>
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
