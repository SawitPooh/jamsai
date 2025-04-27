'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // สำหรับโชว์รูป

export default function Q9IntroPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-6 relative">
      
      {/* ลายประกอบ (มุม ๆ) */}
      <div className="absolute top-6 left-6 text-orange-300 text-2xl">✨</div>
      <div className="absolute top-6 right-6 text-orange-300 text-2xl">✨</div>

      {/* หัวข้อ */}
      <h1 className="text-2xl font-bold text-orange-500 text-center mb-2">
        แบบประเมิน<br />ประเมินโรคซึมเศร้า
      </h1>

      {/* ชื่อ 9Q */}
      <h2 className="text-4xl font-bold text-orange-300 mb-6">9Q</h2>

      {/* รูปไอคอน */}
      <Image src="/img/sad1.svg" alt="Sad Icon" width={150} height={150} className="mb-6" />

      {/* ปุ่มไปต่อ */}
      <button
        onClick={() => router.push('/form/9q/q1')}
        className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-10 rounded-2xl"
      >
        ไปต่อ
      </button>
    </main>
  );
}
