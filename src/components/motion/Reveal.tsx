"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Subtle entrance transition: an element fades/rises the first time it enters
 * the viewport. CSS does the animation (globals.css); this component only
 * flips data-reveal from "hidden" to "shown" via IntersectionObserver.
 *
 * - Reduced motion: the CSS shows everything immediately; this is a no-op.
 * - No JS: elements render visible (data-reveal starts "shown" in markup and
 *   is only set to "hidden" by this effect before first paint completes) —
 *   content is never hostage to animation.
 * - `delay` staggers grouped items (ms), via the --reveal-delay CSS variable.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-reveal="shown"
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
