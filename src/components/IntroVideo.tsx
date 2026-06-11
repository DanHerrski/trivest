import { useState } from "react";
import { Play } from "lucide-react";
import videoPoster from "@/assets/trivest/Dan Herr Trivest Video thumbnail.jpg";

// Dan's personalized 60–90s intro for Trivest. Paste the YouTube ID here once
// recorded and the hero swaps from the poster to a click-to-play embed
// automatically — no layout changes needed. Leaving it empty shows the
// branded poster thumbnail with a "landing this week" badge.
const INTRO_VIDEO_ID = "2YlIBe0mDjw";

export function IntroVideo() {
  const [playing, setPlaying] = useState(false);
  const ready = Boolean(INTRO_VIDEO_ID);

  return (
    <div id="intro" className="relative scroll-mt-28">
      {/* teal halo */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-trivest-teal/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-trivest-teal/30 shadow-glow">
        {playing && ready ? (
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="A 90-second introduction from Dan Herr"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => ready && setPlaying(true)}
            aria-label="Play the 90-second introduction"
            className={`group relative block aspect-video w-full text-left ${ready ? "cursor-pointer" : "cursor-default"}`}
          >
            <img
              src={videoPoster}
              alt="Dan Herr — why Trivest should hire me"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trivest-navy/90 via-trivest-navy/30 to-trivest-navy/10" />
            <div className="absolute inset-0 grain" />

            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-trivest-teal/50 bg-white/15 backdrop-blur-sm shadow-glow transition group-hover:scale-110 group-hover:bg-trivest-teal/30">
                <Play className="ml-1 h-8 w-8 text-white" fill="currentColor" />
              </div>
            </div>

            {/* caption */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-trivest-teal">
                  A note from Dan
                </div>
                <div className="mt-1 font-serif text-xl font-light leading-tight text-white md:text-2xl">
                  Why I built this — and why Trivest.
                </div>
              </div>
              <div className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                {ready ? "90 sec" : "Landing this week"}
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
