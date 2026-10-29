import React from "react";

interface Step {
  step: string;
  title: string;
  description: string;
}

export function ArchitectureDiagram({
  summary,
  steps,
}: {
  summary: string;
  steps: Step[];
}) {
  return (
    <div className="my-12 rounded border border-[#30363D] bg-[#161B22] p-6 shadow-desk-card">
      <div className="flex items-center gap-2 pb-4 border-b border-[#30363D] font-mono text-xs">
        <span className="h-2 w-2 rounded-full bg-vermilion"></span>
        <span className="font-semibold uppercase tracking-wider text-white">
          System Architecture &amp; Data Pipeline
        </span>
      </div>

      <p className="mt-4 font-body text-sm text-ink/85 leading-relaxed max-w-2xl">
        {summary}
      </p>

      {/* Sequential Pipeline Flow Diagram */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((s, index) => (
          <div
            key={s.step}
            className="relative rounded bg-[#0D1117] border border-[#30363D] p-5 shadow-desk-flat flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-olive pb-2 border-b border-[#30363D]">
                <span className="font-bold text-highlighter">NODE_{s.step}</span>
                <span className="text-[10px] uppercase tracking-widest">// pipeline</span>
              </div>
              <h4 className="mt-3 font-display text-base font-bold text-white leading-snug">
                {s.title}
              </h4>
              <p className="mt-2 font-body text-xs text-olive leading-relaxed">
                {s.description}
              </p>
            </div>

            {/* Connecting flow arrow for desktop between steps 01-02 and 02-03 */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#161B22] border border-[#30363D] flex items-center justify-center font-mono text-xs font-bold text-vermilion shadow-xs">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
