import { greeting, runGame } from '../index.js';

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

  runGame(name, () => {
    const number = Math.floor(Math.random() * 101) + 1;
    const isNumberPrime = isPrime(number);
    const correctAnswer = isNumberPrime ? 'yes' : 'no'; // если число простое, то в correctAnswer запишется 'yes'. если нет - 'no'.
    return [number, correctAnswer];
  });
};

export default brainPrime;
