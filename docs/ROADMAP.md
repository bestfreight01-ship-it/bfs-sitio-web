# Roadmap

## Backend / datos
- [ ] Persistir las solicitudes de `/api/quote` (archivo o, mejor, base de datos Postgres) — hoy solo se loggean.
- [ ] Envío real de email/notificación al recibir una cotización (SMTP o proveedor transaccional).
- [ ] Base de datos (Postgres) cuando se necesite para CRM/login.
- [ ] Login/autenticación (si se necesita panel interno o portal de clientes).
- [ ] CRM básico (listado y seguimiento de leads/cotizaciones recibidas).

## Frontend
- [ ] Optimizar/comprimir las imágenes usadas (`frontend/images/`) — varias pesan >2MB sin compresión.
- [ ] Evaluar migrar a Vite si la complejidad de UI crece y vanilla JS deja de ser cómodo.
- [ ] Revisar accesibilidad (alt text, contraste, navegación por teclado del menú mobile).

## Infra
- [ ] Conectar GitHub → Vercel (deploy automático del frontend).
- [ ] Conectar GitHub → Railway/Render (deploy automático del backend).
- [ ] Configurar dominio propio si aplica.
