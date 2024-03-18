import { greeting, isAnswerCorrect } from './index.js';

const gcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0) { // а - это остаток от деления
    if (a < b) {
      const temp = b; // меняем местами а и б
      b = a;
      a = temp;
    }
    a %= b; // записываем остаток в переменную а
  }
  return b; // возвращается последний делитель
};

const brainGcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let rightAnswersCount = 0;
  let wrongAnswerCount = 0;

  while (rightAnswersCount < 3 && wrongAnswerCount < 1) {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const question = `${a} ${b}`;
    if (isAnswerCorrect(name, question, gcd(a, b))) {
      rightAnswersCount += 1;
    } else {
      wrongAnswerCount += 1;
    }
    if (rightAnswersCount === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainGcd;
