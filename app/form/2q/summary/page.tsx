'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAnswers } from '@/app/utils/q2Storage'; // utils ของ 2Q

export default function Q2SummaryPage() {
  const router = useRouter();
  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    const answers = getAnswers();
    if (answers) {
      const sum = (answers.q1 || 0) + (answers.q2 || 0);
      setTotalScore(sum);
    }
  }, []);

  let heartImage = '/img/heart1.svg';
  let message = 'พี่ ๆ ยังไม่มีความเสี่ยงที่จะเป็นโรคซึมเศร้า';

  if (totalScore >= 1) {
    heartImage = '/img/heart3.svg';
    message = 'พี่ ๆ มีความเสี่ยงต่อการเป็นโรคซึมเศร้า';
  }

  const handleNext = () => {
    if (totalScore === 0) {
      router.push('/form/end_jamsai/select_doctor_chat');
    } else {
      router.push('/form/end_jamsai/select9q');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <h1 className="text-lg font-bold mb-6">รวม และประเมินคะแนน</h1>

      <Image src={heartImage} alt="Heart" width={150} height={150} className="mb-6" />

      <p className="text-center text-md mb-10 px-6 whitespace-pre-line">
        {message}
      </p>

      <div className="flex flex-col items-center">
        <button
          onClick={handleNext}
          className="flex items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-500 rounded-full p-2 px-6 gap-3 transition-colors duration-200"
        >
          <img src="/img/jamsai.svg" alt="แจ่มใส" className="w-10 h-10" />
          <span className="text-black font-semibold">น้องแจ่มใสจะพาพี่ ๆ ไปขั้นตอนถัดไปนะคะ</span>
          <span className="ml-auto font-bold">ถัดไป</span>
        </button>
      </div>
    </main>
  );
}
