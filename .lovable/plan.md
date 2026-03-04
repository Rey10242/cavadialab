# Reforma completa de la web basada en el nuevo diseño

## Resumen

Transformar la web actual (light theme con gradientes coloridos) al nuevo estilo del archivo adjunto: tema oscuro editorial, tipografia Bebas Neue para titulos, Instrument Sans/Serif para cuerpo, paleta con acento amarillo-verde (#e8ff47), grid lines como fondo, tarjetas con bordes sutiles, y una estetica minimalista-brutalist.

Se mantiene: la foto del hero con su efecto actual, la esencia de Reynaldo como consultor experto en marketing digital, la estructura de secciones modificarlo conforme al HTML, el formulario de contacto funcional, el WhatsApp flotante, y toda la logica backend (Supabase).

## Cambios principales

### 1. Sistema de diseño (index.css + tailwind.config.ts + index.html)

- **Colores**: Fondo oscuro `#0c0c0e`, surface `#131316`, card `#1a1a1f`, border `#26262e`, texto `#f0eff5`, muted `#6b6a78`, acento `#e8ff47`
- **Fuentes**: Agregar Bebas Neue e Instrument Sans/Serif en index.html. Bebas Neue para titulos grandes, Instrument Sans como body, Instrument Serif italica para quotes
- **text-gradient**: Cambiarlo por el color acento solido `#e8ff47`

### 2. Navbar (CavadiaNavbar.tsx)

- Fondo transparente que se vuelve oscuro con blur al scroll
- Logo con texto "REYNALDO MONTALVO" en Bebas Neue color acento
- Links en uppercase, letra pequena, tracking amplio, color muted
- Boton CTA: pill redondeado, fondo acento, texto oscuro
- Quitar la barra de progreso de scroll (o hacerla del color acento)

### 3. Hero (HeroPersonal.tsx)

- Layout: grid 2 columnas como el adjunto
- Izquierda: pill "Disponible para proyectos" con estilo acento, titulo grande en Bebas Neue "TU NEGOCIO NECESITA UN SISTEMA." con "sistema" en color acento, subtitulo en Instrument Serif italica, botones pill
- Derecha: **mantener la foto actual** con su efecto de mascara y badges flotantes, pero adaptar los badges al nuevo estilo (fondo card, border sutil, tipografia nueva)
- Agregar stats bar debajo del hero (50+ proyectos, 8+ anos, 3 canales, 100% foco en resultados) como en el adjunto

### 4. Eliminar secciones redundantes

- **ProblemSection**: Eliminar como seccion separada. Su contenido se integra dentro de la seccion Proceso/Metodologia
- **SolutionSection**: Eliminar. Su contenido ya esta cubierto por la lista de beneficios dentro de Proceso
- **SectionDivider**: Eliminar todos los dividers SVG. El nuevo diseno usa transiciones de color de fondo limpias

### 5. Servicios (Services.tsx)

- Estilo de grid con borde y gap de 1px (como en el adjunto)
- 3 cards: Meta Ads, Google Ads, Tracking & Analytics
- Cada card con numero grande (01, 02, 03), nombre en Bebas Neue, descripcion, tags como pills, link "Consultar →"
- Efecto hover: linea amarilla superior que se despliega
- **Mantener** la seccion de Consultoria Estrategica pero adaptar visualmente al nuevo estilo
- **Eliminar** la seccion de Crecimiento Integral como card separada. Los 3 servicios ya cubren eso

### 6. Proceso/Metodologia (Methodology.tsx)

- Layout de 2 columnas: izquierda con titulo + descripcion, derecha con lista de beneficios (bullets acento) + quote en Instrument Serif
- Debajo: grid de 4 pasos en tarjetas con borde, numeros de badge en acento, numero watermark gigante al fondo
- Cierre: "Sin formulas magicas. Solo decisiones basadas en datos."

### 7. Sobre Mi (AboutMe.tsx)

- 2 columnas: izquierda con texto + stats en grid con borde, derecha con lista "Con quien trabajo"
- Stats con numeros en Bebas Neue color acento
- Lista con checkmarks estilizados

### 8. Contacto (Contact.tsx)

- Centrado, mas simple visualmente
- Titulo grande en Bebas Neue: "HABLAMOS DE TU CUENTA?" con "cuenta" en acento
- Subtitulo en Instrument Serif italica
- 2 botones pill: WhatsApp (acento) + Email (ghost/outline)
- **Mantener** el formulario funcional pero adaptar estilos

### 9. Footer (SiteFooter.tsx)

- Fondo surface, borde superior
- Logo + copyright, minimalista

### 10. Componentes a eliminar/simplificar

- **AnimatedBackground.tsx**: Eliminar o reemplazar por el grid pattern sutil
- **FloatingElements.tsx**: Eliminar (el nuevo diseno no tiene blobs flotantes)
- **ScrollProgress.tsx**: Ya integrado en navbar, mantener pero color acento
- **FloatingWhatsAppButton.tsx**: Mantener pero adaptar colores al nuevo tema

## Detalle tecnico

```text
Archivos a modificar:
├── index.html               (fuentes Bebas Neue, Instrument Sans/Serif)
├── src/index.css             (nuevo sistema de colores oscuro, eliminar gradientes)
├── tailwind.config.ts        (nuevas font families)
├── src/pages/Index.tsx       (quitar SectionDivider, ProblemSection, SolutionSection)
├── src/components/
│   ├── CavadiaNavbar.tsx     (rediseno completo)
│   ├── Logo.tsx              (texto en Bebas Neue en vez del SVG badge)
│   ├── AnimatedBackground.tsx (grid pattern sutil)
│   ├── FloatingElements.tsx  (eliminar contenido)
│   ├── SiteFooter.tsx        (minimalista)
│   ├── FloatingWhatsAppButton.tsx (adaptar tema)
│   └── sections/
│       ├── HeroPersonal.tsx  (rediseno con stats bar)
│       ├── Services.tsx      (grid estilo adjunto)
│       ├── Methodology.tsx   (2 col + 4 steps grid)
│       ├── AboutMe.tsx       (2 col con stats)
│       └── Contact.tsx       (centrado, simplificado)

Archivos a eliminar/vaciar:
├── src/components/sections/ProblemSection.tsx
├── src/components/sections/SolutionSection.tsx
├── src/components/SectionDivider.tsx
```

Esto es un cambio grande (~12 archivos). Recomiendo implementarlo en fases:

1. Sistema de diseno (colores, fuentes, CSS base)
2. Navbar + Hero + Footer
3. Servicios + Metodologia
4. About + Contacto + limpieza