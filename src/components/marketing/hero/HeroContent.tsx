import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";
import { Badge, Button } from "@/components/ui";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-[590px]">

      {/* Badge */}

      <Badge className="mb-4 px-4 py-1.5 text-[11px] font-medium">
        Trusted Digital Contribution Platform
      </Badge>

      {/* Heading */}

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

      {/* Description */}

      <p className="mt-6 max-w-[470px] text-lg leading-8 text-[#A7B1BC]">

        Build trusted contribution circles,
        save towards life's biggest goals,
        and grow wealth together with people
        you trust.

      </p>

      {/* Buttons */}

      <div className="mt-8 flex flex-wrap gap-4">

        <Button className="h-14 rounded-2xl px-8 text-base">

          Start Saving

        </Button>

        <Button
          variant="secondary"
          className="group h-14 rounded-2xl px-8 text-base"
        >

          Create Circle

          <ArrowRight
            size={18}
            className="ml-2 transition group-hover:translate-x-1"
          />

        </Button>

      </div>

      {/* Features */}

      <div className="mt-8 grid grid-cols-3 gap-3 xs:gap-4">

        <Feature
          icon={<ShieldCheck size={18} />}
          title="Secure"
        />

        <Feature
          icon={<Users size={18} />}
          title="Trusted"
        />

        <Feature
          icon={<Target size={18} />}
          title="Goals"
        />

      </div>

      {/* Social */}

      <div className="mt-7 flex items-center gap-3">

        <div className="text-[#D4AF37] tracking-wide">

          ★★★★★

        </div>

        <p className="text-sm text-[#8F99A6]">

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
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 sm:p-4 transition duration-300 hover:border-[#16C47F]/40 hover:-translate-y-1">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16C47F]/15 text-[#16C47F]">

        {icon}

      </div>

      <h3 className="mt-4 font-semibold text-white">

        {title}

      </h3>

    </div>
  );
}