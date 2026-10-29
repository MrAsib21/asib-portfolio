"use client";

import Link from "next/link";
import { useState } from "react";
import { MaskingTape } from "@/components/editorial/Doodles";

export function PolaroidsObject({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href="/activities"
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-vermilion rounded-lg transition-transform duration-300"
        aria-label="View University Activities, Teamwork & Community (Polaroids stack)"
      >
        <div
          className={`relative ${
            isMobile
              ? "w-full max-w-md mx-auto"
              : "w-[260px] h-[280px]"
          }`}
        >
          {/* Bottom Underneath Polaroid (slight rotation) */}
          <div
            className={`absolute bg-[#161B22] p-2.5 pb-6 border border-[#30363D] rounded-xs shadow-desk-card transition-all duration-300 ${
              isMobile
                ? "hidden"
                : "top-4 left-4 w-52 h-64 -rotate-6 group-hover:-rotate-8 group-hover:scale-102"
            }`}
          >
            <div className="w-full h-44 bg-[#0D1117] border border-[#30363D] flex items-center justify-center p-2 text-center">
              <span className="font-mono text-[9px] text-olive uppercase tracking-wider">
                Hackathon Sprint Whiteboard
              </span>
            </div>
            <div className="mt-2 text-center font-hand text-xs text-ink/80">
              Team pitch at 4 AM [2024]
            </div>
          </div>

          {/* Top Primary Polaroid */}
          <div
            className={`relative bg-[#1C2128] p-2.5 pb-7 border border-[#30363D] rounded-xs shadow-polaroid transition-all duration-300 ${
              isMobile
                ? "w-full max-w-sm mx-auto"
                : "top-0 left-0 w-56 h-70 rotate-3 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-desk-lift"
            }`}
          >
            {/* Masking tape on top center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <MaskingTape className="w-16 h-5" />
            </div>

            {/* Photo frame placeholder */}
            <div className="relative w-full h-44 sm:h-48 bg-[#0D1117] overflow-hidden flex flex-col items-center justify-center p-3 text-center border border-[#30363D]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-highlighter font-semibold">
                Campus Tech Workshop
              </div>
              <div className="font-mono text-[9px] text-olive mt-1 max-w-[160px]">
                [Mentoring 40+ engineering students on web &amp; Python]
              </div>
              <div className="mt-2 text-[10px] font-mono text-vermilion bg-[#161B22] px-2 py-0.5 rounded border border-[#30363D]">
                Frame #01
              </div>
            </div>

            {/* Handwritten Polaroid Caption */}
            <div className="mt-2.5 text-center font-hand text-sm font-bold text-ink leading-tight">
              Community &amp; Teamwork [2024-25]
            </div>
            <div className="text-center font-mono text-[9px] text-olive tracking-widest uppercase">
              tap to browse photo wall →
            </div>
          </div>
        </div>
      </Link>

      {/* Floating handwritten label */}
      <div
        className={`pointer-events-none absolute -bottom-5 right-2 transition-all duration-200 z-20 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
        aria-hidden="true"
      >
        <span className="inline-block -rotate-2 bg-[#21262D] px-2 py-0.5 text-xs font-hand font-bold text-highlighter shadow-sm rounded-xs border border-[#30363D]">
          activities &amp; community →
        </span>
      </div>
    </div>
  );
}
