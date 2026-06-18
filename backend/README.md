# BFS Backend (FastAPI)

## Correr en local

```
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload --port 8000
```

- API: http://localhost:8000
- Docs interactivas (Swagger): http://localhost:8000/docs
- Health check: GET /health
- Endpoint del formulario de cotización: POST /api/quote

## Deploy (Railway / Render)

- Root directory: `backend`
- Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
- Variable de entorno `ALLOWED_ORIGINS`: dominio del frontend en Vercel (separados por coma si hay varios)
