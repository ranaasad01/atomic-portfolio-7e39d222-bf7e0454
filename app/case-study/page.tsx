"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { brand } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Static data ────────────────────────────────────────────────────────────

const stats = [
  { label: "2M+ Users", value: "2M+" },
  { label: "38% Fewer Tickets", value: "38%" },
  { label: "6-Month Timeline", value: "6 mo" },
];

const timelineSteps = [
  {
    id: 1,
    title: "Discovery & Research",
    description:
      "Conducted 24 user interviews, reviewed analytics, and audited competitor apps to map pain points and uncover unmet needs.",
  },
  {
    id: 2,
    title: "Define & Synthesize",
    description:
      "Synthesised findings into affinity maps, journey maps, and a clear problem statement aligned with business goals.",
  },
  {
    id: 3,
    title: "Ideate & Prototype",
    description:
      "Ran design sprints to explore 30+ concepts. Narrowed to three directions and built high-fidelity prototypes in Figma.",
  },
  {
    id: 4,
    title: "Test & Iterate",
    description:
      "Ran moderated usability tests with 18 participants across two rounds, iterating on navigation, copy, and micro-interactions.",
  },
  {
    id: 5,
    title: "Ship & Measure",
    description:
      "Collaborated with engineering on a phased rollout. Tracked KPIs weekly and shipped three follow-up iterations post-launch.",
  },
];

const metrics = [
  {
    id: "m1",
    value: "38%",
    label: "Reduction in support tickets",
    context:
      "Progressive disclosure and contextual help eliminated the most common user confusion points.",
  },
  {
    id: "m2",
    value: "61%",
    label: "Faster task completion",
    context:
      "Streamlined navigation and a redesigned transaction flow cut average task time from 2 min 10 s to 51 s.",
  },
  {
    id: "m3",
    value: "4.8★",
    label: "App Store rating",
    context:
      "Up from 3.2 stars pre-launch. Users praised the clarity, speed, and visual polish of the new experience.",
  },
  {
    id: "m4",
    value: "2.1M",
    label: "Active users post-launch",
    context:
      "A 47% increase in monthly active users within 90 days of the redesign going live.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function CaseStudyPage() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-900/30 to-[#0D0D0D] pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-widest text-rose-400"
            >
              Case Study · {brand.name}
            </motion.p>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
            >
              Meridian Finance
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-medium text-rose-400"
            >
              Mobile Banking Redesign
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
            >
              Rebuilding trust in personal finance — one interaction at a time.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600/20 border border-rose-500/30 text-sm font-medium text-rose-300"
                >
                  <span className="font-bold text-white">{stat.value}</span>
                  {stat.label}
                </span>
              ))}
            </motion.div>

            {/* Hero image placeholder */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 w-full aspect-video bg-[#1A1A1A] rounded-2xl border border-white/5 flex items-center justify-center"
            >
              <span className="text-white/20 text-sm font-medium tracking-wide uppercase">
                Project Hero Image
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Problem / Solution ───────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Problem */}
            <motion.div
              variants={fadeInUp}
              className="border-l-2 border-rose-500 pl-6 space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold">The Problem</h2>
              <p className="text-white/60 leading-relaxed">
                Meridian's legacy mobile app had accumulated years of feature
                additions without a coherent information architecture. Navigation
                was fragmented across five bottom-tab categories, key actions
                like bill pay and transfers were buried three levels deep, and
                the onboarding flow had a 42% drop-off rate on the identity
                verification step alone.
              </p>
              <p className="text-white/60 leading-relaxed">
                Customer support tickets averaged 18,000 per month — 60% of
                which were "how do I…" questions that pointed directly to
                discoverability failures in the UI. Trust scores in quarterly
                NPS surveys had fallen for three consecutive quarters.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={fadeInUp}
              className="border-l-2 border-rose-500 pl-6 space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold">The Solution</h2>
              <p className="text-white/60 leading-relaxed">
                We rebuilt the app from the ground up around a single guiding
                principle: show users only what they need, exactly when they
                need it. Progressive disclosure replaced the cluttered dashboard
                with a contextual home screen that surfaces relevant actions
                based on time of day, account activity, and user history.
              </p>
              <p className="text-white/60 leading-relaxed">
                A new design system — 80 components, a unified token
                architecture, and a Figma-to-code pipeline — ensured visual
                consistency across every screen. Contextual help tooltips and
                inline guidance replaced the need for a separate help centre for
                the most common tasks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Process Timeline ──────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Design Process</h2>
            <p className="mt-3 text-white/50 max-w-xl">
              A structured, research-led process that kept user needs at the
              centre of every decision.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row gap-6"
          >
            {timelineSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={scaleIn}
                className="flex-1 bg-[#1A1A1A] rounded-xl p-6 border border-white/5 hover:border-rose-500/30 transition-colors duration-300"
              >
                <span className="inline-block text-3xl font-bold text-rose-500 mb-3 leading-none">
                  {String(step.id).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Outcome Metrics ───────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-[#1A1A1A] rounded-2xl p-10 md:p-14 border border-white/5"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Results &amp; Impact</h2>
              <p className="mt-3 text-white/50 max-w-xl">
                Measured over the 90 days following the full production rollout.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {metrics.map((metric) => (
                <motion.div
                  key={metric.id}
                  variants={fadeInUp}
                  className="space-y-2"
                >
                  <p className="text-4xl md:text-5xl font-bold text-rose-400">
                    {metric.value}
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {metric.label}
                  </p>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {metric.context}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: CTA ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center gap-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-widest text-white/30"
            >
              Explore more
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Ready to see what else I've built?
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-medium transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_36px_rgba(124,58,237,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              >
                Next Project
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/15 hover:border-rose-500/50 text-white/70 hover:text-white font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              >
                <ArrowLeft size={16} />
                Back to Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
