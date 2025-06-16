import os
from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_ollama import OllamaLLM
from langchain_core.runnables import RunnableSequence

load_dotenv()

llm = OllamaLLM(model="mistral")
prompt = PromptTemplate.from_template(
    "You are a witty and professional content creator. Write a post for {platform} based on this video transcript:\n\n{transcript}"
)

chain: RunnableSequence = prompt | llm

def generate_post(transcript: str, platform: str) -> str:
    result = chain.invoke({"platform": platform, "transcript": transcript})
    return result
