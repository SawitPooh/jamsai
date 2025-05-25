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
          onClick={handleBookDoctor}
          className="bg-pink-100 hover:bg-pink-200 active:bg-pink-300 p-6 rounded-2xl flex flex-col items-center w-64 shadow-md"
        >
          <img src="/img/doctor.svg" alt="นัดปรึกษาผู้เชี่ยวชาญ" className="w-24 h-24 mb-4" />
          <span className="text-gray-700 font-semibold">นัดปรึกษาผู้เชี่ยวชาญ</span>
        </button>
      </div>

    </main>
  );
}
