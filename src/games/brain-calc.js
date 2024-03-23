import { greeting, runGame } from '../index.js';

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return "This operator doesn't exist";
  }
};

const brainCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  runGame(name, () => {
    const number1 = Math.floor(Math.random() * 100) + 1; // генерация случайного числа
    const number2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const correctAnswer = calculate(number1, randomOperator, number2);
    const expression = `${number1} ${randomOperator} ${number2}`;
    return [expression, correctAnswer];
  });
};
export default brainCalc;
