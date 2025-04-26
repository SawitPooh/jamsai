import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  const { username, gender, age } = await req.json();

  const apiEndpoint = process.env.ASTRA_API_ENDPOINT;
  const token = process.env.ASTRA_API_TOKEN;
  const namespace = process.env.ASTRA_NAMESPACE;

  try {
    const response = await axios.post(
      `${apiEndpoint}/v2/namespaces/${namespace}/collections/users`,
      {
        username: username,
        gender: gender,
        age: age,
        createdAt: new Date().toISOString(),
      },
      {
        headers: {
          "x-cassandra-token": token!,
          "Content-Type": "application/json",
        },
      }
    );
    console.log('✅ Successfully saved to database', response.data);
    return NextResponse.json({ message: 'User info saved successfully' });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('❌ POST /api/user error:', error.response?.data || error.message);
    } else {
      console.error('❌ POST /api/user error:', error);
    }
    return NextResponse.json({ error: 'Failed to save user info' }, { status: 500 });
  }
}
