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
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")

# Chat LLM configuration
CHAT_MODEL = os.getenv("CHAT_MODEL", "gpt-4o-mini")
MAX_CONTEXT_MESSAGES = int(os.getenv("MAX_CONTEXT_MESSAGES", "5"))
CHAT_SYSTEM_PROMPT = os.getenv(
    "CHAT_SYSTEM_PROMPT",
    (
        "You are {chatbot_name}, a helpful AI assistant. You are designed to answer questions about {chatbot_purpose}. "
        "You will receive context that includes your bot profile followed by relevant excerpts. Always use that "
        "context to answer the question. If the answer cannot be found in the context, state that you do not have "
        "enough information. Do not fabricate details beyond the context provided."
    ),
)

