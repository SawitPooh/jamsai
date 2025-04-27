'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer, getAnswers } from '@/app/utils/q8Storage'; // <-- utils ของ 8Q

export default function EightQ1Page() {
  const router = useRouter();
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  useEffect(() => {
    const answers = getAnswers();
    if (answers.q1 !== undefined) {
      setSelectedScore(answers.q1);
    }
  }, []);

  const handleSelect = (score: number) => {
    setSelectedScore(score);
    saveAnswer('q1', score);
    router.push('/form/8q/q2'); // ไปหน้าข้อ 2
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      {/* Progress bar / หัวข้อ */}
      <h1 className="text-xl font-bold text-center mb-4">Q:1/8</h1>

      {/* คำถาม */}
      <div className="bg-red-200 text-red-700 font-semibold p-4 rounded-lg mb-6 text-center">
        ในช่วง 1 เดือนที่ผ่านมา รวมถึงวันนี้
        <br />
        ท่านคิดจะฆ่าตัวตาย หรือคิดว่าตายไปจะดีกว่า บางไหม
      </div>

      {/* ตัวเลือก */}
      <div className="flex flex-col gap-4 mb-8 w-64">
        {[{ score: 0, text: 'ไม่มี' }, { score: 1, text: 'มี' }].map((choice) => (
          <button
            key={choice.score}
            onClick={() => handleSelect(choice.score)}
            className={`py-2 px-4 rounded-lg font-bold ${
              selectedScore === choice.score ? 'bg-red-400 text-white' : 'bg-red-200'
            }`}
          >
            {choice.text}
          </button>
        ))}
      </div>

      {/* ปุ่มย้อนกลับ */}
      <div className="flex space-x-4">
        <button
          onClick={() => router.back()}
          className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-6 rounded-full"
        >
          กลับ
        </button>
      </div>
    </main>
  );
}
