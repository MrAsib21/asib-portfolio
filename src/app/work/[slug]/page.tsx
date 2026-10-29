import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { CaseStudyHeader } from "@/components/editorial/CaseStudyHeader";
import { Marginalia, PullQuote } from "@/components/editorial/Marginalia";
import { BeforeAfterSlider } from "@/components/editorial/BeforeAfterSlider";
import { MetricsStrip } from "@/components/editorial/MetricsStrip";
import { ArchitectureDiagram } from "@/components/editorial/ArchitectureDiagram";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.title.replace(/\[|\]/g, "")} — Case Study`,
    description: project.hook,
    openGraph: {
      title: `${project.title.replace(/\[|\]/g, "")} — Asib Mahmud`,
      description: project.hook,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* 1. Spread Header & Monospace Metadata */}
      <CaseStudyHeader project={project} />

      {/* 2. Plain-English Summary (especially beneficial for non-technical stakeholders) */}
      {project.plainEnglishExplanation && (
        <section className="my-12 rounded border-l-4 border-vermilion bg-[#161B22] border-y border-r border-[#30363D] p-6 shadow-desk-flat">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
            <span>// Plain-English Summary for Stakeholders</span>
          </div>
          <p className="font-body text-base text-ink/90 leading-relaxed">
            {project.plainEnglishExplanation}
          </p>
        </section>
      )}

      {/* 3. Section: The Problem */}
      <section className="my-16 border-b border-[#30363D] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block">
              Phase 01 &bull; The Problem
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.problem.lead}
            </h2>
            {project.problem.paragraphs.map((p, idx) => (
              <p key={idx} className="font-body text-base text-ink/85 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-4 lg:pt-8">
            {project.marginalNotes[0] && (
              <Marginalia noteType={project.marginalNotes[0].noteType}>
                {project.marginalNotes[0].content}
              </Marginalia>
            )}
          </div>
        </div>

        {/* Pull Quote */}
        {project.problem.pullQuote && (
          <PullQuote quote={project.problem.pullQuote} attribution="Project Retrospective Note" />
        )}
      </section>

      {/* 4. Interactive Feature Element & Quantitative Strip */}
      <section className="my-16">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block mb-2">
          Phase 02 &bull; Interactive Verification &amp; Numbers
        </span>

        {project.interactiveType === "before-after" && project.beforeAfterConfig && (
          <BeforeAfterSlider
            beforeLabel={project.beforeAfterConfig.beforeLabel}
            afterLabel={project.beforeAfterConfig.afterLabel}
            beforeCaption={project.beforeAfterConfig.beforeCaption}
            afterCaption={project.beforeAfterConfig.afterCaption}
          />
        )}

        <MetricsStrip
          metrics={project.metrics}
          lighthouseScores={project.lighthouseScores}
        />
      </section>

      {/* 5. Section: What I Decided (and why) */}
      <section className="my-16 border-b border-[#30363D] pb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block mb-2">
          Phase 03 &bull; Engineering Decisions &amp; Tradeoffs
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">
          Architectural choices and what was explicitly rejected.
        </h2>

        <div className="space-y-6">
          {project.decisions.map((d, idx) => (
            <div
              key={idx}
              className="rounded border border-[#30363D] bg-[#161B22] p-6 shadow-desk-flat grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-7">
                <h3 className="font-display text-lg font-bold text-white">
                  {d.title}
                </h3>
                <p className="mt-3 font-body text-sm text-ink/80 leading-relaxed">
                  {d.rationale}
                </p>
              </div>

              <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#30363D] pt-4 md:pt-0 md:pl-6 font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-vermilion block mb-2 font-semibold">
                  Alternative Rejected
                </span>
                <p className="text-olive leading-relaxed">
                  {d.alternativesRejected}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. System Architecture Diagram */}
      <section className="my-16 border-b border-[#30363D] pb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block mb-2">
          Phase 04 &bull; Technical Topology
        </span>
        <ArchitectureDiagram
          summary={project.architecture.summary}
          steps={project.architecture.steps}
        />
      </section>

      {/* 7. Section: Results & Lessons Learned */}
      <section className="my-16 border-b border-[#30363D] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block">
              Phase 05 &bull; Outcome &amp; Retrospective
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.results.summary}
            </h2>

            <div className="mt-6 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-olive block font-semibold">
                Key Engineering Takeaways:
              </span>
              <ul className="space-y-2 font-body text-base text-ink/85">
                {project.results.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-vermilion font-mono font-bold mt-1">
                      0{tIdx + 1}.
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded bg-[#0D1117] border border-[#30363D] p-5">
              <span className="font-mono text-xs uppercase tracking-widest text-olive block mb-1">
                What I Learned
              </span>
              <p className="font-body text-base text-white italic">
                &ldquo;{project.results.whatLearned}&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-8">
            {project.marginalNotes[1] && (
              <Marginalia noteType={project.marginalNotes[1].noteType}>
                {project.marginalNotes[1].content}
              </Marginalia>
            )}
          </div>
        </div>
      </section>

      {/* 8. Bottom Spread: Next Project & Contact CTA */}
      <footer className="mt-16 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Next Project Teaser */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="group rounded border border-[#30363D] bg-[#161B22] p-6 shadow-desk-flat hover:shadow-desk-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-olive mb-2">
                <span className="uppercase tracking-widest text-vermilion font-semibold">
                  Next Case Study
                </span>
                <span>{nextProject.number} / 03</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-vermilion transition-colors">
                {nextProject.title}
              </h3>
              <p className="mt-2 font-body text-sm text-olive leading-relaxed line-clamp-2">
                {nextProject.hook}
              </p>
            </div>
            <div className="mt-6 font-mono text-xs text-highlighter group-hover:text-vermilion transition-colors font-semibold flex items-center gap-1">
              <span>Read next feature</span>
              <span>→</span>
            </div>
          </Link>

          {/* Contact Spread Card */}
          <div className="rounded border border-vermilion/40 bg-[#161B22] p-6 shadow-desk-flat flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-semibold block mb-2">
                Need similar engineering?
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Let&apos;s discuss your technical bottlenecks and timeline.
              </h3>
              <p className="mt-2 font-body text-sm text-ink/80 leading-relaxed">
                Available for international freelance projects and contracts.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/contact"
                className="rounded bg-vermilion px-4 py-2 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors shadow-xs"
              >
                Start a Conversation →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
