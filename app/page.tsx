"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, ExternalLink, Sparkles, Star, Eye, Layout, FileText, Activity, Check } from 'lucide-react';
import { brand, socialLinks } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import { useTranslations } from "next-intl";

// ─── Inline data ────────────────────────────────────────────────────────────

const projects = [
  {
    id: "p1",
    title: "Meridian Finance",
    subtitle: "Mobile Banking Redesign",
    description:
      "Rebuilt the core transaction experience for 2M+ users. Reduced support tickets by 38% through progressive disclosure and contextual help patterns.",
    image: "https://media.licdn.com/dms/image/v2/D560BAQGB8uVogDAXrg/company-logo_200_200/B56ZgqIKkUHQAM-/0/1753053440584?e=2147483647&v=beta&t=jdF-239hKRxS8L3yg3aNYP34yyFWJjSkuB9JT2NRRUc",
    tags: ["iOS", "Fintech", "Design System"],
    year: "2024",
    color: "from-rose-600/20 to-indigo-600/10",
    accent: "bg-rose-500",
  },
  {
    id: "p2",
    title: "Canopy Health",
    subtitle: "Patient Portal Platform",
    description:
      "End-to-end redesign of a healthcare portal serving 500K patients. Improved appointment booking completion by 61% with a streamlined 3-step flow.",
    image: "https://www.canopyhealth.com/wp-content/uploads/image001-1.png",
    tags: ["Web App", "Healthcare", "Research"],
    year: "2024",
    color: "from-orange-600/20 to-teal-600/10",
    accent: "bg-orange-500",
  },
  {
    id: "p3",
    title: "Orbit Workspace",
    subtitle: "Team Collaboration Tool",
    description:
      "Designed the information architecture and interaction model for a async-first collaboration platform. Shipped to 12K beta users in 6 weeks.",
    image: "https://img.peerspace.com/image/upload/f_auto,q_auto,dpr_auto,w_3840/qqo8tvdptjakvni67ksc",
    tags: ["SaaS", "B2B", "Prototyping"],
    year: "2023",
    color: "from-amber-600/20 to-orange-600/10",
    accent: "bg-amber-500",
  },
  {
    id: "p4",
    title: "Luma Design System",
    subtitle: "Component Library",
    description:
      "Built a cross-platform design system from scratch — 120+ components, token architecture, and Figma-to-code pipeline used by 4 product teams.",
    image: "https://cdn.prod.website-files.com/63062129119620a44791a2eb/68544a5d24c8a8ba31903b1f_6377085984d90e5299f39329_5e68496076612ccb932b5146_LUMA%25252520Systen.jpeg",
    tags: ["Design System", "Figma", "Tokens"],
    year: "2023",
    color: "from-pink-600/20 to-rose-600/10",
    accent: "bg-pink-500",
  },
];

const skills = [
  { label: "Product Strategy", icon: <Activity size={18} /> },
  { label: "Interaction Design", icon: <Layout size={18} /> },
  { label: "User Research", icon: <Eye size={18} /> },
  { label: "Design Systems", icon: <Star size={18} /> },
  { label: "Prototyping", icon: <Sparkles size={18} /> },
  { label: "Figma & Framer", icon: <FileText size={18} /> },
];

const stats = [
  { value: "7+", label: "Years of experience" },
  { value: "40+", label: "Products shipped" },
  { value: "12M+", label: "Users impacted" },
  { value: "3×", label: "Avg. conversion lift" },
];

