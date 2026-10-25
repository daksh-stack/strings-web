import { cn } from "@/lib/utils";

/** Small monospace label — the site's technical-annotation voice. */
export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
