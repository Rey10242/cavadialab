import React from "react";

const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const SiteFooter: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 px-4 md:px-8" role="contentinfo">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-heading text-sm tracking-[0.15em] text-primary">
            REYNALDO MONTALVO CAVADIA
          </span>

          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[0.62rem] font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <span className="text-[0.58rem] text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Reynaldo Montalvo Cavadia · Cartagena, Colombia
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
