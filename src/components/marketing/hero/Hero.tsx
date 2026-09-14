import { Container } from "@/components/ui";
import Background from "./Background";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";
import MobileHeroIllustration from "./MobileHeroIllustration";

/*
  Hero.tsx — VAUHLT hero section.

  Desktop (lg+): two-column grid — text left, illustration right.
  Mobile/tablet (<lg): single column, text above illustration.

  Visual panel (right column on desktop):
  - Ambient glow: soft green blur behind the composition
  - Orbit rings: two subtle circular border rings as backdrop
  - HeroIllustration / MobileHeroIllustration: the new SVG illustration

  The old scale-transform hack (fixed px source + overflow-hidden wrapper
  sized to scale × source height) is gone — the SVG illustration sizes
  naturally via its viewBox and a max-width constraint, so no transform
  wrapper is needed.
*/
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080A0C]">
      <Background />

      <Container>
        <div
          className="
            grid
            grid-cols-1
            min-h-[calc(100svh-68px)]
            items-center
            gap-10
            pb-14
            pt-10
            sm:min-h-[calc(100svh-72px)]
            sm:gap-12
            sm:pb-16
            sm:pt-12
            lg:min-h-[calc(100svh-72px)]
            lg:grid-cols-[1fr_auto]
            lg:gap-14
            lg:py-10
            xl:min-h-[calc(100svh-76px)]
            xl:gap-16
          "
        >
          {/* ── Left: hero text ── */}
          <div className="relative z-20 mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none lg:-mt-4">
            <HeroContent />
          </div>

          {/* ── Right: visual panel ── */}
          <div
            className="
              relative
              mx-auto
              flex
              items-center
              justify-center
              w-full
              max-w-[340px]
              lg:mx-0
              lg:max-w-[420px]
              xl:max-w-[480px]
            "
          >
            {/* Ambient glow — kept exactly as before */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#16C47F]/10
                blur-[80px]
                sm:h-[380px]
                sm:w-[380px]
                lg:h-[460px]
                lg:w-[460px]
                lg:blur-[110px]
                xl:h-[540px]
                xl:w-[540px]
                xl:blur-[130px]
              "
            />

            {/* Orbit ring 1 — kept exactly as before */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[240px]
                w-[240px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-white/[0.05]
                sm:h-[360px]
                sm:w-[360px]
                lg:h-[420px]
                lg:w-[420px]
                xl:h-[490px]
                xl:w-[490px]
              "
            />

            {/* Orbit ring 2 — kept exactly as before */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[170px]
                w-[170px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#16C47F]/10
                sm:h-[270px]
                sm:w-[270px]
                lg:h-[310px]
                lg:w-[310px]
                xl:h-[360px]
                xl:w-[360px]
              "
            />

            {/* ── Mobile / tablet (<lg): simplified illustration ── */}
            <div className="relative z-20 w-full lg:hidden">
              <MobileHeroIllustration />
            </div>

            {/* ── Desktop (lg+): full illustration ── */}
            <div className="relative z-20 hidden lg:block">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
