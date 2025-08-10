import React from "react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <img src="/lovable-uploads/f1c15801-958d-41b4-b919-77307a1fbe5d.png" alt="Logo NEXO" className="h-8 w-auto" loading="lazy" />
            <p className="text-sm text-muted-foreground">Estrategia • Automatización • Escalamiento</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              <li><a href="https://wa.me/##########" target="_blank" rel="noreferrer" className="hover:opacity-90">WhatsApp</a></li>
              <li><a href="mailto:hola@nexo.com" className="hover:opacity-90">hola@nexo.com</a></li>
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
          Al enviar tus datos aceptas nuestra política de tratamiento de datos. © {new Date().getFullYear()} NEXO.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
