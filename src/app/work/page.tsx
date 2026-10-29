"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, ProjectCategory } from "@/content/projects";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Computer Vision",
  "AI/ML",
  "WordPress",
  "Web Development",
  "Software Engineering",
  "Data Science",
];

export default function WorkIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === selectedCategory ||
            p.secondaryCategories.includes(selectedCategory as ProjectCategory)
        );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <header className="border-b border-[#30363D] pb-10">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
          <span>Archive</span>
          <span>/</span>
          <span>Selected Projects</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Selected Engineering Features
        </h1>
        <p className="mt-4 font-body text-base sm:text-lg text-olive max-w-2xl leading-relaxed">
          In-depth technical writeups covering computer vision edge models, high-performance web systems, and resilient data processing pipelines.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-vermilion text-white font-semibold shadow-xs"
                    : "bg-[#161B22] text-olive border border-[#30363D] hover:border-olive/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </header>

      {/* Editorial Case Studies List */}
      <div className="mt-12 divide-y divide-[#30363D]">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="group py-12 transition-colors hover:bg-[#161B22]/70 px-4 -mx-4 rounded border border-transparent hover:border-[#30363D]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              {/* Project Large Number */}
              <div className="lg:col-span-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-olive/40 group-hover:text-vermilion transition-colors">
                  {project.number}
                </span>
              </div>

              {/* Title & Narrative Lead */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#21262D] text-highlighter uppercase tracking-wider font-semibold border border-[#30363D]">
                    {project.category}
                  </span>
                  <span className="text-olive">{project.year}</span>
                  <span className="text-olive/50">&bull;</span>
                  <span className="text-olive">
                    <PlaceholderBadge text={project.clientOrOrg} />
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-vermilion transition-colors leading-snug">
                  <Link href={`/work/${project.slug}`}>
                    <PlaceholderBadge text={project.title} />
                  </Link>
                </h2>

                <p className="font-body text-base text-ink/80 leading-relaxed">
                  {project.hook}
                </p>

                {/* Stack Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-[#0D1117] px-2 py-0.5 font-mono text-[10px] text-olive border border-[#30363D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics & Read Link */}
              <div className="lg:col-span-4 lg:text-right flex flex-col justify-between items-start lg:items-end gap-4">
                {project.metrics[0] && (
                  <div className="rounded bg-[#161B22] border border-[#30363D] p-3 shadow-xs text-left lg:text-right">
                    <div className="font-display text-2xl font-bold text-white">
                      <PlaceholderBadge text={project.metrics[0].value} />
                      <span className="font-mono text-xs text-vermilion ml-1">
                        {project.metrics[0].unit}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-olive mt-0.5">
                      {project.metrics[0].label}
                    </div>
                  </div>
                )}

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold text-highlighter hover:underline group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Case Study</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
