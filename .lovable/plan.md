

## Plan: Rediseño profesional de Methodology y AboutMe

### Problema
Ambas secciones tienen demasiado texto, lo que las hace pesadas y poco profesionales. Necesitan ser más concisas, limpias y visuales.

### Cambios en Methodology

**Simplificar drásticamente el contenido:**
- Eliminar la lista de 6 beneficios y la blockquote — demasiado texto redundante
- Dejar solo el título, una línea de subtítulo, y las 4 tarjetas de pasos
- Acortar las descripciones de cada paso a máximo 1 línea (frases cortas y directas)
- Eliminar el cierre "Sin promesas vacías..."
- Resultado: solo header + 4 cards limpias

**Estructura final:**
```text
[section-label] Proceso
[section-title] Así trabajo

  ┌──────────┬──────────┬──────────┬──────────┐
  │ 01       │ 02       │ 03       │ 04       │
  │ Diagnós. │ Estruct. │ Optimiz. │ Escalado │
  │ (1 línea)│ (1 línea)│ (1 línea)│ (1 línea)│
  └──────────┴──────────┴──────────┴──────────┘
```

### Cambios en AboutMe

**Reducir texto, hacer más visual:**
- Eliminar el segundo párrafo largo ("He visto demasiados negocios...")
- Condensar el primer párrafo a 2 líneas máximo
- Mover los stats arriba como protagonistas (más grandes, más impactantes)
- Simplificar el lado derecho: mantener el h3 + blockquote, eliminar el párrafo intermedio
- Título más corto y directo

**Estructura final:**
```text
[section-label] Sobre mí
[section-title] Tu consultor digital

  ┌─────────┬─────────┬─────────┐
  │  50+    │   8+    │  100%   │
  │Proyectos│ Años    │Resultados│
  └─────────┴─────────┴─────────┘

  [1-2 líneas de texto conciso]

  "Pocos clientes, resultados reales"
  [blockquote]
```

### Archivos a modificar
- `src/components/sections/Methodology.tsx` — simplificar contenido
- `src/components/sections/AboutMe.tsx` — reducir texto, reorganizar layout

