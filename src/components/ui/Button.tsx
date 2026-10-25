import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Button styles shared by links and real buttons. Square-ish corners on
 * purpose (brand: avoid pill-shaped elements). The primary variant is the one
 * place the acid-mint accent fills a surface — with graphite text on it.
 */
const variants = {
  primary:
    "bg-accent text-graphite font-medium hover:bg-ink focus-visible:outline-accent",
  secondary:
    "border border-line bg-transparent text-ink hover:border-muted hover:bg-surface focus-visible:outline-accent",
  ghost: "text-ink hover:text-accent",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
  sm: "h-9 px-4 text-sm",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[4px] transition-colors duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function buttonClassName(variant: Variant = "primary", size: Size = "md", className?: string): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[4px] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}
