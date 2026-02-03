import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import rmLogo from "@/assets/rm-logo.png";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#stack", label: "Stack" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#casos-exito", label: "Casos de Éxito" },
  { href: "#servicios", label: "Servicios" },
  // { href: "#testimonios", label: "Testimonios" }, // Temporalmente oculto
  { href: "#contacto", label: "Contacto" },
];

const CavadiaNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-500 to-orange-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" 
            : "bg-background/80 backdrop-blur-md border-b border-border"
        }`}
      >
        <nav className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-14" : "h-16"
        }`}>
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center gap-2 group"
          >
            <img 
              src={rmLogo} 
              alt="RM Logo" 
              className={`transition-all duration-300 rounded-lg ${isScrolled ? "h-8 w-8" : "h-9 w-9"}`}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            <span className={`font-bold text-foreground group-hover:text-primary transition-all duration-300 ${
              isScrolled ? "text-base" : "text-lg"
            }`}>
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
            className={`hidden md:inline-flex btn-primary-glow transition-all duration-300 ${
              isScrolled ? "h-8 text-sm" : ""
            }`}
            size={isScrolled ? "sm" : "sm"}
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
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background border-b border-border"
          >
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
          </motion.div>
        )}
      </header>
    </>
  );
};

export default CavadiaNavbar;
