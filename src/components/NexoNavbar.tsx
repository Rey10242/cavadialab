import React from "react";
import CTAButton from "./CTAButton";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#casos", label: "Casos de Éxito" },
  { href: "#contacto", label: "Contacto" },
];

const NexoNavbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onHashClose = () => setOpen(false);
    window.addEventListener("hashchange", onHashClose);
    return () => window.removeEventListener("hashchange", onHashClose);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2" aria-label="NEXO Inicio">
          <img src="/lovable-uploads/f1c15801-958d-41b4-b919-77307a1fbe5d.png" alt="Logo NEXO - Estrategia, Automatización y Escalamiento" className="h-8 w-auto" loading="eager" decoding="async" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <CTAButton className="shadow-lg" />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border border-border p-2 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <CTAButton className="w-full" />
            <div className="grid grid-cols-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="py-2 text-sm font-medium text-foreground/80 hover:text-foreground">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NexoNavbar;
