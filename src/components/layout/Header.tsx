"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MobileNavigation from "@/components/layout/MobileNavigation";
import { headerCta, primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Site header: signal bar (configurable, disable in src/config/site.ts) +
 * lightweight sticky navigation with clear active states. The header stays
 * one height — no resize theatre. Mobile gets MobileNavigation.
 */
export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40">
      {site.signal.enabled && site.signal.text ? (
        <div className="border-b border-line bg-graphite">
          <Container>
            <p className="flex h-9 items-center justify-center gap-2 text-center font-mono text-[0.6875rem] tracking-[0.12em] text-muted uppercase">
              <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-accent" />
              {site.signal.text}
            </p>
          </Container>
        </div>
      ) : null}

      <div className="border-b border-line bg-graphite/90 backdrop-blur-md">
        <Container>
          <nav aria-label="Main" className="flex h-16 items-center justify-between gap-6">
            <Link href="/" className="flex items-baseline gap-2" aria-label={`${site.name} — home`}>
              <span className="text-lg font-semibold tracking-tight">{site.name}</span>
              <span aria-hidden="true" className="hidden font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase sm:inline">
                Studio
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-[4px] px-3.5 py-2 text-sm transition-colors",
                      isActive(item.href) ? "text-accent" : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href={headerCta.href}
                className="hidden h-10 items-center gap-2 rounded-[4px] bg-accent px-4 text-sm font-medium text-graphite transition-colors hover:bg-ink sm:inline-flex"
              >
                {headerCta.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <MobileNavigation />
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
