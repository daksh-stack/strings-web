import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The shared content shell: ~1320px, consistent gutters at every size. */
export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}
