import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import { Badge, Button } from "@/components/ui";

export default function HeroContent() {
  return (
    /*
      text-center on mobile → lg:text-left for desktop.
      Every child inherits the centered alignment on mobile
      without needing individual overrides on heading/paragraph/badge.
    */
    <div className="relative z-10 w-full max-w-[590px] text-center lg:text-left">

      {/* Badge */}
      <Badge className="mb-5 px-4 py-1.5 text-[11px] font-medium">
        Trusted Digital Contribution Platform
      </Badge>

      {/*
        Heading — responsive sizing that genuinely fits every mobile width.

        Root cause of previous overflow:
        "Your Circle." at Inter Black is approximately 0.58× the font size
        per character. At text-[46px] that's ~320px for 12 chars — wider
        than the 272px available at 320px viewport (320 - 48px padding).

        Fix: step sizes anchored to actual available container width:
          320px viewport  → 272px container → text-[34px] → ~237px ✓
          375px viewport  → 327px container → text-[44px] → ~306px ✓
          430px viewport  → 382px container → text-[52px] → ~363px ✓
          640px (sm)      → wide enough     → text-[62px]
          768px (md)      → desktop lead-in → text-[72px]
          1024px (lg)     → desktop         → text-[82px]
          1280px (xl)     → full desktop    → text-[96px]

        Tailwind v4 supports arbitrary min-width variants inline.
      */}
      <h1 className="mt-1 text-[34px] font-black leading-[0.92] tracking-[-0.04em] text-white min-[375px]:text-[44px] min-[430px]:text-[52px] sm:text-[62px] md:text-[72px] lg:text-[82px] xl:text-[96px]">
        <span className="block">Your Circle.</span>
        <span className="block">
          Your{" "}
          <span className="bg-gradient-to-r from-white via-white to-[#16C47F] bg-clip-text text-transparent">
            Future.
          </span>
        </span>
      </h1>

      {/*
        Description.
        Block element fills parent naturally. max-w-[470px] is a desktop
        ceiling only. mx-auto centers the text block on mobile;
        lg:mx-0 restores left-alignment on desktop.
      */}
      <p className="mx-auto mt-5 w-full max-w-[470px] text-[15px] leading-[1.7] text-[#A7B1BC] sm:text-base sm:leading-8 lg:mx-0">
        Build trusted contribution circles, save towards life&apos;s biggest
        goals, and grow wealth together with people you trust.
      </p>

      {/*
        CTA Buttons.
        flex-col on mobile → each button gets full container width.
        sm:flex-row at 640px+ restores side-by-side layout.
        ! prefix overrides Button base class (px-8, h-14) which wins
        over plain overrides in Tailwind v4 due to stylesheet order.
      */}
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
        Feature cards — 3-column grid.
        Each column = (containerWidth − 2×gap) / 3.
        At 272px: (272 − 24) / 3 = 83px per card — compact but fits.
        mx-auto centers the grid; lg:mx-0 restores desktop alignment.
      */}
      <div className="mx-auto mt-6 grid w-full grid-cols-3 gap-3 lg:mx-0">
        <Feature icon={<ShieldCheck size={16} />} title="Secure" />
        <Feature icon={<Users size={16} />} title="Trusted" />
        <Feature icon={<Target size={16} />} title="Goals" />
      </div>

      {/*
        Trust / rating row.
        flex-wrap allows stars + text to reflow to two lines if needed.
        min-w-0 + shrink on the <p> prevents flex min-content sizing
        from forcing the row wider than the container.
        justify-center on mobile, lg:justify-start on desktop.
      */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start">
        <span className="shrink-0 text-[#D4AF37] tracking-wide">★★★★★</span>
        <p className="min-w-0 shrink text-[13px] text-[#8F99A6] sm:text-sm">
          Trusted by thousands building wealth together.
        </p>
      </div>

    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

function Feature({ icon, title }: FeatureProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 transition duration-300 hover:border-[#16C47F]/40 hover:-translate-y-1 sm:p-4">
      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-xl bg-[#16C47F]/15 text-[#16C47F] sm:h-10 sm:w-10 lg:mx-0">
        {icon}
      </div>
      <h3 className="mt-3 text-[13px] font-semibold text-white sm:mt-4 sm:text-sm">
        {title}
      </h3>
    </div>
  );
}