const testimonials = [
  {
    id: "t1",
    quote:
      "Alex has a rare ability to hold the user's perspective and the business goal in the same hand. Every decision is intentional.",
    author: "Priya Nair",
    role: "VP Product, Meridian Finance",
    avatar: "https://www.powerreviews.com/wp-content/uploads/2022/08/visualugc-conversion-benchmarks-768x630.png",
  },
  {
    id: "t2",
    quote:
      "Working with Alex felt like having a co-founder who happened to be a world-class designer. The Luma system saved us months.",
    author: "James Okafor",
    role: "CTO, Orbit Workspace",
    avatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
  },
  {
    id: "t3",
    quote:
      "The patient portal redesign exceeded every metric we set. Alex's research-first approach made all the difference.",
    author: "Dr. Sarah Chen",
    role: "Head of Digital, Canopy Health",
    avatar: "https://gamingamerica.com/wp-content/uploads/2026/03/sarah_chen_avatar.webp",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Twitter: <Twitter size={18} />,
  Linkedin: <Linkedin size={18} />,
  Github: <Github size={18} />,
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-semibold uppercase tracking-widest">
      {children}
    </span>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", delay: index * 0.1 },
    },
  };

  return (
    <motion.article
      variants={cardVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-rose-500/30 hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_16px_40px_-8px_rgba(124,58,237,0.15)] transition-all duration-300"
    >
      {/* Image area */}
      <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="text-xs text-white/50 font-mono">{project.year}</span>
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-rose-600 flex items-center justify-center shadow-lg"
        >
          <ExternalLink size={14} className="text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div>
          <p className="text-xs text-white/40 font-medium mb-1">{project.subtitle}</p>
          <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-white/55 leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/8 text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();
  const shouldReduceMotion = useReducedMotion();
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const motionProps = shouldReduceMotion
    ? {}
    : { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-8 pt-24 pb-16">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-rose-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/8 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Available badge */}
            <motion.div variants={shouldReduceMotion ? undefined : fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                {t("hero.available")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-balance mb-6"
            >
              {t("hero.headline1")}{" "}
              <span className="text-rose-400">{t("hero.headline2")}</span>
              {t("hero.headline3")}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="text-lg md:text-xl text-white/55 leading-relaxed max-w-xl mb-10 text-pretty"
            >
              {t("hero.tagline")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.4)] hover:shadow-[0_0_36px_rgba(124,58,237,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              >
                {t("hero.cta1")}
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
              >
                {t("hero.cta2")}
                <Mail size={16} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px border border-white/5 rounded-2xl overflow-hidden bg-white/5"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={shouldReduceMotion ? undefined : scaleIn}
                className="flex flex-col items-center justify-center py-8 px-4 bg-[#0D0D0D] hover:bg-white/[0.03] transition-colors duration-200"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-rose-400 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 mt-1 text-center">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────────────────── */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <motion.div variants={shouldReduceMotion ? undefined : fadeInUp} className="mb-4">
              <SectionLabel>{t("work.label")}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance"
            >
              {t("work.heading")}
            </motion.h2>
            <motion.p
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="mt-4 text-white/50 text-lg max-w-xl leading-relaxed"
            >
              {t("work.subheading")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: image + decorative */}
            <motion.div
              variants={shouldReduceMotion ? undefined : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-rose-600/20 to-indigo-600/10 border border-white/8 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_20px_60px_-12px_rgba(0,0,0,0.5)]">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGblnQWMqjMOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637806881679?e=2147483647&v=beta&t=RonL0ZS03Iwz-zHB_ugz2V61QVH3HCFOY-GSAwQVaw8"
                  alt="Alex Rivera, Product Designer"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-[#161616] border border-white/10 rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <p className="text-xs text-white/40 mb-1">{t("about.badge_label")}</p>
                <p className="text-sm font-semibold text-white">{brand.location}</p>
              </motion.div>
            </motion.div>

            {/* Right: copy */}
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={shouldReduceMotion ? undefined : fadeInUp}>
                <SectionLabel>{t("about.label")}</SectionLabel>
              </motion.div>
              <motion.h2
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance"
              >
                {t("about.heading")}
              </motion.h2>
              <motion.p
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="text-white/55 leading-relaxed text-pretty"
              >
                {t("about.bio1")}
              </motion.p>
              <motion.p
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="text-white/55 leading-relaxed text-pretty"
              >
                {t("about.bio2")}
              </motion.p>

              {/* Skills grid */}
              <motion.div
                variants={shouldReduceMotion ? undefined : staggerContainer}
                className="grid grid-cols-2 gap-3 pt-2"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.label}
                    variants={shouldReduceMotion ? undefined : scaleIn}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-200"
                  >
                    <span className="text-rose-400">{skill.icon}</span>
                    <span className="text-sm text-white/70 font-medium">{skill.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14 text-center"
          >
            <motion.div variants={shouldReduceMotion ? undefined : fadeInUp} className="mb-4 flex justify-center">
              <SectionLabel>{t("testimonials.label")}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance"
            >
              {t("testimonials.heading")}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.id}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col gap-5 p-7 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-rose-500/25 hover:bg-rose-500/[0.04] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.15),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} className="fill-rose-400 text-rose-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3 pt-1 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-rose-600/30 border border-white/10 flex-shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.author}</p>
                    <p className="text-xs text-white/40">{item.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: copy */}
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={shouldReduceMotion ? undefined : fadeInUp}>
                <SectionLabel>{t("contact.label")}</SectionLabel>
              </motion.div>
              <motion.h2
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance"
              >
                {t("contact.heading")}
              </motion.h2>
              <motion.p
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="text-white/55 leading-relaxed text-pretty"
              >
                {t("contact.body")}
              </motion.p>

              {/* Email */}
              <motion.a
                variants={shouldReduceMotion ? undefined : fadeInUp}
                href={`mailto:${brand.email}`}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 text-rose-400 hover:text-rose-300 font-semibold transition-colors duration-200 group w-fit"
              >
                <Mail size={18} />
                <span>{brand.email}</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.a>

              {/* Social links */}
              <motion.div
                variants={shouldReduceMotion ? undefined : fadeInUp}
                className="flex items-center gap-3 pt-2"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] hover:border-rose-500/40 hover:bg-rose-500/10 flex items-center justify-center text-white/50 hover:text-rose-400 transition-all duration-200"
                  >
                    {iconMap[social.icon] ?? null}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={shouldReduceMotion ? undefined : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {formSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-5 h-full min-h-[360px] rounded-2xl border border-orange-500/25 bg-orange-500/5 p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <Check size={24} className="text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t("contact.success_title")}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{t("contact.success_body")}</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 p-8 rounded-2xl border border-white/8 bg-white/[0.03] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_12px_40px_-8px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                      {t("contact.field_name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder={t("contact.placeholder_name")}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-rose-500/60 focus:bg-rose-500/5 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                      {t("contact.field_email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder={t("contact.placeholder_email")}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-rose-500/60 focus:bg-rose-500/5 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                      {t("contact.field_message")}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder={t("contact.placeholder_message")}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-rose-500/60 focus:bg-rose-500/5 transition-all duration-200 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_32px_rgba(124,58,237,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
                  >
                    {t("contact.submit")}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}