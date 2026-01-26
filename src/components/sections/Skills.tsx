import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, BarChart3, Users } from "lucide-react";

// Logos optimizados y minimalistas
const WordPressLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <circle cx="16" cy="16" r="14" fill="#21759B"/>
    <path d="M4.5 16c0 4.2 2.4 7.8 5.9 9.6L5.3 11.5c-.5 1.4-.8 2.9-.8 4.5zm19.2-.5c0-1.3-.5-2.2-.9-2.9-.5-.9-1-1.6-1-2.5 0-1 .7-1.9 1.8-1.9h.1c-1.9-1.8-4.5-2.9-7.4-2.9-3.8 0-7.2 2-9.1 5h.7c1.2 0 3-.1 3-.1.6 0 .7.9.1 1 0 0-.6.1-1.3.1l4 12 2.4-7.3-1.7-4.7c-.6 0-1.2-.1-1.2-.1-.6 0-.5-1 .1-1 0 0 1.8.1 2.9.1 1.2 0 3-.1 3-.1.6 0 .7.9.1 1 0 0-.6.1-1.3.1l4 11.9 1.1-3.7c.5-1.5.8-2.6.8-3.5zM16.2 17l-3.3 9.7c1 .3 2 .4 3.1.4 1.3 0 2.5-.2 3.6-.6v-.1l-3.4-9.4zm9.1-5.9c.1.5.1 1 .1 1.5 0 1.5-.3 3.3-1.2 5.5l-4.6 13.2c4.4-2.6 7.4-7.4 7.4-12.9 0-2.6-.7-5.1-1.7-7.3z" fill="#fff"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#96588A"/>
    <path d="M5 10c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-6l-3 3-3-3H7c-1.1 0-2-.9-2-2v-9z" fill="#fff"/>
    <ellipse cx="10" cy="14" rx="1.2" ry="1.8" fill="#96588A"/>
    <ellipse cx="16" cy="14" rx="1.2" ry="1.8" fill="#96588A"/>
    <ellipse cx="22" cy="14" rx="1.2" ry="1.8" fill="#96588A"/>
  </svg>
);

const ShopifyLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <path d="M22.3 6c-.1-.1-1.5-.1-1.5-.1s-1.2-1.2-1.4-1.4c-.2-.2-.5-.1-.5-.1l-.7.2c-.4-1.2-1.1-2.3-2.4-2.3h-.2c-.4-.4-.8-.5-1.2-.5-2.9 0-4.3 3.6-4.7 5.4l-2 .6c-.6.2-.6.2-.7.8L5.5 25.5l13.2 2.5 7.1-1.7S22.4 6.1 22.3 6zM17 5.2l-1.9.6c0-.6-.1-1.3-.3-1.9.8.2 1.4.9 2.2 1.3zm-2.9.9l-4 1.2c.4-1.5 1.1-3 2.5-3.5.5.2 1 .5 1.3.9.1.4.2.9.2 1.4zm-1.6-3c.3 0 .6.1.8.3-.9.4-1.9 1.7-2.4 4.1l-3.2 1c.6-3 2.5-5.4 4.8-5.4z" fill="#95BF47"/>
    <path d="M20.8 5.9s-1.5-.1-1.5-.1-1.2-1.2-1.4-1.4c-.1-.1-.1-.1-.2-.1l-1 20.2 7.1-1.7-3.9-16.7c-.1-.1-.1-.2-.1-.2z" fill="#5E8E3E"/>
    <path d="M15.5 10.9l-.7 2.1s-.6-.3-1.4-.3c-1.1 0-1.2.7-1.2.9 0 1 2.5 1.4 2.5 3.7 0 1.8-1.2 3-2.7 3-1.9 0-2.8-1.2-2.8-1.2l.5-1.6s1 .9 1.8.9c.6 0 .8-.4.8-.8 0-1.3-2.1-1.3-2.1-3.5 0-1.8 1.3-3.5 3.9-3.5.7 0 1.4.3 1.4.3z" fill="#fff"/>
  </svg>
);

const VTEXLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#F71963"/>
    <path d="M7 12h3l4 8 4-8h3l-6 12h-2L7 12z" fill="#fff"/>
    <rect x="18" y="12" width="4" height="2" fill="#fff"/>
  </svg>
);

const GA4Logo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <path d="M26 16c0 5.5-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6s10 4.5 10 10z" fill="#F9AB00"/>
    <path d="M16 6v10l8.7 5c1.5-2.2 2.3-4.8 2.3-7.5C27 8.8 22.2 4 16.5 4c-.2 0-.3 0-.5 0v2z" fill="#E37400"/>
    <circle cx="16" cy="16" r="3.5" fill="#fff"/>
  </svg>
);

const GTMLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <path d="M16 2L4 8.5v15L16 30l12-6.5v-15L16 2z" fill="#8AB4F8"/>
    <path d="M16 10l-6 3.5v7L16 24l6-3.5v-7L16 10z" fill="#4285F4"/>
    <path d="M16 17l-6-3.5v7L16 24v-7z" fill="#246FDB"/>
  </svg>
);

const LookerLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#4285F4"/>
    <circle cx="16" cy="16" r="7" fill="#fff"/>
    <circle cx="16" cy="16" r="3.5" fill="#4285F4"/>
  </svg>
);

const HotjarLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#FF3C00"/>
    <path d="M16 28c2.5 0 4.5-2.2 4.5-5V18h-2v5c0 1.7-1.1 3-2.5 3s-2.5-1.3-2.5-3v-5h-2v5c0 2.8 2 5 4.5 5z" fill="#fff"/>
    <path d="M16 4c-2.5 0-4.5 2.2-4.5 5v5h2V9c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3v5h2V9c0-2.8-2-5-4.5-5z" fill="#fff"/>
  </svg>
);

const ClarityLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#5C2D91"/>
    <path d="M8 8h6v6H8V8z" fill="#F25022"/>
    <path d="M18 8h6v6h-6V8z" fill="#7FBA00"/>
    <path d="M8 18h6v6H8v-6z" fill="#00A4EF"/>
    <path d="M18 18h6v6h-6v-6z" fill="#FFB900"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#0866FF"/>
    <path d="M8 16c0-3.5 1.3-7 3.5-7 1.3 0 2.2 1.3 3.5 4 .4.9.8 1.8 1.2 2.7.4-.9.8-1.8 1.2-2.7 1.3-2.7 2.2-4 3.5-4 2.2 0 3.5 3.5 3.5 7s-1.3 7-3.5 7c-1.3 0-2.2-1.3-3.5-4-.4-.9-.8-1.8-1.2-2.7-.4.9-.8 1.8-1.2 2.7-1.3 2.7-2.2 4-3.5 4C9.3 23 8 19.5 8 16z" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GoogleAdsLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#fff"/>
    <path d="M7 21l7-12h4l7 12" fill="none" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="21" r="3.5" fill="#34A853"/>
    <circle cx="23" cy="21" r="3.5" fill="#FBBC04"/>
    <circle cx="16" cy="11" r="3.5" fill="#EA4335"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#000"/>
    <path d="M22 10a4.5 4.5 0 01-3.5-1.7V17a5 5 0 11-4.3-4.9v2.5a2.5 2.5 0 101.8 2.4V5h2.5A4.5 4.5 0 0022 10z" fill="#fff"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#0A66C2"/>
    <path d="M10 13h3v10h-3V13zm1.5-1c-1 0-1.7-.7-1.7-1.6s.7-1.6 1.7-1.6 1.7.7 1.7 1.6-.7 1.6-1.7 1.6zm12 11h-3v-5c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1v5.9h-3V13h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.3 1.3 3.3 4.1V23z" fill="#fff"/>
  </svg>
);

const MakeLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#6D00CC"/>
    <path d="M20 16l-7 4V12l7 4z" fill="#fff"/>
    <circle cx="16" cy="16" r="9" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const N8nLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#EA4B71"/>
    <circle cx="10" cy="16" r="2.5" fill="#fff"/>
    <circle cx="22" cy="16" r="2.5" fill="#fff"/>
    <path d="M12.5 16h7" stroke="#fff" strokeWidth="1.5"/>
    <circle cx="16" cy="10" r="2" fill="#fff"/>
    <circle cx="16" cy="22" r="2" fill="#fff"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#25D366"/>
    <path d="M16 6C10.5 6 6 10.5 6 16c0 1.7.4 3.3 1.2 4.7L6 26l5.5-1.4c1.3.7 2.8 1.1 4.5 1.1 5.5 0 10-4.5 10-10S21.5 6 16 6zm4.8 13.2c-.2.5-1.1 1-1.5 1-.4 0-.7-.1-2.3-.7-1.8-.7-3-2.5-3.1-2.6-.1-.1-.7-1-.7-1.9s.4-1.3.6-1.5c.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .5.4.2.4.6 1.5.7 1.6 0 .1 0 .2 0 .4-.1.1-.1.2-.2.3-.1.1-.2.3-.3.4-.1.1-.2.2-.1.4.1.2.5.9 1.2 1.4.8.7 1.5.9 1.8 1 .2.1.4.1.5-.1.1-.2.5-.6.7-.8.2-.2.3-.1.5-.1l1.5.7c.2.1.4.2.5.3 0 .1 0 .5-.2 1z" fill="#fff"/>
  </svg>
);

const GoHighLevelLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#0EA5E9"/>
    <path d="M16 7L7 11.5l9 4.5 9-4.5L16 7z" fill="#fff"/>
    <path d="M7 20l9 4.5 9-4.5" stroke="#fff" strokeWidth="1.5" fill="none"/>
    <path d="M7 15.5l9 4.5 9-4.5" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

const SendpulseLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#2C82C9"/>
    <path d="M8 11l8 5 8-5v10l-8-5-8 5V11z" fill="#fff"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <rect width="32" height="32" rx="6" fill="#FF7A59"/>
    <path d="M21 11v-1.5a1.5 1.5 0 10-3 0V11a4 4 0 00-2 1l-4.5-3.5a2 2 0 10-1.2 1.5l4.4 3.4a4 4 0 00.5 5.4l-1.4 1.4a1.5 1.5 0 101.1 1.1l1.4-1.4A4 4 0 1021 11z" fill="#fff"/>
    <circle cx="19.5" cy="15.5" r="2" fill="#FF7A59"/>
  </svg>
);

