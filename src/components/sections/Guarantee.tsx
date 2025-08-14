import React from "react";

const Guarantee: React.FC = () => {
  return (
    <section id="garantia" className="border-t border-border/60 scroll-mt-24 section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-2xl border-2 border-success/30 bg-gradient-to-br from-success/5 to-success/10 p-12 text-center card-elevated">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
          <h2 className="heading-secondary mb-6 text-success">Riesgo cero: garantía de 90 días</h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/90">
            Si en 90 días no aumentamos tus ventas digitales, te devolvemos el valor de la gestión del último mes. <span className="font-semibold text-success">Sin letras pequeñas.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
