import React from "react";

export function Marginalia({
  noteType = "technical",
  children,
  className = "",
}: {
  noteType?: "technical" | "anecdote" | "decision";
  children: React.ReactNode;
  className?: string;
}) {
  const badgeColors = {
    technical: "text-vermilion border-vermilion/40 bg-vermilion/10",
    decision: "text-highlighter border-highlighter/40 bg-highlighter/10",
    anecdote: "text-[#F1FA8C] border-[#F1FA8C]/40 bg-[#F1FA8C]/10",
  };

  return (
    <aside
      className={`my-6 lg:my-0 lg:w-72 font-mono text-xs text-olive leading-relaxed border-l-2 border-vermilion/50 pl-4 py-1.5 bg-[#161B22]/50 ${className}`}
      aria-label="Editorial margin note"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className={`text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border font-semibold ${badgeColors[noteType]}`}
        >
          // {noteType} note
        </span>
      </div>
      <div className="font-body text-xs text-ink/90 italic">
        {children}
      </div>
    </aside>
  );
}

export function PullQuote({
  quote,
  attribution,
  className = "",
}: {
  quote: string;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={`my-12 py-6 border-y border-[#30363D] text-center px-4 ${className}`}>
      <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic text-white font-semibold leading-snug max-w-3xl mx-auto">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-olive">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
