import readlineSync from 'readline-sync';
import chalk from 'chalk';
import greetUser from './cli.js';

const isEven = (num) => num % 2 === 0;

const play = () => {
  console.log(chalk.blue('¡Bienvenido a Brain Games!'));
  const userName = greetUser();
  console.log(`¡Hola, ${userName}!`);
  console.log(chalk.yellow('Responde "yes" si el número es par, de lo contrario responde "no".'));

  const round = 3;

  for (let i = 0; i < round; i += 1) {
    const randNum = Math.floor(Math.random() * 100);
    console.log(chalk.cyan(`Pregunta: ${randNum}`));

    const useAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();
    const correctAnswer = isEven(randNum) ? 'yes' : 'no';

    if (useAnswer !== 'yes' && useAnswer !== 'no') {
      console.log(chalk.red(`"${useAnswer}" no es una respuesta válida. Intenta nuevamente.`));
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      i -= 1;
      return;
    }

    if (useAnswer === correctAnswer) {
      console.log(chalk.green('¡Correcto!'));
    } else {
      console.log(chalk.red(`'${useAnswer}' es una respuesta incorrecta. La respuesta correcta era '${correctAnswer}'.`));
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }
  console.log(chalk.magenta(`¡Felicidades, ${userName}!`));
};

export default play;
