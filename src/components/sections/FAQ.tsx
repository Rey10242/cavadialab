import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta trabajar contigo?",
    answer: "Depende del alcance. Consultorías desde $130.000 COP (~$50 USD). Para gestión de campañas, armo un plan a la medida según tus objetivos y presupuesto.",
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer: "Primeras métricas desde la semana 1. Resultados consistentes entre 2 y 4 semanas dependiendo del canal y la industria.",
  },
  {
    question: "¿Qué te diferencia de una agencia?",
    answer: "Trabajo con pocos clientes a la vez. Tienes línea directa conmigo, no con un ejecutivo de cuenta que no toca las campañas.",
  },
  {
    question: "¿Necesito un presupuesto mínimo en ads?",
    answer: "Recomiendo mínimo $500.000 COP mensuales (~$150 USD) para que los datos sean significativos. Si tu presupuesto es menor, una consultoría puntual puede ser mejor punto de partida.",
  },
  {
    question: "¿Trabajas fuera de Colombia?",
    answer: "Sí. Trabajo remoto con clientes en toda Latinoamérica y España. Las herramientas son las mismas y las reuniones se hacen por videollamada.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-px">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border px-5 bg-card data-[state=open]:border-primary/30 transition-colors rounded-none"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
