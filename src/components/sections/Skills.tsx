import React from "react";
import { motion } from "framer-motion";
import { Globe, Megaphone, BarChart3, Cog } from "lucide-react";

// Real logos from official sources (simple-icons + downloaded assets)
import wordpressSvg from "@/assets/logos/wordpress.svg";
import woocommerceSvg from "@/assets/logos/woocommerce.svg";
import shopifySvg from "@/assets/logos/shopify.svg";
import vtexSvg from "@/assets/logos/vtex.svg";
import metaSvg from "@/assets/logos/meta.svg";
import googleadsSvg from "@/assets/logos/googleads.svg";
import tiktokSvg from "@/assets/logos/tiktok.svg";
import linkedinPng from "@/assets/logos/linkedin.png";
import ga4Svg from "@/assets/logos/ga4.svg";
import gtmSvg from "@/assets/logos/gtm.svg";
import lookerSvg from "@/assets/logos/looker.svg";
import hotjarSvg from "@/assets/logos/hotjar.svg";
import makeSvg from "@/assets/logos/make.svg";
import n8nSvg from "@/assets/logos/n8n.svg";
import whatsappSvg from "@/assets/logos/whatsapp.svg";
import hubspotSvg from "@/assets/logos/hubspot.svg";

// Tool logo component with official brand colors
interface ToolLogoProps {
  src: string;
  alt: string;
  bgColor: string;
  filter?: string;
  objectFit?: string;
}

const ToolLogo: React.FC<ToolLogoProps> = ({ src, alt, bgColor, filter = "brightness(0) invert(1)", objectFit = "contain" }) => (
  <div
    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
    style={{ backgroundColor: bgColor }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full"
      style={{ objectFit: objectFit as React.CSSProperties["objectFit"], filter }}
      loading="lazy"
      decoding="async"
    />
  </div>
);

// LinkedIn uses its own PNG (already colored)
const LinkedInLogo = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden flex-shrink-0">
    <img
      src={linkedinPng}
      alt="LinkedIn"
      className="w-full h-full object-contain"
      loading="lazy"
      decoding="async"
    />
  </div>
);

// GoHighLevel — no SVG available, use styled text badge
const GoHighLevelLogo = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#F97316] flex items-center justify-center flex-shrink-0">
    <span className="text-white font-black text-[10px] leading-none text-center">High<br/>Level</span>
  </div>
);

// SendPulse — no SVG available, use styled badge
const SendpulseLogo = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2C82C9] flex items-center justify-center flex-shrink-0">
    <span className="text-white font-black text-[9px] leading-none text-center">Send<br/>Pulse</span>
  </div>
);

// Microsoft Clarity — no SVG available, use official brand color
const ClarityLogo = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#111111] flex items-center justify-center flex-shrink-0 p-1.5">
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <text x="24" y="34" textAnchor="middle" fill="#00BCF2" fontSize="32" fontWeight="bold" fontFamily="Segoe UI, Arial, sans-serif">C</text>
    </svg>
  </div>
);

// Datos de las categorías con enfoque 2x2
const categories = [
  {
    title: "Presencia Digital",
    subtitle: "Web & E-commerce",
    icon: Globe,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    tools: [
      {
        name: "WordPress",
        logo: <ToolLogo src={wordpressSvg} alt="WordPress" bgColor="#21759B" />,
      },
      {
        name: "WooCommerce",
        logo: <ToolLogo src={woocommerceSvg} alt="WooCommerce" bgColor="#96588A" />,
      },
      {
        name: "Shopify",
        logo: <ToolLogo src={shopifySvg} alt="Shopify" bgColor="#95BF47" />,
      },
      {
        name: "VTEX",
        logo: <ToolLogo src={vtexSvg} alt="VTEX" bgColor="#F71963" />,
      },
    ],
  },
  {
    title: "Captura de Tráfico",
    subtitle: "Paid Media & Ads",
    icon: Megaphone,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    tools: [
      {
        name: "Meta Ads",
        logo: <ToolLogo src={metaSvg} alt="Meta Ads" bgColor="#0866FF" />,
      },
      {
        name: "Google Ads",
        logo: <ToolLogo src={googleadsSvg} alt="Google Ads" bgColor="#FFFFFF" filter="none" />,
      },
      {
        name: "TikTok Ads",
        logo: <ToolLogo src={tiktokSvg} alt="TikTok Ads" bgColor="#000000" />,
      },
      {
        name: "LinkedIn Ads",
        logo: <LinkedInLogo />,
      },
    ],
  },
  {
    title: "Medición & Análisis",
    subtitle: "Analytics & Tracking",
    icon: BarChart3,
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    tools: [
      {
        name: "GA4",
        logo: <ToolLogo src={ga4Svg} alt="Google Analytics 4" bgColor="#FFFFFF" filter="none" />,
      },
      {
        name: "GTM",
        logo: <ToolLogo src={gtmSvg} alt="Google Tag Manager" bgColor="#FFFFFF" filter="none" />,
      },
      {
        name: "Looker Studio",
        logo: <ToolLogo src={lookerSvg} alt="Looker Studio" bgColor="#4285F4" />,
      },
      {
        name: "Hotjar",
        logo: <ToolLogo src={hotjarSvg} alt="Hotjar" bgColor="#FF3C00" />,
      },
      {
        name: "Clarity",
        logo: <ClarityLogo />,
      },
    ],
  },
  {
    title: "Conversión & Retención",
    subtitle: "CRM & Automatización",
    icon: Cog,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    tools: [
      {
        name: "Make",
        logo: <ToolLogo src={makeSvg} alt="Make" bgColor="#6D00CC" />,
      },
      {
        name: "n8n",
        logo: <ToolLogo src={n8nSvg} alt="n8n" bgColor="#EA4B71" />,
      },
      {
        name: "WhatsApp API",
        logo: <ToolLogo src={whatsappSvg} alt="WhatsApp" bgColor="#25D366" />,
      },
      {
        name: "GoHighLevel",
        logo: <GoHighLevelLogo />,
      },
      {
        name: "Sendpulse",
        logo: <SendpulseLogo />,
      },
      {
        name: "HubSpot",
        logo: <ToolLogo src={hubspotSvg} alt="HubSpot" bgColor="#FF7A59" />,
      },
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
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Herramientas que </span>
            <span className="text-gradient">Domino</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
                      <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
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
                        <div className="relative p-2 md:p-2.5 rounded-xl bg-background/80 border border-border/50 transition-all duration-300 group-hover/tool:border-primary/50 group-hover/tool:shadow-lg group-hover/tool:shadow-primary/20 group-hover/tool:bg-background">
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
