"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";

const featuredTestimonial = {
  quote:
    "Working with Alex was the best design investment we've made. The Meridian redesign didn't just look better — it fundamentally changed how our users relate to their money.",
  name: "Sarah Chen",
  title: "CPO, Meridian Finance",
  initials: "SC",
};

const testimonials = [
  {
    id: "t1",
    quote:
      "Alex has a rare ability to translate ambiguous product requirements into elegant, intuitive interfaces. Our team's velocity doubled after she built our design system.",
    name: "Marcus Johnson",
    title: "VP Product",
    company: "Orbit Workspace",
    initials: "MJ",
  },
  {
    id: "t2",
    quote:
      "The UX audit Alex delivered was the most actionable design document I've ever received. We shipped 80% of the recommendations within a quarter.",
    name: "Priya Patel",
    title: "Head of Design",
    company: "Canopy Health",
    initials: "PP",
  },
  {
    id: "t3",
    quote:
      "Alex doesn't just design screens — she designs thinking. Her research synthesis sessions changed how our entire team approaches problems.",
    name: "Tom Nakamura",
    title: "CEO",
    company: "Luma Labs",
    initials: "TN",
  },
  {
    id: "t4",
    quote:
      "Incredibly collaborative, fast, and thorough. Alex felt like a true team member from day one, not a consultant.",
    name: "Elena Vasquez",
    title: "Product Manager",
    company: "Stripe",
    initials: "EV",
  },
];

const companies = [
  "Stripe",
  "Figma",
  "Airbnb",
  "IDEO",
  "Meridian",
  "Canopy",
  "Orbit",
];

const stats = [
  { label: "40+ Projects" },
  { label: "15+ Clients" },
  { label: "5★ Average" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* ── Section 1: Hero ── */}
      <section className="pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold tracking-tight"
            >
              What People Say
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl mx-auto"
            >
              Kind words from clients, collaborators, and colleagues.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-3 pt-2"
            >
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="px-5 py-2 rounded-full bg-[#1A1A1A] border border-white/10 text-sm font-medium text-white/70"
                >
                  {stat.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Featured Testimonial ── */}
      <section className="py-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-[#1A1A1A] rounded-3xl p-12 md:p-16 border border-rose-500/20"
          >
            {/* Opening quote mark */}
            <div className="text-8xl font-serif leading-none text-rose-600 select-none mb-6">
              &ldquo;
            </div>

            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-10">
              {featuredTestimonial.quote}
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-600/30 flex items-center justify-center text-rose-300 font-bold text-sm flex-shrink-0">
                {featuredTestimonial.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{featuredTestimonial.name}</p>
                <p className="text-sm text-white/50">{featuredTestimonial.title}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Testimonial Grid ── */}
      <section className="py-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={scaleIn}
                className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 hover:border-rose-500/30 transition-all duration-300 flex flex-col gap-6"
              >
                {/* Quote mark */}
                <div className="text-4xl text-rose-500/40 font-serif leading-none select-none">
                  &ldquo;
                </div>

                <p className="text-white/80 leading-relaxed flex-1">{t.quote}</p>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-rose-600/20 flex items-center justify-center text-rose-300 font-bold text-xs flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/50 text-xs">{t.title}</p>
                    </div>
                  </div>

                  {/* Company logo placeholder */}
                  <span className="bg-white/5 rounded px-3 py-1 text-white/30 text-xs font-medium border border-white/5 whitespace-nowrap">
                    {t.company}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Logo Wall ── */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-8"
          >
            <p className="text-center text-white/40 text-sm uppercase tracking-widest">
              Trusted by teams at
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {companies.map((company) => (
                <span
                  key={company}
                  className="bg-[#1A1A1A] rounded-lg px-6 py-3 text-white/30 font-semibold text-sm border border-white/5"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Want to work together?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/60 text-lg">
              I&apos;m currently available for new projects.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-medium transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_32px_rgba(124,58,237,0.55)]"
              >
                Get in Touch
              </Link>
              <Link
                href="/#work"
                className="px-8 py-3 rounded-full border border-white/20 hover:border-rose-500/50 text-white/70 hover:text-white font-medium transition-all duration-200"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
