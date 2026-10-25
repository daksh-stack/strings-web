import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import { contact } from "@/config/contact";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} handles the information you share through this website, including project enquiries.`,
  path: "/privacy",
});

/**
 * Privacy policy — plain, specific, and true of this codebase: the only
 * personal data the site collects is what the enquiry form submits, delivered
 * through the configured provider. Review with your own counsel before launch
 * and update the "last updated" date when it changes.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" intro={`Last updated: 25 October 2026. This page describes what this website collects and why — in plain language.`} />
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl space-y-10 leading-relaxed text-muted">
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">What we collect</h2>
            <p className="mt-3">
              The only personal information this website collects is what you type into the project enquiry form:
              your name, work email, optional company, and the details of your enquiry. The site sets no advertising
              cookies and runs no third-party trackers.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">How enquiries are handled</h2>
            <p className="mt-3">
              Enquiries are validated on our server and delivered to our inbox through the configured delivery
              provider (for example, a webhook into our own systems). We use enquiry details only to respond to you
              and, if we work together, to run the engagement. We do not sell enquiry data or add you to marketing
              lists.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Retention</h2>
            <p className="mt-3">
              Enquiries that do not lead to an engagement are periodically reviewed and deleted. Engagement records
              are kept for the period our contracts and accounting obligations require.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Your rights &amp; contact</h2>
            <p className="mt-3">
              You may ask what information we hold about you, and ask for it to be corrected or deleted, at any time.
              Write to{" "}
              <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                {contact.email}
              </a>{" "}
              and we will respond promptly.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Changes</h2>
            <p className="mt-3">
              If this policy changes materially, the updated version will be published here with a new date.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
