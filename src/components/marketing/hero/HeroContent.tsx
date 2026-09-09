import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import { Badge, Button } from "@/components/ui";

export default function HeroContent() {
  return (
    /*
      Root content div.
      w-full ensures it fills its parent (the max-w-[620px] grid cell).
      max-w-[590px] remains as the desktop ceiling.
    */
    <div className="relative z-10 w-full max-w-[590px]">

      {/* Badge */}

      <Badge className="mb-4 px-4 py-1.5 text-[11px] font-medium">
        Trusted Digital Contribution Platform
      </Badge>

      {/* Heading — graduated scale so it never exceeds container width */}

      <h1 className="text-[44px] font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-[56px] md:text-[64px] lg:text-[82px] xl:text-[96px]">

        <span className="block">
          Your Circle.
        </span>

        <span className="block">

          Your{" "}

          <span className="bg-gradient-to-r from-white via-white to-[#16C47F] bg-clip-text text-transparent">

            Future.

          </span>

        </span>

      </h1>

      {/* Description
          w-full ensures the paragraph fills the container and wraps naturally.
          max-w-[470px] remains as desktop ceiling.
          No white-space: nowrap is present so text wraps freely.
      */}

      <p className="mt-6 w-full max-w-[470px] text-lg leading-8 text-[#A7B1BC]">

        Build trusted contribution circles,
        save towards life's biggest goals,
        and grow wealth together with people
        you trust.

      </p>

      {/* Buttons
          flex-wrap allows them to stack on narrow screens.
          Each button uses w-full on mobile so it occupies the full row
          and auto/fit on sm+ so they sit side-by-side where space allows.
      */}

      <div className="mt-8 flex flex-wrap gap-3">

        <Button className="h-12 w-full rounded-2xl px-6 text-sm sm:h-14 sm:w-auto sm:px-8 sm:text-base">

          Start Saving

        </Button>

        <Button
          variant="secondary"
          className="group h-12 w-full rounded-2xl px-6 text-sm sm:h-14 sm:w-auto sm:px-8 sm:text-base"
        >

          Create Circle

          <ArrowRight
            size={18}
            className="ml-2 transition group-hover:translate-x-1"
          />

        </Button>

      </div>

      {/* Feature cards — 3-column grid.
          gap-3 keeps them tight on narrow screens.
          Padding reduced on mobile so the 3 cards fit.
      */}

      <div className="mt-8 grid grid-cols-3 gap-3">

        <Feature
          icon={<ShieldCheck size={16} />}
          title="Secure"
        />

        <Feature
          icon={<Users size={16} />}
          title="Trusted"
        />

        <Feature
          icon={<Target size={16} />}
          title="Goals"
        />

      </div>

      {/* Trust / rating row.
          flex-wrap lets it reflow on narrow screens.
          min-w-0 on the paragraph prevents the default flex min-content
          width from forcing the row wider than its container.
      */}

      <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1">

        <div className="shrink-0 text-[#D4AF37] tracking-wide">

          ★★★★★

        </div>

        <p className="min-w-0 text-sm text-[#8F99A6]">

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

function Feature({
  icon,
  title,
}: FeatureProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 transition duration-300 hover:border-[#16C47F]/40 hover:-translate-y-1 sm:p-4">

      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#16C47F]/15 text-[#16C47F] sm:h-10 sm:w-10">

        {icon}

      </div>

      <h3 className="mt-3 text-sm font-semibold text-white sm:mt-4">

        {title}

      </h3>

    </div>
  );
}
