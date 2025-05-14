'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const slides = [
  {
    title: 'ตรวจสอบภาวะสุขถาพจิตใจ\nได้ง่าย ๆ ด้วยตนเอง',
    content: ['แบบประเมิน ST-5 เพื่อคัดกรองระดับความเครียดเบื้องต้น', 'แบบประเมิน 2Q, 9Q, และ 8Q ตามลำดับ เพื่อคัดกรองและประเมินภาวะซึมเศร้า'],
  },
  {
    title: 'เลือกช่องทางพูดคุยปรึกษา\nตามความสะดวกได้ด้วยตนเอง',
    content: [
      'พูดคุยกับระบบ AI น้องแจ่มใส',
      'นัดปรึกษาผู้เชี่ยวชาญสุขภาพจิตภายในวิทยาลัย',
      'โทรสายด่วนสุขภาพจิต 1323',
    ],
  },
  {
    title: 'โปรดอ่านก่อนดำเนินการ',
    content: [
      'ระบบ AI น้องแจ่มใส คือ ระบบตอบกลับอัตโนมัติ ไม่สามารถแทนที่การวินิจฉัยจากผู้เชี่ยวชาญได้',
      'แบบประเมินสุขภาพจิตเบื้องต้นนี้ จัดทำขึ้นเพื่อช่วยให้คุณสำรวจระดับความเครียด ภาวะซึมเศร้า และความเสี่ยงต่อการทำร้ายตนเอง โดยอ้างอิงจากแบบประเมินของกรมสุขภาพจิต กระทรวงสาธารณสุข ผลลัพธ์ที่ได้ไม่ใช่การวินิจฉัยโรค หากคุณรู้สึกไม่สบายใจ หรือมีความเสี่ยง กรุณาปรึกษาผู้เชี่ยวชาญหรือติดต่อหน่วยบริการ สุขภาพจิตใกล้บ้านทันที',
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
    <main className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-white max-w-screen-sm mx-auto pb-10">
      {/* Indicator */}
      <div className="w-full flex justify-center space-x-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i <= step ? 'bg-pink-500' : 'bg-pink-200'}`}
            style={{ width: '60px' }}
          />
        ))}
      </div>
        
      {/* Slide Content */}
      <div className="bg-white bg-opacity-40 p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md mt-6 text-center">
        <div className="flex flex-col items-center mb-4">
                  <Image src="/img/jamsai.svg" alt="โลโก้" width={60} height={60} />
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-4 whitespace-pre-wrap">{slide.title}</h2>
        <ul className="text-blue-600 text-sm text-left list-disc pl-5">
          {slide.content.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="w-full pb-20 max-w-xs  sm:max-w-md mt-8 space-y-3 ">
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
