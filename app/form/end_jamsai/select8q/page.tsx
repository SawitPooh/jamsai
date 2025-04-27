'use client';

import { useRouter } from 'next/navigation';

export default function EndJamsaiSelectPage() {
  const router = useRouter();

  const handleGoTo2Q = () => {
    router.push('/form/8q');
  };

  const handleGoToSelectDoctorChat = () => {
    router.push('/form/end_jamsai/select_doctor_chat');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6 space-y-6">
      <img src="/img/jamsai.svg" alt="น้องแจ่มใส" className="w-24 h-24" />

      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
        <p className="text-gray-800">
          พี่ ๆ ได้ทราบระดับความเครียดของตนเองแล้ว ต่อไปพี่ ๆ ต้องการที่จะทำแบบประเมิน
          <span className="text-pink-500 font-semibold">คัดกรองโรคซึมเศร้า</span> หรือ
          <span className="text-pink-500 font-semibold">พูดคุยรับคำปรึกษา</span> ผ่านสองทางเลือกคือ
          พูดคุยกับ AI น้องแจ่มใส หรือ นัดปรึกษาผู้เชี่ยวชาญภายในวิทยาลัย
          สามารถเลือกได้เลยนะคะ
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={handleGoTo2Q}
          className="bg-pink-100 text-black font-bold py-3 rounded-xl hover:bg-pink-200 active:bg-pink-300"
        >
          คัดกรองโรคซึมเศร้าต่อไป
        </button>
        <button
          onClick={handleGoToSelectDoctorChat}
          className="bg-pink-200 text-black font-bold py-3 rounded-xl hover:bg-pink-300 active:bg-pink-400"
        >
          ต้องการรับคำปรึกษา
        </button>
      </div>
    </main>
  );
}
