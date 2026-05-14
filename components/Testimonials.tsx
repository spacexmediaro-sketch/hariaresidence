"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexandru Ionescu",
    role: "Antreprenor",
    location: "Berceni",
    text: "Am cumpărat o vilă HARIA Villas I și experiența a depășit orice așteptare. Calitatea finisajelor, atenția la detalii și profesionalismul echipei sunt remarcabile. Este, pur și simplu, cea mai bună investiție pe care am făcut-o.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&faces",
  },
  {
    id: 2,
    name: "Maria Dumitrescu",
    role: "Medic Specialist",
    location: "Berceni",
    text: "Procesul de achiziție a fost transparent și profesional de la primul contact până la predarea cheilor. HARIA Residence a livrat exact ceea ce a promis — o locuință premium, luminoasă și elegantă. Recomand cu toată convingerea.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e8f8a0?w=100&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Andrei Popa",
    role: "Director Financiar",
    location: "Berceni",
    text: "Configuratorul online m-a ajutat să îmi imaginez perfect locuința înainte de construcție. Echipa HARIA a implementat fiecare detaliu ales. Rezultatul final: o casă care ne reprezintă perfect ca familie.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Elena Constantin",
    role: "Avocat",
    location: "Berceni",
    text: "Locuiesc în HARIA Green Park de 8 luni și fiecare zi confirmă că am luat decizia corectă. Comunitatea este extraordinară, iar calitatea construcției nu lasă nimic de dorit. Premium în adevăratul sens al cuvântului.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black-deep" />

      {/* Decorative gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #C6A56A 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-luxury" />
            <span className="section-label">Clienții Noștri</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-luxury" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-ivory"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Povești de{" "}
            <span className="text-gold-gradient">Succes</span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="testimonial-card p-8 rounded-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-gold-luxury/30 mb-5" />

              {/* Text */}
              <p
                className="text-ivory/65 leading-relaxed mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", lineHeight: "1.8" }}
              >
                "{t.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={14} fill="#C6A56A" className="text-gold-luxury" />
                ))}
              </div>

              <div className="divider-gold mb-5" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-luxury/30">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div
                    className="text-ivory font-semibold text-sm"
                    style={{ fontFamily: "Cinzel, serif", letterSpacing: "0.05em" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-gold-luxury/60 text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <motion.div
            key={current}
            className="testimonial-card p-8 rounded-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <Quote size={28} className="text-gold-luxury/30 mb-5" />
            <p
              className="text-ivory/65 leading-relaxed mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", lineHeight: "1.8" }}
            >
              "{testimonials[current].text}"
            </p>
            <div className="flex gap-1 mb-5">
              {[...Array(testimonials[current].rating)].map((_, si) => (
                <Star key={si} size={14} fill="#C6A56A" className="text-gold-luxury" />
              ))}
            </div>
            <div className="divider-gold mb-5" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-luxury/30">
                <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-ivory font-semibold text-sm" style={{ fontFamily: "Cinzel, serif" }}>
                  {testimonials[current].name}
                </div>
                <div className="text-gold-luxury/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  {testimonials[current].role}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="text-ivory/40 hover:text-gold-luxury transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-gold-luxury" : "w-4 bg-ivory/20"}`}
                />
              ))}
            </div>
            <button onClick={next} className="text-ivory/40 hover:text-gold-luxury transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
