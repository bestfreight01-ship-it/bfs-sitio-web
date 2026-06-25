# Changelog

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
