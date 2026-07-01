import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, ChevronDown } from "lucide-react";

interface ChatBotProps {
  lang: "pt" | "en" | "fr";
}

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

// ─── FAQ Knowledge Base (Friendly Conversational Tone & WhatsApp Links) ────────
const FAQ: Record<"pt" | "en" | "fr", { triggers: string[]; answer: string }[]> = {
  pt: [
    {
      triggers: ["ola", "olá", "bom dia", "boa tarde", "boa noite", "hello", "oi", "oi!"],
      answer: "Olá! Tudo bem? 😊 Sou a assistente virtual da **Cotton Dome LDA**.\n\nEstou aqui para ajudar com qualquer dúvida sobre os nossos sistemas de segurança (CCTV, Alarmes, Acessos), orçamentos ou suporte técnico. Como posso tornar o seu dia mais seguro hoje?"
    },
    {
      triggers: ["cctv", "camera", "câmera", "câmara", "videovigilância", "vigilancia", "vigilância"],
      answer: "📷 Os nossos sistemas de **CCTV e Videovigilância** incluem câmaras IP e analógicas de alta definição com IA integrada para deteção inteligente de pessoas e veículos. Pode monitorizar tudo em tempo real diretamente no seu telemóvel via app!\n\nQuer receber um estudo gratuito para o seu espaço? Fale diretamente connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788) ou pergunte-me mais detalhes!"
    },
    {
      triggers: ["alarme", "intrusao", "intrusão", "sensor", "sirene", "intruso"],
      answer: "🚨 Os nossos **Sistemas de Alarme e Intrusão** protegem o seu espaço com sensores de movimento avançados, sensores magnéticos, sirenes de alto impacto e centrais conectadas por GSM/Wi-Fi. Receba alertas imediatos no seu telemóvel sempre que algo acontecer!\n\nQuer proteger a sua casa ou empresa? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["acesso", "acessos", "biometria", "facial", "rfid", "cartao", "cartão", "torniquete", "catraca", "fechadura"],
      answer: "🔐 O nosso serviço de **Controlo de Acessos** cobre desde fechaduras eletrónicas inteligentes até reconhecimento facial, biometria, cartões RFID e torniquetes. Ideal para empresas, condomínios e moradias que procuram segurança máxima.\n\nQuer saber qual a melhor opção para si? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["incendio", "incêndio", "fogo", "fumo", "detetor", "detector"],
      answer: "🔥 Os nossos **Sistemas de Deteção de Incêndio** incluem detetores óticos de fumo e calor, centrais de incêndio inteligentes e sistemas de evacuação rápida, em total conformidade com as normas europeias.\n\nQuer fazer um projeto de segurança contra incêndios? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["portao", "portão", "automatismo", "automacao", "automação", "motor", "barreira"],
      answer: "🚗 Instalamos **Automatismos para Portões** de correr e batente, barreiras automáticas e sistemas de abertura remota por telemóvel. Ideal para o seu conforto e segurança ao chegar a casa!\n\nQuer automatizar o seu portão? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["rede", "redes", "wifi", "wi-fi", "cabo", "cabeamento", "switch", "router"],
      answer: "🌐 As nossas **Soluções de Redes** incluem cablagem estruturada profissional, racks, switches PoE, routers e Wi-Fi de alta performance para garantir que os seus sistemas de segurança e comunicação nunca falhem.\n\nPrecisa de melhorar a conectividade da sua empresa? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["ups", "energia", "bateria", "backup", "eletricidade", "corrente"],
      answer: "⚡ Os nossos **Sistemas UPS e Energia de Backup** garantem que câmaras, alarmes e internet continuem a funcionar mesmo durante cortes de energia. Proteção contínua 24/7!\n\nQuer garantir que a sua segurança nunca se desliga? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["telecomunicacao", "telecomunicação", "telecomunicacoes", "comunicacao", "comunicação", "intercom"],
      answer: "📡 As nossas **Soluções de Telecomunicações** e vídeo porteiros garantem uma comunicação clara e segura entre os acessos e o interior do seu edifício ou empresa.\n\nQuer modernizar a sua intercomunicação? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["preco", "preço", "custo", "valor", "orcamento", "orçamento", "quanto custa"],
      answer: "💰 Fazemos **orçamentos 100% gratuitos e personalizados** para cada cliente, já que cada projeto de segurança é único!\n\nPara receber um orçamento rápido e sem compromisso, fale connosco agora pelo [WhatsApp clicando aqui](https://wa.me/351918880788) ou preencha o formulário de contacto no final da nossa página."
    },
    {
      triggers: ["contacto", "contato", "falar", "ligar", "telefone", "whatsapp", "email"],
      answer: "📞 Pode contactar a Cotton Dome LDA de forma muito fácil:\n\n💬 **WhatsApp:** [Iniciar conversa no WhatsApp](https://wa.me/351918880788)\n📱 **Telefone:** +351 918 880 788\n📧 **Email:** suporte@domme.pt\n\n⏰ Segunda a Sexta: 09h–18h30 | Sábado (Urgências): 09h–13h\n\nComo prefere falar connosco?"
    },
    {
      triggers: ["horario", "horário", "funcionamento", "aberto", "trabalho"],
      answer: "⏰ O nosso horário de funcionamento é:\n\n🗓️ **Segunda a Sexta-feira:** 09:00h às 18:30h\n🗓️ **Sábado (Urgências):** 09:00h às 13:00h\n\nSe precisar de ajuda urgente fora deste horário, envie-nos uma mensagem pelo [WhatsApp clicando aqui](https://wa.me/351918880788)!"
    },
    {
      triggers: ["onde", "localizacao", "localização", "portugal", "sede", "morada", "endereco", "endereço"],
      answer: "📍 A Cotton Dome LDA está sediada em **Portugal**, e prestamos serviços em todo o território nacional.\n\nQuer agendar uma visita técnica gratuita ao seu espaço? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)!"
    },
    {
      triggers: ["garantia", "manutencao", "manutenção", "suporte", "assistencia", "assistência"],
      answer: "🛡️ Todos os nossos projetos incluem **garantia de instalação** e suporte pós-venda dedicado. Se precisar de assistência técnica ou manutenção preventiva, a forma mais rápida é falar connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)!"
    },
    {
      triggers: ["servico", "serviço", "servicos", "serviços", "solucao", "solução", "o que fazem", "o que fazeis"],
      answer: "🏢 Oferecemos soluções completas em:\n\n📷 CCTV e Videovigilância\n🚨 Sistemas de Alarme\n🔐 Controlo de Acessos\n🔥 Deteção de Incêndio\n🚗 Automatismos para Portões\n🌐 Redes de Comunicação\n⚡ UPS e Energia de Backup\n📡 Telecomunicações\n\nQual destas áreas gostaria de proteger hoje? Fale connosco pelo [WhatsApp clicando aqui](https://wa.me/351918880788)."
    },
    {
      triggers: ["obrigado", "obrigada", "ok", "perfeito", "ótimo", "otimo", "fixe", "muito bem"],
      answer: "😊 Fico muito feliz em ajudar! Se precisar de mais alguma coisa ou quiser avançar com o seu projeto, estou por aqui. Tenha um excelente dia com toda a segurança!"
    }
  ],
  en: [
    {
      triggers: ["hello", "hi", "hey", "good morning", "good afternoon"],
      answer: "Hello! 😊 I'm the **Cotton Dome LDA** virtual assistant.\n\nI'm here to help you with any questions about our security systems (CCTV, Alarms, Access Control), quotes or technical support. How can I help make your day safer today?"
    },
    {
      triggers: ["cctv", "camera", "video", "surveillance", "monitoring"],
      answer: "📷 Our **CCTV & Video Surveillance** systems feature high-definition IP and analog cameras with built-in AI for smart detection of people and vehicles. You can monitor everything in real time from your mobile phone!\n\nWould you like a free security study for your property? Chat with us directly on [WhatsApp by clicking here](https://wa.me/351918880788)!"
    },
    {
      triggers: ["alarm", "intrusion", "sensor", "siren", "motion"],
      answer: "🚨 Our **Alarm & Intrusion Systems** protect your home or business with advanced motion sensors, magnetic contacts, loud sirens, and GSM/Wi-Fi connected panels. Get instant alerts on your phone!\n\nWant to protect your space? Chat with us on [WhatsApp by clicking here](https://wa.me/351918880788)."
    },
    {
      triggers: ["access", "biometric", "facial", "rfid", "card", "turnstile", "lock"],
      answer: "🔐 Our **Access Control** services range from smart electronic locks to facial recognition, biometrics, RFID cards, and turnstiles. Ideal for businesses and residential communities.\n\nWant to find the best option for you? Contact us on [WhatsApp by clicking here](https://wa.me/351918880788)."
    },
    {
      triggers: ["fire", "smoke", "detection", "detector"],
      answer: "🔥 Our **Fire Detection Systems** include smart optical smoke and heat detectors, alarm panels, and evacuation systems, fully compliant with European safety standards.\n\nNeed a fire safety plan? Contact us on [WhatsApp by clicking here](https://wa.me/351918880788)."
    },
    {
      triggers: ["gate", "automation", "motor", "barrier", "automatic"],
      answer: "🚗 We install high-quality **Gate Automation** for sliding and swing gates, automatic barriers, and smart remote opening systems via mobile app.\n\nWant to automate your gate? Get in touch on [WhatsApp by clicking here](https://wa.me/351918880788)."
    },
    {
      triggers: ["network", "wifi", "cable", "cabling", "switch", "router"],
      answer: "🌐 Our **Network Solutions** include professional structured cabling, server racks, PoE switches, routers, and high-performance Wi-Fi to ensure your security and communication systems never fail.\n\nNeed to upgrade your network? Contact us on [WhatsApp by clicking here](https://wa.me/351918880788)."
    },
    {
      triggers: ["ups", "energy", "battery", "backup", "power"],
      answer: "⚡ Our **UPS & Backup Power Systems** keep your cameras, alarms, and networks running smoothly even during power cuts. 24/7 continuous protection!\n\nWant to ensure your security never goes offline? Contact us on [WhatsApp by clicking here](https://wa.me/351918880788)."
    },
    {
      triggers: ["price", "cost", "quote", "budget", "how much"],
      answer: "💰 We offer **100% free personalized quotes** tailored specifically to your project and security needs.\n\nTo get a quick estimate, message us directly on [WhatsApp by clicking here](https://wa.me/351918880788) or fill out the contact form below!"
    },
    {
      triggers: ["contact", "phone", "whatsapp", "email", "call"],
      answer: "📞 You can easily get in touch with us:\n\n💬 **WhatsApp:** [Message us on WhatsApp](https://wa.me/351918880788)\n📱 **Phone:** +351 918 880 788\n📧 **Email:** suporte@domme.pt\n\n⏰ Mon–Fri: 9:00 AM – 6:30 PM | Saturday (Emergencies): 9:00 AM – 1:00 PM\n\nLooking forward to hearing from you!"
    },
    {
      triggers: ["thank", "thanks", "ok", "great", "perfect", "good"],
      answer: "😊 Happy to help! If you have any other questions or want to start your project, I'm here. Have a safe and wonderful day!"
    },
    {
      triggers: ["service", "services", "what do you do", "solutions"],
      answer: "🏢 Cotton Dome LDA offers complete solutions in:\n\n📷 CCTV & Video Surveillance\n🚨 Alarm Systems\n🔐 Access Control\n🔥 Fire Detection\n🚗 Gate Automation\n🌐 Networks & Wi-Fi\n⚡ UPS & Power Backup\n📡 Telecommunications\n\nWhich service interests you? Contact us on [WhatsApp by clicking here](https://wa.me/351918880788)."
    }
  ],
  fr: [
    {
      triggers: ["bonjour", "bonsoir", "salut", "hello", "bonne journee"],
      answer: "Bonjour! 😊 Je suis l'assistant virtuel de **Cotton Dome LDA**.\n\nJe suis là pour vous aider avec toutes vos questions sur nos systèmes de sécurité (CCTV, Alarmes, Contrôle d'accès), devis ou support technique. Comment puis-je vous aider aujourd'hui?"
    },
    {
      triggers: ["cctv", "camera", "vidéo", "surveillance", "monitoring"],
      answer: "📷 Nos systèmes de **CCTV et Vidéosurveillance** comprennent des caméras IP et analogiques HD avec IA intégrée pour la détection intelligente des personnes et des véhicules. Surveillez tout en temps réel sur votre mobile!\n\nSouhaitez-vous une étude de sécurité gratuite? Contactez-nous directement sur [WhatsApp en cliquant ici](https://wa.me/351918880788)!"
    },
    {
      triggers: ["alarme", "intrusion", "capteur", "sirène", "mouvement"],
      answer: "🚨 Nos **Systèmes d'Alarme et d'Intrusion** protègent votre maison ou entreprise avec des détecteurs de mouvement avancés, contacts magnétiques, sirènes puissantes et centrales connectées GSM/Wi-Fi.\n\nPour sécuriser votre espace, contactez-nous sur [WhatsApp en cliquant ici](https://wa.me/351918880788)."
    },
    {
      triggers: ["accès", "acces", "biométrie", "facial", "rfid", "carte", "badge", "tourniquet", "serrure"],
      answer: "🔐 Notre service de **Contrôle d'Accès** va des serrures électroniques au reconnaissance faciale, biométrie, cartes RFID et tourniquets. Idéal pour les entreprises et les copropriétés.\n\nTrouvez la meilleure solution sur [WhatsApp en cliquant ici](https://wa.me/351918880788)."
    },
    {
      triggers: ["incendie", "fumée", "feu", "détecteur", "detecteur"],
      answer: "🔥 Nos **Systèmes de Détection Incendie** comprennent des détecteurs de fumée et de chaleur, des centrales d'alarme et des systèmes d'évacuation conformes aux normes de sécurité européennes.\n\nBesoin d'un projet incendie? Contactez-nous sur [WhatsApp en cliquant ici](https://wa.me/351918880788)."
    },
    {
      triggers: ["portail", "barrière", "automatisme", "moteur", "automatique"],
      answer: "🚗 Nous installons des **Automatismes de Portail** coulissants et battants, barrières automatiques et systèmes d'ouverture à distance via smartphone.\n\nAutomatisez votre portail en nous contactant sur [WhatsApp en cliquant ici](https://wa.me/351918880788)."
    },
    {
      triggers: ["prix", "coût", "devis", "tarif", "combien"],
      answer: "💰 Nous proposons des **devis 100% gratuits et personnalisés** adaptés à chaque projet de sécurité.\n\nPour obtenir un devis rapide, contactez-nous sur [WhatsApp en cliquant ici](https://wa.me/351918880788)!"
    },
    {
      triggers: ["contact", "téléphone", "whatsapp", "email", "appeler"],
      answer: "📞 Contactez facilement Cotton Dome LDA:\n\n💬 **WhatsApp:** [Envoyer un message WhatsApp](https://wa.me/351918880788)\n📱 **Téléphone:** +351 918 880 788\n📧 **Email:** suporte@domme.pt\n\n⏰ Lun–Ven: 9h–18h30 | Samedi (Urgences): 9h–13h\n\nÀ votre écoute!"
    },
    {
      triggers: ["merci", "ok", "parfait", "super", "bien"],
      answer: "😊 Ravi de vous aider! Si vous avez d'autres questions ou souhaitez lancer votre projet, je suis là. Passez une excellente journée en toute sécurité!"
    },
    {
      triggers: ["service", "services", "que faites", "solutions"],
      answer: "🏢 Cotton Dome LDA propose des solutions complètes en:\n\n📷 CCTV & Vidéosurveillance\n🚨 Systèmes d'Alarme\n🔐 Contrôle d'Accès\n🔥 Détection Incendie\n🚗 Automatismes\n🌐 Réseaux & Wi-Fi\n⚡ UPS & Alimentation de Secours\n📡 Télécommunications\n\nQuel service vous intéresse? Contactez-nous sur [WhatsApp en cliquant ici](https://wa.me/351918880788)."
    }
  ]
};

