"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Send, Check, ExternalLink } from 'lucide-react';
import { brand, socialLinks } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/motion";

const PROJECT_TYPES = ["UX Audit", "Design Sprint", "Design System", "Other"] as const;
type ProjectType = (typeof PROJECT_TYPES)[number];

const BUDGET_RANGES = ["Under $5k", "$5k–$15k", "$15k–$50k", "$50k+"] as const;

const iconMap: Record<string, React.ReactNode> = {
  Twitter: <Twitter size={18} />,
  Linkedin: <Linkedin size={18} />,
  Github: <Github size={18} />,
};

const FAQ_ITEMS = [
  {
    id: "faq1",
    question: "What's your typical process?",
    answer:
      "I start every engagement with a discovery phase — understanding your users, business goals, and constraints. From there I move into ideation, prototyping, and iterative testing before handing off polished, developer-ready designs.",
  },
  {
    id: "faq2",
    question: "How long does a project take?",
    answer:
      "Scope varies by project type. A focused UX audit typically takes 1–2 weeks, while a full product design sprint runs 4–6 weeks. Design system builds are scoped individually — usually 6–12 weeks depending on complexity.",
  },
  {
    id: "faq3",
    question: "Do you offer ongoing support?",
    answer:
      "Yes — I offer monthly retainer arrangements for teams that need a dedicated design partner beyond the initial project. This covers design reviews, new feature work, and async consultation as your product evolves.",
  },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<ProjectType | "">("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#0D0D0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-rose-500 outline-none transition-colors";

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
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
              Let&apos;s Work{" "}
              <span className="text-rose-400">Together</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/60 max-w-xl"
            >
              Have a project in mind? I&apos;d love to hear about it.
            </motion.p>

            {/* Info pills */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              <span className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded-full px-4 py-2 text-sm text-white/70">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Available for new projects
              </span>
              <span className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded-full px-4 py-2 text-sm text-white/70">
                <MapPin size={14} className="text-rose-400" />
                PST — San Francisco
              </span>
              <span className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded-full px-4 py-2 text-sm text-white/70">
                <Clock size={14} className="text-rose-400" />
                Usually replies within 24h
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Two-column: Form + Info ───────────────────────────── */}
      <section className="py-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Left — Inquiry Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-3"
          >
            <div className="bg-[#1A1A1A] rounded-2xl p-8">
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold mb-8"
              >
                Send a Message
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={inputClass}
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={inputClass}
                  />
                </motion.div>

                {/* Project Type */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                          selectedType === type
                            ? "bg-rose-600 border-rose-600 text-white"
                            : "bg-transparent border-white/10 text-white/60 hover:border-rose-500 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Budget Range */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled className="bg-[#0D0D0D]">
                      Select a range…
                    </option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-[#0D0D0D]">
                        {range}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={fadeInUp}>
                  {submitted ? (
                    <div className="w-full flex items-center justify-center gap-2 bg-orange-600/20 border border-orange-500/30 text-orange-400 rounded-lg py-3 font-semibold">
                      <Check size={18} />
                      Message sent! I&apos;ll be in touch soon.
                    </div>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg py-3 font-semibold transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_28px_rgba(124,58,237,0.5)]"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.button>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-2 space-y-6"
          >
            {/* Info card */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 space-y-6">
              {/* Email */}
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  Email
                </p>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-rose-400 hover:text-rose-300 transition-colors text-sm font-medium"
                >
                  {brand.email}
                </a>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  Based in
                </p>
                <p className="text-sm text-white/70">{brand.location}</p>
              </div>

              {/* Availability */}
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-sm text-white/70">Open to new projects</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5" />

              {/* Social links */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  Find me online
                </p>
                <div className="flex flex-col gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-white/60 hover:text-rose-300 transition-colors group"
                    >
                      <span className="flex items-center gap-2">
                        {iconMap[link.icon]}
                        {link.label}
                      </span>
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5" />

              {/* Direct email note */}
              <p className="text-xs text-white/40 leading-relaxed">
                Prefer email? Reach out directly at{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="text-rose-400 hover:text-rose-300 transition-colors"
                >
                  {brand.email}
                </a>
              </p>
            </div>

            {/* Response time card */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-rose-500/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-rose-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Quick response guaranteed</p>
                  <p className="text-xs text-white/40 leading-relaxed">
                    I read every message personally and aim to respond within one business day. No automated replies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Strip ────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold text-white"
            >
              Frequently Asked
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {FAQ_ITEMS.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="bg-[#1A1A1A] rounded-xl p-6 space-y-3 border border-white/5 hover:border-rose-500/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
