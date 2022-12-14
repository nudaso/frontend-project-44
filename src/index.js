import readLineSync from 'readline-sync';
import { hello, yourName } from './cli.js';

const checkAnswer = (correctAnswer, currentAnswer) => {
  if (correctAnswer === currentAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readLineSync.question('Your answer: ');
  return answer;
};

const startGame = (listOfQuestionAnswer, essenceMassage) => {
  hello();
  const name = yourName();
  console.log(essenceMassage);
  for (let i = 0; i < listOfQuestionAnswer.length; i += 1) {
    const [question, correctAnswer] = listOfQuestionAnswer[i];
    if (!checkAnswer(correctAnswer, getAnswer(question))) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const rnd = (max = 50, min = 0) => Math.floor(min + Math.random() * (max - min + 1));

export {
  startGame,
  rnd,
};
