"use client";

/*
  FloatingAvatars — exactly 2 avatar bubbles, anchored to the
  dashboard card's top-left and bottom-right corners.

  Rendered as SIBLINGS of the scale wrapper in Hero.tsx (NOT
  descendants), so they are never clipped by the wrapper's
  overflow-hidden. They position absolute relative to the visual
  panel div, which has no overflow clipping.

  Spec: 34px circles, 2px #080A0C border, drop shadow for depth,
  green online indicator dot.
  Avatar 1 (top-left):    SJ — emerald green
  Avatar 2 (bottom-right): TJ — amber/orange
*/
export default function FloatingAvatars() {
  return (
    <>
      {/* ── Avatar 1: SJ — top-left corner of card ── */}
      <div
        className="absolute -left-4 -top-4 z-30 animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "0s" }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#16C47F]/40 blur-[8px]" />
          <div
            className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-400 text-[11px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            style={{ border: "2px solid #080A0C" }}
          >
            SJ
          </div>
          <div
            className="absolute -bottom-0.5 -right-0.5 h-[10px] w-[10px] rounded-full bg-[#16C47F]"
            style={{ border: "1.5px solid #080A0C" }}
          />
        </div>
      </div>

      {/* ── Avatar 2: TJ — bottom-right corner of card ── */}
      <div
        className="absolute -bottom-4 -right-4 z-30 animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-yellow-500/40 blur-[8px]" />
          <div
            className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-400 text-[11px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            style={{ border: "2px solid #080A0C" }}
          >
            TJ
          </div>
          <div
            className="absolute -bottom-0.5 -right-0.5 h-[10px] w-[10px] rounded-full bg-[#16C47F]"
            style={{ border: "1.5px solid #080A0C" }}
          />
        </div>
      </div>
    </>
  );
}
