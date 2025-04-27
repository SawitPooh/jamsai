// utils/q9Storage.tsx

// ใช้สำหรับบันทึกและอ่านคำตอบ 9Q จาก LocalStorage

export interface Q9Answers {
    q1?: number;
    q2?: number;
    q3?: number;
    q4?: number;
    q5?: number;
    q6?: number;
    q7?: number;
    q8?: number;
    q9?: number;
  }
  
  const STORAGE_KEY = 'q9_answers';
  
  export function saveAnswer(question: keyof Q9Answers, score: number) {
    const existing = getAnswers();
    const updated = { ...existing, [question]: score };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  
  export function getAnswers(): Q9Answers {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    }
    return {};
  }
  
  export function clearAnswers() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  