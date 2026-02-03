import React from "react";
import { motion } from "framer-motion";
import { Globe, Megaphone, BarChart3, Cog } from "lucide-react";

// Logos optimizados con tamaño más grande
const WordPressLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <circle cx="16" cy="16" r="14" fill="#21759B"/>
    <path d="M4.5 16c0 4.2 2.4 7.8 5.9 9.6L5.3 11.5c-.5 1.4-.8 2.9-.8 4.5zm19.2-.5c0-1.3-.5-2.2-.9-2.9-.5-.9-1-1.6-1-2.5 0-1 .7-1.9 1.8-1.9h.1c-1.9-1.8-4.5-2.9-7.4-2.9-3.8 0-7.2 2-9.1 5h.7c1.2 0 3-.1 3-.1.6 0 .7.9.1 1 0 0-.6.1-1.3.1l4 12 2.4-7.3-1.7-4.7c-.6 0-1.2-.1-1.2-.1-.6 0-.5-1 .1-1 0 0 1.8.1 2.9.1 1.2 0 3-.1 3-.1.6 0 .7.9.1 1 0 0-.6.1-1.3.1l4 11.9 1.1-3.7c.5-1.5.8-2.6.8-3.5zM16.2 17l-3.3 9.7c1 .3 2 .4 3.1.4 1.3 0 2.5-.2 3.6-.6v-.1l-3.4-9.4zm9.1-5.9c.1.5.1 1 .1 1.5 0 1.5-.3 3.3-1.2 5.5l-4.6 13.2c4.4-2.6 7.4-7.4 7.4-12.9 0-2.6-.7-5.1-1.7-7.3z" fill="#fff"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#96588A"/>
    <path d="M5 10c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-6l-3 3-3-3H7c-1.1 0-2-.9-2-2v-9z" fill="#fff"/>
    <ellipse cx="10" cy="14" rx="1.2" ry="1.8" fill="#96588A"/>
    <ellipse cx="16" cy="14" rx="1.2" ry="1.8" fill="#96588A"/>
    <ellipse cx="22" cy="14" rx="1.2" ry="1.8" fill="#96588A"/>
  </svg>
);

const ShopifyLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <path d="M22.3 6c-.1-.1-1.5-.1-1.5-.1s-1.2-1.2-1.4-1.4c-.2-.2-.5-.1-.5-.1l-.7.2c-.4-1.2-1.1-2.3-2.4-2.3h-.2c-.4-.4-.8-.5-1.2-.5-2.9 0-4.3 3.6-4.7 5.4l-2 .6c-.6.2-.6.2-.7.8L5.5 25.5l13.2 2.5 7.1-1.7S22.4 6.1 22.3 6zM17 5.2l-1.9.6c0-.6-.1-1.3-.3-1.9.8.2 1.4.9 2.2 1.3zm-2.9.9l-4 1.2c.4-1.5 1.1-3 2.5-3.5.5.2 1 .5 1.3.9.1.4.2.9.2 1.4zm-1.6-3c.3 0 .6.1.8.3-.9.4-1.9 1.7-2.4 4.1l-3.2 1c.6-3 2.5-5.4 4.8-5.4z" fill="#95BF47"/>
    <path d="M20.8 5.9s-1.5-.1-1.5-.1-1.2-1.2-1.4-1.4c-.1-.1-.1-.1-.2-.1l-1 20.2 7.1-1.7-3.9-16.7c-.1-.1-.1-.2-.1-.2z" fill="#5E8E3E"/>
    <path d="M15.5 10.9l-.7 2.1s-.6-.3-1.4-.3c-1.1 0-1.2.7-1.2.9 0 1 2.5 1.4 2.5 3.7 0 1.8-1.2 3-2.7 3-1.9 0-2.8-1.2-2.8-1.2l.5-1.6s1 .9 1.8.9c.6 0 .8-.4.8-.8 0-1.3-2.1-1.3-2.1-3.5 0-1.8 1.3-3.5 3.9-3.5.7 0 1.4.3 1.4.3z" fill="#fff"/>
  </svg>
);

const VTEXLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#F71963"/>
    <path d="M7 12h3l4 8 4-8h3l-6 12h-2L7 12z" fill="#fff"/>
    <rect x="18" y="12" width="4" height="2" fill="#fff"/>
  </svg>
);

const GA4Logo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <path d="M26 16c0 5.5-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6s10 4.5 10 10z" fill="#F9AB00"/>
    <path d="M16 6v10l8.7 5c1.5-2.2 2.3-4.8 2.3-7.5C27 8.8 22.2 4 16.5 4c-.2 0-.3 0-.5 0v2z" fill="#E37400"/>
    <circle cx="16" cy="16" r="3.5" fill="#fff"/>
  </svg>
);

const GTMLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <path d="M16 2L4 8.5v15L16 30l12-6.5v-15L16 2z" fill="#8AB4F8"/>
    <path d="M16 10l-6 3.5v7L16 24l6-3.5v-7L16 10z" fill="#4285F4"/>
    <path d="M16 17l-6-3.5v7L16 24v-7z" fill="#246FDB"/>
  </svg>
);

const LookerLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#4285F4"/>
    <circle cx="16" cy="16" r="7" fill="#fff"/>
    <circle cx="16" cy="16" r="3.5" fill="#4285F4"/>
  </svg>
);

const HotjarLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#FF3C00"/>
    <path d="M16 28c2.5 0 4.5-2.2 4.5-5V18h-2v5c0 1.7-1.1 3-2.5 3s-2.5-1.3-2.5-3v-5h-2v5c0 2.8 2 5 4.5 5z" fill="#fff"/>
    <path d="M16 4c-2.5 0-4.5 2.2-4.5 5v5h2V9c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3v5h2V9c0-2.8-2-5-4.5-5z" fill="#fff"/>
  </svg>
);

const ClarityLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#5C2D91"/>
    <path d="M8 8h6v6H8V8z" fill="#F25022"/>
    <path d="M18 8h6v6h-6V8z" fill="#7FBA00"/>
    <path d="M8 18h6v6H8v-6z" fill="#00A4EF"/>
    <path d="M18 18h6v6h-6v-6z" fill="#FFB900"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#0866FF"/>
    <path d="M8 16c0-3.5 1.3-7 3.5-7 1.3 0 2.2 1.3 3.5 4 .4.9.8 1.8 1.2 2.7.4-.9.8-1.8 1.2-2.7 1.3-2.7 2.2-4 3.5-4 2.2 0 3.5 3.5 3.5 7s-1.3 7-3.5 7c-1.3 0-2.2-1.3-3.5-4-.4-.9-.8-1.8-1.2-2.7-.4.9-.8 1.8-1.2 2.7-1.3 2.7-2.2 4-3.5 4C9.3 23 8 19.5 8 16z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GoogleAdsLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#fff"/>
    <path d="M7 21l7-12h4l7 12" fill="none" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="21" r="3.5" fill="#34A853"/>
    <circle cx="23" cy="21" r="3.5" fill="#FBBC04"/>
    <circle cx="16" cy="11" r="3.5" fill="#EA4335"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#000"/>
    <path d="M22 10a4.5 4.5 0 01-3.5-1.7V17a5 5 0 11-4.3-4.9v2.5a2.5 2.5 0 101.8 2.4V5h2.5A4.5 4.5 0 0022 10z" fill="#fff"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#0A66C2"/>
    <path d="M10 13h3v10h-3V13zm1.5-1c-1 0-1.7-.7-1.7-1.6s.7-1.6 1.7-1.6 1.7.7 1.7 1.6-.7 1.6-1.7 1.6zm12 11h-3v-5c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1v5.9h-3V13h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.3 1.3 3.3 4.1V23z" fill="#fff"/>
  </svg>
);

const MakeLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#6D00CC"/>
    <path d="M20 16l-7 4V12l7 4z" fill="#fff"/>
    <circle cx="16" cy="16" r="9" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const N8nLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#EA4B71"/>
    <circle cx="10" cy="16" r="2.5" fill="#fff"/>
    <circle cx="22" cy="16" r="2.5" fill="#fff"/>
    <path d="M12.5 16h7" stroke="#fff" strokeWidth="1.5"/>
    <circle cx="16" cy="10" r="2" fill="#fff"/>
    <circle cx="16" cy="22" r="2" fill="#fff"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#25D366"/>
    <path d="M16 6C10.5 6 6 10.5 6 16c0 1.7.4 3.3 1.2 4.7L6 26l5.5-1.4c1.3.7 2.8 1.1 4.5 1.1 5.5 0 10-4.5 10-10S21.5 6 16 6zm4.8 13.2c-.2.5-1.1 1-1.5 1-.4 0-.7-.1-2.3-.7-1.8-.7-3-2.5-3.1-2.6-.1-.1-.7-1-.7-1.9s.4-1.3.6-1.5c.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .5.4.2.4.6 1.5.7 1.6 0 .1 0 .2 0 .4-.1.1-.1.2-.2.3-.1.1-.2.3-.3.4-.1.1-.2.2-.1.4.1.2.5.9 1.2 1.4.8.7 1.5.9 1.8 1 .2.1.4.1.5-.1.1-.2.5-.6.7-.8.2-.2.3-.1.5-.1l1.5.7c.2.1.4.2.5.3 0 .1 0 .5-.2 1z" fill="#fff"/>
  </svg>
);

const GoHighLevelLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#0EA5E9"/>
    <path d="M16 7L7 11.5l9 4.5 9-4.5L16 7z" fill="#fff"/>
    <path d="M7 20l9 4.5 9-4.5" stroke="#fff" strokeWidth="1.5" fill="none"/>
    <path d="M7 15.5l9 4.5 9-4.5" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const SendpulseLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#2C82C9"/>
    <path d="M8 11l8 5 8-5v10l-8-5-8 5V11z" fill="#fff"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12">
    <rect width="32" height="32" rx="6" fill="#FF7A59"/>
    <path d="M21 11v-1.5a1.5 1.5 0 10-3 0V11a4 4 0 00-2 1l-4.5-3.5a2 2 0 10-1.2 1.5l4.4 3.4a4 4 0 00.5 5.4l-1.4 1.4a1.5 1.5 0 101.1 1.1l1.4-1.4A4 4 0 1021 11z" fill="#fff"/>
    <circle cx="19.5" cy="15.5" r="2" fill="#FF7A59"/>
  </svg>
);

// Datos de las categorías con enfoque 2x2
const categories = [
  {
    title: "Presencia Digital",
    subtitle: "Web & E-commerce",
    icon: Globe,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGlow: "violet",
    tools: [
      { name: "WordPress", logo: <WordPressLogo /> },
      { name: "WooCommerce", logo: <WooCommerceLogo /> },
      { name: "Shopify", logo: <ShopifyLogo /> },
      { name: "VTEX", logo: <VTEXLogo /> },
    ],
  },
  {
    title: "Captura de Tráfico",
    subtitle: "Paid Media & Ads",
    icon: Megaphone,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGlow: "blue",
    tools: [
      { name: "Meta Ads", logo: <MetaLogo /> },
      { name: "Google Ads", logo: <GoogleAdsLogo /> },
      { name: "TikTok Ads", logo: <TikTokLogo /> },
      { name: "LinkedIn Ads", logo: <LinkedInLogo /> },
    ],
  },
  {
    title: "Medición & Análisis",
    subtitle: "Analytics & Tracking",
    icon: BarChart3,
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    bgGlow: "emerald",
    tools: [
      { name: "GA4", logo: <GA4Logo /> },
      { name: "GTM", logo: <GTMLogo /> },
      { name: "Looker Studio", logo: <LookerLogo /> },
      { name: "Hotjar", logo: <HotjarLogo /> },
      { name: "Clarity", logo: <ClarityLogo /> },
    ],
  },
  {
    title: "Conversión & Retención",
    subtitle: "CRM & Automatización",
    icon: Cog,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGlow: "orange",
    tools: [
      { name: "Make", logo: <MakeLogo /> },
      { name: "n8n", logo: <N8nLogo /> },
      { name: "WhatsApp API", logo: <WhatsAppLogo /> },
      { name: "GoHighLevel", logo: <GoHighLevelLogo /> },
      { name: "Sendpulse", logo: <SendpulseLogo /> },
      { name: "HubSpot", logo: <HubSpotLogo /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="stack" className="py-24 md:py-32 relative overflow-hidden">
      {/* Fondo con efectos de luz */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      {/* Glow central sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-primary/3 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            Growth Marketing Stack
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="text-foreground">Herramientas que </span>
            <span className="text-gradient">Dominó</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            +20 herramientas conectadas en un ecosistema Full-Funnel que genera resultados
          </p>
        </motion.div>

        {/* Grid 2x2 de categorías */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative"
            >
              {/* Glow detrás de la card */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              {/* Card principal */}
              <div className="relative h-full">
                {/* Borde gradiente animado */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${category.gradient} rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
                
                {/* Contenido */}
                <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 p-6 md:p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl overflow-hidden" />
                  
                  {/* Header de la categoría */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <category.icon className="w-7 h-7" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Grid de herramientas */}
                  <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.2 + index * 0.05 + toolIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.15, y: -5, rotate: 3 }}
                        className="group/tool relative"
                      >
                        <div className="relative p-3 md:p-4 rounded-xl bg-background/80 border border-border/50 transition-all duration-300 group-hover/tool:border-primary/50 group-hover/tool:shadow-lg group-hover/tool:shadow-primary/20 group-hover/tool:bg-background">
                          {tool.logo}
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover/tool:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg z-20">
                          {tool.name}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-violet-500/10 to-orange-500/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Ecosistema integrado de +20 herramientas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
