// Modelo de datos extendido para proyectos del portafolio
export interface BusinessBenefit {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: 'sistemas' | 'webs' | 'soluciones';
  oneLiner: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  image: string;
  images: string[];
  pdfUrl?: string;
  url?: string;
  year: string;
  featured: boolean;
  benefits?: string[];
  businessBenefits?: BusinessBenefit[];
  reasons?: string[];
  isMobileFormat?: boolean;
  isUpcoming?: boolean;
}

// Datos base y traducciones completas en español e inglés
export const PROJECTS_DATA: Record<string, {
  slug: string;
  category: 'sistemas' | 'webs' | 'soluciones';
  year: string;
  featured: boolean;
  stack: string[];
  image: string;
  images: string[];
  pdfUrl?: string;
  url?: string;
  isMobileFormat?: boolean;
  isUpcoming?: boolean;
  es: {
    name: string;
    oneLiner: string;
    problem: string;
    solution: string;
    result: string;
    benefits?: string[];
    businessBenefits?: BusinessBenefit[];
    reasons?: string[];
  };
  en: {
    name: string;
    oneLiner: string;
    problem: string;
    solution: string;
    result: string;
    benefits?: string[];
    businessBenefits?: BusinessBenefit[];
    reasons?: string[];
  };
}> = {
  // GRUPO 1: SISTEMAS
  leyma: {
    slug: 'leyma',
    category: 'sistemas',
    year: '2024',
    featured: true,
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Auth'],
    image: '/leyma/Leyma1.png',
    images: [
      '/leyma/Leyma1.png',
      '/leyma/Leyma2.png',
      '/leyma/03.png',
      '/leyma/04.png',
    ],
    pdfUrl: '/leyma/resultado.pdf',
    url: '',
    es: {
      name: 'LEYMA',
      oneLiner: 'Sistema de gestión integral y seguro para el control de pacientes, exámenes y resultados clínicos bacteriológicos.',
      problem: 'La gestión manual de muestras y expedientes en papel generaba demoras críticas en entregas y riesgo constante de pérdida de historial médico.',
      solution: 'Desarrollo de una plataforma web segura con control de acceso por roles, trazabilidad total de muestras e informes de laboratorio generados en segundos.',
      result: '',
      benefits: ['Control de pacientes', 'Resultados clínicos', 'Gestión de exámenes', 'Acceso seguro'],
      reasons: [
        'Cero muestras cruzadas: ni errores en diagnósticos médicos.',
        'Resultados a WhatsApp: oficiales y con código QR en segundos.',
        'Caja diaria blindada: sin alteraciones de cobros ni precios.',
        'Ahorro de 3+ horas: diarias de papeleo y archivo manual.',
        'Historial clínico en 1 clic: disponible desde cualquier dispositivo.',
        'Precios y tasa BCV: sincronizados al segundo sin desajustes.',
        'Cero gasto en papel: tóner ni carpetas físicas de archivo.',
        'Duplica tu atención: diaria sin contratar personal extra.',
      ],
      businessBenefits: [
        { 
          title: 'Cero errores ni muestras cruzadas', 
          desc: 'Un resultado equivocado destruye la reputación de tu laboratorio. El sistema valida rangos y bloquea confusiones de exámenes.' 
        },
        { 
          title: 'Tus pacientes reciben su resultado en segundos', 
          desc: 'Se acabaron las llamadas y las filas. Genera el PDF oficial con validación QR para enviarlo directo a su WhatsApp o correo.' 
        },
        { 
          title: 'Blindaje total de tu dinero y caja diaria', 
          desc: 'Evita fugas de cobros. Permisos estrictos por recepcionista y bacteriólogo para que nadie altere precios ni borre registros.' 
        },
        { 
          title: 'Ahorra más de 3 horas diarias de papeleo', 
          desc: 'Elimina carpetas físicas y transcripción a mano. Tu equipo atiende el doble de pacientes en la mitad del tiempo sin estrés.' 
        },
      ]
    },
    en: {
      name: 'LEYMA',
      oneLiner: 'Comprehensive and secure clinical lab management system for bacteriological testing and patient workflows.',
      problem: 'Manual handling of paper patient records and test samples caused critical delivery delays and risk of lost medical history.',
      solution: 'Built a secure web platform featuring role-based access control, full sample traceability, and automated lab report generation.',
      result: '',
      benefits: ['Patient records', 'Clinical results', 'Test management', 'Secure access'],
      reasons: [
        'Zero sample mix-ups: and no clinical diagnostic errors.',
        'Reports to WhatsApp: official QR results sent in seconds.',
        'Watertight register: locked prices and audited daily cash.',
        'Save 3+ hours daily: by eliminating paper record keeping.',
        'Instant medical history: full patient tests in one click.',
        'Live official currency: rates and pricing updated in real time.',
        'Zero paper spending: no toner, forms, or physical folders.',
        'Double patient capacity: without hiring extra clinic staff.',
      ],
      businessBenefits: [
        { 
          title: 'Zero diagnostic errors or sample mix-ups', 
          desc: 'A wrong report damages your lab reputation. The system validates reference ranges and eliminates patient confusion.' 
        },
        { 
          title: 'Patients receive reports in seconds', 
          desc: 'No more waiting lines. Generates official PDF reports with QR verification ready to dispatch via WhatsApp or email.' 
        },
        { 
          title: 'Full financial audit & register control', 
          desc: 'Track every dollar collected. Strict role permissions prevent price tampering, unauthorized edits, or unrecorded cash leaks.' 
        },
        { 
          title: 'Save 3+ hours of manual paperwork daily', 
          desc: 'Eliminates physical filing and handwriting. Your medical team handles double the patients in half the time without added overhead.' 
        },
      ]
    }
  },
  rubens: {
    slug: 'rubens',
    category: 'sistemas',
    year: '2023',
    featured: false,
    stack: ['React', 'Node.js', 'WebSockets', 'POS Engine'],
    image: '/rubens/01.png',
    images: [
      '/rubens/01.png',
      '/rubens/02.png',
      '/rubens/03.png',
      '/rubens/04.png',
    ],
    url: '',
    es: {
      name: "RUBEN'S",
      oneLiner: 'Punto de venta gastronómico de alta rotación con sincronización instantánea de comandas en cocina.',
      problem: 'Pérdida de comandas en papel durante horas pico, demoras en despacho y descuadres constantes en el cuadre nocturno de caja.',
      solution: 'Terminal de venta ultrarrápido con sistema de visualización de cocina (KDS) en tiempo real mediante WebSockets y gestión flexible de tasa cambiaria.',
      result: '',
      benefits: ['Vista de ordenes para cocina', 'Gestión de caja y cierres', 'Tasa BCV configurable', 'Estadísticas de ventas diarias'],
      reasons: [
        'Comandas a cocina: al instante vía WebSockets sin papel.',
        'Cuadre de caja exacto: sin descuadres en bolívares ni divisas.',
        'Tasa cambiaria dinámica: calculada al segundo en cada cuenta.',
        'Atención el doble de rápida: en barra y mesas en horas pico.',
        'Métricas de venta: platos estrella e insumos en tiempo real.',
        'Cero fugas: ninguna orden sale sin cobro previo en caja.',
        'Inducción en 5 minutos: para cualquier cajero o mesonero.',
        'Mayor rotación de mesas: y facturación con el mismo equipo.',
      ],
      businessBenefits: [
        { title: 'Cero comandas perdidas', desc: 'Los pedidos van de caja a la pantalla de cocina al instante vía WebSockets.' },
        { title: 'Cuadres de caja exactos', desc: 'Cierre diario automático sin descuadres de dinero en efectivo o divisas.' },
        { title: 'Tasa cambiaria dinámica', desc: 'Conversión automática en bolívares y dólares calculada al segundo.' },
        { title: 'Atención el doble de rápida', desc: 'Reduce tiempos de espera en mesas y barra durante horas pico.' },
      ]
    },
    en: {
      name: "RUBEN'S",
      oneLiner: 'High-turnover culinary point of sale with real-time kitchen display synchronization.',
      problem: 'Lost kitchen tickets during rush hours, delayed meal preparation, and recurring discrepancies during register closeout.',
      solution: 'High-speed POS engine featuring real-time kitchen display (KDS) powered by WebSockets and multi-currency billing.',
      result: '',
      benefits: ['Kitchen order display', 'Register & closeouts', 'Flexible exchange rates', 'Daily sales statistics'],
      reasons: [
        'Orders to kitchen: live WebSocket sync without paper tickets.',
        'Exact register balance: zero discrepancies in cash or currency.',
        'Dynamic currency rates: instant conversion on every bill.',
        'Twice as fast service: at tables and bar during rush hours.',
        'Sales telemetry: top dishes and ingredient stock in real time.',
        'Zero unbilled orders: meals require payment confirmation.',
        '5-minute onboarding: intuitive touchscreen workflow.',
        'Faster table turnover: higher revenue with the same staff.',
      ],
      businessBenefits: [
        { title: 'Zero lost kitchen tickets', desc: 'Orders flow from POS to kitchen display in real time via WebSockets.' },
        { title: 'Exact register balancing', desc: 'Automated daily closeouts with zero multi-currency discrepancies.' },
        { title: 'Dynamic currency rates', desc: 'Instant live conversion between local and foreign currency.' },
        { title: 'Twice as fast service', desc: 'Slashes waiting times for tables and counter during rush hours.' },
      ]
    }
  },
  sigeve: {
    slug: 'sigeve',
    category: 'sistemas',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'BCV API', 'Tailwind'],
    image: '/sigeve/01.png',
    images: [
      '/sigeve/01.png',
      '/sigeve/02.png',
      '/sigeve/03.png',
      '/sigeve/04.png',
    ],
    url: '',
    es: {
      name: 'SIGEVE',
      oneLiner: 'Control absoluto de stock físico y ventas comerciales con conversión automática de tasas oficiales en tiempo real.',
      problem: 'Descuadres sistemáticos en inventario físico y pérdidas de margen operativo por actualizar tasas cambiarias de forma manual y tardía.',
      solution: 'Sistema de punto de venta y stock multialmacén integrado a la API oficial del BCV con actualización automática y auditoría de caja diaria.',
      result: '',
      benefits: ['Control de stock físico', 'Ventas y estadísticas', 'Tasas BCV automáticas', 'Reportes de flujo de caja'],
      reasons: [
        'Stock físico blindado: entradas, salidas y mermas por almacén.',
        'Márgenes protegidos: precios sincronizados con tasa BCV.',
        'Arqueos de caja exactos: por efectivo, transferencias y divisas.',
        'Decisiones sin Excel: reportes de productos de alta rotación.',
        'Alertas de stock mínimo: automáticas antes de agotar inventario.',
        'Facturación en segundos: notas de entrega rápidas sin demoras.',
        'Costos blindados: permisos estrictos que evitan manipulaciones.',
        'Control multialmacén: sucursales y depósitos en una pantalla.',
      ],
      businessBenefits: [
        { title: 'Stock físico blindado', desc: 'Control en tiempo real de entradas, salidas y mermas por almacén.' },
        { title: 'Tasa BCV automatizada', desc: 'Precios sincronizados con la tasa oficial sin perder margen de ganancia.' },
        { title: 'Auditoría diaria de caja', desc: 'Arqueos exactos por método de pago (efectivo, transferencias, pago móvil).' },
        { title: 'Decisiones sin Excel', desc: 'Reportes de ventas, productos más vendidos y utilidad al instante.' },
      ]
    },
    en: {
      name: 'SIGEVE',
      oneLiner: 'Full physical stock and commercial sales control with real-time official currency conversion.',
      problem: 'Recurring physical inventory discrepancies and profit margin loss caused by delayed manual currency rate updates.',
      solution: 'POS and multi-warehouse inventory system synced with official currency APIs, automated rate adjustments, and daily cash audits.',
      result: '',
      benefits: ['Physical stock control', 'Sales and metrics', 'Automated currency rates', 'Cash flow reports'],
      reasons: [
        'Watertight stock: real-time ins, outs, and shrink per depot.',
        'Protected margins: auto-synced with official exchange rates.',
        'Exact cash audits: itemized by cash, transfers, and currency.',
        'No spreadsheets: instant reports on fast-moving merchandise.',
        'Low stock alerts: automated before critical items run out.',
        'Instant billing: fast receipts and dispatch notes.',
        'Protected pricing: strict permissions against cost tampering.',
        'Multi-warehouse: manage stores and depots from one dashboard.',
      ],
      businessBenefits: [
        { title: 'Watertight stock control', desc: 'Real-time tracking of ins, outs, and shrink across all warehouses.' },
        { title: 'Automated currency rates', desc: 'Live official exchange rate sync to safeguard profit margins.' },
        { title: 'Daily cash audit', desc: 'Flawless register balancing categorized by payment method.' },
        { title: 'Instant analytics', desc: 'Live sales, top-selling items, and revenue reports without spreadsheets.' },
      ]
    }
  },
  conte: {
    slug: 'inmobiliaria-conte',
    category: 'sistemas',
    year: '2024',
    featured: false,
    stack: ['Next.js 16', 'PostgreSQL', 'Tailwind CSS', 'Cloud Storage'],
    image: '/conte/01.png',
    images: [
      '/conte/01.png',
      '/conte/02.png',
      '/conte/03.png',
      '/conte/04.png',
      '/conte/05.png',
    ],
    url: '',
    es: {
      name: 'INMOBILIARIA CONTE',
      oneLiner: 'Plataforma integral de gestión inmobiliaria para control de captaciones, cartera de inmuebles y seguimiento de clientes.',
      problem: 'Dispersión del inventario de propiedades y falta de control centralizado sobre el seguimiento de prospectos y comisiones de asesores.',
      solution: 'Sistema centralizado multi-agente con ficha técnica interactiva de propiedades, portal de captaciones y CRM inmobiliario en tiempo real.',
      result: '',
      benefits: ['Control de propiedades', 'Gestión de captaciones', 'CRM de clientes', 'Reportes de comisiones'],
      reasons: [
        'Cartera centralizada: inmuebles con fotos y precios al día.',
        'Cero prospectos perdidos: CRM de seguimiento para compradores.',
        'Fichas a WhatsApp en 1 tap: listas para compartir con clientes.',
        'Comisiones transparentes: cálculo automático por cada asesor.',
        'Búsqueda inmediata: filtros por zona, metraje y presupuesto.',
        'Expedientes ordenados: contratos y títulos sin papeles sueltos.',
        'Accesos seguros: protección de datos sensibles de clientes.',
        'Cierres más rápidos: respuestas inmediatas al comprador.',
      ],
      businessBenefits: [
        { title: 'Cartera centralizada', desc: 'Fichas interactivas con fotos, precios y disponibilidad en tiempo real.' },
        { title: 'CRM de prospectos', desc: 'Seguimiento ordenado para que ningún comprador potencial se pierda.' },
        { title: 'Control de comisiones', desc: 'Claridad total sobre captaciones y operaciones de cada asesor.' },
        { title: 'Ventas más rápidas', desc: 'Información lista para compartir con clientes por WhatsApp en 1 tap.' },
      ]
    },
    en: {
      name: 'INMOBILIARIA CONTE',
      oneLiner: 'Comprehensive real estate management hub for property portfolio tracking, lead CRM, and agent workflows.',
      problem: 'Scattered property listings and zero centralized control over buyer inquiries and broker commissions.',
      solution: 'Multi-agent centralized portal with interactive property specs, acquisition workflows, and real-time client pipeline tracking.',
      result: '',
      benefits: ['Property portfolio', 'Acquisition portal', 'Lead CRM', 'Commission tracking'],
      reasons: [
        'Centralized portfolio: property listings with live pricing.',
        'Zero lost buyer leads: built-in real estate CRM pipeline.',
        'One-tap WhatsApp specs: share property sheets in seconds.',
        'Clear commissions: automated tracking for each agent.',
        'Fast search: instant filters by neighborhood and budget.',
        'Organized files: deeds and contracts without loose paper.',
        'Protected access: role permissions safeguard client data.',
        'Faster deal closes: immediate answers to buyer inquiries.',
      ],
      businessBenefits: [
        { title: 'Centralized portfolio', desc: 'Interactive property listings with photos, pricing, and live availability.' },
        { title: 'Buyer CRM pipeline', desc: 'Structured follow-ups to ensure no inbound lead is ever dropped.' },
        { title: 'Commission tracking', desc: 'Full transparency on agent acquisitions and closed transactions.' },
        { title: 'Faster deals', desc: 'Share complete property sheets with clients over WhatsApp in one tap.' },
      ]
    }
  },
  'los-andes': {
    slug: 'inmobiliaria-los-andes',
    category: 'sistemas',
    year: '2024',
    featured: false,
    stack: ['React', 'Node.js', 'PostgreSQL', 'CRM Engine'],
    image: '/los-andes/01.png',
    images: [
      '/los-andes/01.png',
      '/los-andes/02.png',
      '/los-andes/03.png',
      '/los-andes/04.png',
    ],
    url: '',
    es: {
      name: 'INMOBILIARIA LOS ANDES',
      oneLiner: 'Catálogo inmobiliario inteligente y cotizador dinámico para comercialización de terrenos y viviendas regionales.',
      problem: 'Proceso manual y demorado para cotizar planes de financiamiento y entregar información actualizada de parcelas disponibles.',
      solution: 'Plataforma administrativa con mapa interactivo de lotes, generador automático de cotizaciones y administración de asesores.',
      result: '',
      benefits: ['Catálogo interactivo', 'Cotizaciones automáticas', 'Mapa de disponibilidad', 'Métricas de venta'],
      reasons: [
        'Cotizaciones al instante: cuotas e inicial frente al cliente.',
        'Mapa de lotes en vivo: disponibilidad en el plano interactivo.',
        'Cero errores de cálculo: tablas de pago estandarizadas.',
        'Propuestas en PDF: listas para enviar por WhatsApp o email.',
        'Control de cobranza: cuotas cobradas y pendientes sin Excel.',
        'Mayor confianza: imagen profesional que acelera el cierre.',
        'Cero doble venta: reservas protegidas entre asesores.',
        'Reportes financieros: proyección clara de flujos de caja.',
      ],
      businessBenefits: [
        { title: 'Cotizador dinámico', desc: 'Calcula cuotas y financiamiento en segundos frente al comprador.' },
        { title: 'Parcelas en tiempo real', desc: 'Mapa interactivo con disponibilidad y metraje actualizado.' },
        { title: 'Cero errores de cálculo', desc: 'Planes estandarizados que dan total certeza y confianza al cliente.' },
        { title: 'Mayor cierre de ventas', desc: 'Presentación comercial moderna que acelera la toma de decisión.' },
      ]
    },
    en: {
      name: 'INMOBILIARIA LOS ANDES',
      oneLiner: 'Smart real estate catalog and dynamic financing quote generator for regional properties and land developments.',
      problem: 'Slow manual workflows for calculating financing plans and sharing up-to-date availability for plots and homes.',
      solution: 'Administrative platform featuring interactive lot maps, instant automated quote generation, and broker management.',
      result: '',
      benefits: ['Interactive catalog', 'Instant quotes', 'Availability mapping', 'Sales analytics'],
      reasons: [
        'Instant quote engine: loan plans and installments in seconds.',
        'Live interactive map: real-time lot and parcel availability.',
        'Zero calculation errors: standardized amortization schedules.',
        'Automated PDF quotes: ready to send via WhatsApp or email.',
        'Collections tracking: paid and due installments without Excel.',
        'Higher close rates: professional presentation builds trust.',
        'Zero double-sold lots: centralized reservation locking.',
        'Financial reports: clear cash flow and collection metrics.',
      ],
      businessBenefits: [
        { title: 'Dynamic financing engine', desc: 'Compute monthly payments and loan plans in seconds with clients.' },
        { title: 'Real-time plot inventory', desc: 'Interactive property catalog with up-to-date availability and size.' },
        { title: 'Zero calculation errors', desc: 'Standardized financing plans providing total clarity to buyers.' },
        { title: 'Higher close rates', desc: 'Polished sales presentation that builds trust and buyer confidence.' },
      ]
    }
  },

  // GRUPO 2: PÁGINAS WEB
  domenico: {
    slug: 'domenico',
    category: 'webs',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    image: '/domenico/01.png',
    images: [
      '/domenico/01.png',
      '/domenico/02.png',
      '/domenico/03.png',
      '/domenico/04.png',
      '/domenico/05.png',
    ],
    url: 'https://domenico-dorazio.vercel.app/',
    es: {
      name: "DOMENICO D'ORAZIO",
      oneLiner: 'Landing page editorial de lujo para posicionamiento de marca personal y captación de clientes de alto perfil.',
      problem: 'Presencia digital inexistente para respaldar una reputación profesional consolidada, dependiendo exclusivamente de redes sociales efímeras.',
      solution: 'Sitio web cinematográfico de carga sub-segundo con microinteracciones de alta fidelidad y canal directo de contratación para eventos exclusivos.',
      result: '',
      benefits: ['Optimización de conversión', 'Diseño responsive de lujo', 'Carga ultra rápida'],
      reasons: [
        'Autoridad inmediata: diseño cinematográfico que eleva la marca.',
        'Carga en < 1 segundo: cero abandono por lentitud o esperas.',
        'Captación en 1 clic: prospectos directos a tu WhatsApp o agenda.',
        '100% adaptable: experiencia impecable en smartphones y laptops.',
        'Cero dependencia de redes: plataforma propia y control total.',
        'Mayor valor percibido: permite justificar tarifas premium.',
        'SEO y posicionamiento: presencia indexable en motores de búsqueda.',
        'Alta conversión: estructura persuasiva pensada para cerrar tratos.',
      ],
      businessBenefits: [
        { title: 'Autoridad inmediata', desc: 'Diseño editorial de lujo que posiciona la marca personal en el segmento alto.' },
        { title: 'Carga en menos de 1s', desc: 'Cero abandono de visitantes por páginas lentas o mal optimizadas.' },
        { title: 'Contacto directo en 1 clic', desc: 'Botones estratégicos para captar clientes directamente a WhatsApp.' },
        { title: '100% responsive', desc: 'Experiencia inmersiva y fluida tanto en smartphones como en computadoras.' },
      ]
    },
    en: {
      name: "DOMENICO D'ORAZIO",
      oneLiner: 'Luxury editorial landing page for personal brand authority and high-profile client acquisition.',
      problem: 'Lack of an authoritative web presence to match a strong reputation, relying solely on volatile social media channels.',
      solution: 'Cinematic sub-second portfolio website with fluid micro-interactions and high-converting VIP booking pathways.',
      result: '',
      benefits: ['Conversion optimization', 'Luxury responsive styling', 'Sub-second loading speed'],
      reasons: [
        'Instant brand authority: cinematic design elevating profile.',
        'Sub-second speed: zero bounce rate from lag or loading delays.',
        'One-click acquisition: leads direct to your WhatsApp or calendar.',
        '100% responsive: flawless presentation on mobile and desktop.',
        'Platform independence: own your digital brand beyond social media.',
        'Higher perceived value: justifies premium booking fees.',
        'SEO ready: indexable presence on search engines.',
        'Conversion-focused: persuasive layout crafted to close clients.',
      ],
      businessBenefits: [
        { title: 'Instant brand authority', desc: 'Editorial design that positions the personal brand in the luxury tier.' },
        { title: 'Sub-second loading', desc: 'Zero visitor bounce from sluggish or unoptimized pages.' },
        { title: 'One-click contact', desc: 'Frictionless conversion routes sending prospects directly to WhatsApp.' },
        { title: 'Flawless mobile UI', desc: 'Seamless browsing experience tailored for smartphones and desktop.' },
      ]
    }
  },
  rizzo: {
    slug: 'rizzo',
    category: 'webs',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
    image: '/rizzo/01.png',
    images: [
      '/rizzo/01.png',
      '/rizzo/02.png',
      '/rizzo/03.png',
    ],
    url: 'https://catalogo-rizzo.vercel.app/',
    es: {
      name: 'LICORERÍA RIZZO',
      oneLiner: 'Catálogo digital mayorista B2B con búsqueda ultrarrápida y checkout directo a WhatsApp.',
      problem: 'Atención saturada por clientes que solicitaban listas de precios en PDF desactualizadas para pedidos al por mayor.',
      solution: 'Catálogo web interactivo con filtrado por categoría en menos de 100ms y carrito de compra con pedido formateado enviado a WhatsApp en un clic.',
      result: '',
      benefits: ['Catálogo con filtrado rápido', 'Cero fricción de compra', 'Integración WhatsApp'],
      reasons: [
        'Pedidos directos a WhatsApp: carrito mayorista totalizado en un solo clic.',
        'Búsqueda instantánea en < 100ms: filtrado por categorías sin recargas.',
        'Cero PDFs obsoletos: catálogo y precios siempre sincronizados en vivo.',
        'Ventas abiertas 24/7: clientes consultan y piden a cualquier hora.',
        'Atención automatizada: elimina responder mensajes repetitivos de precios.',
        'Mayor ticket promedio: facilita la exploración visual de productos.',
        'Optimización móvil y desktop: experiencia rápida desde cualquier dispositivo.',
        'Cero comisiones por venta: control propio sin depender de marketplaces.',
      ],
      businessBenefits: [
        { title: 'Pedidos listos a WhatsApp', desc: 'El cliente mayorista arma su carrito y te llega el pedido totalizado.' },
        { title: 'Búsqueda en 100ms', desc: 'Filtrado instantáneo por categorías sin recargar la página.' },
        { title: 'Cero PDFs obsoletos', desc: 'Precios y catálogo siempre actualizados en tiempo real.' },
        { title: 'Ventas abiertas 24/7', desc: 'Tus clientes pueden consultar y pedir en cualquier momento del día.' },
      ]
    },
    en: {
      name: 'LICORERÍA RIZZO',
      oneLiner: 'B2B wholesale digital catalog with ultra-fast search and one-click WhatsApp checkout.',
      problem: 'Customer service bottlenecked by requests for outdated PDF price sheets for wholesale orders.',
      solution: 'Interactive web catalog featuring sub-100ms category filtering and an instant WhatsApp cart checkout pipeline.',
      result: '',
      benefits: ['Fast category filtering', 'Zero friction checkout', 'Direct WhatsApp cart'],
      reasons: [
        'Direct WhatsApp orders: itemized wholesale cart dispatched in one click.',
        'Sub-100ms search: instant category filtering without page reloads.',
        'Zero outdated PDFs: catalog and pricing synchronized in real time.',
        '24/7 order intake: clients browse and place orders at any hour.',
        'Automated support: eliminates answering repetitive price requests.',
        'Higher average order value: intuitive visual browsing boosts sales.',
        'Mobile and desktop speed: lightweight responsive navigation.',
        'Zero platform commissions: total independence from delivery marketplaces.',
      ],
      businessBenefits: [
        { title: 'Structured WhatsApp orders', desc: 'Wholesale buyers build their carts and send fully itemized orders.' },
        { title: '100ms instant search', desc: 'Category filtering that responds instantly with zero page reloads.' },
        { title: 'No outdated PDF sheets', desc: 'Always up-to-date pricing and product catalog in real time.' },
        { title: '24/7 order intake', desc: 'Wholesale clients can browse and place purchase requests anytime.' },
      ]
    }
  },
  juangraterol: {
    slug: 'juangraterol',
    category: 'webs',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'Tailwind CSS', 'High Performance UI'],
    image: '/juangraterol/01.png',
    images: [
      '/juangraterol/01.png',
      '/juangraterol/02.png',
      '/juangraterol/03.png',
    ],
    url: 'https://juangraterol.netlify.app/',
    es: {
      name: 'JUAN GRATEROL',
      oneLiner: 'Media kit interactivo de alto impacto visual para creador fitness y alianzas con marcas comerciales.',
      problem: 'Falta de un instrumento profesional interactivo para sustentar métricas de audiencia ante marcas patrocinadoras internacionales.',
      solution: 'Plataforma web dinámica que exhibe portafolio UGC, demografía de audiencia y casos de patrocinio con acceso directo a contacto comercial.',
      result: '',
      benefits: ['Media kit interactivo', 'Diseño inmersivo', 'Contacto directo con sponsors'],
      reasons: [
        'Presentación para sponsors: media kit interactivo que impresiona marcas.',
        'Métricas de audiencia claras: alcance y demografía sustentados en vivo.',
        'Portafolio UGC unificado: videos y colaboraciones en un solo lugar.',
        'Contacto directo en 1 clic: marcas y agencias cotizan sin intermediarios.',
        'Mayor valor de patrocinio: sustenta tarifas de contratación más altas.',
        'Carga instantánea: experiencia fluida en smartphones y computadoras.',
        'Cero dependencia de PDF: actualización inmediata de estadísticas.',
        'Diseño inmersivo de alto impacto: estética alineada al nicho fitness.',
      ],
      businessBenefits: [
        { title: 'Patrocinios premium', desc: 'Presentación que justifica presupuestos altos ante marcas globales.' },
        { title: 'Métricas de audiencia claras', desc: 'Alcance, demografía y engagement sustentados visualmente.' },
        { title: 'Portafolio de campañas', desc: 'Casos de éxito y colaboraciones previas en un solo enlace.' },
        { title: 'Agendamiento rápido', desc: 'Canal directo para que agencias y marcas coticen sin intermediarios.' },
      ]
    },
    en: {
      name: 'JUAN GRATEROL',
      oneLiner: 'High-impact interactive digital media kit for fitness athlete and commercial brand sponsorships.',
      problem: 'Absence of an authoritative interactive presentation to showcase audience statistics to global brand sponsors.',
      solution: 'Dynamic showcase platform highlighting UGC collaborations, follower demographics, and direct commercial booking.',
      result: '',
      benefits: ['Interactive media kit', 'Immersive UI', 'Direct brand sponsor booking'],
      reasons: [
        'Sponsorship presentation: interactive media kit that impresses global brands.',
        'Live audience analytics: reach, demographics, and engagement proven visually.',
        'Unified UGC portfolio: campaigns and creative work in a single link.',
        'Direct brand inquiries: agencies book and quote without middlemen.',
        'Higher sponsorship rates: authoritative presence justifies top-tier pricing.',
        'Instant loading speed: fluid browsing on both smartphones and laptops.',
        'Zero outdated PDFs: real-time updates for audience stats and achievements.',
        'High-impact immersive UI: visual aesthetics tailored to the athletic lifestyle.',
      ],
      businessBenefits: [
        { title: 'Premium sponsorships', desc: 'Showcase that justifies high marketing tier rates to global brands.' },
        { title: 'Clear audience analytics', desc: 'Visually proven engagement, demographics, and viewer reach.' },
        { title: 'UGC campaign portfolio', desc: 'Past collaborations and media productions organized in one link.' },
        { title: 'Direct booking channel', desc: 'Enables agencies and sponsors to reach out and hire without middlemen.' },
      ]
    }
  },

  // GRUPO 3: SOLUCIONES DIGITALES
  corazon: {
    slug: 'corazon',
    category: 'soluciones',
    year: '2024',
    featured: false,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    image: '/corazon/01.png',
    images: [
      '/corazon/01.png',
      '/corazon/02.png',
    ],
    url: '',
    es: {
      name: 'CAMINATA DÍA DEL CORAZÓN',
      oneLiner: 'Plataforma de inscripción masiva y panel administrativo de control de dorsales para evento deportivo benéfico.',
      problem: 'Gestión desorganizada en planillas de papel para registrar cientos de participantes, con riesgo de sobrecupo y demoras en la asignación de números.',
      solution: 'Landing page de registro con cierre automático por capacidad de cupos, panel de control en tiempo real con estadísticas demográficas y entrega de dorsales con filtro de búsqueda instantáneo.',
      result: '',
      benefits: ['Cierre automático de cupos', 'Panel de dorsales en vivo', 'Métricas demográficas', 'Búsqueda instantánea'],
      reasons: [
        'Control de cupos estricto: cierre automático al alcanzar el límite del evento.',
        'Dorsales organizados: asignación numérica consecutiva sin duplicidades.',
        'Panel administrativo en vivo: métricas de inscritos, género y entregas.',
        'Búsqueda ultra rápida: filtro instantáneo por cédula, nombre o dorsal.',
        'Cero planillas impresas: logística ágil desde laptop o tablet en el evento.',
        'Comunicación clara: estados de cupos agotados y recordatorio de ruta.',
        'Seguridad de datos: respaldo centralizado de participantes registrados.',
        'Acreditación sin colas: verificación de entregados y pendientes en 1 clic.',
      ],
      businessBenefits: [
        { title: 'Cierre automático de cupos', desc: 'Bloqueo instantáneo del formulario al llegar al aforo máximo para evitar sobrecupo.' },
        { title: 'Control de dorsales en vivo', desc: 'Seguimiento exacto de números entregados y pendientes el día del evento.' },
        { title: 'Métricas demográficas clave', desc: 'Visualización de porcentajes por género y volumen total de participantes.' },
        { title: 'Búsqueda instantánea', desc: 'Filtro por cédula o nombre en menos de 50ms para agilizar la acreditación.' },
      ]
    },
    en: {
      name: 'CAMINATA DÍA DEL CORAZÓN',
      oneLiner: 'Mass registration platform and real-time bib dispatch administrative dashboard for charity athletic events.',
      problem: 'Disorganized paper spreadsheets for registering hundreds of runners, causing overbooking risks and check-in bottlenecks.',
      solution: 'High-availability registration page featuring automatic capacity capping, live demographic telemetry, and rapid bib fulfillment search.',
      result: '',
      benefits: ['Automated capacity cutoff', 'Live bib management', 'Demographic metrics', 'Instant participant search'],
      reasons: [
        'Strict capacity control: automatic form lockout upon reaching full capacity.',
        'Organized race bibs: consecutive number allocation without duplicates.',
        'Live admin dashboard: real-time telemetry on entries, gender split, and bibs.',
        'Sub-50ms athlete search: instant lookup by ID card, runner name, or bib.',
        'Zero printed paper lists: agile check-in logistics from laptops or tablets.',
        'Clear participant alerts: transparent sold-out notices and venue guidance.',
        'Centralized runner records: tamper-proof database backup for all participants.',
        'Queue-free check-in: one-click fulfillment toggle for delivered numbers.',
      ],
      businessBenefits: [
        { title: 'Automated capacity capping', desc: 'Instantly locks registrations once attendance capacity is reached.' },
        { title: 'Live bib dispatch control', desc: 'Real-time monitoring of dispatched versus remaining race bibs.' },
        { title: 'Key demographic metrics', desc: 'Visual breakdown of gender distribution and total participant volume.' },
        { title: 'Sub-50ms athlete lookup', desc: 'Instant filtering by runner name or ID number to eliminate event queues.' },
      ]
    }
  },
  metarun: {
    slug: 'metarun',
    category: 'soluciones',
    year: '2023',
    featured: false,
    stack: ['Next.js', 'PostgreSQL', 'Payment Verification'],
    image: '/metarun/01.png',
    images: [
      '/metarun/01.png',
      '/metarun/02.png',
      '/metarun/03.png',
    ],
    url: '',
    es: {
      name: 'META RUN',
      oneLiner: 'Motor de registro masivo y conciliación de pagos en línea para maratones de atletismo.',
      problem: 'Colapso de formularios tradicionales y horas de verificación manual de transferencias bancarias durante apertura de inscripciones.',
      solution: 'Arquitectura de alta concurrencia con validación automática de comprobantes y confirmación de cupo inmediata para participantes.',
      result: '',
      benefits: ['Gestión masiva', 'Validación real'],
      reasons: [
        'Cero colapso del servidor: soporta miles de inscripciones simultáneas.',
        'Conciliación automática: validación rápida de transferencias y pagos.',
        'Ticket y cupo al instante: el atleta recibe confirmación inmediata.',
        'Ahorro de horas manuales: elimina cotejar comprobante por comprobante.',
        'Base de datos blindada: prevención de registros y pagos duplicados.',
        'Categorización exacta: división automática por edades y distancias.',
        'Exportación para cronometraje: listas listas para sistemas de chips.',
        'Reportes de recaudación: métricas financieras del evento en vivo.',
      ],
      businessBenefits: [
        { title: 'Cero caídas del servidor', desc: 'Soporta miles de corredores inscribiéndose a la vez sin colapsar.' },
        { title: 'Validación de pagos rápida', desc: 'Conciliación automatizada de comprobantes bancarios.' },
        { title: 'Cupo confirmado al instante', desc: 'El participante recibe su confirmación y ticket de inmediato.' },
        { title: 'Ahorro de horas manuales', desc: 'Elimina la revisión manual comprobante por comprobante.' },
      ]
    },
    en: {
      name: 'META RUN',
      oneLiner: 'High-concurrency registration and automated payment reconciliation engine for competitive marathons.',
      problem: 'Crashing forms and labor-intensive manual bank transfer verification during high-demand registration openings.',
      solution: 'Scalable cloud registration pipeline with automated receipt validation and instant runner slot confirmation.',
      result: '',
      benefits: ['High-concurrency scaling', 'Live verification'],
      reasons: [
        'Zero server crashes: built to handle thousands of concurrent registrations.',
        'Automated payment check: fast reconciliation of bank transfer receipts.',
        'Instant slot confirmation: runners receive tickets and bib proofs immediately.',
        'Massive time savings: eliminates manual receipt-by-receipt checking.',
        'Secure data layer: prevents duplicate entries and payment fraud.',
        'Precise athlete division: automatic grouping by age bracket and distance.',
        'Timing chip export: roster data formatted for electronic timing gates.',
        'Live financial tracking: real-time event revenue and intake telemetry.',
      ],
      businessBenefits: [
        { title: 'Zero server crashes', desc: 'Engineered for high concurrency when thousands of runners register at once.' },
        { title: 'Automated payment check', desc: 'Streamlined reconciliation of bank transfer receipts.' },
        { title: 'Instant slot confirmation', desc: 'Athletes receive their confirmed entry ticket and bib receipt instantly.' },
        { title: 'Massive admin time saved', desc: 'Eliminates repetitive manual receipt-by-receipt cross-referencing.' },
      ]
    }
  },
  dorsales: {
    slug: 'dorsales',
    category: 'soluciones',
    year: '2023',
    featured: false,
    stack: ['QR Scanner', 'Real-time Sync', 'Logistics Engine'],
    image: '/dorsales/01.png',
    images: [
      '/dorsales/01.png',
    ],
    url: '',
    es: {
      name: 'DORSALES',
      oneLiner: 'Logística móvil con validación de código QR para entrega express de números de competencia sin filas.',
      problem: 'Aglomeraciones de cientos de corredores en puntos de entrega por verificación lenta en planillas impresas.',
      solution: 'Sistema de acreditación móvil con lectura QR desde smartphone, verificación en base de datos en menos de 1 segundo y prevención de duplicidad.',
      result: '',
      benefits: ['Cero colas', 'Control total'],
      reasons: [
        'Cero filas de entrega: acreditación y entrega en 1.2 segundos por atleta.',
        'Escaneo QR instantáneo: validación rápida desde smartphone o tablet.',
        'Prevención de duplicidad: el sistema bloquea números ya entregados.',
        'Telemetría en vivo: métricas de kits despachados y restantes en tiempo real.',
        'Cero planillas en papel: búsqueda inmediata por cédula, nombre o dorsal.',
        'Control de chips RFID: verificación de numeración vinculada al dorsal.',
        'Trazabilidad horaria: registro de hora y operador para cada kit entregado.',
        'Sincronización cloud: bases de datos conectadas entre múltiples mesas.',
      ],
      businessBenefits: [
        { title: 'Cero filas de entrega', desc: 'Acreditación y entrega de número en menos de 1 segundo por corredor.' },
        { title: 'Escaneo desde smartphone', desc: 'Los operadores usan sus propios teléfonos con la cámara integrada.' },
        { title: 'Prevención de fraudes', desc: 'El sistema bloquea entregas duplicadas en tiempo real.' },
        { title: 'Control logístico en vivo', desc: 'Métricas instantáneas de kits entregados y kits pendientes.' },
      ]
    },
    en: {
      name: 'DORSALES',
      oneLiner: 'Mobile QR-scanning logistics suite for zero-queue athletic race bib fulfillment.',
      problem: 'Massive bottlenecks at athlete check-in stations caused by slow manual checkoffs on printed paper lists.',
      solution: 'Mobile scanning suite capable of sub-second QR bib validation, instant database reconciliation, and duplicate check prevention.',
      result: '',
      benefits: ['Zero queues', 'Full operational control'],
      reasons: [
        'Zero check-in queues: fulfillment and badge handoff in 1.2 seconds per athlete.',
        'Instant QR validation: agile camera scanning from smartphone or tablet.',
        'Duplicate prevention: database lock prevents re-dispatching same bib.',
        'Live telemetry dashboard: real-time count of dispatched vs pending kits.',
        'Paperless operations: instant search by ID card number, name, or bib.',
        'RFID chip verification: confirms matching timing chip before dispatch.',
        'Timestamp audit trail: logs exact delivery hour and station operator.',
        'Cloud sync: real-time inventory synchronization across multiple tables.',
      ],
      businessBenefits: [
        { title: 'Zero check-in queues', desc: 'Sub-second QR badge validation and bib dispatch per athlete.' },
        { title: 'Smartphone QR scanner', desc: 'Field staff use their own phone cameras without specialized hardware.' },
        { title: 'Fraud & duplicate block', desc: 'Real-time database validation prevents double bib distributions.' },
        { title: 'Live logistics telemetry', desc: 'Instant count of dispatched kits versus remaining inventory.' },
      ]
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
      pdfUrl: item.pdfUrl,
      url: item.url,
      year: item.year,
      featured: item.featured,
      benefits: loc.benefits,
      businessBenefits: loc.businessBenefits,
      reasons: loc.reasons || (loc.businessBenefits ? loc.businessBenefits.map((b) => `${b.title} — ${b.desc}`) : loc.benefits),
      isMobileFormat: item.isMobileFormat,
      isUpcoming: item.isUpcoming
    };
  });
}

// Obtiene un proyecto específico por su slug
export function getProjectBySlug(slug: string, lang: 'es' | 'en' = 'es'): Project | undefined {
  const all = getProjects(lang);
  return all.find(p => p.slug === slug);
}
