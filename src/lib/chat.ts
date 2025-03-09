import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey:
    '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',
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
