"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface HariaLogoLiveProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function HariaLogoLive({ size = "md", showTagline = false }: HariaLogoLiveProps) {
  const shimmerRef = useRef<SVGRectElement>(null);

  const sizes = {
    sm: { width: 120, height: 56 },
    md: { width: 180, height: 84 },
    lg: { width: 260, height: 120 },
  };

  const { width, height } = sizes[size];

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 260 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Gold metallic gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6E5A3C" />
            <stop offset="30%" stopColor="#C6A56A" />
            <stop offset="60%" stopColor="#D9C29C" />
            <stop offset="80%" stopColor="#C6A56A" />
            <stop offset="100%" stopColor="#6E5A3C" />
          </linearGradient>
          {/* Shimmer animation gradient */}
          <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(240,208,128,0)" />
            <stop offset="50%" stopColor="rgba(240,208,128,0.6)" />
            <stop offset="100%" stopColor="rgba(240,208,128,0)" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-1 0; 2 0; -1 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </linearGradient>
          {/* Silver gradient for R */}
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#888" />
            <stop offset="50%" stopColor="#bbb" />
            <stop offset="100%" stopColor="#777" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="logoClip">
            <rect width="260" height="120" />
          </clipPath>
        </defs>

        {/* ── H letter (gold) ── */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          filter="url(#softGlow)"
        >
          {/* H left vertical */}
          <rect x="18" y="4" width="10" height="60" fill="url(#goldGrad)" />
          {/* H crossbar */}
          <rect x="18" y="28" width="38" height="8" fill="url(#goldGrad)" />
          {/* H right vertical */}
          <rect x="46" y="4" width="10" height="60" fill="url(#goldGrad)" />
        </motion.g>

        {/* ── R letter (silver/dark) ── */}
        <motion.g
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* R left vertical */}
          <rect x="60" y="4" width="10" height="60" fill="url(#silverGrad)" />
          {/* R top curve body */}
          <path
            d="M70 4 Q105 4 105 22 Q105 40 70 40"
            fill="none"
            stroke="url(#silverGrad)"
            strokeWidth="10"
          />
          {/* R diagonal leg */}
          <line x1="72" y1="40" x2="108" y2="64" stroke="url(#silverGrad)" strokeWidth="10" strokeLinecap="round" />
        </motion.g>

        {/* ── Buildings integrated in HR ── */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Tall center building */}
          <rect x="58" y="20" width="8" height="46" fill="url(#goldGrad)" opacity="0.9" />
          {/* Medium left building */}
          <rect x="46" y="32" width="8" height="34" fill="url(#goldGrad)" opacity="0.7" />
          {/* Small right building */}
          <rect x="70" y="40" width="6" height="26" fill="url(#goldGrad)" opacity="0.6" />
        </motion.g>

        {/* ── Golden horizon arc ── */}
        <motion.path
          d="M8 68 Q65 58 130 64 Q180 68 220 62"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        />

        {/* ── Tree silhouette ── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ transformOrigin: "200px 55px" }}
        >
          <ellipse cx="200" cy="44" rx="14" ry="18" fill="#4a5a3a" opacity="0.8" />
          <ellipse cx="196" cy="40" rx="10" ry="14" fill="#5a6a4a" opacity="0.6" />
          <rect x="197" y="58" width="4" height="12" fill="#5a4a2a" opacity="0.7" />
        </motion.g>

        {/* ── HARIA text ── */}
        <motion.text
          x="130"
          y="94"
          textAnchor="middle"
          fontFamily="Cinzel, serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="6"
          fill="url(#goldGrad)"
          filter="url(#softGlow)"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          HARIA
        </motion.text>

        {/* ── RESIDENCE text ── */}
        <motion.text
          x="130"
          y="110"
          textAnchor="middle"
          fontFamily="Cinzel, serif"
          fontSize="10"
          fontWeight="400"
          letterSpacing="5"
          fill="url(#silverGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          RESIDENCE
        </motion.text>

        {/* ── Shimmer overlay ── */}
        <clipPath id="logoClipInner">
          <rect x="0" y="0" width="260" height="120" />
        </clipPath>
        <rect
          ref={shimmerRef}
          x="-260"
          y="0"
          width="260"
          height="120"
          fill="url(#shimmerGrad)"
          clipPath="url(#logoClipInner)"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-260 0; 520 0"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      {showTagline && (
        <motion.p
          className="section-label mt-2 text-center"
          style={{ letterSpacing: "0.25em", fontSize: "0.55rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          CREĂM. DEZVOLTĂM. CONSTRUIM FRUMOS.
        </motion.p>
      )}
    </motion.div>
  );
}
