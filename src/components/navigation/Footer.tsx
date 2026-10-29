"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

export function Footer() {
  const [dhakaTime, setDhakaTime] = useState<string>("");

  useEffect(() => {
    function updateDhakaTime() {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setDhakaTime(formatter.format(now));
      } catch {
        setDhakaTime("18:54:00");
      }
    }

    updateDhakaTime();
    const interval = setInterval(updateDhakaTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 border-t border-[#30363D] bg-[#0A0D12] pt-16 pb-12 text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Magazine / Dev Colophon Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#30363D]">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
                Studio Colophon
              </span>
              <span className="text-olive/50">—</span>
              <span className="font-mono text-xs uppercase text-olive">Vol. 2026 // Dark Edition</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white max-w-md">
              Building dependable software and web systems from Dhaka.
            </h2>
            <p className="font-body text-sm text-olive leading-relaxed max-w-sm">
              Available for freelance engineering, technical consulting, and international remote contracts.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-olive block mb-2 font-semibold">
              Location &amp; Time
            </span>
            <div className="flex items-center gap-2 text-ink">
              <span className="h-2 w-2 rounded-full bg-vermilion"></span>
              <span>Dhaka, Bangladesh (UTC+6)</span>
            </div>
            <div className="text-sm font-semibold tracking-wider text-highlighter font-mono bg-[#161B22] px-2.5 py-1.5 rounded border border-[#30363D] inline-block">
              {dhakaTime ? `${dhakaTime} BST` : "Asia/Dhaka"}
            </div>
            <p className="text-[11px] text-olive leading-normal">
              Regular daylight overlap with US East, Europe, and Australia.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-olive block mb-2 font-semibold">
              Direct Inquiries
            </span>
            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white font-medium underline underline-offset-4 decoration-vermilion hover:text-vermilion transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="text-olive hover:text-highlighter transition-colors"
              >
                GitHub →
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-olive hover:text-highlighter transition-colors"
              >
                LinkedIn →
              </a>
              <Link href="/contact" className="text-vermilion font-semibold">
                Book a Call →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-olive">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Asib Mahmud.</span>
            <span>•</span>
            <span className="font-hand text-sm text-highlighter lowercase">
              typeset in Fraunces, JetBrains Mono &amp; Instrument Sans
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Return to Workbench
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-vermilion transition-colors flex items-center gap-1"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
