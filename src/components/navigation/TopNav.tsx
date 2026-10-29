"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { useState, useEffect } from "react";

export function TopNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1117]/90 backdrop-blur-md border-b border-[#30363D] shadow-lg py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Monogram / Brand mark */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Asib Mahmud Portfolio — Return to Desk Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded border border-[#30363D] bg-[#161B22] text-highlighter font-mono text-xs font-bold tracking-tight group-hover:bg-vermilion group-hover:text-white group-hover:border-vermilion transition-colors shadow-sm">
            AM
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-semibold tracking-tight text-white group-hover:text-vermilion transition-colors">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-olive">
              Software &amp; Web Engineer
            </span>
          </div>
        </Link>

        {/* Desktop typographic navigation links */}
        <nav
          className="hidden md:flex items-center gap-1 sm:gap-2 rounded-full border border-[#30363D] bg-[#161B22]/90 px-4 py-1.5 shadow-desk-flat backdrop-blur-sm"
          aria-label="Primary navigation"
        >
          {siteConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isActive
                    ? "font-semibold text-highlighter"
                    : "text-olive hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-highlighter shadow-[0_0_8px_rgba(80,250,123,0.8)]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Availability indicator */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 rounded bg-[#161B22] border border-[#30363D] px-2.5 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlighter opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-highlighter"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-olive font-medium">
              Available Q4 &apos;26
            </span>
          </div>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded border border-vermilion bg-vermilion px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-vermilion-hover transition-colors shadow-sm"
          >
            Start a Project
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded border border-[#30363D] bg-[#161B22] text-white"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#30363D] bg-[#0D1117] px-4 pt-3 pb-6 shadow-desk-card animate-in fade-in duration-150">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded px-3 py-2 font-mono text-xs uppercase tracking-wider ${
                    isActive
                      ? "bg-vermilion/20 font-bold text-vermilion border border-vermilion/40"
                      : "text-ink hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-hand text-sm text-olive lowercase">
                    {item.deskObjectName}
                  </span>
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-[#30363D]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded bg-vermilion py-2 font-mono text-xs uppercase tracking-wider text-white font-semibold"
              >
                Start a Project →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
