import { Solution, Environment, Partner, TimelineStep, ProjectItem } from "./types";

export const CONTACT_INFO = {
  phone: "+351 918 880 788",
  whatsapp: "+351 918 880 788", // Colocar apenas números (ex: "351912345678") para o WhatsApp link funcionar corretamento quando preenchido
  email: "[Inserir E-mail]",
  address: "Portugal",
  slogan: "Soluções inteligentes para a sua segurança",
  workingHoursWeek: "Segunda a Sexta-feira: 09:00h às 18:30h",
  workingHoursSat: "Sábado (Urgências): 09:00h às 13:00h"
};

export const SOLUTIONS: Solution[] = [
  {
    id: "cctv",
    title: "CCTV / Videovigilância",
    description: "Sistemas de videovigilância para residências, empresas, condomínios e espaços comerciais, com câmaras profissionais, gravação, monitorização e acesso remoto.",
    iconName: "Camera",
    features: [
      "Câmaras IP de alta definição (4K/Ultra HD)",
      "Visão noturna avançada colorida (ColorVu/Full-color)",
      "Inteligência Artificial (Reconhecimento de veículos/humanos)",
      "Visualização remota em tempo real via smartphone",
      "Sistemas NVR de alta fiabilidade e armazenamento seguro"
    ]
  },
  {
    id: "intrusao",
    title: "Intrusão / Sistemas de Alarme",
    description: "Soluções de alarme contra intrusão com sensores, centrais, sirenes e tecnologia integrada para proteger pessoas e património.",
    iconName: "ShieldAlert",
    features: [
      "Centrais de alarme híbridas e 100% sem fios",
      "Detetores de movimento com dupla tecnologia e imunes a animais",
      "Contactos magnéticos para portas e janelas",
      "Sirenes de alta potência interiores e exteriores com flash",
      "Integração imediata com aplicações móveis e central de monitorização"
    ]
  },
  {
    id: "acessos",
    title: "Controlo de Acessos",
    description: "Sistemas para gestão de entradas e saídas, incluindo teclados, cartões, biometria, reconhecimento, leitores e permissões personalizadas.",
    iconName: "Fingerprint",
    features: [
      "Leitores biométricos e reconhecimento facial ultra rápido",
      "Teclados numéricos táteis e leitores de cartões/tags RFID",
      "Fechaduras eletrónicas e eletroímanes de alta segurança",
      "Gestão de utilizadores com horários e níveis de permissão",
      "Torniquetes e barreiras integradas para controlo pedonal"
    ]
  },
  {
    id: "incendio",
    title: "Deteção de Incêndio",
    description: "Sistemas de deteção e alerta de incêndio com centrais, sensores, botões manuais, sirenes e soluções adequadas para ambientes profissionais.",
    iconName: "Flame",
    features: [
      "Centrais de deteção analógicas endereçáveis e convencionais",
      "Detetores óticos de fumo e térmicos certificados",
      "Botões de alarme manual de alta visibilidade",
      "Sirenes de aviso acústico e sinalizadores óticos",
      "Integração com sistemas de desenfumagem e corte de gás"
    ]
  },
  {
    id: "automatismos",
    title: "Automatismos",
    description: "Automação de portões, barreiras, portas e acessos, com soluções modernas para conforto, segurança e eficiência.",
    iconName: "Cpu",
    features: [
      "Motores para portões de correr e de bater residenciais ou industriais",
      "Barreiras automáticas de alta velocidade para parques de estacionamento",
      "Portas de vidro automáticas para superfícies comerciais",
      "Comandos remotos de alta segurança com código evolutivo (Rolling Code)",
      "Fotocélulas e sensores de segurança perimetral integrados"
    ]
  },
  {
    id: "portas-portoes",
    title: "Portas de Segurança e Portões Seccionados",
    description: "Fornecimento e instalação de portas de segurança, portões seccionados e soluções resistentes para acessos residenciais, comerciais e industriais.",
    iconName: "DoorClosed",
    features: [
      "Portas blindadas acústicas e térmicas de alta segurança",
      "Portões seccionados térmicos de design moderno com painel duplo",
      "Fechaduras multiponto de segurança máxima",
      "Portas de emergência e barras antipânico certificadas",
      "Acabamentos premium e lacagem em diversas cores"
    ]
  },
  {
    id: "ups",
    title: "UPS / Sistemas de Energia",
    description: "Sistemas de alimentação ininterrupta para proteger equipamentos críticos contra falhas, oscilações e interrupções elétricas.",
    iconName: "BatteryCharging",
    features: [
      "UPS profissionais de tecnologia Online Dupla Conversão",
      "Proteção total para CCTV, servidores e centrais de alarme",
      "Baterias de alta capacidade para autonomia prolongada",
      "Supressores de picos de tensão e filtros de ruído de rede",
      "Monitorização e alertas de estado do sistema de energia"
    ]
  },
  {
    id: "serralharia",
    title: "Serralharia em Ferro e Inox",
    description: "Soluções técnicas em ferro e inox, incluindo estruturas, portões, grades, acabamentos metálicos e projetos personalizados.",
    iconName: "Hammer",
    features: [
      "Fabricação e montagem de portões metálicos à medida",
      "Grades de proteção e segurança para janelas e montras",
      "Acabamentos nobres em aço inoxidável e ferro galvanizado",
      "Estruturas metálicas de suporte e reforço técnico",
      "Soldadura profissional e tratamento anticorrosão de alta durabilidade"
    ]
  },
  {
    id: "telecomunicacoes",
    title: "Telecomunicações",
    description: "Infraestrutura técnica para comunicação, integração de sistemas e suporte a soluções modernas de segurança e conectividade.",
    iconName: "Radio",
    features: [
      "Sistemas de intercomunicação e videoporteiros IP inteligentes",
      "Passagem técnica de cabos coaxiais e de par entrançado",
      "Sistemas de som profissional e sonorização de espaços",
      "Integração de comunicação para centrais de alarme",
      "Antenas e sistemas de receção e distribuição de sinal"
    ]
  },
  {
    id: "redes",
    title: "Redes / Network Solutions",
    description: "Soluções de rede, cabeamento estruturado, racks, switches, Wi-Fi profissional e infraestrutura para sistemas de segurança.",
    iconName: "Network",
    features: [
      "Cabeamento estruturado em Categoria 6 e Fibra Ótica",
      "Montagem, organização e certificação de Racks e Bastidores",
      "Switches PoE profissionais para alimentação direta de câmaras IP",
      "Sistemas Wi-Fi Mesh profissionais para cobertura total estável",
      "Segurança lógica de rede (Routers, Firewalls e VLANs dedicadas)"
    ]
  }
];

