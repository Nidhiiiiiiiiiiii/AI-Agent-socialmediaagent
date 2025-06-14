# 🤖 Autonomous AI Content Agent | YouTube → Social Media Post Generator

This project is a production-ready AI **agent** that takes a YouTube video ID, fetches its transcript, and uses **OpenAI GPT-4o** to generate high-quality content for **LinkedIn**, **Instagram**, and more.

It leverages concepts from **LangGraph**, OpenAI's `function_tool`, and async agent orchestration — making it a perfect fit for agentic AI system design.

---

## 🌟 What This Agent Does

- ✅ Fetches transcript from YouTube via video ID
- ✅ Wraps content generation as a `@function_tool`
- ✅ Uses GPT-4o to produce engaging social media content
- ✅ Integrates tools, roles, and agent output types (MCP-style)
- ✅ Fully async, traceable, and extensible for real-world usage!


---

## 🛠 Tech Stack

- Python 3.10+
- OpenAI GPT-4o / GPT-4o-mini
- dotenv for API key management
- youtube-transcript-api
- LangGraph-style Agent framework
- WebSearchTool (optional external reasoning tool)

---
# FREE VERSION TO CREATE AI AGENT USING OLLAMA

# 🎯 Agentic Social Media Post Generator using YouTube Videos & Local LLM (Ollama)

This project is an **AI-powered content agent** that takes a YouTube video, extracts its transcript, and generates engaging social media posts (e.g., for LinkedIn, Instagram) — all powered **locally** using `Ollama` and `LangChain`.

No OpenAI API needed. Runs fully offline using local LLMs like `mistral`, `llama3`, etc.

---

## 🚀 Features

- 🔍 Automatically fetches YouTube video transcripts
- 🧠 Uses local language model (`Ollama`) for text generation
- 📣 Generates platform-specific social media posts (e.g., LinkedIn, Instagram)
- ⚡ Fast and private (no external APIs required)
- ✅ Clean and modular LangChain pipeline

---
[Screenshot 2025-06-14 140419](https://github.com/user-attachments/assets/e715299e-9e0f-4bee-8da2-2e18e0cfb373)
---
## 📦 Requirements

- Python 3.10+
- [Ollama](https://ollama.com/) installed locally with a model (e.g. `mistral`, `llama3`)
- Internet connection (for downloading YouTube transcripts)

---

## 🛠 Installation
```bash
# 1. Clone the repo
git clone https://github.com/your-username/agentic-social-media-ai.git
cd agentic-social-media-ai

# 2. Set up virtual environment
python -m venv venv
venv\Scripts\activate   # Windows

# 3. Install dependencies
pip install -r requirements.txt
# 4. 🧠 Run Ollama (in separate terminal)
ollama run mistral
#You can also use other supported models:
#ollama run llama3
#ollama run gemma
#▶️ Usage
#Update the YouTube video ID inside main.py:video_id = "QIKTjNZK7sU"
# 5. Then run the agent:
python main.py
```
# You will see:
>> 

📣 LinkedIn Post:

🌿🥕🐰🐭 Forest Friends: A Tale of Sharing and Loss 🐭🥕🐰🌿

Friends, gather 'round for a tale that underscores the importance of sharing, the perils of greed, and the power of second chances. This heartwarming story revolves around two unlikely forest pals: Big Carrot, the humble root vegetable, and Rabbit and Squirrel, our furry friends.

One sunny day in the enchanted forest, Rabbit discovered Big Carrot nestled near a bush. Overwhelmed by its size and allure, Rabbit's greed took over, and he resolved to keep it for himself. With a skip and a hop, he embarked on his journey home, but little did he know that his decision would lead him down an unexpected path.

As Rabbit crossed the bridge, Big Carrot slipped from his paw and plunged into the river below. Heartbroken and remorseful, Rabbit cried out in dismay: "I lost my big carrot!" In that moment of sorrow, he realized that if only he had shared with Squirrel, perhaps this fiasco could have been avoided.

And so, dear friends, we learn a valuable lesson: sometimes, bad thinking yields poor results. Remember to always consider the impact of your choices on others and yourself.

Now, here's a fun fact for you - did you know that carrots are not only delicious but also excellent for your eyesight? So go ahead and ask your mother for a lovely carrot, and take a healthy bite into raw goodness! 🥕

Thank you for reading, and until next time - may we all learn from Rabbit's experience and always remember the importance of sharing. 🐰🌿🐭��

📣 Instagram Post:

🌿🐰🌲 Forest friends, 👀 meet Rabbit and Squirrel! Their bond was tested when Rabbit stumbled upon a big, juicy carrot near a bush. 🥕

With a greedy gleam in his eye, he thought, "I'll eat it all by myself." But alas, as he crossed the bridge, the carrot slipped from his paw and plunged into the river. 😞

"I lost my big carrot!" Rabbit cried out in dismay. "I should have shared it with Squirrel."

This story serves as a reminder that sometimes, being selfish can lead to poor results. Let's always choose kindness and share our blessings! 💙

And while we're on the topic of carrots, remember: they're not just tasty, but super good for your eyes! So go ahead, ask Mom for a lovely carrot, and don't forget to eat it raw! 🥕🧑‍🍳

See you soon, forest friends! 🌲🐰💚 #ForestFriends #CarrotTale #SharingIsCaring #EatYourCarrots #HealthyHabits


Discover how AI is transforming content creation! This video explores the power of local LLMs and LangChain...
🤖 Boost your content game with AI! In just 60 seconds, this video shows how to turn transcripts into 🔥 posts.

## 📁 File Structure
agentic-social-media-ai/
│
├── main.py               # Main script to generate posts
├── requirements.txt      # Python dependencies
└── README.md             # This file
## 📚 Tech Stack
Python
LangChain
Ollama
YouTube Transcript API
