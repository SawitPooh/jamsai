'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer, getAnswers } from '@/app/utils/q9Storage'; // <-- utils สำหรับ 9Q โดยเฉพาะ

export default function Q3Page() {
  const router = useRouter();
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  useEffect(() => {
    const answers = getAnswers();
    if (answers.q3 !== undefined) {
      setSelectedScore(answers.q3);
    }
  }, []);

  const handleSelect = (score: number) => {
    setSelectedScore(score);
    saveAnswer('q3', score);
    router.push('/form/9q/q4'); // ไปหน้าถัดไป q4
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-6">
      <h1 className="text-xl font-bold text-center mb-4">Q: 3/9</h1>
      <p className="text-center mb-6">
        ใน 2 สัปดาห์ที่ผ่านมา รวมถึงวันนี้<br/>
        ท่านมีอาการ หลับยาก หรือตื่น ๆ ดื่น ๆ หรือหลับมากไป บ่อยแค่ไหน
      </p>

      {/* ปุ่มตัวเลือก */}
      <div className="flex flex-col gap-4 mb-8 w-64">
        {[ 
          { score: 0, text: 'ไม่มีเลย' },
          { score: 1, text: 'เป็นบางวัน (1-7 วัน)' },
          { score: 2, text: 'เป็นบ่อย (> 7 วัน)' },
          { score: 3, text: 'เป็นทุกวัน' }
        ].map((choice) => (
          <button
            key={choice.score}
            onClick={() => handleSelect(choice.score)}
            className={`py-2 px-4 rounded-lg font-bold ${
              selectedScore === choice.score ? 'bg-orange-400 text-white' : 'bg-orange-200'
            }`}
          >
            {choice.text}
          </button>
        ))}
      </div>

      {/* ปุ่มย้อนกลับ */}
      <button
        onClick={() => router.back()}
        className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-6 rounded-full"
      >
        กลับ
      </button>
    </main>
  );
}
