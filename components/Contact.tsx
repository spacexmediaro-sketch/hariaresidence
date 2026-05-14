"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", rooms: "", budget: "", message: "", type: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) setSubmitted(true);
  };

  const updateForm = (key: string, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black-matte" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-luxury" />
            <span className="section-label">Contact</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-luxury" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-ivory mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Hai să{" "}
            <span className="text-gold-gradient">Vorbim</span>
          </h2>
          <p
            className="text-ivory/50 max-w-lg mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
          >
            Echipa noastră de consultanți imobiliari este pregătită să vă ofere
            toate informațiile necesare pentru locuința visurilor voastre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div>
              <h3
                className="text-2xl text-ivory mb-6"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Informații de Contact
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Adresă",
                    value: "Strada Principală 1,\nComuna Berceni, Ilfov",
                  },
                  {
                    icon: Phone,
                    label: "Telefon",
                    value: "+40 700 000 000\n+40 721 000 000",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@hariaresidence.ro\nvanzari@hariaresidence.ro",
                  },
                  {
                    icon: Clock,
                    label: "Program",
                    value: "Lun–Vin: 09:00–19:00\nSâm: 10:00–16:00",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 flex-shrink-0 rounded-sm border border-gold-luxury/20 bg-gold-luxury/5 flex items-center justify-center">
                      <Icon size={16} className="text-gold-luxury" />
                    </div>
                    <div>
                      <p className="section-label mb-1" style={{ fontSize: "0.55rem" }}>{label}</p>
                      {value.split("\n").map((line, i) => (
                        <p
                          key={i}
                          className="text-ivory/70 text-sm"
                          style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.6" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="relative rounded-sm overflow-hidden border border-gold-luxury/15"
              style={{ height: "220px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11481.407706018636!2d26.09400!3d44.32500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fe3b6bc1c9c1%3A0x0!2sBerceni%2C%20Ilfov!5e0!3m2!1sen!2sro!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 border border-gold-luxury/20 pointer-events-none rounded-sm" />
            </div>

            {/* Social */}
            <div>
              <p className="section-label mb-4">Social Media</p>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", href: "#" },
                  { label: "Instagram", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "YouTube", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="px-4 py-2 border border-gold-luxury/20 rounded-sm text-xs text-ivory/50 hover:text-gold-luxury hover:border-gold-luxury/50 transition-all duration-300"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="glass-card p-10 rounded-sm border-gold">
              {!submitted ? (
                <>
                  <h3
                    className="text-2xl text-ivory mb-8"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    Solicită o Consultație
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { key: "name", label: "Nume Complet *", placeholder: "Ion Popescu", type: "text" },
                        { key: "phone", label: "Telefon *", placeholder: "+40 7XX XXX XXX", type: "tel" },
                        { key: "email", label: "Email", placeholder: "email@domeniu.ro", type: "email" },
                        { key: "rooms", label: "Nr. Camere Dorit", placeholder: "3 camere", type: "text" },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="block section-label mb-2" style={{ fontSize: "0.58rem" }}>
                            {f.label}
                          </label>
                          <input
                            type={f.type}
                            placeholder={f.placeholder}
                            className="input-luxury w-full px-4 py-3.5 rounded-sm text-sm"
                            value={form[f.key as keyof typeof form]}
                            onChange={(e) => updateForm(f.key, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block section-label mb-2" style={{ fontSize: "0.58rem" }}>
                        Buget Estimativ
                      </label>
                      <select
                        className="input-luxury w-full px-4 py-3.5 rounded-sm text-sm appearance-none"
                        style={{ background: "rgba(22,22,22,0.8)" }}
                        value={form.budget}
                        onChange={(e) => updateForm("budget", e.target.value)}
                      >
                        <option value="" style={{ background: "#161616" }}>Selectează bugetul</option>
                        <option value="sub80" style={{ background: "#161616" }}>Sub 80.000 €</option>
                        <option value="80-130" style={{ background: "#161616" }}>80.000 – 130.000 €</option>
                        <option value="130-200" style={{ background: "#161616" }}>130.000 – 200.000 €</option>
                        <option value="200-350" style={{ background: "#161616" }}>200.000 – 350.000 €</option>
                        <option value="350+" style={{ background: "#161616" }}>Peste 350.000 €</option>
                      </select>
                    </div>

                    <div>
                      <label className="block section-label mb-2" style={{ fontSize: "0.58rem" }}>
                        Tip Casă Preferat
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["Modern Minimal", "Luxury Villa", "Family Concept", "Smart Home"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            className={`py-2.5 px-3 rounded-sm border text-xs transition-all duration-300 ${
                              form.type === t
                                ? "border-gold-luxury bg-gold-luxury/10 text-gold-luxury"
                                : "border-ivory/10 text-ivory/40 hover:border-gold-luxury/30"
                            }`}
                            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.62rem", letterSpacing: "0.06em" }}
                            onClick={() => updateForm("type", t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block section-label mb-2" style={{ fontSize: "0.58rem" }}>
                        Mesaj
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Spuneți-ne mai multe despre cerințele dvs..."
                        className="input-luxury w-full px-4 py-3.5 rounded-sm text-sm resize-none"
                        value={form.message}
                        onChange={(e) => updateForm("message", e.target.value)}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-gold w-full py-4 rounded-sm text-sm flex items-center justify-center gap-3 glow-gold"
                      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em" }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Send size={16} />
                      Trimite Cererea
                    </motion.button>

                    <p
                      className="text-center text-ivory/25 text-xs"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Datele dvs. sunt protejate conform GDPR. Nu trimitem spam.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block mb-6"
                  >
                    <CheckCircle size={56} className="text-gold-luxury mx-auto" />
                  </motion.div>
                  <h3
                    className="text-2xl text-ivory mb-3"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    Mesaj Trimis!
                  </h3>
                  <p
                    className="text-ivory/50 max-w-sm mx-auto"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
                  >
                    Consultantul nostru vă va contacta în cel mai scurt timp posibil.
                    Vă mulțumim pentru interesul acordat HARIA Residence.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
