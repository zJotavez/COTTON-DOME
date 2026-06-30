import React from "react";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { TRANSLATIONS } from "../translations";

interface HeroQuoteProps {
  onTalkClick: () => void;
  lang?: "pt" | "en" | "fr";
}

export function HeroQuote({ onTalkClick, lang = "pt" }: HeroQuoteProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden border-y border-[#1a1a1a]">
      {/* Background Image */}
      <img
        src="/images/cctv-camera.png"
        alt="Algoritmo de Segurança Cotton Dome"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      />

      {/* Dark Overlay Gradient to ensure smooth blending and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-black/45 to-[#0a0a0a]/80 pointer-events-none"></div>

      {/* Decorative Network Grid lines */}
      <div className="absolute inset-0 opacity-[0.03] tech-grid pointer-events-none"></div>

      {/* Extreme ambient gold point glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#C28D35]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Shield Icon with glowing ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#111] to-[#1A1A1A] border border-[#C28D35]/50 mb-8 overflow-hidden p-2"
        >
          {/* Inner ring pulse */}
          <div className="absolute inset-[-4px] rounded-full border border-[#C28D35]/20 animate-ping opacity-75 pointer-events-none z-10"></div>
          <img src="/images/logo.png" alt="Cotton Dome Logo" className="w-full h-full object-contain" />
        </motion.div>

        {/* Powerful Slogan Copy */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto text-3d-gold"
        >
          “{t.quoteSection.title}”
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#CFCFCF] font-sans leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t.quoteSection.subtitle}
        </motion.p>

        {/* Quick CTA to talk to Cotton Dome */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={onTalkClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-display font-bold uppercase tracking-wider text-xs border border-[#C28D35] text-[#C28D35] hover:text-black hover:bg-[#C28D35] transition-all duration-300 shadow-[0_4px_20px_rgba(194,141,53,0.1)] hover:shadow-[0_4px_25px_rgba(194,141,53,0.35)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.quoteSection.cta}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
