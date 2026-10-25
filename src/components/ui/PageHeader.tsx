import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";

/** Shared inner-page header: mono eyebrow, the page's h1, a measured intro. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-line">
      <Container className="py-14 sm:py-20">
        <Reveal className="max-w-3xl">
          <Badge>
            <span aria-hidden="true" className="inline-block size-1.5 bg-accent" />
            {eyebrow}
          </Badge>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
          {intro ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
        </Reveal>
      </Container>
    </div>
  );
}
