"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SlidersHorizontal, Maximize2, BedDouble, Bath, Car, TreePine, ChevronRight } from "lucide-react";

const houses = [
  {
    id: 1,
    name: "Casa Aurelia",
    project: "HARIA Villas I",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=85&auto=format&fit=crop",
    rooms: 4, baths: 2, surface: 165, garden: 300, parking: 2,
    price: 189000, status: "Disponibil", floor: "Parter+Etaj",
    features: ["Piscină", "Dressing", "Terasă"],
  },
  {
    id: 2,
    name: "Casa Bellavista",
    project: "HARIA Green Park",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85&auto=format&fit=crop",
    rooms: 3, baths: 2, surface: 120, garden: 200, parking: 1,
    price: 139000, status: "Disponibil", floor: "Parter",
    features: ["Terasă", "Birou"],
  },
  {
    id: 3,
    name: "Casa Grand",
    project: "HARIA Grand Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=85&auto=format&fit=crop",
    rooms: 5, baths: 3, surface: 280, garden: 500, parking: 2,
    price: 310000, status: "Rezervat", floor: "Parter+Etaj",
    features: ["Piscină", "Cinema", "Dressing", "Terasă"],
  },
  {
    id: 4,
    name: "Casa Ivory",
    project: "HARIA Villas I",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85&auto=format&fit=crop",
    rooms: 3, baths: 2, surface: 130, garden: 180, parking: 1,
    price: 149000, status: "Disponibil", floor: "Parter",
    features: ["Terasă", "Grădină"],
  },
  {
    id: 5,
    name: "Casa Lumina",
    project: "HARIA Smart Living",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85&auto=format&fit=crop",
    rooms: 4, baths: 2, surface: 155, garden: 250, parking: 2,
    price: 175000, status: "Presale", floor: "Parter+Etaj",
    features: ["Smart Home", "Terasă", "Dressing"],
  },
  {
    id: 6,
    name: "Casa Magnolia",
    project: "HARIA Green Park",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=85&auto=format&fit=crop",
    rooms: 2, baths: 1, surface: 85, garden: 120, parking: 1,
    price: 95000, status: "Disponibil", floor: "Parter",
    features: ["Grădină Amenajată"],
  },
];

type FilterType = { rooms: number | null; maxPrice: number; minSurface: number };

export default function Houses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [filters, setFilters] = useState<FilterType>({ rooms: null, maxPrice: 500000, minSurface: 0 });
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = houses.filter((h) => {
    if (filters.rooms && h.rooms !== filters.rooms) return false;
    if (h.price > filters.maxPrice) return false;
    if (h.surface < filters.minSurface) return false;
    return true;
  });

  return (
    <section id="houses" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black-soft" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12 bg-gold-luxury" />
              <span className="section-label">Disponibilitate</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-ivory"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Casele{" "}
              <span className="text-gold-gradient">Disponibile</span>
            </h2>
          </div>
          <button
            className="btn-outline-gold mt-4 lg:mt-0 px-6 py-3 rounded-sm text-xs flex items-center gap-2"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em" }}
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <SlidersHorizontal size={14} />
            Filtrează
          </button>
        </motion.div>

        {/* Filters Panel */}
        <motion.div
          className="glass-card border-gold rounded-sm p-6 mb-10 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: filtersOpen ? "auto" : 0, opacity: filtersOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <label className="section-label block mb-3" style={{ fontSize: "0.58rem" }}>Număr Camere</label>
              <div className="flex gap-2">
                {[null, 2, 3, 4, 5].map((r) => (
                  <button
                    key={String(r)}
                    onClick={() => setFilters((f) => ({ ...f, rooms: r }))}
                    className={`w-10 h-10 rounded-sm border text-sm transition-all duration-300 ${
                      filters.rooms === r
                        ? "border-gold-luxury bg-gold-luxury/10 text-gold-luxury"
                        : "border-ivory/10 text-ivory/40 hover:border-gold-luxury/30"
                    }`}
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    {r === null ? "All" : r}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="section-label block mb-3" style={{ fontSize: "0.58rem" }}>
                Preț Max: {filters.maxPrice.toLocaleString("ro-RO")} €
              </label>
              <input
                type="range"
                min={80000}
                max={500000}
                step={10000}
                value={filters.maxPrice}
                onChange={(e) => setFilters((f) => ({ ...f, maxPrice: +e.target.value }))}
                className="w-full"
                style={{ accentColor: "#C6A56A" }}
              />
            </div>
            <div>
              <label className="section-label block mb-3" style={{ fontSize: "0.58rem" }}>
                Suprafață Min: {filters.minSurface} m²
              </label>
              <input
                type="range"
                min={0}
                max={250}
                step={10}
                value={filters.minSurface}
                onChange={(e) => setFilters((f) => ({ ...f, minSurface: +e.target.value }))}
                className="w-full"
                style={{ accentColor: "#C6A56A" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((house, i) => (
            <motion.div
              key={house.id}
              className="glass-card border-gold rounded-sm overflow-hidden card-luxury group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-52 project-img-wrap overflow-hidden">
                <img
                  src={house.image}
                  alt={house.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte/70 to-transparent" />

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-sm text-xs font-semibold ${
                      house.status === "Disponibil"
                        ? "bg-gold-luxury/20 text-gold-luxury border border-gold-luxury/40"
                        : house.status === "Rezervat"
                        ? "bg-red-900/30 text-red-400 border border-red-500/30"
                        : "bg-ivory/10 text-ivory/60 border border-ivory/20"
                    }`}
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", letterSpacing: "0.1em" }}
                  >
                    {house.status}
                  </span>
                </div>

                <div
                  className="absolute bottom-4 left-4 text-xs text-ivory/60"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
                >
                  {house.project}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-ivory font-semibold"
                    style={{ fontFamily: "Cinzel, serif", fontSize: "1rem", letterSpacing: "0.05em" }}
                  >
                    {house.name}
                  </h3>
                  <span
                    className="text-gold-luxury font-bold"
                    style={{ fontFamily: "Cinzel, serif", fontSize: "0.95rem" }}
                  >
                    {house.price.toLocaleString("ro-RO")} €
                  </span>
                </div>

                <div className="divider-gold mb-4" />

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { icon: BedDouble, value: house.rooms, label: "cam" },
                    { icon: Bath, value: house.baths, label: "băi" },
                    { icon: Maximize2, value: house.surface, label: "m²" },
                    { icon: TreePine, value: house.garden, label: "m² ct" },
                  ].map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center">
                      <Icon size={14} className="text-gold-luxury/50 mx-auto mb-1" />
                      <div
                        className="text-ivory text-sm font-semibold"
                        style={{ fontFamily: "Cinzel, serif" }}
                      >
                        {value}
                      </div>
                      <div
                        className="text-ivory/30 text-xs"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem" }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {house.features.map((f) => (
                    <span
                      key={f}
                      className="px-2 py-0.5 rounded-sm text-xs bg-gold-luxury/8 text-gold-luxury/70 border border-gold-luxury/15"
                      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full btn-outline-gold py-3 rounded-sm text-xs flex items-center justify-center gap-2 group-hover:btn-gold transition-all duration-500"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em" }}
                >
                  Solicită Detalii
                  <ChevronRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-ivory/30 text-lg" style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}>
              Nu există locuințe care să corespundă filtrelor selectate.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
