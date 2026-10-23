import React from "react";
import { Link, useLocation } from "react-router-dom";
import { landings } from "@/content/landings";

const sectionLinks = [
  { hash: "#servicios", label: "Soluciones" },
  { hash: "#proceso", label: "Método" },
  { hash: "#sobre-mi", label: "Sobre mí" },
  { hash: "#faq", label: "FAQ" },
  { hash: "#contacto", label: "Contacto" },
];

const serviceSlugs = ["paid-media-manager", "campanas-google-ads", "campanas-meta-ads", "analitica-y-tracking", "desarrollo-web-y-apps"];
const nicheSlugs = ["marketing-para-restaurantes", "consultor-marketing-digital-cartagena", "consultor-marketing-digital-espana", "consultor-marketing-digital-mexico", "paid-media-consultant-usa"];

const bySlug = (slugs: string[]) => slugs.map((s) => landings.find((l) => l.slug.endsWith(s))).filter(Boolean) as typeof landings;

const SiteFooter: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHome) return;
    e.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="page-shell">

        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="brand-lockup" onClick={(e) => handleClick(e, "#inicio")}>
              <span>Cavadia<span className="text-primary"> Lab</span></span>
              <small>Reynaldo Montalvo Cavadia</small>
            </a>
            <p className="footer-tagline">
              Publicidad en Meta y Google, web que convierte y datos de dónde viene cada contacto.
            </p>
            <p className="footer-location">Cartagena, Colombia · Atención remota</p>
          </div>

          <nav aria-label="Secciones" className="footer-col">
            <h3>Secciones</h3>
            <ul>
              {sectionLinks.map((link) => (
                <li key={link.hash}>
                  <a href={`/${link.hash}`} onClick={(e) => handleClick(e, link.hash)} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soluciones" className="footer-col">
            <h3>Soluciones</h3>
            <ul>
              {bySlug(serviceSlugs).map((l) => (
                <li key={l.slug}>
                  <Link to={l.slug} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Nichos y mercados" className="footer-col">
            <h3>Nichos &amp; Mercados</h3>
            <ul>
              {bySlug(nicheSlugs).map((l) => (
                <li key={l.slug}>
                  <Link to={l.slug} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Reynaldo Montalvo Cavadia</span>
          <span>cavadialab.com</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
