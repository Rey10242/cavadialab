import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/content/site";
import { Reveal } from "@/components/StudioVisuals";
const benefits = ["Anuncios en Instagram y Facebook pensados para abrir conversaciones con personas interesadas en lo que ofreces.", "Aparece en Google justo cuando alguien está buscando activamente lo que vendes.", "GA4 y Tag Manager para saber de dónde viene cada llamada, formulario o mensaje a tu WhatsApp.", "Páginas rápidas, excelentes en celular y diseñadas para convertir visitas en clientes."];
export default function Services() {
 return <section id="servicios" className="studio-section service-index"><div className="page-shell"><Reveal className="studio-section-heading"><div><p className="eyebrow">Servicios puntuales o el circuito completo</p><h2>En qué puedo ayudarte hoy.</h2></div><p className="service-intro">Puedes empezar resolviendo una necesidad urgente de tu negocio o conectar todo el circuito desde el primer día.</p></Reveal><div>{solutions.map((s,i)=><Reveal key={s.path} delay={i*.04}><Link className="service-row" to={s.path}><span className="service-ordinal">0{i+1}</span><h3>{s.name}</h3><p>{benefits[i]}</p><ArrowUpRight aria-hidden="true"/></Link></Reveal>)}</div></div></section>;
}
