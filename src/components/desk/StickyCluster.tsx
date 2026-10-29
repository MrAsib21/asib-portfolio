"use client";

import Link from "next/link";
import { useState } from "react";
import { skillGroups } from "@/content/skills";

export function StickyCluster({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const [activeNote, setActiveNote] = useState<string | null>(null);

  // Take the 4 primary notes for the desk cluster
  const primaryNotes = skillGroups.slice(0, 4);

  return (
    <div className="relative group">
      <Link
        href="/skills"
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-vermilion rounded-lg"
        aria-label="View Skills and Technical Inventory (Sticky notes cluster)"
      >
        <div
          className={`relative ${
            isMobile
              ? "w-full max-w-md mx-auto grid grid-cols-2 gap-3"
              : "w-[300px] h-[280px]"
          }`}
        >
          {primaryNotes.map((group, idx) => {
            const isHovered = activeNote === group.id;

            // Developer dark syntax colors for stickies
            const bgClass =
              group.colorTheme === "yellow"
                ? "bg-[#252210] border-[#5E521D] text-[#FFF4A3]"
                : group.colorTheme === "blue"
                ? "bg-[#112433] border-[#224A6A] text-[#BEE4F8]"
                : group.colorTheme === "green"
                ? "bg-[#122A1E] border-[#255C41] text-[#A6E8C2]"
                : "bg-[#2E1620] border-[#692A42] text-[#F9BFD3]";

            // Offsets for desktop overlapping fan
            const desktopPositions = [
              "top-0 left-2 z-10 -rotate-3",
              "top-2 right-2 z-20 rotate-4",
              "bottom-4 left-6 z-30 rotate-1",
              "bottom-0 right-4 z-40 -rotate-2",
            ];

            return (
              <div
                key={group.id}
                onMouseEnter={() => setActiveNote(group.id)}
                onMouseLeave={() => setActiveNote(null)}
                className={`transition-all duration-300 rounded-xs p-3 shadow-desk-card border ${bgClass} ${
                  isMobile
                    ? "relative min-h-[140px]"
                    : `absolute w-44 h-40 ${desktopPositions[idx]} ${
                        isHovered
                          ? "scale-105 z-50 shadow-desk-lift -translate-y-2"
                          : ""
                      }`
                }`}
                style={{
                  transformOrigin: "top left",
                }}
              >
                {/* Simulated sticky adhesive strip at top */}
                <div className="h-1.5 w-full bg-white/10 -mt-1 mb-2 rounded-xs pointer-events-none" />

                {/* Peel corner effect on hover */}
                <div
                  className={`absolute bottom-0 right-0 w-4 h-4 bg-white/10 transition-transform duration-200 pointer-events-none ${
                    isHovered ? "scale-150 rotate-45" : "scale-100"
                  }`}
                  style={{
                    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  }}
                />

                <span className="font-mono text-[9px] uppercase tracking-wider opacity-75 font-semibold block">
                  // {group.id}
                </span>

                <h3 className="font-display text-sm font-bold leading-tight mt-0.5 text-white">
                  {group.shortLabel}
                </h3>

                {/* Bullet specifics revealed */}
                <ul className="mt-2 space-y-1 font-mono text-[10px] opacity-90 leading-snug">
                  {group.skills.slice(0, 3).map((s) => (
                    <li key={s.name} className="truncate">
                      &gt; {s.name}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-2 left-3 font-hand text-xs text-highlighter opacity-90">
                  full stack →
                </div>
              </div>
            );
          })}
        </div>
      </Link>

      {/* Floating handwritten annotation */}
      <div
        className="pointer-events-none absolute -bottom-5 right-2 opacity-90 transition-opacity hidden sm:block"
        aria-hidden="true"
      >
        <span className="font-hand text-sm text-olive">
          5 skill groups (no fake % bars)
        </span>
      </div>
    </div>
  );
}
