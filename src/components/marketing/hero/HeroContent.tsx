import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import { Badge, Button } from "@/components/ui";

export default function HeroContent() {
  return (
    /*
      text-center on mobile → lg:text-left on desktop.
      Inherits to all inline/block children so badge, heading,
      paragraph and trust row all center without per-child overrides.
    */
    <div className="relative z-10 w-full max-w-[590px] text-center lg:max-w-[720px] lg:text-left xl:max-w-[840px]">

      {/* Badge */}
      <Badge className="mb-5 px-4 py-1.5 text-[11px] font-medium">
        Trusted Digital Contribution Platform
      </Badge>

      {/*
        Headline — larger, tighter, more premium.

        Overflow verification (Inter Black, tracking -0.03em, ~0.56 char-width ratio):
          320px → 272px avail → text-[38px]: 38×0.56×12 ≈ 255px  ✓
          375px → 327px avail → text-[48px]: 48×0.56×12 ≈ 322px  ✓
          430px → 382px avail → text-[56px]: 56×0.56×12 ≈ 376px  ✓
          640px (sm) → wide enough for text-[68px]
          768px (md) → text-[78px]
          1024px (lg) → text-[82px]  (desktop unchanged)
          1280px (xl) → text-[96px]  (desktop unchanged)

        "Future." accent: solid #16C47F instead of gradient-clip,
        cleaner on dark backgrounds and avoids WebKit clip jank.
      */}
      <h1
        className="
          mt-1
          text-[38px]
          font-black
          leading-[0.94]
          tracking-[-0.03em]
          text-white
          min-[375px]:text-[48px]
          min-[430px]:text-[56px]
          sm:text-[68px]
          md:text-[78px]
          lg:text-[82px]
          xl:text-[96px]
        "
      >
        <span className="block">Your Circle.</span>
        <span className="block">
          Your{" "}
          <span style={{ color: "#16C47F" }}>Future.</span>
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-5 w-full max-w-[470px] text-[15px] leading-[1.7] text-[#A7B1BC] sm:text-base sm:leading-8 lg:mx-0">
        Build trusted contribution circles, save towards life&apos;s biggest
        goals, and grow wealth together with people you trust.
      </p>

      {/* CTA Buttons */}
      <div className="mx-auto mt-7 flex w-full flex-col gap-3 sm:mx-0 sm:flex-row sm:gap-4 lg:mx-0">
        <Button className="!h-12 !w-full !rounded-2xl !px-6 !text-[15px] sm:!h-14 sm:!w-auto sm:!px-8 sm:!text-base">
          Start Saving
        </Button>
        <Button
          variant="secondary"
          className="group !h-12 !w-full !rounded-2xl !px-6 !text-[15px] sm:!h-14 sm:!w-auto sm:!px-8 sm:!text-base"
        >
          Create Circle
          <ArrowRight size={17} className="ml-2 transition group-hover:translate-x-1" />
        </Button>
      </div>

      {/*
        Feature chips — compact premium style.
        rgba backgrounds and borders via inline style where Tailwind
        arbitrary opacity values would be verbose.
        Each chip: ~10px vertical padding, 4px horizontal, 12px radius.
        Icon container: 24×24px, 7px radius, rgba(22,196,127,0.15) bg.
        Icon: 12px, #16C47F.
        Label: 10px semibold white, 6px gap below icon.
      */}
      <div className="mx-auto mt-6 grid w-full grid-cols-3 gap-2.5 lg:mx-0">
        <Chip icon={<ShieldCheck size={12} />} title="Secure" />
        <Chip icon={<Users size={12} />} title="Trusted" />
        <Chip icon={<Target size={12} />} title="Goals" />
      </div>

      {/* Trust / rating row */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start">
        <span className="shrink-0 text-[#D4AF37] tracking-wide">★★★★★</span>
        <p className="min-w-0 shrink text-[13px] text-[#8F99A6] sm:text-sm">
          Trusted by thousands building wealth together.
        </p>
      </div>

    </div>
  );
}

interface ChipProps {
  icon: React.ReactNode;
  title: string;
}

function Chip({ icon, title }: ChipProps) {
  return (
    <div
      className="flex flex-col items-center rounded-[12px] py-2.5 px-1 transition duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Icon container — 24×24px, 7px radius */}
      <div
        className="flex h-6 w-6 items-center justify-center rounded-[7px] text-[#16C47F]"
        style={{ backgroundColor: "rgba(22,196,127,0.15)" }}
      >
        {icon}
      </div>

      {/* Label */}
      <span className="mt-1.5 text-[10px] font-semibold text-white">
        {title}
      </span>
    </div>
  );
}
