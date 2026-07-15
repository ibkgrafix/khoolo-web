export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(22,196,127,.18),transparent_42%),radial-gradient(circle_at_top,#101317_0%,#080A0C_60%,#060708_100%)]" />

      {/* Main Glow */}

      <div className="absolute right-[12%] top-1/2 h-[780px] w-[780px] -translate-y-1/2 rounded-full bg-[#16C47F]/15 blur-[170px]" />

      {/* Inner Glow */}

      <div className="absolute right-[18%] top-[45%] h-[500px] w-[500px] rounded-full bg-[#16C47F]/12 blur-[120px]" />

      {/* Soft White Glow */}

      <div className="absolute left-[18%] top-[18%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[180px]" />

      {/* Orbit 1 */}

      <div className="absolute right-[6%] top-[8%] h-[720px] w-[720px] rounded-full border border-[#16C47F]/8" />

      {/* Orbit 2 */}

      <div className="absolute right-[10%] top-[14%] h-[620px] w-[620px] rounded-full border border-white/5" />

      {/* Orbit 3 */}

      <div className="absolute right-[14%] top-[20%] h-[520px] w-[520px] rounded-full border border-[#16C47F]/10" />

      {/* Orbit 4 */}

      <div className="absolute right-[18%] top-[26%] h-[420px] w-[420px] rounded-full border border-white/5" />

      {/* Dashed Orbit */}

      <div className="absolute right-[9%] top-[11%] h-[670px] w-[670px] rounded-full border border-dashed border-[#16C47F]/10" />

      {/* Left Ring */}

      <div className="absolute left-[10%] top-[25%] h-56 w-56 rounded-full border border-white/[0.04]" />

      {/* Tiny Particles */}

      <span className="absolute left-[14%] top-[22%] h-2 w-2 rounded-full bg-white/20" />
      <span className="absolute left-[30%] top-[74%] h-2 w-2 rounded-full bg-[#16C47F]/60" />
      <span className="absolute left-[46%] top-[58%] h-1.5 w-1.5 rounded-full bg-white/20" />
      <span className="absolute left-[58%] top-[28%] h-2 w-2 rounded-full bg-[#16C47F]/60" />
      <span className="absolute right-[11%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#16C47F]" />
      <span className="absolute right-[18%] top-[62%] h-2 w-2 rounded-full bg-white/20" />
      <span className="absolute right-[28%] top-[38%] h-2 w-2 rounded-full bg-[#16C47F]/70" />
      <span className="absolute right-[36%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/30" />

      {/* Noise Texture */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080A0C] to-transparent" />

    </div>
  );
}