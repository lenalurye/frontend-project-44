import { greeting, runGame } from '../index.js';

const brainEven = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  runGame(name, () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const isEven = number % 2 === 0; // сюда запишется true или false
    const correctAnswer = isEven ? 'yes' : 'no'; // если число четное, то в correctAnswer запишется 'yes'. если нет - 'no'.
    return [number, correctAnswer];
  });
};
export default brainEven;
