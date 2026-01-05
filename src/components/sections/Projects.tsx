import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["Todos", "Marketing", "Automatización", "Web", "IA"];

const projects = [
  {
    id: 1,
    title: "E-commerce Growth Strategy",
    description: "Estrategia integral de crecimiento para tienda online con +200% en ventas.",
    image: null,
    category: "Marketing",
    tags: ["Google Ads", "Meta Ads", "SEO"],
    results: "+200% ventas",
    link: "#",
  },
  {
    id: 2,
    title: "Automatización CRM",
    description: "Sistema de automatización completo para seguimiento de leads y clientes.",
    image: null,
    category: "Automatización",
    tags: ["Make", "WhatsApp API", "HubSpot"],
    results: "-60% tiempo manual",
    link: "#",
  },
  {
    id: 3,
    title: "Landing Page Conversión",
    description: "Diseño y desarrollo de landing page con alta tasa de conversión.",
    image: null,
    category: "Web",
    tags: ["React", "Tailwind", "Lovable"],
    results: "12% conversión",
    link: "#",
  },
  {
    id: 4,
    title: "Chatbot IA Atención",
    description: "Implementación de chatbot con IA para atención al cliente 24/7.",
    image: null,
    category: "IA",
    tags: ["ChatGPT", "WhatsApp", "Node.js"],
    results: "24/7 atención",
    link: "#",
  },
  {
    id: 5,
    title: "Funnel de Ventas B2B",
    description: "Embudo de ventas automatizado para empresa de servicios B2B.",
    image: null,
    category: "Marketing",
    tags: ["Email Marketing", "CRM", "Ads"],
    results: "+150 leads/mes",
    link: "#",
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "Panel de control personalizado para métricas de negocio en tiempo real.",
    image: null,
    category: "Web",
    tags: ["React", "Supabase", "Charts"],
    results: "Datos en tiempo real",
    link: "#",
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en marketing digital, 
            automatización y desarrollo web.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all"
            >
              {category === "Todos" && <Filter className="w-4 h-4 mr-1" />}
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg"
              >
                {/* Project Image/Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  {/* Result Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {project.results}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="gap-2">
                      Ver Proyecto <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note for adding real projects */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          💡 Estos son proyectos de ejemplo. Reemplázalos con tus proyectos reales.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
