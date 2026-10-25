import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/content/site";
import { Reveal } from "@/components/StudioVisuals";
const benefits = ["Gestiono tus anuncios en Facebook e Instagram para que más personas interesadas te conozcan y te contacten.", "Tu negocio aparece en Google justo cuando alguien busca lo que vendes.", "Llevo tu negocio a TikTok con anuncios en video para personas que todavía no te conocen.", "Creo tu página web o una aplicación a la medida: rápida, clara en celular y lista para recibir clientes.", "Configuro la medición para que sepas de dónde viene cada llamada, formulario o mensaje."];
export default function Services() {
 return <section id="servicios" className="studio-section service-index"><div className="page-shell"><Reveal className="studio-section-heading"><div><p className="eyebrow">Servicios</p><h2>Publicidad, desarrollo web y analítica.</h2></div><p className="service-intro">Campañas en Google, Meta y TikTok, sitios web y aplicaciones a la medida, y medición para entender qué funciona. Puedes empezar con un servicio puntual o conectar todo el recorrido.</p></Reveal><div>{solutions.map((s,i)=><Reveal key={s.path} delay={i*.04}><Link className="service-row" to={s.path}><span className="service-ordinal">0{i+1}</span><h3>{s.name}</h3><p>{benefits[i]}</p><ArrowUpRight aria-hidden="true"/></Link></Reveal>)}</div></div></section>;
}