const GREETINGS: Record<"pt" | "en" | "fr", string> = {
  pt: "Olá! Tudo bem? 😊 Sou a assistente virtual da **Cotton Dome LDA**.\n\nEstou aqui para responder às suas dúvidas sobre segurança, alarmes, CCTV e automatismos. Como o posso ajudar hoje?",
  en: "Hello! 😊 I'm the **Cotton Dome LDA** virtual assistant.\n\nI can help you with information about our security systems, alarm setups, and quotes. How can I help you today?",
  fr: "Bonjour! 😊 Je suis l'assistant virtuel de **Cotton Dome LDA**.\n\nJe suis à votre disposition pour toute information sur nos solutions de sécurité et devis. Comment puis-je vous aider aujourd'hui?"
};

const DEFAULT_ANSWERS: Record<"pt" | "en" | "fr", string> = {
  pt: "Peço desculpa, não compreendi totalmente a sua questão. Posso ajudar com informações sobre os nossos serviços (CCTV, Alarmes, Acessos, Incêndio, Automatismos, Redes, UPS) ou se preferir, pode falar diretamente connosco através do [WhatsApp clicando aqui](https://wa.me/351918880788).",
  en: "Sorry, I didn't quite understand your question. I can help with information about our services (CCTV, Alarms, Access, Fire, Automation, Networks, UPS) or if you prefer, you can talk to us directly on [WhatsApp by clicking here](https://wa.me/351918880788).",
  fr: "Désolé, je n'ai pas bien compris votre question. Je peux vous aider avec des informations sur nos services (CCTV, Alarmes, Accès, Incendie, Automatismes, Réseaux, UPS) ou vous pouvez nous contacter directement sur [WhatsApp en cliquant ici](https://wa.me/351918880788)."
};

