'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // สำหรับโชว์รูป

export default function ST5IntroPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6 relative">
      {/* ลายประกอบ (มุม ๆ) */}
      <div className="absolute top-6 left-6 text-blue-300 text-2xl">✨</div>
      <div className="absolute top-6 right-6 text-blue-300 text-2xl">✨</div>

      {/* หัวข้อ */}
      <h1 className="text-2xl font-bold text-blue-500 text-center mb-2">
        แบบประเมิน<br />ความเครียด
      </h1>

      {/* ชื่อ ST-5 */}
      <h2 className="text-4xl font-bold text-blue-300 mb-6">ST-5</h2>

      {/* รูปไอคอน */}
      <Image src="/img/stress_icon.svg" alt="Stress Icon" width={150} height={150} className="mb-6" />

      {/* ปุ่มไปต่อ */}
      <button
        onClick={() => router.push('/form/st_5/q1')}
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-10 rounded-2xl"
      >
        ไปต่อ
      </button>
    </main>
  );
}
