import { greeting, isAnswerCorrect } from './index.js';

const brainCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  let rightAnswersCount = 0;
  let wrongAnswerCount = 0;

  while (rightAnswersCount < 3 && wrongAnswerCount < 1) {
    const number1 = Math.floor(Math.random() * 100) + 1; // генерация случайного числа
    const number2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      default: // тут eslint против третьего case и требует default. Здесь реализрван case с '*'
        correctAnswer = number1 * number2;
        break;
    }
    const expression = `${number1} ${randomOperator} ${number2}`;
    if (isAnswerCorrect(name, expression, correctAnswer)) {
      rightAnswersCount += 1;
    } else {
      wrongAnswerCount += 1;
    }
    if (rightAnswersCount === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default brainCalc;
