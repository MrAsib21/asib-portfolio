"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web & WordPress Rebuild",
    budget: "$2,000 – $5,000",
    message: "",
    website_confirm_field: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [dhakaTime, setDhakaTime] = useState("");

  useEffect(() => {
    function updateClock() {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setDhakaTime(formatter.format(now));
      } catch {
        setDhakaTime("18:54:00");
      }
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "Web & WordPress Rebuild",
        budget: "$2,000 – $5,000",
        message: "",
        website_confirm_field: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please email directly.");
      }
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="border-b border-[#30363D] pb-10">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-vermilion font-semibold">
          <span>Inquiries</span>
          <span>/</span>
          <span>Start a Project</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Let&apos;s Build Something Dependable
        </h1>
        <p className="mt-4 font-body text-base sm:text-lg text-olive max-w-2xl leading-relaxed">
          I am currently booking select freelance projects and remote contract roles for Q4 &apos;26. Fill out the inquiry form or reach out directly via email.
        </p>
      </header>

      {/* Main Grid: Form + Timezone & Direct Contacts */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Form Card */}
        <div className="lg:col-span-7 rounded border border-[#30363D] bg-[#161B22] p-6 sm:p-8 shadow-desk-card relative">
          <div className="flex items-center justify-between pb-6 border-b border-[#30363D]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
                Project Inquiry
              </span>
              <h2 className="font-display text-2xl font-bold text-white mt-0.5">
                Send a Message
              </h2>
            </div>
            <span className="font-mono text-[10px] text-olive uppercase tracking-wider">
              Typical reply &lt; 24h
            </span>
          </div>

          {status === "success" ? (
            <div className="mt-8 rounded bg-[#102B1D] border border-[#255C41] p-6 text-center space-y-3">
              <div className="font-mono text-lg font-bold text-[#50FA7B]">
                ✔ Message Delivered Successfully!
              </div>
              <p className="font-body text-sm text-ink/80 leading-relaxed max-w-md mx-auto">
                Thank you for getting in touch. I review new inquiries every morning (Asia/Dhaka time) and will respond within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-highlighter underline font-semibold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Hidden honeypot field for bot detection */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website_confirm_field">Leave this empty</label>
                <input
                  id="website_confirm_field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_confirm_field}
                  onChange={(e) =>
                    setFormData({ ...formData, website_confirm_field: e.target.value })
                  }
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2"
                  >
                    Your Name <span className="text-vermilion">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded bg-[#0D1117] border border-[#30363D] px-3.5 py-2.5 font-body text-sm text-white placeholder:text-olive/50 focus:border-highlighter focus:ring-1 focus:ring-highlighter outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2"
                  >
                    Your Email <span className="text-vermilion">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded bg-[#0D1117] border border-[#30363D] px-3.5 py-2.5 font-body text-sm text-white placeholder:text-olive/50 focus:border-highlighter focus:ring-1 focus:ring-highlighter outline-none"
                  />
                </div>
              </div>

              {/* Project Type & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="projectType"
                    className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2"
                  >
                    Project Focus
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded bg-[#0D1117] border border-[#30363D] px-3.5 py-2.5 font-body text-sm text-white focus:border-highlighter focus:ring-1 focus:ring-highlighter outline-none"
                  >
                    <option value="Web & WordPress Rebuild">Web &amp; WordPress Rebuild</option>
                    <option value="Custom Software / API">Custom Software / API</option>
                    <option value="AI / Computer Vision Prototype">AI / Computer Vision Prototype</option>
                    <option value="Performance Audit">Performance &amp; Code Audit</option>
                    <option value="Full-Time Contract Role">Full-Time Contract Role</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2"
                  >
                    Target Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded bg-[#0D1117] border border-[#30363D] px-3.5 py-2.5 font-body text-sm text-white focus:border-highlighter focus:ring-1 focus:ring-highlighter outline-none"
                  >
                    <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                    <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                    <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                    <option value="Monthly Retainer">Monthly Retainer</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-2"
                >
                  Project Summary &amp; Goals <span className="text-vermilion">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about your product, what you need built, your timeline, and any existing repos or design files."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded bg-[#0D1117] border border-[#30363D] p-3.5 font-body text-sm text-white placeholder:text-olive/50 focus:border-highlighter focus:ring-1 focus:ring-highlighter outline-none"
                />
              </div>

              {status === "error" && (
                <div className="rounded bg-vermilion/20 border border-vermilion/50 p-3 text-xs font-mono text-vermilion">
                  Error: {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded bg-vermilion py-3 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors shadow-sm disabled:opacity-50"
              >
                {status === "submitting" ? "Dispatching Message..." : "Send Project Inquiry →"}
              </button>
            </form>
          )}
        </div>

        {/* Right: Direct Details & Timezone Overlap */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Contact Card */}
          <div className="rounded border border-[#30363D] bg-[#161B22] p-6 shadow-desk-card">
            <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold block mb-2">
              Direct Channels
            </span>
            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-olive block text-[10px] uppercase">// email</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-white underline decoration-vermilion hover:text-vermilion transition-colors"
                >
                  <PlaceholderBadge text={siteConfig.email} />
                </a>
              </div>
              <div>
                <span className="text-olive block text-[10px] uppercase">// calendar booking</span>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-highlighter hover:underline"
                >
                  <PlaceholderBadge text={siteConfig.bookingUrl} />
                </a>
              </div>
              <div className="pt-2 flex gap-4">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-olive hover:text-highlighter transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-olive hover:text-highlighter transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Asia/Dhaka Timezone & International Overlap Table */}
          <div className="rounded border border-[#30363D] bg-[#161B22] p-6 shadow-desk-card space-y-4">
            <div className="flex items-center justify-between border-b border-[#30363D] pb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-vermilion font-bold block">
                  Studio Timezone
                </span>
                <div className="font-display text-lg font-bold text-white">
                  Dhaka, Bangladesh (UTC+6)
                </div>
              </div>
              <div className="font-mono text-xs font-bold text-highlighter bg-[#0D1117] px-2.5 py-1 rounded border border-[#30363D] shadow-xs">
                {dhakaTime ? `${dhakaTime} BST` : "UTC+6"}
              </div>
            </div>

            <p className="font-body text-xs text-olive leading-relaxed">
              I collaborate smoothly with international clients. Below are typical daily working overlap windows:
            </p>

            <div className="space-y-3 font-mono text-xs">
              {siteConfig.workingOverlap.map((w) => (
                <div key={w.region} className="rounded bg-[#0D1117] p-3 border border-[#30363D]">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span>{w.region}</span>
                    <span className="text-highlighter text-[11px]">{w.localWindow}</span>
                  </div>
                  <div className="text-[11px] text-olive mt-1">
                    {w.overlapHours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
