"use client";

import Link from "next/link";
import { useState } from "react";

export function LaptopObject({
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
        href="/work"
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-vermilion rounded-lg transition-transform duration-300"
        aria-label="View Project Index (Laptop object on workbench)"
      >
        {/* Laptop Body Shell */}
        <div
          className={`relative bg-[#0D1117] rounded-xl p-3 sm:p-4 text-paper transition-all duration-300 ${
            isMobile
              ? "w-full max-w-md mx-auto shadow-desk-card"
              : "w-[340px] lg:w-[380px] shadow-desk-card group-hover:shadow-desk-lift group-hover:-translate-y-1 group-hover:scale-[1.02]"
          } border border-[#30363D]`}
        >
          {/* Top bezel camera dot */}
          <div className="flex items-center justify-between pb-2 px-1 border-b border-[#21262D]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5555] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F1FA8C] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#50FA7B] inline-block"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#000000] inline-block"></span>
              <span className="font-mono text-[9px] text-olive uppercase tracking-widest">
                asib-term :: tmux
              </span>
            </div>
            <span className="font-mono text-[9px] text-vermilion font-medium">LIVE</span>
          </div>

          {/* Screen Content: Looping Code / Build Terminal Preview */}
          <div className="relative mt-2.5 h-36 sm:h-44 w-full overflow-hidden rounded bg-[#05070A] p-3 font-mono text-[11px] leading-relaxed border border-[#21262D]">
            {/* Screen Scanlines / Glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#21262D]/10 to-[#000000]/40" />

            <div className="text-paper/90 space-y-1">
              <div className="text-olive flex items-center justify-between">
                <span>$ git log --oneline -n 3</span>
                <span className="text-[9px] text-[#50FA7B]">● deploy: passed</span>
              </div>
              <div className="text-vermilion">f3a09e1 feat(cv): TensorRT INT8 pipeline</div>
              <div className="text-[#F1FA8C]">88bc2d0 perf(wp): edge micro-cache enabled</div>
              <div className="text-[#8BE9FD]">1b04a92 arch(data): kafka stream partition</div>

              <div className="pt-2 text-paper/70 border-t border-[#21262D] flex items-center gap-2">
                <span className="text-[#50FA7B]">➜</span>
                <span className="text-[#F1FA8C]">asib.dev</span>
                <span className="text-olive">&gt;</span>
                <span className="animate-pulse">npm run inspect-work</span>
              </div>

              {/* Looping code preview snippet */}
              <div className="mt-1 rounded bg-[#0D1117] p-1.5 text-[10px] text-paper/80 font-mono border border-[#21262D]">
                <span className="text-olive">// 3 flagship case studies ready</span>
                <div className="flex justify-between items-center text-paper/90 pt-0.5">
                  <span>CV Defect Model</span>
                  <span className="text-vermilion font-semibold">14.2ms</span>
                </div>
                <div className="flex justify-between items-center text-paper/90">
                  <span>High-Traffic WP Rebuild</span>
                  <span className="text-[#50FA7B] font-semibold">98/100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Keyboard Notch & Trackpad Outline */}
          <div className="mt-3 flex flex-col items-center gap-1.5 opacity-60">
            <div className="h-2 w-full rounded-sm bg-[#161B22] border border-[#21262D]" />
            <div className="h-5 w-24 rounded-sm bg-[#161B22] border border-[#21262D]" />
          </div>

          {/* Bottom subtle chassis highlight */}
          <div className="absolute -bottom-1 left-4 right-4 h-1 rounded-b-md bg-[#05070A]" />
        </div>
      </Link>

      {/* Handwritten Floating Hover Label */}
      <div
        className={`pointer-events-none absolute -bottom-6 right-2 sm:right-6 transition-all duration-200 z-20 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
        aria-hidden="true"
      >
        <span className="inline-block -rotate-3 bg-[#21262D] px-2 py-0.5 text-xs font-hand font-bold text-highlighter shadow-sm rounded-xs border border-[#30363D]">
          selected client work →
        </span>
      </div>
    </div>
  );
}
