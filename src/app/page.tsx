'use client';
import { useState } from 'react';
import { addGreeting } from './api/greetingAction';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = await addGreeting(input);
    setResult(greeting);
    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold mb-4">테스트입니다 이름을 입력해보세요!</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded mb-4 text-black"
          placeholder="이름을 입력하세요"
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          인사하기
        </button>
      </form>
      {result && (
        <div className="text-lg font-bold">
          {result}
        </div>
      )}
    </div>
  );
}