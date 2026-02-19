import React from "react";
import { motion } from "framer-motion";
import { Globe, Megaphone, BarChart3, Cog } from "lucide-react";

// ── Official logos downloaded from brand guidelines & official CDNs ──
import wordpressPng from "@/assets/logos/wordpress.png";
import woocommercePng from "@/assets/logos/woocommerce.png";
import shopifyPng from "@/assets/logos/shopify.png";
import vtexSvg from "@/assets/logos/vtex-official.svg";   // brand.vtex.com official
import metaPng from "@/assets/logos/meta.png";
import googleadsPng from "@/assets/logos/googleads.png";
import tiktokPng from "@/assets/logos/tiktok.png";
import linkedinPng from "@/assets/logos/linkedin.png";
import ga4Png from "@/assets/logos/ga4.png";
import gtmPng from "@/assets/logos/gtm.png";
import lookerPng from "@/assets/logos/looker.png";
import hotjarPng from "@/assets/logos/hotjar.png";
import clarityPng from "@/assets/logos/clarity.png";     // clarity.microsoft.com/static
import makePng from "@/assets/logos/make.png";           // make.com apple-touch-icon
import n8nSvg from "@/assets/logos/n8n-official.svg";   // n8n.io brand guidelines
import whatsappPng from "@/assets/logos/whatsapp.png";
import gohighlevelPng from "@/assets/logos/gohighlevel.png"; // highlevel.com official
import sendpulsePng from "@/assets/logos/sendpulse.png";
import hubspotPng from "@/assets/logos/hubspot.png";

// ── Generic logo container ──
interface LogoBadgeProps {
  src: string;
  alt: string;
  /** CSS background colour string — only needed when logo needs contrast */
  bg?: string;
  /** Whether to apply object-contain (default true) */
  contain?: boolean;
}

const LogoBadge: React.FC<LogoBadgeProps> = ({ src, alt, bg, contain = true }) => (
  <div
    className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
    style={{ background: bg ?? "transparent" }}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full"
      style={{ objectFit: contain ? "contain" : "cover" }}
    />
  </div>
);

// ── Tool definitions per category ──
const categories = [
  {
    title: "Presencia Digital",
    subtitle: "Web & E-commerce",
    icon: Globe,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    tools: [
      { name: "WordPress",   logo: <LogoBadge src={wordpressPng}   alt="WordPress"   bg="#21759B" /> },
      { name: "WooCommerce", logo: <LogoBadge src={woocommercePng} alt="WooCommerce" bg="#96588A" /> },
      { name: "Shopify",     logo: <LogoBadge src={shopifyPng}     alt="Shopify"     bg="#95BF47" /> },
      {
        name: "VTEX",
        logo: (
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 flex-shrink-0">
            <img src={vtexSvg} alt="VTEX" loading="lazy" decoding="async" className="w-full h-auto" />
          </div>
        ),
      },
    ],
  },
  {
    title: "Captura de Tráfico",
    subtitle: "Paid Media & Ads",
    icon: Megaphone,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    tools: [
      { name: "Meta Ads",    logo: <LogoBadge src={metaPng}      alt="Meta Ads"     bg="#0866FF" /> },
      { name: "Google Ads",  logo: <LogoBadge src={googleadsPng} alt="Google Ads"   bg="#FFFFFF" /> },
      { name: "TikTok Ads",  logo: <LogoBadge src={tiktokPng}    alt="TikTok Ads"   bg="#010101" /> },
      { name: "LinkedIn Ads",logo: <LogoBadge src={linkedinPng}  alt="LinkedIn Ads" /> },
    ],
  },
  {
    title: "Medición & Análisis",
    subtitle: "Analytics & Tracking",
    icon: BarChart3,
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    tools: [
      { name: "GA4",          logo: <LogoBadge src={ga4Png}      alt="Google Analytics 4"   bg="#FFFFFF" /> },
      { name: "GTM",          logo: <LogoBadge src={gtmPng}      alt="Google Tag Manager"    bg="#FFFFFF" /> },
      { name: "Looker Studio",logo: <LogoBadge src={lookerPng}   alt="Looker Studio"         bg="#FFFFFF" /> },
      { name: "Hotjar",       logo: <LogoBadge src={hotjarPng}   alt="Hotjar"                bg="#FF3C00" /> },
      { name: "Clarity",      logo: <LogoBadge src={clarityPng}  alt="Microsoft Clarity"     bg="#FFFFFF" /> },
    ],
  },
  {
    title: "Conversión & Retención",
    subtitle: "CRM & Automatización",
    icon: Cog,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    tools: [
      { name: "Make",          logo: <LogoBadge src={makePng}          alt="Make"          bg="#6D00CC" /> },
      {
        name: "n8n",
        logo: (
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 flex-shrink-0">
            <img src={n8nSvg} alt="n8n" loading="lazy" decoding="async" className="w-full h-auto" />
          </div>
        ),
      },
      { name: "WhatsApp API",  logo: <LogoBadge src={whatsappPng}      alt="WhatsApp"      bg="#25D366" /> },
      { name: "GoHighLevel",   logo: <LogoBadge src={gohighlevelPng}   alt="GoHighLevel"   bg="#FFFFFF" /> },
      { name: "Sendpulse",     logo: <LogoBadge src={sendpulsePng}     alt="SendPulse"     bg="#2C82C9" /> },
      { name: "HubSpot",       logo: <LogoBadge src={hubspotPng}       alt="HubSpot"       bg="#FF7A59" /> },
    ],
  },
];

// ── Section ──
const Skills: React.FC = () => (
  <section id="stack" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
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

      {/* 2×2 grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative"
          >
            {/* Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

            {/* Card */}
            <div className="relative h-full">
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${category.gradient} rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />

              <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 p-6 md:p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl overflow-hidden" />

                {/* Category header */}
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

                {/* Tools */}
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
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.15, y: -5, rotate: 3 }}
                      className="group/tool relative"
                    >
                      <div className="relative p-2 rounded-xl bg-background/80 border border-border/50 transition-all duration-300 group-hover/tool:border-primary/50 group-hover/tool:shadow-lg group-hover/tool:shadow-primary/20 group-hover/tool:bg-background">
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

      {/* Bottom badge */}
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

export default Skills;