// Datos del embudo
const funnelStages = [
  {
    title: "Presencia Digital",
    subtitle: "Tu base en internet",
    icon: <Zap className="w-5 h-5" />,
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/50",
    borderColor: "border-violet-500/30",
    bgGlow: "bg-violet-500",
    tools: [
      { name: "WordPress", logo: <WordPressLogo /> },
      { name: "WooCommerce", logo: <WooCommerceLogo /> },
      { name: "Shopify", logo: <ShopifyLogo /> },
      { name: "VTEX", logo: <VTEXLogo /> },
    ],
  },
  {
    title: "Captura de Tráfico",
    subtitle: "Atraer demanda",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/50",
    borderColor: "border-blue-500/30",
    bgGlow: "bg-blue-500",
    tools: [
      { name: "Meta Ads", logo: <MetaLogo /> },
      { name: "Google Ads", logo: <GoogleAdsLogo /> },
      { name: "TikTok", logo: <TikTokLogo /> },
      { name: "LinkedIn", logo: <LinkedInLogo /> },
    ],
  },
  {
    title: "Medición & Análisis",
    subtitle: "Datos para decidir",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/50",
    borderColor: "border-emerald-500/30",
    bgGlow: "bg-emerald-500",
    tools: [
      { name: "GA4", logo: <GA4Logo /> },
      { name: "GTM", logo: <GTMLogo /> },
      { name: "Looker", logo: <LookerLogo /> },
      { name: "Hotjar", logo: <HotjarLogo /> },
      { name: "Clarity", logo: <ClarityLogo /> },
    ],
  },
  {
    title: "Conversión & Retención",
    subtitle: "Clientes que vuelven",
    icon: <Users className="w-5 h-5" />,
    color: "from-orange-500 to-rose-500",
    shadowColor: "shadow-orange-500/50",
    borderColor: "border-orange-500/30",
    bgGlow: "bg-orange-500",
    tools: [
      { name: "Make", logo: <MakeLogo /> },
      { name: "n8n", logo: <N8nLogo /> },
      { name: "WhatsApp", logo: <WhatsAppLogo /> },
      { name: "GHL", logo: <GoHighLevelLogo /> },
      { name: "Sendpulse", logo: <SendpulseLogo /> },
      { name: "HubSpot", logo: <HubSpotLogo /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="stack" className="py-24 md:py-32 relative overflow-hidden">
      {/* Fondo dramático */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      {/* Efectos de luz central */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/5 to-emerald-500/10 blur-[100px] rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header impactante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-primary border border-primary/20 mb-6"
          >
            Growth Marketing Stack
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="block text-foreground">Domino cada</span>
            <span className="block bg-gradient-to-r from-violet-500 via-blue-500 via-emerald-500 to-orange-500 bg-clip-text text-transparent">
              etapa del embudo
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            +20 herramientas conectadas en un ecosistema que convierte
          </p>
        </motion.div>

        {/* EMBUDO VISUAL 3D */}
        <div className="max-w-5xl mx-auto relative">
          {/* Línea central del embudo */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <div className="h-full bg-gradient-to-b from-violet-500 via-blue-500 via-emerald-500 to-orange-500 opacity-30" />
          </div>

          {/* Etapas del embudo */}
          <div className="space-y-6 md:space-y-8">
            {funnelStages.map((stage, index) => {
              // Anchos progresivos para efecto embudo
              const widths = ["100%", "92%", "84%", "76%"];
              const stageWidth = widths[index];
              
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="relative flex justify-center"
                  style={{ width: "100%" }}
                >
                  {/* Glow detrás de la card */}
                  <div 
                    className={`absolute inset-0 ${stage.bgGlow} opacity-10 blur-3xl rounded-full -z-10`}
                    style={{ width: stageWidth, margin: "0 auto" }}
                  />
                  
                  {/* Card principal */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                    style={{ width: stageWidth }}
                  >
                    {/* Borde gradiente */}
                    <div className={`absolute -inset-[1px] bg-gradient-to-r ${stage.color} rounded-2xl opacity-60`} />
                    
                    {/* Contenido */}
                    <div className={`relative bg-card/80 backdrop-blur-xl rounded-2xl border ${stage.borderColor} overflow-hidden`}>
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
                      
                      <div className="p-5 md:p-8">
                        {/* Header de la etapa */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            {/* Número de etapa */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-black text-lg shadow-lg ${stage.shadowColor}`}>
                              {index + 1}
                            </div>
                            
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-foreground">{stage.title}</h3>
                              <p className="text-sm text-muted-foreground">{stage.subtitle}</p>
                            </div>
                          </div>
                          
                          {/* Icono */}
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${stage.color} text-white hidden sm:flex shadow-lg ${stage.shadowColor}`}>
                            {stage.icon}
                          </div>
                        </div>
                        
                        {/* Herramientas */}
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                          {stage.tools.map((tool, toolIndex) => (
                            <motion.div
                              key={tool.name}
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.4, 
                                delay: 0.3 + index * 0.1 + toolIndex * 0.05,
                                type: "spring",
                                stiffness: 200
                              }}
                              whileHover={{ scale: 1.15, y: -4 }}
                              className="group relative"
                            >
                              <div className="relative p-3 md:p-4 rounded-xl bg-background/80 border border-border/50 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                                {tool.logo}
                              </div>
                              
                              {/* Tooltip */}
                              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {tool.name}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Flecha final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-10"
          >
            <div className="relative">
              <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-t-[30px] border-l-transparent border-r-transparent border-t-orange-500/60" />
              <div className="absolute inset-0 w-0 h-0 border-l-[40px] border-r-[40px] border-t-[30px] border-l-transparent border-r-transparent border-t-orange-500 blur-lg opacity-50" />
            </div>
          </motion.div>
          
          {/* Resultado final */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center mt-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-8 py-4 bg-background rounded-2xl border border-orange-500/30 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                  CONVERSIONES
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
