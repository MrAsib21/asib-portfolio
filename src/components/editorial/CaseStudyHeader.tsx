import React from "react";
import Link from "next/link";
import { Project } from "@/content/projects";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="border-b border-[#30363D] pb-12 pt-6">
      {/* Top back breadcrumb */}
      <div className="flex items-center justify-between pb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-olive hover:text-highlighter transition-colors font-medium"
        >
          <span>←</span>
          <span>Back to Project Index</span>
        </Link>

        <div className="flex items-center gap-2 font-mono text-xs text-olive">
          <span className="uppercase tracking-widest text-vermilion font-bold">
            Editorial Feature
          </span>
          <span>/</span>
          <span className="font-semibold text-white">{project.category}</span>
        </div>
      </div>

      {/* Main Spread Title & Number Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Massive Editorial Project Number */}
        <div className="lg:col-span-2">
          <div className="font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-vermilion/90 leading-none select-none">
            {project.number}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-olive block mt-2">
            Archival Record
          </span>
        </div>

        {/* Title, Hook & Organization */}
        <div className="lg:col-span-10 space-y-4">
          <div className="inline-block font-mono text-xs text-olive border-b border-[#30363D] pb-1">
            <PlaceholderBadge text={project.clientOrOrg} />
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            <PlaceholderBadge text={project.title} />
          </h1>

          <p className="font-body text-lg sm:text-xl text-ink/80 leading-relaxed max-w-3xl pt-2">
            {project.hook}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded bg-vermilion px-4 py-2 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors shadow-xs"
              >
                <span>Live Preview / Prototype</span>
                <span>↗</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded border border-[#30363D] bg-[#161B22] px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink hover:text-white hover:bg-white/5 transition-colors font-medium"
              >
                <span>Source Repository</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Monospace Metadata Matrix */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 rounded border border-[#30363D] bg-[#161B22] p-6 shadow-desk-flat font-mono text-xs">
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-olive mb-1">
            Role
          </span>
          <span className="font-semibold text-white leading-tight block">
            {project.role}
          </span>
        </div>

        <div>
          <span className="block text-[10px] uppercase tracking-widest text-olive mb-1">
            Year &amp; Duration
          </span>
          <span className="font-semibold text-white leading-tight block">
            {project.year} &bull; <PlaceholderBadge text={project.duration} />
          </span>
        </div>

        <div>
          <span className="block text-[10px] uppercase tracking-widest text-olive mb-1">
            Team Structure
          </span>
          <span className="font-semibold text-white leading-tight block">
            <PlaceholderBadge text={project.team} />
          </span>
        </div>

        <div>
          <span className="block text-[10px] uppercase tracking-widest text-olive mb-1">
            Focus Discipline
          </span>
          <span className="font-semibold text-highlighter leading-tight block">
            {project.category}
          </span>
        </div>

        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <span className="block text-[10px] uppercase tracking-widest text-olive mb-1">
            Core Stack
          </span>
          <div className="flex flex-wrap gap-1">
            {project.stack.map((item) => (
              <span
                key={item}
                className="inline-block bg-[#0D1117] px-1.5 py-0.5 rounded text-[10px] text-olive border border-[#30363D] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
