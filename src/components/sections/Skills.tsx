import React from "react";
import { motion } from "framer-motion";

// Tool logos/icons as simple text badges for cleaner look
const stackCategories = [
  {
    title: "Paid Media",
    color: "from-blue-500 to-cyan-500",
    tools: [
      { name: "Meta Ads", emoji: "📘" },
      { name: "Google Ads", emoji: "🔍" },
      { name: "TikTok Ads", emoji: "🎵" },
      { name: "LinkedIn Ads", emoji: "💼" },
    ],
  },
  {
    title: "Analítica",
    color: "from-green-500 to-emerald-500",
    tools: [
      { name: "GA4", emoji: "📊" },
      { name: "Google Tag Manager", emoji: "🏷️" },
      { name: "Looker Studio", emoji: "📈" },
      { name: "Hotjar", emoji: "🔥" },
    ],
  },
  {
    title: "Automatización",
    color: "from-purple-500 to-pink-500",
    tools: [
      { name: "Make", emoji: "⚡" },
      { name: "n8n", emoji: "🔗" },
      { name: "WhatsApp API", emoji: "💬" },
      { name: "Zapier", emoji: "⚙️" },
    ],
  },
  {
    title: "CRM",
    color: "from-orange-500 to-red-500",
    tools: [
      { name: "HubSpot", emoji: "🧡" },
      { name: "GoHighLevel", emoji: "🚀" },
      { name: "ManyChat", emoji: "🤖" },
      { name: "ActiveCampaign", emoji: "📧" },
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
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-xl">{tool.emoji}</span>
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
