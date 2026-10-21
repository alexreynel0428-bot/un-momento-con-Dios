# Un momento con Dios · Cuando mi corazón necesita hablar

Libro digital interactivo de reflexión cristiana para estudiantes de secundaria.
Hecho solo con **HTML, CSS y JavaScript**, sin librerías externas ni dependencias de red.

## Cómo ejecutarlo

1. Mantén juntos estos archivos en la misma carpeta:
   - `index.html`
   - `styles.css`
   - `script.js`
   - carpeta `assets/` (hojas, ramita y textura de papel en SVG)
2. Abre `index.html` con doble clic en cualquier navegador moderno
   (Chrome, Edge, Firefox o Safari). No necesita servidor.
3. Pulsa **“Abrir mi libro”** en la portada y empieza a leer.

## Cómo navegar

- Botones **Anterior / Siguiente**, o las **flechas ← →** del teclado.
- En móvil o tablet, **desliza** el dedo hacia los lados.
- Botón **Índice** (☰): salta a cualquiera de los seis capítulos.
- Botón **Portada** (⌂): vuelve a la cubierta.
- Botón **Sonido** (🔇/🔊): activa o desactiva el sonido suave de papel (apagado por defecto).
- Botón **Movimiento** (∿): cambia a transiciones sencillas (menos animación).
  También se respeta la preferencia del sistema `prefers-reduced-motion`.
- Botón **Imprimir** (⎙): abre el diálogo de impresión / exportar a PDF.

## Diario y oración personal

- Las páginas “Mi corazón quiere hablar”, “Dios, hoy quiero contarte…” y
  “Compromisos y autocuidado” tienen campos para escribir.
- Lo que escribes se guarda **solo en tu dispositivo** (almacenamiento local del
  navegador). **No se envía a ningún servidor** ni a servicios externos, y no hay
  ningún mecanismo para que otras personas lean tus respuestas.
- Puedes **Guardar**, **Descargar (.txt)**, **Imprimir** o **Limpiar** (pide
  confirmación antes de borrar).

## Versión para imprimir / engrapar

- La hoja de estilos incluye un bloque `@media print` que oculta los controles,
  pone cada página en una hoja, conserva marcos y colores, y deja margen interior
  para encuadernar. Desde el navegador elige **Imprimir → Guardar como PDF**.

## Cómo modificar el contenido

- **Textos, versículos, preguntas y oraciones de los capítulos:** edita el
  arreglo `CHAPTERS` al inicio de `script.js`. Todo el contenido de los seis
  capítulos vive ahí, centralizado y fácil de cambiar.
- **Colores:** edita las variables de color en `:root`, al inicio de `styles.css`.
- **Decoración botanica:** los SVG están en `assets/` y pueden reemplazarse.
- **Traducción bíblica:** se define en la constante `BIBLE_VERSION` (por defecto
  Reina-Valera 1960).

## Nota sobre los versículos

Para no presentar reflexiones propias como si fueran texto bíblico, los
versículos se muestran como **paráfrasis claramente identificadas** junto a su
**referencia**, con la invitación a confirmarlos en tu Biblia (RVR1960).

## Nota sobre las imágenes de referencia

No se recibieron archivos de imagen adjuntos, por lo que la decoración botanica
se creó con **SVG originales** siguiendo las ideas visuales descritas (hojas en
las esquinas, marcos finos dobles, verdes y detalles dorados). Si quieres, puedes
enviar las tres imágenes y ajusto las ilustraciones para que se parezcan más.

## Actualización visual: libro abierto y decoración botánica

La hoja de estilos incluye ahora una presentación de libro abierto en pantallas grandes: una página izquierda decorativa y la página de lectura a la derecha, con lomo central, textura de papel y marcos verdes/dorados. La portada conserva su presentación individual. En móviles, la vista vuelve a una sola página para mantener una lectura cómoda.

La decoración usa los recursos SVG locales de `assets/`, por lo que no depende de imágenes externas. Las tarjetas de versículos, preguntas, oraciones y acordeones tienen marcos más orgánicos y pequeños detalles vegetales. Se conserva una zona de lectura clara para no sacrificar la legibilidad.
