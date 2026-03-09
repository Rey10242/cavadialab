import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const benefits = [
  "Revisión de tu inversión actual vs. resultados",
  "Errores comunes que te están costando dinero",
  "3 acciones concretas para mejorar hoy",
];

const LeadMagnet: React.FC = () => {
  const handleClick = () => {
    trackEvent("lead_magnet_click", {
      event_category: "lead_generation",
      event_label: "diagnostico_express",
      value: 1,
    });
    const waText = encodeURIComponent(
      "¡Hola Reynaldo! Me interesa el diagnóstico express gratuito de mi publicidad digital. ¿Cómo funciona?"
    );
    window.open(`https://wa.me/573246875354?text=${waText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-7 h-7 text-primary" />
          </div>

          <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.92] tracking-tight mb-3">
            Diagnóstico express{" "}
            <span className="text-primary">gratis</span>
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
            ¿Tu publicidad no está dando resultados? Te analizo tu situación en 15 minutos por
            WhatsApp y te digo exactamente qué cambiar — sin costo, sin compromiso.
          </p>

          {/* Benefits */}
          <div className="flex flex-col items-start gap-3 max-w-md mx-auto mb-8">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground text-left">{b}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-[0.78rem] font-bold tracking-wider rounded-full hover:shadow-[0_8px_28px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 transition-all"
          >
            Quiero mi diagnóstico gratis
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[0.65rem] text-muted-foreground mt-4">
            Sin correos spam. Solo una conversación directa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
