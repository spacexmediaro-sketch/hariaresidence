"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Sparkles, Home, Layers, Palette, BarChart3 } from "lucide-react";

const STEPS = [
  { id: 1, label: "Model", icon: Home },
  { id: 2, label: "Spații", icon: Layers },
  { id: 3, label: "Finisaje", icon: Palette },
  { id: 4, label: "Estimare", icon: BarChart3 },
];

const models = [
  {
    id: "minimal",
    name: "Modern Minimal",
    desc: "Linii pure, spații deschise, estetică contemporană",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80&auto=format&fit=crop",
    basePrice: 89000,
  },
  {
    id: "luxury",
    name: "Luxury Villa",
    desc: "Eleganță supremă, finisaje premium, arhitectură statement",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&q=80&auto=format&fit=crop",
    basePrice: 159000,
  },
  {
    id: "family",
    name: "Family Concept",
    desc: "Spații generoase, funcționalitate, confort familial",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80&auto=format&fit=crop",
    basePrice: 119000,
  },
  {
    id: "smart",
    name: "Smart Home Edition",
    desc: "Tehnologie integrată, automatizare totală, eficiență energetică",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80&auto=format&fit=crop",
    basePrice: 139000,
  },
];

const surfaces = [80, 100, 130, 160, 200, 250];
const rooms = [2, 3, 4, 5, 6];
const extras = [
  { id: "garage", label: "Garaj Dublu", price: 8000, icon: "🚗" },
  { id: "pool", label: "Piscină", price: 18000, icon: "🏊" },
  { id: "terrace", label: "Terasă Premium", price: 5000, icon: "🌿" },
  { id: "office", label: "Birou / Studio", price: 7000, icon: "💼" },
  { id: "dressing", label: "Dressing", price: 3500, icon: "👔" },
  { id: "garden", label: "Grădină Amenajată", price: 9000, icon: "🌳" },
];

const floorings = [
  { id: "parquet", label: "Parchet Masiv", color: "#8B6914" },
  { id: "marble", label: "Marmură Italiană", color: "#D0C0A0" },
  { id: "ceramic", label: "Gresie Premium", color: "#C0C0C0" },
  { id: "vinyl", label: "Vinyl Luxury", color: "#6B5A3E" },
];

const facades = [
  { id: "stone", label: "Piatră Naturală", color: "#9a8a7a" },
  { id: "plaster", label: "Tencuială Decorativă", color: "#e8ddd0" },
  { id: "cladding", label: "Placare Modernă", color: "#555" },
  { id: "mixed", label: "Mix Premium", color: "#8B6914" },
];

const wallColors = [
  { id: "white", label: "Alb Perla", color: "#F0EDE8" },
  { id: "gray", label: "Gri Cald", color: "#B8B0A8" },
  { id: "beige", label: "Bej Lux", color: "#D4C4A8" },
  { id: "anthracite", label: "Antracit", color: "#3A3A3A" },
];

