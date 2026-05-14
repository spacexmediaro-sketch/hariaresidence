"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import HariaLogoLive from "./HariaLogoLive";

const navLinks = [
  { label: "Acasă", href: "#home" },
  { label: "Despre Noi", href: "#about" },
  { label: "Proiecte", href: "#projects" },
  { label: "Case", href: "#houses" },
  { label: "Configurator", href: "#configurator" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "glass-nav py-3" : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <HariaLogoLive size="sm" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`gold-line-animated relative font-montserrat text-xs font-500 tracking-widest uppercase transition-colors duration-300 pb-1 ${
                    activeLink === link.href
                      ? "text-gold-luxury"
                      : "text-ivory/70 hover:text-ivory"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+40700000000"
              className="flex items-center gap-2 text-gold-luxury/70 hover:text-gold-luxury transition-colors duration-300"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}
            >
              <Phone size={14} />
              <span>+40 700 000 000</span>
            </a>
            <a
              href="#configurator"
              className="btn-gold px-6 py-2.5 rounded-sm text-xs"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em" }}
            >
              Configurează Casa
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gold-luxury"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Gold line bottom */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gold-luxury/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu fixed inset-0 z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="divider-gold w-24 mb-12" />
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
                    className="text-ivory/80 hover:text-gold-luxury transition-colors duration-300"
                    style={{ fontFamily: "Cinzel, serif", fontSize: "1.2rem", letterSpacing: "0.2em" }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="divider-gold w-24 mt-12" />
            <a
              href="#configurator"
              onClick={() => setMobileOpen(false)}
              className="btn-gold mt-10 px-10 py-3 rounded-sm text-xs"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em" }}
            >
              Configurează Casa Ta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
