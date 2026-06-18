# Arquitectura

## 2026-06-18 — Migración desde export de constructor visual

**Contexto:** el sitio original era un único `index.html` (export de un builder visual tipo AI website builder) que cargaba React 18 + ReactDOM + Babel Standalone desde `unpkg` y transpilaba JSX en el navegador en cada visita. Sin Git, sin build, sin backend. El formulario de cotización era simulado (no enviaba datos a ningún lado).

**Decisión:** separar en dos servicios independientes:

1. **Frontend estático** (HTML/CSS/JS vanilla, sin framework) — desplegado en Vercel.
2. **Backend en Python (FastAPI)** — desplegado en Railway o Render, NO en Vercel.

**Por qué este enfoque y no otras alternativas consideradas:**

- *Next.js + API routes en Vercel*: se descartó porque el usuario pidió explícitamente Python para el backend (formularios, futuro login/CRM), y las funciones serverless de Python en Vercel tienen limitaciones (cold starts, sin conexiones persistentes fáciles a DB, tamaño de paquete limitado) que las hacen poco aptas para CRM/login con base de datos a futuro.
- *Django/Flask full-stack renderizando el frontend*: no es el modelo de despliegue para el que Vercel está optimizado; forzaría a mover también el frontend a otro hosting sin necesidad real.
- *Mantener React vía CDN+Babel*: descartado por performance (transpilación de JSX en cada carga del visitante) y porque complica la integración con un backend Python real sin agregar un build step.

**Resultado:** frontend liviano sin build step, backend con tipado y validación (Pydantic) listo para crecer hacia DB/auth sin migrar de stack otra vez.

## Pendiente de decidir (cuando se necesite)

- Base de datos: Postgres (Neon o el addon de Railway/Render) cuando se necesite persistir cotizaciones, usuarios o datos de CRM.
- Envío de email real: proveedor SMTP/transaccional (ej. Resend, SendGrid) para notificar cotizaciones — no implementado todavía, el endpoint solo loggea.
- Autenticación: si se agrega login, evaluar Auth.js/NextAuth (si el frontend migra a un framework con SSR) o un esquema JWT propio servido por FastAPI.
