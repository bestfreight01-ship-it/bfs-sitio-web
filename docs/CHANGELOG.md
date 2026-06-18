# Changelog

## 2026-06-18
- Migración completa desde el export del constructor visual (`index.html` monolítico con React+Babel vía CDN) a un monorepo `frontend/` (HTML/CSS/JS vanilla) + `backend/` (FastAPI).
- Formulario de cotización conectado a un endpoint real (`POST /api/quote`) en vez de estar simulado en cliente.
- Se descartaron del repo los HTML duplicados (`Best Freight Solutions.html`, `BFS-compartir.html`, `index.html.html`) y `.thumbnail`, artefactos del builder visual.
- Se migraron solo las 9 imágenes efectivamente usadas por el sitio (de las 68 que había en `uploads/`) a `frontend/images/`.
