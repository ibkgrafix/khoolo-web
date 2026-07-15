"use client";

import {
  Bell,
  TrendingUp,
  Wallet,
  Users,
  Target,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="relative w-[620px] h-[420px]">

      {/* Glow */}
      <div className="absolute -inset-10 rounded-[60px] bg-[#16C47F]/10 blur-[90px]" />

      {/* Dashboard */}
      <div className="relative h-full overflow-hidden rounded-[40px] border border-white/10 bg-[#151719]/95 backdrop-blur-xl shadow-[0_45px_100px_rgba(0,0,0,.55)]">

        {/* Top Glow */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/5 to-transparent" />

        <div className="relative p-7">

          {/* Header */}
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-white/50">
                Good Evening
              </p>

              <h2 className="mt-1 text-[28px] font-bold text-white">
                Samuel 👋
              </h2>
            </div>

            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
              <Bell className="h-5 w-5 text-white/70" />
            </button>

          </div>

          {/* Savings Card */}

          <div className="mt-7 rounded-[30px] bg-gradient-to-r from-[#16C47F] to-[#3AD78B] p-6 text-black shadow-2xl">

            <div className="flex justify-between">

              <div>

                <p className="text-sm font-medium opacity-70">
                  Total Savings
                </p>

                <h1 className="mt-2 text-[42px] font-bold tracking-tight">
                  ₦1,250,000
                </h1>

                <p className="mt-3 text-sm opacity-80">
                  Saved across all savings circles
                </p>

              </div>

              <div className="flex h-fit items-center gap-2 rounded-full bg-white/30 px-4 py-2 font-semibold">

                <TrendingUp className="h-4 w-4" />

                +18%

              </div>

            </div>

          </div>

          {/* KPI */}

          <div className="mt-5 grid grid-cols-3 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

              <Wallet className="h-5 w-5 text-emerald-400" />

              <p className="mt-3 text-xs text-white/50">
                Wallet
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                ₦320k
              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

              <Target className="h-5 w-5 text-yellow-400" />

              <p className="mt-3 text-xs text-white/50">
                Goals
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                6 Active
              </h3>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

              <Users className="h-5 w-5 text-sky-400" />

              <p className="mt-3 text-xs text-white/50">
                Members
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                12
              </h3>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-5 grid grid-cols-[1.15fr_.85fr] gap-4">

            {/* Circle */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <div className="flex items-start justify-between">

                <div>

                  <p className="font-semibold text-white">
                    Family Circle
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    Monthly Contribution
                  </p>

                </div>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                  Active
                </span>

              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-green-400" />

              </div>

              <div className="mt-4 flex justify-between text-xs text-white/50">

                <span>72% Complete</span>

                <span>₦720k / ₦1M</span>

              </div>

              {/* Members */}

              <div className="mt-6 flex items-center -space-x-3">

                {["A", "B", "C"].map((item) => (
                  <div
                    key={item}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#151719] bg-gradient-to-br from-[#16C47F] to-[#0D8F5A] text-sm font-bold text-white"
                  >
                    {item}
                  </div>
                ))}

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#151719] bg-white/10 text-xs font-bold text-white">
                  +9
                </div>

              </div>

            </div>

            {/* Activity */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <p className="font-semibold text-white">
                Recent Activity
              </p>

              <div className="mt-5 space-y-4">

                <div>

                  <p className="text-sm font-medium text-white">
                    +₦50,000
                  </p>

                  <p className="text-xs text-white/50">
                    Rent Savings
                  </p>

                </div>

                <div>

                  <p className="text-sm font-medium text-white">
                    Goal Created
                  </p>

                  <p className="text-xs text-white/50">
                    Wedding Fund
                  </p>

                </div>

                <div>

                  <p className="text-sm font-medium text-white">
                    Circle Completed
                  </p>

                  <p className="text-xs text-white/50">
                    Family Savings
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}