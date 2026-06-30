import React, { useEffect } from "react";
import { SERVICES_DATA } from "../servicesData";
import { ENVIRONMENTS } from "../data";
import { LucideIcon } from "./LucideIcon";
import { ArrowLeft, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { DbService, DbServicePage } from "../types";
import { TRANSLATIONS } from "../translations";

const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

interface ServiceDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  services?: DbService[];
  pages?: DbServicePage[];
  lang?: "pt" | "en" | "fr";
}

const mapSlugToKey = (slug: string): string => {
  if (slug === "alarme-intrusao") return "intrusao";
  if (slug === "controle-acesso") return "acessos";
  if (slug === "ups-energia") return "ups";
  if (slug === "redes-estruturadas") return "redes";
  return slug;
};

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

export function ServiceDetail({ slug, onNavigate, services, pages, lang = "pt" }: ServiceDetailProps) {
  const t = TRANSLATIONS[lang];

  // Resolve service from DB or static fallback
  const service = services?.find((s) => s.slug === slug) || SERVICES_DATA.find((s) => s.slug === slug);
  const pageDetails = pages?.find((p) => p.service_id === service?.id);

  // Safe JSON Parsing helper
  const parseJsonArray = (val: any, defaultVal: any[]) => {
    if (!val) return defaultVal;
    if (Array.isArray(val)) return val;
    try {
      const parsed = JSON.parse(val);
      return Array.isArray(parsed) ? parsed : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  };

  useEffect(() => {
    if (service) {
      const serviceKey = mapSlugToKey(service.slug);
      const serviceTrans = t.services[serviceKey];
      const displayTitle = serviceTrans ? serviceTrans.title : service.title;
      
      const seoTitle = displayTitle + " | Cotton Dome LDA";
      document.title = seoTitle;
      
      // Update SEO Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      const seoDesc = serviceTrans ? serviceTrans.shortDesc : ((service as any).seoDescription || (service as any).short_description || "");
      metaDesc.setAttribute('content', seoDesc);
    }
    // Scroll to top when loading page
    window.scrollTo(0, 0);
  }, [service, t]);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#050505] text-[#D9D9D9] flex flex-col justify-center items-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#E2AF55]/10 border border-[#E2AF55] flex items-center justify-center text-[#E2AF55] mb-6">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="font-display font-bold text-2xl text-white mb-4">{t.serviceDetail.errorTitle}</h1>
        <p className="text-sm text-gray-400 max-w-md mb-8">
          {t.serviceDetail.errorDesc}
        </p>
        <button
          onClick={() => onNavigate("/")}
          className="inline-flex items-center gap-2 px-6 py-3 btn-gold-outline text-xs rounded transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.serviceDetail.backHome}</span>
        </button>
      </main>
    );
  }

  // Resolve service translations
  const serviceKey = mapSlugToKey(service.slug);
  const serviceTrans = t.services[serviceKey];

  const displayTitle = serviceTrans ? serviceTrans.title : service.title;
  const displaySlogan = serviceTrans ? serviceTrans.slogan : (pageDetails?.impact_phrase || (service as any).slogan || "Soluções Técnicas Personalizadas");
  const displayDesc = serviceTrans ? serviceTrans.desc : (pageDetails?.full_description || (service as any).description || "");

  // Resolve benefits (translate if it's the static PT fallback)
  const rawBenefits = parseJsonArray(pageDetails?.benefits, (service as any).benefits || []);
  const benefits = lang === "pt" ? rawBenefits : (serviceTrans ? [serviceTrans.slogan, serviceTrans.shortDesc] : rawBenefits);

  const products = parseJsonArray(pageDetails?.related_products, (service as any).products || []);
  const staticService = SERVICES_DATA.find((s) => s.slug === slug);
  const galleryImages = parseJsonArray(pageDetails?.gallery_images, staticService?.galleryImages || []);

  const workSteps = {
    pt: [
      { num: "01", title: "Análise Técnica", desc: "Avaliamos minuciosamente o espaço físico e compreendemos a sua necessidade de segurança." },
      { num: "02", title: "Escolha da Solução", desc: "Dimensionamos os equipamentos de alta tecnologia mais ajustados à sua realidade." },
      { num: "03", title: "Instalação Profissional", desc: "Executamos a montagem com rigor técnico, organização técnica e respeito estético." },
      { num: "04", title: "Configuração", desc: "Configuramos todos os sistemas e realizamos testes lógicos completos de funcionamento." },
      { num: "05", title: "Suporte e Acompanhamento", desc: "Garantimos assistência técnica dedicada pós-venda para manter a proteção activa." }
    ],
    en: [
      { num: "01", title: "Technical Analysis", desc: "We thoroughly evaluate the physical space and understand your security needs." },
      { num: "02", title: "Solution Choice", desc: "We size the high-tech equipment most adjusted to your reality." },
      { num: "03", title: "Professional Installation", desc: "We perform the assembly with technical rigor, technical organization and aesthetic respect." },
      { num: "04", title: "Configuration", desc: "We configure all systems and perform complete logical tests." },
      { num: "05", title: "Support and Monitoring", desc: "We guarantee dedicated post-sale technical assistance to keep protection active." }
    ],
    fr: [
      { num: "01", title: "Analyse Technique", desc: "Nous évaluons minutieusement l'espace physique et comprenons vos besoins de sécurité." },
      { num: "02", title: "Choix de la Solution", desc: "Nous dimensionnons les équipements de haute technologie les plus adaptés à votre réalité." },
      { num: "03", title: "Installation Professionnelle", desc: "Nous réalisons le montage avec rigueur technique, organisation et respect esthétique." },
      { num: "04", title: "Configuration", desc: "Nous configurons tous les systèmes et effectuons des tests logiques complets." },
      { num: "05", title: "Support et Suivi", desc: "Nous garantissons une assistance technique dédiée après-vente pour maintenir la protection active." }
    ]
  };

  const displayWorkSteps = workSteps[lang] || workSteps.pt;

  const defaultAppLocations = [
    { name: "Residências", desc: "Proteção personalizada e automatismos para o conforto do seu lar." },
    { name: "Condomínios", desc: "Controlo seguro de acessos comuns e vigilância perimetral." },
    { name: "Empresas", desc: "Gestão inteligente de segurança e redes corporativas robustas." },
    { name: "Comércio", desc: "Prevenção de perdas e portas automáticas de alto tráfego." },
    { name: "Indústrias", desc: "Sistemas complexos de deteção e segurança de alta resistência." },
    { name: "Armazéns", desc: "Racks organizados, UPS de backup e proteção perimetral total." }
  ];

  const rawAppLocations = parseJsonArray(pageDetails?.applications, defaultAppLocations);
  
  const displayAppLocations = rawAppLocations.map((loc: any) => {
    // Check if name matches any environment item in data.ts or translations
    const envItem = ENVIRONMENTS.find(e => e.name.toLowerCase() === loc.name.toLowerCase() || e.id.toString() === loc.id?.toString());
    if (envItem) {
      const key = mapIdToKey(envItem.id);
      const itemTranslation = t.environments.items[key];
      return {
        name: itemTranslation ? itemTranslation.name : loc.name,
        desc: itemTranslation ? itemTranslation.desc : loc.desc
      };
    }
    return loc;
  });

  const resolveMediaUrl = (url: string | undefined, defaultUrl: string) => {
    if (!url) return defaultUrl;
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    const cleanUrl = url.replace(/^\//, '');
    if (API_BASE) {
      return `${API_BASE}/${cleanUrl}`;
    }
    const base = import.meta.env.BASE_URL || "/";
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}${cleanUrl}`;
  };

  const mainImage = resolveMediaUrl(service.image, "");
  const iconName = (service as any).icon || (service as any).iconName || "Camera";

  return (
    <main className="bg-[#050505] text-[#CFCFCF] min-h-screen">
      
      {/* 1. HERO DO SERVIÇO */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden border-b border-[#1a1a1a]">
        {/* Background Image */}
        <img
          src={mainImage}
          alt={displayTitle}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25] contrast-[1.1] pointer-events-none"
        />

        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/45 to-[#050505]/85 pointer-events-none"></div>
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-40"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-lg bg-[#111111]/90 border border-[#E2AF55]/45 flex items-center justify-center text-[#E2AF55] mx-auto mb-6 shadow-lg shadow-[#E2AF55]/10"
          >
            <LucideIcon name={iconName} className="w-6 h-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight uppercase mb-4"
          >
            {displayTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs sm:text-sm text-[#E2AF55] uppercase tracking-widest max-w-3xl mx-auto mb-8 font-semibold"
          >
            {displaySlogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <button
              onClick={() => {
                const element = document.getElementById("contacto-direto");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 btn-gold-premium text-black font-bold uppercase tracking-widest text-xs rounded cursor-pointer"
            >
              {t.serviceDetail.requestBudget}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. DESCRIÇÃO COMPLETA & BENEFÍCIOS */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#E2AF55]/6 blur-[120px] gold-ambient-light pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side: detailed description */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide uppercase border-b border-[#222] pb-4 mb-6">
                {t.serviceDetail.aboutService}
              </h2>
              <p className="text-sm sm:text-base text-[#D9D9D9] font-sans leading-relaxed mb-6 font-medium">
                {displayDesc}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                {t.serviceDetail.generalDesc}
              </p>
            </div>

            {/* Right side: Benefits list */}
            <div className="lg:col-span-5 card-luxury p-8 rounded-xl relative group">
              <h2 className="text-base sm:text-lg font-display font-bold text-[#E2AF55] tracking-wider uppercase mb-6">
                {t.serviceDetail.mainBenefits}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E2AF55] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#D9D9D9] font-sans leading-tight">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APLICAÇÕES */}
      <section className="py-20 bg-[#050505] relative overflow-hidden border-t border-[#1a1a1a]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none filter brightness-75 contrast-125"
          src="/videos/hero-video.mp4"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black/65 to-[#050505] pointer-events-none"></div>
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide uppercase mb-3">
              {t.serviceDetail.appAreas}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {t.serviceDetail.appAreasDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayAppLocations.map((loc: any, idx: number) => (
              <div
                key={idx}
                className="card-luxury p-6 rounded-xl group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#1A1A1A] border border-[#E2AF55]/20 flex items-center justify-center text-[#E2AF55] group-hover:border-[#E2AF55]/50 transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-sm uppercase text-white tracking-wide group-hover:text-[#E2AF55] transition-colors">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-xs text-[#D9D9D9] font-sans leading-relaxed">
                  {loc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUTOS RELACIONADOS COM DESCRIÇÃO EXPLICATIVA E BENEFÍCIO (NOVO DESIGN PREMIUM) */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide uppercase mb-3">
              {t.serviceDetail.relatedEquipments}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
              {t.serviceDetail.relatedEquipmentsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((prod: any, idx: number) => {
              const cleanProdKey = prod.toLowerCase().trim();
              const productTrans = t.productsDict[cleanProdKey];
              
              if (productTrans) {
                return (
                  <div
                    key={idx}
                    className="card-luxury p-6 rounded-xl group relative overflow-hidden flex flex-col justify-between border border-[#222] hover:border-[#E2AF55]/40 transition-all duration-300"
                  >
                    <div>
                      <h3 className="font-display font-bold text-sm text-white tracking-wide mb-2 group-hover:text-[#E2AF55] transition-colors leading-tight">
                        {productTrans.title}
                      </h3>
                      <p className="text-[11px] text-[#CFCFCF] font-sans leading-relaxed mb-4">
                        {productTrans.description}
                      </p>
                    </div>
                    <div className="mt-auto border-t border-[#222] pt-3 text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors font-mono">
                      <strong className="text-[#E2AF55] font-semibold uppercase text-[9px] block mb-1">
                        {lang === "pt" ? "Benefício" : lang === "en" ? "Benefit" : "Avantage"}:
                      </strong>
                      {productTrans.benefit}
                    </div>
                  </div>
                );
              }

              // Fallback
              return (
                <div
                  key={idx}
                  className="card-luxury p-5 rounded-xl group flex flex-col items-center justify-center text-center min-h-[90px] border border-[#222]"
                >
                  <span className="text-xs text-[#D9D9D9] font-sans font-medium capitalize group-hover:text-white transition-colors">
                    {prod}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4b. GALERIA VISUAL DO SERVIÇO */}
      {galleryImages && galleryImages.length > 0 && (
        <section className="py-20 bg-[#050505] relative overflow-hidden border-t border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide uppercase mb-3">
                {t.serviceDetail.galleryTitle}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                {t.serviceDetail.galleryDesc}
              </p>
            </div>

            {/* Mobile/Tablet: Infinite Horizontal Marquee */}
            <div className="block lg:hidden overflow-hidden w-full relative py-4">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>
              
              <div className="animate-marquee-ltr flex gap-4">
                {[...galleryImages, ...galleryImages].map((imgUrl: any, idx: number) => (
                  <div 
                    key={idx} 
                    className="relative w-[280px] h-[180px] rounded-xl overflow-hidden card-luxury group flex-shrink-0"
                  >
                    <div className="absolute inset-2 border border-[#E2AF55]/10 rounded-lg z-20 pointer-events-none"></div>
                    <img
                      src={resolveMediaUrl(imgUrl, "")}
                      alt={`Equipamento ${idx + 1}`}
                      className="w-full h-full object-cover mix-blend-luminosity brightness-75 group-hover:mix-blend-normal transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10 opacity-70"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grelha padrão */}
            <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((imgUrl: any, idx: number) => (
                <div 
                  key={idx} 
                  className="relative h-[260px] rounded-xl overflow-hidden card-luxury group cursor-pointer"
                >
                  <div className="absolute inset-2 border border-[#E2AF55]/10 group-hover:border-[#E2AF55]/35 rounded-lg z-20 pointer-events-none transition-all duration-500"></div>
                  <img
                    src={resolveMediaUrl(imgUrl, "")}
                    alt={`Equipamento ou Instalação ${idx + 1} de ${displayTitle}`}
                    className="w-full h-full object-cover mix-blend-luminosity brightness-75 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-770 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. PROCESSO DE TRABALHO */}
      <section className="py-20 bg-[#050505] relative overflow-hidden border-t border-[#1a1a1a]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none filter brightness-75 contrast-125"
          src="/videos/hero-video.mp4"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black/65 to-[#050505] pointer-events-none"></div>
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide uppercase mb-3">
              {t.serviceDetail.processTitle}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {t.serviceDetail.processDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayWorkSteps.map((step, idx) => (
              <div
                key={idx}
                className="card-luxury p-5 rounded-xl flex flex-col justify-between relative group"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display text-2xl font-extrabold text-[#E2AF55]/20 group-hover:text-[#E2AF55]/45 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#E2AF55]"></div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xs uppercase text-white tracking-wider mb-2 group-hover:text-[#E2AF55] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#D9D9D9] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CHAMADA FINAL PARA ORÇAMENTO */}
      <section id="contacto-direto" className="py-28 bg-[#0a0a0a] relative overflow-hidden border-t border-[#1a1a1a]">
        {/* Background Photo */}
        <img
          src={`${import.meta.env.BASE_URL}images/cctv-camera.png`}
          alt="CCTV Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-75 contrast-[1.1] pointer-events-none"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black pointer-events-none"></div>
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-4 uppercase text-3d-gold">
            {t.serviceDetail.finalCtaTitle}
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto mb-10 font-semibold drop-shadow-md">
            {t.serviceDetail.finalCtaDesc}
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                // Navigate to home and then focus the contact form
                onNavigate("/#contacto");
                // Wait slightly for route transition then scroll
                setTimeout(() => {
                  const element = document.getElementById("contacto");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="px-8 py-4 btn-gold-premium text-black font-bold uppercase tracking-widest text-xs rounded cursor-pointer"
            >
              {t.serviceDetail.finalCtaBtn}
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
