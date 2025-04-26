// utils/st5Storage.ts
export const saveAnswer = (question: string, score: number) => {
    if (typeof window !== 'undefined') {
      const current = JSON.parse(localStorage.getItem('st5_answers') || '{}');
      current[question] = score;
      localStorage.setItem('st5_answers', JSON.stringify(current));
    }
  };
  
  export const getAnswers = () => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('st5_answers') || '{}');
    }
    return {};
  };
  
  export const clearAnswers = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('st5_answers');
    }
  };
  