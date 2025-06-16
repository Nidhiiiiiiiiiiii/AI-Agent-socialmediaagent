from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.generator import generate_post
from app.services.transcript import get_transcript

router = APIRouter()

class PostRequest(BaseModel):
    video_id: str
    platform: str  # e.g. "LinkedIn", "Instagram"

@router.post("/generate-post/")
def create_post(data: PostRequest):
    try:
        transcript = get_transcript(data.video_id)
        content = generate_post(transcript, data.platform)
        return {"platform": data.platform, "post": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
