import readlineSync from 'readline-sync';

export default (prompt) => {
  const answer = readlineSync.question(prompt);
  return answer;
};
