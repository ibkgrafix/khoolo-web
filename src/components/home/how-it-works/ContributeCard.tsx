import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  Receipt,
  Wallet,
} from "lucide-react";

export default function ContributeCard() {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.08]
        bg-[#141A20]
        p-6
        shadow-[0_18px_50px_rgba(15,23,42,0.09)]
        transition
        duration-500
        hover:-translate-y-1
        hover:border-[#16C47F]/20
        hover:shadow-[0_24px_65px_rgba(22,196,127,0.11)]
        lg:h-[470px]
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(22,196,127,0.13),transparent_50%)]" />

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#16C47F]/20 bg-[#16C47F]/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.24em] text-[#25D697]">
            STEP 03
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-white/[0.05] bg-white/[0.05]">
            <Wallet
              className="h-[18px] w-[18px] text-[#25D697]"
              strokeWidth={1.8}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="min-h-[58px] text-[27px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Make every
            <br />
            contribution on time.
          </h3>

          <p className="mt-3 min-h-[48px] max-w-[500px] text-[13px] leading-6 text-slate-400">
            Track payments, receive timely reminders and keep every member
            updated throughout each cycle.
          </p>
        </div>

        <div className="mt-5 h-[182px] rounded-[20px] border border-white/[0.08] bg-[#0D1217] p-4">
          <div className="rounded-[14px] bg-gradient-to-br from-[#20CF87] to-[#10AE69] px-4 py-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                Next payment
              </span>

              <CreditCard
                className="h-4 w-4 text-white"
                strokeWidth={1.8}
              />
            </div>

            <div className="mt-2 flex items-end justify-between">
              <h4 className="text-[24px] font-black tracking-[-0.04em] text-white">
                ₦10,000
              </h4>

              <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/90">
                <CalendarClock className="h-3.5 w-3.5" />
                Friday
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex h-10 items-center justify-between rounded-[12px] bg-white/[0.055] px-3">
            <div className="flex items-center gap-2">
              <Receipt
                className="h-3.5 w-3.5 text-[#25D697]"
                strokeWidth={1.8}
              />

              <span className="text-[10px] text-slate-300">
                Contribution received
              </span>
            </div>

            <CheckCircle2
              className="h-3.5 w-3.5 text-[#25D697]"
              strokeWidth={1.8}
            />
          </div>

          <div className="mt-2.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Circle progress</span>
              <span className="font-bold text-white">7 / 8 paid</span>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[88%] rounded-full bg-[#16C47F]" />
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5 text-[12px] font-bold text-[#25D697]">
          Every payment is recorded instantly

          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </article>
  );
}