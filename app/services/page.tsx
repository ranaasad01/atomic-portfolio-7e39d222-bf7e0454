"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Zap, Layout, Check } from 'lucide-react';
import { brand } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "ux-audit",
    icon: <Eye size={24} className="text-rose-400" />,
    title: "UX Audit",
    description:
      "A comprehensive review of your product's usability, accessibility, and conversion flows. Delivered as a prioritized report with actionable recommendations.",
    deliverables: [
      "Heuristic evaluation",
      "User flow analysis",
      "Accessibility report",
      "Prioritized fix list",
    ],
    price: "Starting at $2,500",
  },
  {
    id: "design-sprint",
    icon: <Zap size={24} className="text-rose-400" />,
    title: "Product Design Sprint",
    description:
      "A focused 2-week engagement to solve a specific product challenge. From problem framing to tested prototype, fast.",
    deliverables: [
      "Problem framing workshop",
      "Competitive analysis",
      "Wireframes & prototype",
      "Usability test report",
    ],
    price: "Starting at $8,000",
  },
  {
    id: "design-system",
    icon: <Layout size={24} className="text-rose-400" />,
    title: "Design System Build",
    description:
      "A scalable, token-based design system built in Figma with developer handoff documentation and component guidelines.",
    deliverables: [
      "Token architecture",
      "50+ components",
      "Figma library",
      "Documentation site",
    ],
    price: "Starting at $15,000",
  },
];

const processSteps = [
  {
    id: "step-1",
    number: "01",
    title: "Discovery Call",
    description: "A 30-minute intro to align on goals, constraints, and whether we're a good fit.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Proposal & Scope",
    description: "A detailed statement of work delivered within 48 hours of our call.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Design & Iterate",
    description: "Weekly check-ins and async updates keep you in the loop at every stage.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Handoff & Support",
    description: "Clean Figma files, thorough docs, and two weeks of post-handoff support.",
  },
];

const faqs = [
  {
    id: "faq-1",
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. Some of my best work has been with seed-stage teams who needed to move fast and validate ideas quickly. I'm comfortable with ambiguity and can help you prioritize ruthlessly when resources are tight.",
  },
  {
    id: "faq-2",
    question: "What's your typical timeline?",
    answer:
      "It depends on the engagement. A UX audit typically wraps in 1–2 weeks, a design sprint in 2–3 weeks, and a full design system in 6–10 weeks. I'll give you a realistic timeline in the proposal before we start.",
  },
  {
    id: "faq-3",
    question: "Do you offer retainer arrangements?",
    answer:
      "Yes — for ongoing product teams I offer monthly retainers starting at $6,000/month for a set number of hours. Retainers work well for teams that need a consistent design partner rather than a one-off project.",
  },
  {
    id: "faq-4",
    question: "Can you work with our existing design team?",
    answer:
      "Definitely. I often embed alongside in-house designers as a senior contributor or design lead. I'm collaborative by nature and happy to work within your existing tools, processes, and design language.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Currently accepting new projects
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Services
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/60 leading-relaxed"
            >
              Focused freelance engagements for product teams who care about craft.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Service Offerings ────────────────────────────────── */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={scaleIn}
                className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 hover:border-rose-500/40 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="bg-rose-600/20 rounded-xl p-3 w-fit mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <Check size={14} className="text-rose-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <p className="text-rose-400 font-semibold text-lg border-t border-white/5 pt-6">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Process ──────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold">How We Work Together</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col md:flex-row gap-8"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="flex-1"
              >
                <div className="w-10 h-10 rounded-full bg-rose-600/20 border border-rose-500/30 flex items-center justify-center mb-4">
                  <span className="text-rose-400 text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Common Questions</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                className="bg-[#1A1A1A] rounded-xl p-6 mb-3 border border-white/5"
              >
                <h3 className="text-base font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: Booking CTA ──────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to start a project?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg leading-relaxed mb-10"
            >
              Send a brief description of your project and I'll get back to you within 24 hours.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-medium transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_32px_rgba(124,58,237,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              >
                Book a Discovery Call
              </Link>

              <a
                href={`mailto:${brand.email}`}
                className="px-8 py-3 rounded-full border border-white/10 hover:border-rose-500/50 text-white/70 hover:text-white font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              >
                {brand.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
