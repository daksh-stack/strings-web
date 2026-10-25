import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { kindLabel } from "@/content/projects";
import type { Project } from "@/types/content";

/**
 * Case-study composition: a composed preview panel (CSS/SVG, no stock
 * imagery) with the system layers of the project, then name, category, the
 * honesty label, problem and solution, and the stack. Substantial, not a grid
 * of identical tiles.
 */
export default function CaseStudyCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-surface transition-colors hover:border-muted">
      {/* Preview: layered system strip derived from the project's stack */}
      <div aria-hidden="true" className="relative overflow-hidden border-b border-line bg-graphite px-5 pt-5 pb-4">
        <div className="flex items-center justify-between font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase">
          <span>{project.category}</span>
          <span className="text-accent">{kindLabel(project.kind)}</span>
        </div>
        <div className="mt-5 space-y-1.5">
          {project.stack.slice(0, 3).map((tech, i) => (
            <div
              key={tech}
              className="flex h-7 items-center justify-between border border-line bg-surface px-3"
              style={{ marginInlineStart: `${i * 14}px` }}
            >
              <span className="font-mono text-[0.6875rem] text-muted">{tech}</span>
              <span className="size-1.5 rounded-full bg-accent/70" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl leading-snug font-semibold tracking-tight">
          <Link href={`/work/${project.slug}`} className="underline-offset-4 hover:underline">
            {project.name}
          </Link>
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
          <span className="text-ink">Problem — </span>
          {project.problem}
        </p>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
          <span className="text-ink">Solution — </span>
          {project.solution}
        </p>
        <div className="mt-auto pt-6">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            aria-label={`Read the full case study: ${project.name}`}
          >
            Read the case study
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
