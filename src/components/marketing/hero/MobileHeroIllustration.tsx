/*
  MobileHeroIllustration — mobile/tablet version of the hero illustration.
  Simpler than the desktop: 4 shapes instead of 7, tighter composition
  that works well in the narrower single-column hero layout.
  Same palette rules as HeroIllustration.tsx.
  aria-hidden="true" — purely decorative.
*/
export default function MobileHeroIllustration() {
  return (
    <>
      <style>{`
        @keyframes mhi-float-a {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes mhi-float-b {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes mhi-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mhi-shape { animation: none !important; }
        }
      `}</style>

      <svg
        viewBox="0 0 320 220"
        width="100%"
        aria-hidden="true"
        className="block"
        style={{ overflow: "visible", maxWidth: "360px" }}
      >
        {/* 1. Large dark hollow ring — background mass */}
        <circle
          cx="160" cy="110" r="90"
          fill="#171B20"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="20"
          className="mhi-shape"
          style={{
            animation: "mhi-float-a 10s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />

        {/* 2. Thin green ring — top-right echo, slow rotation */}
        <g
          className="mhi-shape"
          style={{
            transformOrigin: "266px 62px",
            animation: "mhi-float-b 11s ease-in-out infinite, mhi-spin 90s linear infinite",
            animationDelay: "-2s, 0s",
          }}
        >
          <circle
            cx="266" cy="62" r="38"
            fill="none"
            stroke="#16C47F"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
        </g>

        {/* 3. Off-white small disc — left orbit position */}
        <circle
          cx="60" cy="80" r="14"
          fill="rgba(255,255,255,0.87)"
          className="mhi-shape"
          style={{
            animation: "mhi-float-b 9s ease-in-out infinite",
            animationDelay: "-5s",
          }}
        />

        {/* 4. Large green disc — focal point, centered */}
        <circle
          cx="160" cy="110" r="54"
          fill="#16C47F"
          className="mhi-shape"
          style={{
            animation: "mhi-float-a 10s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />
      </svg>
    </>
  );
}
