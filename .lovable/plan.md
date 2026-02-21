

# Cambio de subtítulo en el Hero

## Cambio propuesto

En `src/components/sections/HeroPersonal.tsx`, reemplazar el subtítulo actual:

**Actual:** "Consultor de Crecimiento Empresarial"

**Nuevo:** "Experto en Crecimiento Digital"

### Por qué esta versión y no las otras

- "Experto en Crecimiento Empresarial Digital" es demasiado largo para un subtítulo (5 palabras donde 3 bastan).
- "Experto en Crecimiento Digital" es corto, escaneable, suena con autoridad y cubre todo lo que haces sin limitarte a "consultor" (que suena a alguien que solo da consejos, no que ejecuta).

### Detalle técnico

- **Archivo**: `src/components/sections/HeroPersonal.tsx` linea ~50
- Se cambia solo el texto del `<p>` con clase `text-xl md:text-2xl text-primary font-medium`

