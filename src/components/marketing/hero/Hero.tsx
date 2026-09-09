import { Container } from "@/components/ui";
import Background from "./Background";
import HeroContent from "./HeroContent";
import DashboardMockup from "./DashboardMockup";
import FloatingAvatars from "./FloatingAvatars";
import ContributionCard from "./ContributionCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080A0C]">
      <Background />

      <Container>
        {/*
          Single-column on mobile, two-column at lg+.
          gap-6 on mobile keeps content and dashboard close together.
          min-h fills the viewport minus navbar height so the hero
          looks full-screen on every device.
        */}
        <div
          className="
            grid
            min-h-[calc(100svh-68px)]
            items-center
            gap-6
            pb-12
            pt-10
            sm:min-h-[calc(100svh-72px)]
            sm:gap-8
            sm:pb-16
            sm:pt-14
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

          {/* ── Right: dashboard visual ──
              Mobile/tablet: plain block, no fixed height.
              Dashboard wrapper is w-full + mx-auto so it fills and
              centers within the available container width.
              lg+: flex panel with height and right-alignment restored.
          -->*/}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[560px]
              lg:flex
              lg:h-[610px]
              lg:max-w-none
              lg:items-center
              lg:justify-end
              xl:h-[660px]
            "
          >
            {/* Decorative glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#16C47F]/10
                blur-[90px]
                sm:h-[460px]
                sm:w-[460px]
                sm:blur-[120px]
                lg:left-[54%]
                lg:h-[620px]
                lg:w-[620px]
                xl:h-[720px]
                xl:w-[720px]
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
                h-[270px]
                w-[270px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-white/[0.05]
                sm:h-[420px]
                sm:w-[420px]
                lg:left-[54%]
                lg:h-[560px]
                lg:w-[560px]
                xl:h-[650px]
                xl:w-[650px]
              "
            />

            {/* Orbit ring 2 */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[200px]
                w-[200px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#16C47F]/10
                sm:h-[320px]
                sm:w-[320px]
                lg:left-[54%]
                lg:h-[440px]
                lg:w-[440px]
                xl:h-[510px]
                xl:w-[510px]
              "
            />

            {/*
              Dashboard scale wrapper — two-level pattern.

              ROOT CAUSE that was fixed:
              DashboardMockup is a fixed 620×420px element designed for
              desktop. CSS scale() does not shrink the layout box — the
              element still occupies its full 620px in document flow,
              causing horizontal overflow on every viewport < 620px.

              FIX:
              OUTER div:
                - w-full  → always matches the container, never overflows
                - h-[Npx] → 420 × scale, clips the layout-box height too
                - overflow-hidden → contains the inner's layout bleed
                - mx-auto  → centers the wrapper in the right panel
              INNER div:
                - scale-[N] origin-top → scales from the horizontal center
                  of the element's top edge, so the visual content is
                  centered within the outer wrapper width
                - No width — fills outer via block behavior

              On lg+ the outer becomes w-auto/h-auto/overflow-visible
              and the inner switches to origin-right for the desktop
              right-aligned two-column composition. Nothing changes
              on desktop.

              Scale → outer height (420 × scale):
                default (<640px)  : 0.58 → 244px
                sm (640–767px)    : 0.72 → 302px
                md (768–1023px)   : 0.84 → 353px
                lg+ (≥1024px)     : desktop — w/h auto, overflow visible
            */}
            <div
              className="
                relative
                z-20
                mx-auto
                h-[244px]
                w-full
                overflow-hidden
                sm:h-[302px]
                md:h-[353px]
                lg:mx-0
                lg:h-auto
                lg:w-auto
                lg:overflow-visible
              "
            >
              <div
                className="
                  w-full
                  origin-top-left
                  scale-[0.58]
                  sm:scale-[0.72]
                  md:scale-[0.84]
                  lg:w-auto
                  lg:origin-right
                  lg:scale-[0.82]
                  xl:scale-[0.92]
                  2xl:scale-100
                "
              >
                <DashboardMockup />
              </div>
            </div>

            {/* Floating avatars — sm+ only */}
            <div className="hidden sm:block">
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
