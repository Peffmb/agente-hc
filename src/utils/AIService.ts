interface AIResponse {
  success: boolean;
  data?: string;
  error?: string;
}

export class AIService {
  private static API_KEY_STORAGE_KEY = 'openai_api_key';
  private static API_URL = 'https://api.openai.com/v1/chat/completions';

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async testApiKey(apiKey: string): Promise<boolean> {
    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: 'Hello'
            }
          ],
          max_tokens: 5
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error testing API key:', error);
      return false;
    }
  }

  static async sendMessage(message: string): Promise<AIResponse> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found' };
    }

    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Você é um assistente de IA do Hospital do Câncer de Maringá. Você ajuda com informações gerais, processos hospitalares e dúvidas administrativas. Seja sempre educado, profissional e útil. Responda em português brasileiro.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return { 
          success: false, 
          error: errorData.error?.message || `HTTP Error: ${response.status}` 
        };
      }

      const data = await response.json();
      const aiMessage = data.choices[0]?.message?.content;

      if (aiMessage) {
        return { success: true, data: aiMessage };
      } else {
        return { success: false, error: 'No response from AI' };
      }
    } catch (error) {
      console.error('Error sending message:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to connect to AI service' 
      };
    }
  }
}