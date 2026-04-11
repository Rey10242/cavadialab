import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "CEO, TechStart Colombia",
    content: "Reynaldo transformó completamente nuestra estrategia digital. En solo 3 meses duplicamos nuestros leads cualificados y el ROI de nuestras campañas mejoró un 180%.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Marketing, Grupo Empresarial XYZ",
    content: "La automatización que implementó nos ahorró más de 20 horas semanales en tareas repetitivas. Un profesional excepcional con un enfoque muy orientado a resultados.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Fundadora, E-commerce Fashion",
    content: "Gracias a la estrategia de growth marketing de Reynaldo, nuestras ventas online crecieron un 250% en el primer trimestre.",
  },
  {
    id: 4,
    name: "Luis Hernández",
    role: "Gerente General, Servicios Profesionales SAS",
    content: "El chatbot con IA que implementó ha revolucionado nuestra atención al cliente. Ahora respondemos 24/7 y la satisfacción del cliente aumentó significativamente.",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const t = testimonials[currentIndex];

  return (
    <section id="testimonios" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">Testimonios</div>
          <h2 className="section-title">Lo que dicen</h2>
        </motion.div>

        <div
          className="max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="border-l-[3px] border-primary pl-6 sm:pl-8"
            >
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div>
                <span className="font-body text-sm font-bold text-foreground">{t.name}</span>
                <span className="text-muted-foreground text-sm"> — {t.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-px transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border w-4 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="text-[0.62rem] font-bold tracking-wider text-muted-foreground ml-auto">
              {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
