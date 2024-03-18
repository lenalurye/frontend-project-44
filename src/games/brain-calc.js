import { greeting, isAnswerCorrect } from '../index.js';

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default: // тут eslint против третьего case и требует default. Здесь реализрван case с '*'
      return number1 * number2;
  }
};

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
    const correctAnswer = calculate(number1, randomOperator, number2);
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
