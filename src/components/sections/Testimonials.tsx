import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "CEO",
    company: "TechStart Colombia",
    image: null,
    content: "Reynaldo transformó completamente nuestra estrategia digital. En solo 3 meses duplicamos nuestros leads cualificados y el ROI de nuestras campañas mejoró un 180%.",
    rating: 5,
    linkedIn: "#",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Marketing",
    company: "Grupo Empresarial XYZ",
    image: null,
    content: "La automatización que implementó nos ahorró más de 20 horas semanales en tareas repetitivas. Un profesional excepcional con un enfoque muy orientado a resultados.",
    rating: 5,
    linkedIn: "#",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Fundadora",
    company: "E-commerce Fashion",
    image: null,
    content: "Gracias a la estrategia de growth marketing de Reynaldo, nuestras ventas online crecieron un 250% en el primer trimestre. Totalmente recomendado.",
    rating: 5,
    linkedIn: "#",
  },
  {
    id: 4,
    name: "Luis Hernández",
    role: "Gerente General",
    company: "Servicios Profesionales SAS",
    image: null,
    content: "El chatbot con IA que implementó ha revolucionado nuestra atención al cliente. Ahora respondemos 24/7 y la satisfacción del cliente aumentó significativamente.",
    rating: 5,
    linkedIn: "#",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen mis <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonios de personas y empresas que han confiado en mi trabajo.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-primary/30" />
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/20">
                      {testimonials[currentIndex].image ? (
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-xl font-bold text-primary">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} en {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>

                    {/* LinkedIn Link */}
                    <a
                      href={testimonials[currentIndex].linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver perfil en LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Note for adding real testimonials */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          💡 Estos son testimonios de ejemplo. Reemplázalos con testimonios reales de tus clientes.
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;
