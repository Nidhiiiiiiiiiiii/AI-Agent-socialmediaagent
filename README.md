# 🤖 Autonomous AI Content Agent | YouTube → Social Media Post Generator

This project is a production-ready AI **agent** that takes a YouTube video ID, fetches its transcript, and uses **OpenAI GPT-4o** to generate high-quality content for **LinkedIn**, **Instagram**, and more.

It leverages concepts from **LangGraph**, OpenAI's `function_tool`, and async agent orchestration — making it a perfect fit for agentic AI system design.

---

## 🌟 What This Agent Does

- ✅ Fetches transcript from YouTube via video ID
- ✅ Wraps content generation as a `@function_tool`
- ✅ Uses GPT-4o to produce engaging social media content
- ✅ Integrates tools, roles, and agent output types (MCP-style)
- ✅ Fully async, traceable, and extensible for real-world usage

---

## 🛠 Tech Stack

- Python 3.10+
- OpenAI GPT-4o / GPT-4o-mini
- dotenv for API key management
- youtube-transcript-api
- LangGraph-style Agent framework
- WebSearchTool (optional external reasoning tool)

---

## 🚀 How to Use

1. **Clone this repo**
```bash
git clone https://github.com/your-username/social-content-agent.git
cd social-content-agent
pip install -r requirements.txt
Add your .env
OPENAI_API_KEY=your_openai_key
python main.py
