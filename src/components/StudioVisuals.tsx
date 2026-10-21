import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowUpRight, Search, MousePointer2, Code2, Plus, Check } from "lucide-react";

/** Always readable at first paint; motion adds emphasis, never gates content. */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduce ? undefined : { y: [14, 0], opacity: [.8, 1] }} viewport={{ once: true, amount: .12 }} transition={{ duration: .6, delay }}>{children}</motion.div>;
}

export function PointerSurface({ children, className = "", tilt = false }: { children: ReactNode; className?: string; tilt?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (!media.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = el.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width, y = (event.clientY - box.top) / box.height;
        el.style.setProperty("--pointer-x", `${x * 100}%`);
        el.style.setProperty("--pointer-y", `${y * 100}%`);
        if (tilt) { el.style.setProperty("--tilt-x", `${(y - .5) * -4}deg`); el.style.setProperty("--tilt-y", `${(x - .5) * 4}deg`); }
      });
    };
    const reset = () => { cancelAnimationFrame(frame); el.style.setProperty("--tilt-x", "0deg"); el.style.setProperty("--tilt-y", "0deg"); };
    el.addEventListener("pointermove", move); el.addEventListener("pointerleave", reset);
    return () => { cancelAnimationFrame(frame); el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", reset); };
  }, [reduce, tilt]);
  return <div ref={ref} className={`${tilt ? "portrait-surface" : "pointer-surface"} ${className}`}>{children}</div>;
}

export function Connections({ active = 0, className = "" }: { active?: number; className?: string }) {
  return <svg className={`connections ${className}`} viewBox="0 0 600 300" fill="none" aria-hidden="true" focusable="false">
    <path className="connection-grid" d="M0 75H600M0 150H600M0 225H600M100 0V300M200 0V300M300 0V300M400 0V300M500 0V300" />
    <path className={`connection-path ${active === 0 ? "is-active" : ""}`} d="M30 70H150Q200 70 230 115L255 150H360" />
    <path className={`connection-path ${active === 1 ? "is-active" : ""}`} d="M30 235H140Q205 235 230 190L255 150H360" />
    <path className={`connection-path ${active === 2 ? "is-active" : ""}`} d="M360 150H430Q470 150 490 100L520 50H590M430 150Q470 150 490 205L520 255H590" />
    <rect className="connection-node" x="240" y="126" width="48" height="48" rx="8" />
    <rect className="connection-node" x="350" y="132" width="36" height="36" rx="6" />
    <path className="connection-mark" d="M252 150H276M264 138V162M359 150L366 157L378 143" />
  </svg>;
}

export function MicroVisual({ kind }: { kind: number }) {
  if (kind === 0) return <div className="micro-ads" aria-hidden="true"><div className="creative-frame"><div className="creative-crop" /><span /><span /></div><div className="creative-caption"><MousePointer2 /><span>Oferta → Conversación</span><ArrowUpRight /></div></div>;
  if (kind === 1) return <div className="micro-search" aria-hidden="true"><div><Search size={18} /><span>Lo que tu cliente busca</span></div><div className="search-result"><span>Anuncio</span><i /><i /></div></div>;
  if (kind === 2) return <div className="micro-data" aria-hidden="true"><Connections active={2} /><div className="data-labels"><span>Evento</span><span>Decisión</span></div></div>;
  return <div className="micro-web" aria-hidden="true"><div className="browser-top"><Code2 size={16} /><span /><Plus size={14} /></div><div className="browser-content"><div><i /><i /><i /><b><Check size={12} /></b></div><div className="browser-aside" /></div></div>;
}