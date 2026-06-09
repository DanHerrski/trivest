import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import danPortrait from "@/assets/dan-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import textureContour from "@/assets/texture-contour.jpg";
import { HaveliMark } from "@/components/HaveliMark";
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
import { SourcingFlow } from "@/components/proofpoints/SourcingFlow";
import { BrandCarousel } from "@/components/proofpoints/BrandCarousel";
import { VirtuousCycle } from "@/components/proofpoints/VirtuousCycle";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Why Haveli Should Hire Dan — Dan Herr × Haveli Investments" },
      {
        name: "description",
        content:
          "Why Dan Herr is a uniquely valuable addition to Haveli Investments: direct software deal sourcing, brand-building, and AI-native origination at scale.",
      },
      { property: "og:title", content: "Why Haveli Should Hire Dan" },
      {
        property: "og:description",
        content: "Direct sourcing. Brand. AI. The case for hiring Dan Herr onto the Haveli team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
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
const firms = [
  "Serent Capital",
  "ArbiterSports",
  "KEV Group",
  "Progress Learning",
  "Revinate",
  "Fulham & Company",
  "Stonebridge Partners",
  "Shoreview Industries",
  "Genstar",
  "Alpine",
  "Trivest",
  "Pritzker Private Capital",
  "The Edgewater Funds",
  "HIG",
  "RPM International",
  "New Water Capital",
  "The Jordan Company",
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 z-30 flex w-full items-center justify-between px-6 py-6 md:px-12">
        <HaveliMark />
        <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex">
          <span>Why Haveli should hire</span>
          <a
            href="https://www.linkedin.com/in/danielherr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition hover:text-haveli-gold"
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-haveli-gold/40 text-haveli-gold transition hover:bg-haveli-gold hover:text-primary-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#talk"
            className="rounded-full border border-haveli-gold/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-haveli-gold transition hover:bg-haveli-gold hover:text-primary-foreground"
          >
            Let's talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain" />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 pt-32 pb-24 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — message */}
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-haveli-gold animate-float-up">
              <span className="h-px w-10 bg-haveli-gold/60" />
              For Aaron, Brian — and the Haveli team
            </div>

            <h1
              className="mt-7 font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl animate-float-up"
              style={{ animationDelay: "120ms" }}
            >
              Why Haveli
              <br />
              should hire <em className="text-haveli-gold">Dan</em>.
            </h1>

            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground animate-float-up"
              style={{ animationDelay: "240ms" }}
            >
              Most software investors can hire a deal sourcer, a brand builder,
              or an AI builder.{" "}
              <span className="font-medium text-foreground">
                Very few can hire all three.
              </span>{" "}
              I'm Dan Herr — and for twelve years I've pointed all three at
              software origination.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-float-up"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#intro"
                className="rounded-full bg-haveli-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition hover:scale-[1.02]"
              >
                Watch the 90-second intro
              </a>
              <a
                href="https://calendly.com/danherr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-foreground transition hover:border-haveli-gold hover:text-haveli-gold"
              >
                Book a call
              </a>
              <a
                href="https://www.linkedin.com/in/danielherr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dan Herr on LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-foreground transition hover:border-haveli-gold hover:text-haveli-gold"
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
      <section id="thesis" className="relative py-32">
        <img
          src={textureContour}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">What I bring</div>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl">
              Three disciplines, <em className="text-haveli-gold">one operator.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Most software investors can hire one. Some can hire two.{" "}
              <span className="text-foreground">Very few can hire all three</span> —
              and in one person, they compound.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3 md:grid-rows-[auto_1fr]">
            {/* 01 — Deal Sourcing */}
            <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 shadow-elegant transition hover:border-haveli-gold/50 md:row-span-2 md:grid md:grid-rows-subgrid">
              <div>
                <div className="font-serif text-6xl text-haveli-gold/80">01</div>
                <h3 className="mt-6 font-serif text-3xl">Direct Deal Sourcing</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  $1B+ closed across Serent and Castle Crow — much of it vertical software and
                  tech-enabled services. Founder-first, road-warrior, no ball dropped. I miss it,
                  and I'm good at it.
                </p>
              </div>
              <div>
                <SourcingFlow />
              </div>
              <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-haveli-gold/10 blur-3xl transition group-hover:bg-haveli-gold/20" />
            </div>

            {/* 02 — Brand & Content */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 shadow-elegant transition hover:border-haveli-gold/50 md:row-span-2 md:grid md:grid-rows-subgrid"
              style={{ animationDelay: "120ms" }}
            >
              <div>
                <div className="font-serif text-6xl text-haveli-gold/80">02</div>
                <h3 className="mt-6 font-serif text-3xl">Brand & Content</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  DealSourcery podcast, LinkedIn, regional events, newsletters. Parasocial trust at
                  scale so software founders take the call before you even dial.
                </p>
              </div>
              <div>
                <BrandCarousel />
              </div>
              <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-haveli-gold/10 blur-3xl transition group-hover:bg-haveli-gold/20" />
            </div>

            {/* 03 — AI & Tech-Enablement */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 shadow-elegant transition hover:border-haveli-gold/50 md:row-span-2 md:grid md:grid-rows-subgrid"
              style={{ animationDelay: "240ms" }}
            >
              <div>
                <div className="font-serif text-6xl text-haveli-gold/80">03</div>
                <h3 className="mt-6 font-serif text-3xl">AI & Tech-Enablement</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Last week I built a database of 83.4M companies in a weekend. I'm an engineer, and
                  a Tier-5 OpenAI and Anthropic partner. I've built deep research agents and
                  benchmarking evals that ensure we identify the 20–30% of businesses others miss.
                </p>
              </div>
              <div>
                <VirtuousCycle />
              </div>
              <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-haveli-gold/10 blur-3xl transition group-hover:bg-haveli-gold/20" />
            </div>
          </div>

        </div>
      </section>

      {/* PERSONAL NOTE */}
      <section className="relative border-y border-foreground/10 bg-card/40 py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">
            A personal note
          </div>
          <div className="mt-8 space-y-5 font-serif text-2xl leading-relaxed md:text-3xl">
            <p>Aaron —</p>
            <p>
              It's been great to get to know you the last few years after one of our mutual friends
              and edtech riverguide Lane Rankin introduced us.
            </p>
            <p>
              Since then, as I've watched Haveli continue to grow, I've seen deal sourcing enter a
              new era — and I believe there's an amazing opportunity for us to build a dominant
              sourcing engine at Haveli, at the intersection of direct sourcing, founder
              value-added brand building, and AI-native tech-enablement.
            </p>
            <p>
              That's where I've been building, and I put this proposal together because I think
              there may be a compelling fit.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="h-px w-12 bg-haveli-gold" />
            Dan Herr
          </div>
        </div>
      </section>

      <section id="proof" className="relative border-y border-foreground/10 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">
              The receipts
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Proof, <em className="text-haveli-gold">not promises.</em>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Quick reasons to believe — before we ever get on a call.
            </p>
          </div>

          {/* Quick-hit facts */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 md:grid-cols-3 lg:grid-cols-6">
            {[
              { k: "$1B+", v: "Sourced & closed directly" },
              { k: "12 yrs", v: "Software & tech-enabled PE" },
              { k: "Serent", v: "Software specialist" },
              { k: "Castle Crow", v: "Where it started" },
              { k: "DealSourcery", v: "Podcast & audience" },
              { k: "Acqwired", v: "AI-native sourcing infra" },
            ].map((s) => (
              <div
                key={s.v}
                className="flex flex-col items-center justify-center bg-card px-3 py-6 text-center"
              >
                <div className="font-serif text-2xl leading-tight text-haveli-gold whitespace-nowrap md:text-3xl lg:text-2xl">
                  {s.k}
                </div>
                <div className="mt-2 text-[11px] uppercase leading-snug tracking-[0.16em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex items-end justify-between gap-6">
            <h3 className="font-serif text-2xl text-foreground/80 md:text-3xl">
              A proven track record of proprietary deals
            </h3>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              A representative slice — including a deep run in education software. Full deal sheet
              on request.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center">
            {deals.map((d) => (
              <div
                key={d.name}
                className="flex aspect-[3/2] w-1/2 flex-col items-center justify-center gap-2.5 bg-card px-4 text-center outline outline-1 outline-foreground/10 transition hover:bg-secondary sm:w-1/3 md:w-1/4 lg:w-[calc(100%/6)]"
              >
                {d.logo && (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white p-2.5 shadow-sm">
                    <img
                      src={d.logo}
                      alt={`${d.name} logo`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                )}
                <span className="font-serif text-sm leading-tight text-foreground/80 md:text-base">
                  {d.label ?? d.name}
                </span>
              </div>
            ))}
            <a
              href="mailto:dherr@tahoeequity.com?subject=Haveli%20%E2%80%94%20full%20deal%20sheet"
              className="group flex aspect-[3/2] w-1/2 flex-col items-center justify-center gap-1 bg-card px-4 text-center outline outline-1 outline-haveli-gold/30 transition hover:bg-secondary sm:w-1/3 md:w-1/4 lg:w-[calc(100%/6)]"
            >
              <span className="font-serif text-xl text-haveli-gold">+ 8 more</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition group-hover:text-haveli-gold">
                Full deal sheet →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* DAN — BIO */}
      <section className="relative py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:px-12">
          <div className="relative self-start">
            <div className="absolute -inset-4 rounded-3xl bg-haveli-gold/20 blur-2xl" />
            <img
              src={danPortrait}
              alt="Dan Herr"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute bottom-6 right-4 rounded-2xl border border-haveli-gold/40 bg-card px-5 py-3 shadow-glow md:-right-6 md:bottom-8">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Currently
              </div>
              <div className="font-serif text-lg">Founder, Tahoe Equity Partners</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">
              Who you'd be hiring
            </div>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl">Dan Herr</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Origination operator. Builder. Podcaster. Road-warrior.
            </p>

            <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/90">
              <p>
                Twelve years in deal sourcing — first at Castle Crow, then{" "}
                <span className="text-haveli-gold">Serent Capital</span>, the software and
                tech-enabled services specialist — with more than{" "}
                <span className="text-haveli-gold">$1B in closed deals</span> sourced directly by
                me. Vertical SaaS, education software, hospitality tech: exactly the companies
                Haveli hunts.
              </p>
              <p>
                I left to build what the next decade of origination actually needs:{" "}
                <a
                  href="https://www.acqwired.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-haveli-gold underline decoration-haveli-gold/30 underline-offset-2 transition hover:decoration-haveli-gold"
                >
                  Acqwired
                </a>{" "}
                and the{" "}
                <span className="text-haveli-gold">Deal Sourcing Operating System</span> — an
                AI-native stack that runs origination at a scale a single sourcer never could.
              </p>
              <p>
                I host the{" "}
                <a
                  href="https://dealsourcery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-haveli-gold underline decoration-haveli-gold/30 underline-offset-2 transition hover:decoration-haveli-gold"
                >
                  DealSourcery
                </a>{" "}
                podcast and treat content as the modern equivalent of being on the road every week —
                except now founders know my voice before I dial.
              </p>
              <p className="font-serif text-2xl text-foreground">
                I'm a professional athlete, and I miss being part of a bigger team. I'm excited to
                bring my sourcing, brand-building, and technology skills to one firm — and Haveli
                feels like a great fit.
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
                  className="rounded-full border border-foreground/20 px-5 py-2 text-sm text-foreground/90 transition hover:border-haveli-gold hover:text-haveli-gold"
                >
                  {l.l} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PE FIRMS SUPPORTED — marquee */}
      <section className="relative border-y border-foreground/10 bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">
              Trusted by PE & growth firms
            </div>
            <h3 className="mt-3 font-serif text-2xl text-muted-foreground">
              A few of the platforms I've sourced for or supported
            </h3>
          </div>
        </div>
        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-16 pr-16">
            {[...firms, ...firms].map((f, i) => (
              <div
                key={i}
                className="flex h-14 items-center whitespace-nowrap font-serif text-2xl text-foreground/60"
              >
                {f}
                <span className="ml-16 h-1.5 w-1.5 rounded-full bg-haveli-gold/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 100-DAY PLAN — teaser */}
      <section id="blueprint" className="relative py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-12">
          <div className="relative h-[280px] w-[400px] shrink-0">
            {/* Back card */}
            <div className="absolute left-6 top-6 h-full w-full rounded-2xl border border-foreground/10 bg-card/60 shadow-elegant" />
            {/* Middle card */}
            <div className="absolute left-3 top-3 h-full w-full rounded-2xl border border-foreground/10 bg-card/80 shadow-elegant" />
            {/* Top card — the visible "slide" */}
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-2xl border border-haveli-gold/30 bg-card p-8 shadow-glow">
              <HaveliMark className="opacity-80" />
              <div className="mt-6 h-px w-16 bg-haveli-gold/40" />
              <div className="mt-5 text-center font-serif text-2xl leading-snug">
                The 100-Day
                <br />
                Origination Plan
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Built for Haveli Investments
              </div>
            </div>
          </div>

          <div className="max-w-md text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">
              If I were building the software investor of 2030
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              I've already built the <em className="text-haveli-gold">100-day plan.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Haveli-specific origination blueprint — the software verticals to own, the sourcing
              model, and the AI stack in action. The strategy belongs in the room, not on a webpage.
              I'd love to walk you through it live.
            </p>
            <a
              href="https://calendly.com/danherr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-haveli-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              Book the walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* WHY HAVELI */}
      <section className="relative overflow-hidden bg-card/50 py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">Why Haveli</div>
          <h2 className="mt-8 font-serif text-5xl leading-[1.02] md:text-6xl">
            Not just any firm. <em className="text-haveli-gold">This one.</em>
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
            Haveli is concentrated, high-conviction software investing — built on the Vista
            operating playbook, with the freedom to build something new. A $4.5B debut fund, an
            Apollo partnership, and a gaming practice that says you think in ecosystems, not single
            bets. Software and tech-enabled services are exactly where direct sourcing, brand, and
            AI compound the hardest.
          </p>
          <blockquote className="mx-auto mt-12 max-w-2xl border-l-2 border-haveli-gold/60 pl-6 text-left font-serif text-2xl leading-snug text-foreground md:text-3xl">
            "It's almost impossible to replicate the passion, the domain expertise, the
            accountability of a founder."
            <cite className="mt-4 block not-italic">
              <span className="block text-sm uppercase tracking-[0.22em] text-muted-foreground">
                — Brian Sheth, Founder
              </span>
              <span className="mt-1 block text-xs normal-case tracking-normal text-muted-foreground/70">
                In conversation with Michael Milken · The Montgomery Summit, May 15, 2018
              </span>
            </cite>
          </blockquote>
          <p className="mt-12 text-lg leading-relaxed text-muted-foreground">
            A few years ago I spent real time inside the Vista orbit during a recruiting process —
            enough to deeply respect the discipline Brian carried into Haveli. Origination is the
            ecosystem I've spent my career building. I'd like to build Haveli's.
          </p>
          <p className="mt-6 font-serif text-2xl text-foreground">
            I'd like to bring everything I've built — and everything I'm about to build — to your
            firm.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="talk" className="relative py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-haveli-gold/30 bg-gradient-to-br from-card to-secondary p-12 shadow-glow md:p-20">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-haveli-gold/10 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.28em] text-haveli-gold">The ask</div>
              <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-6xl">
                Thirty minutes. <em className="text-haveli-gold">This week.</em>
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Aaron, Brian, and the Haveli team — I'd love to see if there's an opportunity to
                work together here. I'll bring the full deal sheet, a live walkthrough of the
                origination OS, and a 100-day plan tailored to Haveli's software verticals. Let me
                know what dates and times work best for a quick call to connect live, walk through
                the deck, trade notes, and see if it makes sense to keep the dialog going. Thanks!
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/danherr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-haveli-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground shadow-glow transition hover:scale-[1.02]"
                >
                  Book a 30-min call
                </a>
                <a
                  href="mailto:dherr@tahoeequity.com?subject=Haveli%20%C3%97%20Dan%20Herr%20%E2%80%94%20let%27s%20talk"
                  className="rounded-full border border-foreground/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-foreground transition hover:border-haveli-gold hover:text-haveli-gold"
                >
                  Email Dan directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-foreground/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.22em] text-muted-foreground md:px-12">
          <HaveliMark />
          <div>Prepared personally for Haveli Investments · Confidential</div>
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
            · havelilovesdan.com
          </div>
        </div>
      </footer>
    </main>
  );
}
