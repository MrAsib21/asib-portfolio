import React from "react";
import Link from "next/link";
import { activities } from "@/content/activities";
import { MaskingTape } from "@/components/editorial/Doodles";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";

export const metadata = {
  title: "Activities & Community — Asib Mahmud",
  description: "University co-curricular leadership, teamwork, hackathons, and technical community contributions.",
};

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="border-b border-[#30363D] pb-10">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
          <span>Community &bull; Teamwork &bull; Leadership</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          The Polaroid Wall &amp; Timeline
        </h1>
        <p className="mt-4 font-body text-base sm:text-lg text-olive max-w-2xl leading-relaxed">
          Beyond individual commits: leading student workshops, 48-hour hackathon sprints with interdisciplinary teams, and building developer culture at university.
        </p>
      </header>

      {/* Polaroid Wall Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {activities.map((item) => (
          <article
            key={item.id}
            className={`relative rounded-xs bg-[#161B22] p-5 pb-8 border border-[#30363D] shadow-polaroid transition-transform hover:-translate-y-1.5 duration-300 ${item.rotation}`}
          >
            {/* Masking tape on top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 pointer-events-none z-10">
              <MaskingTape className="w-20 h-5" />
            </div>

            {/* Photo frame placeholder with subtle tactile grain */}
            <div className="relative w-full h-56 sm:h-64 bg-[#0D1117] border border-[#30363D] rounded-xs flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              <div className="font-mono text-xs uppercase tracking-wider text-highlighter font-semibold">
                [PHOTO PLACEHOLDER]
              </div>
              <p className="font-mono text-[11px] text-olive mt-1 max-w-xs">
                {item.imagePlaceholderAlt}
              </p>
              <div className="mt-3 inline-block rounded bg-[#161B22] px-2 py-0.5 font-mono text-[10px] text-vermilion border border-[#30363D] font-bold">
                {item.period}
              </div>
            </div>

            {/* Polaroid handwritten caption */}
            <div className="mt-4 text-center">
              <span className="font-hand text-lg sm:text-xl font-bold text-white block leading-snug">
                &ldquo;{item.polaroidCaption}&rdquo;
              </span>
            </div>

            {/* Editorial Narrative Details */}
            <div className="mt-6 pt-5 border-t border-[#30363D] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-[#21262D] text-highlighter uppercase tracking-wider font-semibold border border-[#30363D]">
                  {item.category}
                </span>
                <span className="text-olive font-medium">{item.period}</span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                <PlaceholderBadge text={item.title} />
              </h2>

              <div className="font-mono text-xs text-olive font-medium">
                <PlaceholderBadge text={item.organization} /> &bull; <PlaceholderBadge text={item.role} />
              </div>

              <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed pt-1">
                {item.story}
              </p>

              {/* Highlights */}
              <div className="pt-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-olive font-semibold block mb-2">
                  Key Milestones:
                </span>
                <ul className="space-y-1.5 font-mono text-xs text-ink/85">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-highlighter">✔</span>
                      <span>
                        <PlaceholderBadge text={h} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Collaboration Callout */}
      <footer className="mt-20 rounded border border-[#30363D] bg-[#161B22] p-8 shadow-desk-card">
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
            Team Dynamics
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Software engineering is a team sport.
          </h2>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Leading workshops and collaborating in high-pressure hackathons taught me how to communicate technical decisions clearly, listen without ego, and ensure every teammate feels equipped to do their best work.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider font-semibold text-highlighter hover:underline"
            >
              <span>Looking for a dependable team player? Get in touch</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
