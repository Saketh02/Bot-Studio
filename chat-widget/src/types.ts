export interface WidgetOptions {
  chatbotId: string;
  apiBaseUrl: string;
  launcherLabel?: string;
  theme?: "light" | "dark";
  title?: string;
  welcomeMessage?: string;
  accentColor?: string;
  subtitle?: string;
  position?: "bottom-right" | "bottom-left";
  panelHeight?: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  pending?: boolean;
  error?: boolean;
}

export interface ChatResponse {
  response: string;
  sources?: Array<{
    filename?: string | null;
    chunk_index?: number | null;
  }>;
}

