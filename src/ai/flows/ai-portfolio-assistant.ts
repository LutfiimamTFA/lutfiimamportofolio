'use server';
/**
 * @fileOverview An AI-powered assistant that answers questions about the developer's portfolio content.
 *
 * - aiPortfolioAssistant - A function that handles answering questions based on the portfolio.
 * - AiPortfolioAssistantInput - The input type for the aiPortfolioAssistant function.
 * - AiPortfolioAssistantOutput - The return type for the aiPortfolioAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPortfolioAssistantInputSchema = z.object({
  question: z.string().describe("The user's question about the developer's portfolio."),
});
export type AiPortfolioAssistantInput = z.infer<typeof AiPortfolioAssistantInputSchema>;

const AiPortfolioAssistantOutputSchema = z.object({
  answer: z.string().describe("The AI's answer based on the portfolio content."),
});
export type AiPortfolioAssistantOutput = z.infer<typeof AiPortfolioAssistantOutputSchema>;

export async function aiPortfolioAssistant(input: AiPortfolioAssistantInput): Promise<AiPortfolioAssistantOutput> {
  return aiPortfolioAssistantFlow(input);
}

const portfolioContent = `
# Developer Portfolio Content

## 1. Hero Section
Name and Role: Web Developer
Description: "Saya Web Developer dengan pengalaman membangun aplikasi berbasis web seperti sistem manajemen tugas, HR system, CRM, serta sistem pengadaan barang untuk instansi pemerintah. Fokus pada pengembangan sistem yang efisien, terstruktur, dan sesuai kebutuhan bisnis."

## 2. About Me
Description: "Saya lulusan Teknik Informatika dengan pengalaman magang sebagai Web Developer di PT Environesia Global Saraya melalui program MagangHub Kementerian Ketenagakerjaan. Selama masa kuliah, saya juga mengikuti program MBKM dengan mengembangkan website sistem pengadaan barang untuk Dinas Peternakan dan Perikanan Kabupaten Blitar. Saya terbiasa mengembangkan aplikasi berbasis web dan bekerja dalam tim menggunakan metode Agile. Dalam proses pengembangan, saya memanfaatkan AI sebagai tools untuk mempercepat pengerjaan, membantu analisis solusi, dan meningkatkan efisiensi, tanpa mengabaikan kualitas dan struktur kode."

## 3. Featured Projects
- **Project 1 – CBDMS Workspace**
  Sistem manajemen tugas berbasis web dengan fitur Kanban interaktif, manajemen tugas, dependensi, dan dashboard real-time.
  Tech: Firebase, Firestore, Web App
  Role: Full Development

- **Project 2 – HR Platform System**
  Sistem HR untuk mengelola rekrutmen, data karyawan, dan proses approval bertingkat.
  Tech: Web App, Database System
  Role: Development

- **Project 3 – CRM WhatsApp Integration (WAHA)**
  Sistem CRM yang terhubung dengan WhatsApp untuk monitoring aktivitas dan performa sales.
  Tech: WAHA, API Integration
  Role: Build from scratch

- **Project 4 – Sistem Pengadaan Barang (MBKM)**
  Website pengadaan barang untuk Dinas Peternakan dan Perikanan Kabupaten Blitar untuk membantu proses pengelolaan data dan transaksi pengadaan.
  Tech: Web App, Database System
  Role: Development

- **Project 5 – WordPress Development**
  Pembuatan website dan landing page menggunakan Elementor untuk kebutuhan konten dan event.
  Tech: WordPress, Elementor
  Role: Development & Content Management

## 4. Skills Section
Backend: Laravel, PHP, MySQL
Frontend/Tools: WordPress, Elementor
Database & Platform: Firebase
Tools: Git, n8n
Additional: AI-assisted development (digunakan untuk efisiensi dan problem solving)

## 5. Working Approach (Section Pembeda)
Description: "Saya tidak hanya fokus pada coding, tetapi juga pada bagaimana sistem digunakan dalam kebutuhan nyata. Saya membangun aplikasi dengan pendekatan terstruktur, mempertimbangkan efisiensi, kemudahan penggunaan, dan skalabilitas. Saya juga memanfaatkan AI untuk mempercepat proses development, membantu eksplorasi solusi, dan meningkatkan produktivitas kerja."

## 6. Contact Section
Email, GitHub, LinkedIn
`;

const portfolioAssistantPrompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: {schema: AiPortfolioAssistantInputSchema},
  output: {schema: AiPortfolioAssistantOutputSchema},
  prompt: `You are an AI-powered portfolio assistant. Your task is to answer questions about the developer's portfolio based ONLY on the provided content.
If the answer is not explicitly available in the provided portfolio content, state that you cannot find the information and politely decline to answer. Do not make up information.

Here is the developer's portfolio content:
${portfolioContent}

---

User's Question: {{{question}}}
`,
});

const aiPortfolioAssistantFlow = ai.defineFlow(
  {
    name: 'aiPortfolioAssistantFlow',
    inputSchema: AiPortfolioAssistantInputSchema,
    outputSchema: AiPortfolioAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await portfolioAssistantPrompt(input);
    return output!;
  }
);
