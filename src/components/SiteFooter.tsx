import React from "react";

const footerLinks = [
  { href: "#servicios", label: "Servicios de marketing digital" },
  { href: "#proceso", label: "Metodología" },
  { href: "#sobre-mi", label: "Sobre Reynaldo Montalvo" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const SiteFooter: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t border-border py-10 px-4 md:px-8" role="contentinfo">
      <div className="container mx-auto">
        <nav aria-label="Enlaces del pie de página" className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[0.68rem] font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-sm tracking-[0.1em] text-muted-foreground">
            REYNALDO MONTALVO
          </span>
          <span className="text-[0.62rem] text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} · Reynaldo Montalvo Cavadia · Consultor de Marketing Digital · Cartagena, Colombia
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
