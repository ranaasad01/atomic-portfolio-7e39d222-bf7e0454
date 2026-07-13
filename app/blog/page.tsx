"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const CATEGORIES = [
  "All",
  "Design Systems",
  "UX Research",
  "Product Strategy",
  "Career",
  "Tools",
] as const;

type Category = (typeof CATEGORIES)[number];

interface Article {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  readTime: number;
  date: string;
  excerpt: string;
  gradient: string;
}

const articles: Article[] = [
  {
    id: "a1",
    title: "The Design System Trap",
    category: "Design Systems",
    readTime: 8,
    date: "Jan 2025",
    excerpt:
      "Most design systems are built with the best intentions but collapse under their own weight. Here's why they fail to scale — and what to do instead. The answer might surprise you.",
    gradient: "from-rose-600 to-rose-400",
  },
  {
    id: "a2",
    title: "Designing for Trust in Fintech",
    category: "Product Strategy",
    readTime: 6,
    date: "Dec 2024",
    excerpt:
      "Trust is the invisible currency of financial products. How micro-interactions, transparent language, and thoughtful error states build user confidence where it matters most.",
    gradient: "from-indigo-600 to-rose-400",
  },
  {
    id: "a3",
    title: "Research That Actually Ships",
    category: "UX Research",
    readTime: 5,
    date: "Nov 2024",
    excerpt:
      "A pragmatic framework for embedding research into fast-moving product teams. Stop writing reports nobody reads and start making research a living part of your sprint cycle.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    id: "a4",
    title: "The Case for Boring Design",
    category: "Product Strategy",
    readTime: 4,
    date: "Oct 2024",
    excerpt:
      "Novelty is seductive, but predictability is powerful. Why convention and familiarity often beat clever innovation in product design — and when to break the rule.",
    gradient: "from-fuchsia-600 to-rose-400",
  },
  {
    id: "a5",
    title: "Figma Variables: One Year In",
    category: "Tools",
    readTime: 7,
    date: "Sep 2024",
    excerpt:
      "A candid look at how Figma Variables changed — and didn't change — our design workflow. The wins were real, the rough edges were rougher than expected, and the future looks promising.",
    gradient: "from-rose-600 to-indigo-400",
  },
  {
    id: "a6",
    title: "From IC to Lead: What No One Tells You",
    category: "Career",
    readTime: 9,
    date: "Aug 2024",
    excerpt:
      "The invisible skills that matter most when you step into a design leadership role. Craft gets you there; communication, context-setting, and letting go keep you there.",
    gradient: "from-rose-500 to-purple-400",
  },
];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
                Blog
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Writing
              </h1>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 max-w-xl leading-relaxed"
            >
              Thoughts on design, craft, and building products people love.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filters ─────────────────────────────────── */}
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-rose-600 text-white shadow-[0_0_16px_rgba(124,58,237,0.4)]"
                    : "bg-[#1A1A1A] text-white/60 hover:text-white border border-white/5 hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Article Grid ─────────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={scaleIn}
                className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-rose-500/50 transition-all duration-300 group flex flex-col"
              >
                {/* Colored top bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${article.gradient} flex-shrink-0`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Category tag */}
                  <span className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-3">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-white group-hover:text-rose-300 transition-colors duration-200 mb-3 leading-snug">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {article.readTime} min read
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-24 text-white/30">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ───────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 text-center border border-white/5"
          >
            <div className="max-w-lg mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Get new essays in your inbox
              </h2>
              <p className="text-white/50 leading-relaxed">
                No spam. Just thoughtful writing on design, shipped occasionally.
              </p>

              {subscribed ? (
                <div className="flex items-center justify-center gap-2 text-orange-400 font-medium pt-2">
                  <span className="w-5 h-5 rounded-full bg-orange-400/20 flex items-center justify-center">
                    ✓
                  </span>
                  You're subscribed — thanks!
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 pt-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-[#0D0D0D] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-rose-500 outline-none transition-colors duration-200 text-sm"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_28px_rgba(124,58,237,0.5)] whitespace-nowrap"
                  >
                    Subscribe
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
