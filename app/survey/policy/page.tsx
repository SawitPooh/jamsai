'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    if (agreed) router.push('/info');
  };

  const handleReject = () => {
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white bg-opacity-60 rounded-3xl shadow-lg p-6">
        <h1 className="text-xl font-bold text-center mb-1">นโยบายความเป็นส่วนตัว</h1>
        <p className="text-center text-sm text-gray-600 mb-4">(Privacy Policy)</p>

        <div className="max-h-96 overflow-y-auto text-sm text-gray-800 space-y-4 bg-white bg-opacity-50 p-4 rounded-xl shadow-inner leading-relaxed">
  <p>
    “ระบบมันแย่ ทำไมเราต้องยอมอดทนด้วย” ชายคนหนึ่งลุกขึ้นประท้วงเสียงดัง “ทำไมต้องรับ ปล่อยให้เป็นแบบนี้ตลอดไปเมื่อไรจะเจริญ!?” ห้องประชุมใหญ่ที่กำลังเงียบงัน...
  </p>

  <p>
    ถ้าเราเป็นคนที่อยู่ระหว่างเรื่องราวข้างต้น เชื่อว่าการตัดสินใจไปทางฝ่ายใดฝ่ายหนึ่ง ย่อมส่งผลลัพธ์ต่อเราแตกต่างกัน...
  </p>

  <p>
    ส่วนหนึ่งก็คล้ายกับคำถามว่า “เรื่องนี้เราควรที่จะ อดทน ไหม?” แต่นัยหนึ่ง การ “ต้องทน” กับภาวะ “ยอมรับ” ช่างต่างกัน...
  </p>

  <p>
    ลองสมมติเป็นเรื่องราวคนใกล้ตัวของหลายคน เช่น มีคนทำตัวน่ารำคาญ (toxic) ในออฟฟิศ หรือที่ทำงาน...
  </p>

  <p>
    ผลลัพธ์จากกรณีตัวอย่างนี้ หากอยู่ในภาวะยอมรับ ก็จะไม่มีอะไรเกิดขึ้น อาจมีหงุดหงิดรำคาญใจบ้าง...
  </p>

  <p>
    ถ้ามองมุมนี้ การไม่ยอมรับดูเป็นภาวะที่เสี่ยงกว่าชัดเจน เพราะนอกจากอาจไม่แก้ปัญหาแล้ว จะกลายเป็นสร้างปัญหาเพิ่ม...
  </p>

  <p>
    ในอีกกรณีสมมติ กับเรื่องคล้ายเดิมในที่ทำงาน แต่ไม่ใช่แค่น่ารำคาญ กลับกลายเป็นเราทราบว่าเขากำลังทุจริต ไม่ซื่อตรง...
  </p>
</div>


        <div className="mt-6 flex items-start">
          <input
            type="checkbox"
            id="agree"
            className="mr-2 mt-1"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree" className="text-sm text-gray-800">
          รับทราบและยินยอมทั้งนโยบายความเป็นส่วนตัว
            <a href="#" className="text-indigo-600 underline ml-1">เงื่อนไขข้อตกลงการใช้บริการ</a>
          </label>
        </div>

        <div className="mt-6 flex justify-between space-x-4">
          <button
            onClick={handleReject}
            className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
          >
            ไม่ยอมรับ
          </button>
          <button
            onClick={handleAccept}
            disabled={!agreed}
            className={`flex-1 py-2 rounded-full text-white font-semibold ${
              agreed ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-200 cursor-not-allowed'
            }`}
          >
            ยอมรับ
          </button>
        </div>
      </div>
    </main>
  );
}
