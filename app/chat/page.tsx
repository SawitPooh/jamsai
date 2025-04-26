'use client';

import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([{
    sender: 'bot',
    text: 'สวัสดีค่ะ หนูชื่อน้องแจ่มใส พี่ ๆ มีอะไรอยากพูดคุย หรือขอคำปรึกษาได้เลยค่ะ ',
  }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    let id = localStorage.getItem('userId');
    if (!id) {
      id = uuidv4();
      localStorage.setItem('userId', id);
    }
    setUserId(id);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Save user message to DB
    await fetch('/api/chat/save-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, message: input, role: 'user' }),
    });

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, message: input }),
    });
    const data = await response.json();

    const botMessage: Message = { sender: 'bot', text: data.reply };
    setMessages((prev) => [...prev, botMessage]);

    // Save bot message to DB
    await fetch('/api/chat/save-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, message: data.reply, role: 'assistant' }),
    });

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleLeaveChat = async () => {
    await fetch(`/api/chat/delete-history?userId=${userId}`, { method: 'DELETE' });
    localStorage.removeItem('userId');
    // Redirect if needed (example): router.push('/')
  };

  return (
    <main className="min-h-screen flex flex-col bg-pink-50 p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'bot' ? 'items-start justify-start' : 'justify-end'}`}>
            {msg.sender === 'bot' && (
              <img src="/img/jamsai.svg" alt="น้องแจ่มใส" className="w-8 h-8 mr-2 rounded-full" />
            )}
            <div className={`p-3 rounded-lg max-w-xs ${msg.sender === 'bot' ? 'bg-white text-left' : 'bg-pink-200 text-right'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="คุยกับน้องแจ่มใสได้เลย"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white p-3 rounded-full"
        >
          ➤
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleLeaveChat}
          className="text-xs text-gray-500 underline"
        >
          ออกจากการสนทนา
        </button>
      </div>
    </main>
  );
}
