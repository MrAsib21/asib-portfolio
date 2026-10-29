import React from "react";
import Link from "next/link";
import { services } from "@/content/services";

export const metadata = {
  title: "Services & Client Engagements — Asib Mahmud",
  description: "High-performance web engineering, custom WordPress architectures, and computer vision models for international clients.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="border-b border-[#30363D] pb-10">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
          <span>Client Work</span>
          <span>/</span>
          <span>Offerings &amp; Engagements</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          How We Can Work Together
        </h1>
        <p className="mt-4 font-body text-base sm:text-lg text-olive max-w-2xl leading-relaxed">
          I provide dedicated contract engineering and technical consulting for international teams. No fabricated agency markups or hidden fees—just senior craft and straightforward milestones.
        </p>
      </header>

      {/* Services List */}
      <div className="mt-14 space-y-16">
        {services.map((service) => (
          <article
            key={service.id}
            className="rounded border border-[#30363D] bg-[#161B22] p-6 sm:p-10 shadow-desk-card"
          >
            <div className="flex items-start justify-between border-b border-[#30363D] pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
                  PACKAGE {service.number}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
                  {service.title}
                </h2>
                <p className="font-body text-base sm:text-lg text-olive mt-2 max-w-3xl leading-relaxed">
                  {service.tagline}
                </p>
              </div>
            </div>

            {/* Two-Column Details: Who It's For vs. What You Get */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-[#30363D] pb-8">
              {/* Who It's For */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-olive font-semibold block">
                  Who This Is For:
                </span>
                <ul className="space-y-3 font-body text-sm sm:text-base text-ink/85">
                  {service.whoItsFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-vermilion font-bold font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You Get */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-olive font-semibold block">
                  Deliverables &amp; Artifacts:
                </span>
                <ul className="space-y-3 font-body text-sm sm:text-base text-ink/85">
                  {service.whatYouGet.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-highlighter font-bold font-mono">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Typical Process Steps */}
            <div className="mt-8 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-olive font-semibold block mb-4">
                Typical Engagement Workflow:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="rounded bg-[#0D1117] border border-[#30363D] p-4 shadow-desk-flat"
                  >
                    <div className="font-mono text-xs font-bold text-vermilion mb-1">
                      STEP {step.step}
                    </div>
                    <div className="font-display text-sm font-bold text-white">
                      {step.title}
                    </div>
                    <p className="mt-1 font-body text-xs text-olive leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bar: Timeline & Conversation Starter */}
            <div className="mt-8 pt-6 border-t border-[#30363D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="text-olive">
                <span className="font-bold text-white">Timeline:</span> {service.timeline}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded bg-vermilion px-4 py-2 uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors shadow-xs"
              >
                <span>Start a Conversation</span>
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Starting a Conversation Callout */}
      <footer className="mt-16 rounded border border-[#30363D] bg-[#161B22] p-8 sm:p-12 shadow-desk-card">
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
            Clear Engagements
          </span>
          <h2 className="font-display text-3xl font-bold text-white">
            No mystery pricing. Let&apos;s evaluate the scope together.
          </h2>
          <p className="font-body text-base text-ink/80 leading-relaxed">
            Every software problem has its own quirks. Send me a summary of what you need built, your timeline, and your target outcome. If I am the right engineer for the job, I will provide a fixed scope or weekly sprint quote within 48 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-vermilion px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
