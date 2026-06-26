# Changelog

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
