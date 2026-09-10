"use client";

import { Bell, Target, Users, Wallet } from "lucide-react";

/*
  DashboardMockup — desktop-only widget, scaled by Hero.tsx.
  Fixed 620px source width; height is content-driven (~380px).
  Compact spacing throughout: p-[14px] shell, tighter type scale,
  no Recent Activity column (dropped per spec).
  Solid #16C47F savings card — no gradient, matches MobileDashboard.
*/
export default function DashboardMockup() {
  return (
    <div className="relative w-[620px]">

      {/* Ambient glow behind the card */}
      <div className="absolute -inset-8 rounded-[52px] bg-[#16C47F]/10 blur-[80px]" />

      {/* Card shell */}
      <div
        className="relative rounded-[28px] border border-white/10 bg-[#151719]/95 p-[14px] shadow-[0_32px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      >
        {/* Subtle top sheen */}
        <div className="absolute inset-x-0 top-0 h-32 rounded-t-[28px] bg-gradient-to-b from-white/[0.04] to-transparent" />

        <div className="relative">

          {/* ── Header ── */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] text-white/50">Good Evening</p>
              <p className="mt-0.5 text-[15px] font-bold text-white">Samuel 👋</p>
            </div>
            <button
              className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-white/10 bg-white/5"
              aria-label="Notifications"
            >
              <Bell className="h-3.5 w-3.5 text-white/60" />
            </button>
          </div>

          {/* ── Total Savings card — solid fill, dark green text ── */}
          <div
            className="mt-3 rounded-[16px] p-4"
            style={{ backgroundColor: "#16C47F" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] font-medium" style={{ color: "#07231A", opacity: 0.75 }}>
                  Total Savings
                </p>
                <p
                  className="mt-1 text-[22px] font-bold leading-none tracking-tight"
                  style={{ color: "#07231A" }}
                >
                  ₦1,250,000
                </p>
                <p className="mt-1.5 text-[9px]" style={{ color: "#07231A", opacity: 0.75 }}>
                  Saved across all circles
                </p>
              </div>
              {/* +18% pill */}
              <span
                className="rounded-full px-2.5 py-1 text-[9px] font-bold"
                style={{ backgroundColor: "rgba(255,255,255,0.35)", color: "#07231A" }}
              >
                +18%
              </span>
            </div>
          </div>

          {/* ── KPI tiles ── */}
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { icon: <Wallet className="h-3.5 w-3.5" style={{ color: "#5DCAA5" }} />, label: "Wallet", value: "₦320k" },
              { icon: <Target className="h-3.5 w-3.5" style={{ color: "#EF9F27" }} />, label: "Goals", value: "6 Active" },
              { icon: <Users className="h-3.5 w-3.5" style={{ color: "#378ADD" }} />, label: "Members", value: "12" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="rounded-[10px] p-2.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {icon}
                <p className="mt-1.5 text-[9px] text-white/50">{label}</p>
                <p className="mt-0.5 text-[11px] font-bold text-white">{value}</p>
              </div>
            ))}
          </div>

          {/* ── Family Circle card ── */}
          <div
            className="mt-2.5 rounded-[14px] p-[14px]"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Header row */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold text-white">Family Circle</p>
                <p className="mt-0.5 text-[9px] text-white/50">Monthly Contribution</p>
              </div>
              <span
                className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                style={{ backgroundColor: "rgba(22,196,127,0.15)", color: "#16C47F" }}
              >
                Active
              </span>
            </div>

            {/* Progress bar */}
            <div
              className="mt-3 h-[5px] w-full overflow-hidden rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: "72%", backgroundColor: "#16C47F" }}
              />
            </div>

            {/* Labels */}
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[9px] text-white/50">72% Complete</span>
              <span className="text-[9px] text-white/50">₦720k / ₦1M</span>
            </div>

            {/* Member avatars — 26px, -4px overlap */}
            <div className="mt-3 flex items-center">
              {["A", "B", "C"].map((initial, i) => (
                <div
                  key={initial}
                  className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#151719] text-[9px] font-bold"
                  style={{
                    backgroundColor: "#16C47F",
                    color: "#07231A",
                    marginLeft: i === 0 ? "0" : "-4px",
                  }}
                >
                  {initial}
                </div>
              ))}
              <div
                className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#151719] text-[9px] font-bold text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.10)", marginLeft: "-4px" }}
              >
                +9
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
