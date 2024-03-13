import askUser from './cli.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = askUser('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const isAnswerCorrect = (name, question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const answer = askUser('Your answer: ');
  if (answer === `${correctAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
