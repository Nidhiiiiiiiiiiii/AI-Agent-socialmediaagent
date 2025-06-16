from youtube_transcript_api import YouTubeTranscriptApi

def get_transcript(video_id: str) -> str:
    transcript = YouTubeTranscriptApi.get_transcript(video_id)
    text = " ".join([seg['text'] for seg in transcript])
    return " ".join(text.split()[:1500])
