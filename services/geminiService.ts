import { GoogleGenAI } from "@google/genai";
import { PROFILE_DATA, RESUME_EXPERIENCE, RESUME_EDUCATION, SKILLS } from '../constants';

// Context construction for the AI
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PROFILE_DATA.name}'s portfolio website.
Your goal is to answer questions about ${PROFILE_DATA.name} based ONLY on the provided context.
Be professional, friendly, and concise.
If the answer is not in the context, say you don't have that information but suggest contacting ${PROFILE_DATA.name} directly.

Context:
Name: ${PROFILE_DATA.name}
Roles: ${PROFILE_DATA.role.join(', ')}
About: ${PROFILE_DATA.aboutShort} ${PROFILE_DATA.aboutLong}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${JSON.stringify(RESUME_EXPERIENCE)}
Education: ${JSON.stringify(RESUME_EDUCATION)}
Contact: ${PROFILE_DATA.email}, ${PROFILE_DATA.phone}
`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct the chat history for the API
    // We start a new chat each time for simplicity in this stateless service wrapper, 
    // but in a real app you might persist the Chat object. 
    // Here we just use generateContent for a single turn or reconstruct history if needed.
    // However, the best way for a simple widget is to use the Chat API.
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the brain right now. Please try again later.";
  }
};