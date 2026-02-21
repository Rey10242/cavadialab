import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, ArrowRight, TrendingUp, Target } from "lucide-react";
import { motion } from "framer-motion";
import perfilReynaldo from "@/assets/perfil-reynaldo.png";

const HeroPersonal: React.FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Dots grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

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
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Disponible para proyectos
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-foreground">Hola, soy </span>
              <span className="text-gradient">Reynaldo Montalvo Cavadia</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary font-medium mb-2">
              Full Stack Marketer & Growth Expert
            </p>

            <p className="text-lg md:text-xl font-semibold text-foreground mb-4" style={{
              textShadow: '0 0 40px hsl(var(--primary) / 0.15)'
            }}>
              Hago que tu negocio venda más, con orden y sin improvisar.
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Te ayudo a atraer clientes potenciales, convertirlos en ventas y crecer 
              de forma sostenible, sin desperdiciar dinero en campañas que no funcionan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="btn-primary-glow group"
                onClick={() => window.open("https://wa.me/573246875354", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Agendar conversación
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={() => document.getElementById("proceso")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver cómo lo hago
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              {/* Rotating gradient aura ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--primary) / 0.3), hsl(var(--violet) / 0.2), hsl(var(--pink) / 0.15), hsl(var(--cyan) / 0.2), hsl(var(--primary) / 0.3))',
                  filter: 'blur(40px)',
                }}
              />
              
              {/* Inner glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/15 rounded-full blur-2xl animate-pulse-glow [animation-duration:4s]" />
              </div>
              
              {/* Profile Photo */}
              <img 
                src={perfilReynaldo} 
                alt="Reynaldo Montalvo Cavadia - Consultor de crecimiento empresarial" 
                className="relative z-10 w-72 h-auto md:w-80 lg:w-96 object-contain drop-shadow-2xl"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
                }}
              />
              
              {/* Floating badges with glow borders */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -right-4 z-20 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl px-3 py-2 shadow-lg shadow-primary/10"
              >
                <span className="text-sm font-medium flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  +8 años exp.
                </span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 -left-4 z-20 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl px-3 py-2 shadow-lg shadow-primary/10"
              >
                <span className="text-sm font-medium">🚀 +50 proyectos</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 -right-8 z-20 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl px-3 py-2 shadow-lg shadow-primary/10"
              >
                <span className="text-sm font-medium flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-primary" />
                  Resultados reales
                </span>
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
            onClick={() => document.getElementById("el-problema")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPersonal;
