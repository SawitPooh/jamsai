'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer, getAnswers } from '@/app/utils/st5Storage'; // <--- utils ที่เราสร้างไว้

export default function ST5Q1Page() {
  const router = useRouter();
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  useEffect(() => {
    // ตอนโหลดหน้า เอาคำตอบที่เคยเลือกมาแสดง
    const answers = getAnswers();
    if (answers.q1 !== undefined) {
      setSelectedScore(answers.q1);
    }
  }, []);

  const handleSelect = (score: number) => {
    setSelectedScore(score);
    saveAnswer('q1', score);
    router.push('/form/st_5/q2'); // กดแล้วไปหน้าถัดไป
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <h1 className="text-xl font-bold text-center mb-4">Q: 1/5</h1>
      <p className="text-center mb-6">
        มีปัญหาเรื่องการนอนไหม เช่น นอนไม่หลับ หรือนอนหลับมากกว่าปกติ
      </p>

      {/* ปุ่มตัวเลือก */}
      <div className="flex flex-col gap-4 mb-8 w-64">
        {[{score:3,text:'เป็นประจำ'}, {score:2,text:'เป็นบ่อยครั้ง'}, {score:1,text:'เป็นบางครั้ง'}, {score:0,text:'น้อยมากหรือไม่มี'}].map((choice) => (
          <button
            key={choice.score}
            onClick={() => handleSelect(choice.score)}
            className={`py-2 px-4 rounded-lg font-bold ${
              selectedScore === choice.score ? 'bg-blue-500 text-white' : 'bg-blue-200'
            }`}
          >
            {choice.score} คะแนน - {choice.text}
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
