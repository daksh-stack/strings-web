import Link from "next/link";
import Container from "@/components/ui/Container";
import { contact } from "@/config/contact";
import { primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import { services } from "@/content/services";

/**
 * Site footer: wordmark and positioning, navigation, service links, contact
 * email from configuration, professional profiles, Privacy, dynamic
 * copyright, and a small technical sign-off.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-graphite">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-baseline gap-2">
              <span className="text-xl font-semibold tracking-tight">{site.name}</span>
              <span aria-hidden="true" className="font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase">
                Studio
              </span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.positioning}</p>
            <p className="mt-6 text-sm">
              <a href={`mailto:${contact.email}`} className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
                {contact.email}
              </a>
            </p>
            {contact.socials.length > 0 && (
              <ul className="mt-5 flex gap-2">
                {contact.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center rounded-[4px] border border-line px-3 text-sm text-muted transition-colors hover:border-muted hover:text-ink"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-muted transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-muted transition-colors hover:text-ink">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-faint uppercase">Start</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Have a problem worth engineering properly? Tell us what you are trying to accomplish.
            </p>
            <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Start a conversation →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-faint">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[0.8125rem] text-faint">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy policy
            </Link>
            <span aria-hidden="true" className="font-mono text-[0.625rem] tracking-[0.14em] uppercase">
              Designed &amp; engineered in-house
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
