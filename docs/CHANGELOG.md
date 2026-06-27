# Changelog

## 2026-06-26 (Loads Gallery — autoplay)
- Activado autoplay en el slider de cargas: avance automático a la siguiente imagen cada 5 segundos.
- Implementado con `setInterval(() => goTo(current + 1), 5000)` al final de `initLoadsSlider`.
- Reutiliza `goTo()` existente: el `busy` flag previene conflictos si el interval dispara durante una transición manual; ese tick se omite y el siguiente se dispara 5 segundos después.
- El loop infinito (clone approach) sigue activo: al pasar la última imagen vuelve automáticamente a la primera.
- Las flechas y dots manuales coexisten sin interrumpir el ciclo.

## 2026-06-26 (Broker Network — logos reales, mobile fix, ajustes de tamaño)
- Reemplazados los iconos emoji de los 8 brokers por logos oficiales en PNG almacenados en `frontend/images/brokers/` (tql, landstar, pls, ats, ryan-transportation, armstrong, trinity, axle-logistics).
- Cards actualizadas: `<img>` con `data-logo` attribute para targeting CSS individual. Subtítulo de tipo de broker eliminado — cada card muestra solo logo + nombre.
- Solucionado desbordamiento en mobile (≤600px): `max-width: 100%` en todas las imágenes de logo + `overflow: hidden` en `.auth-broker-logo` evita que imágenes anchas rompan el grid de 2 columnas.
- Corregida regla de dividers del Stats Belt en ≤600px: `nth-child(odd)` → `nth-child(even)` — los separadores ahora aparecen correctamente entre columnas y no en el borde derecho del grid.
- Logos Landstar, Armstrong y PLS escalados a `max-height: 52px` (vs 38px del resto) mediante selector `[data-logo]` individual.
- Cache-bust incremental (`?v=2`, `?v=3`) al actualizar archivos para forzar descarga del asset nuevo en browser y CDN.

## 2026-06-26 (Our Journey — slider de cargas completamente refactorizado)
- **Layout reorganizado**: `.loads-gallery-inner` cambiado de grid `1fr / 1.8fr` (texto izquierda, slider derecha) a `flex-column` — texto centrado como header arriba, slider full-width abajo.
- **Flechas extraídas del slider**: nuevo `.loads-slider-wrap` con `padding: 0 48px` aloja las flechas ← → fuera del recuadro de imagen. Estilo: fondo navy sólido, `box-shadow`, hover gold con `scale(1.08)`.
- **Bug crítico de navegación corregido**: `translateX(-${current * 100}%)` usaba `%` relativo al ancho del track (5× el contenedor), causando pantalla negra en cada navegación. Reemplazado por valores en `px` vía `offsetWidth`.
- **Carousel infinito (clone approach)**: clon del último slide prependido + clon del primero appendido. Layout `[clonLast=0 | slide1 | ... | slide5 | clonFirst=total+1]`. Al llegar a un clon, `transitionend` hace snap invisible al slide real correspondiente. Dirección circular en ambos sentidos sin pantallas negras.
- `transition` movida de CSS a JS para poder desactivarla durante el snap. `busy` flag previene doble-click mid-transición. `resize` recalcula offset en px.
- Mobile: `padding: 0 38px`, flechas `38×38px`.

## 2026-06-26 (Our Journey — galería de cargas)
- Agregada nueva sección "Loads Gallery" entre Stats Belt y Timeline en `/our-journey`.
- Slider horizontal de 5 imágenes de cargas completadas (`frontend/images/loads/1-5.png`), navegación ← → + dots indicadores + contador "1 / 5".
- Copywriting premium (EN/ES): "Operational Excellence. Proven Results." / "Loads Managed With Experience and Precision".
- Bilingüe completo vía `content` dict; `loadsSliderDone` flag evita re-inicialización en cambio de idioma.
- Wrappers de animación scroll-in actualizados para incluir la nueva sección en el orden correcto del DOM.

## 2026-06-26 (Our Journey — imagen de fondo en sección Timeline)
- Sección "Growing Since 2021" (`.auth-journey-wrap`) reemplazó el fondo plano por `our-journey-timeline.png` (mapa mundial con ruta de crecimiento y 5 pins de ubicación, 1.56MB).
- Overlay `rgba(10,30,37,0.88)` para mantener contraste. Todos los colores de texto de la sección sobreescritos a white/rgba para visibilidad sobre fondo oscuro.

## 2026-06-26 (Our Journey — hero image)
- Reemplazado el fondo CSS degradado de la Hero Section de `/our-journey` por la imagen real `our-journey-hero.png` (camión + skyline urbano), almacenada en `frontend/images/`.
- Overlay oscuro conservado vía `::before` con gradiente `rgba(10,30,37,0.82)` para mantener legibilidad del texto.
- `background-size: cover` + `background-position: center center` para encuadre premium en cualquier resolución.
- `min-height: 420px` añadido al hero; en mobile (≤768px) se ajusta a `center top` y padding reducido a `120px 0 60px`.
- Z-index explícito: overlay `z-index: 0`, acento dorado `z-index: 1`, contenido de texto `z-index: 2`.
- Sin cambios en estructura HTML, navegación ni otras secciones.

## 2026-06-26 (Navbar — dropdown "Company / Empresa")
- Agrupados "Services / About / Contact" dentro de un dropdown con label "Company" (EN) / "Empresa" (ES).
- "Our Journey" / "Nuestra Trayectoria" se mantiene como botón independiente (página separada).
- Dropdown se abre con hover (CSS) y click (JS), se cierra con Escape o click externo.
- Mobile: los items se renderizan planos (flat) como antes, sin dropdown anidado.
- Event delegation en `#nav` para sobrevivir re-renders por cambio de idioma.
- CSS: `.nav-dropdown`, `.nav-dropdown-btn`, `.nav-dropdown-menu` con animación fade+slide.

