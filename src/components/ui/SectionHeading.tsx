import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * Editorial section heading: mono eyebrow, assertive title, measured intro.
 * Deliberately not centred-cliché: left-aligned by default, matching the
 * site's asymmetric editorial layout.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <Badge>
          <span aria-hidden="true" className="inline-block size-1.5 bg-accent" />
          {eyebrow}
        </Badge>
      ) : null}
      <h2 id={id} className="mt-4 text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
    </Reveal>
  );
}
