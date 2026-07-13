"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Types ──────────────────────────────────────────────────────────────────

type Category = "All" | "Motion" | "UI Exploration" | "Side Projects" | "Tools";

interface Experiment {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  tags: string[];
  previewHeight: "h-40" | "h-56";
  gradient: string;
  previewLabel: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = ["All", "Motion", "UI Exploration", "Side Projects", "Tools"];

const EXPERIMENTS: Experiment[] = [
  {
    id: "e1",
    title: "Liquid Menu",
    category: "Motion",
    description:
      "A fluid navigation menu with spring physics and magnetic hover effects.",
    tags: ["Framer Motion", "CSS"],
    previewHeight: "h-56",
    gradient: "from-rose-600/40 to-indigo-800/40",
    previewLabel: "Spring Physics",
  },
  {
    id: "e2",
    title: "Token Visualizer",
    category: "Tools",
    description:
      "An interactive tool for exploring design token relationships and inheritance.",
    tags: ["React", "D3"],
    previewHeight: "h-40",
    gradient: "from-orange-600/40 to-teal-800/40",
    previewLabel: "Token Graph",
  },
  {
    id: "e3",
    title: "Scroll Storytelling",
    category: "Motion",
    description:
      "A scroll-driven narrative experiment with parallax layers and SVG morphing.",
    tags: ["GSAP", "SVG"],
    previewHeight: "h-40",
    gradient: "from-amber-600/40 to-orange-800/40",
    previewLabel: "Parallax Layers",
  },
  {
    id: "e4",
    title: "Dark Mode Toggle",
    category: "UI Exploration",
    description:
      "A collection of 12 dark mode toggle variants, from minimal to theatrical.",
    tags: ["CSS", "Framer"],
    previewHeight: "h-56",
    gradient: "from-slate-600/40 to-zinc-800/40",
    previewLabel: "12 Variants",
  },
  {
    id: "e5",
    title: "Type Scale Explorer",
    category: "Tools",
    description:
      "A live type scale calculator with optical sizing and fluid typography.",
    tags: ["React", "CSS"],
    previewHeight: "h-56",
    gradient: "from-pink-600/40 to-rose-800/40",
    previewLabel: "Fluid Type",
  },
  {
    id: "e6",
    title: "Glassmorphism Kit",
    category: "UI Exploration",
    description:
      "A set of glass-effect UI components with configurable blur, opacity, and border.",
    tags: ["Figma", "CSS"],
    previewHeight: "h-40",
    gradient: "from-sky-600/40 to-blue-800/40",
    previewLabel: "Glass Effects",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <motion.div
      variants={scaleIn}
      className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-rose-500/50 transition-all duration-300 group mb-6 break-inside-avoid"
    >
      {/* Preview area */}
      <div
        className={`${experiment.previewHeight} bg-gradient-to-br ${experiment.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
          {experiment.previewLabel}
        </span>
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <span className="text-rose-400 text-xs font-medium uppercase tracking-wider">
          {experiment.category}
        </span>
        <h3 className="font-semibold text-white group-hover:text-rose-300 transition-colors duration-200">
          {experiment.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed">
          {experiment.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {experiment.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function PlaygroundPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? EXPERIMENTS
      : EXPERIMENTS.filter((e) => e.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <h1 className="text-5xl font-bold text-white">
                Playground
              </h1>
              <span className="bg-rose-600/30 text-rose-300 text-xs rounded-full px-2 py-0.5 font-medium">
                BETA
              </span>
            </div>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              A space for experiments, explorations, and things that don&apos;t
              fit anywhere else.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Filter Tabs ──────────────────────────────────────── */}
      <section className="pb-12 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-rose-600 text-white border-rose-600 shadow-[0_0_16px_rgba(124,58,237,0.4)]"
                    : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Experiments Grid ─────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="columns-1 md:columns-2 lg:columns-3 gap-6"
            >
              {filtered.map((experiment) => (
                <ExperimentCard key={experiment.id} experiment={experiment} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-24 text-white/30">
              No experiments in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── Section 4: Open Source CTA ──────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-[#1A1A1A] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5"
          >
            {/* Left text */}
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">
                Everything here is open source.
              </h2>
              <p className="text-white/50">
                Fork it, remix it, make it yours.
              </p>
            </div>

            {/* Right CTA */}
            <Link
              href="https://github.com/alexrivera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_28px_rgba(124,58,237,0.5)] shrink-0"
            >
              <Code2 size={16} />
              View on GitHub
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
