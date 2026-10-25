import Link from "next/link";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

/** Custom 404 — helpful, on-brand, and honest about what happened. */
export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-accent uppercase">Error 404</p>
      <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
        This page doesn&rsquo;t exist — or no longer does.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        The address may be mistyped, or the page may have moved. The work, services, and process are all one click
        away.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Back to the homepage
        </ButtonLink>
        <ButtonLink href="/work" variant="secondary" size="lg">
          See the work
        </ButtonLink>
      </div>
      <p className="mt-10 font-mono text-[0.75rem] text-faint">
        If you followed a link on this site to get here,{" "}
        <Link href="/contact" className="text-accent hover:underline">
          tell us
        </Link>{" "}
        — broken links are bugs, and we fix bugs.
      </p>
    </Container>
  );
}
