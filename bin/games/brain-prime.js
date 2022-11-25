#! /usr/bin/env node
import { startGame, rnd } from '../../src/index.js';

const arr = [];
const essenceMassage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let i = Math.ceil(Math.sqrt(number)); i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < 3; i += 1) {
  const question = rnd(100, 1);
  const answer = isPrime(question) ? 'yes' : 'no';
  arr.push([question, answer]);
}

startGame(arr, essenceMassage);
