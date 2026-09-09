import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import { Badge, Button } from "@/components/ui";

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full max-w-[590px]">

      {/* Badge */}
      <Badge className="mb-5 px-4 py-1.5 text-[11px] font-medium">
        Trusted Digital Contribution Platform
      </Badge>

      {/* Heading
          Bold and attention-grabbing on every screen size.
          52px on mobile is intentionally large — this is the hero hook.
          Scales up gracefully to 96px on xl desktops.
      */}
      <h1 className="text-[52px] font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-[62px] md:text-[72px] lg:text-[82px] xl:text-[96px]">
        <span className="block">Your Circle.</span>
        <span className="block">
          Your{" "}
          <span className="bg-gradient-to-r from-white via-white to-[#16C47F] bg-clip-text text-transparent">
            Future.
          </span>
        </span>
      </h1>

      {/* Description
          Clearly smaller than the heading so the visual hierarchy is obvious.
          text-[15px] on mobile keeps it readable but subordinate.
      */}
      <p className="mt-5 w-full max-w-[470px] text-[15px] leading-7 text-[#A7B1BC] sm:text-base sm:leading-8">
        Build trusted contribution circles, save towards life's biggest goals,
        and grow wealth together with people you trust.
      </p>

      {/* CTA Buttons
          Full-width on mobile so they fill the content area cleanly.
          Revert to auto-width side-by-side at sm+ breakpoint.
      */}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">

        <Button className="!h-12 w-full rounded-2xl px-6 text-[15px] sm:!h-14 sm:w-auto sm:px-8 sm:text-base">
          Start Saving
        </Button>

        <Button
          variant="secondary"
          className="group !h-12 w-full rounded-2xl px-6 text-[15px] sm:!h-14 sm:w-auto sm:px-8 sm:text-base"
        >
          Create Circle
          <ArrowRight size={17} className="ml-2 transition group-hover:translate-x-1" />
        </Button>

      </div>

      {/* Feature cards — 3-column grid, compact on mobile */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <Feature icon={<ShieldCheck size={16} />} title="Secure" />
        <Feature icon={<Users size={16} />} title="Trusted" />
        <Feature icon={<Target size={16} />} title="Goals" />
      </div>

      {/* Trust / rating row — wraps naturally on narrow screens */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="shrink-0 text-[#D4AF37] tracking-wide">★★★★★</span>
        <p className="min-w-0 text-[13px] text-[#8F99A6] sm:text-sm">
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
