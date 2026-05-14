"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin, Home, Maximize2, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "HARIA Villas I",
    subtitle: "Vila de Lux",
    location: "Strada Lalelelor, Berceni",
    status: "Disponibil",
    statusColor: "#C6A56A",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=85&auto=format&fit=crop",
    rooms: "3-5 camere",
    surface: "120 – 280 m²",
    priceFrom: "129.000 €",
    completion: "Livrat 2024",
    tag: "FLAGSHIP",
  },
  {
    id: 2,
    name: "HARIA Green Park",
    subtitle: "Rezidențial Premium",
    location: "Aleea Verde, Berceni",
    status: "În Construcție",
    statusColor: "#D9C29C",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85&auto=format&fit=crop",
    rooms: "2-4 camere",
    surface: "85 – 180 m²",
    priceFrom: "89.000 €",
    completion: "Q2 2025",
    tag: "NOU",
  },
  {
    id: 3,
    name: "HARIA Grand Estate",
    subtitle: "Vilă Exclusivă",
    location: "Bulevardul Central, Berceni",
    status: "Presale",
    statusColor: "#F0D080",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85&auto=format&fit=crop",
    rooms: "4-6 camere",
    surface: "200 – 450 m²",
    priceFrom: "210.000 €",
    completion: "Q4 2025",
    tag: "EXCLUSIV",
  },
  {
    id: 4,
    name: "HARIA Smart Living",
    subtitle: "Casa Viitorului",
    location: "Str. Inovației, Berceni",
    status: "Planificat",
    statusColor: "#888",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85&auto=format&fit=crop",
    rooms: "2-4 camere",
    surface: "90 – 160 m²",
    priceFrom: "99.000 €",
    completion: "Q1 2026",
    tag: "SMART",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black-matte" />

      {/* Gold accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #C6A56A, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-gold-luxury" />
              <span className="section-label">Portofoliu</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-ivory leading-tight"
              style={{ fontFamily: "Cinzel, serif", lineHeight: "1.1" }}
            >
              Proiectele{" "}
              <span className="text-gold-gradient">Noastre</span>
            </h2>
          </div>
          <p
            className="text-ivory/50 max-w-sm mt-4 lg:mt-0 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: "1.8" }}
          >
            Fiecare proiect HARIA este o declarație de rafinament și o investiție
            în calitatea vieții tale.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-sm">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hovered === project.id ? 1.08 : 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/30 to-transparent" />

                {/* Tags */}
                <div className="absolute top-5 left-5 flex gap-2">
                  <span
                    className="px-3 py-1 text-black-matte font-bold rounded-sm"
                    style={{
                      background: "linear-gradient(135deg, #C6A56A, #D9C29C)",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {project.tag}
                  </span>
                  <span
                    className="px-3 py-1 rounded-sm"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      border: `1px solid ${project.statusColor}40`,
                      color: project.statusColor,
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Price badge */}
                <div className="absolute top-5 right-5 glass-card px-4 py-2 rounded-sm">
                  <div
                    className="text-xs text-ivory/50 mb-0.5"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.1em" }}
                  >
                    DE LA
                  </div>
                  <div
                    className="text-gold-luxury font-semibold"
                    style={{ fontFamily: "Cinzel, serif", fontSize: "0.95rem" }}
                  >
                    {project.priceFrom}
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="glass-card mt-1 p-6 rounded-sm border-gold card-luxury">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-ivory font-bold text-xl mb-1"
                      style={{ fontFamily: "Cinzel, serif", letterSpacing: "0.05em" }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-gold-luxury/70 text-sm"
                      style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: hovered === project.id ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={20} className="text-gold-luxury mt-2" />
                  </motion.div>
                </div>

                <div className="divider-gold mb-4" />

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-gold-luxury/60 flex-shrink-0" />
                    <span
                      className="text-ivory/50 text-xs leading-tight"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}
                    >
                      {project.location.split(",")[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={13} className="text-gold-luxury/60 flex-shrink-0" />
                    <span
                      className="text-ivory/50 text-xs"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}
                    >
                      {project.rooms}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 size={13} className="text-gold-luxury/60 flex-shrink-0" />
                    <span
                      className="text-ivory/50 text-xs"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}
                    >
                      {project.surface}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  className="mt-5 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: hovered === project.id ? "auto" : 0, opacity: hovered === project.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href="#contact"
                    className="btn-gold w-full py-3 rounded-sm text-xs text-center block mt-2"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em" }}
                  >
                    Solicită Informații
                  </a>
                </motion.div>
              </div>

              {/* Gold glow on hover */}
              {hovered === project.id && (
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ boxShadow: "0 0 40px rgba(198,165,106,0.15), 0 0 0 1px rgba(198,165,106,0.2)" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="btn-outline-gold px-12 py-4 rounded-sm inline-flex items-center gap-3 text-sm"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", letterSpacing: "0.18em" }}
          >
            <TrendingUp size={16} />
            Vezi Toate Proiectele
          </a>
        </motion.div>
      </div>
    </section>
  );
}
