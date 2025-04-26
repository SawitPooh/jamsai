'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAnswers } from '@/app/utils/st5Storage'; // ดึงคะแนนที่ตอบมาแล้ว

export default function ST5SummaryPage() {
    const router = useRouter();
    const [totalScore, setTotalScore] = useState<number>(0);

    useEffect(() => {
        const answers = getAnswers();
        if (answers) {
            const sum = (answers.q1 || 0) + (answers.q2 || 0) + (answers.q3 || 0) + (answers.q4 || 0) + (answers.q5 || 0);
            setTotalScore(sum);
        }
    }, []);

    let heartImage = '/img/heart1.svg';
    let message = 'พี่ ๆ มีความเครียดน้อยนะคะ';

    if (totalScore >= 5 && totalScore <= 7) {
        heartImage = '/img/heart2.svg';
        message = 'พี่ ๆ มีความเครียดปานกลางนะคะ';
    } else if (totalScore >= 8 && totalScore <= 9) {
        heartImage = '/img/heart3.svg';
        message = 'พี่ ๆ มีความเครียดมากแล้วนะคะ';
    } else if (totalScore >= 10) {
        heartImage = '/img/heart4.svg';
        message = 'พี่ ๆ มีความเครียด';
    }

    const handleNext = () => {
        router.push('/form/end_jamsai/select');
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
            <h1 className="text-lg font-bold mb-4">รวม และประเมินคะแนน</h1>

            <Image src={heartImage} alt="Heart" width={150} height={150} className="mb-4" />

            <div className="text-center text-xl font-semibold mb-2">
                ({totalScore} คะแนน)
            </div>

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
                    <span className="ml-auto font-bold">ถัดไป</span>
                </button>


            </div>
        </main>
    );
}
