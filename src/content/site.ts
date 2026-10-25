export const SITE_URL = "https://cavadialab.com";
export const HOME_TITLE = "Cavadia Lab | Marketing digital y desarrollo web en Cartagena";
export const HOME_DESCRIPTION = "Google Ads, Meta Ads y TikTok Ads, páginas y aplicaciones web a medida y analítica. Reynaldo Montalvo Cavadia, desde Cartagena con atención remota.";
export const whatsappUrl = (context: string) => `https://wa.me/573246875354?text=${encodeURIComponent(`Hola Reynaldo, me gustaría conversar sobre ${context}.`)}`;

export const solutions = [
  { name: "Meta Ads", path: "/campanas-meta-ads", problem: "La gente aún no conoce tu negocio.", description: "Gestiono tus anuncios en Facebook e Instagram para que más personas interesadas te conozcan y te contacten.", deliverable: "Audiencias · Anuncios · Revisión" },
  { name: "Google Ads", path: "/campanas-google-ads", problem: "Te buscan, pero no te encuentran.", description: "Tu negocio aparece en Google justo cuando alguien busca lo que vendes.", deliverable: "Búsqueda · Anuncios · Optimización" },
  { name: "TikTok Ads", path: "/campanas-tiktok-ads", problem: "Quieres llegar a audiencias nuevas.", description: "Llevo tu negocio a TikTok con anuncios en video para personas que todavía no te conocen.", deliverable: "Video · Audiencias · Campañas" },
  { name: "Desarrollo Web & Apps", path: "/desarrollo-web-y-apps", problem: "Tu web no acompaña a tu negocio.", description: "Creo tu página web o una aplicación a la medida: rápida, clara en celular y lista para recibir clientes.", deliverable: "Diseño · Desarrollo · Integraciones" },
  { name: "Tracking & Analytics", path: "/analitica-y-tracking", problem: "Inviertes sin saber qué funciona.", description: "Configuro eventos y reportes para entender de dónde llegan las solicitudes, según los datos disponibles.", deliverable: "Medición · Eventos · Reportes" },
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
