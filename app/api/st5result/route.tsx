// 'use server';

// import { NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { userId, totalScore } = body;

//     if (!userId || totalScore === undefined) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     // เชื่อมต่อ Astra DB
//     const apiEndpoint = process.env.ASTRA_API_ENDPOINT;
//     const token = process.env.ASTRA_API_TOKEN;
//     const namespace = process.env.ASTRA_NAMESPACE;

//     const response = await axios.post(
//       `${apiEndpoint}/namespaces/${namespace}/collections/st5results`,
//       {
//         userId,
//         totalScore,
//         createdAt: new Date().toISOString(),
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'X-Cassandra-Token': token,
//         },
//       }
//     );

//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.error('POST /api/st5result error:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }
