import {
  ArrowRight,
  BellRing,
  CreditCard,
  ShieldCheck,
  Users,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Secure contributions",
    description:
      "Every payment is protected, recorded and visible to the circle.",
  },
  {
    icon: Users,
    title: "Trusted circles",
    description:
      "Save privately with friends, family and people you already trust.",
  },
  {
    icon: BellRing,
    title: "Smart reminders",
    description:
      "Members receive timely updates before every contribution date.",
  },
  {
    icon: CreditCard,
    title: "Reliable payouts",
    description:
      "Payouts are processed clearly and tracked throughout every cycle.",
  },
];

export default function TrustCard() {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#12171D] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,196,127,0.12),transparent_48%)]" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#16C47F]/[0.08] blur-[100px]" />

      <div className="relative grid grid-cols-1 gap-9 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:p-10">
        {/* Left */}
        <div>
          <span className="inline-flex w-fit items-center rounded-full border border-[#16C47F]/20 bg-[#16C47F]/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#22D494]">
            Why VAUHLT?
          </span>

          <h3 className="mt-5 max-w-[470px] text-[34px] font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-[38px]">
            Built for trust.
            <br />
            Designed for{" "}
            <span className="text-[#16C47F]">real people.</span>
          </h3>

          <p className="mt-5 max-w-[490px] text-[14px] leading-7 text-slate-400">
            VAUHLT modernizes trusted contribution circles with clear records,
            secure payments and dependable payouts for every member.
          </p>

          <button
            type="button"
            className="group mt-6 inline-flex items-center gap-2 rounded-[14px] bg-[#16C47F] px-5 py-3 text-[13px] font-bold text-[#0B1510] transition duration-300 hover:bg-[#20D58E]"
          >
            Learn more

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                rounded-[20px]
                border
                border-white/[0.07]
                bg-white/[0.035]
                p-5
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-[#16C47F]/20
                hover:bg-white/[0.055]
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#16C47F]/10">
                <Icon
                  className="h-[18px] w-[18px] text-[#22D494]"
                  strokeWidth={1.8}
                />
              </div>

              <h4 className="mt-4 text-[15px] font-bold text-white">
                {title}
              </h4>

              <p className="mt-2 text-[12px] leading-5 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}