import React from "react";
import { motion } from "motion/react";
import { ENVIRONMENTS } from "../data";
import { LucideIcon } from "./LucideIcon";
import { TRANSLATIONS } from "../translations";

interface EnvironmentsProps {
  lang?: "pt" | "en" | "fr";
}

const mapIdToKey = (id: string | number): "residencias" | "condominios" | "empresas" | "comercio" | "industrias" | "armazens" => {
  const map: Record<string | number, "residencias" | "condominios" | "empresas" | "comercio" | "industrias" | "armazens"> = {
    1: "residencias",
    2: "condominios",
    3: "empresas",
    4: "comercio",
    5: "industrias",
    6: "armazens"
  };
  return map[id] || "residencias";
};

export function Environments({ lang = "pt" }: EnvironmentsProps) {
  const t = TRANSLATIONS[lang];

  const row1 = ENVIRONMENTS.slice(0, 3);
  const row2 = ENVIRONMENTS.slice(3, 6);

  // Duplicate elements to ensure smooth infinite loop
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  const renderCard = (env: typeof ENVIRONMENTS[0], idx: number) => {
    const key = mapIdToKey(env.id);
    const itemTranslation = t.environments.items[key];
    const name = itemTranslation ? itemTranslation.name : env.name;
    const description = itemTranslation ? itemTranslation.desc : env.description;

    return (
      <div
        key={`${env.id}-${idx}`}
        className="w-[280px] sm:w-[340px] h-60 rounded-xl overflow-hidden border border-[#222222] hover:border-[#C28D35]/40 transition-all duration-500 relative flex-shrink-0 group"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/55 z-10 group-hover:bg-black/45 transition-colors duration-500"></div>
        <img
          src={env.image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity brightness-50 contrast-125 group-hover:scale-102 group-hover:mix-blend-normal group-hover:brightness-75 transition-all duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <div className="w-9 h-9 rounded-lg bg-[#111111]/95 border border-white/10 group-hover:border-[#C28D35]/50 flex items-center justify-center transition-all duration-300">
            <LucideIcon name={env.iconName} className="w-4 h-4 text-[#C28D35] group-hover:rotate-6 transition-transform" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-white mb-1 group-hover:text-[#E2AF55] transition-colors">
              {name}
            </h3>
            <p className="text-xs text-[#CFCFCF]/90 font-sans leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-[#1A1A1A]">
      {/* Mesh grid background (tech-grid) */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-50"></div>

      {/* Decorative ambient gold points */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-[#C28D35]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[#D09B42]/3 blur-[120px] pointer-events-none"></div>

      {/* Fade Overlays on sides for premium marquee blending */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#C28D35] mb-3"
          >
            {t.environments.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            {t.environments.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#CFCFCF] font-sans leading-relaxed"
          >
            {t.environments.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 relative z-10 w-full overflow-hidden py-4">
        
        {/* Row 1: Left-to-Right (ltr) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-ltr flex gap-6 hover:[animation-play-state:paused] transition-all duration-300">
            {row1Items.map((env, idx) => renderCard(env, idx))}
          </div>
        </div>

        {/* Row 2: Right-to-Left (rtl) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-rtl flex gap-6 hover:[animation-play-state:paused] transition-all duration-300">
            {row2Items.map((env, idx) => renderCard(env, idx))}
          </div>
        </div>

      </div>
    </section>
  );
}
