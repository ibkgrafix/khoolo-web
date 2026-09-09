import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import { Badge, Button } from "@/components/ui";

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full max-w-[590px]">

      {/* Badge */}
      <Badge className="mb-5 px-4 py-1.5 text-[11px] font-medium">
        Trusted Digital Contribution Platform
      </Badge>

      {/*
        Heading — root cause fix for mobile overflow.

        "Your Circle." at Inter Black 52px is ~350–380px wide, which overflows
        a 320px (272px available) or 375px (327px available) container.

        Fix: start at 46px where "Your Circle." safely fits in 272px+.
        At sm (640px) the container is wide enough for 56px, and so on up.

        46px is still bold and commanding — this is the hero hook.
        We scale aggressively upward on larger screens to preserve
        the original desktop visual punch.
      */}
      <h1 className="text-[46px] font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-[58px] md:text-[72px] lg:text-[82px] xl:text-[96px]">
        <span className="block">Your Circle.</span>
        <span className="block">
          Your{" "}
          <span className="bg-gradient-to-r from-white via-white to-[#16C47F] bg-clip-text text-transparent">
            Future.
          </span>
        </span>
      </h1>

      {/*
        Description — clearly subordinate to the heading.
        w-full ensures it fills its 327px container and wraps naturally.
        max-w-[470px] is a desktop ceiling only — never active on mobile.
        No white-space:nowrap anywhere, text wraps freely.
      */}
      <p className="mt-5 w-full max-w-[470px] text-[15px] leading-[1.7] text-[#A7B1BC] sm:text-base sm:leading-8">
        Build trusted contribution circles, save towards life&apos;s biggest
        goals, and grow wealth together with people you trust.
      </p>

      {/*
        CTA Buttons.

        Root cause: Button base class has hardcoded px-8 which takes
        precedence over a plain px-6 override in Tailwind v4 (stylesheet
        order, not HTML order). Using !important variants (! prefix) to
        ensure the mobile overrides are actually applied.

        w-full on mobile gives each button the full container width.
        flex-col stacks them cleanly. At sm+ they sit side by side.
      */}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
        At the narrowest viewport (320px → 272px container):
          each column = (272px - 2×12px gap) / 3 = ~83px per card.
        Cards are compact with p-3 and small icons. They fit.
      */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <Feature icon={<ShieldCheck size={16} />} title="Secure" />
        <Feature icon={<Users size={16} />} title="Trusted" />
        <Feature icon={<Target size={16} />} title="Goals" />
      </div>

      {/*
        Trust / rating row.

        Root cause: flex row with long text and no wrapping. The text has
        an implicit min-content width that prevents it from shrinking.

        Fix:
        - flex-wrap so the text can drop to a second line if needed.
        - min-w-0 on the <p> overrides the default flex min-content sizing,
          allowing it to shrink below its intrinsic content width.
        - shrink-0 on stars so they never get compressed.
      */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
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
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#16C47F]/15 text-[#16C47F] sm:h-10 sm:w-10">
        {icon}
      </div>
      <h3 className="mt-3 text-[13px] font-semibold text-white sm:mt-4 sm:text-sm">
        {title}
      </h3>
    </div>
  );
}
