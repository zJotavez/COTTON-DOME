import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, UserCheck, Award } from "lucide-react";
import { TRANSLATIONS } from "../translations";

interface PilaresProps {
  lang: "pt" | "en" | "fr";
}

export function Pilares({ lang }: PilaresProps) {
  const t = TRANSLATIONS[lang];

  const pillars = [
    {
      title: lang === "pt" ? "Qualidade" : lang === "en" ? "Quality" : "Qualité",
      description: t.pillars.p2Desc,
      icon: <Award className="w-6 h-6 text-[#C28D35]" />,
      bgImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: lang === "pt" ? "Confiança" : lang === "en" ? "Trust" : "Confiance",
      description: t.pillars.p3Desc,
      icon: <ShieldCheck className="w-6 h-6 text-[#C28D35]" />,
      bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: lang === "pt" ? "Profissionalismo" : lang === "en" ? "Professionalism" : "Professionnalisme",
      description: t.pillars.p1Desc,
      icon: <UserCheck className="w-6 h-6 text-[#C28D35]" />,
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const marqueeTexts = {
    pt: [
      "✦ QUALIDADE GARANTIDA",
      "✦ RIGOR TÉCNICO CERTIFICADO",
      "✦ SOLUÇÕES INTELIGENTES DE SEGURANÇA",
      "✦ ASSISTÊNCIA TÉCNICA LOCAL DEDICADA",
      "✦ PROTEÇÃO PERMANENTE 24/7"
    ],
    en: [
      "✦ GUARANTEED QUALITY",
      "✦ CERTIFIED TECHNICAL RIGOR",
      "✦ SMART SECURITY SOLUTIONS",
      "✦ DEDICATED LOCAL TECHNICAL SUPPORT",
      "✦ PERMANENT PROTECTION 24/7"
    ],
    fr: [
      "✦ QUALITÉ GARANTIE",
      "✦ RIGUEUR TECHNIQUE CERTIFIÉE",
      "✦ SOLUTIONS DE SÉCURITÉ INTELLIGENTES",
      "✦ SUPPORT TECHNIQUE LOCAL DÉDIÉ",
      "✦ PROTECTION PERMANENTE 24/7"
    ]
  };

  const texts = marqueeTexts[lang] || marqueeTexts.pt;

  return (
    <section className="bg-[#050505] relative overflow-hidden border-y border-[#1A1A1A]">
      {/* Cards container with top and bottom spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative p-4 sm:p-8 card-luxury cursor-pointer overflow-hidden rounded-xl group ${
                idx === 2 ? "col-span-2 md:col-span-1" : "col-span-1"
              }`}
            >
              {/* Card Background Image */}
              <img
                src={pillar.bgImage}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-500 pointer-events-none mix-blend-luminosity filter brightness-75"
              />

              {/* Inner content overlay */}
              <div className="relative z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-5 border-l-2 border-t-2 border-[#E2AF55] flex items-center justify-center rounded-none bg-black/40">
                  {React.cloneElement(pillar.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-[#E2AF55]" })}
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-3 group-hover:text-[#E2AF55] transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-[#D9D9D9]/80 leading-normal sm:leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee Phrase Row */}
      <div className="w-full bg-[#111111]/40 border-t border-[#E2AF55]/15 py-4 overflow-hidden relative">
        <div className="animate-marquee-ltr flex items-center gap-12 whitespace-nowrap">
          {[...texts, ...texts].map((text, i) => (
            <span
              key={i}
              className={`text-[10px] font-display font-bold uppercase tracking-widest flex items-center gap-2 ${
                i % 2 === 0 ? "text-[#C28D35]" : "text-white"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
