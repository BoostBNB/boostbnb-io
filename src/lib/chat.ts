import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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"
});

export async function askChatGPT(prompt: string): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
  
      return response.choices[0]?.message?.content || 'No response from ChatGPT';
    } catch (error) {
      console.error('Error querying ChatGPT:', error);
      throw new Error('Failed to query ChatGPT');
    }
  }
  