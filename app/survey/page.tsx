'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const slides = [
  {
    title: 'ผลการประเมินที่เข้าใจได้ง่าย\nมีทั้งหมด 3 ระดับ',
    content: ['ระดับความเสี่ยงต่ำ', 'ระดับความเสี่ยงปานกลาง', 'ระดับความเสี่ยงรุนแรง'],
  },
  {
    title: 'ไขข้อสงสัย\nความเสี่ยงภาวะซึมเศร้า\nได้ด้วยตัวคุณเอง',
    content: [
      'ประเมินความเสี่ยงภาวะซึมเศร้า',
      'ผ่านการพูดคุยกับคุณหมอในรูปแบบ Avatar',
      'และวิเคราะห์ผลด้วย AI',
      'เทคโนโลยีสุดล้ำของ DMIND',
    ],
  },
  {
    title: 'เริ่มต้นใช้งานง่าย ใช้เวลาไม่นาน',
    content: [
      'พูด แชร์ หรือพิมพ์สิ่งที่คุณรู้สึก',
      'ระบบจะช่วยประเมินความรู้สึกของคุณอย่างแม่นยำ',
      'ใช้เวลาไม่ถึง 5 นาที',
    ],
  },
];

export default function SurveyIntro() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      router.push('/survey/policy');
    }
  };

  const skip = () => {
    router.push('/survey/policy');
  };

  const slide = slides[step];

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-white">
      
      {/* Indicator */}
      <div className="w-full flex justify-center space-x-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i <= step ? 'bg-pink-500' : 'bg-pink-200'}`}
            style={{ width: '60px' }} // ลดขนาดให้เหมาะกับจอมือถือ
          />
        ))}
      </div>

      {/* Slide Content */}
      <div className="bg-white bg-opacity-40 p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md mt-6 text-center">
        <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-4 whitespace-pre-wrap">{slide.title}</h2>
        <ul className="text-blue-600 text-sm text-left list-disc pl-5">
          {slide.content.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-xs sm:max-w-md mt-8 space-y-3">
        <button
          onClick={nextSlide}
          className="w-full py-3 bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 transition"
        >
          {step === slides.length - 1 ? 'เริ่มเลย' : 'ถัดไป'}
        </button>
        <button
          onClick={skip}
          className="w-full text-indigo-600 text-sm underline"
        >
          ข้าม
        </button>
      </div>

    </main>
  );
}
