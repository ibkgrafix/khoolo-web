"use client";

import { ArrowUpRight, Bell, Target, Users, Wallet } from "lucide-react";

/*
  DashboardMockup — desktop-only widget, scaled by Hero.tsx.
  Fixed 620px source width; height is content-driven (~380px).

  Design principles (per VAUHLT design system):
  - Dark surfaces: #0F1113, #171B20, rgba(255,255,255,0.04)
  - Accent #16C47F used sparingly as text/icon/bar highlight only —
    NOT as a large fill block
  - Flat, single-tone avatar fills — no gradients on small elements
  - No float animation — static reads as more premium for fintech
  - One subtle ambient glow total; no per-element glow layers
*/
export default function DashboardMockup() {
  return (
    <div className="relative w-[620px]">

      {/* Single ambient glow — the only glow in the whole composition */}
      <div
        className="absolute -inset-6 rounded-[48px] blur-[60px]"
        style={{ backgroundColor: "rgba(22,196,127,0.07)" }}
      />

      {/* Card shell */}
      <div
        className="relative rounded-[24px] p-[14px] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        style={{
          backgroundColor: "#111418",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Good Evening
            </p>
            <p className="mt-0.5 text-[15px] font-bold text-white">Samuel</p>
          </div>
          <button
            className="flex h-7 w-7 items-center justify-center rounded-[8px]"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            aria-label="Notifications"
          >
            <Bell className="h-3.5 w-3.5" style={{ color: "rgba(255,255,255,0.5)" }} />
          </button>
        </div>

        {/* ── Total Savings — dark surface, green accent only on the figure ── */}
        <div
          className="mt-3 rounded-[16px] p-4"
          style={{
            backgroundColor: "#171B20",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                Total Savings
              </p>
              {/* Amount in white, not green — green is reserved for the trend */}
              <p className="mt-1 text-[22px] font-bold leading-none tracking-tight text-white">
                ₦1,250,000
              </p>
              <p className="mt-1.5 text-[9px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Across all savings circles
              </p>
            </div>
            {/* Trend pill — accent green used here, small and deliberate */}
            <div
              className="flex items-center gap-1 rounded-full px-2.5 py-1"
              style={{
                backgroundColor: "rgba(22,196,127,0.12)",
                border: "1px solid rgba(22,196,127,0.2)",
              }}
            >
              <ArrowUpRight className="h-3 w-3" style={{ color: "#16C47F" }} />
              <span className="text-[9px] font-bold" style={{ color: "#16C47F" }}>
                +18%
              </span>
            </div>
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
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {icon}
              <p className="mt-1.5 text-[9px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                {label}
              </p>
              <p className="mt-0.5 text-[11px] font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        {/* ── Family Circle card ── */}
        <div
          className="mt-2.5 rounded-[14px] p-[14px]"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Header row */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-semibold text-white">Family Circle</p>
              <p className="mt-0.5 text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                Monthly Contribution
              </p>
            </div>
            {/* Active badge — green accent, small surface */}
            <span
              className="rounded-full px-2 py-0.5 text-[9px] font-medium"
              style={{
                backgroundColor: "rgba(22,196,127,0.1)",
                color: "#16C47F",
              }}
            >
              Active
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="mt-3 h-[4px] w-full overflow-hidden rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "72%", backgroundColor: "#16C47F" }}
            />
          </div>

          {/* Labels */}
          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              72% Complete
            </span>
            <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              ₦720k / ₦1M
            </span>
          </div>

          {/* Member avatar stack — flat fills, no gradient, no glow */}
          <div className="mt-3 flex items-center">
            {[
              { initial: "A", bg: "#16C47F", text: "#07231A" },
              { initial: "B", bg: "#2A6EA6", text: "#ffffff" },
              { initial: "C", bg: "#7B52AB", text: "#ffffff" },
            ].map(({ initial, bg, text }, i) => (
              <div
                key={initial}
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full text-[9px] font-bold"
                style={{
                  backgroundColor: bg,
                  color: text,
                  border: "2px solid #111418",
                  marginLeft: i === 0 ? "0" : "-5px",
                }}
              >
                {initial}
              </div>
            ))}
            <div
              className="flex h-[24px] w-[24px] items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "2px solid #111418",
                marginLeft: "-5px",
              }}
            >
              +9
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
