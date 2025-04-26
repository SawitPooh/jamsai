'use server';

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { userId, role, content } = await req.json();

    if (!userId || !role || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiEndpoint = process.env.ASTRA_API_ENDPOINT;
    const token = process.env.ASTRA_API_TOKEN;
    const namespace = process.env.ASTRA_NAMESPACE;

    const response = await axios.post(
      `${apiEndpoint}/v2/namespaces/${namespace}/collections/chat_histories`,  // << ใส่ v2 ตรงนี้
      {
        userId,
        role,
        content,
        createdAt: new Date().toISOString(),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-cassandra-token': token!,
        },
      }
    );

    console.log('✅ Successfully saved to database', response.data);
    return NextResponse.json({ message: 'Chat history saved successfully' });
  } catch (error: any) {
    console.error('❌ save-history error:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
