import React from "react";
import { motion } from "motion/react";
import { TRANSLATIONS } from "../translations";

interface HowWeWorkProps {
  lang?: "pt" | "en" | "fr";
}

export function HowWeWork({ lang = "pt" }: HowWeWorkProps) {
  const t = TRANSLATIONS[lang];

  const steps = [
    {
      stepNumber: "01",
      title: t.howWeWork.steps.step1Title,
      description: t.howWeWork.steps.step1Desc
    },
    {
      stepNumber: "02",
      title: t.howWeWork.steps.step2Title,
      description: t.howWeWork.steps.step2Desc
    },
    {
      stepNumber: "03",
      title: t.howWeWork.steps.step3Title,
      description: t.howWeWork.steps.step3Desc
    },
    {
      stepNumber: "04",
      title: t.howWeWork.steps.step4Title,
      description: t.howWeWork.steps.step4Desc
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}videos/hero-video.mp4`} type="video/mp4" />
      </video>

      {/* Tech Grid Overlay on top of video */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-60"></div>

      {/* Dark Overlay Gradient to ensure smooth blending and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glow Effects */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#E2AF55]/6 blur-[120px] gold-ambient-light pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#E2AF55] mb-3"
          >
            {t.howWeWork.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            {t.howWeWork.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#D9D9D9] font-sans leading-relaxed"
          >
            {t.howWeWork.subtitle}
          </motion.p>
        </div>

        {/* Timeline Steps Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#E2AF55]/30 to-transparent -translate-y-1/2 z-0 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="card-luxury p-4 sm:p-6 rounded-xl relative group flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#E2AF55]/15 group-hover:text-[#E2AF55]/30 tracking-tight transition-colors duration-500">
                    {step.stepNumber}
                  </span>
                  
                  {/* Glowing Node Point */}
                  <div className="w-3 h-3 rounded-full bg-[#1A1A1A] border-2 border-[#E2AF55]/50 group-hover:bg-[#E2AF55] group-hover:shadow-[0_0_12px_rgba(226,175,85,0.85)] transition-all duration-300"></div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide mb-2 sm:mb-3 group-hover:text-[#E2AF55] transition-colors duration-300 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#D9D9D9] font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
