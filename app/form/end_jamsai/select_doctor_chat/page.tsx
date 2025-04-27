'use client';

import { useRouter } from 'next/navigation';

export default function SelectDoctorChatPage() {
  const router = useRouter();

  const handleChatWithJamsai = () => {
    router.push('/chat');
  };

  const handleBookDoctor = () => {
    window.open(
      'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2CS04vzdMg8mpsIq6qqde4QqSMddsKSmkTarUaB4MkVxlOQzl8pniA5ZXwybkBtwFbegA5-aM2',
      '_blank'
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-blue-50 p-6">
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={handleChatWithJamsai}
          className="bg-pink-100 hover:bg-pink-200 active:bg-pink-300 p-6 rounded-2xl flex flex-col items-center w-64 shadow-md"
        >
          <img src="/img/jamsai.svg" alt="พูดคุยกับน้องแจ่มใส" className="w-24 h-24 mb-4" />
          <span className="text-gray-700 font-semibold">พูดคุยกับน้องแจ่มใส</span>
        </button>

        <button
          onClick={handleBookDoctor}
          className="bg-pink-100 hover:bg-pink-200 active:bg-pink-300 p-6 rounded-2xl flex flex-col items-center w-64 shadow-md"
        >
          <img src="/img/doctor.svg" alt="นัดปรึกษาผู้เชี่ยวชาญ" className="w-24 h-24 mb-4" />
          <span className="text-gray-700 font-semibold">นัดปรึกษาผู้เชี่ยวชาญ</span>
        </button>
      </div>

      {/* Footer */}
      <div className=" mt-2 mb-20 flex items-center bg-orange-100 p-3 rounded-lg w-full max-w-xs shadow-sm">
        <img src="/img/call1.svg" alt="สายด่วน" className="w-6 h-6 mr-2" />
        <p className="text-orange-600 font-semibold text-sm">
          สายด่วนสุขภาพจิต โทร. 1323
        </p>
      </div>
    </main>
  );
}
