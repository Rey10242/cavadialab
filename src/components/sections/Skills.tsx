import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Official Favicon-style Logo Components

// Web & E-commerce
const WordPressLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <circle cx="16" cy="16" r="16" fill="#21759B"/>
    <path d="M3.7 16c0 4.5 2.6 8.4 6.4 10.3L4.5 11.1C4 12.6 3.7 14.3 3.7 16zm20.6-.6c0-1.4-.5-2.4-1-3.1-.6-1-1.2-1.8-1.2-2.8 0-1.1.8-2.1 2-2.1h.2c-2.1-2-5-3.1-8.1-3.1-4.2 0-7.9 2.2-10 5.4h.8c1.3 0 3.2-.2 3.2-.2.7 0 .7 1 .1 1.1 0 0-.7.1-1.4.1l4.4 13.1 2.6-7.9-1.9-5.2c-.6 0-1.3-.1-1.3-.1-.7 0-.6-1.1.1-1.1 0 0 2 .2 3.2.2 1.3 0 3.2-.2 3.2-.2.7 0 .7 1 .1 1.1 0 0-.7.1-1.4.1l4.4 13 1.2-4c.5-1.7.9-2.9.9-4zM16.3 17.4l-3.6 10.6c1.1.3 2.2.5 3.4.5 1.4 0 2.7-.2 4-.7l-.1-.1-3.7-10.3zm10-6.5c.1.5.1 1.1.1 1.7 0 1.7-.3 3.6-1.3 6l-5 14.5c4.9-2.8 8.1-8.1 8.1-14.1 0-3-0.8-5.7-2-8.1z" fill="#fff"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#96588A"/>
    <path d="M5 10c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-6l-3 3-3-3H7c-1.1 0-2-.9-2-2v-9z" fill="#fff"/>
    <ellipse cx="10" cy="14" rx="1.5" ry="2" fill="#96588A"/>
    <ellipse cx="16" cy="14" rx="1.5" ry="2" fill="#96588A"/>
    <ellipse cx="22" cy="14" rx="1.5" ry="2" fill="#96588A"/>
  </svg>
);

const ShopifyLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <path d="M23.5 6.5c0-.1-.1-.2-.2-.2-.1 0-1.9-.1-1.9-.1s-1.5-1.5-1.7-1.7c-.2-.2-.5-.1-.6-.1l-.8.3c-.1-.3-.3-.6-.5-.9-.7-1.1-1.8-1.7-3.1-1.7h-.1c-.1-.1-.2-.2-.3-.2-1.1-1-2.4-.4-3 .1-.8.6-1.6 1.8-2.2 3.3-.9 2.1-1.4 4.8-1.6 6.1H4.2c-.7 0-.7.6-.7.6L2 27.5l16.5 3 9-2.2s-3.9-21.6-4-21.8zM17.7 7.3l-2.5.8c0-.8-.1-1.9-.4-2.9 1.2.3 1.8 1.5 2.1 2.5-.4-.2-.8-.4-.8-.4h1.6zm-3.5 1.1l-3.6 1.1c.3-1.3.9-2.6 1.7-3.5.3-.3.7-.7 1.2-.9.5 1 .7 2.3.7 3.3zm-2.1-5c.4 0 .7.1 1 .3-.5.2-.9.5-1.3 1-1 1.1-1.8 2.8-2.1 4.4l-2.9.9c.5-2.7 2.5-6.5 5.3-6.6z" fill="#95BF47"/>
    <path d="M23.3 6.3c-.1 0-1.9-.1-1.9-.1s-1.5-1.5-1.7-1.7c-.1-.1-.2-.1-.2-.1l-1.3 26.6 9-2.2s-3.9-21.6-4-21.8c0-.5-.1-.6-.2-.7h.3z" fill="#5E8E3E"/>
    <path d="M16.8 11.3l-.9 2.7s-.8-.4-1.8-.4c-1.4 0-1.5.9-1.5 1.1 0 1.2 3.2 1.7 3.2 4.6 0 2.3-1.4 3.7-3.4 3.7-2.3 0-3.5-1.5-3.5-1.5l.6-2s1.2 1.1 2.3 1.1c.7 0 1-.6 1-1 0-1.6-2.6-1.7-2.6-4.3 0-2.2 1.6-4.4 4.8-4.4.8-.1 1.8.4 1.8.4z" fill="#fff"/>
  </svg>
);

const VTEXLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#F71963"/>
    <path d="M7 11h3.5l3.5 7 3.5-7H21l-6 12h-2L7 11z" fill="#fff"/>
    <path d="M19 11h4v2h-4v-2z" fill="#fff"/>
  </svg>
);

// Analytics
const GA4Logo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <path d="M26 16c0 5.5-4.5 10-10 10S6 21.5 6 16 10.5 6 16 6s10 4.5 10 10z" fill="#F9AB00"/>
    <path d="M16 6v10l8.7 5c1.5-2.2 2.3-4.8 2.3-7.5C27 8.8 22.2 4 16.5 4c-.2 0-.3 0-.5 0v2z" fill="#E37400"/>
    <circle cx="16" cy="16" r="4" fill="#fff"/>
  </svg>
);

const GTMLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <path d="M16 2L4 8.5v15L16 30l12-6.5v-15L16 2z" fill="#8AB4F8"/>
    <path d="M16 10l-6 3.5v7L16 24l6-3.5v-7L16 10z" fill="#4285F4"/>
    <path d="M16 17l-6-3.5v7L16 24v-7z" fill="#246FDB"/>
  </svg>
);

const LookerLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#4285F4"/>
    <circle cx="16" cy="16" r="8" fill="#fff"/>
    <circle cx="16" cy="16" r="4" fill="#4285F4"/>
    <circle cx="16" cy="16" r="2" fill="#fff"/>
  </svg>
);

const HotjarLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#FF3C00"/>
    <path d="M16 28c2.8 0 5-2.5 5-5.6V17h-2.5v5.4c0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1V17H11v5.4c0 3.1 2.2 5.6 5 5.6z" fill="#fff"/>
    <path d="M16 4c-2.8 0-5 2.5-5 5.6V15h2.5V9.6c0-1.7 1.1-3.1 2.5-3.1s2.5 1.4 2.5 3.1V15H21V9.6C21 6.5 18.8 4 16 4z" fill="#fff"/>
  </svg>
);

const ClarityLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#5C2D91"/>
    <path d="M8 8h7v7H8V8z" fill="#F25022"/>
    <path d="M17 8h7v7h-7V8z" fill="#7FBA00"/>
    <path d="M8 17h7v7H8v-7z" fill="#00A4EF"/>
    <path d="M17 17h7v7h-7v-7z" fill="#FFB900"/>
  </svg>
);

// Paid Media - Meta infinity logo
const MetaLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#0866FF"/>
    <path d="M8 16c0-4 1.5-8 4-8 1.5 0 2.5 1.5 4 4.5.5 1 1 2 1.5 3 .5-1 1-2 1.5-3C20.5 9.5 21.5 8 23 8c2.5 0 4 4 4 8s-1.5 8-4 8c-1.5 0-2.5-1.5-4-4.5-.5-1-1-2-1.5-3-.5 1-1 2-1.5 3-1.5 3-2.5 4.5-4 4.5-2.5 0-4-4-4-8z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Google Ads - Official tricolor logo
const GoogleAdsLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#fff"/>
    <path d="M6 22l8-14h4l8 14" fill="none" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="22" r="4" fill="#34A853"/>
    <circle cx="24" cy="22" r="4" fill="#FBBC04"/>
    <circle cx="16" cy="10" r="4" fill="#EA4335"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#000"/>
    <path d="M23 9.5a5.5 5.5 0 01-4.5-2.3V18a6 6 0 11-5.1-5.9v3a3 3 0 102.1 2.9V4h3a5.5 5.5 0 004.5 5.5v3z" fill="#fff"/>
    <path d="M23 9.5a5.5 5.5 0 01-4.5-2.3V18a6 6 0 11-5.1-5.9v3a3 3 0 102.1 2.9V4h3a5.5 5.5 0 004.5 5.5v3z" fill="#25F4EE" style={{clipPath: 'inset(0 50% 0 0)'}}/>
    <path d="M23 9.5a5.5 5.5 0 01-4.5-2.3V18a6 6 0 11-5.1-5.9v3a3 3 0 102.1 2.9V4h3a5.5 5.5 0 004.5 5.5v3z" fill="#FE2C55" style={{clipPath: 'inset(0 0 0 50%)', transform: 'translate(1px, 1px)'}}/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#0A66C2"/>
    <path d="M10 13h3v10h-3V13zm1.5-1c-1 0-1.8-.8-1.8-1.8S10.5 8.5 11.5 8.5s1.8.8 1.8 1.8-.8 1.7-1.8 1.7zm12.5 11h-3v-5.3c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.3v6.2h-3V13h3v1.4c.4-.6 1.3-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5V23z" fill="#fff"/>
  </svg>
);

// CRM & Automation
const MakeLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#6D00CC"/>
    <path d="M20 16l-8 4.6V11.4L20 16z" fill="#fff"/>
    <circle cx="16" cy="16" r="10" stroke="#fff" strokeWidth="2" fill="none"/>
  </svg>
);

const N8nLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#EA4B71"/>
    <circle cx="10" cy="16" r="3" fill="#fff"/>
    <circle cx="22" cy="16" r="3" fill="#fff"/>
    <path d="M13 16h6" stroke="#fff" strokeWidth="2"/>
    <circle cx="16" cy="10" r="2.5" fill="#fff"/>
    <circle cx="16" cy="22" r="2.5" fill="#fff"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#25D366"/>
    <path d="M16 6C10.5 6 6 10.5 6 16c0 1.8.5 3.4 1.3 4.9L6 26l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S21.5 6 16 6zm5.1 13.8c-.2.6-1.2 1.2-1.7 1.2-.4 0-.8-.2-2.5-.8-2-.8-3.3-2.8-3.4-2.9-.1-.1-.8-1.1-.8-2.1s.5-1.5.7-1.7c.2-.2.4-.3.6-.3h.4c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.2.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.5.1.3.6 1 1.4 1.6.9.8 1.7 1 2 1.2.2.1.4.1.5-.1.1-.2.6-.7.8-.9.2-.2.3-.2.5-.1l1.7.8c.2.1.4.2.5.3.1.2.1.6-.1 1.2z" fill="#fff"/>
  </svg>
);

const GoHighLevelLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#0EA5E9"/>
    <path d="M16 6L6 11l10 5 10-5-10-5z" fill="#fff"/>
    <path d="M6 21l10 5 10-5" stroke="#fff" strokeWidth="2" fill="none"/>
    <path d="M6 16l10 5 10-5" stroke="#fff" strokeWidth="2" fill="none"/>
  </svg>
);

const SendpulseLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#2C82C9"/>
    <path d="M8 10l8 6 8-6v12l-8-6-8 6V10z" fill="#fff"/>
    <path d="M8 10l8 6 8-6" stroke="#fff" strokeWidth="2" fill="none"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#FF7A59"/>
    <path d="M22 11v-2a2 2 0 10-4 0v2a5 5 0 00-2.5 1.3l-5.3-4.1a2.5 2.5 0 10-1.4 1.8l5.2 4a5 5 0 00.5 6.8l-1.6 1.6a1.8 1.8 0 101.3 1.3l1.6-1.6A5 5 0 1022 11z" fill="#fff"/>
    <circle cx="20" cy="16" r="2.5" fill="#FF7A59"/>
  </svg>
);

// Funnel stages data
const funnelStages = [
  {
    title: "Presencia Digital",
    description: "Tu base en internet",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    glowColor: "violet",
    width: "100%",
    tools: [
      { name: "WordPress", logo: <WordPressLogo /> },
      { name: "WooCommerce", logo: <WooCommerceLogo /> },
      { name: "Shopify", logo: <ShopifyLogo /> },
      { name: "VTEX", logo: <VTEXLogo /> },
    ],
  },
  {
    title: "Captura de Tráfico",
    description: "Atraer demanda calificada",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    glowColor: "blue",
    width: "85%",
    tools: [
      { name: "Meta Ads", logo: <MetaLogo /> },
      { name: "Google Ads", logo: <GoogleAdsLogo /> },
      { name: "TikTok Ads", logo: <TikTokLogo /> },
      { name: "LinkedIn Ads", logo: <LinkedInLogo /> },
    ],
  },
  {
    title: "Medición & Análisis",
    description: "Datos para decidir",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    glowColor: "emerald",
    width: "70%",
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
    description: "Clientes que vuelven",
    gradient: "from-orange-600 via-rose-600 to-pink-600",
    glowColor: "orange",
    width: "55%",
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
    <section id="stack" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Dramatic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-violet-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-orange-500/15 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-emerald-500/20 text-primary text-sm font-semibold border border-primary/30 backdrop-blur-sm">
              Growth Marketing Stack
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Dominio <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">Full-Funnel</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            De la primera impresión hasta la conversión final — cada etapa optimizada.
          </p>
        </motion.div>

        {/* Funnel visualization */}
        <div className="max-w-4xl mx-auto space-y-4">
          {funnelStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center"
            >
              {/* Connecting arrow */}
              {index > 0 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
                  className="absolute -top-4 z-10"
                >
                  <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
                </motion.div>
              )}

              {/* Stage card */}
              <div 
                className="w-full transition-all duration-500"
                style={{ maxWidth: stage.width }}
              >
                <div className={`
                  relative group overflow-hidden
                  bg-gradient-to-r ${stage.gradient}
                  rounded-2xl p-[2px]
                  shadow-lg shadow-${stage.glowColor}-500/20
                  hover:shadow-xl hover:shadow-${stage.glowColor}-500/30
                  transition-all duration-500
                  hover:scale-[1.02]
                `}>
                  {/* Inner content */}
                  <div className="relative bg-background/95 backdrop-blur-xl rounded-[14px] p-5 md:p-6">
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[14px]`} />
                    
                    {/* Stage number badge */}
                    <div className="absolute -top-3 left-6">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${stage.gradient} text-white text-xs font-bold shadow-lg`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Header row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 pt-2">
                      <div className="mb-3 md:mb-0">
                        <h3 className="text-lg md:text-xl font-bold text-foreground">{stage.title}</h3>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>

                    {/* Tools row */}
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                      {stage.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + toolIndex * 0.05 }}
                          className="group/tool flex flex-col items-center gap-1.5"
                        >
                          <div className="p-2.5 md:p-3 rounded-xl bg-muted/50 border border-border/50 group-hover/tool:border-primary/30 group-hover/tool:bg-muted transition-all duration-300 group-hover/tool:scale-110 group-hover/tool:shadow-lg">
                            {tool.logo}
                          </div>
                          <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover/tool:text-foreground transition-colors">
                            {tool.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-emerald-500/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              +20 herramientas integradas en un solo flujo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
