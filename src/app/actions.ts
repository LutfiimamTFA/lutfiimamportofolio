'use server';

import { aiPortfolioAssistant } from '@/ai/flows/ai-portfolio-assistant';
import { z } from 'zod';

const AskAIInputSchema = z.object({
  question: z.string().min(5, "Question must be at least 5 characters long."),
});

export type AskAIState = {
  answer?: string;
  error?: string;
  question?: string;
};

export async function askAI(
  prevState: AskAIState,
  formData: FormData
): Promise<AskAIState> {
  const validatedFields = AskAIInputSchema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.question?.join(', '),
    };
  }
  
  const question = validatedFields.data.question;

  try {
    const result = await aiPortfolioAssistant({ question });
    if (result.answer) {
      return { answer: result.answer, question };
    } else {
      return { error: 'I could not find an answer to your question.', question };
    }
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred. Please try again.', question };
  }
}
