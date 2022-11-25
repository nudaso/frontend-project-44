#! /usr/bin/env node
import { startGame, rnd } from '../../src/index.js';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  return a > b ? gcd(a - b, b) : gcd(a, b - a);
};

const arr = [];
const essenceMassage = 'Find the greatest common divisor of given numbers.';

for (let i = 0; i < 3; i += 1) {
  const num1 = rnd(100, 1);
  const num2 = rnd(100, 1);
  const question = `${num1} ${num2}`;
  const answer = `${gcd(num1, num2)}`;
  arr.push([question, answer]);
}

startGame(arr, essenceMassage);
