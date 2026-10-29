"use client";

import { useState } from "react";
import { CoffeeRing } from "@/components/editorial/Doodles";

const COFFEE_JOKES = [
  "There are 2 hard things in software: cache invalidation, and keeping this coffee warm.",
  "Tested in production. Works on my mug.",
  "0 errors, 0 warnings, 1 espresso remaining.",
  "I don't always test my code, but when I do, I do it with fresh coffee.",
  "git commit -m 'refactor: replaced blood with Arabica roast'",
  "Coffee: turning caffeine into typed interfaces since 2021.",
];

export function CoffeeMugObject() {
  const [jokeIndex, setJokeIndex] = useState(0);
  const [isSteaming, setIsSteaming] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  function handleClick() {
    setIsSteaming(true);
    setShowJoke(true);
    setJokeIndex((prev) => (prev + 1) % COFFEE_JOKES.length);

    setTimeout(() => {
      setIsSteaming(false);
    }, 2800);
  }

  return (
    <div className="relative group">
      {/* Dried Coffee Ring stain on desk wood */}
      <div className="absolute -top-6 -left-6 w-36 h-36 pointer-events-none">
        <CoffeeRing className="w-full h-full" />
      </div>

      {/* Tappable Mug Body */}
      <button
        type="button"
        onClick={handleClick}
        className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1F242C] p-3 shadow-desk-card group-hover:shadow-desk-lift transition-transform duration-300 group-hover:scale-105 border-4 border-[#30363D] flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-vermilion"
        aria-label="Coffee mug easter egg. Click to steam coffee and reveal a joke."
        title="Click to take a sip &amp; get a joke"
      >
        {/* Ceramic Mug Handle */}
        <div className="absolute -right-3 top-6 w-4 h-12 rounded-r-full border-4 border-[#30363D] bg-[#1F242C] shadow-sm pointer-events-none" />

        {/* Coffee Liquid Surface */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#120B05] via-[#0A0603] to-[#1C1008] flex items-center justify-center shadow-inner overflow-hidden border border-black/40">
          {/* Surface reflection */}
          <div className="absolute top-1 left-2 w-8 h-4 rounded-full bg-white/10 blur-[1px] rotate-[-25deg] pointer-events-none" />

          {/* Steam puffs */}
          {isSteaming && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="animate-steam absolute w-4 h-8 border-l-2 border-white/50 rounded-full blur-[0.5px]"></span>
              <span className="animate-steam absolute w-3 h-6 border-r-2 border-white/40 rounded-full blur-[0.5px] delay-300"></span>
            </div>
          )}

          <span className="font-mono text-[8px] text-[#A68F7B] uppercase tracking-widest font-semibold select-none opacity-80 group-hover:opacity-100">
            {isSteaming ? "SIP!" : "BREW"}
          </span>
        </div>
      </button>

      {/* Joke speech bubble */}
      {showJoke && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-56 sm:w-64 bg-[#161B22] border border-[#30363D] p-2.5 rounded shadow-desk-card z-30 animate-in fade-in zoom-in-95 duration-200">
          <div className="font-hand text-sm text-ink leading-tight font-medium">
            &ldquo;{COFFEE_JOKES[jokeIndex]}&rdquo;
          </div>
          <div className="mt-1 flex items-center justify-between text-[9px] font-mono text-olive">
            <span>Coffee Break Easter Egg</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowJoke(false);
              }}
              className="text-vermilion hover:underline"
            >
              close [x]
            </button>
          </div>
          {/* Little speech arrow pointing down */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#161B22] border-r border-b border-[#30363D] rotate-45" />
        </div>
      )}

      {/* Subtle hint underneath */}
      <div className="text-center font-hand text-xs text-olive/80 mt-1 pointer-events-none select-none">
        click mug for a joke
      </div>
    </div>
  );
}
