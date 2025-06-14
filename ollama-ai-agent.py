import os
from dotenv import load_dotenv
from youtube_transcript_api import YouTubeTranscriptApi
from langchain_core.prompts import PromptTemplate
from langchain_ollama import OllamaLLM
from langchain_core.runnables import RunnableSequence

load_dotenv()

video_id = "QIKTjNZK7sU"

def get_transcript(video_id: str) -> str:
    transcript = YouTubeTranscriptApi.get_transcript(video_id)
    text = " ".join([segment['text'] for segment in transcript])
    
    # ⚠️ Truncate if too long (approx. 2000 words max)
    words = text.split()
    return " ".join(words[:1500])  # adjust based on model limits

transcript = get_transcript(video_id)

prompt = PromptTemplate.from_template(
    "You are a witty and professional content creator. Write a post for {platform} based on this video transcript:\n\n{transcript}"
)

llm = OllamaLLM(model="mistral")
chain: RunnableSequence = prompt | llm

for platform in ["LinkedIn", "Instagram"]:
    print(f"\n📣 {platform} Post:\n")
    result = chain.invoke({"platform": platform, "transcript": transcript})
    print(result)
