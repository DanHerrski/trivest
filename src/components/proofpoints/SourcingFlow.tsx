import { useState, useEffect } from "react";
import { Radar, MessageCircle, Filter, Sprout, RotateCw } from "lucide-react";

// Dan's founder-engagement flywheel: Identify → Engage → Qualify → Nurture,
// where Nurture loops back to feed the next Identify. Animated as a repeating
// sweep so it reads as an always-on engine, not a one-time funnel.
const STAGES = [
  { icon: Radar, label: "Identify", sub: "AI agents surface the right founders & signals" },
  { icon: MessageCircle, label: "Engage", sub: "They already know me before I reach out" },
  { icon: Filter, label: "Qualify", sub: "Data-driven thesis & founder fit" },
  { icon: Sprout, label: "Nurture", sub: "Stay close, build trust, time the call" },
];

const STEP_MS = 1700;

export function SourcingFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(STAGES.length - 1);
      return;
    }
    const t = setInterval(() => setActive((a) => (a + 1) % STAGES.length), STEP_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-6">
      <div className="text-[10px] uppercase tracking-[0.24em] text-haveli-gold">
        How I engage founders
      </div>

      <div className="mt-5">
        {STAGES.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          const isDone = i < active;
          const lit = isActive || isDone;
          return (
            <div key={s.label} className="relative flex h-[72px] items-center gap-4">
              {/* connector track + gold fill */}
              {i < STAGES.length - 1 && (
                <>
                  <span className="absolute left-[19px] top-1/2 h-[72px] w-px bg-foreground/15" />
                  <span
                    className={`absolute left-[19px] top-1/2 h-[72px] w-px origin-top bg-haveli-gold transition-transform duration-500 ${
                      isDone ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                </>
              )}

              {/* node */}
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  isActive
                    ? "scale-110 border-haveli-gold bg-haveli-gold/15 text-haveli-gold shadow-glow"
                    : isDone
                      ? "border-haveli-gold/50 bg-card text-haveli-gold/80"
                      : "border-foreground/15 bg-card text-muted-foreground"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" />
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-haveli-gold/60 animate-ping motion-reduce:animate-none" />
                )}
              </div>

              {/* label + value line */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] text-haveli-gold/70">0{i + 1}</span>
                  <span
                    className={`font-serif text-lg transition-colors duration-500 ${
                      lit ? "text-foreground" : "text-foreground/50"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                <p
                  className={`mt-0.5 text-sm leading-snug transition-colors duration-500 ${
                    isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {s.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* flywheel caption */}
      <div className="mt-2 flex items-center gap-2 border-t border-foreground/10 pt-4 text-xs text-muted-foreground">
        <RotateCw className="h-3.5 w-3.5 shrink-0 animate-spin text-haveli-gold/70 [animation-duration:6s] motion-reduce:animate-none" />
        An always-on flywheel — every relationship compounds the next.
      </div>
    </div>
  );
}
