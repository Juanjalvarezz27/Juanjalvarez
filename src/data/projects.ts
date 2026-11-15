// Modelo de datos extendido para proyectos del portafolio
export interface Project {
  id: string;
  slug: string;
  name: string;
  category: 'sistemas' | 'webs';
  oneLiner: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  image: string;
  images: string[];
  url?: string;
  year: string;
  featured: boolean;
  benefits?: string[];
  isMobileFormat?: boolean;
}

// Datos base y traducciones completas en español e inglés
export const PROJECTS_DATA: Record<string, {
  slug: string;
  category: 'sistemas' | 'webs';
  year: string;
  featured: boolean;
  stack: string[];
  image: string;
  images: string[];
  url?: string;
  isMobileFormat?: boolean;
  es: {
    name: string;
    oneLiner: string;
    problem: string;
    solution: string;
    result: string;
    benefits?: string[];
  };
  en: {
    name: string;
    oneLiner: string;
    problem: string;
    solution: string;
    result: string;
    benefits?: string[];
  };
}> = {
  leyma: {
    slug: 'leyma',
    category: 'sistemas',
    year: '2024',
    featured: true,
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Auth'],
    image: '/Leyma1.png',
    images: ['/Leyma1.png', '/Leyma2.png'],
    url: '',
    es: {
      name: 'LEYMA',
      oneLiner: 'Sistema de gestión integral y seguro para el control de pacientes, exámenes y resultados clínicos bacteriológicos.',
      problem: 'La gestión manual de muestras y expedientes en papel generaba demoras críticas en entregas y riesgo constante de pérdida de historial médico.',
      solution: 'Desarrollo de una plataforma web segura con control de acceso por roles, trazabilidad total de muestras e informes de laboratorio generados en segundos.',
      result: '',
      benefits: ['Control de pacientes', 'Resultados clínicos', 'Gestión de exámenes', 'Acceso seguro']
    },
    en: {
      name: 'LEYMA',
      oneLiner: 'Comprehensive and secure clinical lab management system for bacteriological testing and patient workflows.',
      problem: 'Manual handling of paper patient records and test samples caused critical delivery delays and risk of lost medical history.',
      solution: 'Built a secure web platform featuring role-based access control, full sample traceability, and automated lab report generation.',
      result: '',
      benefits: ['Patient records', 'Clinical results', 'Test management', 'Secure access']
    }
  },
  sigeve: {
    slug: 'sigeve',
    category: 'sistemas',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'BCV API', 'Tailwind'],
    image: '/Sigeve 1.png',
    images: ['/Sigeve 1.png', '/Sigeve 2.png'],
    url: '',
    es: {
      name: 'SIGEVE',
      oneLiner: 'Control absoluto de stock físico y ventas comerciales con conversión automática de tasas oficiales en tiempo real.',
      problem: 'Descuadres sistemáticos en inventario físico y pérdidas de margen operativo por actualizar tasas cambiarias de forma manual y tardía.',
      solution: 'Sistema de punto de venta y stock multialmacén integrado a la API oficial del BCV con actualización automática y auditoría de caja diaria.',
      result: '',
      benefits: ['Control de stock físico', 'Ventas y estadísticas', 'Tasas BCV automáticas', 'Reportes de flujo de caja']
    },
    en: {
      name: 'SIGEVE',
      oneLiner: 'Full physical stock and commercial sales control with real-time official currency conversion.',
      problem: 'Recurring physical inventory discrepancies and profit margin loss caused by delayed manual currency rate updates.',
      solution: 'POS and multi-warehouse inventory system synced with official currency APIs, automated rate adjustments, and daily cash audits.',
      result: '',
      benefits: ['Physical stock control', 'Sales and metrics', 'Automated currency rates', 'Cash flow reports']
    }
  },
  silav: {
    slug: 'silav',
    category: 'sistemas',
    year: '2024',
    featured: false,
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    image: '/Silav 1.png',
    images: ['/Silav 1.png', '/Silav 2.png'],
    url: '',
    es: {
      name: 'SILAV',
      oneLiner: 'Digitalización operativa automotriz con fidelización de clientes recurrentes y billetera virtual prepagada.',
      problem: 'Falta de registro sobre el flujo real de vehículos atendidos al día y ausencia de mecanismos para retener a clientes habituales.',
      solution: 'Plataforma administrativa de pista con monedero digital recargable, asignación dinámica de servicios y monitoreo de cobros en tiempo real.',
      result: '',
      benefits: ['Monedero digital', 'Gestión de servicios y precios', 'Registro de clientes y vehículos', 'Control de pagos diarios']
    },
    en: {
      name: 'SILAV',
      oneLiner: 'Automotive operational hub featuring customer loyalty workflows and digital prepaid wallet.',
      problem: 'No visibility over actual daily vehicle service volume and total lack of customer retention systems.',
      solution: 'Service lane management platform with customer digital wallet, dynamic service queues, and real-time payment reconciliation.',
      result: '',
      benefits: ['Digital wallet', 'Service & pricing catalog', 'Customer & vehicle log', 'Daily payment tracking']
    }
  },
  rubens: {
    slug: 'rubens',
    category: 'sistemas',
    year: '2023',
    featured: false,
    stack: ['React', 'Node.js', 'WebSockets', 'POS Engine'],
    image: '/IMG_7394.jpeg',
    images: ['/IMG_7394.jpeg', '/IMG_7395.jpeg'],
    url: '',
    es: {
      name: "RUBEN'S",
      oneLiner: 'Punto de venta gastronómico de alta rotación con sincronización instantánea de comandas en cocina.',
      problem: 'Pérdida de comandas en papel durante horas pico, demoras en despacho y descuadres constantes en el cuadre nocturno de caja.',
      solution: 'Terminal de venta ultrarrápido con sistema de visualización de cocina (KDS) en tiempo real mediante WebSockets y gestión flexible de tasa cambiaria.',
      result: '',
      benefits: ['Vista de ordenes para cocina', 'Gestión de caja y cierres', 'Tasa BCV configurable', 'Estadísticas de ventas diarias']
    },
    en: {
      name: "RUBEN'S",
      oneLiner: 'High-turnover culinary point of sale with real-time kitchen display synchronization.',
      problem: 'Lost kitchen tickets during rush hours, delayed meal preparation, and recurring discrepancies during register closeout.',
      solution: 'High-speed POS engine featuring real-time kitchen display (KDS) powered by WebSockets and multi-currency billing.',
      result: '',
      benefits: ['Kitchen order display', 'Register & closeouts', 'Flexible exchange rates', 'Daily sales statistics']
    }
  },
  domenico: {
    slug: 'domenico',
    category: 'webs',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    image: '/Domenico.jpg',
    images: ['/Domenico.jpg', '/Domenico2.jpg'],
    url: 'https://domenico-dorazio.vercel.app/',
    isMobileFormat: true,
    es: {
      name: "DOMENICO D'ORAZIO",
      oneLiner: 'Landing page editorial de lujo para posicionamiento de marca personal y captación de clientes de alto perfil.',
      problem: 'Presencia digital inexistente para respaldar una reputación profesional consolidada, dependiendo exclusivamente de redes sociales efímeras.',
      solution: 'Sitio web cinematográfico de carga sub-segundo con microinteracciones de alta fidelidad y canal directo de contratación para eventos exclusivos.',
      result: '',
      benefits: ['Optimización de conversión', 'Diseño responsive de lujo', 'Carga ultra rápida']
    },
    en: {
      name: "DOMENICO D'ORAZIO",
      oneLiner: 'Luxury editorial landing page for personal brand authority and high-profile client acquisition.',
      problem: 'Lack of an authoritative web presence to match a strong reputation, relying solely on volatile social media channels.',
      solution: 'Cinematic sub-second portfolio website with fluid micro-interactions and high-converting VIP booking pathways.',
      result: '',
      benefits: ['Conversion optimization', 'Luxury responsive styling', 'Sub-second loading speed']
    }
  },
  rizzo: {
    slug: 'rizzo',
    category: 'webs',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
    image: '/rizzo1.jpg',
    images: ['/rizzo1.jpg', '/rizzo2.jpg'],
    url: 'https://catalogo-rizzo.vercel.app/',
    isMobileFormat: true,
    es: {
      name: 'LICORERÍA RIZZO',
      oneLiner: 'Catálogo digital mayorista B2B con búsqueda ultrarrápida y checkout directo a WhatsApp.',
      problem: 'Atención saturada por clientes que solicitaban listas de precios en PDF desactualizadas para pedidos al por mayor.',
      solution: 'Catálogo web interactivo con filtrado por categoría en menos de 100ms y carrito de compra con pedido formateado enviado a WhatsApp en un clic.',
      result: '',
      benefits: ['Catálogo con filtrado rápido', 'Cero fricción de compra', 'Integración WhatsApp']
    },
    en: {
      name: 'LICORERÍA RIZZO',
      oneLiner: 'B2B wholesale digital catalog with ultra-fast search and one-click WhatsApp checkout.',
      problem: 'Customer service bottlenecked by requests for outdated PDF price sheets for wholesale orders.',
      solution: 'Interactive web catalog featuring sub-100ms category filtering and an instant WhatsApp cart checkout pipeline.',
      result: '',
      benefits: ['Fast category filtering', 'Zero friction checkout', 'Direct WhatsApp cart']
    }
  },
  juangraterol: {
    slug: 'juangraterol',
    category: 'webs',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'Tailwind CSS', 'High Performance UI'],
    image: '/juangraterol1.jpg',
    images: ['/juangraterol1.jpg', '/juangraterol2.jpg'],
    url: 'https://juangraterol.vercel.app/',
    isMobileFormat: true,
    es: {
      name: 'JUAN GRATEROL',
      oneLiner: 'Media kit interactivo de alto impacto visual para creador fitness y alianzas con marcas comerciales.',
      problem: 'Falta de un instrumento profesional interactivo para sustentar métricas de audiencia ante marcas patrocinadoras internacionales.',
      solution: 'Plataforma web dinámica que exhibe portafolio UGC, demografía de audiencia y casos de patrocinio con acceso directo a contacto comercial.',
      result: '',
      benefits: ['Media kit interactivo', 'Diseño inmersivo', 'Contacto directo con sponsors']
    },
    en: {
      name: 'JUAN GRATEROL',
      oneLiner: 'High-impact interactive digital media kit for fitness athlete and commercial brand sponsorships.',
      problem: 'Absence of an authoritative interactive presentation to showcase audience statistics to global brand sponsors.',
      solution: 'Dynamic showcase platform highlighting UGC collaborations, follower demographics, and direct commercial booking.',
      result: '',
      benefits: ['Interactive media kit', 'Immersive UI', 'Direct brand sponsor booking']
    }
  },
  metarun: {
    slug: 'metarun',
    category: 'sistemas',
    year: '2023',
    featured: false,
    stack: ['Next.js', 'PostgreSQL', 'Payment Verification'],
    image: '/Formulario.png',
    images: ['/Formulario.png', '/Laptop.png'],
    url: '',
    es: {
      name: 'META RUN',
      oneLiner: 'Motor de registro masivo y conciliación de pagos en línea para maratones de atletismo.',
      problem: 'Colapso de formularios tradicionales y horas de verificación manual de transferencias bancarias durante apertura de inscripciones.',
      solution: 'Arquitectura de alta concurrencia con validación automática de comprobantes y confirmación de cupo inmediata para participantes.',
      result: '',
      benefits: ['Gestión masiva', 'Validación real']
    },
    en: {
      name: 'META RUN',
      oneLiner: 'High-concurrency registration and automated payment reconciliation engine for competitive marathons.',
      problem: 'Crashing forms and labor-intensive manual bank transfer verification during high-demand registration openings.',
      solution: 'Scalable cloud registration pipeline with automated receipt validation and instant runner slot confirmation.',
      result: '',
      benefits: ['High-concurrency scaling', 'Live verification']
    }
  },
  dorsales: {
    slug: 'dorsales',
    category: 'sistemas',
    year: '2023',
    featured: false,
    stack: ['QR Scanner', 'Real-time Sync', 'Logistics Engine'],
    image: '/Dorsales.jpg',
    images: ['/Dorsales.jpg', '/Phone.png'],
    url: '',
    es: {
      name: 'DORSALES',
      oneLiner: 'Logística móvil con validación de código QR para entrega express de números de competencia sin filas.',
      problem: 'Aglomeraciones de cientos de corredores en puntos de entrega por verificación lenta en planillas impresas.',
      solution: 'Sistema de acreditación móvil con lectura QR desde smartphone, verificación en base de datos en menos de 1 segundo y prevención de duplicidad.',
      result: '',
      benefits: ['Cero colas', 'Control total']
    },
    en: {
      name: 'DORSALES',
      oneLiner: 'Mobile QR-scanning logistics suite for zero-queue athletic race bib fulfillment.',
      problem: 'Massive bottlenecks at athlete check-in stations caused by slow manual checkoffs on printed paper lists.',
      solution: 'Mobile scanning suite capable of sub-second QR bib validation, instant database reconciliation, and duplicate check prevention.',
      result: '',
      benefits: ['Zero queues', 'Full operational control']
    }
  }
};

// Obtiene la lista completa de proyectos traducidos según el idioma
export function getProjects(lang: 'es' | 'en' = 'es'): Project[] {
  return Object.entries(PROJECTS_DATA).map(([id, item]) => {
    const loc = item[lang] || item.es;
    return {
      id,
      slug: item.slug,
      name: loc.name,
      category: item.category,
      oneLiner: loc.oneLiner,
      problem: loc.problem,
      solution: loc.solution,
      result: loc.result,
      stack: item.stack,
      image: item.image,
      images: item.images,
      url: item.url,
      year: item.year,
      featured: item.featured,
      benefits: loc.benefits,
      isMobileFormat: item.isMobileFormat
    };
  });
}

// Obtiene un proyecto específico por su slug
export function getProjectBySlug(slug: string, lang: 'es' | 'en' = 'es'): Project | undefined {
  const all = getProjects(lang);
  return all.find(p => p.slug === slug);
}
