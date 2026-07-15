import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Plus,
  Users,
} from "lucide-react";

export default function CreateCircleCard() {
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,196,127,0.13),transparent_48%)]" />

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-[#16C47F]/20 bg-[#16C47F]/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.24em] text-[#25D697]">
            STEP 01
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-white/[0.05] bg-white/[0.05]">
            <Plus
              className="h-[18px] w-[18px] text-[#25D697]"
              strokeWidth={1.8}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="min-h-[58px] text-[27px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Create your
            <br />
            savings circle.
          </h3>

          <p className="mt-3 min-h-[48px] max-w-[500px] text-[13px] leading-6 text-slate-400">
            Choose the amount, contribution schedule and payout order, then
            invite trusted members.
          </p>
        </div>

        <div className="mt-5 h-[182px] rounded-[20px] border border-white/[0.08] bg-[#0D1217] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500">
                Circle
              </p>

              <h4 className="mt-1 text-[15px] font-bold text-white">
                Friends Savings
              </h4>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#16C47F]/10">
              <Users
                className="h-4 w-4 text-[#25D697]"
                strokeWidth={1.8}
              />
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="flex h-11 items-center justify-between rounded-[13px] bg-white/[0.055] px-3.5">
              <div className="flex min-w-0 items-center gap-2.5">
                <CalendarDays
                  className="h-4 w-4 shrink-0 text-[#25D697]"
                  strokeWidth={1.8}
                />

                <span className="truncate text-[12px] text-slate-300">
                  Weekly contribution
                </span>
              </div>

              <span className="ml-3 shrink-0 text-[12px] font-bold text-white">
                ₦10,000
              </span>
            </div>

            <div className="flex h-11 items-center justify-between rounded-[13px] bg-white/[0.055] px-3.5">
              <div className="flex min-w-0 items-center gap-2.5">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#25D697]"
                  strokeWidth={1.8}
                />

                <span className="truncate text-[12px] text-slate-300">
                  Members invited
                </span>
              </div>

              <span className="ml-3 shrink-0 rounded-full bg-[#16C47F]/10 px-2.5 py-1 text-[9px] font-extrabold text-[#25D697]">
                8 joined
              </span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5 text-[12px] font-bold text-[#25D697]">
          Set up in under 2 minutes

          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </article>
  );
}