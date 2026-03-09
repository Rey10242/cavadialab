import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: 50, suffix: "+", label: "Proyectos" },
  { value: 8, suffix: "+", label: "Años exp." },
  { value: 100, suffix: "%", label: "Resultados" },
];

const AboutMe: React.FC = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Sobre el consultor</div>
          <h2 className="section-title">¿Por qué elegir a Reynaldo Montalvo<br />como tu consultor digital?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — Main narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5 mb-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Llevo más de <strong className="text-foreground font-semibold">8 años</strong> ayudando
                a negocios a conseguir más clientes con publicidad digital. He trabajado con más de{" "}
                <strong className="text-foreground font-semibold">50 empresas</strong> — desde
                emprendedores que arrancaban hasta negocios que ya vendían y querían crecer con más orden.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                He visto demasiados negocios buenos gastar dinero en publicidad y no ver nada a cambio —
                no porque el producto fuera malo, sino porque{" "}
                <strong className="text-foreground font-semibold">no había una estrategia detrás</strong>.
                Eso es exactamente lo que resuelvo.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid-cards grid grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="py-5 px-4 text-center">
                  <div className="font-heading text-4xl text-primary leading-none">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[0.62rem] font-semibold tracking-[0.07em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Personal commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading text-3xl tracking-wide text-foreground mb-6">
              Pocos clientes,<br />
              <span className="text-primary">resultados reales</span>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Trabajo con pocos clientes a la vez para poder hacerlo bien. No soy una agencia con
              decenas de cuentas que nadie revisa —{" "}
              <strong className="text-foreground font-semibold">soy yo, contigo, enfocado en tus resultados</strong>.
            </p>
            <blockquote className="border-l-[3px] border-primary pl-5 font-serif italic text-base text-muted-foreground leading-relaxed">
              "No busco tener más clientes. Busco que los que tengo, ganen más."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
