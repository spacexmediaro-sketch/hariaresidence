"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90&auto=format&fit=crop",
];

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 8 + 10,
}));

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Images with Ken Burns */}
      {heroImages.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === currentImg ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: i === currentImg ? 1.08 : 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{ willChange: "transform" }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 hero-video-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-black-matte/40 via-transparent to-black-matte/20" />

      {/* Gold Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(11,11,11,0.7) 100%)",
        }}
      />

      {/* Floating Gold Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Parallax Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY }}
      >
        {/* Brand tag */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-luxury" />
          <span className="section-label">HARIA RESIDENCE · BERCENI · ROMÂNIA</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-luxury" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
          style={{ fontFamily: "Cinzel, serif", lineHeight: "1.05" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 50 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-ivory">Construim</span>
          <br />
          <span className="text-gold-gradient">Viitorul</span>
          <br />
          <span className="text-ivory">Locuirii</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-ivory/60 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: "1.2rem" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Locuințe moderne create pentru un stil de viață exclusivist
          în inima comunei Berceni.
        </motion.p>

        {/* Gold divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: loaded ? 1 : 0, scaleX: loaded ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-luxury/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-luxury" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-luxury/60" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <a
            href="#projects"
            className="btn-gold px-10 py-4 rounded-sm text-sm glow-gold"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em" }}
          >
            Descoperă Proiectele
          </a>
          <a
            href="#configurator"
            className="btn-outline-gold px-10 py-4 rounded-sm text-sm flex items-center gap-3"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em" }}
          >
            <Play size={14} className="text-gold-luxury" />
            Configurează Casa Ta
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-10 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { value: "200+", label: "Locuințe Livrate" },
            { value: "8", label: "Ani Experiență" },
            { value: "98%", label: "Clienți Mulțumiți" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold text-gold-luxury mb-1"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-ivory/40 text-xs tracking-widest uppercase"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentImg
                ? "w-8 h-1 bg-gold-luxury"
                : "w-2 h-1 bg-ivory/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <span className="section-label">Descoperă</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gold-luxury/60" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t border-l border-gold-luxury/20" />
      <div className="absolute top-24 right-8 w-12 h-12 border-t border-r border-gold-luxury/20" />
      <div className="absolute bottom-12 left-8 w-12 h-12 border-b border-l border-gold-luxury/20" />
      <div className="absolute bottom-12 right-8 w-12 h-12 border-b border-r border-gold-luxury/20" />
    </section>
  );
}
