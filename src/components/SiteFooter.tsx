import React from "react";
import Logo from "@/components/Logo";
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rmontalvocavadia/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/reynaldo.cavadia/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/573246875354", label: "WhatsApp" },
  { icon: Mail, href: "mailto:rmontalvocavadia@gmail.com", label: "Email" },
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
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="flex items-center gap-2"
            >
              <Logo size={36} />
              <div>
                <span className="font-bold text-foreground block">Reynaldo Montalvo</span>
                <span className="text-xs text-muted-foreground">
                  Consultor de crecimiento empresarial
                </span>
              </div>
            </a>
          </div>

          {/* Location */}
          <p className="text-sm text-muted-foreground">
            Cartagena de Indias, Colombia 🇨🇴
          </p>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Reynaldo Montalvo Cavadia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