const PLACEHOLDER: Record<"pt" | "en" | "fr", string> = {
  pt: "Escreva a sua mensagem...",
  en: "Write your message...",
  fr: "Écrivez votre message..."
};

const TITLE: Record<"pt" | "en" | "fr", string> = {
  pt: "Assistente Cotton Dome",
  en: "Cotton Dome Assistant",
  fr: "Assistant Cotton Dome"
};

const ONLINE: Record<"pt" | "en" | "fr", string> = {
  pt: "Online · Resposta imediata",
  en: "Online · Instant reply",
  fr: "En ligne · Réponse immédiate"
};

// ─── Bot Logic ────────────────────────────────────────────────────────────────
function getBotAnswer(input: string, lang: "pt" | "en" | "fr"): string {
  const normalized = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();

  const faqs = FAQ[lang];
  for (const faq of faqs) {
    if (faq.triggers.some((trigger) => normalized.includes(trigger.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) {
      return faq.answer;
    }
  }
  return DEFAULT_ANSWERS[lang];
}

// ─── Render Markdown-like text (Supporting Bold and Clickable Markdown Links) ──
function renderText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    return (
      <span key={i}>
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className="font-bold text-[#E2AF55]">
                {part.slice(2, -2)}
              </strong>
            );
          }
          if (part.startsWith("[") && part.includes("](")) {
            const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
            if (match) {
              const [_, label, url] = match;
              return (
                <a
                  key={j}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#E2AF55] hover:text-[#C28D35] underline font-semibold transition-colors"
                >
                  {label}
                </a>
              );
            }
          }
          return <span key={j}>{part}</span>;
        })}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

