import React from "react";
import { motion } from "motion/react";
import { Shield, ArrowRight, Eye, Key, Cpu, Sparkles } from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
  onExploreClick: () => void;
}

export function Hero({ onQuoteClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]"
    >
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

      {/* Dark Overlay Gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Golden Glowing Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FFD700]/8 blur-[120px] gold-ambient-light pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#C9A227]/8 blur-[150px] gold-ambient-light pointer-events-none"></div>

      {/* Decorative Diagonal Gold Lines */}
      <div className="absolute top-0 right-0 w-[50vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent rotate-45 transform origin-top-right pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[30vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent -rotate-12 transform pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Dynamic Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 border border-[#FFD700]/40 bg-[#111111]/90 text-[#FFD700] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 w-fit rounded shadow-[0_0_15px_rgba(255,215,0,0.1)]"
            >
              Proteção Inteligente
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 uppercase"
            >
              Segurança <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] filter drop-shadow-[0_2px_10px_rgba(255,215,0,0.2)]">Inteligente</span> para Residências, Empresas e Condomínios
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#D9D9D9] max-w-xl leading-relaxed mb-8 font-sans"
            >
              A <strong className="text-white font-semibold">Cotton Dome LDA</strong> desenvolve soluções completas em videovigilância, controlo de acessos, intrusão, automatismos, redes, telecomunicações e sistemas de proteção profissional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onQuoteClick}
                className="px-8 py-4 btn-gold-premium font-bold uppercase tracking-widest text-xs rounded cursor-pointer"
              >
                Solicitar Orçamento
              </button>

              <button
                onClick={onExploreClick}
                className="px-8 py-4 btn-gold-outline font-bold uppercase tracking-widest text-xs rounded cursor-pointer"
              >
                Conhecer Soluções
              </button>
            </motion.div>

            {/* Extra Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-[#222222] pt-8 max-w-lg"
            >
              <div>
                <span className="block font-display text-lg font-bold text-[#D4AF37]">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Eficiente</span>
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-[#D4AF37]">Suporte</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Local Dedicado</span>
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-[#D4AF37]">Rigor</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Técnico Certificado</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: High-End Security Tech HUD */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-square rounded-none bg-[#1A1A1A] border border-[#D4AF37]/40 p-6 shadow-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute -inset-4 border border-[#D4AF37]/10 -z-10 pointer-events-none"></div>
              {/* Scanline Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)] animate-[bounce_5s_infinite] pointer-events-none"></div>

              {/* Hexagonal Background Grid Texture */}
              <div className="absolute inset-0 opacity-[0.04] tech-grid pointer-events-none"></div>

              {/* HUD Header */}
              <div className="flex justify-between items-center relative z-10 border-b border-[#222222] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#CFCFCF]">SECURE_LINK_ONLINE</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-[#222] border border-white/5 font-mono text-[9px] text-[#D4AF37]">
                  V_2.26
                </div>
              </div>

              {/* Visualized Camera Live View Placeholder */}
              <div className="relative flex-1 my-4 rounded-lg bg-black border border-[#222222] overflow-hidden flex flex-col justify-center items-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-95 transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={`${import.meta.env.BASE_URL}videos/video4.mp4`} type="video/mp4" />
                </video>
                
                {/* HUD Camera Overlays */}
                <div className="absolute inset-0 border border-[#D4AF37]/10 p-3 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between font-mono text-[8px] text-[#D4AF37]">
                    <span>[CAM_01_MORADIA_PREMIUM]</span>
                    <span>REC ●</span>
                  </div>
                  <div className="flex justify-between items-end font-mono text-[8px] text-gray-500">
                    <span>GRID_ON</span>
                    <span>1080P_60FPS</span>
                  </div>
                </div>

                {/* Simulated Scanning Ring */}
                <div className="relative w-20 h-20 rounded-full border border-dashed border-[#D4AF37]/30 flex items-center justify-center animate-[spin_20s_linear_infinite] z-10">
                  <div className="w-16 h-16 rounded-full border border-double border-[#D4AF37]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#D4AF37] opacity-60 animate-[pulse_2s_infinite]" />
                  </div>
                </div>
              </div>

              {/* Bottom Interactive HUD Metrics */}
              <div className="grid grid-cols-3 gap-2 relative z-10">
                <div className="bg-black/40 border border-[#222222] p-2.5 rounded hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="font-display text-[9px] font-bold uppercase">CCTV</span>
                  </div>
                  <span className="font-mono text-[8px] text-gray-400">Ativo / Seguro</span>
                </div>

                <div className="bg-black/40 border border-[#222222] p-2.5 rounded hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                    <Key className="w-3.5 h-3.5" />
                    <span className="font-display text-[9px] font-bold uppercase">Acesso</span>
                  </div>
                  <span className="font-mono text-[8px] text-gray-400">Biométrico OK</span>
                </div>

                <div className="bg-black/40 border border-[#222222] p-2.5 rounded hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="font-display text-[9px] font-bold uppercase">Automação</span>
                  </div>
                  <span className="font-mono text-[8px] text-gray-400">Portões_Aptos</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
