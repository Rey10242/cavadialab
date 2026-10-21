import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/content/site";
import { Reveal } from "@/components/StudioVisuals";
const benefits = ["Conecta tu oferta con personas relevantes en Facebook e Instagram.", "Aparece cuando alguien busca lo que tu negocio ofrece.", "Entiende qué ocurre después del clic y decide con criterio.", "Convierte tu presencia digital en una experiencia útil para tus clientes."];
export default function Services() {
 return <section id="servicios" className="studio-section service-index"><div className="page-shell"><Reveal className="studio-section-heading"><div><p className="eyebrow">Elige tu punto de partida</p><h2>Soluciones, sin rodeos.</h2></div></Reveal><div>{solutions.map((s,i)=><Reveal key={s.path} delay={i*.04}><Link className="service-row" to={s.path}><span className="service-ordinal">0{i+1}</span><h3>{s.name}</h3><p>{benefits[i]}</p><ArrowUpRight aria-hidden="true"/></Link></Reveal>)}</div></div></section>;
}
