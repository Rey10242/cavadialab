export const SITE_URL = "https://cavadialab.com";
export const HOME_TITLE = "Cavadia Lab | Marketing digital y desarrollo web en Cartagena";
export const HOME_DESCRIPTION = "Reynaldo Montalvo Cavadia conecta Meta Ads, Google Ads, analítica y desarrollo web. Consultoría desde Cartagena y atención remota para tu proyecto.";
export const whatsappUrl = (context: string) => `https://wa.me/573246875354?text=${encodeURIComponent(`Hola Reynaldo, me gustaría conversar sobre ${context}.`)}`;

export const solutions = [
  { name: "Meta Ads", path: "/campanas-meta-ads", problem: "Tu negocio necesita generar interés.", description: "Campañas en Facebook e Instagram que conectan tu oferta con personas relevantes y abren conversaciones.", deliverable: "Segmentación · Creatividad · Campañas" },
  { name: "Google Ads", path: "/campanas-google-ads", problem: "Te buscan, pero no te encuentran.", description: "Anuncios para aparecer cuando alguien busca lo que ofreces, con presupuesto y objetivos bien definidos.", deliverable: "Búsqueda · Intención · Optimización" },
  { name: "Tracking & Analytics", path: "/analitica-y-tracking", problem: "Inviertes sin una lectura clara.", description: "GA4, Google Tag Manager y reportes que separan clics, contactos y ventas para decidir con más criterio.", deliverable: "Medición · Eventos · Reportes" },
  { name: "Desarrollo Web & Apps", path: "/desarrollo-web-y-apps", problem: "Tu web no acompaña a tu negocio.", description: "Páginas, landing pages y aplicaciones web con un recorrido claro, experiencia móvil y medición desde el diseño.", deliverable: "Diseño · Desarrollo · Integraciones" },
];

export const consultingPacks = [
  { name: "Sesión Puntual", hours: "1 hora", price: 130000, benefits: ["Revisión en vivo de tus anuncios o tu web", "Detección de fugas de dinero", "Recomendaciones para aplicar el mismo día", "Grabación de la sesión"] },
  { name: "Pack de Acompañamiento", hours: "4 horas · 2 sesiones de 2 horas", price: 440000, benefits: ["Diagnóstico a fondo", "Plan de acción paso a paso", "Seguimiento entre sesiones", "Grabaciones de las sesiones"] },
];
export const formatCOP = (value: number) => `$${new Intl.NumberFormat("es-CO").format(value)} COP`;

export const serviceFaqs = [
  { question: "¿Qué solución necesita mi negocio?", answer: "Partimos del problema: atraer demanda, mejorar campañas, entender los datos o construir una web. Podemos trabajar una solución puntual o conectar varias según tu situación." },
  { question: "¿Cuánto cuesta trabajar contigo?", answer: "La Sesión Puntual de 1 hora cuesta $130.000 COP. El Pack de Acompañamiento de 4 horas cuesta $440.000 COP. La gestión de campañas y el desarrollo web se cotizan según el alcance; la inversión publicitaria se paga aparte." },
  { question: "¿En cuánto tiempo se ven resultados?", answer: "Depende del punto de partida, la oferta, el presupuesto y el proceso comercial. Definimos qué medir y cuándo revisar avances. No prometo un plazo fijo de ventas ni resultados garantizados." },
  { question: "¿Cómo defines el presupuesto publicitario?", answer: "Lo evaluamos según tus objetivos, mercado y capacidad de atender contactos. Acordamos un presupuesto de prueba y criterios de revisión antes de invertir, sin un mínimo universal." },
  { question: "¿Trabajas solo con hospitality?", answer: "Hospitality es una experiencia destacada en mi enfoque, pero no es el único sector. También podemos evaluar proyectos de servicios, comercio y otros negocios según sus necesidades." },
  { question: "¿Puedo trabajar contigo desde otra ciudad o país?", answer: "Sí, podemos coordinar atención remota desde Cartagena. Antes de empezar acordamos horarios, alcance y condiciones; no es necesario estar en la misma ciudad." },
  { question: "¿Un clic a WhatsApp cuenta como una venta?", answer: "No. Un clic indica intención de abrir el chat, no confirma una conversación, un cliente ni una venta. Para medir resultados comerciales necesitamos datos del proceso de atención y cierre." },
  { question: "¿También desarrollas páginas y aplicaciones web?", answer: "Sí. El alcance puede incluir una página corporativa, una landing para campañas o una aplicación a medida. Acordamos funciones, contenidos, integraciones y mantenimiento antes de construir." },
];
// Only these four general questions appear on home and in its FAQ graph.
export const homeFaqs = [serviceFaqs[1], serviceFaqs[3], serviceFaqs[2]];
