'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAnswers } from '@/app/utils/q9Storage'; // ดึงคะแนน 9Q ที่ตอบมาแล้ว

export default function Q9SummaryPage() {
  const router = useRouter();
  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    const answers = getAnswers();
    if (answers) {
      const sum =
        (answers.q1 || 0) +
        (answers.q2 || 0) +
        (answers.q3 || 0) +
        (answers.q4 || 0) +
        (answers.q5 || 0) +
        (answers.q6 || 0) +
        (answers.q7 || 0) +
        (answers.q8 || 0) +
        (answers.q9 || 0);
      setTotalScore(sum);
    }
  }, []);

  let heartImage = '/img/heart2.svg';
  let message = 'พี่ ๆ ไม่มีอาการของโรคซึมเศร้า หรือมีอาการน้อยมากนะคะ';

  if (totalScore >= 7 && totalScore <= 12) {
    heartImage = '/img/heart5.svg';
    message = 'พี่ ๆ มีอาการของโรคซึมเศร้า ระดับน้อย นะคะ';
  } else if (totalScore >= 13 && totalScore <= 18) {
    heartImage = '/img/heart3.svg';
    message = 'พี่ ๆ มีอาการของโรคซึมเศร้า ระดับปานกลาง นะคะ';
  } else if (totalScore >= 19) {
    heartImage = '/img/heart4.svg';
    message = 'พี่ ๆ มีอาการของโรคซึมเศร้า ระดับรุนแรง นะคะ น้องแจ่มใสแนะนำให้พี่ได้เข้าพบแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพจิตโดยตรงนะคะ';
  }

  const handleNext = () => {
    if (totalScore < 7) {
      router.push('/form/end_jamsai/select_doctor_chat');
    } else {
      router.push('/form/8q');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <h1 className="text-lg font-bold mb-4">รวม และประเมินคะแนน</h1>

      <Image src={heartImage} alt="Heart" width={150} height={150} className="mb-4" />

      {/* ไม่ต้องโชว์คะแนนตามที่ขอ */}

      <p className="text-center text-md mb-10 px-6">
        {message}
      </p>

      <div className="flex flex-col items-center">
        <button
          onClick={handleNext}
          className="flex items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-500 rounded-full p-2 px-6 gap-3 transition-colors duration-200"
        >
          <img src="/img/jamsai.svg" alt="แจ่มใส" className="w-10 h-10" />
          <span className="text-black font-semibold">น้องแจ่มใสจะพาพี่ ๆ ไปขั้นตอนถัดไปนะคะ</span>
         
        </button>
      </div>
    </main>
  );
}
