import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/motion/Reveal";
import { faqs } from "@/content/faqs";

/** Section K — Frequently asked questions (data from src/content/faqs.ts). */
export default function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="border-b border-line bg-surface/40">
      <Container className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Questions, answered plainly"
            intro="Anything else you'd like to know, ask us directly — the contact page is one click, and a person reads every enquiry."
          />
          <Reveal>
            <Accordion items={faqs.map((f) => ({ title: f.question, content: f.answer }))} defaultOpen={0} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
