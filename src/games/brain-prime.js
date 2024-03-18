import { greeting, isAnswerCorrect } from '../index.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  const randomNumber = num;
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let rightAnswersCount = 0;
  let wrongAnswerCount = 0;

  while (rightAnswersCount < 3 && wrongAnswerCount < 1) {
    const number = Math.floor(Math.random() * 101) + 1;
    const isNumberPrime = isPrime(number);
    const correctAnswer = isNumberPrime ? 'yes' : 'no'; // если число простое, то в correctAnswer запишется 'yes'. если нет - 'no'.
    if (isAnswerCorrect(name, number, correctAnswer)) {
      rightAnswersCount += 1;
    } else {
      wrongAnswerCount += 1;
    }
    if (rightAnswersCount === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainPrime;
