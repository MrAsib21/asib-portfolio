"use client";

import React, { useState } from "react";
import { ProjectMetric } from "@/content/projects";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";

interface MetricsStripProps {
  metrics: ProjectMetric[];
  lighthouseScores?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

export function MetricsStrip({ metrics, lighthouseScores }: MetricsStripProps) {
  const [metricView, setMetricView] = useState<"standard" | "benchmark">("standard");

  return (
    <div className="my-12 rounded border border-[#30363D] bg-[#161B22] p-6 shadow-desk-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#30363D] gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Quantitative Performance Profile
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-olive text-[11px]">Audit Mode:</span>
          <button
            onClick={() => setMetricView("standard")}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              metricView === "standard"
                ? "bg-vermilion text-white font-semibold"
                : "bg-[#0D1117] text-olive border border-[#30363D]"
            }`}
          >
            Production Metric
          </button>
          <button
            onClick={() => setMetricView("benchmark")}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              metricView === "benchmark"
                ? "bg-vermilion text-white font-semibold"
                : "bg-[#0D1117] text-olive border border-[#30363D]"
            }`}
          >
            Baseline Comparison
          </button>
        </div>
      </div>

      {/* Grid of Key Numbers */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex flex-col justify-between rounded bg-[#0D1117] border border-[#30363D] p-4 shadow-desk-flat transition-transform hover:-translate-y-0.5"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-olive block mb-1">
                {m.label}
              </span>
              <div className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                <PlaceholderBadge text={m.value} />
                {m.unit && (
                  <span className="font-mono text-sm font-medium text-vermilion ml-1">
                    {m.unit}
                  </span>
                )}
              </div>
            </div>
            <p className="mt-3 font-mono text-[10px] text-olive border-t border-[#30363D] pt-2 leading-relaxed">
              {m.context}
            </p>
          </div>
        ))}
      </div>

      {/* Optional Lighthouse matrix for web projects */}
      {lighthouseScores && (
        <div className="mt-6 pt-6 border-t border-[#30363D]">
          <span className="font-mono text-[10px] uppercase tracking-widest text-olive block mb-3">
            Google Lighthouse Audit Scores (Mobile &bull; Simulated 4G)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(lighthouseScores).map(([category, score]) => (
              <div
                key={category}
                className="flex items-center justify-between rounded bg-[#0D1117] p-3 border border-[#30363D]"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-ink capitalize">
                  {category}
                </span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#50FA7B]/15 text-[#50FA7B] border border-[#50FA7B]/30">
                  {score} / 100
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
