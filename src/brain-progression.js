import { greeting, isAnswerCorrect } from './index.js';

const makeProgression = (a1, count, d) => {
  const progression = [];
  let number = a1;

  for (let i = 0; i < count; i += 1) {
    progression.push(number);
    number += d;
  }
  return progression;
};

const brainProgression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  let rightAnswersCount = 0;
  let wrongAnswerCount = 0;

  while (rightAnswersCount < 3 && wrongAnswerCount < 1) {
    const a1 = Math.floor(Math.random() * 75) + 1;
    const count = Math.floor(Math.random() * 6) + 5; // Math.random возвращает от 0 до 1 не вкл.
    const d = Math.floor(Math.random() * 4) + 2;
    const index = Math.floor(Math.random() * count); // число от 0 до count - 1.
    let progression = makeProgression(a1, count, d);
    const correctAnswer = progression[index]; // записываем правильный ответ
    progression[index] = '..';
    progression = progression.join(' ');

    if (isAnswerCorrect(name, progression, correctAnswer)) {
      rightAnswersCount += 1;
    } else {
      wrongAnswerCount += 1;
    }
    if (rightAnswersCount === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainProgression;
