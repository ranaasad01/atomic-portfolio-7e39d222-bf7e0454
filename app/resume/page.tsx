"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, MapPin, CheckCircle } from 'lucide-react';
import { brand } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  {
    id: "e1",
    company: "Stripe",
    role: "Senior Product Designer",
    period: "2022 – Present",
    bullets: [
      "Led design for Stripe's merchant dashboard, owning 3 core product areas end-to-end.",
      "Maintained and evolved a design system adopted by 20+ engineers across 4 squads.",
      "Reduced merchant onboarding drop-off by 32% through iterative usability testing.",
    ],
  },
  {
    id: "e2",
    company: "Figma",
    role: "Product Designer",
    period: "2020 – 2022",
    bullets: [
      "Designed collaborative features for FigJam, contributing to a 200% increase in daily active users.",
      "Partnered with engineering to ship real-time cursor presence and sticky-note clustering.",
      "Ran 40+ moderated research sessions to validate whiteboard interaction patterns.",
    ],
  },
  {
    id: "e3",
    company: "Airbnb",
    role: "UX Designer",
    period: "2018 – 2020",
    bullets: [
      "Redesigned the host onboarding flow, reducing time-to-first-listing by 45%.",
      "Introduced a progressive-disclosure pattern that cut support tickets by 28%.",
      "Collaborated with data science to instrument and analyse funnel drop-off points.",
    ],
  },
  {
    id: "e4",
    company: "IDEO",
    role: "Junior Designer",
    period: "2016 – 2018",
    bullets: [
      "Worked on human-centered design projects across healthcare, fintech, and education verticals.",
      "Facilitated co-design workshops with 100+ stakeholders across three continents.",
      "Produced high-fidelity prototypes and research synthesis decks for Fortune 500 clients.",
    ],
  },
];

const education = [
  {
    id: "ed1",
    degree: "MFA Interaction Design",
    school: "California College of the Arts",
    year: "2016",
    note: "Thesis: Ambient Interfaces and the Ethics of Invisible Design",
  },
  {
    id: "ed2",
    degree: "BA Graphic Design",
    school: "UCLA",
    year: "2014",
    note: "Graduated with Distinction · Dean's List 2012–2014",
  },
];

const designTools = ["Figma", "Framer", "Principle", "Adobe CC", "Sketch"];
const methods = [
  "User Research",
  "Usability Testing",
  "Design Systems",
  "Prototyping",
  "Accessibility",
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
      {children}
    </h2>
  );
}

function TimelineCard({
  title,
  subtitle,
  period,
  bullets,
  note,
}: {
  title: string;
  subtitle?: string;
  period?: string;
  bullets?: string[];
  note?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative bg-[#1A1A1A] rounded-xl p-6 mb-4 border-l-4 border-rose-600 overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 to-transparent pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <p className="text-base font-bold text-white">{title}</p>
          {subtitle && (
            <p className="text-sm text-rose-400 font-medium mt-0.5">{subtitle}</p>
          )}
        </div>
        {period && (
          <span className="text-xs text-white/40 whitespace-nowrap mt-1 sm:mt-0">
            {period}
          </span>
        )}
      </div>

      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/60 leading-relaxed">
              <CheckCircle size={14} className="text-rose-500 mt-0.5 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {note && (
        <p className="text-sm text-white/40 mt-3 italic">{note}</p>
      )}
    </motion.div>
  );
}

function PillTag({ label }: { label: string }) {
  return (
    <motion.span
      variants={scaleIn}
      className="inline-block bg-rose-600/20 text-rose-300 rounded-full px-3 py-1 text-sm"
    >
      {label}
    </motion.span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Availability badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                Available for freelance
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              Résumé
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={fadeInUp} className="space-y-1">
              <p className="text-xl text-white/80 font-medium">
                {brand.name} —{" "}
                <span className="text-rose-400">{brand.role}</span>
              </p>
              <p className="flex items-center gap-1.5 text-sm text-white/40">
                <MapPin size={13} />
                {brand.location}
              </p>
            </motion.div>

            {/* Download CTA */}
            <motion.div variants={fadeInUp}>
              <a
                href="#"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_36px_rgba(124,58,237,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              >
                <Download size={15} />
                Download PDF
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="border-t border-white/5" />
      </div>

      {/* ── Work Experience ── */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Experience</SectionHeading>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {experience.map((job) => (
              <TimelineCard
                key={job.id}
                title={job.company}
                subtitle={job.role}
                period={job.period}
                bullets={job.bullets}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="border-t border-white/5" />
      </div>

      {/* ── Education ── */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Education</SectionHeading>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {education.map((ed) => (
              <TimelineCard
                key={ed.id}
                title={ed.degree}
                subtitle={ed.school}
                period={ed.year}
                note={ed.note}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="border-t border-white/5" />
      </div>

      {/* ── Tools & Skills ── */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Tools &amp; Skills</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Design Tools */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                Design Tools
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-2"
              >
                {designTools.map((tool) => (
                  <PillTag key={tool} label={tool} />
                ))}
              </motion.div>
            </div>

            {/* Methods */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                Methods
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-2"
              >
                {methods.map((method) => (
                  <PillTag key={method} label={method} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="border-t border-white/5" />
      </div>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            variants={fadeInUp}
            href="#"
            download
            className="inline-flex items-center gap-2 px-7 py-3 bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_36px_rgba(124,58,237,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
          >
            <Download size={15} />
            Download PDF
          </motion.a>

          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 hover:border-rose-500/60 text-white/70 hover:text-white text-sm font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
