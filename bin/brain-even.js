#! /usr/bin/env node
import readLineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

console.log('Welcome to the Brain Games!');
const name = readLineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let flag = true;
for (let i = 0; i < 3; i+=1) {
  const rnd = Math.floor(Math.random() * (50+1));
  console.log(`Question: ${rnd}`);
  const answer = readLineSync.question('Your answer: ');
  const correctAnswer = isEven(rnd) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    flag = false;
    break;
  }
}
if (flag) {
  console.log(`Congratulations, ${name}!`);
}