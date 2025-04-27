'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveAnswer, getAnswers } from '@/app/utils/q2Storage'; // <-- อย่าลืมใช้ utils 2qStorage เหมือนกันนะ

export default function Q1Page() {
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
    router.push('/form/2q/q2'); // ตอบ q1 เสร็จ → ไป q2 ต่อ
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6">
      <h1 className="text-xl font-bold text-center mb-4">Q: 1/2</h1>
      <p className="text-center mb-6">
        ใน 2 สัปดาห์ที่ผ่านมา รวมถึงวันนี้
        <br />
        ท่านรู้สึก หดหู่ เศร้า หรืออ้าแก้สิ้นหวัง หรือไม่
      </p>

      {/* ปุ่มตัวเลือก */}
      <div className="flex flex-col gap-4 mb-8 w-64">
        {[{ score: 1, text: 'มี' }, { score: 0, text: 'ไม่มี' }].map((choice) => (
          <button
            key={choice.score}
            onClick={() => handleSelect(choice.score)}
            className={`py-2 px-4 rounded-lg font-bold ${
              selectedScore === choice.score ? 'bg-blue-500 text-white' : 'bg-blue-200'
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
