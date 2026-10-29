"use client";

import { useEffect, useState, useRef } from "react";
import { motion, type Transition } from "framer-motion";
import { LaptopObject } from "./LaptopObject";
import { NotebookObject } from "./NotebookObject";
import { StickyCluster } from "./StickyCluster";
import { PolaroidsObject } from "./PolaroidsObject";
import { BusinessCardObject } from "./BusinessCardObject";
import { CoffeeMugObject } from "./CoffeeMugObject";
import { HireMeSticky } from "./HireMeSticky";
import { siteConfig } from "@/content/site";

export function Workbench() {
  const [hasPlayedIntro, setHasPlayedIntro] = useState(true); // Default true for SSR safety
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    // Check session storage for intro animation
    const played = sessionStorage.getItem("desk-intro-played");
    if (!played && !mediaQuery.matches) {
      setHasPlayedIntro(false);
      sessionStorage.setItem("desk-intro-played", "true");
    }
  }, []);

  // Parallax mouse move handler (max 12px delta)
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: Math.max(-1, Math.min(1, x * 2)), y: Math.max(-1, Math.min(1, y * 2)) });
  }

  function handleMouseLeave() {
    setMousePos({ x: 0, y: 0 });
  }

  // Helper for drop spring animation
  const dropTransition = (delay: number): Transition => {
    if (reducedMotion || hasPlayedIntro) {
      return { duration: 0.1 };
    }
    return {
      type: "spring",
      stiffness: 140,
      damping: 15,
      delay,
    };
  };

  return (
    <section
      aria-label="Interactive Workbench Navigation"
      className="relative w-full overflow-hidden"
    >
      {/* ---------------------------------------------------- */}
      {/* Editorial Headline Bar above the desk               */}
      {/* ---------------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#30363D] pb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
                // Workbench &bull; Home
              </span>
              <span className="text-olive/50">—</span>
              <span className="font-hand text-base text-highlighter">
                click any object on the desk to explore
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
              {siteConfig.tagline}
            </h1>
          </div>

          <div className="max-w-md font-body text-sm sm:text-base text-olive leading-relaxed">
            <p>{siteConfig.elevatorPitch}</p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* DESKTOP WORKBENCH (Display on large viewports >= 1024px) */}
      {/* ---------------------------------------------------- */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hidden lg:block relative w-full h-[720px] xl:h-[760px] bg-desk-surface border-y border-[#30363D] shadow-inner select-none overflow-hidden"
      >
        {/* Subtle desk dark lighting vignette & ambient code glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-vermilion/5 rounded-full blur-3xl" />

        {/* 1. NOTEBOOK (Left: About & Process) */}
        <motion.div
          initial={{ y: hasPlayedIntro ? 0 : -80, opacity: hasPlayedIntro ? 1 : 0 }}
          animate={{
            y: mousePos.y * 10,
            x: mousePos.x * 10,
            opacity: 1,
          }}
          transition={dropTransition(0.12)}
          className="absolute top-14 left-8 xl:left-14 z-20"
        >
          <NotebookObject />
        </motion.div>

        {/* 2. LAPTOP (Center: Work Index) */}
        <motion.div
          initial={{ y: hasPlayedIntro ? 0 : -90, opacity: hasPlayedIntro ? 1 : 0 }}
          animate={{
            y: mousePos.y * 7,
            x: mousePos.x * 7,
            opacity: 1,
          }}
          transition={dropTransition(0.05)}
          className="absolute top-8 left-[38%] -translate-x-1/2 z-20"
        >
          <LaptopObject />
        </motion.div>

        {/* 3. COFFEE MUG EASTER EGG (Top Left-Center between notebook & laptop) */}
        <motion.div
          initial={{ y: hasPlayedIntro ? 0 : -65, opacity: hasPlayedIntro ? 1 : 0 }}
          animate={{
            y: mousePos.y * 4,
            x: mousePos.x * 4,
            opacity: 1,
          }}
          transition={dropTransition(0.35)}
          className="absolute top-12 left-[25%] xl:left-[27%] z-20"
        >
          <CoffeeMugObject />
        </motion.div>

        {/* 4. STICKY NOTES CLUSTER (Right: Skills) */}
        <motion.div
          initial={{ y: hasPlayedIntro ? 0 : -85, opacity: hasPlayedIntro ? 1 : 0 }}
          animate={{
            y: mousePos.y * 6,
            x: mousePos.x * 6,
            opacity: 1,
          }}
          transition={dropTransition(0.22)}
          className="absolute top-10 right-8 xl:right-14 z-20"
        >
          <StickyCluster />
        </motion.div>

        {/* 5. POLAROIDS STACK (Bottom Left: Activities & Community) */}
        <motion.div
          initial={{ y: hasPlayedIntro ? 0 : -75, opacity: hasPlayedIntro ? 1 : 0 }}
          animate={{
            y: mousePos.y * 11,
            x: mousePos.x * 11,
            opacity: 1,
          }}
          transition={dropTransition(0.32)}
          className="absolute bottom-6 left-12 xl:left-20 z-20"
        >
          <PolaroidsObject />
        </motion.div>

        {/* 6. BUSINESS CARD (Bottom Center: Contact) */}
        <motion.div
          initial={{ y: hasPlayedIntro ? 0 : -70, opacity: hasPlayedIntro ? 1 : 0 }}
          animate={{
            y: mousePos.y * 9,
            x: mousePos.x * 9,
            opacity: 1,
          }}
          transition={dropTransition(0.45)}
          className="absolute bottom-10 left-[42%] -translate-x-1/2 z-20"
        >
          <BusinessCardObject />
        </motion.div>

        {/* 7. HIRE ME STICKY (Prominent Focal Point, Bottom Right) */}
        <motion.div
          initial={{ y: hasPlayedIntro ? 0 : -95, opacity: hasPlayedIntro ? 1 : 0 }}
          animate={{
            y: mousePos.y * 12,
            x: mousePos.x * 12,
            opacity: 1,
          }}
          transition={dropTransition(0.55)}
          className="absolute bottom-10 right-14 xl:right-24 z-30"
        >
          <HireMeSticky />
        </motion.div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MOBILE & TABLET DESK STRIP (< 1024px Vertical Stack) */}
      {/* ---------------------------------------------------- */}
      <div className="lg:hidden bg-desk-surface py-10 px-4 border-y border-[#30363D] space-y-8">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-olive bg-[#161B22] border border-[#30363D] px-3 py-1 rounded">
            // mobile desk strip
          </span>
          <p className="font-hand text-base text-highlighter mt-2">
            tap any desk item below to enter that section
          </p>
        </div>

        {/* Mobile Stacked Items with preserved textures and angles */}
        <div className="space-y-8 max-w-sm mx-auto">
          {/* Hire Me sticky note pinned at the very top of mobile strip */}
          <HireMeSticky isMobile={true} />

          {/* Laptop -> Work */}
          <LaptopObject isMobile={true} />

          {/* Notebook -> About */}
          <NotebookObject isMobile={true} />

          {/* Sticky Notes -> Skills */}
          <StickyCluster isMobile={true} />

          {/* Polaroids -> Activities */}
          <PolaroidsObject isMobile={true} />

          {/* Business Card -> Contact */}
          <BusinessCardObject isMobile={true} />

          {/* Coffee Mug Easter Egg */}
          <div className="flex justify-center pt-2">
            <CoffeeMugObject />
          </div>
        </div>
      </div>
    </section>
  );
}
