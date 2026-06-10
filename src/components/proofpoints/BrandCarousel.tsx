import { useState, useEffect } from "react";
import screenshotPlastics from "@/assets/tahoeplastics.com_.png";
import screenshotSectech from "@/assets/tahoesectech.com_.png";
import screenshotMultifamily from "@/assets/tahoemultifamily.com_.png";

const sites = [
  {
    url: "tahoeplastics.com",
    href: "http://tahoeplastics.com/",
    screenshot: screenshotPlastics,
    label: "Plastics & packaging",
  },
  {
    url: "tahoesectech.com",
    href: "https://tahoesectech.com/",
    screenshot: screenshotSectech,
    label: "Security tech",
  },
  {
    url: "tahoemultifamily.com",
    href: "https://tahoemultifamily.com/",
    screenshot: screenshotMultifamily,
    label: "Multifamily",
  },
];

export function BrandCarousel() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive((p) => (p + 1) % sites.length);
        setIsTransitioning(false);
      }, 250);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const site = sites[active];

  return (
    <div className="mt-6">
      <div className="text-[10px] uppercase tracking-[0.24em] text-trivest-teal">
        Brand as sourcing
      </div>

      <a
        href={site.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block overflow-hidden rounded-xl border border-foreground/10 shadow-elegant transition hover:border-trivest-teal/30"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-foreground/10 bg-secondary/60 px-3 py-1.5">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-foreground/20" />
            <div className="h-2 w-2 rounded-full bg-foreground/20" />
            <div className="h-2 w-2 rounded-full bg-foreground/20" />
          </div>
          <div className="flex-1 rounded bg-background/40 px-3 py-0.5 text-center text-[10px] text-muted-foreground">
            {site.url}
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative aspect-[2/1] overflow-hidden bg-card">
          {sites.map((s, i) => (
            <img
              key={s.url}
              src={s.screenshot}
              alt={s.url}
              width={800}
              height={400}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${
                i === active && !isTransitioning ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </a>

      {/* active end-market label */}
      <div className="mt-3 text-center text-xs text-muted-foreground">
        End-market sub-brand · <span className="text-foreground/80">{site.label}</span>
      </div>

      {/* Dot indicators */}
      <div className="mt-2 flex justify-center gap-2">
        {sites.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setActive(i);
                setIsTransitioning(false);
              }, 250);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-trivest-teal" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* explainer */}
      <div className="mt-4 border-t border-foreground/10 pt-4 text-xs leading-snug text-muted-foreground">
        Live end-market brand sites I've built and run. The same playbook scales — end-market
        sub-brands, holding-company brands, even a site built for a single firm or prospect.{" "}
        <span className="text-foreground/90">You're reading one right now.</span>
      </div>
    </div>
  );
}
