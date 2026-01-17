import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import cavadiaLogo from "@/assets/cavadialab-logo.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#stack", label: "Stack" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#casos-exito", label: "Casos de Éxito" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

const CavadiaNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || "#inicio");
    window.addEventListener("hashchange", onHashChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActive(`#${id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    links.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#inicio");
          }}
          className="flex items-center gap-2 group"
        >
          <img src={cavadiaLogo} alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            Reynaldo Montalvo
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className="hidden md:inline-flex btn-primary-glow"
          size="sm"
          onClick={() => handleNavClick("#contacto")}
        >
          Hablemos
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="container mx-auto px-4 py-4 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                className="w-full btn-primary-glow"
                size="sm"
                onClick={() => handleNavClick("#contacto")}
              >
                Hablemos
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default CavadiaNavbar;
