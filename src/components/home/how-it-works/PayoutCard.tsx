import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function PayoutCard() {
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,196,127,0.14),transparent_50%)]" />

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#16C47F]/20 bg-[#16C47F]/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.24em] text-[#25D697]">
            STEP 04
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-white/[0.05] bg-white/[0.05]">
            <Trophy
              className="h-[18px] w-[18px] text-[#25D697]"
              strokeWidth={1.8}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="min-h-[58px] text-[27px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Receive your
            <br />
            payout automatically.
          </h3>

          <p className="mt-3 min-h-[48px] max-w-[500px] text-[13px] leading-6 text-slate-400">
            KHOOLO processes your payout and keeps every member updated with a
            clear transaction history.
          </p>
        </div>

        <div className="mt-5 h-[182px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0D1217]">
          <div className="flex h-[102px] items-center justify-between bg-gradient-to-br from-[#20CF87] to-[#10AE69] px-5">
            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                Payout completed
              </p>

              <h4 className="mt-2 text-[27px] font-black tracking-[-0.04em] text-white">
                ₦80,000
              </h4>

              <p className="mt-1 text-[10px] text-white/85">
                Successfully transferred
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/15">
              <BadgeCheck
                className="h-5 w-5 text-white"
                strokeWidth={1.8}
              />
            </div>
          </div>

          <div className="space-y-2 p-3">
            <div className="flex h-7 items-center justify-between rounded-[10px] bg-white/[0.055] px-3">
              <div className="flex items-center gap-2">
                <Banknote
                  className="h-3.5 w-3.5 text-[#25D697]"
                  strokeWidth={1.8}
                />

                <span className="text-[10px] text-slate-300">
                  Transfer status
                </span>
              </div>

              <span className="text-[10px] font-bold text-white">
                Successful
              </span>
            </div>

            <div className="flex h-7 items-center justify-between rounded-[10px] bg-white/[0.055] px-3">
              <div className="flex items-center gap-2">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#25D697]"
                  strokeWidth={1.8}
                />

                <span className="text-[10px] text-slate-300">
                  Next recipient
                </span>
              </div>

              <ArrowUpRight
                className="h-3.5 w-3.5 text-[#25D697]"
                strokeWidth={1.8}
              />
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5 text-[12px] font-bold text-[#25D697]">
          Transparent payouts every cycle

          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </article>
  );
}