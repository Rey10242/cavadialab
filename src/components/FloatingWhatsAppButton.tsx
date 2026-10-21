import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
export default function FloatingWhatsAppButton() {
 const { pathname } = useLocation();
 const [visible, setVisible] = useState(false);
 useEffect(() => {
  const check = () => {
   const footer = document.querySelector("footer"); const contact = document.getElementById("contacto"); const faq = document.getElementById("faq");
   const inView = (el: Element | null) => { if (!el) return false; const r=el.getBoundingClientRect(); return r.top < window.innerHeight && r.bottom > 0; };
   setVisible(window.scrollY > 400 && !inView(footer) && !inView(contact) && !(window.innerWidth < 768 && inView(faq)) && !document.querySelector('[role="dialog"]'));
  };
  check(); window.addEventListener("scroll",check,{passive:true});
  const observer = new MutationObserver(check); observer.observe(document.body,{childList:true,subtree:true});
  return () => { window.removeEventListener("scroll",check);observer.disconnect(); };
 }, [pathname]);
 if (!visible) return null;
 return <Button asChild size="icon" variant="whatsapp" className="floating-contact" ><a href={whatsappUrl("un proyecto que vi en Cavadia Lab")} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" title="Contactar por WhatsApp" onClick={() => trackWhatsAppClick(`floating_${pathname === "/" ? "home" : pathname.slice(1)}`)}><MessageCircle /></a></Button>;
}
