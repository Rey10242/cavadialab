import React from "react";
import { Link, useLocation } from "react-router-dom";
import { landings } from "@/content/landings";

const sectionLinks = [
  { hash: "#servicios", label: "Servicios" },
  { hash: "#proceso", label: "Proceso" },
  { hash: "#sobre-mi", label: "Sobre mí" },
  { hash: "#faq", label: "FAQ" },
  { hash: "#contacto", label: "Contacto" },
];

const SiteFooter: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHome) return;
    e.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 px-4 md:px-8" role="contentinfo">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-heading text-2xl text-primary">
            CAVADIA LAB
          </span>

          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-6 gap-y-2">
            {sectionLinks.map((link) => (
              <a
                key={link.hash}
                href={`/${link.hash}`}
                onClick={(e) => handleClick(e, link.hash)}
                className="inline-flex items-center min-h-11 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <nav
          aria-label="Servicios"
          className="mt-6 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2"
        >
          {landings.map((l) => (
            <Link
              key={l.slug}
              to={l.slug}
              className="inline-flex items-center min-h-11 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 pt-4 border-t border-border">
          <span className="text-sm text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Reynaldo Montalvo Cavadia · Cartagena, Colombia · Atención remota
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
