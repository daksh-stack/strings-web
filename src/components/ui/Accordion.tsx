"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Accessible accordion (WAI-APG pattern): buttons inside headings,
 * aria-expanded / aria-controls, panel animates its grid row 0fr → 1fr, and
 * closed panels are inert so keyboard and screen readers skip them.
 * `allowMultiple` off (default) gives single-open behaviour; `collapsible`
 * (default true) lets the open item be closed again.
 */
export default function Accordion({
  items,
  allowMultiple = false,
  collapsible = true,
  defaultOpen = 0,
}: {
  items: { title: string; content: React.ReactNode }[];
  allowMultiple?: boolean;
  collapsible?: boolean;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number[]>(defaultOpen === null ? [] : [defaultOpen]);

  const toggle = (index: number) => {
    setOpen((prev) => {
      const isOpen = prev.includes(index);
      if (allowMultiple) return isOpen ? prev.filter((i) => i !== index) : [...prev, index];
      if (isOpen) return collapsible ? [] : prev;
      return [index];
    });
  };

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        const buttonId = `accordion-button-${i}-${item.title.length}`;
        const panelId = `accordion-panel-${i}-${item.title.length}`;
        return (
          <div key={i} className="border-b border-line first:border-t">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
                className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-ink underline-offset-4 group-hover:underline sm:text-lg">
                  {item.title}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-5 shrink-0 text-muted transition-transform duration-300 motion-reduce:transition-none",
                    isOpen && "rotate-180 text-accent",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="max-w-3xl pb-6 text-[0.9375rem] leading-relaxed text-muted sm:text-base">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
