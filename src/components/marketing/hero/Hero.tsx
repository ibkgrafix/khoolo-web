import { Container } from "@/components/ui";
import Background from "./Background";
import HeroContent from "./HeroContent";
import DashboardMockup from "./DashboardMockup";
import MobileDashboard from "./MobileDashboard";
import FloatingAvatars from "./FloatingAvatars";

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
            lg:grid-cols-[1fr_auto]
            lg:gap-10
            lg:py-10
            xl:min-h-[calc(100svh-76px)]
            xl:gap-14
          "
        >
          {/* ── Left: hero text content ──
              lg:max-w-none lets the column grow to fill its grid track
              so HeroContent's own lg:max-w-[720px] xl:max-w-[840px]
              becomes the controlling ceiling (not this wrapper).
          */}
          <div className="relative z-20 mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none lg:-mt-4">
            <HeroContent />
          </div>

          {/* ── Right: visual panel ──
              Mobile/tablet (<lg): MobileDashboard, full width.
              Desktop (lg+): compact DashboardMockup, scaled to ~300–340px
              rendered width. Panel is auto-width so it hugs the card.
          */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[480px]
              lg:mx-0
              lg:w-auto
              lg:self-center
            "
          >
            {/* ── Decorative glow (unchanged) ── */}
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
                lg:h-[480px]
                lg:w-[480px]
                lg:blur-[120px]
                xl:h-[560px]
                xl:w-[560px]
                xl:blur-[140px]
              "
            />

            {/* ── Orbit ring 1 (unchanged) ── */}
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
                lg:h-[420px]
                lg:w-[420px]
                xl:h-[490px]
                xl:w-[490px]
              "
            />

            {/* ── Orbit ring 2 (unchanged) ── */}
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
                lg:h-[320px]
                lg:w-[320px]
                xl:h-[370px]
                xl:w-[370px]
              "
            />

            {/* ── MOBILE / TABLET (<lg): MobileDashboard ── */}
            <div className="relative z-20 w-full lg:hidden">
              <MobileDashboard />
            </div>

            {/*
              ── DESKTOP (lg+): compact scaled DashboardMockup ──

              Two-level wrapper — outer clips layout box to visual height,
              inner carries the scale transform.

              Source dimensions: 620px wide × ~380px tall.
              Target rendered width: lg ~300px / xl ~320px / 2xl ~340px.

              Scale  →  rendered width  →  outer height (380 × scale)
                lg  0.48  →  298px  →  h-[182px]
                xl  0.52  →  322px  →  h-[198px]
               2xl  0.55  →  341px  →  h-[209px]

              FloatingAvatars are children of the outer wrapper so they
              position relative to the card's visual boundary.
            */}
            <div
              className="
                relative
                z-20
                mx-auto
                hidden
                lg:block
                lg:h-[182px]
                lg:w-[298px]
                lg:overflow-hidden
                xl:h-[198px]
                xl:w-[322px]
                2xl:h-[209px]
                2xl:w-[341px]
              "
            >
              {/* Scale inner */}
              <div
                className="
                  origin-top-left
                  lg:scale-[0.48]
                  xl:scale-[0.52]
                  2xl:scale-[0.55]
                "
              >
                <DashboardMockup />
              </div>

              {/* Floating avatars — inside wrapper so they're
                  positioned relative to the card boundary */}
              <FloatingAvatars />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
