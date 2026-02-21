
# Rediseño de packs de consultoría: de 3 a 2

## Estrategia como consultor

Tener 3 packs donde los 3 tienen los mismos beneficios genera confusion y no ayuda a decidir. Con 2 packs bien diferenciados creamos un contraste claro que empuja al usuario a elegir rapido.

### Los 2 packs propuestos:

| | Sesion Puntual | Pack Estrategico (Recomendado) |
|---|---|---|
| **Tiempo** | 1 hora | 4 horas (2 sesiones de 2h) |
| **Inversion** | $130.000 (~$50 USD) | $440.000 (~$150 USD) |
| **Beneficios** | Revision de cuentas publicitarias | Todo lo de la sesion puntual |
| | Recomendaciones accionables | Plan estrategico personalizado |
| | Grabacion de la sesion | Seguimiento entre sesiones |
| | | Plantillas y recursos exclusivos |
| | | 2 grabaciones |
| **Para quien** | Tienes una duda concreta o quieres una segunda opinion | Quieres armar o reestructurar tu estrategia completa |

**Por que esta estructura funciona:**
- **Sesion Puntual** es la entrada facil, baja friccion, para quien solo necesita resolver algo rapido
- **Pack Estrategico** es donde esta el valor real y se marca como "Recomendado" para guiar la decision
- Beneficios diferenciados (no repetidos) justifican la diferencia de precio
- El pack de 8 horas se elimina porque a ese nivel el cliente deberia contratar el servicio de Gestion de Crecimiento Integral

## Cambios visuales
- Grid pasa de 3 columnas a 2 columnas (`md:grid-cols-2` con `max-w-2xl mx-auto`)
- Cada pack tiene beneficios unicos que justifican el precio
- El pack recomendado mantiene el borde gradient violeta y badge "Recomendado"

## Detalle tecnico

**Archivo**: `src/components/sections/Services.tsx`

1. Reemplazar el array `packs` (linea 176-179) con 2 packs que incluyen beneficios individuales
2. Cambiar el grid de `md:grid-cols-3` a `md:grid-cols-2` con `max-w-2xl mx-auto` (linea 214)
3. Actualizar el render de cada pack para mostrar beneficios especificos en vez de los 3 genericos repetidos (lineas 242-254)
4. Quitar el subtitulo "Selecciona tu pack" y reemplazar por algo mas directo
