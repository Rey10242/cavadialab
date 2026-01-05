import React from "react";
import cavadiaLogo from "@/assets/cavadialab-logo.png";
import { Linkedin, Instagram, Github, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/reynaldomontalvo", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/reynaldomontalvo", label: "Instagram" },
  { icon: Github, href: "https://github.com/reynaldomontalvo", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/573246875354", label: "WhatsApp" },
  { icon: Mail, href: "mailto:reynaldo@cavadialab.com", label: "Email" },
];

const SiteFooter: React.FC = () => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="flex items-center gap-2 mb-4"
            >
              <img src={cavadiaLogo} alt="Logo" className="h-10 w-10" />
              <div>
                <span className="font-bold text-lg text-foreground block">
                  Reynaldo Montalvo
                </span>
                <span className="text-xs text-muted-foreground">
                  Full Stack Marketer
                </span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transformando ideas en máquinas de crecimiento digital a través de 
              estrategia, automatización e inteligencia artificial.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Conecta Conmigo</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Colombia 🇨🇴
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Reynaldo Montalvo Cavadia. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con ❤️ en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
