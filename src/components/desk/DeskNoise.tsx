import React from "react";

export function DeskNoiseFilters() {
  return (
    <svg className="hidden pointer-events-none absolute w-0 h-0" aria-hidden="true">
      <defs>
        {/* Subtle dark matrix scanline/noise */}
        <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.025 0"
          />
        </filter>

        {/* Tactile dark workstation surface */}
        <filter id="wood-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03 0.2"
            numOctaves="2"
            stitchTiles="stitch"
            result="woodNoise"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.1   0 0 0 0 0.15   0 0 0 0 0.2  0 0 0 0.08 0"
          />
        </filter>

        {/* Coffee blur filter */}
        <filter id="coffee-blur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
    </svg>
  );
}
