import React from "react";

export function ScribbleUnderline({ className = "text-vermilion" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 11C45 4 92 14 135 7C172 1 205 13 237 8"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandCircle({ className = "text-vermilion" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute inset-0 -m-2 h-[calc(100%+16px)] w-[calc(100%+16px)] overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M20 28C18 12 50 6 95 6C138 6 156 18 152 42C148 64 116 66 65 65C24 64 8 50 12 34C15 22 36 12 60 10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="400"
        strokeDashoffset="0"
      />
    </svg>
  );
}

export function CalloutArrow({ className = "text-vermilion" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-10 overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M6 38C22 42 48 36 62 16M62 16L48 14M62 16L68 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleDoodle({ className = "text-highlighter" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M20 4V36M4 20H36M9 9L31 31M9 31L31 9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MarginBracket({ className = "text-olive" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-24 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M22 6C12 6 8 16 8 32V50C8 58 4 60 2 60C4 60 8 62 8 70V88C8 104 12 114 22 114"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CoffeeRing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none opacity-20 ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="#FF5555"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="40 12 80 6 30 18"
        filter="url(#coffee-blur)"
      />
      <circle
        cx="98"
        cy="102"
        r="75"
        stroke="#FF79C6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="20 40 60 30"
      />
    </svg>
  );
}

export function MaskingTape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none h-6 w-20 bg-[#30363D]/80 shadow-[0_1px_3px_rgba(0,0,0,0.5)] backdrop-blur-[0.5px] border-t border-b border-[#484F58]/60 ${className}`}
      style={{
        clipPath:
          "polygon(0% 2px, 4px 0px, 100% 1px, calc(100% - 3px) calc(100% - 2px), 98% 100%, 2px calc(100% - 1px), 0% 100%)",
      }}
      aria-hidden="true"
    />
  );
}

export function PaperClip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-14 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M8 20V52C8 60 14 66 22 66C30 66 30 58 30 50V14C30 7 24 2 17 2C10 2 4 7 4 14V54C4 64 12 70 20 70"
        stroke="#484F58"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M7 19V51C7 59 13 65 21 65C29 65 29 57 29 49V13C29 6 23 1 16 1C9 1 3 6 3 13V53"
        stroke="#8B949E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
