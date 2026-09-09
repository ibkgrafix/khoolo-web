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
          Hero grid.
          Single column on mobile — content stacks above dashboard.
          Two columns from lg+.

          gap/padding tightened on mobile vs desktop so there's no
          excessive dead space between content and dashboard preview.
        */}
        <div
          className="
            grid
            min-h-[calc(100svh-68px)]
            items-center
            gap-8
            pb-12
            pt-10
            sm:min-h-[calc(100svh-72px)]
            sm:gap-10
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
          {/* ── Left: hero text content ─────────────────────────────── */}
          <div className="relative z-20 mx-auto w-full max-w-[620px] lg:mx-0 lg:-mt-8">
            <HeroContent />
          </div>

          {/* ── Right: dashboard visual ──────────────────────────────
            On mobile / tablet this is a plain block — no fixed height,
            no flex vertical centering that creates dead empty space.
            The dashboard wrapper sizes itself and the section just flows.

            On lg+ it becomes a positioned flex panel with the original
            desktop height and right-alignment.
          ─────────────────────────────────────────────────────────── */}
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
            {/* Decorative glow — purely visual, pointer-events-none */}
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
              ── Dashboard mockup scale wrapper ──────────────────────

              ROOT CAUSE of previous mobile overflow:
              The outer wrapper had a fixed pixel width (w-[360px]) that
              exceeded the container at viewports narrower than ~400px,
              causing the element to bleed outside the section's right edge.

              FIX — two-level pattern, outer is w-full:

              OUTER div  (clips the layout box)
              ├─ w-full  → always matches the container, never overflows
              ├─ h-[Npx] → set to 420 × scale so only the correctly-scaled
              │             visual height is occupied; no dead space below
              └─ overflow-hidden → clips the inner's layout bleed so neither
                                   the 620px width NOR the 420px height of
                                   DashboardMockup contributes to scroll width

              INNER div  (scale transform only, no sizing)
              └─ scale-[N] origin-top-left → shrinks the 620×420 mockup
                 from its top-left corner. The visible portion is the left
                 side of the dashboard (header, savings amount, KPIs —
                 the most important content). The outer clips any bleed.

              Scale values and resulting outer heights (420 × scale):
                default (< 640px) : scale 0.58 → h ≈ 244px
                sm    (≥ 640px)   : scale 0.72 → h ≈ 302px
                md    (≥ 768px)   : scale 0.84 → h ≈ 353px
                lg    (≥ 1024px)  : w-auto, h-auto, overflow-visible
                                    → desktop layout fully restored,
                                       origin-right for right-alignment

              At lg+ the outer reverts to w-auto / h-auto so it doesn't
              constrain the desktop layout in any way.
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

            {/* Floating member avatars — sm+ only, absolute inside right panel */}
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
