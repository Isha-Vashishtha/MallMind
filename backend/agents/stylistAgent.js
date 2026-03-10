import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeIntent(userInput) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You are a smart retail AI assistant.
Extract structured JSON from user input.

Return ONLY valid JSON in this format:
{
  "product": "",
  "color": "",
  "budget": "",
  "additional_request": ""
}
        `,
      },
      {
        role: "user",
        content: userInput,
      },
    ],
    temperature: 0.2,
  });

  return JSON.parse(response.choices[0].message.content);
}