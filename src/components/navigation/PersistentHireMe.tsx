"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaskingTape } from "@/components/editorial/Doodles";

export function PersistentHireMe() {
  const pathname = usePathname();

  // Only show as persistent badge on inner pages (home page has the large desk sticky)
  if (pathname === "/" || pathname === "/contact") {
    return null;
  }

  return (
    <aside
      aria-label="Hire me quick shortcut"
      className="fixed bottom-6 right-6 z-30 transition-transform duration-200 hover:scale-105"
    >
      <Link
        href="/contact"
        className="group relative block w-32 p-3 bg-[#241F0A] text-[#FFF9D4] shadow-desk-card hover:shadow-desk-lift transition-all -rotate-3 hover:rotate-0 rounded-xs border-b-2 border-r-2 border-[#5E5018] border-t border-l border-[#7A681F]"
        title="Start a project with Asib Mahmud"
      >
        <MaskingTape className="-top-3 left-6 absolute w-14 h-4 scale-75" />
        <div className="font-mono text-[9px] uppercase tracking-wider text-[#F0D351] font-semibold">
          Now Booking
        </div>
        <div className="font-hand text-lg font-bold leading-tight text-white group-hover:text-vermilion transition-colors mt-0.5">
          Hire me! →
        </div>
        <div className="font-mono text-[9px] text-olive mt-1">
          Q4 &apos;26 / Remote
        </div>
      </Link>
    </aside>
  );
}
