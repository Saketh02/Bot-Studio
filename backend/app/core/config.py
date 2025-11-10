import os
from dotenv import load_dotenv

load_dotenv()

# Application
APP_NAME = os.getenv("APP_NAME", "RAG Chatbot Framework")
APP_ENV = os.getenv("APP_ENV", "development")
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
API_HOST = os.getenv("API_HOST", "0.0.0.0")
API_PORT = int(os.getenv("API_PORT", "8000"))

# Supabase
SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "")

# Zilliz Cloud (Serverless)
ZILLIZ_URI = os.getenv("ZILLIZ_URI", "")
ZILLIZ_TOKEN = os.getenv("ZILLIZ_TOKEN", "")

# Embeddings (OpenAI)
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "text-embedding-3-small")
EMBEDDING_DIMENSION = int(os.getenv("EMBEDDING_DIMENSION", "1536"))  # text-embedding-3-small outputs 1536-d vectors

# Chunking
CHUNK_SIZE = int(os.getenv("CHUNK_SIZE", "500"))
CHUNK_OVERLAP_PERCENT = float(os.getenv("CHUNK_OVERLAP_PERCENT", "0.2"))

# CORS
CORS_ORIGINS = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]

# Chat LLM configuration
CHAT_MODEL = os.getenv("CHAT_MODEL", "gpt-4o-mini")
MAX_CONTEXT_MESSAGES = int(os.getenv("MAX_CONTEXT_MESSAGES", "5"))
CHAT_SYSTEM_PROMPT = os.getenv(
    "CHAT_SYSTEM_PROMPT",
    (
        "You are {chatbot_name}, a helpful and knowledgeable AI assistant.\n\n"
        "You are designed to answer questions about {chatbot_purpose}.\n\n"
        "You will receive context that includes your bot profile followed by relevant excerpts.\n"
        "Use that context to provide accurate, concise, and relevant answers to user questions.\n\n"
        "If a question directly relates to the provided context, answer strictly based on it.\n"
        "If the context does not contain relevant information, you may respond naturally and conversationally "
        "(for example, to greetings, small talk, or generic questions), but do not invent factual details.\n\n"
        "When the user asks a factual or knowledge-based question and the context lacks the answer, "
        "politely say that you do not have enough information."
    ),
)

