import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/content/site";
import { Reveal } from "@/components/StudioVisuals";
const benefits = ["Gestiono tus campañas en Facebook e Instagram para llegar a personas interesadas en lo que ofreces.", "Tu negocio aparece en Google justo cuando alguien busca activamente lo que vendes.", "Configuro GA4 y Tag Manager para que sepas de dónde viene cada llamada, formulario o mensaje.", "Diseño páginas rápidas, claras en celular y pensadas para convertir visitas en contactos."];
export default function Services() {
 return <section id="servicios" className="studio-section service-index"><div className="page-shell"><Reveal className="studio-section-heading"><div><p className="eyebrow">Servicios</p><h2>Publicidad, desarrollo web y analítica.</h2></div><p className="service-intro">Puedes empezar con un servicio puntual o conectar todo el recorrido: anuncios, web y medición.</p></Reveal><div>{solutions.map((s,i)=><Reveal key={s.path} delay={i*.04}><Link className="service-row" to={s.path}><span className="service-ordinal">0{i+1}</span><h3>{s.name}</h3><p>{benefits[i]}</p><ArrowUpRight aria-hidden="true"/></Link></Reveal>)}</div></div></section>;
}
