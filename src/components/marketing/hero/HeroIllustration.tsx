/*
  HeroIllustration — desktop abstract illustration for the VAUHLT hero.
  Concept: "The Circle" — an orbital composition of discs and rings
  echoing VAUHLT's rotating contribution-circle product idea.

  Palette (strict VAUHLT design tokens):
    Focal:   #16C47F  — large green disc (one clear focal point)
    Muted:   #1C2228  — dark-charcoal discs (lighter than #0F1113 so
                        they read as surfaces, not flat black holes)
    Neutral: rgba(255,255,255,0.82) — one off-white disc for contrast
    Rim:     rgba(255,255,255,0.12–0.15) — subtle lighter edge on discs

  Polish details:
    - Soft SVG drop-shadow filter on 3 shapes for layering depth
    - Very subtle radial highlight on the green disc (barely perceptible
      lighter-green toward top-left, suggesting light) — not a visible
      gradient band
    - 4 small "member" dots placed around the ring's inner edge,
      suggesting people seated in the circle — understated, consistent size
    - All shapes in the same visual family (circles/rings only — capsule
      removed)
    - Ring fill is lighter (#1C2228) so it reads as a surface not a void

  Motion: only 2 elements animate (green disc + ring move together,
  thin green ring orbits slowly). Everything else is static.
  aria-hidden="true" — purely decorative.
*/
export default function HeroIllustration() {
  return (
    <>
      <style>{`
        @keyframes hi-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes hi-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hi-animate { animation: none !important; }
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
        <defs>
          {/*
            Subtle drop shadow — soft, low-opacity. Applied to shapes
            that sit in front of the ring to suggest depth/layering.
          */}
          <filter id="hi-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0" dy="4" stdDeviation="8"
              floodColor="rgba(0,0,0,0.55)"
            />
          </filter>

          {/*
            Radial highlight on the focal green disc.
            Lighter green toward top-left (~35% cx, ~28% cy), fading to
            the base #16C47F — barely perceptible, just enough to suggest
            a light source and break the completely flat fill.
          */}
          <radialGradient
            id="hi-green-light"
            cx="35%" cy="28%" r="65%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#28E091" stopOpacity="1" />
            <stop offset="100%" stopColor="#16C47F" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* ─────────────────────────────────────────────────────────
            LAYER ORDER (back → front)
            1. Large hollow ring (background mass)
            2. Thin green ring echo (bottom-right orbit)
            3. Member dots on ring inner edge
            4. Top-left disc (overlaps ring rim, clearly in front)
            5. Bottom-left tiny disc
            6. Off-white disc (top-right)
            7. Small off-white accent disc (replaces removed capsule)
            8. Green focal disc (front-center, filter shadow)
        ───────────────────────────────────────────────────────── */}

        {/* 1. Large hollow ring ─────────────────────────────────── */}
        {/*
          fill #1C2228 so it reads as a dark surface, not a black void.
          strokeWidth=24 → inner hole r = 130-12 = 118, outer r = 142.
          Animates together with the green disc (same timing) so they
          move as a single visual unit.
        */}
        <circle
          cx="240" cy="240" r="130"
          fill="#1C2228"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="24"
          className="hi-animate"
          style={{ animation: "hi-float 11s ease-in-out infinite", animationDelay: "0s" }}
        />

        {/* 2. Thin green ring echo ──────────────────────────────── */}
        {/* Very slow rotation — suggests orbit/rotation */}
        <g
          className="hi-animate"
          style={{
            transformOrigin: "336px 332px",
            animation: "hi-float 13s ease-in-out infinite, hi-spin 90s linear infinite",
            animationDelay: "-2s, 0s",
          }}
        >
          <circle
            cx="336" cy="332" r="50"
            fill="none"
            stroke="#16C47F"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
        </g>

        {/* 3. Member dots on ring inner edge ───────────────────── */}
        {/*
          4 small dots placed around the inner boundary of the ring
          (radius ≈ 100 from center) at evenly-spaced angles.
          They suggest "members seated in the circle" without being
          literal. Consistent size (r=6), consistent opacity.
          Static — no animation — they provide quiet structural rhythm.
        */}
        {[30, 120, 210, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const r = 100;
          const x = 240 + r * Math.cos(rad);
          const y = 240 + r * Math.sin(rad);
          return (
            <circle
              key={deg}
              cx={x} cy={y} r="6"
              fill="rgba(255,255,255,0.22)"
            />
          );
        })}

        {/* 4. Top-left disc ─────────────────────────────────────── */}
        {/*
          Positioned so it clearly overlaps the ring's outer rim —
          intentional foreground overlap, not a "bite" taken out.
          Lighter fill (#1C2228) + brighter stroke so it reads as a
          surface sitting in front of the ring.
          Drop shadow reinforces the layering.
        */}
        <circle
          cx="112" cy="108" r="33"
          fill="#1C2228"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
          filter="url(#hi-shadow)"
        />

        {/* 5. Bottom-left tiny disc ─────────────────────────────── */}
        <circle
          cx="152" cy="366" r="13"
          fill="#1C2228"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />

        {/* 6. Off-white disc — top-right ────────────────────────── */}
        {/* One neutral-contrast shape. Drop shadow for depth. */}
        <circle
          cx="360" cy="136" r="18"
          fill="rgba(255,255,255,0.85)"
          filter="url(#hi-shadow)"
        />

        {/* 7. Small off-white accent disc ───────────────────────── */}
        {/* Replaces the removed capsule — stays in the circle family */}
        <circle
          cx="308" cy="88" r="11"
          fill="rgba(255,255,255,0.35)"
        />

        {/* 8. Large green focal disc ────────────────────────────── */}
        {/*
          r=60 (down from 72) — more ring space visible around it.
          Radial highlight: barely-perceptible lighter green toward
          top-left, suggesting a light source. Not a visible gradient.
          Drop shadow grounds it in front of the ring.
          Animates together with the ring (same timing).
        */}
        <circle
          cx="240" cy="240" r="60"
          fill="url(#hi-green-light)"
          filter="url(#hi-shadow)"
          className="hi-animate"
          style={{ animation: "hi-float 11s ease-in-out infinite", animationDelay: "0s" }}
        />
      </svg>
    </>
  );
}
