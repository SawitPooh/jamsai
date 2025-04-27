// utils/q8Storage.ts

// type ของคำตอบทั้งหมดของ 8Q
interface Q8Answers {
    q1?: number;
    q2?: number;
    q3?: number;
    q3_1?: number; // เพิ่มกรณีพิเศษ ข้อ 3.1
    q4?: number;
    q5?: number;
    q6?: number;
    q7?: number;
    q8?: number;
  }
  
  const STORAGE_KEY = 'q8-answers';
  
  // ดึงข้อมูลคำตอบจาก localStorage
  export function getAnswers(): Q8Answers {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as Q8Answers;
      }
    }
    return {};
  }
  
  // บันทึกคำตอบลง localStorage
  export function saveAnswer(question: keyof Q8Answers, score: number) {
    if (typeof window !== 'undefined') {
      const current = getAnswers();
      const updated = { ...current, [question]: score };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  }
  
  // ลบข้อมูลทั้งหมด (ใช้ตอน reset)
  export function clearAnswers() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  