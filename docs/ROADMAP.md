# Roadmap

## Backend / datos
- [ ] Persistir las solicitudes de `/api/quote` (archivo o, mejor, base de datos Postgres) — hoy solo se loggean.
- [x] Envío real de email/notificación al recibir una cotización — implementado con SendGrid (2026-06-25).
- [ ] Base de datos (Postgres) cuando se necesite para CRM/login.
- [ ] Login/autenticación (si se necesita panel interno o portal de clientes).
- [ ] CRM básico (listado y seguimiento de leads/cotizaciones recibidas).

## Frontend
- [ ] Optimizar/comprimir las imágenes usadas (`frontend/images/`) — varias pesan >2MB sin compresión.
- [ ] Evaluar migrar a Vite si la complejidad de UI crece y vanilla JS deja de ser cómodo.
- [ ] Revisar accesibilidad (alt text, contraste, navegación por teclado del menú mobile).

## Infra
- [x] Conectar GitHub → Vercel (deploy automático del frontend) — live en bfs-sitio-web.vercel.app (2026-06-25).
- [x] Conectar GitHub → Railway (deploy automático del backend) — live en bfs-sitio-web-production.up.railway.app (2026-06-25).
- [ ] Configurar dominio propio si aplica.
