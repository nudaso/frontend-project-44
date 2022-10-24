#! /usr/bin/env node
import { startGame, rnd } from '../../src/index.js';

const arr = [];
const essenceMassage = 'Answer "yes" if the number is even, otherwise answer "no".';
for (let i = 0; i < 3; i += 1) {
  const question = rnd();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  arr.push([question, answer]);
}
startGame(arr, essenceMassage);
