import logging

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


@router.post("/quote")
def create_quote(quote: QuoteRequest):
    logger.info("New quote request: %s", quote.model_dump())
    return {"status": "ok"}
