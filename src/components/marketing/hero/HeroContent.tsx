import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import { Badge, Button } from "@/components/ui";

export default function HeroContent() {
  return (
    /*
      ROOT CAUSE FIX — mobile alignment:
      On mobile the hero is a single-column layout. The design intent
      (per the spec) is a centered vertical composition on mobile.
      Previously there was no text-center for mobile — everything
      defaulted to left-aligned, matching the desktop two-column layout.

      Fix: text-center on mobile, lg:text-left on desktop.
      This single rule centers the heading, paragraph, and badge
      through CSS text-align inheritance without touching each child.

      Buttons, feature cards, and the trust row each get mx-auto
      (or justify-center) on mobile so they center within the content
      box without needing individual element overrides.
    */
    <div className="relative z-10 w-full max-w-[590px] text-center lg:text-left">

      {/* Badge — centers via inline-flex + text-center parent */}
      <Badge className="mb-5 px-4 py-1.5 text-[11px] font-medium">
        Trusted Digital Contribution Platform
      </Badge>

      {/*
        Heading.
        text-[46px] at mobile safely fits "Your Circle." in 272px+
        containers (320px viewport − 48px padding = 272px available).
        Scales up aggressively for desktop impact.
      */}
      <h1 className="mt-1 text-[46px] font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-[58px] md:text-[72px] lg:text-[82px] xl:text-[96px]">
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
        w-full + max-w-[470px] mx-auto on mobile centers the text block
        and prevents it from stretching edge-to-edge on wider mobiles.
        lg:mx-0 restores left-alignment on desktop.
      */}
      <p className="mx-auto mt-5 w-full max-w-[470px] text-[15px] leading-[1.7] text-[#A7B1BC] sm:text-base sm:leading-8 lg:mx-0">
        Build trusted contribution circles, save towards life&apos;s biggest
        goals, and grow wealth together with people you trust.
      </p>

      {/*
        CTA Buttons.
        flex-col on mobile stacks them cleanly. mx-auto centers the
        column. sm:flex-row at sm+ restores side-by-side layout.
        !important overrides are needed because Button's base class
        has hardcoded px-8/h-14; in Tailwind v4 stylesheet-order
        specificity means plain overrides lose to the base class.
      */}
      <div className="mx-auto mt-7 flex w-full flex-col gap-3 sm:mx-0 sm:flex-row sm:gap-4 lg:mx-0">
        <Button
          className="!h-12 !w-full !rounded-2xl !px-6 !text-[15px] sm:!h-14 sm:!w-auto sm:!px-8 sm:!text-base"
        >
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
        mx-auto centers the grid on mobile.
        At 320px (272px available): (272 − 2×12) / 3 = 83px per card — fits.
        At 375px (327px available): (327 − 2×12) / 3 = 101px per card — fits.
        lg:mx-0 restores left-alignment on desktop.
      */}
      <div className="mx-auto mt-6 grid w-full grid-cols-3 gap-3 lg:mx-0">
        <Feature icon={<ShieldCheck size={16} />} title="Secure" />
        <Feature icon={<Users size={16} />} title="Trusted" />
        <Feature icon={<Target size={16} />} title="Goals" />
      </div>

      {/*
        Trust / rating row.
        justify-center on mobile. flex-wrap + min-w-0 + shrink on the
        text element prevent the row from exceeding the container.
        lg:justify-start restores left-alignment on desktop.
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
