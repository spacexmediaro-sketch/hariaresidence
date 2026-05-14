"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 200, suffix: "+", label: "Locuințe Livrate" },
  { value: 8, suffix: "", label: "Ani de Experiență" },
  { value: 15, suffix: "ha", label: "Suprafață Dezvoltată" },
  { value: 98, suffix: "%", label: "Clienți Satisfăcuți" },
];

const values = [
  {
    icon: "◈",
    title: "Arhitectură Premium",
    desc: "Fiecare locuință este concepută de arhitecți de renume, cu atenție maximă la detalii și estetică modernă.",
  },
  {
    icon: "◆",
    title: "Calitate Superioară",
    desc: "Utilizăm exclusiv materiale premium, certificate european, pentru durabilitate și rafinament pe termen lung.",
  },
  {
    icon: "◇",
    title: "Comunitate Exclusivă",
    desc: "HARIA Residence creează un ecosistem rezidențial complet: spații verzi, relaxare și conexiune umană.",
  },
  {
    icon: "◉",
    title: "Investiție Sigură",
    desc: "Localizare strategică, valorizare garantată, transparență totală. Banii tăi lucrează inteligent.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-black-deep to-black-matte" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #C6A56A 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C6A56A 0px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold-luxury" />
              <span className="section-label">Povestea Noastră</span>
            </div>

            <h2
              className="text-5xl md:text-6xl font-bold text-ivory leading-tight mb-6"
              style={{ fontFamily: "Cinzel, serif", lineHeight: "1.1" }}
            >
              Creăm{" "}
              <span className="text-gold-gradient">Spații</span>
              <br />
              de Excepție
            </h2>

            <p
              className="text-ivory/60 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem" }}
            >
              HARIA Residence s-a născut dintr-o viziune simplă dar profundă:
              că fiecare familie merită o locuință care să reflecte aspirațiile și
              valorile sale cele mai înalte.
            </p>
            <p
              className="text-ivory/50 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", lineHeight: "1.8" }}
            >
              Cu peste 8 ani de experiență în dezvoltare rezidențială, am transformat
              terenuri din Comuna Berceni în comunități premium care redefinesc standardele
              locuirii moderne în zona metropolitană București.
            </p>

            <div className="mt-10">
              <a
                href="#projects"
                className="btn-outline-gold px-8 py-3.5 rounded-sm inline-block text-sm"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em" }}
              >
                Descoperă Proiectele
              </a>
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative h-[520px]">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-4/5 h-4/5 project-img-wrap rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85&auto=format&fit=crop"
                  alt="HARIA Residence Premium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte/50 to-transparent" />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 left-0 w-2/5 h-2/5 project-img-wrap rounded-sm overflow-hidden border border-gold-luxury/20">
                <img
                  src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=85&auto=format&fit=crop"
                  alt="Interior Premium"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold accent frame */}
              <div className="absolute bottom-8 right-0 w-4/5 h-4/5 border border-gold-luxury/15 rounded-sm pointer-events-none translate-x-4 translate-y-4" />
              {/* Badge */}
              <div className="absolute top-6 left-6 glass-card px-5 py-3 rounded-sm glow-gold">
                <div
                  className="text-2xl font-bold text-gold-luxury"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  2016
                </div>
                <div className="section-label mt-0.5" style={{ fontSize: "0.55rem" }}>
                  Fondată
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center glass-card p-8 rounded-sm border-gold"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            >
              <div className="counter-number text-4xl md:text-5xl font-bold mb-2">
                {isInView && (
                  <CountUp end={s.value} duration={2.5} delay={0.8 + i * 0.1} />
                )}
                {s.suffix}
              </div>
              <div
                className="text-ivory/40 text-xs tracking-widest uppercase"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <div>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-luxury/60" />
              <span className="section-label">Valorile Noastre</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-luxury/60" />
            </div>
            <h3
              className="text-3xl md:text-4xl text-ivory font-semibold"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Principiile care ne definesc
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass-card p-8 rounded-sm card-luxury group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1 + i * 0.1 }}
              >
                <div
                  className="text-3xl text-gold-luxury mb-5 group-hover:animate-pulse"
                  style={{ textShadow: "0 0 20px rgba(198,165,106,0.5)" }}
                >
                  {v.icon}
                </div>
                <h4
                  className="text-ivory font-semibold text-lg mb-3"
                  style={{ fontFamily: "Cinzel, serif", fontSize: "0.95rem", letterSpacing: "0.05em" }}
                >
                  {v.title}
                </h4>
                <p
                  className="text-ivory/50 text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.7" }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
