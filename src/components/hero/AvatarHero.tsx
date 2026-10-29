"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────
   FLOATING CODE BADGES
   ───────────────────────────────────────────────────────── */
const codeBadges = [
  { text: "const asib = new Engineer()", x: -260, y: -140, delay: 0.6 },
  { text: "git push origin main", x: 230, y: -100, delay: 0.9 },
  { text: "model.fit(X_train, y_train)", x: -290, y: 60, delay: 1.2 },
  { text: "npm run build ✓", x: 210, y: 120, delay: 0.7 },
  { text: "YOLOv8.predict(frame)", x: -220, y: 180, delay: 1.0 },
  { text: "$ python train.py --epochs 50", x: 180, y: 200, delay: 1.4 },
];

/* ─────────────────────────────────────────────────────────
   SKILL ORBIT PILLS
   ───────────────────────────────────────────────────────── */
const skillPills = [
  { label: "Next.js", color: "#E6EDF3", bg: "#21262D", r: 200, angle: 20 },
  { label: "Python", color: "#50FA7B", bg: "#0D2A1A", r: 210, angle: 95 },
  { label: "YOLOv8", color: "#FF5555", bg: "#2A0D0D", r: 195, angle: 170 },
  { label: "TypeScript", color: "#58A6FF", bg: "#0D1A2A", r: 205, angle: 250 },
  { label: "WordPress", color: "#BD93F9", bg: "#1A0D2A", r: 200, angle: 315 },
];

/* ─────────────────────────────────────────────────────────
   TYPING ANIMATION HOOK
   ───────────────────────────────────────────────────────── */
const INTRO_LINES = [
  "Software Engineering Graduate.",
  "I build web systems, custom ERP solution,",
  "data pipeline & Ai automation that actually ship.",
];

function useTypingAnimation(lines: string[], skipAnim: boolean) {
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (skipAnim) {
      setDisplayLines(lines);
      setDone(true);
      return;
    }
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), 28);
      return () => clearTimeout(t);
    } else {
      // Line complete — show it and move to next
      const t = setTimeout(() => {
        setDisplayLines((prev) => {
          const next = [...prev];
          next[currentLine] = line;
          return next;
        });
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines, skipAnim]);

  // Current partial line
  const partial =
    !done && currentLine < lines.length
      ? lines[currentLine].slice(0, currentChar)
      : "";

  return { displayLines, partial, done };
}

/* ─────────────────────────────────────────────────────────
   SVG AVATAR — stylised developer portrait
   Dark hoodie, subtle face, glowing halo ring
   ───────────────────────────────────────────────────────── */
