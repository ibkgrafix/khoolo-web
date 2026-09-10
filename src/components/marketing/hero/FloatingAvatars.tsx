"use client";

/*
  FloatingAvatars — 2 deliberate avatar bubbles anchored to the
  dashboard card edges. Positioned absolute inside the scale wrapper
  (which is relative z-20 in Hero.tsx), so they sit precisely at
  the card corners rather than floating disconnected in empty space.

  Sizes: 34px circles, 2px border matching section bg (#080A0C),
  subtle drop shadow for depth.
*/
export default function FloatingAvatars() {
  return (
    <>
      {/* Top-left — slightly overlaps the card's top-left corner */}
      <div
        className="absolute -left-4 -top-4 z-30 animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "0s" }}
      >
        <div className="relative">
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full bg-[#16C47F]/40 blur-md" />
          {/* Avatar */}
          <div
            className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-400 text-[11px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            style={{ border: "2px solid #080A0C" }}
          >
            AO
          </div>
          {/* Online dot */}
          <div
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#16C47F]"
            style={{ border: "1.5px solid #080A0C" }}
          />
        </div>
      </div>

      {/* Bottom-right — slightly overlaps the card's bottom-right corner */}
      <div
        className="absolute -bottom-4 -right-4 z-30 animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="relative">
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full bg-sky-500/40 blur-md" />
          {/* Avatar */}
          <div
            className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-[11px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            style={{ border: "2px solid #080A0C" }}
          >
            MK
          </div>
          {/* Online dot */}
          <div
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#16C47F]"
            style={{ border: "1.5px solid #080A0C" }}
          />
        </div>
      </div>
    </>
  );
}
