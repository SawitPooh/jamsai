'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer, getAnswers } from '@/app/utils/st5Storage';

export default function ST5Q4Page() {
  const router = useRouter();
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  useEffect(() => {
    const answers = getAnswers();
    if (answers.q4 !== undefined) {
      setSelectedScore(answers.q4);
    }
  }, []);

  const handleSelect = (score: number) => {
    setSelectedScore(score);
    saveAnswer('q4', score);
    router.push('/form/st_5/q5'); // ไป q5
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      {/* Header */}
      <h2 className="text-lg font-bold mb-2">Q: 4/5</h2>
      <p className="text-center mb-6">ในช่วงนี้มีรู้สึกเบื่อ เฉย ไม่อยากทำอะไรไหม</p>

      {/* ตัวเลือกคะแนน */}
      <div className="flex flex-col gap-2 mb-6">
        {[3, 2, 1, 0].map((score) => (
          <button
            key={score}
            onClick={() => handleSelect(score)}
            className={`w-64 p-3 rounded-full ${
              selectedScore === score ? 'bg-blue-500 text-white' : 'bg-blue-100'
            }`}
          >
            {score} คะแนน {score === 3 ? 'เป็นประจำ' : score === 2 ? 'เป็นบ่อยครั้ง' : score === 1 ? 'เป็นบางครั้ง' : 'เป็นน้อยมากหรือแทบไม่มี'}
          </button>
        ))}
      </div>

      {/* ปุ่มย้อนกลับ */}
      <div className="flex gap-4">
        <button
          onClick={() => router.push('/form/st_5/q3')}
          className="bg-pink-300 text-black py-2 px-6 rounded-full"
        >
          กลับ
        </button>
      </div>
    </main>
  );
}
