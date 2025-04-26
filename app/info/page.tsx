'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // ✅ เพิ่ม import Image

export default function UserInfoPage() {
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, gender, age: Number(age) }),
    });
    router.push('/form/select_first'); // ✅ ไปหน้าทำแบบสอบถาม
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-pink-50">
      <h1 className="text-xl font-bold mb-6">พี่ ๆ มาเป็นเพื่อนกับน้องแจ่มใสกันค่ะ</h1>

      {/* ✅ รูปภาพ */}
      <Image src="/img/jamsai.svg" alt="โลโก้" width={220} height={220} className="mb-6" />

      {/* ✅ ช่องกรอกชื่อ */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mb-4 w-64"
      />

      {/* ✅ ช่องเลือกเพศ + อายุ */}
      <div className="flex gap-4 mb-4">
        {/* เพศ */}
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-2 rounded w-28"
        >
          <option value="">เลือกเพศ</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
          <option value="ไม่ระบุ">ไม่ระบุ</option>
        </select>

        {/* อายุ */}
        <input
          type="number"
          placeholder="อายุ"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 rounded w-28"
        />
      </div>

      {/* ✅ ปุ่มเริ่มทำแบบสอบถาม */}
      <button
        onClick={handleSubmit}
        className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full"
      >
        เริ่มทำแบบสอบถาม
      </button>
    </main>
  );
}
