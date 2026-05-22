import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(
  "Gemini Key:",
  import.meta.env.VITE_GEMINI_API_KEY
);

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function generateQuizFromAI(
  studentClass,
  subject,
  difficulty
) {
  const prompt = `
Generate 5 multiple choice questions.

Class: ${studentClass}
Subject: ${subject}
Difficulty: ${difficulty}

Return ONLY valid JSON.

Example:

[
 {
   "question":"What is 2 + 2?",
   "options":["2","3","4","5"],
   "answer":"4"
 }
]
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}