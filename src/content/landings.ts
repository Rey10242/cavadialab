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
  lang?: "es" | "en";
  market?: string;
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
    slug: "/consultor-marketing-digital-cartagena", label: "Cartagena",
    metaTitle: "Consultor de marketing digital en Cartagena | Cavadia Lab",
    metaDescription: "Reynaldo Montalvo Cavadia: Google Ads, Meta Ads y TikTok Ads, analítica, páginas y aplicaciones web desde Cartagena. Conversemos sobre tu proyecto.",
    eyebrow: "Cartagena · Publicidad, web y datos", h1: "Marketing digital", h1Accent: "desde Cartagena",
    intro: "Soy Reynaldo Montalvo Cavadia. Conecto publicidad, medición y tecnología para ordenar el recorrido entre descubrir tu negocio y contactarte.",
    blocks: [
      { heading: "Una mirada al recorrido completo", paragraphs: ["Una campaña puede generar visitas sin generar conversaciones relevantes. Revisamos la oferta, la página de destino y la atención comercial, no solo la plataforma de anuncios."] },
      { heading: "Publicidad con intención", bullets: ["Meta Ads para presentar tu oferta en Facebook e Instagram.", "Google Ads para captar búsquedas relevantes.", "TikTok Ads para probar anuncios en video."] },
      { heading: "Hospitality y otros sectores", paragraphs: ["Hospitality es una experiencia destacada en mi enfoque. Consultas, reservas y atención necesitan estar conectadas. También evaluamos proyectos de servicios, comercio y otros sectores."] },
      { heading: "Medición y tecnología", bullets: ["GA4 y Google Tag Manager con eventos definidos.", "Páginas web y aplicaciones según el problema del negocio.", "Reportes que distinguen clics, solicitudes y ventas."] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta una consultoría?", answer: "La sesión de 1 hora cuesta $130.000 COP y el pack de 4 horas cuesta $440.000 COP. La gestión de campañas y el desarrollo web se cotizan por alcance; la inversión publicitaria se paga aparte." },
      { question: "¿Debo estar en Cartagena?", answer: "No. Podemos coordinar reuniones remotas desde Cartagena. El horario y las condiciones se acuerdan antes de empezar." },
      { question: "¿Por dónde empezamos?", answer: "Cuéntame tu oferta, el problema que quieres resolver y qué tienes funcionando. Definimos si necesitas consultoría, campañas, medición o desarrollo web." },
    ], serviceName: "Consultoría de marketing digital en Cartagena",
  },
  {
    slug: "/paid-media-manager", label: "Paid Media",
    metaTitle: "Consultor Paid Media: Google, Meta y TikTok Ads | Cavadia Lab",
    metaDescription: "Gestión de Google Ads, Meta Ads y TikTok Ads con medición y revisión de campañas. Trabajo directo con Reynaldo Montalvo Cavadia.",
    eyebrow: "Publicidad pagada", h1: "Tu inversión publicitaria", h1Accent: "con una dirección clara",
    intro: "Paid Media significa gestionar anuncios pagados. Mi enfoque conecta la oferta, el canal y la medición para evaluar qué aporta cada campaña al negocio.",
    blocks: [
      { heading: "No es solo activar anuncios", paragraphs: ["Definimos a quién quieres llegar, qué propuesta vas a presentar y qué acción tiene valor. La estructura y el presupuesto responden a ese objetivo."] },
      { heading: "Tres canales, roles distintos", bullets: ["Meta Ads: presentar tu oferta y generar interés.", "Google Ads: responder a búsquedas con intención.", "TikTok Ads: probar mensajes en video para nuevas audiencias."] },
      { heading: "Datos antes de conclusiones", paragraphs: ["Un contacto no es una venta. Revisamos la calidad de las solicitudes y acordamos cómo conectar los datos comerciales cuando estén disponibles."] },
      { heading: "Qué revisamos", bullets: ["Oferta y página de destino.", "Configuración de eventos y campañas.", "Presupuesto, mensajes y criterios de prueba."] },
    ],
    faqs: [
      { question: "¿Trabajas de forma externa?", answer: "Sí. Podemos definir una colaboración externa con comunicación directa, responsabilidades y frecuencia de revisión acordadas." },
      { question: "¿Qué canales gestionas?", answer: "Gestiono Google Ads, Meta Ads y TikTok Ads. Podemos sumar analítica, páginas y aplicaciones web según lo que necesite tu proyecto." },
      { question: "¿Garantizas ventas?", answer: "No. Los resultados dependen del mercado, la oferta, la inversión y el proceso comercial. Acordamos objetivos de medición y revisamos avances sin prometer resultados garantizados." },
    ], serviceName: "Gestión de Google Ads, Meta Ads y TikTok Ads",
  },
  {
    slug: "/campanas-google-ads", label: "Google Ads",
    metaTitle: "Gestión de campañas de Google Ads | Cavadia Lab",
    metaDescription: "Campañas de Google Ads con intención de búsqueda, presupuesto definido y seguimiento de solicitudes. Consultoría directa desde Cartagena y atención remota.",
    eyebrow: "Google Ads", h1: "Aparece cuando buscan", h1Accent: "lo que tu negocio ofrece",
    intro: "Conectamos búsquedas relevantes con una oferta clara. El objetivo es evaluar solicitudes y oportunidades, no acumular clics sin contexto.",
    blocks: [
      { heading: "Intención antes que volumen", paragraphs: ["Revisamos qué busca tu audiencia y si tu oferta puede responder a esa necesidad. Elegimos términos, ubicaciones y una página de destino coherente."] },
      { heading: "Una estructura enfocada", bullets: ["Campañas según objetivos y servicios.", "Términos de búsqueda y palabras negativas.", "Presupuesto y criterios de revisión."] },
      { heading: "Una página a la altura del anuncio", paragraphs: ["El anuncio abre el recorrido. La página debe explicar tu propuesta, resolver dudas y facilitar el contacto; podemos mejorarla o construirla según el alcance."] },
      { heading: "Qué medimos", bullets: ["Clics y solicitudes como acciones distintas.", "Calidad de contactos con información comercial.", "Costes y evolución por campaña."] },
    ],
    faqs: [
      { question: "¿Google Ads sirve para mi negocio?", answer: "Depende de la demanda de búsqueda, la oferta y la competencia. Lo evaluamos antes de recomendar un canal o un presupuesto." },
      { question: "¿La inversión está incluida?", answer: "No. La gestión se cotiza por alcance y el presupuesto publicitario se paga directamente desde tus cuentas a la plataforma." },
      { question: "¿Google Ads o Meta Ads?", answer: "Google puede captar búsquedas existentes y Meta puede presentar tu oferta a nuevas audiencias. La elección depende del recorrido de tu cliente, no de una receta universal." },
    ], serviceName: "Google Ads",
  },
  {
    slug: "/campanas-meta-ads", label: "Meta Ads",
    metaTitle: "Campañas de Meta Ads: Facebook e Instagram | Cavadia Lab",
    metaDescription: "Gestión de anuncios en Facebook e Instagram. Mensajes, audiencias y medición de solicitudes para evaluar tu inversión con contexto.",
    eyebrow: "Meta Ads", h1: "Presenta tu oferta", h1Accent: "a personas relevantes",
    intro: "Campañas en Facebook e Instagram que conectan mensaje, creatividad y página de destino. Definimos qué acción buscamos y cómo la revisaremos.",
    blocks: [
      { heading: "Del anuncio a la conversación", paragraphs: ["Una creatividad debe ayudar a entender la oferta, no solo llamar la atención. Revisamos el mensaje y el recorrido de contacto para que ambos cuenten la misma historia."] },
      { heading: "Qué trabajamos", bullets: ["Objetivos y estructura de campañas.", "Audiencias y pruebas de mensajes.", "Orientación de material creativo real."] },
      { heading: "WhatsApp con contexto", paragraphs: ["Abrir WhatsApp no confirma una conversación ni una venta. Podemos medir el clic y, con datos del proceso comercial, evaluar qué sucede después."] },
      { heading: "Revisión con criterio", bullets: ["Eventos definidos y calidad de la medición.", "Presupuesto, frecuencia y solicitudes.", "Cambios evaluados contra el objetivo acordado."] },
    ],
    faqs: [
      { question: "¿Necesito fotos o videos?", answer: "Necesitamos material auténtico de tu producto o servicio. Acordamos qué contenido existe y qué producción requiere el proyecto." },
      { question: "¿Hay un presupuesto mínimo?", answer: "No aplico un mínimo universal. Lo definimos según la oferta, el mercado y el objetivo de prueba, separado de los honorarios de gestión." },
      { question: "¿Se pueden atribuir todas las ventas?", answer: "No siempre. El consentimiento, las plataformas y el proceso comercial limitan la atribución. Diferenciamos señales medidas de resultados confirmados." },
    ], serviceName: "Meta Ads",
  },
  {
    slug: "/campanas-tiktok-ads", label: "TikTok Ads",
    metaTitle: "Campañas de TikTok Ads para tu negocio | Cavadia Lab",
    metaDescription: "Anuncios en TikTok gestionados por Reynaldo Montalvo Cavadia: video, audiencias y medición para llegar a clientes nuevos. Desde Cartagena, atención remota.",
    eyebrow: "TikTok Ads", h1: "Tu negocio en TikTok", h1Accent: "frente a audiencias nuevas",
    intro: "Creo campañas en video para presentar tu negocio en TikTok. Revisamos las solicitudes registradas y los límites de la medición.",
    blocks: [
      { heading: "Por qué TikTok es distinto", paragraphs: ["En campañas de búsqueda respondemos a una consulta; en TikTok probamos videos que presentan tu oferta. Adapto los mensajes al canal y reviso su respuesta."] },
      { heading: "Qué trabajamos", bullets: ["Objetivos y estructura de campañas.", "Orientación para tus videos: qué mostrar y qué decir.", "Audiencias y presupuesto de prueba."] },
      { heading: "Medición desde el inicio", paragraphs: ["Configuro eventos antes de invertir. Los reportes distinguen interacciones, solicitudes registradas y resultados comerciales confirmados."] },
      { heading: "Para quién funciona", paragraphs: ["Negocios con productos o servicios que se puedan mostrar en video: comercio, restaurantes, turismo, belleza, educación y más. Lo evaluamos juntos antes de invertir."] },
    ],
    faqs: [
      { question: "¿Necesito grabar videos profesionales?", answer: "No siempre. Podemos probar material auténtico grabado con celular si representa bien tu oferta. Acordamos qué grabar y revisamos su respuesta." },
      { question: "¿Cuánto debo invertir?", answer: "Lo definimos según tu mercado y objetivo, con un presupuesto de prueba acordado. La inversión en anuncios se paga aparte de la gestión." },
      { question: "¿TikTok sirve para mi tipo de negocio?", answer: "No siempre. Depende de tu producto, tu audiencia y tu capacidad de producir video. Lo revisamos antes de recomendar el canal." },
    ], serviceName: "TikTok Ads",
  },
  {
    slug: "/marketing-para-restaurantes", label: "Restaurantes",
    metaTitle: "Marketing para restaurantes en Cartagena y Colombia | Cavadia Lab",
    metaDescription: "Anuncios en Google, Meta y TikTok, web con menú y reservas y medición para restaurantes. Trabajo desde Cartagena con atención remota en Colombia.",
    eyebrow: "Restaurantes · Cartagena y toda Colombia", h1: "Marketing para restaurantes", h1Accent: "anuncios, web y reservas",
    intro: "Creo anuncios, desarrollo tu web con menú y reservas y configuro la medición para revisar las solicitudes recibidas.",
    blocks: [
      { heading: "Lo que suele fallar", bullets: ["Publicas en Instagram, pero no llegan reservas.", "Te escriben por WhatsApp y nadie sabe de dónde vinieron.", "Quieres sumar un canal de pedidos directos."] },
      { heading: "Qué hacemos", bullets: ["Anuncios en Instagram, Facebook y TikTok para tu zona.", "Google Ads y Google Maps para quien busca dónde comer.", "Web con menú, reservas y pedidos directos."] },
      { heading: "Qué medimos", bullets: ["Clics a reservar, llamar y WhatsApp.", "Solicitudes registradas por campaña, según los datos disponibles.", "Costo por cada reserva o pedido registrado."] },
      { heading: "Para quién es", paragraphs: ["Restaurantes, cafés, bares y negocios de comida que quieren más clientes directos, en Cartagena o en cualquier ciudad de Colombia."] },
    ],
    faqs: [
      { question: "¿Cuánto debo invertir en anuncios?", answer: "Depende de tu zona, ticket promedio y objetivo. Lo definimos juntos; la inversión en anuncios se paga aparte de la gestión." },
      { question: "¿Sirve si ya uso apps de domicilio?", answer: "Sí. La idea es sumar pedidos directos por tu web o WhatsApp para depender menos de comisiones, no reemplazar de golpe lo que funciona." },
      { question: "¿Puedo empezar con una asesoría?", answer: "Sí. La sesión de 1 hora cuesta $130.000 COP: revisamos tu Instagram, tu ficha de Google y cómo llegan hoy tus clientes." },
    ], serviceName: "Marketing digital para restaurantes",
  },
  {
    slug: "/analitica-y-tracking", label: "Tracking & Analytics",
    metaTitle: "Tracking y analítica web: GA4 y GTM | Cavadia Lab",
    metaDescription: "Medición con GA4, Google Tag Manager y reportes. Separa clics, formularios y resultados comerciales para entender mejor tu inversión digital.",
    eyebrow: "Tracking & Analytics", h1: "Menos datos sueltos.", h1Accent: "Más decisiones con contexto.",
    intro: "Definimos qué necesitas saber y construimos la medición alrededor de esas preguntas. Un evento útil debe representar una acción real, no una promesa de venta.",
    blocks: [
      { heading: "Primero, las preguntas", paragraphs: ["¿De dónde llegan las solicitudes? ¿Qué páginas ayudan al contacto? ¿Qué se puede confirmar con datos comerciales? El plan de medición parte de tu negocio."] },
      { heading: "Una implementación ordenada", bullets: ["GA4 y Google Tag Manager.", "Eventos de contacto y formularios.", "Validación de disparos y duplicados."] },
      { heading: "Los límites también importan", paragraphs: ["No toda venta puede atribuirse a una campaña. La medición depende del consentimiento, los accesos y los datos disponibles. Documentamos lo observado y lo que no se puede confirmar."] },
      { heading: "Una lectura compartida", bullets: ["Reportes según preguntas del negocio.", "Clics, solicitudes y ventas separados.", "Revisión de consistencia de los datos."] },
    ],
    faqs: [
      { question: "¿Funciona con mi plataforma web?", answer: "Revisamos la plataforma, los accesos y las integraciones antes de confirmar el alcance. No todas las implementaciones tienen las mismas posibilidades." },
      { question: "¿Cuánto tarda?", answer: "El plazo se define después de revisar eventos, accesos, consentimiento e integraciones. No doy un plazo único sin conocer el sitio." },
      { question: "¿Un clic es un lead confirmado?", answer: "No. Un clic es interacción; un formulario guardado es una solicitud recibida. La calificación del contacto y la venta necesitan validación comercial." },
    ], serviceName: "Tracking & Analytics",
  },
  {
    slug: "/desarrollo-web-y-apps", label: "Desarrollo Web & Apps",
    metaTitle: "Desarrollo de páginas y aplicaciones web | Cavadia Lab",
    metaDescription: "Páginas web, landing pages y aplicaciones a medida con experiencia móvil, estructura SEO y medición. Diseño y desarrollo según tu objetivo de negocio.",
    eyebrow: "Desarrollo Web & Apps", h1: "Una web que acompaña", h1Accent: "el recorrido de tu cliente",
    intro: "Diseño y desarrollo páginas y aplicaciones alrededor de una necesidad concreta: presentar tu oferta, recibir solicitudes o facilitar un proceso del negocio.",
    blocks: [
      { heading: "El objetivo define la web", paragraphs: ["Una página corporativa, una landing y una aplicación resuelven problemas distintos. Acordamos usuarios, contenido y acciones antes de decidir funciones."] },
      { heading: "Qué podemos construir", bullets: ["Páginas corporativas y de servicios.", "Landings para campañas.", "Aplicaciones y procesos a medida."] },
      { heading: "Diseño y tecnología conectados", paragraphs: ["Trabajamos legibilidad, navegación y experiencia móvil. La estructura SEO y la medición forman parte del alcance técnico, sin prometer rankings ni conversiones garantizadas."] },
      { heading: "Lo que acordamos antes", bullets: ["Contenido, funciones e integraciones.", "Revisión, entrega y accesos.", "Edición y mantenimiento posterior."] },
    ],
    faqs: [
      { question: "¿Cuánto cuesta y cuánto tarda?", answer: "Depende del contenido, las funciones y las integraciones. Después del diagnóstico definimos propuesta, alcance y plazo antes de iniciar." },
      { question: "¿Incluye SEO?", answer: "Podemos incluir estructura de encabezados, metadatos, URLs, sitemap y revisión móvil. La indexación y el posicionamiento dependen también de contenido, autoridad y buscadores." },
      { question: "¿Puedo editar el contenido?", answer: "Lo definimos en el alcance: qué necesitas editar, con qué herramienta y qué mantenimiento se requiere. No todas las aplicaciones tienen las mismas opciones." },
      { question: "¿Puedes conectar la medición?", answer: "Sí, podemos incluir eventos de formulario y contacto, y las integraciones acordadas. Las ventas solo se confirman con los datos comerciales correspondientes." },
    ], serviceName: "Desarrollo Web & Apps",
  },
  {
    slug: "/consultor-marketing-digital-espana", lang: "es", market: "España", label: "España",
    metaTitle: "Marketing digital remoto para negocios en España | Cavadia Lab",
    metaDescription: "Consultoría desde Cartagena para proyectos en España: Meta Ads, Google Ads, analítica y desarrollo web. Alcance, horarios y condiciones acordados previamente.",
    eyebrow: "España · Servicio remoto desde Colombia", h1: "Marketing digital remoto", h1Accent: "para proyectos en España",
    intro: "Si tu negocio está en España, podemos evaluar una colaboración remota desde Cartagena. Publicidad, medición y web conectadas a tus objetivos, sin presentarnos como una agencia local.",
    blocks: [
      { heading: "Una propuesta para tu contexto", paragraphs: ["Revisamos tu oferta, mercado y recorrido comercial. El trabajo se plantea según tu proyecto, no como una adaptación automática de campañas de otro país."] },
      { heading: "Soluciones conectadas", bullets: ["Google Ads, Meta Ads y TikTok Ads.", "Tracking y analítica.", "Páginas y aplicaciones web."] },
      { heading: "Condiciones claras antes de empezar", paragraphs: ["Acordamos horarios de reunión, responsabilidades, moneda y facturación antes de contratar. Esta página ofrece atención remota; no acredita una oficina ni una cartera de clientes en España."] },
      { heading: "Medición y consentimiento", paragraphs: ["La configuración técnica debe revisarse con tus requisitos de privacidad. La asesoría legal y la validación de cumplimiento normativo requieren profesionales competentes; no se promete cumplimiento automático del RGPD."] },
    ],
    faqs: [
      { question: "¿Dónde estás ubicado?", answer: "En Cartagena, Colombia. Podemos coordinar colaboración remota para un proyecto en España, con horario y canales acordados." },
      { question: "¿Facturas en euros?", answer: "La moneda y las condiciones de facturación deben confirmarse antes de contratar. Los precios de consultoría publicados en la portada están en COP." },
      { question: "¿Garantizas cumplimiento del RGPD?", answer: "No. Podemos revisar las necesidades técnicas de consentimiento dentro del alcance, pero la validación legal del cumplimiento no se sustituye por una configuración de etiquetas." },
    ], serviceName: "Consultoría remota de marketing digital para España",
  },
  {
    slug: "/consultor-marketing-digital-mexico", lang: "es", market: "México", label: "México",
    metaTitle: "Marketing digital remoto para negocios en México | Cavadia Lab",
    metaDescription: "Meta Ads, Google Ads, analítica y desarrollo web para proyectos en México con atención remota desde Cartagena. Evaluemos tu oferta y proceso comercial.",
    eyebrow: "México · Servicio remoto desde Colombia", h1: "Una visión digital conectada", h1Accent: "para proyectos en México",
    intro: "Podemos evaluar tu proyecto en México desde Cartagena. El punto de partida es tu oferta y cómo atiendes a quienes te contactan, no una promesa de resultados por ubicación.",
    blocks: [
      { heading: "El recorrido que ya usa tu cliente", paragraphs: ["Si vendes por WhatsApp, formulario o una tienda online, la solución debe responder a ese recorrido. Revisamos la experiencia antes de elegir anuncios y eventos."] },
      { heading: "Publicidad con un objetivo", bullets: ["Google Ads para búsquedas relevantes.", "Meta Ads para presentar tu oferta.", "Página de destino coherente con el anuncio."] },
      { heading: "Medir sin confundir señales", paragraphs: ["Etiquetar un clic a WhatsApp no confirma una venta. Para revisar calidad y cierre necesitamos información del proceso comercial, además de los eventos del sitio."] },
      { heading: "Colaboración remota", paragraphs: ["Acordamos zona horaria, canales, alcance y condiciones de pago antes de comenzar. No afirmamos oficina local ni resultados de clientes mexicanos sin evidencia."] },
    ],
    faqs: [
      { question: "¿Cobras en pesos mexicanos o dólares?", answer: "La moneda y facturación deben acordarse antes de contratar. Las tarifas de consultoría publicadas en la portada están en pesos colombianos (COP)." },
      { question: "¿Puedes medir ventas por WhatsApp?", answer: "Podemos medir clics y diseñar un seguimiento comercial. Las ventas requieren confirmación en tus registros; un clic no demuestra que hubo conversación o compra." },
      { question: "¿Debo tener cuentas publicitarias?", answer: "Revisamos qué cuentas y accesos existen. La propiedad de las cuentas debe mantenerse en tu negocio y las responsabilidades se acuerdan en la propuesta." },
    ], serviceName: "Consultoría remota de marketing digital para México",
  },
  {
    slug: "/paid-media-consultant-usa", lang: "en", market: "United States", label: "United States",
    metaTitle: "Remote Paid Media Consulting for US Projects | Cavadia Lab",
    metaDescription: "Explore remote Meta Ads, Google Ads, analytics and web development with Reynaldo Montalvo Cavadia in Cartagena, Colombia. Scope and working terms agreed first.",
    eyebrow: "US projects · Remote service from Colombia", h1: "Advertising, data and web", h1Accent: "for your next business step",
    intro: "I am Reynaldo Montalvo Cavadia, based in Cartagena, Colombia. We can explore a remote collaboration for your US project, connecting advertising, measurement and the customer journey.",
    blocks: [
      { heading: "Start with the business question", paragraphs: ["We review your offer, current campaigns and the path from an ad to a customer enquiry. The objective is a clear scope and useful measurement, not a guaranteed revenue claim."] },
      { heading: "Connected services", bullets: ["Google Ads, Meta Ads and TikTok Ads.", "Tracking and analytics.", "Websites and custom web applications."] },
      { heading: "Clicks are not customers", paragraphs: ["An outbound click does not prove a conversation or a sale. Commercial outcomes require confirmation from your sales process, with measurement limits documented."] },
      { heading: "Remote, with agreed expectations", paragraphs: ["We agree meeting times, working language, account access, scope and billing terms before starting. This page does not claim a US office or an established US client portfolio."] },
    ],
    faqs: [
      { question: "Are you based in the United States?", answer: "No. I am based in Cartagena, Colombia. We can evaluate remote collaboration for a US project and agree meeting times before starting." },
      { question: "Do you offer bilingual campaigns?", answer: "Language, copy review and any translation requirements must be agreed for the project before we commit to campaign production." },
      { question: "Who owns the accounts and data?", answer: "Your business should retain ownership of its advertising accounts and properties. Access, deliverables and any integrations are agreed in the scope." },
    ], serviceName: "Remote paid media, analytics and web consulting",
  },
];
export const landingBySlug = (slug: string) => landings.find(l => l.slug === slug);
