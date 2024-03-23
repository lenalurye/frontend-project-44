import askUser from './cli.js';

const rightAnswersToWin = 3;
const wrongAnswersToLose = 1;

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

export const runGame = (name, makeProblem) => {
  let rightAnswersCount = 0;
  let wrongAnswerCount = 0;

  while (rightAnswersCount < rightAnswersToWin && wrongAnswerCount < wrongAnswersToLose) {
    const [question, correctAnswer] = makeProblem();
    if (isAnswerCorrect(name, question, correctAnswer)) {
      rightAnswersCount += 1;
    } else {
      wrongAnswerCount += 1;
    }
    if (rightAnswersCount === rightAnswersToWin) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
