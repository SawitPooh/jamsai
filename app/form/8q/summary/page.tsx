'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAnswers } from '@/app/utils/q8Storage'; // ดึงคะแนนที่ตอบมาแล้ว

export default function EightQSummaryPage() {
  const router = useRouter();
  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    const answers = getAnswers();
    if (answers) {
      const sum = (answers.q1 || 0) + (answers.q2 || 0) + (answers.q3 || 0) + (answers.q3_1 || 0) +
                  (answers.q4 || 0) + (answers.q5 || 0) + (answers.q6 || 0) + (answers.q7 || 0) + (answers.q8 || 0);
      setTotalScore(sum);
    }
  }, []);

  let heartImage = '/img/heart3.svg'; // default
  let message = 'พี่ ๆ ไม่มีแนวโน้มฆ่าตัวตายในปัจจุบันนะคะ';

  if (totalScore >= 9 && totalScore <= 16) {
    heartImage = '/img/heart4.svg';
    message = 'พี่ ๆ มีแนวโน้มที่จะฆ่าตัวตายในปัจจุบัน ระดับปานกลางนะคะ';
  } else if (totalScore >= 17) {
    heartImage = '/img/heart4.svg';
    message = 'พี่ ๆ มีแนวโน้มที่จะฆ่าตัวตายในปัจจุบัน ระดับรุนแรงนะคะ น้องแจ่มใสแนะนำให้พี่ได้เข้าพบแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพจิตโดยตรงนะคะ';
  } else if (totalScore >= 1 && totalScore <= 8) {
    heartImage = '/img/heart3.svg';
    message = 'พี่ ๆ มีแนวโน้มที่จะฆ่าตัวตายในปัจจุบัน ระดับน้อยนะคะ';
  }

  const handleNext = () => {
    if (totalScore >= 17) {
      router.push('/form/end_jamsai/select_only_doctor');
    } else {
       router.push('/form/end_jamsai/select_doctor_chat');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="text-lg font-bold mb-4">รวม และประเมินคะแนน</h1>

      <Image src={heartImage} alt="Heart" width={150} height={150} className="mb-6" />

      <p className="text-center text-md mb-10 px-6">
        {message}
      </p>

      <div className="flex flex-col items-center">
        <button
          onClick={handleNext}
          className="flex items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-500 rounded-full p-2 px-6 gap-3 transition-colors duration-200"
        >
          <img src="/img/jamsai.svg" alt="แจ่มใส" className="w-10 h-10" />
          <span className="text-black font-semibold">น้องแจ่มใสจะพาพี่ ๆ ไปปรึกษาแพทย์ต่อไปนะคะ</span>
          
        </button>
      </div>
    </main>
  );
}