function DeveloperAvatar({ pulse }: { pulse: boolean }) {
  return (
    <svg
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Defs */}
      <defs>
        {/* Glow halo */}
        <filter id="halo" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Soft face skin */}
        <radialGradient id="skinGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#C8A882" />
          <stop offset="100%" stopColor="#A07850" />
        </radialGradient>
        {/* Hoodie gradient */}
        <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C2128" />
          <stop offset="100%" stopColor="#0D1117" />
        </linearGradient>
        {/* Screen glow for laptop on hoodie */}
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#50FA7B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#50FA7B" stopOpacity="0" />
        </radialGradient>
        {/* Hair gradient */}
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1200" />
          <stop offset="100%" stopColor="#0D0900" />
        </linearGradient>
        {/* Halo ring gradient */}
        <linearGradient id="haloRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF5555" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#50FA7B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#58A6FF" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Decorative outer halo ring */}
      <circle
        cx="160"
        cy="170"
        r="145"
        stroke="url(#haloRing)"
        strokeWidth="1.5"
        strokeDasharray="8 5"
        opacity="0.5"
      />
      {/* Second inner ring */}
      <circle
        cx="160"
        cy="170"
        r="128"
        stroke="#30363D"
        strokeWidth="1"
        strokeDasharray="3 8"
        opacity="0.4"
      />

      {/* Glowing base circle (avatar bg) */}
      <circle
        cx="160"
        cy="170"
        r="115"
        fill="#161B22"
        stroke="#30363D"
        strokeWidth="1.5"
      />
      {/* Green glow under avatar */}
      <ellipse
        cx="160"
        cy="285"
        rx="80"
        ry="18"
        fill="#50FA7B"
        opacity="0.08"
      />

      {/* ── BODY / HOODIE ── */}
      {/* Torso */}
      <path
        d="M75 340 C60 290, 55 260, 70 230 C85 205, 110 195, 160 193 C210 195, 235 205, 250 230 C265 260, 260 290, 245 340 Z"
        fill="url(#hoodieGrad)"
      />
      {/* Hoodie kangaroo pocket outline */}
      <path
        d="M130 285 C130 275, 135 268, 160 268 C185 268, 190 275, 190 285 L188 305 C188 310, 185 312, 160 312 C135 312, 132 310, 132 305 Z"
        fill="#1C2128"
        stroke="#30363D"
        strokeWidth="1"
      />
      {/* Screen glow on hoodie chest */}
      <ellipse cx="160" cy="240" rx="50" ry="30" fill="url(#screenGlow)" />
      {/* Small terminal icon on hoodie */}
      <text
        x="145"
        y="244"
        fill="#50FA7B"
        fontSize="13"
        fontFamily="monospace"
        opacity="0.7"
      >
        &gt;_
      </text>

      {/* Hoodie drawstrings */}
      <path
        d="M147 198 C145 215, 143 225, 140 240"
        stroke="#30363D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M173 198 C175 215, 177 225, 180 240"
        stroke="#30363D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* ── NECK ── */}
      <rect
        x="143"
        y="175"
        width="34"
        height="28"
        rx="10"
        fill="url(#skinGrad)"
      />

      {/* ── HOODIE HOOD / COLLAR ── */}
      <path
        d="M110 205 C115 185, 130 175, 160 173 C190 175, 205 185, 210 205 L205 215 C195 200, 180 194, 160 193 C140 194, 125 200, 115 215 Z"
        fill="#21262D"
        stroke="#30363D"
        strokeWidth="1"
      />

      {/* ── HEAD ── */}
      <ellipse cx="160" cy="130" rx="52" ry="57" fill="url(#skinGrad)" />

      {/* ── HAIR ── */}
      {/* Main hair cap */}
      <path
        d="M108 118 C106 90, 115 68, 135 57 C148 50, 172 50, 185 57 C205 68, 214 90, 212 118 C205 100, 195 88, 183 82 C172 77, 162 78, 160 79 C155 78, 148 77, 137 82 C125 88, 115 100, 108 118 Z"
        fill="url(#hairGrad)"
      />
      {/* Side hair texture */}
      <path
        d="M108 118 C109 110, 110 102, 115 95 L115 125 C111 124, 109 122, 108 118 Z"
        fill="url(#hairGrad)"
      />
      <path
        d="M212 118 C211 110, 210 102, 205 95 L205 125 C209 124, 211 122, 212 118 Z"
        fill="url(#hairGrad)"
      />
      {/* Small natural hair strand */}
      <path
        d="M155 79 C152 72, 151 65, 155 60"
        stroke="#1A1200"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M162 78 C163 70, 165 63, 162 58"
        stroke="#1A1200"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ── EYES ── */}
      {/* Eye whites */}
      <ellipse cx="143" cy="130" rx="9" ry="7" fill="#F5F0E8" />
      <ellipse cx="177" cy="130" rx="9" ry="7" fill="#F5F0E8" />
      {/* Iris */}
      <circle cx="145" cy="131" r="5.5" fill="#3D2B1A" />
      <circle cx="179" cy="131" r="5.5" fill="#3D2B1A" />
      {/* Pupil */}
      <circle cx="146" cy="131" r="2.8" fill="#0D0900" />
      <circle cx="180" cy="131" r="2.8" fill="#0D0900" />
      {/* Eye shine */}
      <circle cx="148" cy="129" r="1.2" fill="white" opacity="0.9" />
      <circle cx="182" cy="129" r="1.2" fill="white" opacity="0.9" />
      {/* Eyelids upper */}
      <path
        d="M134 125 C137 122, 143 121, 152 125"
        stroke="#7A5C3A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M168 125 C171 122, 177 121, 186 125"
        stroke="#7A5C3A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eyebrows — slightly expressive */}
      <path
        d="M133 117 C137 113, 145 112, 153 114"
        stroke="#1A1200"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M167 114 C175 112, 183 113, 187 117"
        stroke="#1A1200"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── NOSE ── */}
      <path
        d="M158 140 C156 148, 154 153, 152 156 C155 159, 165 159, 168 156 C166 153, 164 148, 162 140"
        stroke="#A07050"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── MOUTH ── slight smile */}
      <path
        d="M149 166 C153 170, 161 172, 171 166"
        stroke="#7A4A30"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── EARS ── */}
      <ellipse
        cx="108"
        cy="133"
        rx="7"
        ry="11"
        fill="url(#skinGrad)"
        stroke="#A07850"
        strokeWidth="0.5"
      />
      <ellipse
        cx="212"
        cy="133"
        rx="7"
        ry="11"
        fill="url(#skinGrad)"
        stroke="#A07850"
        strokeWidth="0.5"
      />
      {/* Inner ear detail */}
      <path
        d="M110 128 C109 133, 110 138, 111 138"
        stroke="#A07050"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M210 128 C211 133, 210 138, 209 138"
        stroke="#A07050"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── STATUS INDICATORS ── tiny blinking dots on halo ring */}
      <circle
        cx="270"
        cy="110"
        r="5"
        fill="#50FA7B"
        opacity={pulse ? 1 : 0.3}
      />
      <circle cx="270" cy="110" r="9" fill="#50FA7B" opacity="0.1" />
      {/* Label */}
      <text
        x="278"
        y="114"
        fill="#50FA7B"
        fontSize="9"
        fontFamily="monospace"
        letterSpacing="0.5"
        opacity="0.8"
      >
        OPEN
      </text>

      {/* ── DECORATIVE CIRCUIT LINES ── */}
      <path
        d="M30 50 L50 50 L50 30"
        stroke="#30363D"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="30" cy="50" r="2" fill="#FF5555" opacity="0.7" />
      <path
        d="M280 300 L270 300 L270 320 L290 320"
        stroke="#30363D"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="290" cy="320" r="2" fill="#50FA7B" opacity="0.7" />

      {/* Grid dots background inside circle */}
      {[-2, -1, 0, 1, 2].map((row) =>
        [-2, -1, 0, 1, 2].map((col) => {
          const cx = 160 + col * 28;
          const cy = 170 + row * 28;
          const dist = Math.sqrt((cx - 160) ** 2 + (cy - 170) ** 2);
          if (dist > 108) return null;
          return (
            <circle
              key={`${row}-${col}`}
              cx={cx}
              cy={cy}
              r="1"
              fill="#30363D"
              opacity="0.6"
            />
          );
        })
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   STAT BAR
   ───────────────────────────────────────────────────────── */
const stats = [
  { label: "Years Coding", value: "4+" },
  { label: "Projects Shipped", value: "12+" },
  { label: "Technologies", value: "20+" },
  { label: "Timezone", value: "UTC+6" },
];

/* ─────────────────────────────────────────────────────────
   DECORATIVE SVG DOODLES around avatar
   ───────────────────────────────────────────────────────── */
function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 30 C10 25, 20 15, 35 12 C45 10, 52 15, 55 20"
        stroke="#FF5555"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 3"
      />
      <path
        d="M50 14 L55 20 L47 20"
        stroke="#FF5555"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BracketDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M25 5 L10 5 L10 75 L25 75"
        stroke="#50FA7B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

function CloseBracketDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15 5 L30 5 L30 75 L15 75"
        stroke="#50FA7B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

function UnderlineDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 8 C20 4, 50 10, 80 6 C100 3, 115 8, 118 6"
        stroke="#FF5555"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────── */
export function AvatarHero() {
  const shouldReduce = useReducedMotion();
  const [pulse, setPulse] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Availability pulse
  useEffect(() => {
    if (shouldReduce) return;
    const id = setInterval(() => setPulse((p) => !p), 1200);
    return () => clearInterval(id);
  }, [shouldReduce]);

  // Subtle parallax for avatar
  useEffect(() => {
    if (shouldReduce) return;
    const handleMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMousePos({
        x: ((e.clientX - cx) / rect.width) * 12,
        y: ((e.clientY - cy) / rect.height) * 8,
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [shouldReduce]);

  const { displayLines, partial, done } = useTypingAnimation(
    INTRO_LINES,
    shouldReduce ?? false
  );

  // Float animation for badges
  const floatVariants = {
    animate: (delay: number) => ({
      y: shouldReduce ? 0 : [0, -8, 0],
      transition: {
        delay,
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0D1117] border-b border-[#30363D] py-20 lg:py-28"
      aria-label="Personal introduction"
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(139,148,158,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Radial fade overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#0D1117_85%)]" />

      {/* Vermilion accent glow top-left */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#FF5555] opacity-[0.04] blur-3xl pointer-events-none" />
      {/* Green glow bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#50FA7B] opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── GRID: text LEFT, avatar RIGHT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Introduction Text ── */}
          <div className="order-2 lg:order-1 space-y-8">

            {/* File path breadcrumb */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1 font-mono text-xs text-[#8B949E]"
            >
              <span className="text-[#FF5555]">~/</span>
              <span>portfolio</span>
              <span className="text-[#30363D] mx-1">/</span>
              <span className="text-[#50FA7B]">asib-mahmud</span>
              <span className="text-[#30363D] mx-1">/</span>
              <span>README.md</span>
              <span className="ml-2 px-1.5 py-0.5 rounded bg-[#50FA7B]/10 border border-[#50FA7B]/20 text-[#50FA7B] text-[10px] uppercase tracking-wider">
                Available
              </span>
            </motion.div>

            {/* Name headline */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#FF5555] mb-2">
                # Hello, I&apos;m
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E6EDF3] leading-none tracking-tight">
                Asib
                <br />
                <span className="relative inline-block">
                  Mahmud
                  {/* SVG underline doodle */}
                  <UnderlineDoodle className="absolute -bottom-1 left-0 w-full" />
                </span>
              </h1>
            </motion.div>

            {/* Role badge */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2"
            >
              {[
                "Software Engineer",
                "Full-Stack Developer",
                "ML Researcher",
                "Data Engineer",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border border-[#30363D] bg-[#161B22] text-[#8B949E]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Terminal typing bio */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="bg-[#161B22] border border-[#30363D] rounded p-4 font-mono text-sm"
              aria-label="Bio introduction"
            >
              {/* Terminal title bar */}
              <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-[#30363D]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5555] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F0D351] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#50FA7B] opacity-80" />
                <span className="ml-2 text-[10px] text-[#8B949E] tracking-wider uppercase">
                  asib@intro ~ zsh
                </span>
              </div>
              {/* Prompt */}
              <div className="flex gap-2 text-[#8B949E] mb-1">
                <span className="text-[#50FA7B]">❯</span>
                <span>cat intro.txt</span>
              </div>
              {/* Typed lines */}
              <div className="mt-2 space-y-1 text-[#E6EDF3] leading-relaxed">
                {INTRO_LINES.map((line, i) => {
                  const isCompleted = displayLines[i] !== undefined;
                  const isActive = !done && i === displayLines.length;
                  return (
                    <div key={i} className="min-h-[1.5em]">
                      {isCompleted && (
                        <span className="text-[#CDD9E5]">{line}</span>
                      )}
                      {isActive && (
                        <span>
                          <span className="text-[#CDD9E5]">{partial}</span>
                          <span className="inline-block w-[2px] h-[1em] bg-[#50FA7B] ml-px align-middle animate-pulse" />
                        </span>
                      )}
                    </div>
                  );
                })}
                {done && (
                  <div className="mt-2 flex gap-2 text-[#8B949E]">
                    <span className="text-[#50FA7B]">❯</span>
                    <span className="inline-block w-[2px] h-[1em] bg-[#50FA7B] align-middle animate-pulse" />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Location + availability */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 text-sm font-mono text-[#8B949E]"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#FF5555]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Dhaka, Bangladesh
              </span>
              <span className="text-[#30363D]">|</span>
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block w-2 h-2 rounded-full bg-[#50FA7B]"
                  style={{
                    boxShadow: pulse
                      ? "0 0 6px rgba(80,250,123,0.8)"
                      : "none",
                    transition: "box-shadow 0.3s",
                  }}
                />
                Available for freelance &amp; remote work
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded bg-[#FF5555] px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-[#E04040] transition-colors shadow-sm"
              >
                View My Work
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded border border-[#30363D] bg-[#161B22] px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-[#E6EDF3] hover:border-[#50FA7B]/50 hover:text-[#50FA7B] transition-colors"
              >
                Start a Project
                <span>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: Avatar ── */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">

            {/* Bracket doodles flanking avatar */}
            <BracketDoodle className="absolute left-4 lg:-left-2 top-1/2 -translate-y-1/2 w-6 h-16 hidden sm:block" />
            <CloseBracketDoodle className="absolute right-4 lg:-right-2 top-1/2 -translate-y-1/2 w-6 h-16 hidden sm:block" />

            {/* Avatar wrapper with parallax */}
            <motion.div
              animate={
                shouldReduce
                  ? {}
                  : { x: mousePos.x * 0.4, y: mousePos.y * 0.4 }
              }
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px]"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(80,250,123,0.06)_0%,transparent_70%)]" />

              <DeveloperAvatar pulse={pulse} />

              {/* Floating code badge — top right of avatar */}
              <motion.div
                custom={0.6}
                variants={floatVariants}
                animate="animate"
                className="absolute -top-4 -right-8 sm:-right-16 bg-[#161B22] border border-[#30363D] rounded px-2.5 py-1.5 font-mono text-[10px] text-[#50FA7B] shadow-lg whitespace-nowrap hidden sm:block"
                style={{ transform: `translateX(${mousePos.x * -0.6}px)` }}
              >
                &lt;Engineer /&gt;
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                custom={1.0}
                variants={floatVariants}
                animate="animate"
                className="absolute -bottom-2 -left-10 sm:-left-20 bg-[#161B22] border border-[#30363D] rounded px-2.5 py-1.5 font-mono text-[10px] text-[#FF5555] shadow-lg whitespace-nowrap hidden sm:block"
                style={{ transform: `translateX(${mousePos.x * 0.5}px)` }}
              >
                YOLOv8 · PyTorch
              </motion.div>

              {/* Scribble arrow pointing at avatar */}
              <ScribbleArrow className="absolute -bottom-8 right-2 w-14 h-10 hidden lg:block" />
            </motion.div>

            {/* ── FLOATING CODE BADGES (orbiting text) ── */}
            {/* These are positioned relative to the avatar's center */}
            <div className="absolute inset-0 pointer-events-none">
              {codeBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  custom={badge.delay}
                  variants={floatVariants}
                  animate="animate"
                  initial={
                    shouldReduce
                      ? false
                      : { opacity: 0, scale: 0.8 }
                  }
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: badge.delay, duration: 0.4 }}
                  className="absolute font-mono text-[9px] sm:text-[10px] text-[#8B949E] bg-[#0D1117]/90 border border-[#30363D] rounded px-2 py-1 hidden lg:block"
                  style={{
                    left: `calc(50% + ${badge.x}px)`,
                    top: `calc(50% + ${badge.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="text-[#50FA7B]">$ </span>
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── SKILL PILLS ROW ─── */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-[#30363D]"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B949E] mr-1 shrink-0">
              Stack:
            </span>
            {[
              { label: "Next.js", color: "#E6EDF3" },
              { label: "TypeScript", color: "#58A6FF" },
              { label: "Python", color: "#50FA7B" },
              { label: "WordPress", color: "#BD93F9" },
              { label: "YOLOv8", color: "#FF5555" },
              { label: "PyTorch", color: "#FF8C42" },
              { label: "FastAPI", color: "#00D4AA" },
              { label: "MySQL / PostgreSQL", color: "#8B949E" },
              { label: "Docker", color: "#58A6FF" },
              { label: "Tailwind CSS", color: "#38BDF8" },
            ].map((s) => (
              <span
                key={s.label}
                className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full border border-[#30363D] bg-[#161B22] transition-colors hover:border-[#50FA7B]/30"
                style={{ color: s.color }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ─── QUICK STATS ROW ─── */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#161B22] border border-[#30363D] rounded p-4 text-center hover:border-[#FF5555]/30 transition-colors"
            >
              <div className="font-display text-3xl font-bold text-[#E6EDF3]">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#8B949E] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ─── CAVEAT HANDWRITTEN ANNOTATION ─── */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, rotate: -2 }}
          animate={{ opacity: 1, rotate: -1.5 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 inline-flex items-center gap-2"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-[#FF5555]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span
            className="font-hand text-base text-[#8B949E]"
            style={{ letterSpacing: "0.02em" }}
          >
            yes, I wrote every line below this
          </span>
        </motion.div>
      </div>
    </section>
  );
}
