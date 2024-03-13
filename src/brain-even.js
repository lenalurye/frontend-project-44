import question from './cli.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswersCount = 0;
  let wrongAnswer = 0;

  while (rightAnswersCount < 3 && wrongAnswer < 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = question('Your answer: ');
    const isEven = number % 2 === 0; // сюда запишется true или false
    const correctAnswer = isEven ? 'yes' : 'no'; // если число четное, то в correctAnswer запишется 'yes'. если нет - 'no'.
    if (answer === correctAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
      if (rightAnswersCount === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      wrongAnswer += 1;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
export default brainEven;
