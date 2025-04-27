'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EightQIntroPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6 relative">
      {/* ลายประกอบ (มุม ๆ) */}
      <div className="absolute top-6 left-6 text-red-300 text-2xl">✨</div>
      <div className="absolute top-6 right-6 text-red-300 text-2xl">✨</div>

      {/* หัวข้อ */}
      <h1 className="text-2xl font-bold text-red-500 text-center mb-2">
        แบบประเมิน<br />ฆ่าตัวตาย
      </h1>

      {/* ชื่อ 8Q */}
      <h2 className="text-5xl font-bold text-red-300 mb-6">8Q</h2>

      {/* รูปไอคอน */}
      <Image src="/img/heart4.svg" alt="Suicide Icon" width={150} height={150} className="mb-6" />

      {/* ปุ่มไปต่อ */}
      <button
        onClick={() => router.push('/form/8q/q1')}
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-10 rounded-2xl"
      >
        ไปต่อ
      </button>
    </main>
  );
}
