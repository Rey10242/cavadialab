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
          <span className="font-heading text-sm tracking-[0.15em] text-primary">
            REYNALDO MONTALVO CAVADIA
          </span>

          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-6 gap-y-2">
            {sectionLinks.map((link) => (
              <a
                key={link.hash}
                href={`/${link.hash}`}
                onClick={(e) => handleClick(e, link.hash)}
                className="text-[0.62rem] font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
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
              className="text-[0.62rem] font-bold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

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
