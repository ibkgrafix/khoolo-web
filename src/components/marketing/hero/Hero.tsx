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
        <div
          className="
            grid
            min-h-[calc(100svh-68px)]
            items-center
            gap-8
            pb-14
            pt-12
            sm:gap-10
            sm:min-h-[calc(100svh-72px)]
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
          {/* Left — hero text content */}
          <div className="relative z-20 mx-auto w-full max-w-[620px] lg:mx-0 lg:-mt-8">
            <HeroContent />
          </div>

          {/* Right — dashboard visual
              On mobile/tablet this is a plain block that sizes itself to its
              content — no fixed height, no flex centering that creates dead
              vertical space. The dashboard scales down to fit.
              On lg+ it becomes a flex panel with height/justify-end restored
              for the original desktop two-column layout.
          */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[500px]
              lg:flex
              lg:h-[610px]
              lg:max-w-none
              lg:items-center
              lg:justify-end
              xl:h-[660px]
            "
          >
            {/* Decorative glow — pointer-events-none, safe to overflow section */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#16C47F]/10
                blur-[95px]
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

            {/* Orbit rings */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[290px]
                w-[290px]
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
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#16C47F]/10
                sm:h-[330px]
                sm:w-[330px]
                lg:left-[54%]
                lg:h-[440px]
                lg:w-[440px]
                xl:h-[510px]
                xl:w-[510px]
              "
            />

            {/* Dashboard mockup
                Two-level scale wrapper pattern:
                - Outer sets the layout box = visual (scaled) size so the
                  620px mockup never contributes to document scroll width.
                  overflow-hidden clips only the mathematical bleed of the
                  scale transform — not design content.
                - Inner carries the scale transform and origin only.

                Breakpoint sizes  (620 × scale, 420 × scale):
                  default : 0.58 → 360 × 244
                  sm 640  : 0.72 → 447 × 302
                  md 768  : 0.84 → 521 × 353
                  lg 1024 : desktop layout restored (w-auto, h-auto)
            */}
            <div
              className="
                relative
                z-20
                mx-auto
                h-[244px]
                w-[360px]
                overflow-hidden
                sm:h-[302px]
                sm:w-[447px]
                md:h-[353px]
                md:w-[521px]
                lg:mx-0
                lg:h-auto
                lg:w-auto
                lg:overflow-visible
              "
            >
              <div
                className="
                  origin-top-left
                  scale-[0.58]
                  sm:scale-[0.72]
                  md:scale-[0.84]
                  lg:origin-right
                  lg:scale-[0.82]
                  xl:scale-[0.92]
                  2xl:scale-100
                "
              >
                <DashboardMockup />
              </div>
            </div>

            {/* Floating member avatars — sm+ only */}
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