## 2026-06-26 (Our Journey — página separada)
- Movida la sección `#authority` fuera de `index.html` hacia una nueva página independiente: `frontend/our-journey.html`.
- Nueva página accesible en `/our-journey` (Vercel `cleanUrls: true` mapea `our-journey.html` → `/our-journey`).
- Agregado enlace "Our Journey" / "Nuestra Trayectoria" en la navbar desktop y mobile de ambas páginas.
- En la página journey, el enlace aparece en dorado (`.nav-link-active`) indicando la página activa.
- Nuevo page hero en `our-journey.html`: gradiente oscuro con título bilingüe "Our Track Record & Company Story".
- `main.js` actualizado: detección de página via `isHome = !!document.getElementById('hero-title')`, guards para elementos home-only, cross-page navigation (links de sección usan `/#section` desde la página journey), guard para el form event listener.
- CSS: agregadas clases `.journey-page-hero` y `.nav-link-active`.
- Home principal sin cambios: mismas secciones, misma funcionalidad.

## 2026-06-26 (Authority Section — nueva sección premium)
- Agregada sección `#authority` entre el segundo photo banner y los testimonios. Contiene 6 subsecciones:
  1. **Stats Belt**: 5 métricas animadas con contadores (5,000+ Loads / $6M+ Revenue / 1.9M+ Miles / 1,000+ Brokers / 85+ Recurring), fondo oscuro (#0a1e25), números en gold.
  2. **Journey Timeline**: Línea de tiempo horizontal (desktop) / vertical (mobile) 2021→2025 con hitos, métricas por año y descripciones reales de crecimiento.
  3. **Why Carriers Trust Us + Philosophy Box**: Grid 2 columnas — izquierda: 6 razones de confianza con iconos; derecha: caja oscura con filosofía operativa "Every truck is a business."
  4. **Trusted Broker Network**: Grid 4×2 de 8 brokers (TQL, Landstar, PLS, ATS, Ryan, Armstrong, Trinity, Axle) sobre fondo #0d2028.
  5. **Latino Community**: Split layout — texto con tags culturales + card bilingüe "Hablamos tu idioma / We speak your language."
  6. **Final CTA**: Sección oscura con gradient, heading premium y botón "Start Working With BFS →" / "Empieza a Trabajar con BFS →".
- Implementado bilingüe completo (EN/ES) para todas las subsecciones vía el sistema existente `content` + `render()`.
- Counters re-animan en cada cambio de idioma si están en viewport.
- Animaciones de scroll-in (IntersectionObserver) para wrappers e items individuales (timeline, broker cards) con stagger por índice.
- CSS completamente responsive: 5 cols → 3 cols (1000px) → 2 cols (600px) para stats; timeline horizontal → vertical en mobile.
- Ninguna funcionalidad existente alterada (nav, formulario, scroll, testimonios, contacto).

## 2026-06-25 (mobile menu layout)
- Corregido layout del menú mobile: los `<a>` dentro de `#mobile-menu-links` eran `display: inline` por defecto, causando que Services/About/Contact se renderizaran en una sola línea. Agregado `display: block` al CSS para que se apilen correctamente.

## 2026-06-25 (navegación)
- Corregido bug crítico de navegación: la función global `scrollTo` sobreescribía `window.scrollTo`, causando que todos los clicks en nav links y botones fallaran silenciosamente sin hacer scroll.
- Renombrada a `scrollToSection` y actualizada para usar `getBoundingClientRect()` en vez de `offsetTop` para mayor precisión.
- Afectaba: Services, About, Contact en navbar, botón "Get a Quote", botón "Learn More" y menú mobile (hamburguesa) — todos ahora funcionan correctamente en desktop y mobile.

## 2026-06-25
- Repositorio subido a GitHub (`bestfreight01-ship-it/bfs-sitio-web`), rama `main` como default.
- Frontend desplegado en Vercel (`https://bfs-sitio-web.vercel.app`), root directory configurado en `frontend/`.
- Backend desplegado en Railway (`https://bfs-sitio-web-production.up.railway.app`), root directory `backend/`, start command `uvicorn app.main:app --host 0.0.0.0 --port $PORT`.
- CORS configurado vía variable de entorno `ALLOWED_ORIGINS` en Railway apuntando al dominio de Vercel.
- `BACKEND_URL` en `frontend/js/main.js` actualizado para apuntar al backend en Railway.
- Implementado envío de email al recibir una cotización usando SendGrid (plan gratuito). El email se envía en segundo plano para que el formulario responda de forma instantánea.
- Variables de entorno en Railway: `SENDGRID_API_KEY`, `FROM_EMAIL`, `NOTIFY_EMAIL`.
- Imágenes convertidas de PNG a WebP (~93% de reducción de peso, de ~20MB a ~1.5MB en total).
- Mejoras de accesibilidad: `aria-label` en logo del nav, `aria-expanded`/`aria-hidden` en menú mobile, cierre con tecla Escape, labels del formulario correctamente asociados a sus inputs con `for`/`id`.

## 2026-06-18
- Migración completa desde el export del constructor visual (`index.html` monolítico con React+Babel vía CDN) a un monorepo `frontend/` (HTML/CSS/JS vanilla) + `backend/` (FastAPI).
- Formulario de cotización conectado a un endpoint real (`POST /api/quote`) en vez de estar simulado en cliente.
- Se descartaron del repo los HTML duplicados (`Best Freight Solutions.html`, `BFS-compartir.html`, `index.html.html`) y `.thumbnail`, artefactos del builder visual.
- Se migraron solo las 9 imágenes efectivamente usadas por el sitio (de las 68 que había en `uploads/`) a `frontend/images/`.
