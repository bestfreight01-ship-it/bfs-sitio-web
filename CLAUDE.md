# BFS Website

Sitio institucional de Best Freight Solutions (dispatch/freight para carriers en EE.UU.). Monorepo con frontend estático y backend Python separado.

## Stack

- **Frontend** (`frontend/`): HTML/CSS/JS vanilla, sin build step. Desplegado en Vercel. Bilingüe EN/ES manejado por `frontend/js/main.js` (diccionario `content`, sin librerías).
- **Backend** (`backend/`): FastAPI (Python). Desplegado por separado en Railway/Render — Vercel solo sirve el frontend, no corre Python.
- Sin base de datos todavía. Sin login/CRM todavía (ver `docs/ROADMAP.md`).

## Cómo correr localmente

Backend:
```
cd backend
python -m venv .venv && .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Frontend: abrir `frontend/index.html` directamente o servirlo con `python -m http.server` dentro de `frontend/`. La constante `BACKEND_URL` en `frontend/js/main.js` debe apuntar a la URL del backend (local o producción).

## Reglas para trabajar en este repo

- **No reintroducir React/Babel/cualquier CDN de framework en el frontend.** El sitio se migró deliberadamente de un export de constructor visual (React+Babel vía `unpkg`, transpilado en el navegador) a HTML/CSS/JS plano. Ver `docs/ARCHITECTURE.md` para el porqué.
- Mantener paridad visual con el diseño actual (colores, animaciones, estructura de secciones) salvo que se acuerde un cambio de diseño explícito.
- El backend vive en `backend/` y se despliega aparte del frontend; no asumir que comparten runtime ni que Vercel ejecuta Python.
- Antes de agregar DB, login o CRM, revisar `docs/ROADMAP.md` y `docs/ARCHITECTURE.md` — son decisiones que afectan ambos servicios.
- Registrar cambios relevantes en `docs/CHANGELOG.md` y decisiones técnicas nuevas en `docs/ARCHITECTURE.md`.

## Mapa de documentación

- `docs/ARCHITECTURE.md` — decisiones técnicas y por qué.
- `docs/ROADMAP.md` — backlog (DB, email real, login, CRM, optimización de imágenes).
- `docs/CHANGELOG.md` — historial de cambios por fecha.
- `docs/NOTES.md` — contexto de negocio no derivable del código.
