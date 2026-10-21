import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/gtag";
export default function HeroPersonal() {
 return <div id="inicio" className="spatial-hero"><p className="eyebrow">Cavadia Lab · Reynaldo Montalvo Cavadia</p><h1>Más clientes para tu negocio.<br/><span className="text-primary">Publicidad digital, web y analítica.</span></h1><p className="studio-lead">Diseño tus campañas en Meta y Google, construyo páginas que convierten visitas en contactos y mido con datos qué canal genera cada venta.</p><div className="hero-actions"><Button asChild><a href={whatsappUrl("mi negocio")} onClick={()=>trackWhatsAppClick("home_hero")} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp<ArrowUpRight/></a></Button><Button asChild variant="ghost"><a href="#proceso">Ver cómo funciona el camino<ArrowDown/></a></Button></div><p className="hero-location">Anuncios · Páginas de venta · Medición real</p></div>;
}
