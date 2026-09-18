export interface LandingBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface Landing {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  blocks: LandingBlock[];
  faqs: LandingFaq[];
  serviceName: string;
}

export const landings: Landing[] = [
  {
    slug: "/consultor-marketing-digital-cartagena",
    label: "Cartagena",
    metaTitle:
      "Consultor de Marketing Digital en Cartagena | Reynaldo Montalvo Cavadia",
    metaDescription:
      "Consultor de marketing digital en Cartagena de Indias. Campañas de Meta Ads y Google Ads, medición real y más clientes para tu negocio. Habla directo conmigo, no con una agencia.",
    eyebrow: "Cartagena de Indias",
    h1: "Consultor de marketing digital",
    h1Accent: "en Cartagena",
    intro:
      "Ayudo a negocios de Cartagena a conseguir clientes todos los días con publicidad digital bien hecha: estrategia, campañas, medición y decisiones basadas en números, no en corazonadas.",
    blocks: [
      {
        heading: "El problema que veo todos los días en Cartagena",
        paragraphs: [
          "Restaurantes, clínicas, inmobiliarias, hoteles y tiendas invierten en publicidad porque alguien les dijo que había que hacerlo. Pagan, ven likes, reciben mensajes que no compran y al final del mes nadie sabe cuánto costó cada cliente real.",
          "El problema casi nunca es el producto. Es que no hay una estrategia detrás: no se sabe a quién se le está hablando, qué se le está ofreciendo ni cómo se mide si funcionó. Sin eso, invertir más solo significa perder más rápido.",
        ],
      },
      {
        heading: "Cómo trabajo contigo",
        bullets: [
          "Diagnóstico: reviso qué estás haciendo hoy, cuánto inviertes y qué te está devolviendo.",
          "Estructuración: definimos qué anunciar, a quién, en qué canal y cómo vamos a medirlo antes de gastar un peso.",
          "Ejecución: monto y gestiono las campañas en Meta Ads y Google Ads.",
          "Medición: instalo el seguimiento (GA4, Google Tag Manager, WhatsApp) para saber de dónde viene cada contacto.",
          "Escalamiento: cuando los números cuadran, subimos la inversión con confianza.",
        ],
      },
      {
        heading: "Negocios con los que trabajo bien",
        paragraphs: [
          "Negocios locales de Cartagena y Bolívar que venden por WhatsApp o reciben clientes en punto físico: salud y estética, servicios profesionales, turismo, inmobiliaria, educación y comercio.",
          "También trabajo de forma remota con clientes en el resto de Colombia, Latinoamérica y España. Las herramientas son las mismas y las reuniones se hacen por videollamada.",
        ],
      },
      {
        heading: "Qué te llevas",
        bullets: [
          "Campañas activas con objetivo claro, no publicaciones promocionadas.",
          "Un número de contacto por cliente: cuánto te costó cada persona interesada y cada venta.",
          "Un reporte que entiendes, sin métricas de vanidad.",
          "Línea directa conmigo. Trabajo con pocos clientes a la vez.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta una consultoría de marketing digital en Cartagena?",
        answer:
          "Las consultorías arrancan desde $130.000 COP (~$50 USD) por sesión. Para gestión de campañas armo un plan según tus objetivos y tu presupuesto publicitario.",
      },
      {
        question: "¿Cuánto debo invertir en publicidad para empezar?",
        answer:
          "Recomiendo mínimo $500.000 COP mensuales (~$150 USD) en inversión publicitaria para que los datos sean significativos y se pueda optimizar con criterio.",
      },
      {
        question: "¿Atiendes presencialmente en Cartagena?",
        answer:
          "Sí, puedo reunirme presencialmente en Cartagena de Indias, y también trabajo por videollamada con clientes de otras ciudades y países.",
      },
    ],
    serviceName: "Consultoría de marketing digital en Cartagena",
  },
  {
    slug: "/paid-media-manager",
    label: "Paid Media",
    metaTitle: "Paid Media Manager Freelance | Performance Marketing | Reynaldo Montalvo",
    metaDescription:
      "Paid Media Manager y Performance Marketing Specialist freelance. Gestión de Meta Ads, Google Ads, TikTok y LinkedIn con foco en CPA, ROAS y crecimiento rentable.",
    eyebrow: "Paid Media",
    h1: "Paid Media Manager",
    h1Accent: "freelance",
    intro:
      "Gestiono la inversión publicitaria de negocios que necesitan resultados medibles: estructura de campañas, creatividades, medición y optimización continua hacia CPA y ROAS.",
    blocks: [
      {
        heading: "Qué hace un Paid Media Manager (y qué hago yo)",
        paragraphs: [
          "Un Paid Media Manager es responsable de que cada peso invertido en publicidad tenga una razón de ser y un resultado que se pueda medir. No es 'poner anuncios': es decidir la estructura de cuenta, la segmentación, el mensaje, el presupuesto y el criterio de optimización.",
          "En la práctica, yo asumo el rol completo: Media Buyer, Performance Marketing Manager y responsable de la medición. Tú ves los resultados; yo me encargo de todo lo que hay detrás.",
        ],
      },
      {
        heading: "Canales que gestiono",
        bullets: [
          "Meta Ads (Facebook e Instagram): captación, remarketing y catálogo.",
          "Google Ads: Search, Performance Max, Shopping, YouTube y display.",
          "TikTok Ads: contenido nativo para audiencias frías.",
          "LinkedIn Ads: generación de leads B2B.",
        ],
      },
      {
        heading: "Cómo optimizo una cuenta",
        bullets: [
          "Auditoría de la estructura actual y de la calidad de la medición.",
          "Reestructuración por objetivo real de negocio, no por plataforma.",
          "Testeo ordenado de públicos, creatividades y ofertas.",
          "Lectura semanal de CPA, ROAS, frecuencia y tasa de conversión.",
          "Corte de lo que no funciona y escalamiento de lo que sí.",
        ],
      },
      {
        heading: "Para quién tiene sentido",
        paragraphs: [
          "Negocios que ya invierten entre $500.000 COP y varios miles de dólares al mes y no tienen claridad sobre el retorno; equipos de marketing sin especialista en paid media interno; y empresas que quieren una segunda opinión antes de escalar presupuesto.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Trabajas como Paid Media Manager externo o in-house?",
        answer:
          "Trabajo de forma externa, integrado al equipo del cliente. Participo en las reuniones que hagan falta y tengo comunicación directa, sin intermediarios.",
      },
      {
        question: "¿Cuál es la diferencia entre un Media Buyer y un Paid Media Manager?",
        answer:
          "El Media Buyer ejecuta la compra de medios. El Paid Media Manager además define la estrategia, la medición y el criterio de escalamiento. Yo cubro ambos roles.",
      },
      {
        question: "¿En cuánto tiempo se ven resultados?",
        answer:
          "Las primeras métricas llegan en la semana 1. Resultados consistentes de leads o ventas, entre 2 y 4 semanas según el canal y la industria.",
      },
    ],
    serviceName: "Gestión de Paid Media",
  },
  {
    slug: "/campanas-google-ads",
    label: "Google Ads",
    metaTitle: "Especialista en Google Ads en Colombia | Campañas SEM | Reynaldo Montalvo",
    metaDescription:
      "Especialista en Google Ads: campañas de Search, Performance Max y Shopping para captar clientes que ya están buscando lo que vendes. Medición y optimización por costo por cliente.",
    eyebrow: "Google Ads",
    h1: "Campañas de Google Ads",
    h1Accent: "que traen clientes",
    intro:
      "Google Ads te pone frente a personas que ya están buscando lo que vendes. Bien configurado, es el canal con la intención de compra más alta que existe. Mal configurado, es la forma más rápida de quemar presupuesto.",
    blocks: [
      {
        heading: "Tipos de campaña que implemento",
        bullets: [
          "Search: captación por palabras clave con intención de compra.",
          "Performance Max: cobertura completa del inventario de Google con señales de audiencia bien alimentadas.",
          "Shopping: catálogo de producto para e-commerce.",
          "YouTube y display: alcance y remarketing con creatividad en video.",
        ],
      },
      {
        heading: "Los errores que más dinero cuestan",
        bullets: [
          "Campañas en concordancia amplia sin lista de negativas: pagas por búsquedas que nunca te van a comprar.",
          "Conversiones mal configuradas: Google optimiza hacia el objetivo equivocado.",
          "Una sola campaña para todos los servicios: no puedes saber cuál rinde.",
          "Página de destino genérica: el clic llega, pero nadie escribe.",
        ],
      },
      {
        heading: "Cómo lo trabajo",
        paragraphs: [
          "Primero reviso la intención de búsqueda real de tu categoría y el costo por clic del mercado. Luego estructuro la cuenta por objetivo de negocio, configuro las conversiones en GA4 y Google Tag Manager, y recién ahí se activa la inversión.",
          "A partir de la semana 1 optimizo con datos: términos de búsqueda, dispositivos, horarios, ubicaciones y creatividades. El indicador que manda es el costo por cliente, no el costo por clic.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Google Ads sirve para negocios pequeños?",
        answer:
          "Sí, especialmente para servicios locales con demanda de búsqueda clara (salud, legal, reparaciones, educación). Con presupuestos pequeños hay que ser muy selectivo en palabras clave y zona geográfica.",
      },
      {
        question: "¿Cuánto cuesta un clic en Colombia?",
        answer:
          "Depende de la categoría: puede ir desde unos cientos de pesos hasta varios miles en sectores competidos. Por eso la conversación real es el costo por cliente, no el costo por clic.",
      },
      {
        question: "¿Google Ads o Meta Ads?",
        answer:
          "Google capta demanda existente; Meta crea demanda. Si la gente ya busca tu servicio, Google primero. Si hay que despertar el interés, Meta. En muchos casos la combinación es lo que mejor rinde.",
      },
    ],
    serviceName: "Gestión de campañas en Google Ads",
  },
  {
    slug: "/campanas-meta-ads",
    label: "Meta Ads",
    metaTitle: "Especialista en Meta Ads (Facebook e Instagram) | Reynaldo Montalvo",
    metaDescription:
      "Especialista en Meta Ads: campañas de Facebook e Instagram para generar leads y ventas por WhatsApp. Estructura, creatividades y medición real del costo por cliente.",
    eyebrow: "Meta Ads",
    h1: "Campañas de Facebook",
    h1Accent: "e Instagram que venden",
    intro:
      "Meta Ads es el canal más potente para crear demanda: le muestra tu negocio a personas que todavía no te buscan, pero que sí te necesitan. La diferencia entre gastar y vender está en la estructura, el mensaje y la medición.",
    blocks: [
      {
        heading: "Qué incluye la gestión",
        bullets: [
          "Estructura de campañas por objetivo: mensajes a WhatsApp, formularios, ventas o tráfico calificado.",
          "Públicos fríos, lookalikes y remarketing bien separados.",
          "Dirección creativa: qué decir, en qué formato y con qué ángulo.",
          "Instalación del píxel y la API de conversiones para no perder datos.",
          "Optimización semanal por costo por resultado y frecuencia.",
        ],
      },
      {
        heading: "Por qué 'promocionar publicación' no funciona",
        paragraphs: [
          "El botón de promocionar optimiza para interacción: le muestra tu contenido a quienes suelen dar like, no a quienes suelen comprar. Es barato en apariencia y carísimo en resultado.",
          "Una campaña bien armada le dice a Meta exactamente qué acción vale dinero para ti, y el algoritmo va a buscar a esas personas. Ese solo cambio suele reducir el costo por cliente de forma notable.",
        ],
      },
      {
        heading: "Ventas por WhatsApp",
        paragraphs: [
          "En Colombia y Latinoamérica la mayoría de las ventas se cierran por WhatsApp. Configuro las campañas para llevar la conversación al chat, con medición de cuántos mensajes llegan, cuántos responden y cuántos compran — para que sepas si el problema es la campaña o la atención.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuánto debo invertir en Meta Ads al mes?",
        answer:
          "Desde $500.000 COP (~$150 USD) mensuales para obtener datos suficientes. Por debajo de eso el aprendizaje del algoritmo es lento y las decisiones se toman con poca información.",
      },
      {
        question: "¿Necesito tener contenido para anunciar?",
        answer:
          "Necesitas material básico: fotos o videos reales del producto o servicio. Yo te indico qué grabar y con qué ángulo; no hace falta producción de agencia.",
      },
      {
        question: "¿Se puede medir cuántas ventas vinieron de Facebook?",
        answer:
          "Sí. Con píxel, API de conversiones y seguimiento de WhatsApp se puede atribuir la mayoría de los contactos y ventas a su campaña de origen.",
      },
    ],
    serviceName: "Gestión de campañas en Meta Ads",
  },
  {
    slug: "/analitica-y-tracking",
    label: "Analítica",
    metaTitle: "Analítica y Tracking: GA4, Google Tag Manager y Looker Studio | Reynaldo Montalvo",
    metaDescription:
      "Implementación de GA4, Google Tag Manager, píxeles y dashboards en Looker Studio para saber de dónde viene cada cliente y cuánto te cuesta conseguirlo.",
    eyebrow: "Analítica & Tracking",
    h1: "Medición que te dice",
    h1Accent: "de dónde viene cada cliente",
    intro:
      "Sin medición, la publicidad es una apuesta. Implemento el seguimiento completo para que cada contacto, formulario y venta quede atribuido a su origen, y para que puedas decidir con datos en vez de intuición.",
    blocks: [
      {
        heading: "Qué implemento",
        bullets: [
          "Google Analytics 4 con eventos y conversiones definidos según tu negocio.",
          "Google Tag Manager como capa única de etiquetas, sin tocar el código cada vez.",
          "Píxel de Meta y API de conversiones para recuperar datos que el navegador bloquea.",
          "Seguimiento de clics a WhatsApp, llamadas y formularios.",
          "Dashboards en Looker Studio con las métricas que de verdad importan.",
        ],
      },
      {
        heading: "Las preguntas que vas a poder responder",
        bullets: [
          "¿Cuánto me costó cada cliente este mes, por canal?",
          "¿Qué campaña trae contactos que compran y cuál trae curiosos?",
          "¿En qué paso de la página se me está cayendo la gente?",
          "¿Vale la pena subir el presupuesto esta semana?",
        ],
      },
      {
        heading: "Por qué se hace antes de invertir",
        paragraphs: [
          "Las plataformas optimizan hacia el evento que les indiques. Si ese evento está mal definido — o no existe — el algoritmo va a buscar el resultado equivocado durante todo el mes, con tu dinero.",
          "Por eso la medición es el paso 2 de mi método, siempre antes de escalar inversión.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Sirve si mi página está en WordPress, Shopify o un constructor?",
        answer:
          "Sí. Google Tag Manager funciona en prácticamente cualquier plataforma; en Shopify y WooCommerce además se puede medir el valor real de cada compra.",
      },
      {
        question: "¿Cuánto tarda la implementación?",
        answer:
          "Una implementación estándar toma entre 3 y 7 días, según la cantidad de eventos y la complejidad del sitio.",
      },
      {
        question: "¿Me entregas un reporte o tengo que entrar a las plataformas?",
        answer:
          "Te entrego un dashboard en Looker Studio con acceso permanente, actualizado de forma automática y explicado en lenguaje de negocio.",
      },
    ],
    serviceName: "Analítica, tracking y dashboards",
  },
];

export const landingBySlug = (slug: string) =>
  landings.find((l) => l.slug === slug);
