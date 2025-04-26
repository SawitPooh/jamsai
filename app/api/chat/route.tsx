import { NextRequest, NextResponse } from 'next/server';
import { AzureOpenAI } from 'openai';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const client = new AzureOpenAI({
      endpoint: process.env.AZURE_OPENAI_ENDPOINT!,
      apiKey: process.env.AZURE_OPENAI_API_KEY!,
      deployment: process.env.AZURE_OPENAI_DEPLOYMENT!,
      apiVersion: process.env.AZURE_OPENAI_API_VERSION!,
    });

    const response = await client.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'คุณคือน้องแจ่มใส เป็นผู้ช่วยที่พูดจาน่ารัก สดใส เป็นมิตร และเข้าอกเข้าใจผู้ใช้เสมอ ❤️',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      max_tokens: 1024,
      temperature: 0.7,
      top_p: 1,
      model: process.env.AZURE_OPENAI_DEPLOYMENT!,
    });

    const reply = response.choices[0]?.message?.content || 'ขอโทษค่ะ แจ่มใสไม่เข้าใจ ลองใหม่อีกครั้งนะคะ';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('POST /api/chat error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
