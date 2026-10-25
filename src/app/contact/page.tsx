import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactInteractive from "@/components/forms/ContactInteractive";
import Reveal from "@/components/motion/Reveal";
import { contact } from "@/config/contact";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project conversation: use the brief builder to structure your problem, then send a qualified enquiry. We reply personally, usually within two working days.",
  path: "/contact",
});

/**
 * Contact — the lead-qualification experience. Brief Builder first (it writes
 * into the form), then the enquiry form itself. Direct email alongside for
 * anyone who prefers it.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discuss a project"
        intro="Tell us what you are trying to accomplish, what is getting in the way, and where you need help. Specific is good; complete is not required."
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-14 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <Reveal>
            <ContactInteractive />
          </Reveal>
          <aside className="space-y-8">
            <Reveal delay={100} className="border border-line bg-surface/60 p-6">
              <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">Prefer email?</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Write to{" "}
                <a href={`mailto:${contact.email}`} className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-accent">
                  {contact.email}
                </a>{" "}
                with the same details: the problem, the context, and what success looks like.
              </p>
            </Reveal>
            <Reveal delay={150} className="border border-line bg-surface/60 p-6">
              <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {[
                  "We read it personally and reply — usually within two working days.",
                  "A short call to understand the problem properly, if it looks like a fit.",
                  "A written proposal for the smallest sensible next step, typically discovery — with scope and price, before any build.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-muted">
                    <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={200} className="border border-line bg-surface/60 p-6">
              <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">Not a fit for the form?</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Small questions, press, and partnerships are welcome at the same email address. Job applications,
                when roles open, are announced on our profiles rather than accepted speculatively.
              </p>
            </Reveal>
          </aside>
        </div>
      </Container>
    </>
  );
}
