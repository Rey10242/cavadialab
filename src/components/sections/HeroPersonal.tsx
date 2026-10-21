import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
export default function HeroPersonal() {
 return <div id="inicio" className="spatial-hero"><p className="eyebrow">Cavadia Lab · Reynaldo Montalvo Cavadia</p><h1>Hacer publicidad sin medir es tirar el dinero.<br/><span className="text-primary">Yo armo todo el camino para tu negocio.</span></h1><p className="studio-lead">Atraigo personas interesadas en tus servicios o productos con anuncios en redes y Google, las llevo a una web lista para vender y te muestro exactamente qué campaña trajo cada contacto.</p><div className="hero-actions"><Button asChild><a href={whatsappUrl("mi negocio")} onClick={()=>trackWhatsAppClick("home_hero")} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp<ArrowUpRight/></a></Button><Button asChild variant="ghost"><a href="#proceso">Ver cómo funciona el camino<ArrowDown/></a></Button></div><p className="hero-location">Anuncios · Páginas de venta · Medición real</p></div>;
}
