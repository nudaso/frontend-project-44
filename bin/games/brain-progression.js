#! /usr/bin/env node
import { startGame, rnd } from '../../src/index.js';

const arr = [];
const essenceMassage = 'What number is missing in the progression?';
const indexArr = [];
const createIndex = (n) => {
  const index = rnd(n - 1);
  if (indexArr.includes(index)) {
    return createIndex(n);
  }
  return index;
};
for (let i = 0; i < 3; i += 1) {
  const start = rnd(30);
  const step = rnd(10, 1);
  const n = rnd(10, 7);
  const index = createIndex(n);
  const answer = `${start + step * index}`;
  const question = [];
  for (let j = 0; j < n; j += 1) {
    const add = j === index ? '..' : start + step * j;
    question.push(add);
  }
  arr.push([question.join(' '), answer]);
}

startGame(arr, essenceMassage);