// ─── Component ───────────────────────────────────────────────────────────────
export function ChatBot({ lang }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageIdRef = useRef(1);

  // Greeting message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: messageIdRef.current++,
          from: "bot",
          text: GREETINGS[lang]
        }
      ]);
    }
  }, [isOpen]);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when open
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: messageIdRef.current++, from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = getBotAnswer(trimmed, lang);
      setMessages((prev) => [...prev, { id: messageIdRef.current++, from: "bot", text: answer }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <div className="fixed bottom-[5.5rem] right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir chat de suporte / Open support chat"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C28D35] to-[#A07020] shadow-[0_4px_20px_rgba(194,141,53,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
        >
          {/* Ping animation when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#C28D35] opacity-25 animate-ping" />
          )}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" className="w-full h-full flex items-center justify-center" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <img src="/images/agent-avatar.png" alt="Suporte" className="w-full h-full object-cover rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
          {/* Unread badge */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505] flex items-center justify-center z-10">
              <span className="text-[8px] text-white font-bold">1</span>
            </span>
          )}
        </button>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-[7.5rem] right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.8)] border border-[#2a2a2a] flex flex-col"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#111111] to-[#1a1a1a] border-b border-[#2a2a2a] px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#C28D35] to-[#8A6020] flex items-center justify-center flex-shrink-0">
                  <img src="/images/agent-avatar.png" alt="Suporte" className="w-full h-full object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#111111]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none mb-0.5">{TITLE[lang]}</p>
                  <p className="text-emerald-400 text-[10px] font-mono">{ONLINE[lang]}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#888] hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/5">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-[#0a0a0a] px-4 py-4 flex flex-col gap-3" style={{ minHeight: 0 }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C28D35] to-[#8A6020] flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                      <img src="/images/agent-avatar.png" alt="Suporte" className="w-full h-full object-cover rounded-full" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.from === "user"
                        ? "bg-gradient-to-br from-[#C28D35] to-[#A07020] text-white rounded-tr-sm"
                        : "bg-[#181818] text-[#E0E0E0] border border-[#282828] rounded-tl-sm"
                    }`}
                  >
                    {renderText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C28D35] to-[#8A6020] flex items-center justify-center flex-shrink-0">
                    <img src="/images/agent-avatar.png" alt="Suporte" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div className="bg-[#181818] border border-[#282828] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#C28D35] opacity-80 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="bg-[#111111] border-t border-[#2a2a2a] px-3 py-3 flex items-center gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={PLACEHOLDER[lang]}
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#C28D35] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#555] outline-none transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C28D35] to-[#A07020] flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
