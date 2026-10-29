import Link from "next/link";
import { Workbench } from "@/components/desk/Workbench";
import { AvatarHero } from "@/components/hero/AvatarHero";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Personal Introduction + Avatar Hero */}
      <AvatarHero />

      {/* 2. The Workbench Top-Down Interactive Desk Nav */}
      <Workbench />

      {/* 2. Editorial Index Teaser Spread */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-b border-[#30363D]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#30363D]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-vermilion">
              <span>Selected Case Studies</span>
              <span>/</span>
              <span>Index</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Recent Engineering &amp; Client Work
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-wider text-highlighter hover:text-white transition-colors inline-flex items-center gap-1 group font-semibold"
          >
            <span>View Full Project Archive</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Magazine-style Project Rows */}
        <div className="divide-y divide-[#30363D]">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block py-8 transition-colors hover:bg-[#161B22]/80 px-4 -mx-4 rounded border border-transparent hover:border-[#30363D]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                {/* Number */}
                <div className="md:col-span-1 font-display text-2xl text-olive/60 group-hover:text-vermilion transition-colors font-semibold">
                  {project.number}
                </div>

                {/* Title & Hook */}
                <div className="md:col-span-7 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#21262D] text-highlighter border border-[#30363D]">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-olive">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-vermilion transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-olive leading-relaxed max-w-2xl">
                    {project.hook}
                  </p>
                </div>

                {/* Key Metric highlight */}
                <div className="md:col-span-4 md:text-right font-mono text-xs">
                  {project.metrics[0] && (
                    <div className="inline-block bg-[#161B22] border border-[#30363D] px-3 py-2 rounded shadow-xs text-left md:text-right">
                      <div className="text-xl font-bold text-white font-display">
                        {project.metrics[0].value}
                        <span className="text-xs font-mono text-vermilion ml-1">
                          {project.metrics[0].unit}
                        </span>
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-olive mt-0.5">
                        {project.metrics[0].label}
                      </div>
                    </div>
                  )}
                  <div className="mt-2 text-highlighter font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read editorial feature →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Direct Working Approach & Call to Action */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#161B22] rounded border border-[#30363D] p-8 sm:p-12 shadow-desk-card relative overflow-hidden">
          {/* Subtle background stamp */}
          <div className="absolute top-4 right-6 font-mono text-6xl text-white/[0.03] select-none pointer-events-none font-bold">
            2026
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
              The Freelance Philosophy
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Honest code, predictable communication, and zero unnecessary layers.
            </h2>
            <p className="font-body text-base text-ink/80 leading-relaxed">
              When you hire me, you work directly with the engineer writing your commits. No account managers playing telephone, no fabricated timesheets, and no bloated dependency chains.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-vermilion px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors shadow-sm"
              >
                Start a Conversation →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded border border-[#30363D] bg-[#0D1117] px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-ink hover:text-white hover:bg-white/5 transition-colors"
              >
                View Services &amp; Working Model
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
