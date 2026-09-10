import { Bell, Target, Users, Wallet } from "lucide-react";

/*
  MobileDashboard — dedicated mobile-only dashboard card.
  NOT a scaled clone of DashboardMockup. Designed natively at
  mobile widths with its own type scale, spacing, and layout.
  Shown on <lg; DashboardMockup is shown on lg+.
*/
export default function MobileDashboard() {
  return (
    <div className="w-full rounded-[22px] border border-white/[0.08] bg-[#111418] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">

      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-white/50">Good evening</p>
          <p className="mt-0.5 text-[15px] font-bold text-white">Samuel</p>
        </div>
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-white/[0.05]"
        >
          <Bell className="h-[14px] w-[14px] text-white/70" />
        </button>
      </div>

      {/* ── Total Savings card ── */}
      <div
        className="mt-3 rounded-[18px] p-4"
        style={{ backgroundColor: "#16C47F" }}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-medium text-[#07231A]/75">
              Total savings
            </p>
            <p className="mt-1 text-[22px] font-bold leading-none text-[#07231A]">
              ₦1,250,000
            </p>
          </div>
          {/* +18% pill */}
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-bold text-[#07231A]"
            style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
          >
            +18%
          </span>
        </div>
      </div>

      {/* ── KPI tiles ── */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          {
            icon: <Wallet className="h-[14px] w-[14px]" style={{ color: "#5DCAA5" }} />,
            label: "Wallet",
            value: "₦320k",
          },
          {
            icon: <Target className="h-[14px] w-[14px]" style={{ color: "#EF9F27" }} />,
            label: "Goals",
            value: "6 Active",
          },
          {
            icon: <Users className="h-[14px] w-[14px]" style={{ color: "#378ADD" }} />,
            label: "Members",
            value: "12",
          },
        ].map(({ icon, label, value }) => (
          <div
            key={label}
            className="rounded-[12px] p-[10px]"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {icon}
            <p className="mt-1.5 text-[9px] text-white/50">{label}</p>
            <p className="mt-0.5 text-[12px] font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* ── Family Circle card ── */}
      <div
        className="mt-3 rounded-[16px] p-[14px]"
        style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Header row */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[12px] font-bold text-white">Family circle</p>
            <p className="mt-0.5 text-[9px] text-white/50">Monthly contribution</p>
          </div>
          {/* Active badge */}
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
            style={{
              backgroundColor: "rgba(22,196,127,0.15)",
              color: "#16C47F",
            }}
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

        {/* Progress labels */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[9px] text-white/50">72% complete</span>
          <span className="text-[9px] text-white/50">₦720k / ₦1M</span>
        </div>

        {/* Member avatars — 26px circles, -4px overlap */}
        <div className="mt-3 flex items-center">
          {["A", "B", "C"].map((initial) => (
            <div
              key={initial}
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#111418] text-[10px] font-bold"
              style={{
                backgroundColor: "#16C47F",
                color: "#07231A",
                marginLeft: initial === "A" ? "0" : "-4px",
              }}
            >
              {initial}
            </div>
          ))}
          {/* +9 overflow circle */}
          <div
            className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#111418] text-[9px] font-bold text-white"
            style={{
              backgroundColor: "rgba(255,255,255,0.10)",
              marginLeft: "-4px",
            }}
          >
            +9
          </div>
        </div>
      </div>

    </div>
  );
}
