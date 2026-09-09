import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    label: "Secure contributions",
  },
  {
    icon: Users,
    label: "Private savings circles",
  },
  {
    icon: Clock3,
    label: "Smart reminders",
  },
  {
    icon: Wallet,
    label: "Payout tracking",
  },
  {
    icon: CheckCircle2,
    label: "Transparent records",
  },
];

export default function FeatureBar() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#12171D] shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16C47F]/60 to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,196,127,0.07),transparent_65%)]" />

      {/* Features */}
      <div className="relative grid grid-cols-1 divide-y divide-white/[0.07] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
        {features.map(({ icon: Icon, label }, index) => (
          <div
            key={label}
            className={`
              group
              flex
              min-h-[112px]
              items-center
              gap-3
              px-5
              py-5
              transition
              duration-300
              hover:bg-white/[0.035]
              sm:flex-col
              sm:justify-center
              sm:text-center
              lg:min-h-[124px]
              ${index === 2
                ? "sm:col-span-2 lg:col-span-1"
                : ""
              }
            `}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#16C47F]/10 bg-[#16C47F]/10 transition duration-300 group-hover:border-[#16C47F]/20 group-hover:bg-[#16C47F]/15">
              <Icon
                className="h-[18px] w-[18px] text-[#22D494]"
                strokeWidth={1.8}
              />
            </div>

            <span className="max-w-[150px] text-[12px] font-bold leading-5 text-slate-200">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}