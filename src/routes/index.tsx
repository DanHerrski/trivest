import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Factory, Code2 } from "lucide-react";
import danPortrait from "@/assets/dan-portrait.jpg";
import { TrivestMark } from "@/components/TrivestMark";
import { IntroVideo } from "@/components/IntroVideo";
import logoFamilyId from "@/assets/logos/familyid.png";
import logoEducationGalaxy from "@/assets/logos/education-galaxy.png";
import logoEducationAdvanced from "@/assets/logos/education-advanced.png";
import logoParentSquare from "@/assets/logos/parentsquare.png";
import logoIntouch from "@/assets/logos/intouch-receipting.png";
import logoAsbworks from "@/assets/logos/asbworks.png";
import logoShr from "@/assets/logos/shr-group.png";
import logoBook4Time from "@/assets/logos/book4time.png";
import logoNavis from "@/assets/logos/navis.png";
import logoGoMoment from "@/assets/logos/gomoment.jpg";
import logoGabbart from "@/assets/logos/gabbart.png";
import logoLunchbox from "@/assets/logos/lunchbox-orders.png";
import logoNwn from "@/assets/logos/nwn.png";
import logoConceptGroup from "@/assets/logos/concept-group.webp";
import logoMicrowaveComponents from "@/assets/logos/microwave-components.png";
import logoGemini from "@/assets/logos/gemini-electronic-components.png";
import logoSeaLink from "@/assets/logos/sea-link-international.jpg";
import logoCliplight from "@/assets/logos/cliplight.png";
import logoAdhere from "@/assets/logos/adhere-industrial-tapes.png";
import logoEllisPaint from "@/assets/logos/ellis-paint.jpg";
import { SourcingFlow } from "@/components/proofpoints/SourcingFlow";
import { BrandCarousel } from "@/components/proofpoints/BrandCarousel";
import { VirtuousCycle } from "@/components/proofpoints/VirtuousCycle";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Why Trivest Should Hire Dan — Dan Herr × Trivest Partners" },
      {
        name: "description",
        content:
          "Why Dan Herr is a uniquely valuable addition to Trivest Partners: direct deal sourcing of founder-owned businesses, founder-first brand-building, and AI-native origination at scale.",
      },
      { property: "og:title", content: "Why Trivest Should Hire Dan" },
      {
        property: "og:description",
        content: "Direct sourcing. Brand. AI. The case for hiring Dan Herr onto the Trivest team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://trivestlovesdan.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Why Trivest should hire Dan — direct sourcing, founder-first brand, AI-native origination.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://trivestlovesdan.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const deals = [
  { name: "FamilyID", logo: logoFamilyId },
  { name: "Education Galaxy", logo: logoEducationGalaxy },
  { name: "Education Advanced", logo: logoEducationAdvanced },
  { name: "ParentSquare", logo: logoParentSquare },
  { name: "Gabbart Communications", label: "Gabbart Comm.", logo: logoGabbart },
  { name: "InTouch Receipting", logo: logoIntouch },
  { name: "ASBWorks", logo: logoAsbworks },
  { name: "SHR Group", logo: logoShr },
  { name: "Book4Time", logo: logoBook4Time },
  { name: "Navis", logo: logoNavis },
  { name: "GoMoment / Ivy", logo: logoGoMoment },
  { name: "Lunchbox Orders", logo: logoLunchbox },
  { name: "NWN Corporation", logo: logoNwn },
];
// Industrials & manufacturing deals from Dan's Castle Crow M&A years — founder-
// and family-owned niche manufacturers. They show Dan's range across exactly the
// kind of fragmented, founder-led markets Trivest invests in beyond software.
const industrialsDeals = [
  { name: "Gemini Electronic Components", label: "Gemini", logo: logoGemini },
  { name: "Microwave Components", logo: logoMicrowaveComponents },
  { name: "Concept Group", logo: logoConceptGroup },
  { name: "Sea Link International", label: "Sea Link", logo: logoSeaLink },
  { name: "Sinclair Manufacturing", label: "Sinclair" },
  { name: "Cliplight Manufacturing", label: "Cliplight", logo: logoCliplight },
  { name: "Adhere Industrial Tape", label: "Adhere", logo: logoAdhere },
  { name: "Ellis Paint", logo: logoEllisPaint },
];
// One unified track-record wall — industrials lead, software follows. Each tile
// carries a small sector icon (see legend).
const allDeals = [
  ...industrialsDeals.map((d) => ({ ...d, sector: "industrials" as const })),
  ...deals.map((d) => ({ ...d, sector: "software" as const })),
];
const firms = [
  "Serent Capital",
  "Shore Capital",
  "Alpine Investors",
  "The Riverside Company",
  "Audax",
  "Incline Equity",
  "Tonka Bay",
  "Mainsail Partners",
  "Fulham & Company",
  "Stonebridge Partners",
  "Shoreview Industries",
  "Genstar",
  "Pritzker Private Capital",
  "The Edgewater Funds",
  "HIG",
  "RPM International",
  "New Water Capital",
  "The Jordan Company",
  "ArbiterSports",
  "KEV Group",
  "Progress Learning",
  "Revinate",
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 z-30 flex w-full items-center justify-between px-6 py-6 md:px-12">
        <TrivestMark />
        <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex">
          <span>Why Trivest should hire</span>
          <a
            href="https://www.linkedin.com/in/danielherr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition hover:text-trivest-teal"
          >
            Dan Herr
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/danielherr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dan Herr on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-trivest-navy/30 text-trivest-navy transition hover:bg-trivest-navy hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#talk"
            className="rounded-full border border-trivest-navy/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-trivest-navy transition hover:bg-trivest-navy hover:text-white"
          >
            Let's talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grain" />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 pt-32 pb-24 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — message */}
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-trivest-teal animate-float-up">
              <span className="h-px w-10 bg-trivest-teal/70" />
              For Russ — and the Trivest team
            </div>

            <h1
              className="mt-7 font-serif text-5xl font-light leading-[1.02] tracking-tight text-trivest-navy md:text-6xl lg:text-7xl animate-float-up"
              style={{ animationDelay: "120ms" }}
            >
              Why Trivest
              <br />
              should hire <em className="not-italic text-trivest-teal">Dan</em>.
            </h1>

            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground animate-float-up"
              style={{ animationDelay: "240ms" }}
            >
              Most firms can hire a deal sourcer, a brand builder, or an AI builder.{" "}
              <span className="font-medium text-foreground">Very few can hire all three.</span> I'm
              Dan Herr — and for fourteen years I've pointed all three at founder-led origination.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-float-up"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#intro"
                className="rounded-full bg-trivest-navy px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-white shadow-glow transition hover:scale-[1.02]"
              >
                Watch the 90-second intro
              </a>
              <a
                href="https://calendly.com/danherr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-foreground transition hover:border-trivest-teal hover:text-trivest-teal"
              >
                Book a call
              </a>
              <a
                href="https://www.linkedin.com/in/danielherr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dan Herr on LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-foreground transition hover:border-trivest-teal hover:text-trivest-teal"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right — personalized video */}
          <div className="animate-float-up" style={{ animationDelay: "300ms" }}>
            <IntroVideo />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-pulse-glow">
          Scroll
        </div>
      </section>

      {/* THE THREE-IN-ONE */}
      <section id="thesis" className="relative bg-secondary py-32">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">
              What I bring
            </div>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-trivest-navy md:text-5xl">
              Three disciplines, <em className="not-italic text-trivest-teal">one operator.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Most firms can hire one. Some can hire two.{" "}
              <span className="text-foreground">Very few can hire all three</span> — and in one
              person, they compound.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3 md:grid-rows-[auto_1fr]">
            {/* 01 — Deal Sourcing */}
            <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 shadow-elegant transition hover:border-trivest-teal/50 md:row-span-2 md:grid md:grid-rows-subgrid">
              <div>
                <div className="font-serif text-6xl font-light text-trivest-teal/80">01</div>
                <h3 className="mt-6 font-serif text-3xl font-light text-trivest-navy">
                  Direct Deal Sourcing
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  $1B+ closed across Serent and Castle Crow — much of it founder- and family-owned.
                  Founder-first, road-warrior, no ball dropped. Direct, in-house sourcing is beating
                  intermediary relationships everywhere — and it's exactly where I live.
                </p>
              </div>
              <div>
                <SourcingFlow />
              </div>
              <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-trivest-teal/10 blur-3xl transition group-hover:bg-trivest-teal/20" />
            </div>

            {/* 02 — Brand & Content */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 shadow-elegant transition hover:border-trivest-teal/50 md:row-span-2 md:grid md:grid-rows-subgrid"
              style={{ animationDelay: "120ms" }}
            >
              <div>
                <div className="font-serif text-6xl font-light text-trivest-teal/80">02</div>
                <h3 className="mt-6 font-serif text-3xl font-light text-trivest-navy">
                  Brand & Content
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  DealSourcery podcast, LinkedIn, regional events, newsletters. Founder-first,
                  parasocial trust at scale — so the best founders take the call before you even
                  dial.
                </p>
              </div>
              <div>
                <BrandCarousel />
              </div>
              <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-trivest-teal/10 blur-3xl transition group-hover:bg-trivest-teal/20" />
            </div>

            {/* 03 — AI & Tech-Enablement */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 shadow-elegant transition hover:border-trivest-teal/50 md:row-span-2 md:grid md:grid-rows-subgrid"
              style={{ animationDelay: "240ms" }}
            >
              <div>
                <div className="font-serif text-6xl font-light text-trivest-teal/80">03</div>
                <h3 className="mt-6 font-serif text-3xl font-light text-trivest-navy">
                  AI & Tech-Enablement
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Last week I built a database of 83.4M companies in a weekend. I'm an engineer, and
                  a Tier-5 OpenAI and Anthropic partner. I've built deep research agents and
                  benchmarking evals that ensure we identify the 20–30% of businesses others miss.
                </p>
              </div>
              <div>
                <VirtuousCycle />
              </div>
              <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-trivest-teal/10 blur-3xl transition group-hover:bg-trivest-teal/20" />
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL NOTE */}
      <section className="relative border-y border-foreground/10 bg-card py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">
            A personal note
          </div>
          <div className="mt-8 space-y-5 font-serif text-2xl font-light leading-relaxed text-trivest-navy md:text-3xl">
            <p>Russ —</p>
            <p>
              Going all the way back to 2014 and my first Castle Crow days, you were always one of
              the best in the business at engaging founders, and you all thoughtfully designed simple
              ways to create loyalty with your intermediary channels through thoughtful notes, swag,
              and a general sense of appreciation you provided for the hard work we put in.
            </p>
            <p>
              Since then I've watched Trivest become a name founders genuinely trust once they get to
              know you, and my sense is that there's a really compelling opportunity in the next era
              of sourcing for Trivest. I genuinely feel we have a rare opportunity to build a dominant
              branded origination engine at Trivest — on the foundation you've already built — where
              direct sourcing, founder-first brand, and AI compound. I imagine a world where we've
              built such a presence and so much good will that founders in our industries of interest
              not only know us, but are looking forward to our call.
            </p>
            <p>
              I'd love to continue the conversation about building this future of sourcing with you.
              Would love to schedule some time for late June to continue the dialog, or to get
              together in-person in Miami or wherever works best for you and the team — I'll bring the
              whole plan.
            </p>
            <p>Looking forward to it my friend.</p>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="h-px w-12 bg-trivest-teal" />
            Dan Herr
          </div>
        </div>
      </section>

      <section id="proof" className="relative border-b border-foreground/10 bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">
              The receipts
            </div>
            <h2 className="mt-4 font-serif text-4xl font-light text-trivest-navy md:text-5xl">
              Proof, <em className="not-italic text-trivest-teal">not promises.</em>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Quick reasons to believe — before we ever get on a call.
            </p>
          </div>

          {/* Quick-hit facts */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-3 lg:grid-cols-6">
            {[
              { k: "$1B+", v: "Sourced & closed directly" },
              { k: "14 yrs", v: "Founder-led origination" },
              { k: "Serent", v: "Software & services specialist" },
              { k: "Castle Crow", v: "Where it started" },
              { k: "DealSourcery", v: "Podcast & audience" },
              { k: "Acqwired", v: "AI-native sourcing infra" },
            ].map((s) => (
              <div
                key={s.v}
                className="flex flex-col items-center justify-center bg-card px-3 py-6 text-center"
              >
                <div className="font-serif text-2xl font-light leading-tight text-trivest-navy whitespace-nowrap md:text-3xl lg:text-2xl">
                  {s.k}
                </div>
                <div className="mt-2 text-[11px] uppercase leading-snug tracking-[0.16em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex items-end justify-between gap-6">
            <h3 className="font-serif text-2xl font-light text-foreground/80 md:text-3xl">
              A proven track record of proprietary, founder-sourced deals
            </h3>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              A representative slice — founder- and family-owned businesses across software &
              tech-enabled services and niche industrials & manufacturing. The sourcing motion is
              identical in any fragmented, founder-led market. Full deal sheet on request.
            </p>
          </div>

          {/* Legend for the per-tile sector icons */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <Factory className="h-3.5 w-3.5 text-trivest-teal" aria-hidden="true" />
              Industrials &amp; manufacturing
            </span>
            <span className="flex items-center gap-2">
              <Code2 className="h-3.5 w-3.5 text-trivest-teal" aria-hidden="true" />
              Software &amp; tech-enabled
            </span>
          </div>

          <div className="mt-5 flex flex-wrap justify-center">
            {allDeals.map((d) => {
              const isIndustrials = d.sector === "industrials";
              const SectorIcon = isIndustrials ? Factory : Code2;
              return (
                <div
                  key={d.name}
                  className="group relative flex aspect-[3/2] w-1/2 flex-col items-center justify-center gap-2.5 bg-card px-4 text-center outline outline-1 outline-foreground/10 transition hover:bg-secondary sm:w-1/3 md:w-1/4 lg:w-[calc(100%/6)]"
                >
                  <SectorIcon
                    className="absolute right-2 top-2 h-3.5 w-3.5 text-muted-foreground/40 transition group-hover:text-trivest-teal"
                    aria-label={isIndustrials ? "Industrials & manufacturing" : "Software & tech-enabled"}
                  />
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white p-2.5 shadow-sm">
                    {d.logo ? (
                      <img
                        src={d.logo}
                        alt={`${d.name} logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="font-serif text-sm font-semibold leading-none text-neutral-800">
                        {d.label ?? d.name}
                      </span>
                    )}
                  </span>
                  <span className="font-serif text-sm leading-tight text-foreground/80 md:text-base">
                    {d.label ?? d.name}
                  </span>
                </div>
              );
            })}
            <a
              href="mailto:dherr@tahoeequity.com?subject=Trivest%20%E2%80%94%20full%20deal%20sheet"
              className="group flex aspect-[3/2] w-1/2 flex-col items-center justify-center gap-1 bg-card px-4 text-center outline outline-1 outline-trivest-teal/40 transition hover:bg-secondary sm:w-1/3 md:w-1/4 lg:w-[calc(100%/6)]"
            >
              <span className="font-serif text-xl text-trivest-teal">Full sheet</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition group-hover:text-trivest-teal">
                Full deal sheet →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* DAN — BIO */}
      <section className="relative bg-card py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:px-12">
          <div className="relative self-start">
            <div className="absolute -inset-4 rounded-3xl bg-trivest-teal/20 blur-2xl" />
            <img
              src={danPortrait}
              alt="Dan Herr"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute bottom-6 right-4 rounded-2xl border border-trivest-teal/40 bg-card px-5 py-3 shadow-glow md:-right-6 md:bottom-8">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Currently
              </div>
              <div className="font-serif text-lg text-trivest-navy">
                Founder, Tahoe Equity Partners
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">
              Who you'd be hiring
            </div>
            <h2 className="mt-6 font-serif text-5xl font-light text-trivest-navy md:text-6xl">
              Dan Herr
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Origination operator. Builder. Podcaster. Road-warrior.
            </p>

            <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/90">
              <p>
                Fourteen years in deal sourcing — first at Castle Crow, then{" "}
                <span className="text-trivest-teal">Serent Capital</span>, the software and
                tech-enabled services specialist — with more than{" "}
                <span className="text-trivest-teal">$1B in closed deals</span> sourced directly by
                me, much of it from founders and families who built their businesses from nothing.
                Exactly the kind of owner Trivest is built for.
              </p>
              <p>
                I left to build what the next decade of origination actually needs:{" "}
                <a
                  href="https://www.acqwired.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trivest-navy underline decoration-trivest-teal/40 underline-offset-2 transition hover:decoration-trivest-teal"
                >
                  Acqwired
                </a>{" "}
                and the <span className="text-trivest-teal">Deal Sourcing Operating System</span> —
                an AI-native stack that runs origination at a scale a single sourcer never could.
              </p>
              <p>
                I host the{" "}
                <a
                  href="https://dealsourcery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trivest-navy underline decoration-trivest-teal/40 underline-offset-2 transition hover:decoration-trivest-teal"
                >
                  DealSourcery
                </a>{" "}
                podcast and treat content as the modern equivalent of being on the road every week —
                except now founders know my voice before I dial.
              </p>
              <p className="font-serif text-2xl font-light text-trivest-navy">
                I miss being part of a bigger team and on the road with founders. I'm excited to
                bring my sourcing, brand-building, and technology skills to one firm — and Trivest
                feels like exactly the right one.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { l: "LinkedIn", h: "https://www.linkedin.com/in/danielherr/" },
                { l: "Tahoe Equity Partners", h: "https://www.tahoeequity.com/" },
                { l: "DealSourcery Podcast", h: "https://dealsourcery.com/" },
                { l: "Acqwired", h: "https://www.acqwired.com/" },
                { l: "Email Dan", h: "mailto:dherr@tahoeequity.com" },
              ].map((l) => (
                <a
                  key={l.l}
                  href={l.h}
                  {...(l.h.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-full border border-foreground/20 px-5 py-2 text-sm text-foreground/90 transition hover:border-trivest-teal hover:text-trivest-teal"
                >
                  {l.l} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PE FIRMS SUPPORTED — marquee */}
      <section className="relative border-y border-foreground/10 bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">
              Trusted by PE & growth firms
            </div>
            <h3 className="mt-3 font-serif text-2xl font-light text-muted-foreground">
              A few of the platforms I've sourced for or supported
            </h3>
          </div>
        </div>
        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-16 pr-16">
            {[...firms, ...firms].map((f, i) => (
              <div
                key={i}
                className="flex h-14 items-center whitespace-nowrap font-serif text-2xl font-light text-foreground/55"
              >
                {f}
                <span className="ml-16 h-1.5 w-1.5 rounded-full bg-trivest-teal/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 100-DAY PLAN — teaser */}
      <section id="blueprint" className="relative bg-card py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-12">
          <div className="relative h-[280px] w-[400px] shrink-0">
            {/* Back card */}
            <div className="absolute left-6 top-6 h-full w-full rounded-2xl border border-foreground/10 bg-secondary shadow-elegant" />
            {/* Middle card */}
            <div className="absolute left-3 top-3 h-full w-full rounded-2xl border border-foreground/10 bg-secondary/70 shadow-elegant" />
            {/* Top card — the visible "slide" */}
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-2xl border border-trivest-teal/30 bg-card p-8 shadow-glow">
              <TrivestMark className="opacity-90" />
              <div className="mt-6 h-px w-16 bg-trivest-teal/50" />
              <div className="mt-5 text-center font-serif text-2xl font-light leading-snug text-trivest-navy">
                The 100-Day
                <br />
                Origination Plan
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Built for Trivest Partners
              </div>
            </div>
          </div>

          <div className="max-w-md text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">
              If I were building the founder-friendly firm of 2030
            </div>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-trivest-navy md:text-5xl">
              I've already built the <em className="not-italic text-trivest-teal">100-day plan.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Trivest-specific origination blueprint — the channels to double down on, the
              founder-first brand engine to build on the marketing momentum you've already got, and
              the AI stack that gives every BD pro on the team real leverage. The strategy belongs
              in the room, not on a webpage. I'd love to walk you through it live.
            </p>
            <a
              href="https://calendly.com/danherr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-trivest-navy px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white shadow-glow transition hover:scale-[1.02]"
            >
              Book the walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* WHY TRIVEST */}
      <section className="relative overflow-hidden bg-secondary py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">Why Trivest</div>
          <h2 className="mt-8 font-serif text-4xl font-light leading-[1.05] text-trivest-navy md:text-6xl">
            Not just any firm. <em className="not-italic text-trivest-teal">This one.</em>
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
            Trivest is the rare firm built entirely around one idea:{" "}
            <span className="text-foreground">Private Equity for Founders.</span> Forty-five years
            in, roughly $6 billion across four funds — Discovery, Growth, Mid-Market, and
            Recognition — every one of them pointed at founder- and family-owned businesses. "Just
            Say No!" The Trivest Promise. Path to 3x. It's the firm founders actually trust — and
            one clearly leaning into the next era of origination and commercial excellence. That's
            exactly where direct sourcing, brand, and AI compound the hardest.
          </p>
          <blockquote className="mx-auto mt-12 max-w-2xl border-l-2 border-trivest-teal/60 pl-6 text-left font-serif text-2xl font-light leading-snug text-foreground md:text-3xl">
            "Our job is to be a steward of any business we put its dollars into."
            <cite className="mt-4 block not-italic">
              <span className="block text-sm uppercase tracking-[0.22em] text-muted-foreground">
                — Troy Templeton, Managing Partner
              </span>
              <span className="mt-1 block text-xs normal-case tracking-normal text-muted-foreground/70">
                On Trivest's founder-first philosophy
              </span>
            </cite>
          </blockquote>
          <p className="mt-12 text-lg leading-relaxed text-muted-foreground">
            We've known each other a long time — long enough that I've watched Trivest become the
            name founders trust most. Origination is the ecosystem I've spent my career building.
            I'd like to build Trivest's.
          </p>
          <p className="mt-6 font-serif text-2xl font-light text-trivest-navy">
            I'd like to bring everything I've built — and everything I'm about to build — to your
            firm.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="talk" className="relative bg-card py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-trivest-teal/30 bg-gradient-to-br from-secondary to-white p-12 shadow-glow md:p-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-trivest-teal/10 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.28em] text-trivest-teal">The ask</div>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] text-trivest-navy md:text-6xl">
                Thirty minutes. <em className="not-italic text-trivest-teal">This week.</em>
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Russ — and the Trivest team — I'd love to see if there's an opportunity to work
                together here. I'll bring the full deal sheet, a live walkthrough of the origination
                OS, and a 100-day plan built around Trivest's funds and BD channels. Let me know
                what dates and times work best for a quick call to connect live, walk through the
                deck, trade notes, and see if it makes sense to keep the dialog going. Thanks!
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/danherr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-trivest-navy px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white shadow-glow transition hover:scale-[1.02]"
                >
                  Book a 30-min call
                </a>
                <a
                  href="mailto:dherr@tahoeequity.com?subject=Trivest%20%C3%97%20Dan%20Herr%20%E2%80%94%20let%27s%20talk"
                  className="rounded-full border border-foreground/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-foreground transition hover:border-trivest-teal hover:text-trivest-teal"
                >
                  Email Dan directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-foreground/10 bg-secondary py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.22em] text-muted-foreground md:px-12">
          <TrivestMark />
          <div>Prepared personally for Trivest Partners · Confidential</div>
          <div>
            ©{" "}
            <a
              href="https://www.linkedin.com/in/danielherr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-foreground"
            >
              Dan Herr
            </a>{" "}
            · trivestlovesdan.com
          </div>
        </div>
      </footer>
    </main>
  );
}
