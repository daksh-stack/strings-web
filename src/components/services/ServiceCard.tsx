import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/content";

/**
 * Editorial capability row — number, name, summary, and a working link to the
 * service page. Used by the homepage Capabilities section and /services.
 * Deliberately rows, not identical icon cards: hierarchy does the work.
 */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group grid gap-3 border-t border-line py-7 transition-colors first:border-t-0 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-6 sm:py-8"
    >
      <span className="font-mono text-sm text-faint transition-colors group-hover:text-accent">{service.index}</span>
      <span>
        <span className="block text-xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline sm:text-2xl">
          {service.name}
        </span>
        <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-relaxed text-muted">{service.summary}</span>
      </span>
      <span className="hidden items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-accent sm:inline-flex">
        View service
        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
      </span>
    </Link>
  );
}
