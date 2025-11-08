"""Chat service for handling chatbot conversations via RAG."""

from typing import List, Dict, Any, Optional
from openai import OpenAI

from app.core.config import (
    OPENAI_API_KEY,
    CHAT_MODEL,
    CHAT_SYSTEM_PROMPT,
    MAX_CONTEXT_MESSAGES,
)
from app.services.zilliz_service import zilliz_service
from app.services.supabase_service import SupabaseService


class ChatService:
    """Service orchestrating retrieval and generation for chatbot conversations."""

    def __init__(self):
        if not OPENAI_API_KEY:
            raise ValueError("OPENAI_API_KEY is not set. Please configure it in your environment.")

        self.client = OpenAI(api_key=OPENAI_API_KEY)
        self.zilliz_service = zilliz_service
        self.supabase_service = SupabaseService()

    def chat(
        self,
        chatbot_id: str,
        message: str,
        history: Optional[List[Dict[str, str]]] = None,
        top_k: int = 5,
    ) -> Dict[str, Any]:
        """Generate a chatbot response using retrieved context and OpenAI chat model."""

        if not message or not message.strip():
            raise ValueError("Message cannot be empty")

        chatbot = self.supabase_service.get_chatbot(chatbot_id)
        if not chatbot:
            raise ValueError("Chatbot not found")

        chatbot_name = chatbot.get("name", "your assistant")
        chatbot_purpose = chatbot.get("purpose")

        # Start context with bot profile so small-talk questions can be answered
        context_blocks: List[str] = []
        profile_lines = [f"Chatbot Name: {chatbot_name}"]
        if chatbot_purpose:
            profile_lines.append(f"Purpose: {chatbot_purpose}")
        context_blocks.append("Bot Profile:\n" + "\n".join(profile_lines))

        sources: List[Dict[str, Any]] = []

        # Retrieve relevant chunks from vector store
        search_results = self.zilliz_service.search(
            chatbot_id=chatbot_id,
            query_text=message,
            top_k=top_k,
        )

        for idx, result in enumerate(search_results, start=1):
            text = result.get("text", "")
            if text:
                context_blocks.append(f"Source {idx}://\n{text}")

            sources.append(
                {
                    "filename": result.get("filename"),
                    "document_id": result.get("document_id"),
                    "chunk_index": result.get("chunk_index"),
                    "score": result.get("score"),
                }
            )

        context_string = "\n\n".join(context_blocks)

        # Build message history for OpenAI
        system_prompt = CHAT_SYSTEM_PROMPT.format(
            chatbot_name=chatbot_name,
            chatbot_purpose=chatbot_purpose or "helping with the chatbot's knowledge base",
        )

        messages: List[Dict[str, str]] = [
            {"role": "system", "content": system_prompt},
        ]

        if history:
            trimmed_history = history[-MAX_CONTEXT_MESSAGES:]
            for entry in trimmed_history:
                role = entry.get("role")
                content = entry.get("content")
                if role in {"user", "assistant"} and content:
                    messages.append({"role": role, "content": content})

        user_content = (
            "Use the provided context (bot profile and document excerpts) to answer the question. "
            "If the answer truly is not present, say you don't have enough information.\n\n"
            f"Context:\n{context_string}\n\nQuestion: {message.strip()}"
        )

        messages.append({"role": "user", "content": user_content})

        try:
            response = self.client.chat.completions.create(
                model=CHAT_MODEL,
                messages=messages,
                temperature=0.7,
                max_tokens=600,
            )
        except Exception as exc:
            raise Exception(f"OpenAI chat completion failed: {exc}")

        reply = response.choices[0].message.content.strip()

        return {
            "response": reply,
            "sources": sources,
            "chunks_used": len(search_results),
            "chatbot_id": chatbot_id,
        }


# Singleton instance for reuse
chat_service = ChatService()


