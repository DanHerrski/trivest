import { useState, useEffect } from "react";

// The AI & tech-enablement virtuous cycle. AI/tech sits at the hub and drives a
// compounding loop: more content & network reach → sharper targeting (signals,
// enrichment, prequalification) → operators who focus on the best names AND
// reach like 3× → which feeds even more content, data, and relationships.
const C = { x: 170, y: 140 };
const R = 82;

// nodes placed clockwise from the top
const NODES = [
  { key: "reach", lines: ["Content &", "Network"], lx: 170, ly: 30, anchor: "middle" as const },
  {
    key: "target",
    lines: ["Signals &", "Enrichment"],
    lx: 256,
    ly: 206,
    anchor: "middle" as const,
  },
  { key: "amplify", lines: ["Amplified", "SourceOps"], lx: 84, ly: 206, anchor: "middle" as const },
].map((n, i) => {
  const angle = (i / 3) * 2 * Math.PI; // 0, 120, 240 deg
  return { ...n, x: C.x + R * Math.sin(angle), y: C.y - R * Math.cos(angle) };
});

const STEP_MS = 1800;

export function VirtuousCycle() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReduced(true);
      return;
    }
    const t = setInterval(() => setActive((a) => (a + 1) % NODES.length), STEP_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-6">
      <div className="text-[10px] uppercase tracking-[0.24em] text-trivest-teal">
        The compounding engine
      </div>

      <svg
        viewBox="0 0 340 300"
        className="mt-2 w-full"
        role="img"
        aria-label="AI and tech virtuous cycle"
      >
        {/* spokes: the engine powers every stage */}
        {NODES.map((n) => (
          <line
            key={`s-${n.key}`}
            x1={C.x}
            y1={C.y}
            x2={n.x}
            y2={n.y}
            className="stroke-foreground/10"
          />
        ))}

        {/* orbit ring */}
        <circle
          cx={C.x}
          cy={C.y}
          r={R}
          fill="none"
          strokeDasharray="2 6"
          className="stroke-foreground/20"
        />

        {/* orbiting comet (direction of flow) */}
        {!reduced && (
          <g
            className="animate-spin [animation-duration:9s]"
            style={{ transformBox: "view-box", transformOrigin: "170px 140px" }}
          >
            <circle cx={C.x} cy={C.y - R} r={9} className="fill-trivest-teal/20" />
            <circle cx={C.x} cy={C.y - R} r={3.5} className="fill-trivest-teal" />
          </g>
        )}

        {/* center hub */}
        <circle cx={C.x} cy={C.y} r={28} className="fill-card stroke-trivest-teal/50" />
        <text
          x={C.x}
          y={C.y - 1}
          textAnchor="middle"
          className="fill-trivest-teal font-serif"
          fontSize="16"
        >
          AI
        </text>
        <text
          x={C.x}
          y={C.y + 13}
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="7"
          letterSpacing="1.5"
        >
          + TECH
        </text>

        {/* nodes + labels */}
        {NODES.map((n, i) => {
          const isActive = i === active || reduced;
          return (
            <g key={n.key}>
              <circle
                cx={n.x}
                cy={n.y}
                style={{ r: isActive ? 12 : 8, transition: "all 0.45s" }}
                className={isActive ? "fill-trivest-teal" : "fill-card stroke-trivest-teal/40"}
              />
              {n.lines.map((line, li) => (
                <text
                  key={li}
                  x={n.lx}
                  y={n.ly + li * 15}
                  textAnchor={n.anchor}
                  fontSize="13"
                  className={`font-serif transition-colors duration-500 ${
                    isActive ? "fill-foreground" : "fill-foreground/45"
                  }`}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>

      {/* punchline */}
      <div className="mt-1 space-y-2 border-t border-foreground/10 pt-4">
        <p className="text-sm leading-snug text-foreground/90">
          <span className="text-trivest-teal">3× leverage</span> for every investment team member.
        </p>
        <p className="text-xs leading-snug text-muted-foreground">
          As tech makes execution efficient, the edge shifts to sourcing — and that's exactly what I
          coach teams to win.
        </p>
      </div>
    </div>
  );
}