export default function Configurator() {
  const ref = useRef(null);
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    model: models[0],
    surface: 130,
    rooms: 3,
    extras: [] as string[],
    flooring: "parquet",
    facade: "stone",
    wallColor: "white",
    submitted: false,
    name: "",
    phone: "",
    email: "",
  });

  const totalPrice = () => {
    let price = config.model.basePrice;
    const surfaceFactor = config.surface / 130;
    price = Math.round(price * surfaceFactor);
    const selectedExtras = extras.filter((e) => config.extras.includes(e.id));
    price += selectedExtras.reduce((sum, e) => sum + e.price, 0);
    if (config.facade === "stone") price += 12000;
    if (config.flooring === "marble") price += 8000;
    return price;
  };

  const toggleExtra = (id: string) => {
    setConfig((prev) => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter((e) => e !== id)
        : [...prev.extras, id],
    }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section id="configurator" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black-deep" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #C6A56A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

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
            <span className="section-label flex items-center gap-2">
              <Sparkles size={12} className="text-gold-luxury" />
              Feature Principal
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-luxury" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-ivory mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Configurează{" "}
            <span className="text-gold-gradient">Casa Ta</span>
          </h2>
          <p
            className="text-ivory/50 max-w-xl mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
          >
            Personalizează fiecare detaliu al locuinței tale de vis și primește
            o estimare de preț în timp real.
          </p>
        </motion.div>

        {/* Configurator Panel */}
        <div className="glass-card rounded-sm border-gold overflow-hidden" style={{ minHeight: "600px" }}>
          {/* Progress Header */}
          <div className="border-b border-gold-luxury/10 p-6">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isDone = step > s.id;
                return (
                  <div key={s.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                          isActive
                            ? "border-gold-luxury bg-gold-luxury/10"
                            : isDone
                            ? "border-gold-luxury bg-gold-luxury"
                            : "border-ivory/20 bg-transparent"
                        }`}
                        animate={{ scale: isActive ? 1.1 : 1 }}
                      >
                        {isDone ? (
                          <Check size={16} className="text-black-matte" />
                        ) : (
                          <Icon size={15} className={isActive ? "text-gold-luxury" : "text-ivory/30"} />
                        )}
                      </motion.div>
                      <span
                        className={`text-xs mt-1.5 ${isActive ? "text-gold-luxury" : isDone ? "text-gold-luxury/60" : "text-ivory/30"}`}
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em" }}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-16 md:w-24 h-px mx-3 mt-[-14px]">
                        <motion.div
                          className="h-full progress-fill"
                          initial={{ width: "0%" }}
                          animate={{ width: isDone ? "100%" : "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="h-px w-full bg-ivory/10 -mt-px" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step Content */}
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* STEP 1: Model */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3
                    className="text-2xl text-ivory mb-2"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    Alege Modelul Casei
                  </h3>
                  <p className="text-ivory/40 mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>
                    Fiecare model este proiectat pentru un stil de viață unic.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {models.map((model) => (
                      <motion.div
                        key={model.id}
                        className={`config-option rounded-sm border overflow-hidden cursor-pointer ${
                          config.model.id === model.id ? "selected" : "border-ivory/10"
                        }`}
                        onClick={() => setConfig((prev) => ({ ...prev, model }))}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="h-40 overflow-hidden">
                          <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                          <h4
                            className="text-ivory font-semibold text-sm mb-1"
                            style={{ fontFamily: "Cinzel, serif", fontSize: "0.85rem" }}
                          >
                            {model.name}
                          </h4>
                          <p className="text-ivory/40 text-xs mb-3" style={{ fontSize: "0.72rem" }}>
                            {model.desc}
                          </p>
                          <div
                            className="text-gold-luxury font-semibold"
                            style={{ fontFamily: "Cinzel, serif", fontSize: "0.9rem" }}
                          >
                            de la {model.basePrice.toLocaleString("ro-RO")} €
                          </div>
                        </div>
                        {config.model.id === model.id && (
                          <div className="absolute top-3 right-3 w-6 h-6 bg-gold-luxury rounded-full flex items-center justify-center">
                            <Check size={12} className="text-black-matte" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Spaces */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl text-ivory mb-2" style={{ fontFamily: "Cinzel, serif" }}>
                    Configurează Spațiile
                  </h3>
                  <p className="text-ivory/40 mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>
                    Dimensionează casa după nevoile tale.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <p className="section-label mb-5">Suprafață Utilă</p>
                      <div className="flex flex-wrap gap-3">
                        {surfaces.map((s) => (
                          <motion.button
                            key={s}
                            className={`config-option px-5 py-2.5 rounded-sm border text-sm ${
                              config.surface === s ? "selected" : "border-ivory/10"
                            }`}
                            onClick={() => setConfig((prev) => ({ ...prev, surface: s }))}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ fontFamily: "Cinzel, serif", color: config.surface === s ? "#C6A56A" : "#F5F1EA" }}
                          >
                            {s} m²
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="section-label mb-5">Număr Camere</p>
                      <div className="flex gap-3">
                        {rooms.map((r) => (
                          <motion.button
                            key={r}
                            className={`config-option w-12 h-12 rounded-sm border flex items-center justify-center text-lg font-bold ${
                              config.rooms === r ? "selected" : "border-ivory/10"
                            }`}
                            onClick={() => setConfig((prev) => ({ ...prev, rooms: r }))}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ fontFamily: "Cinzel, serif", color: config.rooms === r ? "#C6A56A" : "#F5F1EA80" }}
                          >
                            {r}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="section-label mb-5">Dotări Opționale</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {extras.map((extra) => (
                        <motion.div
                          key={extra.id}
                          className={`config-option rounded-sm border p-4 cursor-pointer ${
                            config.extras.includes(extra.id) ? "selected" : "border-ivory/10"
                          }`}
                          onClick={() => toggleExtra(extra.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-2xl mb-2">{extra.icon}</div>
                          <div
                            className="text-sm font-medium mb-1"
                            style={{ fontFamily: "Inter, sans-serif", color: config.extras.includes(extra.id) ? "#C6A56A" : "#F5F1EA" }}
                          >
                            {extra.label}
                          </div>
                          <div
                            className="text-xs text-gold-luxury/60"
                            style={{ fontFamily: "Cinzel, serif" }}
                          >
                            +{extra.price.toLocaleString("ro-RO")} €
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Finishes */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl text-ivory mb-2" style={{ fontFamily: "Cinzel, serif" }}>
                    Alege Finisajele
                  </h3>
                  <p className="text-ivory/40 mb-8" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>
                    Personalizează materialele și culorile casei tale.
                  </p>

                  <div className="space-y-10">
                    {/* Flooring */}
                    <div>
                      <p className="section-label mb-5">Pardoseală</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {floorings.map((f) => (
                          <motion.div
                            key={f.id}
                            className={`config-option rounded-sm border p-4 cursor-pointer ${
                              config.flooring === f.id ? "selected" : "border-ivory/10"
                            }`}
                            onClick={() => setConfig((prev) => ({ ...prev, flooring: f.id }))}
                            whileHover={{ scale: 1.03 }}
                          >
                            <div
                              className="w-full h-12 rounded-sm mb-3"
                              style={{ background: f.color, boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)" }}
                            />
                            <div
                              className="text-xs text-center"
                              style={{ fontFamily: "Inter, sans-serif", color: config.flooring === f.id ? "#C6A56A" : "#F5F1EA80" }}
                            >
                              {f.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Facade */}
                    <div>
                      <p className="section-label mb-5">Tip Fațadă</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {facades.map((f) => (
                          <motion.div
                            key={f.id}
                            className={`config-option rounded-sm border p-4 cursor-pointer ${
                              config.facade === f.id ? "selected" : "border-ivory/10"
                            }`}
                            onClick={() => setConfig((prev) => ({ ...prev, facade: f.id }))}
                            whileHover={{ scale: 1.03 }}
                          >
                            <div
                              className="w-full h-12 rounded-sm mb-3"
                              style={{ background: f.color }}
                            />
                            <div
                              className="text-xs text-center"
                              style={{ fontFamily: "Inter, sans-serif", color: config.facade === f.id ? "#C6A56A" : "#F5F1EA80" }}
                            >
                              {f.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Wall color */}
                    <div>
                      <p className="section-label mb-5">Culoare Pereți Interior</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {wallColors.map((c) => (
                          <motion.div
                            key={c.id}
                            className={`config-option rounded-sm border p-4 cursor-pointer ${
                              config.wallColor === c.id ? "selected" : "border-ivory/10"
                            }`}
                            onClick={() => setConfig((prev) => ({ ...prev, wallColor: c.id }))}
                            whileHover={{ scale: 1.03 }}
                          >
                            <div
                              className="w-full h-12 rounded-sm mb-3"
                              style={{ background: c.color, border: "1px solid rgba(255,255,255,0.1)" }}
                            />
                            <div
                              className="text-xs text-center"
                              style={{ fontFamily: "Inter, sans-serif", color: config.wallColor === c.id ? "#C6A56A" : "#F5F1EA80" }}
                            >
                              {c.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Summary */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  {!config.submitted ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Summary */}
                      <div>
                        <h3 className="text-2xl text-ivory mb-6" style={{ fontFamily: "Cinzel, serif" }}>
                          Configurația Ta
                        </h3>

                        <div className="space-y-4">
                          <div className="flex justify-between py-3 border-b border-gold-luxury/10">
                            <span className="text-ivory/50 text-sm">Model</span>
                            <span className="text-ivory text-sm font-medium" style={{ fontFamily: "Cinzel, serif" }}>
                              {config.model.name}
                            </span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gold-luxury/10">
                            <span className="text-ivory/50 text-sm">Suprafață</span>
                            <span className="text-ivory text-sm">{config.surface} m²</span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gold-luxury/10">
                            <span className="text-ivory/50 text-sm">Camere</span>
                            <span className="text-ivory text-sm">{config.rooms} camere</span>
                          </div>
                          <div className="flex justify-between py-3 border-b border-gold-luxury/10">
                            <span className="text-ivory/50 text-sm">Pardoseală</span>
                            <span className="text-ivory text-sm">
                              {floorings.find((f) => f.id === config.flooring)?.label}
                            </span>
                          </div>
                          {config.extras.length > 0 && (
                            <div className="py-3 border-b border-gold-luxury/10">
                              <span className="text-ivory/50 text-sm">Dotări Extra</span>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {config.extras.map((eid) => {
                                  const extra = extras.find((e) => e.id === eid);
                                  return (
                                    <span key={eid} className="px-2 py-0.5 rounded-sm bg-gold-luxury/10 text-gold-luxury text-xs">
                                      {extra?.icon} {extra?.label}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Price */}
                        <div className="mt-8 glass-card p-6 rounded-sm border-gold glow-gold">
                          <p className="section-label mb-2">Estimare Preț Total</p>
                          <motion.div
                            className="text-4xl font-bold text-gold-gradient"
                            style={{ fontFamily: "Cinzel, serif" }}
                            key={totalPrice()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                          >
                            ~{totalPrice().toLocaleString("ro-RO")} €
                          </motion.div>
                          <p className="text-ivory/30 text-xs mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
                            * Estimare orientativă. Prețul final se stabilește după consultare.
                          </p>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <div>
                        <h3 className="text-2xl text-ivory mb-6" style={{ fontFamily: "Cinzel, serif" }}>
                          Trimite Cererea
                        </h3>
                        <div className="space-y-4">
                          {[
                            { key: "name", label: "Numele Tău", placeholder: "Ion Popescu", type: "text" },
                            { key: "phone", label: "Telefon", placeholder: "+40 700 000 000", type: "tel" },
                            { key: "email", label: "Email", placeholder: "ion@email.ro", type: "email" },
                          ].map((field) => (
                            <div key={field.key}>
                              <label
                                className="block section-label mb-2"
                                style={{ fontSize: "0.6rem" }}
                              >
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="input-luxury w-full px-5 py-3.5 rounded-sm text-sm"
                                value={config[field.key as keyof typeof config] as string}
                                onChange={(e) => setConfig((prev) => ({ ...prev, [field.key]: e.target.value }))}
                              />
                            </div>
                          ))}

                          <motion.button
                            className="btn-gold w-full py-4 rounded-sm text-sm mt-4 glow-gold"
                            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em" }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              if (config.name && config.phone) {
                                setConfig((prev) => ({ ...prev, submitted: true }));
                              }
                            }}
                          >
                            Trimite Configurația
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <motion.div
                      className="text-center py-16"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gold-luxury/10 border border-gold-luxury flex items-center justify-center mx-auto mb-6 glow-gold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Check size={36} className="text-gold-luxury" />
                      </motion.div>
                      <h3
                        className="text-3xl text-ivory mb-4"
                        style={{ fontFamily: "Cinzel, serif" }}
                      >
                        Configurație Trimisă!
                      </h3>
                      <p className="text-ivory/50 max-w-md mx-auto mb-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}>
                        Echipa HARIA Residence vă va contacta în maxim 24 ore cu o ofertă personalizată.
                      </p>
                      <p className="text-gold-luxury/70 text-sm" style={{ fontFamily: "Cinzel, serif" }}>
                        Estimare: ~{totalPrice().toLocaleString("ro-RO")} €
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {!config.submitted && (
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-gold-luxury/10">
                <motion.button
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`flex items-center gap-2 btn-outline-gold px-6 py-3 rounded-sm text-xs ${step === 1 ? "opacity-30 cursor-not-allowed" : ""}`}
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em" }}
                  whileHover={step > 1 ? { x: -3 } : {}}
                >
                  <ChevronLeft size={15} />
                  Înapoi
                </motion.button>

                <div className="flex items-center gap-2">
                  {STEPS.map((s) => (
                    <div
                      key={s.id}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        s.id <= step ? "bg-gold-luxury w-8" : "bg-ivory/20 w-4"
                      }`}
                    />
                  ))}
                </div>

                {step < 4 ? (
                  <motion.button
                    onClick={nextStep}
                    className="flex items-center gap-2 btn-gold px-8 py-3 rounded-sm text-xs"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em" }}
                    whileHover={{ x: 3 }}
                  >
                    Continuă
                    <ChevronRight size={15} />
                  </motion.button>
                ) : (
                  <div className="w-24" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
