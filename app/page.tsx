// app/page.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/survey');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      <div className="bg-white bg-opacity-40 rounded-xl p-6 text-center max-w-md w-full shadow-lg">
        {/* โลโก้และชื่อเว็บ */}
        <div className="flex flex-col items-center mb-4">
          <Image src="/img/jamsai.svg" alt="โลโก้" width={220} height={220} />
          <h1 className="text-2xl font-bold mt-4 text-pink-600">NONG JAMSAI</h1>
        </div>

        {/* คำอธิบาย */}
        <p className="text-sm text-gray-700 mt-2">
        ปรึกษาสุขภาพใจไปกับ NONG JAMSAI<br />
          เว็บไซต์คัดกรองภาวะสุขภาพใจ <br />
          และพื้นที่ให้คำปรึกษาด้วยระบบ AI <br />
          “เพื่อนที่พร้อมรับฟังทุกความรู้สึกของคุณ”
        </p>

        <p className="text-xs text-gray-600 mt-4">
          คัดกรองสุขภาพใจผ่านการตอบแบบสอบถาม<br />
          สามารถคุยกับ NONG JAMSAI ผ่านทางข้อความ
        </p>

        {/* ปุ่มเริ่มทำแบบสอบถาม */}
        <button
          onClick={handleClick}
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full w-full"
        >
          พร้อมในการปรึกษาสุขภาพใจแล้ว
        </button>
      </div>
    </main>
  );
}
