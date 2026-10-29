import React from "react";

export function PlaceholderBadge({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const isPlaceholder = text.includes("[") && text.includes("]");

  if (!isPlaceholder) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span
      className={`inline-block relative rounded px-1.5 py-0.5 bg-[#FF5555]/15 text-[#FFB86C] border border-[#FF5555]/40 font-mono text-xs font-semibold ${className}`}
      title="Placeholder content: replace with your real details"
    >
      <span className="inline-block mr-1 text-[10px] text-vermilion">●</span>
      {text}
    </span>
  );
}
