import React from "react";
import Link from "next/link";
import { skillGroups } from "@/content/skills";
import { MaskingTape } from "@/components/editorial/Doodles";

export const metadata = {
  title: "Skills & Technical Inventory — Asib Mahmud",
  description: "Honest technical breakdown of Web Development, WordPress, Software Engineering, Data Science, and Computer Vision capabilities. No bogus percentage bars.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="border-b border-[#30363D] pb-10">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
          <span>Technical Stack</span>
          <span>/</span>
          <span>Honest Inventory</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Tools, Systems &amp; Disciplines
        </h1>
        <p className="mt-4 font-body text-base sm:text-lg text-olive max-w-2xl leading-relaxed">
          I don&apos;t believe in fake percentage bars (&ldquo;95% in Python&rdquo;) or five-star skill ratings. Below is an honest breakdown of the technologies I ship to production daily, how I think about each layer, and where I add the most value.
        </p>
      </header>

      {/* Grid of Expanded Sticky Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group) => {
          const bgColors = {
            yellow: "bg-[#252210] border-[#5E521D] text-[#FFF4A3]",
            blue: "bg-[#112433] border-[#224A6A] text-[#BEE4F8]",
            green: "bg-[#122A1E] border-[#255C41] text-[#A6E8C2]",
            pink: "bg-[#2E1620] border-[#692A42] text-[#F9BFD3]",
            orange: "bg-[#2E1C10] border-[#693D22] text-[#FCD0A1]",
          };

          return (
            <div
              key={group.id}
              className={`relative rounded-xs p-6 shadow-desk-card border transition-transform hover:-translate-y-1 ${
                bgColors[group.colorTheme]
              }`}
            >
              {/* Tape strip */}
              <div className="absolute -top-3 left-8 pointer-events-none">
                <MaskingTape className="w-16 h-5" />
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest opacity-80 font-bold">
                <span>Discipline</span>
                <span>AM-STACK</span>
              </div>

              <h2 className="font-display text-2xl font-bold text-white mt-2">
                {group.name}
              </h2>

              <p className="mt-2 font-body text-sm opacity-90 leading-relaxed text-ink/80">
                {group.tagline}
              </p>

              {/* Honest developer commentary */}
              <div className="mt-4 rounded bg-black/40 border border-white/5 p-3 font-mono text-xs text-white/90 italic leading-relaxed">
                &ldquo;{group.honestNote}&rdquo;
              </div>

              {/* Technologies List */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-80 font-semibold block mb-3">
                  Production Technologies
                </span>
                <ul className="space-y-2.5 font-mono text-xs">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col">
                      <div className="flex items-center gap-1.5 font-semibold text-white">
                        <span className="text-vermilion">›</span>
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <span className="ml-auto text-[9px] uppercase tracking-wider text-highlighter bg-black/40 px-1 rounded border border-highlighter/30">
                            Core
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-olive pl-3 font-body">
                        {skill.context}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sticky bottom peel */}
              <div
                className="absolute bottom-0 right-0 w-6 h-6 bg-white/5 pointer-events-none"
                style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
              />
            </div>
          );
        })}
      </div>

      {/* Philosophy Callout Card */}
      <section className="mt-16 rounded border border-[#30363D] bg-[#161B22] p-8 shadow-desk-card">
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
            Engineering Principles
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Frameworks come and go. Fundamentals endure.
          </h2>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            I prioritize strong software engineering fundamentals: understanding how memory and CPU react to un-indexed SQL queries, respecting the DOM tree, keeping dependencies lean, and designing modular systems that remain pleasant to maintain long after launch day.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider font-semibold text-highlighter hover:underline"
            >
              <span>Have a specific technology stack in mind? Let&apos;s talk</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
