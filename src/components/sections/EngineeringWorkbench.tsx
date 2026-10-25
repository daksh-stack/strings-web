import Container from "@/components/ui/Container";

/**
 * The Engineering Workbench — the site's signature visual.
 *
 * A composed systems diagram (pure SVG, no image assets): a request enters
 * through the Interface, is processed by the Application, calls out to
 * Integrations, and rests on Infrastructure. A packet travels the path
 * (SMIL animateMotion; hidden for reduced-motion visitors) and each module's
 * status dot pulses in sequence. Monospace annotations label the modules the
 * way an engineer would. Every module named here maps to a real layer we
 * design and build — it is an explanatory diagram, not a live dashboard.
 */
const MODULES = [
  { id: "interface", label: "Interface", note: "web · mobile · admin", x: 24, y: 28 },
  { id: "application", label: "Application", note: "domain logic · APIs", x: 208, y: 118 },
  { id: "integrations", label: "Integrations", note: "payments · CRM · data", x: 392, y: 28 },
  { id: "infrastructure", label: "Infrastructure", note: "cloud · CI/CD · observability", x: 208, y: 252 },
] as const;

const W = 148;
const H = 64;

function ModuleBox({ label, note, x, y, accent = false }: { label: string; note: string; x: number; y: number; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={W} height={H} rx={3} fill="#17191B" stroke={accent ? "#B8F36B" : "#303438"} strokeWidth={accent ? 1.25 : 1} />
      <circle
        cx={x + 16}
        cy={y + 20}
        r={3.5}
        fill="#B8F36B"
        className="workbench-node-dot"
        style={{ animationDelay: `${(x + y) % 3}s` }}
      />
      <text x={x + 28} y={y + 25} fill="#F3F2ED" fontSize={13} fontWeight={600} fontFamily="var(--font-sans)">
        {label}
      </text>
      <text x={x + 16} y={y + 46} fill="#A0A5AA" fontSize={10.5} fontFamily="var(--font-mono)">
        {note}
      </text>
    </g>
  );
}

export default function EngineeringWorkbench() {
  const path = "M 172 60 L 208 118 M 282 150 L 392 60 M 282 182 L 282 252 M 172 60 L 98 252";
  const travelPath = "M 98 60 L 282 150 L 466 60 M 282 150 L 282 252";

  return (
    <figure
      aria-label="Diagram: a request flows from the Interface through the Application to Integrations, resting on Infrastructure"
      className="relative overflow-hidden rounded-[6px] border border-line bg-surface"
    >
      <figcaption className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase">System map — how a product fits together</span>
        <span className="hidden font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase sm:inline">FIG. 01</span>
      </figcaption>

      <svg viewBox="0 0 564 344" role="img" aria-hidden="true" className="block w-full">
        {/* connectors */}
        <path d={path} fill="none" stroke="#303438" strokeWidth={1} strokeDasharray="3 4" />
        {/* request entry annotation */}
        <text x={24} y={16} fill="#6F7478" fontSize={10} fontFamily="var(--font-mono)">
          request →
        </text>
        <text x={392} y={16} fill="#6F7478" fontSize={10} fontFamily="var(--font-mono)">
          third-party systems
        </text>

        {MODULES.map((m) => (
          <ModuleBox key={m.id} label={m.label} note={m.note} x={m.x} y={m.y} accent={m.id === "application"} />
        ))}

        {/* travelling packet */}
        <circle r={4} fill="#B8F36B" className="workbench-packet">
          <animateMotion dur="7s" repeatCount="indefinite" path={travelPath} />
        </circle>

        {/* base line annotation */}
        <text x={208} y={336} fill="#6F7478" fontSize={10} fontFamily="var(--font-mono)">
          deployed · monitored · documented
        </text>
      </svg>

      <div className="border-t border-line px-4 py-3">
        <p className="font-mono text-[0.6875rem] leading-relaxed text-muted">
          <span className="text-accent">●</span> Every engagement maps the system before writing code — modules, data, and
          the integrations it depends on.
        </p>
      </div>
    </figure>
  );
}

/** Small wrapper used when the workbench is placed inside a Container. */
export function WorkbenchInShell() {
  return (
    <Container>
      <EngineeringWorkbench />
    </Container>
  );
}
