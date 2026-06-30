import React from "react";
import { motion } from "motion/react";
import { TRANSLATIONS } from "../translations";

interface EquipmentsProps {
  lang: "pt" | "en" | "fr";
}

export function Equipments({ lang }: EquipmentsProps) {
  const t = TRANSLATIONS[lang];

  const cards = [
    {
      id: "cameras",
      title: t.equipments.items.cameras.title,
      desc: t.equipments.items.cameras.desc,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "alarm_centers",
      title: t.equipments.items.alarmCenters.title,
      desc: t.equipments.items.alarmCenters.desc,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "motion_sensors",
      title: t.equipments.items.motionSensors.title,
      desc: t.equipments.items.motionSensors.desc,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "biometrics",
      title: t.equipments.items.biometrics.title,
      desc: t.equipments.items.biometrics.desc,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "electronic_locks",
      title: t.equipments.items.electronicLocks.title,
      desc: t.equipments.items.electronicLocks.desc,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "turnstiles",
      title: t.equipments.items.turnstiles.title,
      desc: t.equipments.items.turnstiles.desc,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="equipamentos" className="py-24 bg-[#050505] relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Golden Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[#C28D35]/3 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-[#D09B42]/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#C28D35] mb-3"
          >
            {t.equipments.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            {t.equipments.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#CFCFCF] font-sans leading-relaxed"
          >
            {t.equipments.subtitle}
          </motion.p>
        </div>

        {/* Equipments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-xl h-[180px] sm:h-[220px] overflow-hidden group cursor-pointer border border-[#222222] hover:border-[#E2AF55]/40 transition-all duration-500 shadow-xl"
            >
              {/* Background Photo with Zoom and Grayscale transition */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity brightness-[0.40] contrast-[1.1] group-hover:scale-105 group-hover:mix-blend-normal group-hover:brightness-[0.65] transition-all duration-700 ease-out pointer-events-none"
              />

              {/* Modern Dark/Gold Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-10 pointer-events-none"></div>
              <div className="absolute inset-2 border border-[#E2AF55]/5 group-hover:border-[#E2AF55]/30 rounded-lg z-20 pointer-events-none transition-all duration-500"></div>

              {/* Card Contents */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-25">
                <h3 className="font-display font-extrabold text-base sm:text-lg text-white mb-2 group-hover:text-[#E2AF55] transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-[#D9D9D9] font-sans leading-relaxed line-clamp-3">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
