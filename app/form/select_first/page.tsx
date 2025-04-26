'use client';
import { useRouter } from 'next/navigation';

export default function SelectFirstPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6">
      {/* ✅ Header */}
      <h1 className="text-2xl font-bold text-center mb-8">เลือกแบบประเมิน</h1>

      {/* ✅ ปุ่มเลือกแบบประเมิน */}
      <div className="flex flex-col gap-6">
        <button
          onClick={() => router.push('/form/st_5')}
          className="bg-pink-300 hover:bg-pink-400 text-gray-800 font-bold py-6 px-12 rounded-2xl w-48 text-center"
        >
          แบบประเมิน<br />ความเครียด<br /><span className="text-3xl">ST-5</span>
        </button>

        <button
          onClick={() => router.push('/form/2q')}
          className="bg-pink-300 hover:bg-pink-400 text-gray-800 font-bold py-6 px-12 rounded-2xl w-48 text-center"
        >
          คัดกรอง<br />โรคซึมเศร้า<br /><span className="text-3xl">2Q</span>
        </button>
      </div>
    </main>
  );
}
