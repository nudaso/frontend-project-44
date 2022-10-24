#! /usr/bin/env node
import { startGame, rnd } from '../../src/index.js';

const generateAnswer = (idOperator, num1, num2) => {
  if (idOperator === 0) {
    return String(num1 + num2);
  }
  if (idOperator === 1) {
    return String(num1 - num2);
  }
  return String(num1 * num2);
};

const arr = [];
const essenceMassage = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
for (let i = 0; i < 3; i += 1) {
  const num1 = rnd();
  const num2 = rnd();
  const idOperator = rnd(2);
  const question = `${num1} ${operators[idOperator]} ${num2}`;
  const answer = generateAnswer(idOperator, num1, num2);
  arr.push([question, answer]);
}
startGame(arr, essenceMassage);
