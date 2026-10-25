"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { headerCta, primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Mobile navigation: a panel under the header, toggled by a labelled button.
 * Accessible by construction — aria-expanded/controls, Esc closes and returns
 * focus to the toggle, focus moves into the panel on open, page scroll locks
 * while open, and it closes on navigation or when the viewport reaches lg.
 */
export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    if (open) firstLinkRef.current?.focus();
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 64rem)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open ]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        ref={toggleRef}
        onClick={() => setOpen((v) => !v)}
        aria-controls="mobile-menu"
        aria-expanded={open}
        className="inline-flex size-10 items-center justify-center rounded-[4px] text-ink transition-colors hover:bg-surface"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-graphite shadow-2xl">
          <nav aria-label="Mobile" className="mx-auto max-w-shell px-5 py-4 sm:px-8">
            <ul className="divide-y divide-line">
              {primaryNav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between text-base",
                      isActive(item.href) ? "text-accent" : "text-ink",
                    )}
                  >
                    {item.label}
                    <span className="font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase">{site.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={headerCta.href}
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-[4px] bg-accent text-[0.9375rem] font-medium text-graphite"
            >
              {headerCta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
