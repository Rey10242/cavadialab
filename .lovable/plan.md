
# Quitar línea redundante del Hero y reorganizar espaciado

## Cambio

En `src/components/sections/HeroPersonal.tsx`, eliminar el párrafo de la línea 56-58:

```
"Estructuro tu marketing para que cada peso invertido te acerque a una venta."
```

Esta frase es redundante con el tagline principal ("Hago que tu negocio venda más, con orden y sin improvisar") y con la sección La Solución que viene después.

## Resultado

El Hero queda así (de arriba a abajo):
1. Badge "Disponible para proyectos"
2. "Hola, soy Reynaldo Montalvo Cavadia"
3. "Experto en Crecimiento Digital"
4. "Hago que tu negocio venda más, con orden y sin improvisar."
5. Botones CTA

Más limpio, más escaneable, sin repetir ideas.

## Detalle técnico

- **Archivo**: `src/components/sections/HeroPersonal.tsx`
- Eliminar líneas 56-58 (el `<p>` con "Estructuro tu marketing...")
- Cambiar el `mb-4` del tagline principal (línea 50) a `mb-8` para que el espacio hacia los botones quede bien balanceado
