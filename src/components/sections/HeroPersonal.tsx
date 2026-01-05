import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import perfilReynaldo from "@/assets/perfil-reynaldo.png";

const HeroPersonal: React.FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Disponible para proyectos
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-foreground">Hola, soy </span>
              <span className="text-gradient">Reynaldo Montalvo</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Full Stack Marketer & Growth Expert
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Transformo ideas en máquinas de crecimiento digital. 
              Estrategia, automatización e IA para escalar tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="btn-primary-glow group"
                onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contáctame
              </Button>
            </div>
          </motion.div>

          {/* Photo Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-8 bg-gradient-to-tr from-secondary/30 via-primary/25 to-transparent rounded-full blur-2xl" />
              </div>
              
              {/* Profile Photo con máscara de gradiente inferior */}
              <img 
                src={perfilReynaldo} 
                alt="Reynaldo Montalvo - Full Stack Marketer" 
                className="relative z-10 w-72 h-auto md:w-80 lg:w-96 object-contain drop-shadow-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
                }}
              />
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -right-4 z-20 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg"
              >
                <span className="text-sm font-medium">+5 años exp.</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -left-4 z-20 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg"
              >
                <span className="text-sm font-medium">🚀 Growth Marketing</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPersonal;
