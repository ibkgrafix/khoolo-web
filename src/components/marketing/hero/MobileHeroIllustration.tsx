/*
  MobileHeroIllustration — mobile/tablet version of the hero illustration.
  Simpler than the desktop: 4 shapes + member dots, tighter composition.
  Same design principles: lighter charcoal fills, subtle drop shadow,
  radial highlight on green disc, member dots on ring inner edge.
  aria-hidden="true" — purely decorative.
*/
export default function MobileHeroIllustration() {
  return (
    <>
      <style>{`
        @keyframes mhi-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
        @keyframes mhi-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mhi-animate { animation: none !important; }
        }
      `}</style>

      <svg
        viewBox="0 0 320 220"
        width="100%"
        aria-hidden="true"
        className="block"
        style={{ overflow: "visible", maxWidth: "360px" }}
      >
        <defs>
          <filter id="mhi-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0" dy="3" stdDeviation="6"
              floodColor="rgba(0,0,0,0.5)"
            />
          </filter>

          <radialGradient
            id="mhi-green-light"
            cx="35%" cy="28%" r="65%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#28E091" stopOpacity="1" />
            <stop offset="100%" stopColor="#16C47F" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* 1. Large dark hollow ring */}
        {/* fill #1C2228 — lighter charcoal so it reads as a surface */}
        <circle
          cx="160" cy="110" r="88"
          fill="#1C2228"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="18"
          className="mhi-animate"
          style={{ animation: "mhi-float 11s ease-in-out infinite", animationDelay: "0s" }}
        />

        {/* 2. Thin green ring echo — slow rotation, top-right */}
        <g
          className="mhi-animate"
          style={{
            transformOrigin: "262px 60px",
            animation: "mhi-float 13s ease-in-out infinite, mhi-spin 90s linear infinite",
            animationDelay: "-2s, 0s",
          }}
        >
          <circle
            cx="262" cy="60" r="36"
            fill="none"
            stroke="#16C47F"
            strokeWidth="1.5"
            strokeOpacity="0.32"
          />
        </g>

        {/* 3. Member dots on ring inner edge (3 dots, evenly spaced) */}
        {[60, 180, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const orbR = 68; // inside the ring hole
          const x = 160 + orbR * Math.cos(rad);
          const y = 110 + orbR * Math.sin(rad);
          return (
            <circle
              key={deg}
              cx={x} cy={y} r="5"
              fill="rgba(255,255,255,0.2)"
            />
          );
        })}

        {/* 4. Off-white disc — left orbit */}
        <circle
          cx="58" cy="76" r="13"
          fill="rgba(255,255,255,0.82)"
          filter="url(#mhi-shadow)"
        />

        {/* 5. Green focal disc — smaller so ring clearly surrounds it */}
        {/* ring inner r = 88-9 = 79. green r = 48. gap = 31px each side. */}
        <circle
          cx="160" cy="110" r="48"
          fill="url(#mhi-green-light)"
          filter="url(#mhi-shadow)"
          className="mhi-animate"
          style={{ animation: "mhi-float 11s ease-in-out infinite", animationDelay: "0s" }}
        />
      </svg>
    </>
  );
}
