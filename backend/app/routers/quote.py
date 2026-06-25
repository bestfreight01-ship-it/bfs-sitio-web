import logging
import os

import sendgrid
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel, EmailStr
from sendgrid.helpers.mail import Mail

logger = logging.getLogger("bfs.quote")

router = APIRouter(prefix="/api")


class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    phone: str | None = None
    message: str | None = None


def _send_notification(quote: QuoteRequest):
    api_key = os.getenv("SENDGRID_API_KEY")
    from_email = os.getenv("FROM_EMAIL")
    notify_email = os.getenv("NOTIFY_EMAIL")

    if not api_key or not from_email or not notify_email:
        logger.warning("Email not configured — skipping notification")
        return

    body = f"""Nueva solicitud de cotización desde el sitio web:

Nombre:   {quote.name}
Email:    {quote.email}
Empresa:  {quote.company or "—"}
Teléfono: {quote.phone or "—"}
Mensaje:  {quote.message or "—"}
"""

    message = Mail(
        from_email=from_email,
        to_emails=notify_email,
        subject=f"Nueva cotización BFS — {quote.name}",
        plain_text_content=body,
    )

    sg = sendgrid.SendGridAPIClient(api_key=api_key)
    sg.send(message)
    logger.info("Notification sent for %s", quote.email)


@router.post("/quote")
def create_quote(quote: QuoteRequest, background_tasks: BackgroundTasks):
    logger.info("New quote request: %s", quote.model_dump())
    background_tasks.add_task(_send_notification, quote)
    return {"status": "ok"}
