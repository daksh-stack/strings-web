import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/content/services";

/** Section D — Capabilities at a glance: editorial rows, one per capability. */
export default function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" className="border-b border-line">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          id="capabilities-title"
          eyebrow="Capabilities"
          title="What we can take off your plate — and own properly"
          intro="Six capabilities that cover the full life of a product, from the first working version to the infrastructure it grows on. Each is a dedicated service with its own page."
        />
        <Reveal className="mt-12">
          <div>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
