"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContributionCard() {
  return (
    <div
      className="
        relative
        w-[258px]
        overflow-hidden
        rounded-[24px]
        border border-white/10
        bg-[#171B20]/92
        shadow-[0_28px_65px_rgba(0,0,0,0.5)]
        backdrop-blur-2xl
        2xl:w-[276px]
      "
    >
      <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#16C47F] to-[#0E9F6E]" />

      <div className="p-4">
        {/* Member */}

        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="relative shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#16C47F] to-[#0D8F5A] text-sm font-bold text-white">
                SJ
              </div>

              <CheckCircle2
                size={14}
                className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[#171B20] text-[#16C47F]"
              />
            </div>

            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-white">
                Sarah Johnson
              </h4>

              <p className="mt-0.5 text-[11px] text-white/45">
                Family Circle
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full bg-[#16C47F]/10 px-2.5 py-1 text-[9px] font-bold tracking-wide text-[#16C47F]">
            LIVE
          </span>
        </div>

        {/* Contribution */}

        <div className="mt-5">
          <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
            Contribution
          </p>

          <div className="mt-2 flex items-center justify-between gap-3">
            <h2 className="whitespace-nowrap text-[28px] font-black leading-none tracking-[-0.04em] text-[#16C47F] 2xl:text-[30px]">
              +₦50,000
            </h2>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#16C47F]/15">
              <ArrowUpRight size={18} className="text-[#16C47F]" />
            </div>
          </div>
        </div>

        {/* Details */}

        <div className="mt-4 flex justify-between border-t border-white/10 pt-3.5">
          <div>
            <p className="text-[10px] text-white/35">Status</p>

            <p className="mt-1 text-xs font-medium text-white/85">
              Successful
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-white/35">Time</p>

            <p className="mt-1 text-xs font-medium text-white/85">
              Just now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}