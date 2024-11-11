'use server';

export async function addGreeting(input: string) {
  return `${input}님 반갑습니다!`;
}