import React from "react";
import { motion } from "framer-motion";

// SVG Logo Components
const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#0866FF"/>
  </svg>
);

const GoogleAdsLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M3.291 8.42l5.58 9.66c.76 1.32 2.46 1.76 3.77 1l1.97-1.14-7.35-12.73-3.97 3.21z" fill="#FBBC04"/>
    <path d="M20.71 15.57L15.13 5.91c-.76-1.32-2.46-1.76-3.77-1L9.39 6l7.35 12.73 3.97-3.16z" fill="#4285F4"/>
    <circle cx="5.29" cy="18.71" r="3.29" fill="#34A853"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="#000"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
  </svg>
);

const GA4Logo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M22.84 2.9982v17.004c-.0032 1.1032-.8982 1.9964-2.0016 1.9982H12.8384V12.8366h9.1632c.5765.0295 1.0402.4945 1.0398 1.071v8.9322h-8.2414v-9.1648c-.0295-.5765.4945-1.0402 1.071-1.0398h8.9322z" fill="#F9AB00"/>
    <path d="M2.1584 12.8366c-.5765-.0295-1.0402-.4945-1.0398-1.071V2.8334h8.2414v9.1648c.0295.5765-.4945 1.0402-1.071 1.0398H2.1584v-.001zm0 9.1648c-1.1034-.0018-1.9984-.8948-2.0016-1.998V13.999c-.0295-.5766.4945-1.0402 1.071-1.0398h8.9322c.0018 1.1034.8948 1.9984 1.998 2.0016v7.004c.0295.5765-.4945 1.0402-1.071 1.0398l-8.9296.0008z" fill="#E37400"/>
  </svg>
);

const GTMLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12.003 0L1.5 6v12l10.503 6L22.5 18V6L12.003 0z" fill="#8AB4F8"/>
    <path d="M12 7.5l-4.5 2.6v5.2l4.5 2.6 4.5-2.6v-5.2L12 7.5z" fill="#4285F4"/>
    <path d="M12 12.6l-4.5-2.6v5.2l4.5 2.6V12.6z" fill="#246FDB"/>
  </svg>
);

const LookerLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#fff"/>
    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#4285F4"/>
  </svg>
);

const HotjarLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 24c2.21 0 4-2.015 4-4.5V15h-2v4.5c0 1.38-.895 2.5-2 2.5s-2-1.12-2-2.5V15H8v4.5c0 2.485 1.79 4.5 4 4.5z" fill="#FF3C00"/>
    <path d="M12 0C9.79 0 8 2.015 8 4.5V9h2V4.5C10 3.12 10.895 2 12 2s2 1.12 2 2.5V9h2V4.5C16 2.015 14.21 0 12 0z" fill="#FF3C00"/>
    <path d="M16 11h-2v4h-4v-4H8v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4z" fill="#FF3C00"/>
    <path d="M8 13h2V9h4v4h2V9c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4z" fill="#FF3C00"/>
  </svg>
);

const MakeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#6D00CC"/>
    <path d="M16.5 12l-6.75 3.897V8.103L16.5 12z" fill="#fff"/>
  </svg>
);

const N8nLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="4" fill="#EA4B71"/>
    <path d="M7 8h2v8H7V8zm4 0h2v8h-2V8zm4 0h2v8h-2V8z" fill="#fff"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
  </svg>
);

const ZapierLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M15.477 12.89l2.867-2.867a6.505 6.505 0 000-2.046l-2.867-2.867a6.505 6.505 0 00-2.046 0L10.564 8l-2.867-2.867a6.505 6.505 0 00-2.046 0L2.784 8A6.505 6.505 0 002.784 10.046L5.651 12.913l-2.867 2.867a6.505 6.505 0 000 2.046l2.867 2.867a6.505 6.505 0 002.046 0l2.867-2.867 2.867 2.867a6.505 6.505 0 002.046 0l2.867-2.867a6.505 6.505 0 000-2.046l-2.867-2.89z" fill="#FF4A00"/>
    <circle cx="12" cy="12" r="3.5" fill="#fff"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984 2.211 2.211 0 00-4.42 0c0 .873.52 1.622 1.262 1.973v2.857a5.573 5.573 0 00-2.705 1.443l-7.166-5.57a2.47 2.47 0 00.087-.62 2.482 2.482 0 10-2.482 2.481c.426 0 .825-.112 1.173-.302l7.032 5.468a5.583 5.583 0 00-.506 2.326c0 .847.19 1.65.527 2.37l-2.165 2.165a1.88 1.88 0 00-.542-.086 1.895 1.895 0 101.896 1.895c0-.19-.03-.373-.084-.545l2.134-2.134a5.582 5.582 0 103.692-11.421zm-.002 8.626a2.768 2.768 0 110-5.536 2.768 2.768 0 010 5.536z" fill="#FF7A59"/>
  </svg>
);

const GoHighLevelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#0EA5E9"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0EA5E9" strokeWidth="2" fill="none"/>
  </svg>
);

const ManyChatLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2a1 1 0 001.254 1.254l3.032-.892A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#0084FF"/>
    <circle cx="8" cy="12" r="1.5" fill="#fff"/>
    <circle cx="12" cy="12" r="1.5" fill="#fff"/>
    <circle cx="16" cy="12" r="1.5" fill="#fff"/>
  </svg>
);

const ActiveCampaignLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#356AE6"/>
    <path d="M16.5 8.5l-6 7-3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Tool data with logo components
const stackCategories = [
  {
    title: "Paid Media",
    color: "from-blue-500 to-cyan-500",
    tools: [
      { name: "Meta Ads", logo: <MetaLogo /> },
      { name: "Google Ads", logo: <GoogleAdsLogo /> },
      { name: "TikTok Ads", logo: <TikTokLogo /> },
      { name: "LinkedIn Ads", logo: <LinkedInLogo /> },
    ],
  },
  {
    title: "Analítica",
    color: "from-green-500 to-emerald-500",
    tools: [
      { name: "GA4", logo: <GA4Logo /> },
      { name: "Google Tag Manager", logo: <GTMLogo /> },
      { name: "Looker Studio", logo: <LookerLogo /> },
      { name: "Hotjar", logo: <HotjarLogo /> },
    ],
  },
  {
    title: "Automatización",
    color: "from-purple-500 to-pink-500",
    tools: [
      { name: "Make", logo: <MakeLogo /> },
      { name: "n8n", logo: <N8nLogo /> },
      { name: "WhatsApp API", logo: <WhatsAppLogo /> },
      { name: "Zapier", logo: <ZapierLogo /> },
    ],
  },
  {
    title: "CRM",
    color: "from-orange-500 to-red-500",
    tools: [
      { name: "HubSpot", logo: <HubSpotLogo /> },
      { name: "GoHighLevel", logo: <GoHighLevelLogo /> },
      { name: "ManyChat", logo: <ManyChatLogo /> },
      { name: "ActiveCampaign", logo: <ActiveCampaignLogo /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="stack" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mi Stack de <span className="text-gradient">Growth & Paid Media</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las plataformas y herramientas que domino para ejecutar estrategias de crecimiento efectivas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              {/* Category Header */}
              <div className="mb-5">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-3`}>
                  {category.title}
                </div>
              </div>

              {/* Tools List */}
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + toolIndex * 0.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {tool.logo}
                    </div>
                    <span className="text-foreground font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
