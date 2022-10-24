import readLineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
};

export const yourName = () => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
