import React from "react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                RMC
              </div>
              <span className="font-semibold text-lg">Digital</span>
            </div>
            <p className="text-sm text-muted-foreground">Reynaldo Montalvo Cavadia</p>
            <p className="text-xs text-muted-foreground">Estrategia • Automatización • Escalamiento</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              <li><a href="https://wa.me/##########" target="_blank" rel="noreferrer" className="hover:opacity-90">WhatsApp</a></li>
              <li><a href="mailto:reynaldo@rmcdigital.co" className="hover:opacity-90">reynaldo@rmcdigital.co</a></li>
              <li><span className="text-muted-foreground">Colombia</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Enlaces</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              <li><a href="#servicios" className="hover:opacity-90">Servicios</a></li>
              <li><a href="#paquetes" className="hover:opacity-90">Paquetes</a></li>
              <li><a href="#contacto" className="hover:opacity-90">Contacto</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Al enviar tus datos aceptas nuestra política de tratamiento de datos. © {new Date().getFullYear()} RMC Digital - Reynaldo Montalvo.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
