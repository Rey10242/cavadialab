import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Zap, 
  Code, 
  Bot,
  BarChart3,
  Target,
  Mail,
  MessageSquare,
  Globe,
  Database,
  Sparkles,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Marketing Digital",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Google Ads", level: 90 },
      { name: "Meta Ads", level: 85 },
      { name: "SEO", level: 80 },
      { name: "Google Analytics", level: 88 },
      { name: "Google Tag Manager", level: 85 },
    ],
    tools: [
      { name: "Google Ads", icon: Target },
      { name: "Meta Business", icon: BarChart3 },
      { name: "Looker Studio", icon: BarChart3 },
    ],
  },
  {
    title: "Automatización",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Make (Integromat)", level: 92 },
      { name: "n8n", level: 88 },
      { name: "WhatsApp API", level: 88 },
      { name: "CRM Integration", level: 82 },
      { name: "Workflows", level: 90 },
    ],
    tools: [
      { name: "Make", icon: Workflow },
      { name: "n8n", icon: Workflow },
      { name: "WhatsApp", icon: MessageSquare },
    ],
  },
  {
    title: "Desarrollo Web",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "React", level: 78 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Landing Pages", level: 90 },
      { name: "Funnels", level: 88 },
      { name: "No-Code Tools", level: 92 },
    ],
    tools: [
      { name: "React", icon: Code },
      { name: "Webflow", icon: Globe },
      { name: "Framer", icon: Globe },
    ],
  },
  {
    title: "IA & Herramientas",
    icon: Bot,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "ChatGPT / AI", level: 90 },
      { name: "Prompt Engineering", level: 85 },
      { name: "AI Chatbots", level: 82 },
      { name: "Content AI", level: 88 },
      { name: "AI Automation", level: 80 },
    ],
    tools: [
      { name: "ChatGPT", icon: Bot },
      { name: "Claude", icon: Bot },
      { name: "Midjourney", icon: Sparkles },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mi <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las herramientas y habilidades que uso para crear soluciones digitales efectivas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4 mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tools Icons */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Herramientas principales:</p>
                <div className="flex gap-3">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm"
                    >
                      <tool.icon className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
