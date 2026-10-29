"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/site";

export function BusinessCardObject({
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
        href="/contact"
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-vermilion rounded-lg transition-transform duration-300"
        aria-label="Contact Asib Mahmud (Business card object on workbench)"
      >
        <div
          className={`relative bg-[#161B22] rounded-xs p-5 border border-[#30363D] transition-all duration-300 ${
            isMobile
              ? "w-full max-w-md mx-auto shadow-desk-card"
              : "w-[280px] lg:w-[300px] shadow-desk-card group-hover:shadow-desk-lift group-hover:-translate-y-1 group-hover:scale-[1.03]"
          }`}
          style={{ transform: isMobile ? "none" : "rotate(2deg)" }}
        >
          {/* Subtle textured edge */}
          <div className="flex items-start justify-between border-b border-[#30363D] pb-3">
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-white block">
                {siteConfig.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-olive block mt-0.5">
                Software &amp; Web Engineer
              </span>
            </div>
            <div className="w-6 h-6 rounded border border-vermilion/50 bg-vermilion/10 flex items-center justify-center font-mono text-[10px] text-vermilion font-bold">
              AM
            </div>
          </div>

          <div className="mt-3 space-y-1 font-mono text-[10px] text-ink/80">
            <div className="flex items-center gap-1.5 text-olive">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-ping"></span>
              <span>Dhaka, Bangladesh (UTC+6)</span>
            </div>
            <div className="truncate text-highlighter font-medium">
              {siteConfig.email}
            </div>
            <div className="text-[9px] text-olive">
              Remote Contract &amp; Freelance
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-[#30363D] flex items-center justify-between font-mono text-[9px] text-olive">
            <span>Direct Channel</span>
            <span className="text-vermilion font-semibold">get in touch →</span>
          </div>
        </div>
      </Link>

      {/* Hover Floating Handwritten Label */}
      <div
        className={`pointer-events-none absolute -bottom-5 right-4 transition-all duration-200 z-20 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
        aria-hidden="true"
      >
        <span className="inline-block -rotate-1 bg-[#21262D] px-2 py-0.5 text-xs font-hand font-bold text-highlighter shadow-sm rounded-xs border border-[#30363D]">
          start a conversation →
        </span>
      </div>
    </div>
  );
}
