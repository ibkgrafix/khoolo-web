import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  LockKeyhole,
  Shuffle,
  UsersRound,
  WalletCards,
} from "lucide-react";

const members = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    position: "1st payout",
    status: "Paid",
  },
  {
    initials: "MJ",
    name: "Michael James",
    position: "2nd payout",
    status: "Paid",
  },
  {
    initials: "AB",
    name: "Aisha Bello",
    position: "3rd payout",
    status: "Pending",
  },
];

const benefits = [
  {
    icon: LockKeyhole,
    title: "Private by design",
    description: "Only invited members can access and join your circle.",
  },
  {
    icon: Shuffle,
    title: "Flexible payout order",
    description: "Choose the order manually or let KHOOLO select it fairly.",
  },
  {
    icon: WalletCards,
    title: "Clear contribution tracking",
    description: "See every payment, balance and payout in one place.",
  },
];

export default function Circles() {
  return (
    <section
      id="circles"
      className="relative overflow-hidden bg-[#080C0E] py-20 text-white lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute inset-0
            opacity-[0.18]
            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="absolute -right-56 -top-64 h-[720px] w-[720px] rounded-full bg-[#16C47F]/15 blur-[150px]" />

        <div className="absolute -bottom-72 -left-52 h-[620px] w-[620px] rounded-full bg-[#16C47F]/10 blur-[145px]" />

        <div className="absolute right-[4%] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full border border-[#16C47F]/10" />

        <div className="absolute right-[10%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-[#16C47F]/10" />

        <div className="absolute right-[16%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-[#16C47F]/10" />
      </div>

      <div className="relative mx-auto grid grid-cols-1 max-w-[1280px] items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center rounded-full border border-[#16C47F]/25 bg-[#16C47F]/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#25D697]">
            Contribution circles
          </span>

          <h2 className="mt-6 max-w-[570px] text-[32px] font-black leading-[0.98] tracking-[-0.055em] text-white min-[375px]:text-[38px] min-[430px]:text-[42px] sm:text-[50px] lg:text-[58px]">
            Save together.
            <br />
            Grow with your{" "}
            <span className="text-[#16C47F]">circle.</span>
          </h2>

          <p className="mt-6 w-full max-w-[540px] text-[15px] leading-7 text-slate-400 lg:text-base">
            Create a trusted contribution circle, invite people you know and
            let KHOOLO manage payments, reminders and payouts automatically.
          </p>

          <div className="mt-8 space-y-5">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex w-full max-w-[540px] items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#16C47F]/15 bg-[#16C47F]/10">
                  <Icon
                    className="h-[18px] w-[18px] text-[#25D697]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-white">
                    {title}
                  </h3>

                  <p className="mt-1 text-[13px] leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#get-started"
            className="group mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#16C47F] px-6 text-[13px] font-bold text-[#07120D] transition duration-300 hover:bg-[#20D58E]"
          >
            Create your circle

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </a>
        </div>

        {/* Product Preview */}
        <div className="relative">
          <div className="absolute -inset-8 rounded-[48px] bg-[#16C47F]/10 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#12181D] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.42)] sm:p-7">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#25D697]">
                  Active circle
                </p>

                <h3 className="mt-2 text-[22px] font-black tracking-[-0.03em] text-white">
                  Friends Savings
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#16C47F]/10 bg-[#16C47F]/10">
                <UsersRound
                  className="h-[19px] w-[19px] text-[#25D697]"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-[17px] border border-white/[0.07] bg-white/[0.045] p-4">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                  Contribution
                </p>

                <p className="mt-2 text-[18px] font-black text-white">
                  ₦10,000
                </p>
              </div>

              <div className="rounded-[17px] border border-white/[0.07] bg-white/[0.045] p-4">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                  Members
                </p>

                <p className="mt-2 text-[18px] font-black text-white">
                  8 people
                </p>
              </div>

              <div className="rounded-[17px] border border-white/[0.07] bg-white/[0.045] p-4">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                  Cycle
                </p>

                <p className="mt-2 text-[18px] font-black text-white">
                  Weekly
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4 rounded-[20px] border border-white/[0.07] bg-[#0B1014] p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CalendarDays
                    className="h-4 w-4 shrink-0 text-[#25D697]"
                    strokeWidth={1.8}
                  />

                  <span className="text-[12px] font-semibold text-slate-300">
                    Current contribution cycle
                  </span>
                </div>

                <span className="shrink-0 text-[12px] font-bold text-white">
                  7 / 8 paid
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[88%] rounded-full bg-[#16C47F]" />
              </div>
            </div>

            {/* Payout Order */}
            <div className="mt-4 rounded-[20px] border border-white/[0.07] bg-[#0B1014] p-4">
              <div className="flex items-center justify-between px-1">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  Payout order
                </p>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#25D697]"
                >
                  <Shuffle
                    className="h-3.5 w-3.5"
                    strokeWidth={1.8}
                  />
                  Randomize
                </button>
              </div>

              <div className="mt-3 space-y-2.5">
                {members.map((member, index) => (
                  <div
                    key={member.name}
                    className="flex items-center justify-between rounded-[14px] border border-white/[0.04] bg-white/[0.045] px-3.5 py-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16C47F]/10 text-[10px] font-extrabold text-[#25D697]">
                        {member.initials}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold text-white">
                          {member.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-500">
                          {member.position}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold ${member.status === "Paid"
                          ? "text-[#25D697]"
                          : "text-amber-300"
                          }`}
                      >
                        {member.status}
                      </span>

                      {member.status === "Paid" && (
                        <CheckCircle2
                          className="h-4 w-4 text-[#25D697]"
                          strokeWidth={1.8}
                        />
                      )}

                      <span className="ml-1 text-[10px] font-bold text-slate-600">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Payout */}
            <div className="mt-4 flex items-center justify-between rounded-[17px] border border-[#16C47F]/20 bg-[#16C47F]/10 px-4 py-3.5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#25D697]">
                  Next payout
                </p>

                <p className="mt-1 text-[13px] font-bold text-white">
                  Michael receives ₦80,000
                </p>
              </div>

              <WalletCards
                className="h-5 w-5 text-[#25D697]"
                strokeWidth={1.8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}