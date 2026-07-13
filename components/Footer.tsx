"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail, ArrowUp } from 'lucide-react';
import { brand, navLinks, socialLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ReactNode> = {
  Twitter: <Twitter size={16} />,
  Linkedin: <Linkedin size={16} />,
  Github: <Github size={16} />,
};

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white text-sm font-bold">
                AR
              </span>
              <span className="text-white font-semibold tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs text-white/40">{t("footer.available")}</span>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              {t("footer.navigation")}
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded"
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              {t("footer.connect")}
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-rose-400 transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded"
            >
              <Mail size={14} />
              {brand.email}
            </a>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-rose-500/50 hover:bg-rose-600/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/25">
            {t("footer.copyright", { year: new Date().getFullYear(), name: brand.name })}
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-white/30 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded"
            aria-label="Scroll to top"
          >
            {t("footer.backToTop")}
            <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose-500/50 group-hover:bg-rose-600/10 transition-all duration-200">
              <ArrowUp size={12} />
            </span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}