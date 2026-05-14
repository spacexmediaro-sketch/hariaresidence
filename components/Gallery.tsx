"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=85&auto=format&fit=crop",
    alt: "HARIA Villas - Exterior",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1560185127-6a9e8f4a2b7e?w=600&q=85&auto=format&fit=crop",
    alt: "Interior Luxury Living",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85&auto=format&fit=crop",
    alt: "Bucătărie Premium",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85&auto=format&fit=crop",
    alt: "Arhitectură Modernă",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85&auto=format&fit=crop",
    alt: "Vila HARIA - Sunset",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=85&auto=format&fit=crop",
    alt: "Dormitor Master",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=85&auto=format&fit=crop",
    alt: "Grădină Premium",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85&auto=format&fit=crop",
    alt: "HARIA Green Park",
    span: "col-span-2",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black-matte" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-luxury" />
            <span className="section-label">Galerie</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-luxury" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-ivory"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Vizualizează{" "}
            <span className="text-gold-gradient">Excelența</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-item relative rounded-sm overflow-hidden cursor-pointer ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onClick={() => setLightbox(i)}
              whileHover={{ zIndex: 10 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-black-matte/60 flex items-center justify-center opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <ZoomIn size={28} className="text-gold-luxury mx-auto mb-2" />
                  <p
                    className="text-ivory text-xs"
                    style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "0.1em" }}
                  >
                    {img.alt}
                  </p>
                </div>
              </motion.div>
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black-matte/70 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black-matte/97"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-ivory/60 hover:text-gold-luxury transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>

            {/* Nav */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/40 hover:text-gold-luxury transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev! - 1 + images.length) % images.length); }}
            >
              <ChevronLeft size={36} />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-ivory/40 hover:text-gold-luxury transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev! + 1) % images.length); }}
            >
              <ChevronRight size={36} />
            </button>

            {/* Image */}
            <motion.div
              className="max-w-5xl max-h-[85vh] mx-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src.replace("w=600", "w=1200").replace("w=800", "w=1400")}
                alt={images[lightbox].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-sm"
                style={{ boxShadow: "0 0 80px rgba(198,165,106,0.15)" }}
              />
              <p
                className="text-center text-ivory/50 mt-4 text-sm"
                style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
              >
                {images[lightbox].alt}
              </p>
            </motion.div>

            {/* Counter */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/30 text-sm"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
