"use client";

import React, { useState, useRef } from "react";

interface BeforeAfterProps {
  beforeLabel: string;
  afterLabel: string;
  beforeCaption: string;
  afterCaption: string;
}

export function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  beforeCaption,
  afterCaption,
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMove(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  }

  return (
    <div className="my-12 rounded border border-[#30363D] bg-[#161B22] p-4 sm:p-6 shadow-desk-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#30363D] gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-vermilion"></span>
          <span className="font-semibold uppercase tracking-wider text-white">
            Interactive CV Verification Slider
          </span>
        </div>
        <span className="text-olive text-[11px]">
          Drag handle left/right to compare pipeline stages
        </span>
      </div>

      {/* Visual Canvas Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
        className="relative mt-4 h-72 sm:h-96 w-full cursor-ew-resize select-none overflow-hidden rounded bg-[#0A0D12] border border-[#30363D]"
        role="region"
        aria-label="Image comparison before and after defect detection model"
      >
        {/* Layer 2 (Right/After side): Segmented & Detected Mask */}
        <div className="absolute inset-0 bg-[#0D1117] flex flex-col items-center justify-center p-6 text-paper">
          {/* Simulated industrial metal sheet with detected bounding box */}
          <div className="relative w-full max-w-lg h-56 rounded bg-[#161B22] border border-[#30363D] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#50FA7B_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Defect Bounding Box */}
            <div className="absolute top-16 left-28 sm:left-40 w-32 h-20 border-2 border-vermilion bg-vermilion/20 rounded-xs flex flex-col justify-between p-1 shadow-[0_0_12px_rgba(255,85,85,0.3)]">
              <div className="font-mono text-[9px] font-bold text-white bg-vermilion px-1 rounded-xs inline-block self-start">
                FISSURE_04 :: 96.4%
              </div>
              <div className="font-mono text-[8px] text-white/80 text-right">
                ROI [x:160, y:64]
              </div>
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-xs text-[#50FA7B] flex items-center gap-1.5">
              <span>●</span>
              <span>INSPECTION STATUS: DEFECT REJECTED (14.2ms)</span>
            </div>
          </div>
          <div className="mt-3 font-mono text-xs text-highlighter font-semibold uppercase tracking-wider">
            {afterLabel}
          </div>
        </div>

        {/* Layer 1 (Left/Before side): Raw Unprocessed Feed with Clip Path */}
        <div
          className="absolute inset-0 bg-[#161B22] flex flex-col items-center justify-center p-6 text-paper"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          {/* Simulated industrial metal sheet with glare obscuring crack */}
          <div className="relative w-full max-w-lg h-56 rounded bg-[#21262D] border border-[#30363D] flex items-center justify-center overflow-hidden">
            {/* Specular Glare artifact */}
            <div className="absolute top-8 left-20 w-44 h-32 rounded-full bg-white/20 blur-2xl pointer-events-none" />

            {/* Faint hair crack barely visible */}
            <div className="absolute top-24 left-36 w-20 h-0.5 bg-black rotate-[-15deg] opacity-70" />

            <div className="absolute bottom-4 left-4 font-mono text-xs text-olive">
              RAW SENSOR STREAM (60 FPS &bull; UNPROCESSED)
            </div>
          </div>
          <div className="mt-3 font-mono text-xs text-olive font-semibold uppercase tracking-wider">
            {beforeLabel}
          </div>
        </div>

        {/* Draggable Divider Line & Knob */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-vermilion shadow-[0_0_8px_rgba(255,85,85,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#161B22] text-white shadow-desk-lift border-2 border-vermilion font-mono text-xs font-bold">
            ↔
          </div>
        </div>
      </div>

      {/* Accessible Slider Range Control */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono text-olive">
        <span>{beforeCaption}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-32 accent-vermilion sr-only focus:not-sr-only"
          aria-label="Adjust comparison slider position"
        />
        <span>{afterCaption}</span>
      </div>
    </div>
  );
}
