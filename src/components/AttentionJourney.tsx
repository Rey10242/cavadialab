import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroPersonal from "@/components/sections/HeroPersonal";

const chapters = [
 { id: "demanda", label: "ADS", title: "Primero, la atención.", text: "Tu oferta frente a las personas correctas. Publicidad que conecta intención, mensaje y canal para abrir una conversación relevante.", links: [{ name: "Campañas Meta Ads", path: "/campanas-meta-ads" }, { name: "Campañas Google Ads", path: "/campanas-google-ads" }] },
 { id: "experiencia", label: "EXPERIENCIA WEB", title: "Después, el siguiente paso.", text: "El interés necesita un camino claro. Páginas y aplicaciones que facilitan explorar, consultar o reservar, sin fricción innecesaria.", links: [{ name: "Desarrollo Web & Apps", path: "/desarrollo-web-y-apps" }] },
 { id: "datos", label: "DATOS", title: "Siempre, una lectura clara.", text: "Medir no es acumular números. Conectamos eventos y objetivos para entender el recorrido, distinguir señales y decidir qué ajustar.", links: [{ name: "Tracking & Analytics", path: "/analitica-y-tracking" }] },
];

function StaticCore() {
 return <svg className="static-core" viewBox="0 0 600 600" aria-hidden="true"><defs><linearGradient id="core-metal" x1="0" y1="0" x2="1" y2="1"><stop className="core-highlight" offset="0"/><stop className="core-orange" offset=".4"/><stop className="core-shadow" offset=".8"/><stop className="core-orange" offset="1"/></linearGradient></defs><g fill="none" stroke="url(#core-metal)" strokeWidth="27"><ellipse cx="300" cy="300" rx="176" ry="107" transform="rotate(-35 300 300)"/><ellipse cx="300" cy="300" rx="176" ry="107" transform="rotate(85 300 300)"/><ellipse cx="300" cy="300" rx="176" ry="107" transform="rotate(25 300 300)"/></g></svg>;
}

export default function AttentionJourney() {
 const story = useRef<HTMLDivElement>(null), host = useRef<HTMLDivElement>(null);
 const api = useRef<ReturnType<typeof import("./coreRenderer")["mountCore"]> | null>(null);
 const progress = useRef(0);
 const reduce = useReducedMotion();
 const [active,setActive] = useState(0), [ready,setReady] = useState(false);
 const { scrollYProgress } = useScroll({ target: story, offset: ["start center", "end center"] });
 useMotionValueEvent(scrollYProgress,"change",value=> { progress.current=value; api.current?.update(value); setActive(Math.min(2,Math.floor(value*3))); });
 useEffect(()=> {
  const el=host.current;
  if (!el || reduce || !window.matchMedia("(min-width: 901px) and (pointer: fine)").matches) return;
  let cancelled=false;
  const media=window.matchMedia("(min-width: 901px) and (pointer: fine)");
  const changed=()=> { if(!media.matches) { api.current?.dispose();api.current=null;setReady(false); } };
  media.addEventListener("change",changed);
  const timer=window.setTimeout(()=> { import("./coreRenderer").then(({mountCore})=> { if(cancelled)return; try { api.current=mountCore(el,progress.current);setReady(true); } catch { setReady(false); } }).catch(()=>setReady(false)); },600);
  return ()=> { cancelled=true;clearTimeout(timer);media.removeEventListener("change",changed);api.current?.dispose();api.current=null;setReady(false); };
 },[reduce]);
 return <section className="attention-journey" aria-label="De la atención a la acción"><div className="page-shell journey-grid"><div className="journey-copy"><HeroPersonal/><div id="proceso" ref={story} className="story-chapters"><div className="story-heading"><p className="eyebrow">De la atención a la acción</p><h2>Todo está conectado.</h2></div>{chapters.map((chapter,i)=><article key={chapter.id} id={chapter.id} className={`story-chapter ${active===i?"is-active":""}`}><p className="chapter-number">0{i+1} <span>/ {chapter.label}</span></p><h3>{chapter.title}</h3><p className="chapter-description">{chapter.text}</p><div className="chapter-links">{chapter.links.map(link=><Link key={link.path} to={link.path}>{link.name}<ArrowUpRight size={18}/></Link>)}</div></article>)}</div></div><div className="core-column"><div className="core-sticky"><div className="core-stage" data-ready={ready} aria-hidden="true"><StaticCore/><div ref={host} className="core-webgl"/></div><div className="core-caption"><span>CAVADIA LAB / SISTEMAS CONECTADOS</span><ArrowDown size={16}/></div><nav className="chapter-indicator" aria-label="Capítulos del recorrido">{chapters.map((c,i)=><a key={c.id} href={`#${c.id}`} aria-current={active===i?"step":undefined}><span>0{i+1}</span>{c.label}</a>)}</nav></div></div></div></section>;
}