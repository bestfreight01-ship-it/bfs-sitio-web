import logging
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

logger = logging.getLogger("bfs.quote")

router = APIRouter(prefix="/api")


class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    phone: str | None = None
    message: str | None = None


def _send_notification(quote: QuoteRequest):
    gmail_user = os.getenv("GMAIL_USER")
    gmail_password = os.getenv("GMAIL_APP_PASSWORD")
    notify_email = os.getenv("NOTIFY_EMAIL", gmail_user)

    if not gmail_user or not gmail_password:
        logger.warning("Email not configured — skipping notification")
        return

    body = f"""Nueva solicitud de cotización desde el sitio web:

Nombre:   {quote.name}
Email:    {quote.email}
Empresa:  {quote.company or "—"}
Teléfono: {quote.phone or "—"}
Mensaje:  {quote.message or "—"}
"""

    msg = MIMEMultipart()
    msg["From"] = gmail_user
    msg["To"] = notify_email
    msg["Subject"] = f"Nueva cotización BFS — {quote.name}"
    msg.attach(MIMEText(body, "plain", "utf-8"))

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, notify_email, msg.as_string())
    logger.info("Notification sent for %s", quote.email)


@router.post("/quote")
def create_quote(quote: QuoteRequest):
    logger.info("New quote request: %s", quote.model_dump())
    try:
        _send_notification(quote)
    except Exception:
        logger.exception("Failed to send email notification")
    return {"status": "ok"}