export const ENVIRONMENTS: Environment[] = [
  {
    id: "residencias",
    name: "Residências",
    description: "Proteção completa para a sua habitação, aliando segurança eletrónica, automatismos inteligentes e comodidade digital no seu dia a dia.",
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "condominios",
    name: "Condomínios",
    description: "Soluções integradas de controlo de acessos, videovigilância e automatismos para parques, portarias e áreas comuns residenciais.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "empresas",
    name: "Empresas",
    description: "Sistemas de proteção de dados, segurança física dos escritórios, controlo horário dos colaboradores e segurança no acesso.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "comercio",
    name: "Comércio",
    description: "Prevenção ativa de perdas com videovigilância 4K, alarmes anti-intrusão, proteção contra incêndio e portas automáticas de vidro.",
    iconName: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "industrias",
    name: "Indústrias",
    description: "Projetos técnicos robustos para ambientes exigentes, com barreiras rápidas, deteção avançada de incêndios e controlo biométrico.",
    iconName: "Factory",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "armazens",
    name: "Armazéns",
    description: "Organização estrutural de redes de comunicações, UPS para racks, videovigilância perimetral e portões seccionados de alta durabilidade.",
    iconName: "Warehouse",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "motorline",
    name: "Motorline Professional",
    description: "Referência incontornável no desenvolvimento e fabrico de sistemas de automatização de portões, portas seccionadas, barreiras de controlo de tráfego e soluções inteligentes para controlo de acessos.",
    website: "https://www.motorline.pt",
    focus: [
      "Motores de alto rendimento para portões",
      "Barreiras automáticas e pilares retráteis",
      "Sistemas integrados de controlo de acessos"
    ]
  },
  {
    id: "visiotech",
    name: "Visiotech Security",
    description: "Líder e fornecedor internacional de referência em tecnologia de segurança eletrónica. Destaca-se pela constante inovação e fornecimento das soluções mais sofisticadas do mercado global.",
    website: "https://www.visiotechsecurity.com",
    focus: [
      "Equipamentos de CCTV e inteligência analítica",
      "Sistemas avançados de deteção de intrusão",
      "Centrais e sensores certificados de incêndio"
    ]
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: "01",
    title: "Análise Técnica",
    description: "Entendemos minuciosamente a necessidade do cliente e avaliamos o espaço físico com precisão técnica."
  },
  {
    stepNumber: "02",
    title: "Proposta Personalizada",
    description: "Indicamos as soluções de alta engenharia mais adequadas e dimensionadas ao seu orçamento."
  },
  {
    stepNumber: "03",
    title: "Instalação Profissional",
    description: "Realizamos a montagem física e calibração lógica com rigor, organização técnica e respeito estético."
  },
  {
    stepNumber: "04",
    title: "Suporte e Acompanhamento",
    description: "Prestamos assistência técnica dedicada para garantir a fiabilidade permanente das suas soluções de segurança."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "CCTV Residencial Inteligente",
    category: "cctv",
    categoryLabel: "Videovigilância",
    description: "Instalação de câmaras IP 4K com análise de vídeo e deteção inteligente de pessoas à volta de moradia premium.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p2",
    title: "Automatização de Portão Seccionado",
    category: "automatismos",
    categoryLabel: "Automatismos",
    description: "Instalação de portão seccionado térmico com motorização Motorline rápida e comandos em código evolutivo.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p3",
    title: "Controlo de Acessos Biométrico",
    category: "acessos",
    categoryLabel: "Controlo de Acessos",
    description: "Implementação de controlo de acessos com reconhecimento facial e leitores RFID para escritórios corporativos.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p4",
    title: "Bastidor de Redes e Infraestrutura",
    category: "redes",
    categoryLabel: "Redes Técnicas",
    description: "Instalação e certificação de cabeamento de rede estruturada, rack organizado e UPS de backup para segurança estável.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p5",
    title: "Deteção Ótica de Incêndio",
    category: "incendio",
    categoryLabel: "Deteção de Incêndio",
    description: "Sistema de centrais analógicas e detetores de fumo endereçáveis com isolador incorporado em pavilhão industrial.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p6",
    title: "Segurança Perimetral e Alarme Integrado",
    category: "intrusao",
    categoryLabel: "Sistemas de Alarme",
    description: "Sensores de exterior contra falsas leituras combinados com sirenes dissuasoras inteligentes conectadas por app.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
  }
];
