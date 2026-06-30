import React from "react";
import { motion } from "motion/react";
import { PARTNERS } from "../data";
import { ExternalLink, Check } from "lucide-react";
import { DbSupplier } from "../types";
import { TRANSLATIONS } from "../translations";

interface PartnersProps {
  suppliers?: DbSupplier[];
  lang?: "pt" | "en" | "fr";
}

export function Partners({ suppliers, lang = "pt" }: PartnersProps) {
  const t = TRANSLATIONS[lang];

  // Use DB suppliers if provided, else fall back to static data
  const activeSuppliers = suppliers && suppliers.length > 0 ? suppliers : PARTNERS;

  // Generic focus points for dynamically added brands
  const getSupplierFocus = (sup: any) => {
    if (sup.focus && Array.isArray(sup.focus)) {
      return sup.focus;
    }
    const nameLower = sup.name.toLowerCase();
    if (nameLower.includes("motorline")) {
      return lang === "pt" ? [
        "Motores de alto rendimento para portões",
        "Barreiras automáticas e pilares retráteis",
        "Sistemas integrados de controlo de acessos"
      ] : lang === "en" ? [
        "High-performance gate motors",
        "Automatic barriers and retractable bollards",
        "Integrated access control systems"
      ] : [
        "Moteurs de portail haute performance",
        "Barrières automatiques et bornes escamotables",
        "Systèmes de contrôle d'accès intégrés"
      ];
    }
    if (nameLower.includes("visiotech")) {
      return lang === "pt" ? [
        "Equipamentos de CCTV e inteligência analítica",
        "Sistemas avançados de deteção de intrusão",
        "Centrais e sensores certificados de incêndio"
      ] : lang === "en" ? [
        "CCTV equipment and analytical intelligence",
        "Advanced intrusion detection systems",
        "Certified fire panels and sensors"
      ] : [
        "Équipement de CCTV et intelligence analytique",
        "Systèmes avancés de détection d'intrusion",
        "Centrales et capteurs d'incendie certifiés"
      ];
    }
    return lang === "pt" ? [
      "Integração de equipamentos certificados",
      "Soluções de alta fiabilidade operacional",
      "Garantia de conformidade técnica e durabilidade"
    ] : lang === "en" ? [
      "Integration of certified equipment",
      "High operational reliability solutions",
      "Technical compliance and durability warranty"
    ] : [
      "Intégration d'équipements certifiés",
      "Solutions de haute fiabilité opérationnelle",
      "Garantia de conformidade técnica e durabilidade"
    ];
  };

  const getSupplierDescription = (sup: any) => {
    const nameLower = sup.name.toLowerCase();
    if (nameLower.includes("motorline")) {
      return lang === "pt" 
        ? "A Motorline Professional desenvolve e produz sistemas de automatismos para portões, barreiras automáticas e soluções de controlo de acessos inovadoras."
        : lang === "en"
        ? "Motorline Professional develops and produces automation systems for gates, automatic barriers and innovative access control solutions."
        : "Motorline Professional développe et produit des systèmes d'automatisation pour portails, barrières automatiques et solutions innovantes de contrôle d'accès.";
    }
    if (nameLower.includes("visiotech")) {
      return lang === "pt"
        ? "A Visiotech é uma distribuidora líder em soluções de videovigilância, intrusão, controlo de acessos e sistemas de segurança eletrónica de alta tecnologia."
        : lang === "en"
        ? "Visiotech is a leading distributor of high-technology video surveillance, intrusion, access control and electronic security systems."
        : "Visiotech est un distributeur de premier plan dans le domaine de la vidéosurveillance, de l'intrusion, du contrôle d'accès et des systèmes de sécurité.";
    }
    return sup.description;
  };

  const marquee1Texts = {
    pt: [
      "✦ GARANTIA DE QUALIDADE MÁXIMA",
      "✦ FORNECEDORES DE REFERÊNCIA GLOBAL",
      "✦ EQUIPAMENTOS 100% HOMOLOGADOS",
      "✦ RIGOR TÉCNICO E DE ENGENHARIA"
    ],
    en: [
      "✦ MAXIMUM QUALITY GUARANTEE",
      "✦ GLOBAL REFERENCE SUPPLIERS",
      "✦ 100% HOMOLOGATED EQUIPMENT",
      "✦ TECHNICAL AND ENGINEERING RIGOR"
    ],
    fr: [
      "✦ GARANTIE DE QUALITÉ MAXIMALE",
      "✦ FOURNISSEURS DE RÉFÉRENCE GLOBALE",
      "✦ ÉQUIPEMENTS 100% HOMOLOGUÉS",
      "✦ RIGUEUR TECHNIQUE ET D'INGÉNIERIE"
    ]
  };

  const marquee2Texts = {
    pt: [
      "✦ ASSISTÊNCIA TÉCNICA DEDICADA",
      "✦ COMPROMISSO DE RIGOR E FIABILIDADE",
      "✦ INSTALAÇÕES SEGURAS E DURADOURAS",
      "✦ SATISFAÇÃO TOTAL DO CLIENTE"
    ],
    en: [
      "✦ DEDICATED TECHNICAL ASSISTANCE",
      "✦ COMMITMENT TO RIGOR AND RELIABILITY",
      "✦ SAFE AND DURABLE INSTALLATIONS",
      "✦ TOTAL CUSTOMER SATISFACTION"
    ],
    fr: [
      "✦ ASSISTANCE TECHNIQUE DÉDIÉE",
      "✦ ENGAGEMENT DE RIGUEUR ET DE FIABILITÉ",
      "✦ INSTALLATIONS SÛRES ET DURABLES",
      "✦ SATISFACTION TOTALE DU CLIENT"
    ]
  };

  const m1 = marquee1Texts[lang] || marquee1Texts.pt;
  const m2 = marquee2Texts[lang] || marquee2Texts.pt;

  return (
    <section id="fornecedores" className="py-16 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Decorative background grids */}
      <div className="absolute inset-y-0 right-0 w-1/3 opacity-[0.02] tech-grid pointer-events-none"></div>

      {/* Top infinite marquee banner */}
      <div className="w-full bg-black/60 border-y border-[#C28D35]/15 py-3.5 mb-16 overflow-hidden relative z-10">
        <div className="animate-marquee-ltr flex items-center gap-12 whitespace-nowrap">
          {[...m1, ...m1].map((text, idx) => (
            <span
              key={idx}
              className={`text-[9px] font-display font-bold uppercase tracking-widest ${
                idx % 2 === 0 ? "text-[#C28D35]" : "text-white"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#C28D35] mb-3"
          >
            {t.partners.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            {t.partners.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#CFCFCF] font-sans leading-relaxed"
          >
            {t.partners.subtitle}
          </motion.p>
        </div>

        {/* Partners Cards (Desktop Grid) */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activeSuppliers.map((partner: any, idx) => {
            const linkUrl = partner.link || partner.website || "#";
            const logoUrl = partner.logo;
            const focusPoints = getSupplierFocus(partner);
            const description = getSupplierDescription(partner);

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="card-luxury rounded-xl p-8 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Partner Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 mb-1">
                        {t.partners.badge}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-[#E2AF55] transition-colors duration-300">
                        {partner.name}
                      </h3>
                    </div>
                    {linkUrl && linkUrl !== "#" && (
                      <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded bg-[#1A1A1A] hover:bg-[#E2AF55] hover:text-black text-gray-400 border border-white/5 transition-colors duration-300 flex items-center justify-center"
                        aria-label={`Visitar o site da ${partner.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Logo visualization */}
                  {logoUrl && (
                    <div className="w-full h-14 bg-black/45 border border-white/5 rounded-lg flex items-center justify-center p-3 mb-6">
                      <img src={logoUrl} alt={partner.name} className="max-h-full max-w-full object-contain filter brightness-95 group-hover:brightness-100 transition" />
                    </div>
                  )}

                  {/* Partner Description */}
                  <p className="text-xs sm:text-sm text-[#D9D9D9] font-sans leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Focus List */}
                  <div className="border-t border-[#222222] pt-4 mb-6">
                    <span className="block font-display text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-3">
                      {lang === "pt" ? "Soluções de Confiança Integradas:" : lang === "en" ? "Integrated Trust Solutions:" : "Solutions de Confiance Intégrées :"}
                    </span>
                    <div className="space-y-2">
                      {focusPoints.map((item: string, itemIdx: number) => (
                        <div key={itemIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E2AF55]"></div>
                          <span className="text-xs text-[#D9D9D9] font-sans">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status footer inside card */}
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-black/45 px-3 py-2 rounded border border-white/5 font-mono">
                  <Check className="w-3.5 h-3.5 text-[#E2AF55]" />
                  <span>{t.partners.certified}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Partners Carousel (Marquee, hidden on Desktop) */}
        <div className="md:hidden overflow-hidden relative py-4 w-full select-none">
          <div className="animate-marquee-ltr flex gap-4 whitespace-nowrap min-w-full">
            {[...activeSuppliers, ...activeSuppliers].map((partner: any, idx) => {
              const linkUrl = partner.link || partner.website || "#";
              const focusPoints = getSupplierFocus(partner);
              const description = getSupplierDescription(partner);

              return (
                <div
                  key={`${partner.id}-mobile-${idx}`}
                  className="inline-block card-luxury rounded-xl p-5 w-[270px] shrink-0 whitespace-normal relative group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 mb-0.5">
                        {t.partners.badge}
                      </span>
                      <h3 className="font-display font-bold text-sm text-white group-hover:text-[#E2AF55] transition-colors leading-tight">
                        {partner.name}
                      </h3>
                    </div>
                    {linkUrl && linkUrl !== "#" && (
                      <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-[#1A1A1A] text-gray-400 border border-white/5 flex items-center justify-center"
                        aria-label={`Visitar o site da ${partner.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="text-[10px] text-[#D9D9D9] font-sans leading-relaxed mb-4 h-[60px] line-clamp-3">
                    {description}
                  </p>

                  <div className="border-t border-[#222222] pt-3 mb-4">
                    <span className="block font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold mb-2">
                      {lang === "pt" ? "Soluções Integradas:" : lang === "en" ? "Integrated Solutions:" : "Solutions Intégrées :"}
                    </span>
                    <div className="space-y-1.5">
                      {focusPoints.map((item: string, itemIdx: number) => (
                        <div key={itemIdx} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-[#E2AF55] flex-shrink-0"></div>
                          <span className="text-[10px] text-[#D9D9D9] font-sans truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] text-gray-500 bg-black/45 px-2 py-1.5 rounded border border-white/5 font-mono">
                    <Check className="w-3 h-3 text-[#E2AF55] flex-shrink-0" />
                    <span className="truncate">{t.partners.certified}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust disclaimer as requested */}
        <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-12 font-sans max-w-xl mx-auto italic">
          {lang === "pt" 
            ? "* A Cotton Dome LDA trabalha com produtos e soluções de fornecedores reconhecidos."
            : lang === "en"
            ? "* Cotton Dome LDA works with products and solutions from recognized suppliers."
            : "* Cotton Dome LDA travaille avec des produits et des solutions de fournisseurs reconnus."}
        </p>

      </div>

      {/* Bottom infinite marquee banner */}
      <div className="w-full bg-black/60 border-y border-[#E2AF55]/15 py-3.5 mt-16 overflow-hidden relative z-10">
        <div className="animate-marquee-rtl flex items-center gap-12 whitespace-nowrap">
          {[...m2, ...m2].map((text, idx) => (
            <span
              key={idx}
              className={`text-[9px] font-display font-bold uppercase tracking-widest ${
                idx % 2 === 0 ? "text-white" : "text-[#E2AF55]"
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
