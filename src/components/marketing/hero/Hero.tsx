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
            gap-12
            pb-16
            pt-14
            sm:min-h-[calc(100svh-72px)]
            sm:pb-20
            sm:pt-16
            lg:min-h-[calc(100svh-72px)]
            lg:grid-cols-[1fr_1.08fr]
            lg:gap-6
            lg:py-10
            xl:min-h-[calc(100svh-76px)]
            xl:gap-8
          "
        >
          {/* Left content */}

          <div className="relative z-20 mx-auto w-full max-w-[620px] lg:mx-0 lg:-mt-8">
            <HeroContent />
          </div>

          {/* Right visual */}

          <div
            className="
              relative
              mx-auto
              flex
              h-[430px]
              w-full
              max-w-[700px]
              items-center
              justify-center
              sm:h-[540px]
              md:h-[600px]
              lg:h-[610px]
              lg:max-w-none
              lg:justify-end
              xl:h-[660px]
            "
          >
            {/* Main glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[380px]
                w-[380px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#16C47F]/10
                blur-[95px]
                sm:h-[520px]
                sm:w-[520px]
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
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-white/[0.05]
                sm:h-[480px]
                sm:w-[480px]
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
                h-[270px]
                w-[270px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#16C47F]/10
                sm:h-[370px]
                sm:w-[370px]
                lg:left-[54%]
                lg:h-[440px]
                lg:w-[440px]
                xl:h-[510px]
                xl:w-[510px]
              "
            />

            {/* Dashboard */}

            <div
              className="
                relative
                z-20
                origin-center
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

            {/* Floating members — kept directly inside original parent */}

            <div className="hidden sm:block">
              <FloatingAvatars />
            </div>

            {/* Contribution card */}

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