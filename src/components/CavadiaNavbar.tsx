import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
const links = [{ href: "#servicios", label: "Soluciones" }, { href: "#proceso", label: "Método" }, { href: "#sobre-mi", label: "Sobre mí" }, { href: "#contacto", label: "Contacto" }];
export default function CavadiaNavbar() {
 const [open, setOpen] = useState(false);
 const toggle = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
  const resize = () => { if (window.innerWidth >= 768) setOpen(false); };
  window.addEventListener("keydown", close); window.addEventListener("resize", resize);
  return () => { window.removeEventListener("keydown", close); window.removeEventListener("resize", resize); };
 }, []);
 return <header className="site-header"><nav className="page-shell flex items-center justify-between gap-4 min-h-20" aria-label="Navegación principal">
  <a href="#inicio" className="brand-lockup" onClick={() => setOpen(false)}><span>Cavadia<span className="text-primary"> Lab</span></span><small>Reynaldo Montalvo Cavadia</small></a>
  <ul className="hidden md:flex items-center gap-6">{links.map(l => <li key={l.href}><a className="nav-link" href={l.href}>{l.label}</a></li>)}</ul>
  <Button asChild variant="outline" className="hidden lg:inline-flex"><a href={whatsappUrl("mi proyecto")} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("home_nav")}>Hablemos <ArrowUpRight /></a></Button>
  <Button ref={toggle} className="md:hidden" variant="ghost" size="icon" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
 </nav>{open && <nav id="mobile-navigation" aria-label="Navegación móvil" className="page-shell md:hidden border-t border-border pb-5">{links.map(l => <a key={l.href} href={l.href} className="flex items-center min-h-12 border-b border-border" onClick={() => setOpen(false)}>{l.label}</a>)}<Button asChild className="mt-4 w-full"><a href={whatsappUrl("mi proyecto")} target="_blank" rel="noopener noreferrer" onClick={() => { setOpen(false); trackWhatsAppClick("mobile_nav"); }}>Hablemos de tu proyecto <ArrowUpRight /></a></Button></nav>}</header>;
}
