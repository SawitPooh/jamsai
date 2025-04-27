// utils/2qStorage.ts

// ชื่อ Key ใน localStorage
const STORAGE_KEY = 'q2_answers';

// ประเภทข้อมูลที่เก็บ
interface Q2Answers {
  q1?: number;
  q2?: number;
}

// ดึงข้อมูลจาก localStorage
export function getAnswers(): Q2Answers {
  if (typeof window === 'undefined') return {}; // ป้องกัน SSR error
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return {};
  return JSON.parse(stored) as Q2Answers;
}

// เซฟข้อมูลเข้า localStorage
export function saveAnswer(question: keyof Q2Answers, score: number) {
  if (typeof window === 'undefined') return;
  const answers = getAnswers();
  answers[question] = score;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

// ล้างข้อมูล
export function clearAnswers() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
