import PhoneScreen from "./PhoneScreen";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[285px] lg:w-[295px] -translate-y-2">

      {/* Main Glow */}

      <div className="absolute inset-0 scale-[1.2] rounded-full bg-[#16C47F]/14 blur-[95px]" />

      {/* Secondary Glow */}

      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16C47F]/8 blur-[110px]" />

      {/* Orbit Halo */}

      <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#16C47F]/8" />

      {/* Shadow */}

      <div className="absolute left-6 right-6 -bottom-5 h-6 rounded-full bg-black/45 blur-[26px]" />

      {/* Phone */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border-[7px]
          border-[#272C35]
          bg-[#0C0F13]
          shadow-[0_28px_75px_rgba(0,0,0,.6)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-[1.015]
        "
      >

        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-3 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}

        <PhoneScreen />

        {/* Glass Reflection */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent via-35% to-transparent" />

        {/* Metal Highlights */}

        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-white/8" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-white/10" />
        <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-white/8" />

      </div>
    </div>
  );
}