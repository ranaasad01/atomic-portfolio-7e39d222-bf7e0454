"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, brand, primaryCTA } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
            >
              <span className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white text-sm font-bold tracking-tight group-hover:bg-rose-500 transition-colors duration-200">
                AR
              </span>
              <span className="text-white font-semibold tracking-tight hidden sm:block">
                {brand.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={getLinkHref(primaryCTA.href)}
                onClick={(e) => handleAnchorClick(e, primaryCTA.href)}
                className="px-5 py-2 text-sm font-medium bg-rose-600 hover:bg-rose-500 text-white rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_28px_rgba(124,58,237,0.5)]"
              >
                {t("nav.cta")}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-white/60 hover:text-white rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href={getLinkHref(primaryCTA.href)}
                  onClick={(e) => handleAnchorClick(e, primaryCTA.href)}
                  className="block w-full text-center px-5 py-3 text-sm font-medium bg-rose-600 hover:bg-rose-500 text-white rounded-full transition-all duration-200"
                >
                  {t("nav.cta")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}