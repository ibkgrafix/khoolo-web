import { Container } from "@/components/ui";
import Background from "./Background";
import HeroContent from "./HeroContent";
import DashboardMockup from "./DashboardMockup";
import MobileDashboard from "./MobileDashboard";
import FloatingAvatars from "./FloatingAvatars";
import ContributionCard from "./ContributionCard";

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
            gap-8
            pb-14
            pt-10
            sm:min-h-[calc(100svh-72px)]
            sm:gap-10
            sm:pb-16
            sm:pt-12
            lg:min-h-[calc(100svh-72px)]
            lg:grid-cols-[1fr_1.08fr]
            lg:gap-6
            lg:py-10
            xl:min-h-[calc(100svh-76px)]
            xl:gap-8
          "
        >
          {/* ── Left: hero text content ── */}
          <div className="relative z-20 mx-auto w-full max-w-[620px] lg:mx-0 lg:-mt-8">
            <HeroContent />
          </div>

          {/* ── Right: visual panel ── */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[480px]
              lg:flex
              lg:h-[574px]
              lg:max-w-none
              lg:items-center
              lg:justify-end
              xl:h-[644px]
            "
          >
            {/* Decorative glow — all breakpoints */}
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
                sm:h-[400px]
                sm:w-[400px]
                lg:left-[54%]
                lg:h-[580px]
                lg:w-[580px]
                lg:blur-[120px]
                xl:h-[680px]
                xl:w-[680px]
                xl:blur-[140px]
              "
            />

            {/* Orbit ring 1 */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-white/[0.05]
                sm:h-[380px]
                sm:w-[380px]
                lg:left-[54%]
                lg:h-[520px]
                lg:w-[520px]
                xl:h-[610px]
                xl:w-[610px]
              "
            />

            {/* Orbit ring 2 */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[180px]
                w-[180px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#16C47F]/10
                sm:h-[290px]
                sm:w-[290px]
                lg:left-[54%]
                lg:h-[400px]
                lg:w-[400px]
                xl:h-[470px]
                xl:w-[470px]
              "
            />

            {/*
              ── MOBILE / TABLET: dedicated MobileDashboard ──
              Shown on <lg. Full-width, native type scale — no transform.
              Hidden at lg+ where the desktop DashboardMockup takes over.
            */}
            <div className="relative z-20 w-full lg:hidden">
              <MobileDashboard />
            </div>

            {/*
              ── DESKTOP (lg+): scaled DashboardMockup ──
              Hidden on mobile. Scale wrapper outer sets the layout-box
              height to 700px × scale so the grid track never exceeds it.
              w-full on the inner div prevents DashboardMockup's fixed
              620px from leaking to document.scrollWidth.

              Source height after clipping fix: ~700px.
              lg  scale 0.82 → outer h = 700 × 0.82 = 574px  (matches lg:h-[574px] on panel)
              xl  scale 0.92 → outer h = 700 × 0.92 = 644px  (matches xl:h-[644px] on panel)
              2xl scale 1.00 → outer h = 700px
            */}
            <div
              className="
                relative
                z-20
                mx-0
                hidden
                lg:block
                lg:h-[574px]
                lg:w-full
                lg:overflow-hidden
                xl:h-[644px]
                2xl:h-[700px]
                2xl:overflow-visible
              "
            >
              <div
                className="
                  w-full
                  origin-top-left
                  lg:scale-[0.82]
                  xl:scale-[0.92]
                  2xl:scale-100
                  lg:origin-right
                "
              >
                <DashboardMockup />
              </div>
            </div>

            {/* Floating member avatars — sm+ only, desktop panel only */}
            <div className="hidden lg:block">
              <FloatingAvatars />
            </div>

            {/* Contribution card — lg+ only */}
            <div
              className="
                absolute
                right-0
                top-8
                z-30
                hidden
                origin-top-right
                scale-[0.72]
                lg:block
                xl:top-6
                xl:scale-[0.86]
                2xl:top-8
                2xl:scale-100
              "
            >
              <ContributionCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
