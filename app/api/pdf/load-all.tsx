// import { NextResponse } from 'next/server';
// import pdfParse from 'pdf-parse';
// import fs from 'fs';
// import path from 'path';
// import axios from 'axios';
// import * as cheerio from 'cheerio';

// export async function GET() {
//   const pdfChunks: string[] = [];
//   const webChunks: string[] = [];

//   // 1. อ่านไฟล์ PDF ทั้งหมด
//   for (let i = 1; i <= 10; i++) {
//     const filePath = path.join(process.cwd(), 'public', `${i}.pdf`);
//     if (fs.existsSync(filePath)) {
//       const fileBuffer = fs.readFileSync(filePath);
//       const data = await pdfParse(fileBuffer);
//       const text = data.text;
//       pdfChunks.push(...splitIntoChunks(text));
//     }
//   }

//   // 2. อ่าน Web ทั้งหมด
//   const links = [
//     'https://your-link1.com',
//     'https://your-link2.com',
//     'https://your-link3.com',
//     'https://your-link4.com',
//     'https://your-link5.com',
//     'https://your-link6.com',
//     'https://your-link7.com',
//     'https://your-link8.com',
//     'https://your-link9.com',
//     'https://your-link10.com',
//   ];

//   for (const url of links) {
//     try {
//       const res = await axios.get(url);
//       const $ = cheerio.load(res.data);
//       const text = $('body').text();
//       webChunks.push(...splitIntoChunks(text));
//     } catch (error) {
//       console.error('Error loading URL:', url, error.message);
//     }
//   }

//   const allChunks = [...pdfChunks, ...webChunks];
//   return NextResponse.json({ chunks: allChunks });
// }

// function splitIntoChunks(text: string, chunkSize = 300): string[] {
//   const chunks: string[] = [];
//   for (let i = 0; i < text.length; i += chunkSize) {
//     chunks.push(text.slice(i, i + chunkSize));
//   }
//   return chunks;
// }
