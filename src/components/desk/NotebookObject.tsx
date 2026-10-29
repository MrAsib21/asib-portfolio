"use client";

import Link from "next/link";
import { useState } from "react";
import { PaperClip } from "@/components/editorial/Doodles";

export function NotebookObject({
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
        href="/about"
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-vermilion rounded-lg transition-transform duration-300"
        aria-label="Read About Asib Mahmud and Working Process (Open Notebook)"
      >
        {/* Notebook Spread Shell */}
        <div
          className={`relative bg-[#161B22] rounded-sm p-5 sm:p-6 text-ink border border-[#30363D] transition-all duration-300 ${
            isMobile
              ? "w-full max-w-md mx-auto shadow-desk-card"
              : "w-[320px] lg:w-[350px] shadow-desk-card group-hover:shadow-desk-lift group-hover:-translate-y-1 group-hover:scale-[1.02]"
          }`}
          style={{ transform: isMobile ? "none" : "rotate(-2deg)" }}
        >
          {/* Paperclip in corner */}
          <div className="absolute -top-3 left-6 z-10 pointer-events-none">
            <PaperClip className="w-5 h-12" />
          </div>

          {/* Stitched spine indicator on left */}
          <div className="absolute top-0 bottom-0 left-2 w-1 border-r-2 border-dashed border-[#30363D] pointer-events-none" />

          {/* Notebook Header */}
          <div className="pl-4 pb-2 border-b border-[#30363D] flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-olive font-semibold">
              Dev Notes :: 01
            </span>
            <span className="font-mono text-[9px] text-vermilion">
              // read-only
            </span>
          </div>

          {/* Lined Page Body with Red Margin */}
          <div className="relative mt-3 pl-4 pr-1 space-y-2 lined-paper font-hand text-base sm:text-lg leading-relaxed text-ink/90">
            {/* Vertical red margin rule */}
            <div className="absolute top-0 bottom-0 left-2.5 w-0.5 bg-vermilion/40 pointer-events-none" />

            <p className="font-bold text-ink text-lg sm:text-xl">
              How I work with clients:
            </p>
            <p className="text-sm sm:text-base leading-tight text-ink/80">
              1. Direct talk, no agency markup.
            </p>
            <p className="text-sm sm:text-base leading-tight text-ink/80">
              2. Fast interactive prototypes.
            </p>
            <p className="text-sm sm:text-base leading-tight text-ink/80">
              3. Ship code that someone else can read.
            </p>

            <div className="pt-2 text-xs font-mono text-highlighter uppercase tracking-wider">
              <span>Read complete notes →</span>
            </div>
          </div>

          {/* Bottom page curl indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-gradient-to-tl from-[#21262D] to-transparent pointer-events-none rounded-br-sm" />
        </div>
      </Link>

      {/* Hover Floating Handwritten Label */}
      <div
        className={`pointer-events-none absolute -bottom-5 left-4 transition-all duration-200 z-20 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
        aria-hidden="true"
      >
        <span className="inline-block rotate-2 bg-[#21262D] px-2 py-0.5 text-xs font-hand font-bold text-highlighter shadow-sm rounded-xs border border-[#30363D]">
          about &amp; client process →
        </span>
      </div>
    </div>
  );
}
