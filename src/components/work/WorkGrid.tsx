"use client";

import { useState } from "react";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Work index grid with category filters. Filtering is instant and local. */
export default function WorkGrid() {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "h-9 rounded-[4px] border px-3.5 text-sm transition-colors",
              active === category
                ? "border-accent bg-accent font-medium text-graphite"
                : "border-line text-muted hover:border-muted hover:text-ink",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
          {visible.map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 border border-line bg-surface px-6 py-10 text-muted">
          No projects in this category yet. Published work appears here as engagements can be shared.
        </p>
      )}
    </div>
  );
}
