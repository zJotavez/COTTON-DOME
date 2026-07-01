import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Award, HeartHandshake, Check } from "lucide-react";

interface PartnersProps {
  suppliers?: any[];
  lang?: "pt" | "en" | "fr";
}

export function Partners({ lang = "pt" }: PartnersProps) {
  const cardsData = {
    pt: [
      {
        id: "qualidade",
        title: "Qualidade Máxima Garantida",
        description: "Trabalhamos exclusivamente com equipamentos de alto desempenho e fiabilidade comprovada. Cada componente é selecionado seguindo os mais rigorosos testes de qualidade.",
        icon: Award,
        focusPoints: [
          "Componentes eletrónicos topo de gama",
          "Dispositivos testados sob condições extremas",
          "Resistência superior a vandalismo e desgaste",
        ],
        footerText: "Equipamentos 100% originais e certificados"
      },
      {
        id: "garantia",
        title: "Garantia Integral & Suporte",
        description: "Garantimos a total conformidade das nossas instalações. Oferecemos assistência técnica pós-venda rápida e eficiente, assegurando que o seu sistema permanece operacional.",
        icon: ShieldCheck,
        focusPoints: [
          "Acompanhamento técnico pós-instalação",
          "Prazos de garantia e cobertura integral",
          "Equipa dedicada para resolução de avarias",
        ],
        footerText: "Tranquilidade e proteção contínua"
      },
      {
        id: "rigor",
        title: "Compromisso e Rigor Técnico",
        description: "Todos os nossos projetos e instalações cumprem com as mais exigentes normas europeias de segurança. Garantimos uma integração perfeita de sistemas complexos.",
        icon: HeartHandshake,
        focusPoints: [
          "Instalação por técnicos credenciados",
          "Integração perfeita entre múltiplos sistemas",
          "Respeito integral pelas normas de segurança",
        ],
        footerText: "Conformidade e precisão de engenharia"
      }
    ],
    en: [
      {
        id: "qualidade",
        title: "Maximum Quality Guaranteed",
        description: "We work exclusively with high-performance equipment and proven reliability. Each component is selected following the most rigorous quality tests.",
        icon: Award,
        focusPoints: [
          "Top-of-the-line electronic components",
          "Devices tested under extreme conditions",
          "Superior resistance to vandalism and wear",
        ],
        footerText: "100% original and certified equipment"
      },
      {
        id: "garantia",
        title: "Full Warranty & Support",
        description: "We guarantee the complete compliance of our installations. We offer fast and efficient after-sales technical assistance, ensuring your system remains operational.",
        icon: ShieldCheck,
        focusPoints: [
          "Post-installation technical follow-up",
          "Warranty periods and full coverage",
          "Dedicated team for troubleshooting",
        ],
        footerText: "Peace of mind and continuous protection"
      },
      {
        id: "rigor",
        title: "Commitment & Technical Rigor",
        description: "All our projects and installations comply with the most demanding European security standards. We guarantee seamless integration of complex systems.",
        icon: HeartHandshake,
        focusPoints: [
          "Installation by certified technicians",
          "Seamless integration between multiple systems",
          "Full respect for security standards",
        ],
        footerText: "Compliance and engineering precision"
      }
    ],
    fr: [
      {
        id: "qualidade",
        title: "Qualité Maximale Garantie",
        description: "Nous travaillons exclusivement avec des équipements de haute performance et d'une fiabilité prouvée. Chaque composant est sélectionné selon les tests de qualité les plus rigoureux.",
        icon: Award,
        focusPoints: [
          "Composants électroniques haut de gamme",
          "Appareils testés dans des conditions extrêmes",
          "Résistance supérieure au vandalisme et à l'usure",
        ],
        footerText: "Équipements 100% originaux et certifiés"
      },
      {
        id: "garantia",
        title: "Garantie Intégrale & Support",
        description: "Nous garantissons la conformité totale de nos installations. Nous offrons une assistance technique après-vente rapide et efficace, garantissant que votre système reste opérationnel.",
        icon: ShieldCheck,
        focusPoints: [
          "Suivi technique post-installation",
          "Périodes de garantie et couverture complète",
          "Équipe dédiée au dépannage",
        ],
        footerText: "Tranquillité d'esprit et protection continue"
      },
      {
        id: "rigor",
        title: "Engagement & Rigueur Technique",
        description: "Tous nos projets et installations sont conformes aux normes de sécurité européennes les plus exigeantes. Nous garantissons une intégration parfaite des systèmes complexes.",
        icon: HeartHandshake,
        focusPoints: [
          "Installation par des techniciens certifiés",
          "Intégration transparente entre plusieurs systèmes",
          "Respect intégral des normes de sécurité",
        ],
        footerText: "Conformité et précision technique"
      }
    ]
  };

  const headerTexts = {
    pt: {
      tag: "Qualidade & Confiança",
      title: "Compromisso com a Qualidade Máxima",
      subtitle: "Garantimos a máxima durabilidade, segurança e excelência em cada sistema instalado pela Cotton Dome LDA.",
      disclaimer: "* A Cotton Dome LDA implementa exclusivamente sistemas em conformidade com as diretivas e padrões de qualidade europeus.",
      focusTag: "Pontos de Excelência:"
    },
    en: {
      tag: "Quality & Trust",
      title: "Commitment to Maximum Quality",
      subtitle: "We guarantee maximum durability, security, and excellence in every system installed by Cotton Dome LDA.",
      disclaimer: "* Cotton Dome LDA exclusively implements systems in compliance with European quality directives and standards.",
      focusTag: "Points of Excellence:"
    },
    fr: {
      tag: "Qualité & Confiance",
      title: "Engagement pour une Qualité Maximale",
      subtitle: "Nous garantissons une durabilité, une sécurité et une excellence maximales dans chaque système installé par Cotton Dome LDA.",
      disclaimer: "* Cotton Dome LDA implémente exclusivement des systèmes conformes aux directives et normes de qualité européennes.",
      focusTag: "Points d'Excellence :"
    }
  };

  const marquee1Texts = {
    pt: [
      "✦ GARANTIA DE QUALIDADE MÁXIMA",
      "✦ EQUIPAMENTOS 100% HOMOLOGADOS",
      "✦ RIGOR TÉCNICO E DE ENGENHARIA",
      "✦ SATISFAÇÃO E SEGURANÇA TOTAL"
    ],
    en: [
      "✦ MAXIMUM QUALITY GUARANTEE",
      "✦ 100% HOMOLOGATED EQUIPMENT",
      "✦ TECHNICAL AND ENGINEERING RIGOR",
      "✦ TOTAL SATISFACTION AND SECURITY"
    ],
    fr: [
      "✦ GARANTIE DE QUALITÉ MAXIMALE",
      "✦ ÉQUIPEMENTS 100% HOMOLOGUÉS",
      "✦ RIGUEUR TECHNIQUE ET D'INGÉNIERIE",
      "✦ SATISFACTION ET SÉCURITÉ TOTALE"
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
  const content = headerTexts[lang] || headerTexts.pt;
  const activeCards = cardsData[lang] || cardsData.pt;

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
            {content.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#CFCFCF] font-sans leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Quality Cards Grid (Desktop only) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activeCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="card-luxury rounded-xl p-8 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded bg-[#1A1A1A] text-[#C28D35] border border-white/5 group-hover:border-[#E2AF55]/30 group-hover:text-[#E2AF55] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#E2AF55] transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-[#D9D9D9] font-sans leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Focus List */}
                  <div className="border-t border-[#222222] pt-5 mb-6">
                    <span className="block font-display text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-3">
                      {content.focusTag}
                    </span>
                    <div className="space-y-2.5">
                      {card.focusPoints.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E2AF55]"></div>
                          <span className="text-xs text-[#D9D9D9] font-sans">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status footer inside card */}
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400 bg-black/45 px-3 py-2 rounded border border-white/5 font-mono mt-auto">
                  <Check className="w-3.5 h-3.5 text-[#E2AF55]" />
                  <span>{card.footerText}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Quality Cards Carousel (Marquee, mobile only) */}
        <div className="lg:hidden overflow-hidden relative py-4 w-full select-none">
          <div className="animate-marquee-ltr flex gap-4 whitespace-nowrap min-w-full">
            {[...activeCards, ...activeCards].map((card, idx) => {
              const Icon = card.icon;

              return (
                <div
                  key={`${card.id}-mobile-${idx}`}
                  className="inline-block card-luxury rounded-xl p-5 w-[280px] shrink-0 whitespace-normal relative group"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded bg-[#1A1A1A] text-[#C28D35] border border-white/5 group-hover:border-[#E2AF55]/30 group-hover:text-[#E2AF55] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-sm text-white group-hover:text-[#E2AF55] transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>

                    {/* Card Description */}
                    <p className="text-[11px] text-[#D9D9D9] font-sans leading-relaxed mb-4 h-[64px] line-clamp-3">
                      {card.description}
                    </p>

                    {/* Focus List */}
                    <div className="border-t border-[#222222] pt-3 mb-4">
                      <span className="block font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold mb-2">
                        {content.focusTag}
                      </span>
                      <div className="space-y-1.5">
                        {card.focusPoints.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#E2AF55]"></div>
                            <span className="text-[10px] text-[#D9D9D9] font-sans truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Status footer inside card */}
                  <div className="flex items-center gap-1.5 text-[9px] text-gray-400 bg-black/45 px-2.5 py-1.5 rounded border border-white/5 font-mono mt-auto">
                    <Check className="w-3.5 h-3.5 text-[#E2AF55]" />
                    <span className="truncate">{card.footerText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust disclaimer */}
        <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-12 font-sans max-w-xl mx-auto italic">
          {content.disclaimer}
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
