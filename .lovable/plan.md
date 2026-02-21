

# Plan: Mejoras de narrativa, tono y estructura de la web

## Resumen de hallazgos

La web se entiende pero tiene fricciones que reducen la conversion: tuteo inconsistente, la seccion de consultoria es excesivamente larga, falta prueba social, y el "Sobre mi" aparece demasiado tarde.

## Cambios propuestos

### 1. Unificar tono a tuteo profesional (o usted) en TODA la web
- **Archivos**: HeroPersonal.tsx, ProblemSection.tsx, SolutionSection.tsx, Methodology.tsx, Services.tsx, AboutMe.tsx, Contact.tsx
- Elegir un solo tratamiento y aplicarlo consistentemente. Recomiendo tuteo profesional ya que es mas amigable y la mayoria del copy ya lo usa.
- Corregir "si quiere delegar" a "si quieres delegar" en Services
- Revisar cada texto para eliminar mezclas

### 2. Hero: Cambiar subtitulo de ingles a espanol
- **Archivo**: HeroPersonal.tsx
- Reemplazar "Full Stack Marketer & Growth Expert" por algo como "Consultor de crecimiento empresarial" o "Especialista en crecimiento digital"
- Mantener coherencia con el resto del sitio

### 3. Consultoria: Simplificar drasticamente
- **Archivo**: Services.tsx (ConsultingSection)
- Reducir de 6 bloques a 3 bloques maximo:
  1. Header + descripcion breve + para quien es (inline, no 3 cards separadas)
  2. Packs de precios (diferenciar mejor los packs, no repetir mismos 3 beneficios)
  3. CTA directo
- Eliminar "Que vas a lograr" (redundante con la descripcion)
- Eliminar "Como funciona" de 4 pasos (es obvio: pagas, agendas, te conectas)
- Resultado: de 5 pantallas a 2 pantallas de scroll

### 4. Agregar CTA intermedio en Metodologia
- **Archivo**: Methodology.tsx
- Despues de "Solo decisiones basadas en datos" agregar un boton "Ver servicios" o "Conoce como trabajamos"

### 5. Publicidad por Canal: Mejorar copy y visibilidad del CTA
- **Archivo**: Services.tsx (StructuredPlansGrid)
- Cambiar titulo de "Publicidad por Canal" a algo mas atractivo
- Cambiar "Si necesitas trabajar algo puntual:" a copy mas directo
- Hacer el "Consultar" de las cards mas visible (quitar opacity-60)

### 6. Navbar: Quitar "Consultoria" como link separado
- **Archivo**: CavadiaNavbar.tsx
- Mantener solo: Inicio, Como funciona, Servicios, Contacto
- O bien: renombrar para que Consultoria lleve a una subseccion claramente identificable

---

## Detalles tecnicos

### Archivos a modificar:
1. `src/components/sections/HeroPersonal.tsx` - Subtitulo a espanol, revisar tono
2. `src/components/sections/SolutionSection.tsx` - Revisar tono tuteo/usted
3. `src/components/sections/Methodology.tsx` - Agregar CTA al final
4. `src/components/sections/Services.tsx` - Simplificar consultoria, mejorar Publicidad por Canal, unificar tono
5. `src/components/sections/AboutMe.tsx` - Unificar tono
6. `src/components/sections/Contact.tsx` - Revisar tono
7. `src/components/CavadiaNavbar.tsx` - Evaluar quitar Consultoria del nav

### Enfoque:
- No se cambia la estructura visual ni el design system
- Se mantienen las animaciones framer-motion existentes
- Los cambios son principalmente de copy, reduccion de contenido, y un boton nuevo en Metodologia
- La consultoria pasa de ~180 lineas a ~80 lineas aproximadamente

