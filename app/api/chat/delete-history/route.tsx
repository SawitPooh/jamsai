'use server';

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const apiEndpoint = process.env.ASTRA_API_ENDPOINT;
    const token = process.env.ASTRA_API_TOKEN;
    const namespace = process.env.ASTRA_NAMESPACE;

    // ใช้ DELETE ALL document ของ userId นี้
    await axios.delete(
      `${apiEndpoint}/namespaces/${namespace}/collections/chat_histories/${userId}`,
      {
        headers: {
          'X-Cassandra-Token': token,
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('delete-history error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
