"use client";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Linkedin, ArrowUp, Mail } from "lucide-react";
import HariaLogoLive from "./HariaLogoLive";

const links = {
  proiecte: [
    { label: "HARIA Villas I", href: "#projects" },
    { label: "HARIA Green Park", href: "#projects" },
    { label: "HARIA Grand Estate", href: "#projects" },
    { label: "HARIA Smart Living", href: "#projects" },
  ],
  companie: [
    { label: "Despre Noi", href: "#about" },
    { label: "Galerie", href: "#gallery" },
    { label: "Testimoniale", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Politică de Confidențialitate", href: "#" },
    { label: "Termeni și Condiții", href: "#" },
    { label: "GDPR", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-black-deep pt-20 pb-8">
      {/* Top border */}
      <div className="divider-gold mb-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter banner */}
        <motion.div
          className="glass-card border-gold rounded-sm p-10 mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label block mb-3">Newsletter Premium</span>
          <h3
            className="text-3xl text-ivory mb-2"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Fii Primul Care Află
          </h3>
          <p
            className="text-ivory/40 mb-8 max-w-lg mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}
          >
            Noutăți exclusive, proiecte în pre-lansare și oferte speciale direct în inbox-ul tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="adresa@email.ro"
              className="input-luxury flex-1 px-5 py-3.5 rounded-sm text-sm"
            />
            <button
              className="btn-gold px-8 py-3.5 rounded-sm text-xs flex items-center gap-2 justify-center"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em" }}
            >
              <Mail size={14} />
              Abonează-te
            </button>
          </div>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <HariaLogoLive size="md" showTagline />
            <p
              className="text-ivory/40 mt-6 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", lineHeight: "1.8" }}
            >
              HARIA Residence — liderul în dezvoltare rezidențială premium
              din Comuna Berceni. Creăm locuințe care reflectă aspirațiile
              și valorile familiei moderne.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-sm border border-gold-luxury/20 flex items-center justify-center text-ivory/40 hover:text-gold-luxury hover:border-gold-luxury/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Proiecte */}
          <div>
            <h4
              className="section-label mb-5"
              style={{ fontSize: "0.6rem" }}
            >
              Proiecte
            </h4>
            <ul className="space-y-3">
              {links.proiecte.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-ivory/40 hover:text-gold-luxury transition-colors duration-300 text-sm"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Companie */}
          <div>
            <h4 className="section-label mb-5" style={{ fontSize: "0.6rem" }}>
              Companie
            </h4>
            <ul className="space-y-3">
              {links.companie.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-ivory/40 hover:text-gold-luxury transition-colors duration-300 text-sm"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="section-label mb-5" style={{ fontSize: "0.6rem" }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-ivory/40 hover:text-gold-luxury transition-colors duration-300 text-sm"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-ivory/25 text-xs text-center"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}
          >
            © 2025 HARIA RESIDENCE SRL. Toate drepturile rezervate. · CUI: RO35832849 · J2016004162400
          </p>
          <p
            className="text-ivory/20 text-xs"
            style={{ fontFamily: "Cinzel, serif", fontSize: "0.65rem", letterSpacing: "0.15em" }}
          >
            CREĂM. DEZVOLTĂM. CONSTRUIM FRUMOS.
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-ivory/30 hover:text-gold-luxury transition-colors duration-300 text-xs"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em" }}
          >
            <ArrowUp size={14} />
            Sus
          </button>
        </div>
      </div>
    </footer>
  );
}
