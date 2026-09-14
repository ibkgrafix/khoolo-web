/*
  HeroIllustration — desktop abstract illustration for the VAUHLT hero.
  Replaces the old DashboardMockup (fake app screenshot).

  Concept: "The Circle" — loose orbital cluster of flat geometric
  shapes echoing VAUHLT's rotating contribution-circle product idea.
  No literal UI, no coins, no icons.

  Palette (strict VAUHLT tokens):
    Focal:    #16C47F  — large green disc + thin green ring echo
    Muted:    #171B20, #0F1113  — dark charcoal disc/ring masses
    Neutral:  rgba(255,255,255,0.85) — one off-white small disc
  No gradients on shapes. One ambient glow comes from Hero.tsx.

  Motion: slow, small-amplitude vertical float; one very slow rotation
  on the thin ring outline. Uses ease-in-out throughout.
  aria-hidden="true" — purely decorative.
*/
export default function HeroIllustration() {
  return (
    <>
      {/* Keyframes scoped to this component */}
      <style>{`
        @keyframes hi-float-a {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes hi-float-b {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
        @keyframes hi-float-c {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes hi-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hi-shape { animation: none !important; }
        }
      `}</style>

      <svg
        viewBox="0 0 480 480"
        width="480"
        height="480"
        aria-hidden="true"
        className="block"
        style={{ overflow: "visible" }}
      >
        {/*
          Layer order (back to front):
          1. Large hollow ring — dark charcoal mass
          2. Thin green ring echo — bottom-right orbit
          3. Capsule — top area variety shape
          4. Medium disc — top-left orbit
          5. Tiny disc — bottom-left
          6. Off-white disc — top-right contrast
          7. Large green disc — focal point, front center
        */}

        {/* 1. Large hollow ring — dark, subtle white rim */}
        <circle
          cx="240" cy="240" r="130"
          fill="#171B20"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="28"
          className="hi-shape"
          style={{
            animation: "hi-float-a 10s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />

        {/* 2. Thin green ring echo — bottom-right, very slow rotation */}
        {/* Rendered as a group so rotation origin is the shape's own center */}
        <g
          className="hi-shape"
          style={{
            transformOrigin: "338px 334px",
            animation: "hi-float-b 11s ease-in-out infinite, hi-spin 90s linear infinite",
            animationDelay: "-1.5s, 0s",
          }}
        >
          <circle
            cx="338" cy="334" r="52"
            fill="none"
            stroke="#16C47F"
            strokeWidth="2"
            strokeOpacity="0.28"
          />
        </g>

        {/* 3. Capsule — top area, one non-circle for variety */}
        <rect
          x="288" y="78" width="74" height="22" rx="11"
          fill="#171B20"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          className="hi-shape"
          style={{
            animation: "hi-float-c 8s ease-in-out infinite",
            animationDelay: "-4s",
          }}
        />

        {/* 4. Medium disc — top-left orbit */}
        <circle
          cx="118" cy="112" r="34"
          fill="#0F1113"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
          className="hi-shape"
          style={{
            animation: "hi-float-b 12s ease-in-out infinite",
            animationDelay: "-3s",
          }}
        />

        {/* 5. Tiny disc — bottom-left */}
        <circle
          cx="150" cy="362" r="14"
          fill="#0F1113"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          className="hi-shape"
          style={{
            animation: "hi-float-a 13s ease-in-out infinite",
            animationDelay: "-8s",
          }}
        />

        {/* 6. Off-white disc — top-right, neutral contrast shape */}
        <circle
          cx="360" cy="138" r="18"
          fill="rgba(255,255,255,0.88)"
          className="hi-shape"
          style={{
            animation: "hi-float-c 9s ease-in-out infinite",
            animationDelay: "-6s",
          }}
        />

        {/* 7. Large green disc — focal point */}
        {/*
          Moves together with the large dark ring behind it so they
          read as a single "face" — same animation timing.
        */}
        <circle
          cx="240" cy="240" r="72"
          fill="#16C47F"
          className="hi-shape"
          style={{
            animation: "hi-float-a 10s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />
      </svg>
    </>
  );
}
