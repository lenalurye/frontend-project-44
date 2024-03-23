import {
  greeting, isAnswerCorrect, rightAnswersToWin, wrongAnswersToLose,
} from '../index.js';

const brainEven = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswersCount = 0;
  let wrongAnswerCount = 0;

  while (rightAnswersCount < rightAnswersToWin && wrongAnswerCount < wrongAnswersToLose) {
    const number = Math.floor(Math.random() * 100) + 1;
    const isEven = number % 2 === 0; // сюда запишется true или false
    const correctAnswer = isEven ? 'yes' : 'no'; // если число четное, то в correctAnswer запишется 'yes'. если нет - 'no'.
    if (isAnswerCorrect(name, number, correctAnswer)) {
      rightAnswersCount += 1;
    } else {
      wrongAnswerCount += 1;
    }
    if (rightAnswersCount === rightAnswersToWin) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainEven;
