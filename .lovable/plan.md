

# Plan: Rediseño Completo de la Seccion de Servicios

## Concepto

Reemplazar la seccion actual de 5 servicios genericos con 3 segmentos estrategicos claros, cada uno con su propio tono, publico y jerarquia visual. El orden es intencional: primero vision, despues opciones, por ultimo mentoria.

```text
HEADER    --> "Como puedo ayudarte" (directo, sin explicar de mas)
SEGMENTO 1 --> Gestion de Crecimiento Integral (PRINCIPAL - el mas grande visualmente)
SEGMENTO 2 --> Planes Estructurados (SEO / Meta Ads / Google Ads)
SEGMENTO 3 --> Consultoria Estrategica (tono diferente, otro publico)
CTA FINAL --> Cierre que lleva a contacto
```

---

## Estructura Visual y Contenido

### Header de Seccion
- Titulo: "Como puedo ayudarte"
- Sin subtitulo largo. Solo el titulo.

### Segmento 1: Gestion de Crecimiento Integral (PROTAGONISTA)
- **Card grande, destacada** con borde gradient y fondo sutil. Ocupa el ancho completo.
- Badge: "Servicio Principal"
- Titulo: "Gestion de Crecimiento Integral"
- Descripcion corta: "Implementamos un sistema completo para atraer clientes, convertirlos y hacer seguimiento automatico. Publicidad + Automatizacion + CRM en un solo lugar."
- Lista de 6 items con checks:
  - Captamos prospectos desde multiples canales
  - Integramos canales de adquisicion en una sola plataforma
  - Automatizamos seguimiento
  - Organizamos tu base de datos
  - Medimos ventas reales
  - Escalamos con control
- Frase de cierre en negrita: "No es solo hacer anuncios. Es construir una maquina de ventas ordenada."
- Subtexto: "Ideal si quieres delegar y crecer con estructura."
- CTA grande: "Consultar este servicio" que scrollea a contacto y pre-llena el mensaje

### Segmento 2: Planes Estructurados
- **3 cards en row** (grid de 3 en desktop, stack en mobile)
- Subtitulo de segmento: "Planes para necesidades especificas" + descripcion: "Soluciones concretas si necesitas trabajar un area puntual."
- Card SEO:
  - Icono: Search
  - Titulo: "SEO"
  - Descripcion: "Posicionamos tu negocio en Google para que te encuentren cuando ya estan buscando."
- Card Meta Ads:
  - Icono: Megaphone
  - Titulo: "Meta Ads"
  - Descripcion: "Campanas en Facebook e Instagram enfocadas en generar clientes reales."
- Card Google Ads:
  - Icono: Target
  - Titulo: "Google Ads"
  - Descripcion: "Publicidad directa para captar personas con intencion de compra."
- Cada card clickeable, scrollea a contacto con mensaje pre-llenado

### Segmento 3: Consultoria Estrategica
- **Card con tono diferente** - fondo mas calido/distinto para marcar que es otro publico
- Titulo: "Consultoria en Meta y Google Ads"
- Descripcion: "Sesiones personalizadas para revisar tu cuenta, detectar errores y darte un plan claro de accion."
- Bloque "Para quien es":
  - Freelancers que gestionan campanas
  - Emprendedores que quieren aprender a pautar
  - Personas que estan iniciando en publicidad digital
- Bloque "Como funciona" (4 pasos inline):
  1. Eliges tu pack
  2. Agendas dia y hora
  3. Nos conectamos por Google Meet
  4. Recibes la grabacion
- Frase de cierre: "Simple. Directo. Sin vueltas."
- CTA: "Agendar consultoria"

---

## Detalles Tecnicos

### Archivos a modificar:
- `src/components/sections/Services.tsx` - Reescritura completa del componente
- `src/hooks/useServiceSelection.ts` - Actualizar el mapeo de servicios a los 3 nuevos segmentos

### Enfoque tecnico:
- Se mantiene framer-motion para animaciones de entrada
- Se mantiene la funcionalidad de `serviceSelection.set()` para pre-llenar el formulario de contacto al hacer click en cada CTA
- Tres componentes internos: `GrowthSystemCard`, `StructuredPlansGrid`, `ConsultingCard`
- Responsive: el segmento 1 siempre full-width, segmento 2 grid 3 cols en desktop / stack en mobile, segmento 3 full-width
- Se mantiene la estetica glass/card actual del sitio (bg-card/60, backdrop-blur, border-border/50, rounded-2xl)
- Iconos de lucide-react para cada plan (Search, Megaphone, Target, GraduationCap)

### Jerarquia visual:
- Segmento 1: Card mas grande, borde con gradient primary, badge destacado
- Segmento 2: Cards medianas, estilo estandar del sitio
- Segmento 3: Card con acento diferente (violet/purple gradient) para diferenciarse

