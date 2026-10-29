"use client";

import Link from "next/link";
import { useState } from "react";
import { MaskingTape, ScribbleUnderline } from "@/components/editorial/Doodles";

export function HireMeSticky({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group z-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href="/contact"
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-vermilion rounded-sm transition-transform duration-300"
        aria-label="Hire Asib Mahmud — Start a Conversation (Fluorescent Sticky Note)"
      >
        <div
          className={`relative bg-[#2E280C] text-[#FFF9D4] p-4 sm:p-5 border-b-4 border-r-4 border-[#695817] border-t border-l border-[#8A7520] shadow-desk-card transition-all duration-300 ${
            isMobile
              ? "w-full max-w-xs mx-auto"
              : "w-48 sm:w-52 group-hover:shadow-desk-lift group-hover:-translate-y-2 group-hover:scale-105"
          }`}
          style={{ transform: isMobile ? "none" : "rotate(-3deg)" }}
        >
          {/* Tape strip at top */}
          <div className="absolute -top-3 left-8 z-10 pointer-events-none">
            <MaskingTape className="w-16 h-5" />
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#F0D351] font-bold">
            <span>PRIORITY_SIGNAL</span>
            <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" />
          </div>

          <div className="mt-2 font-hand text-2xl sm:text-3xl font-bold leading-none text-white">
            Hire me!
          </div>

          <div className="w-24 mt-1">
            <ScribbleUnderline className="text-vermilion" />
          </div>

          <p className="mt-2 font-body text-xs text-[#E6EDF3] leading-tight">
            Taking on select freelance &amp; remote contracts for Q4 &apos;26.
          </p>

          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-vermilion font-bold tracking-wider">
            <span>Direct Inquiry</span>
            <span>→</span>
          </div>

          {/* Peel corner effect */}
          <div
            className="absolute bottom-0 right-0 w-5 h-5 bg-[#594B15] pointer-events-none transition-transform duration-200"
            style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
          />
        </div>
      </Link>

      {/* Floating handwritten note */}
      <div
        className={`pointer-events-none absolute -bottom-5 left-2 transition-all duration-200 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
        aria-hidden="true"
      >
        <span className="font-hand text-xs text-highlighter font-semibold bg-[#161B22] px-1.5 py-0.5 rounded shadow-xs border border-[#30363D]">
          let&apos;s build something great →
        </span>
      </div>
    </div>
  );
}
