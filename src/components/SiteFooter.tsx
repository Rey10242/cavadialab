import React from "react";
import cavadiaLogo from "@/assets/cavadialab-logo.png";

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img 
                src={cavadiaLogo} 
                alt="CavadiaLab Logo" 
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold text-lg bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">CavadiaLab</span>
            </div>
            <p className="text-sm text-muted-foreground">Reynaldo Montalvo Cavadia</p>
            <p className="text-xs text-muted-foreground">Full Stack Marketer</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              <li><a href="https://wa.me/##########" target="_blank" rel="noreferrer" className="hover:opacity-90">WhatsApp</a></li>
              <li><a href="mailto:reynaldo@cavadialab.com" className="hover:opacity-90">reynaldo@cavadialab.com</a></li>
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
          Al enviar tus datos aceptas nuestra política de tratamiento de datos. © {new Date().getFullYear()} CavadiaLab - Reynaldo Montalvo.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
