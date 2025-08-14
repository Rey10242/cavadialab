import React from "react";
import CTAButton from "./CTAButton";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#casos", label: "Casos de Éxito" },
  { href: "#contacto", label: "Contacto" },
];

const RMCNavbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>(typeof window !== 'undefined' && window.location.hash ? window.location.hash : '#inicio');

  React.useEffect(() => {
    const onHash = () => {
      setOpen(false);
      setActive(window.location.hash || '#inicio');
    };

    const ids = ['servicios', 'paquetes', 'casos', 'contacto'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => io.observe(s));
    window.addEventListener('hashchange', onHash);
    return () => {
      sections.forEach((s) => io.unobserve(s));
      io.disconnect();
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2 focus-ring" aria-label="RMC Digital Inicio">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              RMC
            </div>
            <span className="font-semibold text-lg">Digital</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? 'page' : undefined}
              className={`story-link text-sm font-medium transition-colors focus-ring ${active === l.href ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}
            >
              {l.label}
            </a>
          ))}
          <CTAButton className="shadow-lg focus-ring" />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border border-border p-2 md:hidden focus-ring"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
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
                <a key={l.href} href={l.href} className="story-link py-2 text-sm font-medium text-foreground/80 hover:text-foreground">
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

export default RMCNavbar;
