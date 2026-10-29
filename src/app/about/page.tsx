import React from "react";
import Link from "next/link";
import { PaperClip } from "@/components/editorial/Doodles";

export const metadata = {
  title: "About Asib Mahmud — Background, Process & Craft",
  description: "Software engineering graduate based in Bangladesh. Learn how I work with international clients, my 4-step collaboration model, and what I'm currently building.",
};

export default function AboutPage() {
  const steps = [
    {
      step: "01",
      title: "Direct Technical Alignment",
      subtitle: "// no account managers playing telephone.",
      body: "We start with a thorough 30-minute technical discovery call or async brief. I inspect your repository, API contracts, or Figma files directly and give you honest feasibility feedback before anyone writes a line of code.",
    },
    {
      step: "02",
      title: "Fast, Functional Spikes",
      subtitle: "// seeing code in browser beats 50 slide decks.",
      body: "Within the first 5 business days, you receive a deployed staging URL or working prototype demonstrating core interaction, API flow, or model inference. You can click it, break it, and provide early feedback.",
    },
    {
      step: "03",
      title: "Clean Sprints & Transparent Commits",
      subtitle: "// predictable communication across timezones.",
      body: "I work with daily or bi-weekly Git commits, detailed pull request summaries, and loom video walkthroughs. Even with timezone differences, you will always know what was completed while you were sleeping.",
    },
    {
      step: "04",
      title: "Battle-Tested Launch & Handoff",
      subtitle: "// documentation your team can actually understand.",
      body: "I don't disappear after the final commit. Every project includes comprehensive README files, environment scripts, edge caching rules, and a 14-day warranty window for immediate fixes.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Notebook Wrapper Card with Paperclip */}
      <div className="relative rounded-sm bg-[#161B22] p-6 sm:p-12 border border-[#30363D] shadow-desk-card">
        {/* Paperclip in corner */}
        <div className="absolute -top-4 left-10 pointer-events-none">
          <PaperClip className="w-7 h-16" />
        </div>

        {/* Notebook Heading */}
        <header className="border-b border-[#30363D] pb-8 pl-4 sm:pl-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
            <span>Dev Notes</span>
            <span>&bull;</span>
            <span>Personal Story &amp; Working Model</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
            Hello, I&apos;m Asib Mahmud.
          </h1>
          <p className="font-hand text-xl sm:text-2xl text-highlighter mt-2">
            Software engineer, pragmatic builder, and curious tinkerer from Dhaka.
          </p>
        </header>

        {/* Story Section with Lined Notebook Margin */}
        <section className="mt-10 pl-4 sm:pl-8 relative">
          {/* Vertical Red Notebook Margin Line */}
          <div className="absolute top-0 bottom-0 left-0 sm:left-2 w-0.5 bg-vermilion/40 pointer-events-none" />

          <div className="space-y-6 font-body text-base sm:text-lg text-ink/85 leading-relaxed">
            <p>
              I graduated with a degree in <strong>Software Engineering</strong>, where I developed a deep appreciation for systems that stand up to real world chaos: high database loads, erratic network connections, and unoptimized frontend DOM trees.
            </p>
            <p>
              Rather than confining myself to one narrow stack, I bridge the divide between <strong>high-performance web frontend engineering</strong> (custom Next.js architectures, modern responsive layouts, and clean WordPress headless implementations) and <strong>applied machine learning / computer vision</strong>.
            </p>
            <p>
              When clients hire me, they aren&apos;t paying for an agency pyramid of junior developers overseen by account executives. You get direct, senior-level attention from an engineer who writes type-safe TypeScript, indexes database queries properly, and measures render latency in milliseconds.
            </p>
          </div>
        </section>

        {/* 4-Step Client Collaboration Process */}
        <section className="mt-16 pt-12 border-t border-[#30363D] pl-4 sm:pl-8">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block">
              The Process
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              How I work with international clients in 4 steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded bg-[#0D1117] p-5 border border-[#30363D] shadow-desk-flat flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-highlighter">
                    STEP {s.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mt-1">
                    {s.title}
                  </h3>
                  <div className="font-mono text-xs text-olive mt-0.5 mb-3">
                    {s.subtitle}
                  </div>
                  <p className="font-body text-sm text-ink/80 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Like to Work With */}
        <section className="mt-16 pt-12 border-t border-[#30363D] pl-4 sm:pl-8">
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block">
              Culture &amp; Communication
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              What I&apos;m like to work with.
            </h2>
          </div>

          <div className="space-y-4 font-body text-base text-ink/85 leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="font-mono text-highlighter font-bold text-sm mt-0.5">✔</span>
              <p>
                <strong>Quietly dependable:</strong> I deliver work before the deadline, not after an apology email. If a blocker emerges, you will know immediately with three suggested workarounds.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-highlighter font-bold text-sm mt-0.5">✔</span>
              <p>
                <strong>Pragmatic over dogmatic:</strong> I will never recommend rewriting your entire backend in Rust when an index on PostgreSQL solves the performance issue in ten minutes.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-highlighter font-bold text-sm mt-0.5">✔</span>
              <p>
                <strong>Asynchronous fluency:</strong> I document decisions thoroughly with code comments, pull request descriptions, and clear video walkthroughs, making collaboration effortless across timezones.
              </p>
            </div>
          </div>
        </section>

        {/* Currently Section */}
        <section className="mt-16 pt-12 border-t border-[#30363D] pl-4 sm:pl-8">
          <div className="rounded bg-[#0D1117] p-6 border border-[#30363D] shadow-desk-flat">
            <div className="font-mono text-xs uppercase tracking-widest text-olive font-bold mb-2">
              Currently &bull; Late 2026
            </div>
            <ul className="space-y-2 font-mono text-xs text-ink/90">
              <li>
                <span className="text-vermilion font-bold">Building:</span> Lightweight edge vision models &amp; modern editorial themes.
              </li>
              <li>
                <span className="text-vermilion font-bold">Reading:</span> Designing Data-Intensive Applications (Martin Kleppmann).
              </li>
              <li>
                <span className="text-vermilion font-bold">Location:</span> Dhaka, Bangladesh (UTC+6) with overlap for US/EU teams.
              </li>
              <li>
                <span className="text-vermilion font-bold">Availability:</span> Accepting select client projects starting [Q4 2026 / NEXT MONTH].
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-[#30363D] pl-4 sm:pl-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/contact"
            className="rounded bg-vermilion px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors shadow-xs"
          >
            Start a Project Conversation →
          </Link>
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-wider text-highlighter hover:underline transition-colors"
          >
            Browse Case Studies →
          </Link>
        </div>
      </div>
    </div>
  );
}
